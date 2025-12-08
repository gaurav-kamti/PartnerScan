// Display email from sessionStorage
const verifyEmail = sessionStorage.getItem('verifyEmail');
const emailDisplay = document.getElementById('emailDisplay');
if (verifyEmail) {
  emailDisplay.textContent = verifyEmail;
} else {
  emailDisplay.textContent = 'your email';
}

// Auto-focus and move to next input
const otpInputs = [
  document.getElementById('otp1'),
  document.getElementById('otp2'),
  document.getElementById('otp3'),
  document.getElementById('otp4'),
  document.getElementById('otp5'),
  document.getElementById('otp6')
];

otpInputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    if (e.target.value.length === 1 && index < 5) {
      otpInputs[index + 1].focus();
    }
  });
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
  
  // Only allow numbers
  input.addEventListener('keypress', (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  });
});

// Focus first input on load
otpInputs[0].focus();

// Handle form submission
document.getElementById('verifyForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const otp = otpInputs.map(input => input.value).join('');
  
  if (otp.length !== 6) {
    showToast('Please enter all 6 digits', 'error');
    return;
  }
  
  showLoading('Verifying...');
  
  try {
    const response = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ otp })
    });
    
    const data = await response.json();
    hideLoading();
    
    if (response.ok) {
      showToast('Email verified successfully! 🎉', 'success');
      setTimeout(() => window.location.href = '/dashboard', 1500);
    } else {
      showToast(data.error || 'Invalid code', 'error');
      document.getElementById('error').textContent = data.error;
      // Clear inputs
      otpInputs.forEach(input => input.value = '');
      otpInputs[0].focus();
    }
  } catch (error) {
    hideLoading();
    showToast('Network error. Please try again.', 'error');
  }
});

// Resend OTP with 2-minute cooldown
const resendBtn = document.getElementById('resendBtn');
let resendCooldown = false;

function startResendTimer() {
  resendCooldown = true;
  resendBtn.disabled = true;
  let timeLeft = 120; // 2 minutes in seconds
  
  const originalText = resendBtn.textContent;
  
  const timer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    resendBtn.textContent = `Resend Code (${minutes}:${seconds.toString().padStart(2, '0')})`;
    timeLeft--;
    
    if (timeLeft < 0) {
      clearInterval(timer);
      resendBtn.textContent = originalText;
      resendBtn.disabled = false;
      resendCooldown = false;
    }
  }, 1000);
}

// Start timer on page load
startResendTimer();

resendBtn.addEventListener('click', async () => {
  if (resendCooldown) return;
  
  try {
    const response = await fetch('/api/resend-otp', { method: 'POST' });
    const data = await response.json();
    
    if (response.ok) {
      showToast('New code sent! Check your email 📧', 'success');
      startResendTimer();
    } else {
      showToast(data.error || 'Failed to resend code', 'error');
    }
  } catch (error) {
    showToast('Network error', 'error');
  }
});
