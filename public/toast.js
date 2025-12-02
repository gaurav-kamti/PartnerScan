// Toast Notification System
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }[type] || 'ℹ';
  
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Loading Overlay
function showLoading(message = 'Loading...') {
  const existing = document.getElementById('loading-overlay');
  if (existing) return;
  
  const overlay = document.createElement('div');
  overlay.id = 'loading-overlay';
  overlay.innerHTML = `
    <div class="loading-spinner"></div>
    <p class="loading-text">${message}</p>
  `;
  document.body.appendChild(overlay);
}

function hideLoading() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.classList.add('fade-out');
    setTimeout(() => overlay.remove(), 300);
  }
}

// Add styles
const style = document.createElement('style');
style.textContent = `
  .toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 350px;
  }
  
  .toast.show {
    transform: translateX(0);
  }
  
  .toast-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
  }
  
  .toast-success .toast-icon {
    background: #10b981;
    color: white;
  }
  
  .toast-error .toast-icon {
    background: #ef4444;
    color: white;
  }
  
  .toast-warning .toast-icon {
    background: #f59e0b;
    color: white;
  }
  
  .toast-info .toast-icon {
    background: #3b82f6;
    color: white;
  }
  
  .toast-message {
    color: #333;
    font-weight: 500;
  }
  
  #loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease;
  }
  
  #loading-overlay.fade-out {
    animation: fadeOut 0.3s ease;
  }
  
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  .loading-text {
    color: white;
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  
  @media (max-width: 768px) {
    .toast {
      right: 10px;
      left: 10px;
      max-width: none;
    }
  }
`;
document.head.appendChild(style);

// Export functions
window.showToast = showToast;
window.showLoading = showLoading;
window.hideLoading = hideLoading;
