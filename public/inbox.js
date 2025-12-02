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
      const detailedAnswers = results.detailedAnswers || [];
      
      // Calculate verdict color based on flags
      const brightGreen = results.brightGreen || 0;
      const green = results.green || 0;
      const lightGreen = results.lightGreen || 0;
      const orange = results.orange || 0;
      const red = results.red || 0;
      const bigRed = results.bigRed || 0;
      
      const totalRed = bigRed + red + orange;
      const totalGreen = brightGreen + green + lightGreen;
      
      let verdictColor;
      if (totalRed >= totalGreen * 2.5) {
        verdictColor = 'darkred';
      } else if (totalRed >= totalGreen * 1.5) {
        verdictColor = 'red';
      } else if (totalGreen >= totalRed * 2) {
        verdictColor = '#006400';
      } else if (totalGreen > totalRed) {
        verdictColor = 'green';
      } else {
        verdictColor = '#d35400';
      }
      
      return `
        <div class="result-card">
          <div class="result-header">
            <div class="result-name">💕 ${session.takerName || 'Anonymous'}</div>
            <div class="result-date">${new Date(session.completedAt).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</div>
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
              <button class="toggle-details" onclick="toggleDetails(${index})">
                View All ${detailedAnswers.length} Answers 📝
              </button>
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
  const button = answersList.previousElementSibling;
  const answerCount = answersList.children.length;
  
  if (answersList.classList.contains('show')) {
    answersList.classList.remove('show');
    button.textContent = `View All ${answerCount} Answers 📝`;
  } else {
    answersList.classList.add('show');
    button.textContent = `Hide Answers ▲`;
  }
}

// Initialize
window.onload = async () => {
  const user = await checkAuth();
  if (!user) return;
  
  loadResults();
};
