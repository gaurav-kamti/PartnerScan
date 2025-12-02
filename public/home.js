// Check authentication
async function checkAuth() {
  try {
    const response = await fetch('/api/me');
    if (!response.ok) {
      window.location.href = '/login.html';
      return null;
    }
    return await response.json();
  } catch (error) {
    window.location.href = '/login.html';
    return null;
  }
}



// Initialize
window.onload = async () => {
  const user = await checkAuth();
  if (!user) return;
  
  document.getElementById('userName').textContent = `Welcome, ${user.name}!`;
  
  // Logout
  document.getElementById('logoutBtn').addEventListener('click', async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/login.html';
  });
  
  // Start button - create session
  document.getElementById('startBtn').addEventListener('click', async () => {
    try {
      const response = await fetch('/api/create-session', { method: 'POST' });
      const data = await response.json();
      
      document.getElementById('linkInput').value = data.shareLink;
      document.getElementById('shareLink').style.display = 'block';
      
      // Copy link functionality
      document.getElementById('copyBtn').addEventListener('click', () => {
        document.getElementById('linkInput').select();
        document.execCommand('copy');
        
        // Show cute copied message
        const btn = document.getElementById('copyBtn');
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        }, 2000);
      });
    } catch (error) {
      alert('Error creating session');
    }
  });
};
