// Handle signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address', 'error');
      document.getElementById('error').textContent = 'Please enter a valid email address';
      return;
    }
    
    // Validate password match
    if (password !== confirmPassword) {
      showToast('Passwords do not match', 'error');
      document.getElementById('error').textContent = 'Passwords do not match';
      return;
    }
    
    // Validate password length
    if (password.length < 6) {
      showToast('Password must be at least 6 characters', 'error');
      document.getElementById('error').textContent = 'Password must be at least 6 characters';
      return;
    }
    
    showLoading('Creating your account...');
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      
      const data = await response.json();
      hideLoading();
      
      if (response.ok) {
        if (data.needsVerification) {
          sessionStorage.setItem('verifyEmail', email);
          showToast('Account created! Please verify your email 📧', 'success');
          setTimeout(() => window.location.href = '/verify-otp', 1500);
        } else {
          showToast('Account created successfully! 🎉', 'success');
          setTimeout(() => window.location.href = '/dashboard', 1000);
        }
      } else {
        showToast(data.error || 'Signup failed', 'error');
        document.getElementById('error').textContent = data.error;
      }
    } catch (error) {
      hideLoading();
      showToast('Network error. Please try again.', 'error');
      document.getElementById('error').textContent = 'Something went wrong';
    }
  });
}

// Handle login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address', 'error');
      document.getElementById('error').textContent = 'Please enter a valid email address';
      return;
    }
    
    showLoading('Logging you in...');
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      hideLoading();
      
      if (response.ok) {
        if (data.needsVerification) {
          sessionStorage.setItem('verifyEmail', data.email);
          showToast('Please verify your email to continue 📧', 'success');
          setTimeout(() => window.location.href = '/verify-otp', 1500);
        } else {
          showToast('Login successful! Welcome back 👋', 'success');
          setTimeout(() => window.location.href = '/dashboard', 1000);
        }
      } else {
        showToast(data.error || 'Login failed', 'error');
        document.getElementById('error').textContent = data.error;
      }
    } catch (error) {
      hideLoading();
      showToast('Network error. Please try again.', 'error');
      document.getElementById('error').textContent = 'Something went wrong';
    }
  });
}



// Show/Hide Password Toggle
const showPasswordCheckbox = document.getElementById('showPassword');
if (showPasswordCheckbox) {
  showPasswordCheckbox.addEventListener('change', (e) => {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    
    const type = e.target.checked ? 'text' : 'password';
    passwordField.type = type;
    if (confirmPasswordField) {
      confirmPasswordField.type = type;
    }
  });
}
