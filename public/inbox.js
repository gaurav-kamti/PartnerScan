// Check authentication
async function checkAuth() {
  try {
    const response = await fetch('/api/me');
    if (!response.ok) {
      window.location.href = '/login';
      return null;
    }
    return await response.json();
  } catch (error) {
    window.location.href = '/login';
    return null;
  }
}

// Load results
async function loadResults() {
  try {
    const response = await fetch('/api/my-sessions');
    const sessions = await response.json();
    
    const container = document.getElementById('results-container');
    
    // Filter only completed sessions
    const completedSessions = sessions.filter(s => s.completed);
    
    if (completedSessions.length === 0) {
      container.innerHTML = `
        <div class="empty-inbox">
          <div class="empty-inbox-icon">💌</div>
          <h2>No Results Yet</h2>
          <p>When someone completes your quiz, their results will appear here!</p>
        </div>
      `;
      return;
    }
    
    container.innerHTML = completedSessions.map((session, index) => {
      const results = session.results || {};
      let detailedAnswers = results.detailedAnswers || [];
      
      // Sort answers by original question order
      detailedAnswers = [...detailedAnswers].sort((a, b) => {
        const indexA = a.originalIndex !== undefined ? a.originalIndex : 999;
        const indexB = b.originalIndex !== undefined ? b.originalIndex : 999;
        return indexA - indexB;
      });
      
      // Calculate verdict color based on weighted points
      const brightGreen = results.brightGreen || 0;
      const green = results.green || 0;
      const lightGreen = results.lightGreen || 0;
      const orange = results.orange || 0;
      const red = results.red || 0;
      const bigRed = results.bigRed || 0;
      
      const totalRedPoints = (orange * 0.5) + (red * 1) + (bigRed * 2);
      const totalGreenPoints = (lightGreen * 0.5) + (green * 1) + (brightGreen * 2);
      
      let verdictColor;
      if (totalRedPoints >= totalGreenPoints * 2.5) {
        verdictColor = 'darkred';
      } else if (totalRedPoints >= totalGreenPoints * 1.5) {
        verdictColor = 'red';
      } else if (totalGreenPoints >= totalRedPoints * 2) {
        verdictColor = '#006400';
      } else if (totalGreenPoints > totalRedPoints) {
        verdictColor = 'green';
      } else {
        verdictColor = '#d35400';
      }
      
      return `
        <div class="result-card" id="session-${session.id}">
          <div class="result-header">
            <div>
              <div class="result-name">💕 ${session.takerName || 'Anonymous'}</div>
            </div>
            <div style="text-align: right;">
              <div class="result-date">${new Date(session.completedAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</div>
              <button onclick="deleteSession('${session.id}')" style="margin-top: 8px; padding: 6px 12px; background: #ff4444; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.85rem; transition: all 0.3s ease;" onmouseover="this.style.background='#cc0000'" onmouseout="this.style.background='#ff4444'">Delete</button>
            </div>
          </div>
          
          <div class="flag-summary">
            <div class="flag-item">
              <div class="flag-label">Bright Green</div>
              <div class="flag-count">${results.brightGreen || 0}</div>
            </div>
            <div class="flag-item">
              <div class="flag-label">Green</div>
              <div class="flag-count">${results.green || 0}</div>
            </div>
            <div class="flag-item">
              <div class="flag-label">Light Green</div>
              <div class="flag-count">${results.lightGreen || 0}</div>
            </div>
            <div class="flag-item">
              <div class="flag-label">Orange</div>
              <div class="flag-count">${results.orange || 0}</div>
            </div>
            <div class="flag-item">
              <div class="flag-label">Red</div>
              <div class="flag-count">${results.red || 0}</div>
            </div>
            <div class="flag-item">
              <div class="flag-label">Big Red</div>
              <div class="flag-count">${results.bigRed || 0}</div>
            </div>
          </div>
          
          <div class="verdict" style="background: ${verdictColor};">
            ${results.verdict || 'No verdict available'}
          </div>
          
          ${detailedAnswers.length > 0 ? `
            <div class="detailed-answers">
              <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                <button class="toggle-details" id="toggle-btn-${index}" onclick="toggleDetails(${index})" style="flex: 1;">
                  View All ${detailedAnswers.length} Answers 📝
                </button>
                <button class="toggle-details" onclick="shareResults(${index}, '${(session.takerName || 'Anonymous').replace(/'/g, "\\'")}', ${JSON.stringify(results).replace(/"/g, '&quot;')}, ${JSON.stringify(detailedAnswers).replace(/"/g, '&quot;')})" style="width: 60px; padding: 12px 10px; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center;" title="Share Results">
                  <img src="/images/share-icon.svg" alt="Share" style="width: 20px; height: 20px; filter: brightness(0) invert(1);">
                </button>
              </div>
              <div class="answers-list" id="answers-${index}">
                ${detailedAnswers.map((answer, i) => `
                  <div class="answer-item">
                    <div class="answer-question">Q${i + 1}. ${answer.question}</div>
                    <div class="answer-text">→ ${answer.answer}</div>
                    <span class="answer-flag flag-${answer.flag.toLowerCase().replace(/ /g, '-')}">${answer.flag}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : `
            <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 12px; color: #999;">
              <p style="margin: 0;">📝 No detailed answers available</p>
              <p style="margin: 5px 0 0; font-size: 0.85rem;">This quiz was taken before detailed answers were added.</p>
              <p style="margin: 5px 0 0; font-size: 0.85rem;">Create a new quiz link to get detailed answers!</p>
            </div>
          `}
        </div>
      `;
    }).join('');
  } catch (error) {
    // Error loading results
  }
}

// Toggle detailed answers
function toggleDetails(index) {
  const answersList = document.getElementById(`answers-${index}`);
  const button = document.getElementById(`toggle-btn-${index}`);
  const answerCount = answersList.children.length;
  
  if (answersList.classList.contains('show')) {
    answersList.classList.remove('show');
    button.textContent = `View All ${answerCount} Answers 📝`;
  } else {
    answersList.classList.add('show');
    button.textContent = `Hide Answers ▲`;
  }
}

// Share results
async function shareResults(index, takerName, results, detailedAnswers) {
  // Get session ID from the sessions array
  const response = await fetch('/api/my-sessions');
  const sessions = await response.json();
  const completedSessions = sessions.filter(s => s.completed);
  const session = completedSessions[index];
  
  if (!session) {
    showToast('Session not found', 'error');
    return;
  }
  
  const shareUrl = `${window.location.origin}/result?id=${session.id}`;
  
  // Try to use Web Share API if available
  if (navigator.share) {
    try {
      await navigator.share({
        title: `PartnerScan Results - ${takerName}`,
        text: `Check out ${takerName}'s quiz results! 🎯`,
        url: shareUrl
      });
      showToast('Link shared successfully! 🎉', 'success');
    } catch (error) {
      if (error.name !== 'AbortError') {
        copyToClipboard(shareUrl);
      }
    }
  } else {
    // Fallback to clipboard
    copyToClipboard(shareUrl);
  }
}

// Copy to clipboard
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Results copied to clipboard! 📋', 'success');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

// Fallback copy method
function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('Results copied to clipboard! 📋', 'success');
  } catch (err) {
    showToast('Could not copy results. Please try again.', 'error');
  }
  document.body.removeChild(textarea);
}

// Delete session
async function deleteSession(sessionId) {
  if (!confirm('Are you sure you want to delete this result? This action cannot be undone.')) {
    return;
  }
  
  try {
    const response = await fetch(`/api/session/${sessionId}`, {
      method: 'DELETE'
    });
    
    if (response.ok) {
      // Remove from DOM with animation
      const card = document.getElementById(`session-${sessionId}`);
      if (card) {
        card.style.transition = 'all 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        setTimeout(() => {
          card.remove();
          // Check if inbox is now empty
          const container = document.getElementById('results-container');
          if (container.children.length === 0) {
            loadResults();
          }
        }, 300);
      }
      showToast('Result deleted successfully', 'success');
      loadSessionsSidebar(); // Reload sidebar
    } else {
      showToast('Failed to delete result', 'error');
    }
  } catch (error) {
    showToast('Failed to delete result', 'error');
  }
}

// Load sessions for sidebar
async function loadSessionsSidebar() {
  try {
    const response = await fetch('/api/my-sessions');
    const sessions = await response.json();
    
    // Filter only pending (not completed) sessions
    const pendingSessions = sessions.filter(s => !s.completed);
    
    const container = document.getElementById('sessions-sidebar');
    
    if (pendingSessions.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 20px; color: #999;">
          <div style="font-size: 2rem; margin-bottom: 10px;">✅</div>
          <p style="font-size: 0.9rem; margin: 0;">No pending sessions</p>
          <p style="font-size: 0.8rem; margin-top: 5px; color: #bbb;">All quizzes completed!</p>
        </div>
      `;
      return;
    }
    
    container.innerHTML = pendingSessions.map(session => {
      let statusBadge = '';
      let statusColor = '';
      
      if (session.expired && !session.completed) {
        statusBadge = '⏰ Expired';
        statusColor = '#888';
      } else if (session.completed) {
        statusBadge = '✅ Completed';
        statusColor = '#4CAF50';
      } else {
        statusBadge = '⏳ Pending';
        statusColor = '#FFA726';
      }
      
      const displayName = session.nickname || (session.completed ? session.takerName : 'Waiting...');
      
      return `
        <div style="background: #f8f9fa; padding: 12px; border-radius: 10px; margin-bottom: 10px; border-left: 4px solid ${statusColor};">
          <div style="font-weight: 600; color: #333; margin-bottom: 5px; font-size: 0.95rem;">${displayName}</div>
          <div style="font-size: 0.8rem; color: #666; margin-bottom: 8px;">
            ${new Date(session.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
          </div>
          <span style="display: inline-block; padding: 4px 8px; background: ${statusColor}; color: white; border-radius: 6px; font-size: 0.75rem; font-weight: 600;">${statusBadge}</span>
        </div>
      `;
    }).join('');
  } catch (error) {
    document.getElementById('sessions-sidebar').innerHTML = `
      <div style="text-align: center; padding: 20px; color: #999;">
        <p style="font-size: 0.9rem;">Failed to load</p>
      </div>
    `;
  }
}

// Initialize
window.onload = async () => {
  const user = await checkAuth();
  if (!user) return;
  
  loadResults();
  loadSessionsSidebar();
};
