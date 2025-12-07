// Get session ID from URL
const urlParams = new URLSearchParams(window.location.search);
const sessionId = urlParams.get('id');

if (!sessionId) {
  showError('No session ID provided');
} else {
  loadResult();
}

async function loadResult() {
  try {
    const response = await fetch(`/api/result/${sessionId}`);
    
    if (!response.ok) {
      showError('Result not found or not available');
      return;
    }
    
    const session = await response.json();
    displayResult(session);
  } catch (error) {
    showError('Failed to load result');
  }
}

function displayResult(session) {
  const results = session.results || {};
  let detailedAnswers = results.detailedAnswers || [];
  
  // Sort answers by original question order
  detailedAnswers = [...detailedAnswers].sort((a, b) => {
    const indexA = a.originalIndex !== undefined ? a.originalIndex : 999;
    const indexB = b.originalIndex !== undefined ? b.originalIndex : 999;
    return indexA - indexB;
  });
  
  // Calculate verdict color
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
  
  const container = document.getElementById('result-content');
  
  container.innerHTML = `
    <div class="result-card">
      <div class="result-name">💕 ${session.takerName || 'Anonymous'}</div>
      
      <div class="flag-summary">
        <div class="flag-item" style="border-color: #006400;">
          <div class="flag-label">Bright Green</div>
          <div class="flag-count">${brightGreen}</div>
        </div>
        <div class="flag-item" style="border-color: #228B22;">
          <div class="flag-label">Green</div>
          <div class="flag-count">${green}</div>
        </div>
        <div class="flag-item" style="border-color: #90EE90;">
          <div class="flag-label">Light Green</div>
          <div class="flag-count">${lightGreen}</div>
        </div>
        <div class="flag-item" style="border-color: #FF8C00;">
          <div class="flag-label">Orange</div>
          <div class="flag-count">${orange}</div>
        </div>
        <div class="flag-item" style="border-color: #DC143C;">
          <div class="flag-label">Red</div>
          <div class="flag-count">${red}</div>
        </div>
        <div class="flag-item" style="border-color: #8B0000;">
          <div class="flag-label">Big Red</div>
          <div class="flag-count">${bigRed}</div>
        </div>
      </div>
      
      <div class="verdict" style="background: ${verdictColor};">
        ${results.verdict || 'No verdict available'}
      </div>
      
      ${detailedAnswers.length > 0 ? `
        <div class="answers-section">
          <div class="answers-title">📝 Detailed Answers</div>
          ${detailedAnswers.map((answer, i) => `
            <div class="answer-item">
              <div class="answer-question">Q${i + 1}. ${answer.question}</div>
              <div class="answer-text">→ ${answer.answer}</div>
              <span class="answer-flag flag-${answer.flag.toLowerCase().replace(/ /g, '-')}">${answer.flag}</span>
            </div>
          `).join('')}
        </div>
      ` : `
        <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 12px; color: #999;">
          <p style="margin: 0;">📝 No detailed answers available</p>
        </div>
      `}
    </div>
  `;
}

function showError(message) {
  const container = document.getElementById('result-content');
  container.innerHTML = `
    <div class="error-message">
      <div style="font-size: 5rem; margin-bottom: 20px;">❌</div>
      <h2>${message}</h2>
      <p>Please check the link and try again.</p>
    </div>
  `;
}
