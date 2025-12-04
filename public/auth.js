// Handle signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
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
        showToast('Account created successfully! 🎉', 'success');
        setTimeout(() => window.location.href = '/dashboard.html', 1000);
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
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
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
        showToast('Login successful! Welcome back 👋', 'success');
        setTimeout(() => window.location.href = '/dashboard.html', 1000);
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
