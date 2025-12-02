const quizData = [
  {
    category: "Politics",
    question: "BJP ya Congress?",
    choices: [
      "BJP",
      "Congress",
      "Depends on candidate, not party",
      "Neither, I hate politics",
    ],
  },
  {
    category: "Living Arrangement After Marriage",
    question:
      "Shaadi ke baad city mein saath rehne ke liye force karogi ya adjust kar logi agar mera job dusre city mein ho?",
    choices: [
      "Bilkul force karungi, separate nahi reh sakte",
      "Long-distance bhi chalega 2-3 saal",
      "Main ghar pe reh longi",
      "Not asked in original list (question 2 missing)",
    ],
  },
  {
    category: "Parents' Arguments",
    question: "Tere mummy-papa ke jhagde mein maximum time kon sahi hota tha?",
    choices: [
      "Papa mostly sahi",
      "Mummy mostly sahi",
      "Dono barabar / Depends on situation",
      "Main kabhi notice nahi karti thi",
    ],
  },
  {
    category: "City vs Village",
    question: "City life better hai ya village life?",
    choices: [
      "100% city",
      "City hi but peaceful area",
      "Village peaceful hota hai",
      "Abroad best hai",
    ],
  },
];

const choiceToValueMap = {
  Politics: {
    BJP: "Green",
    Congress: "Red",
    "Depends on candidate, not party": "Orange",
    "Neither, I hate politics": "Light Green",
  },
  "Living Arrangement After Marriage": {
    "Bilkul force karungi, separate nahi reh sakte": "Red",
    "Long-distance bhi chalega 2-3 saal": "Green",
    "Main ghar pe reh longi": "Bright Green",
  },
  "Parents' Arguments": {
    "Papa mostly sahi": "Green",
    "Mummy mostly sahi": "Red",
    "Dono barabar / Depends on situation": "Orange",
    "Main kabhi notice nahi karti thi": "Light Green",
  },
  "City vs Village": {
    "100% city": "Orange",
    "City hi but peaceful area": "Green",
    "Village peaceful hota hai": "Bright Green",
    "Abroad best hai": "Red",
  },
};

const userFavorites = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let currentSelection = null;

const area = document.querySelector("#quiz-container");
const resultsScreen = document.querySelector("#results-screen");
const finalResultsList = document.getElementById("final-results");
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");

let brightGreen = 0;
let green = 0;
let lightGreen = 0;
let orange = 0;
let red = 0;
let bigRed = 0;

const loadQuestion = () => {
  if (currentQuestionIndex >= quizData.length) {
    showResults();
    return;
  }

  choicesContainer.innerHTML = "";
  nextButton.disabled = true;
  currentSelection = null;

  const currentQuestion = quizData[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  // Update progress bar
  const progressFill = document.getElementById('progress-fill');
  const progressPercent = ((currentQuestionIndex + 1) / quizData.length) * 100;
  if (progressFill) {
    progressFill.style.width = progressPercent + '%';
  }

  // Update question number
  const questionNumber = document.getElementById('question-number');
  if (questionNumber) {
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  }

  if (currentQuestionIndex === quizData.length - 1) {
    nextButton.textContent = "Finish Survey 💕";
  } else {
    nextButton.textContent = "Next Question 💖";
  }

  currentQuestion.choices.forEach((choice, index) => {
    const label = document.createElement("label");
    label.className = "option-item";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "choice";
    radio.value = choice;
    radio.id = `choice-${index}`;
    radio.addEventListener("change", () => selectAnswer(choice));

    const span = document.createElement("span");
    span.textContent = choice;

    label.appendChild(radio);
    label.appendChild(span);
    choicesContainer.appendChild(label);
  });
};

function selectAnswer(choice) {
  currentSelection = choice;
  nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
  if (!currentSelection) return;

  const currentCategory = quizData[currentQuestionIndex].category;
  userFavorites.push({
    category: currentCategory,
    choice: currentSelection,
  });

  currentQuestionIndex++;
  loadQuestion();
});



function showResults() {
  // Switch screen visibility
  area.style.display = "none";
  resultsScreen.style.display = "block";

  finalResultsList.innerHTML = "";
  brightGreen = green = lightGreen = orange = red = bigRed = 0;

  // Prepare detailed answers array
  const detailedAnswers = [];
  
  userFavorites.forEach((item) => {
    const color = choiceToValueMap[item.category]?.[item.choice] || "N/A";

    if (color === "Bright Green") brightGreen++;
    else if (color === "Green") green++;
    else if (color === "Light Green") lightGreen++;
    else if (color === "Orange") orange++;
    else if (color === "Red") red++;
    else if (color === "Big Red") bigRed++;

    // Add to detailed answers
    detailedAnswers.push({
      question: item.category,
      answer: item.choice,
      flag: color
    });

    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.category}</strong><br>${item.choice}`;
    finalResultsList.appendChild(li);
  });

  const totalRed = bigRed + red + orange;
  const totalGreen = brightGreen + green + lightGreen;

  let verdict = "";

  if (totalRed >= totalGreen * 2.5) {
    verdict = "This relationship shows multiple serious red flags.";
  } else if (totalRed >= totalGreen * 1.5) {
    verdict = "There are several concerning patterns that deserve attention.";
  } else if (totalGreen >= totalRed * 2) {
    verdict = "This relationship shows many healthy, respectful behaviours.";
  } else if (totalGreen > totalRed) {
    verdict = "Overall healthy, with some areas to watch.";
  } else {
    verdict = "The concerns and positive signs are roughly balanced. Reflection is needed.";
  }
  
  // Submit results to server if this is a shared quiz
  submitResultsToServer(verdict, detailedAnswers);
}

// Get session ID from URL
const urlParams = new URLSearchParams(window.location.search);
const sessionId = urlParams.get('sessionId');

// Check if this is a shared quiz
async function checkSession() {
  if (!sessionId) {
    showCuteAlert('Invalid quiz link', () => {
      window.location.href = '/login.html';
    });
    return;
  }
  
  try {
    const response = await fetch(`/api/session/${sessionId}`);
    const session = await response.json();
    
    if (session.completed) {
      // Show already completed message
      showAlreadyCompletedMessage();
      return;
    }
    
    // Ask for user's name with cute modal
    showNameInputModal(session.creatorName);
  } catch (error) {
    showCuteAlert('Session not found', () => {
      window.location.href = '/login.html';
    });
  }
}

// Show cute name input modal
function showNameInputModal(creatorName) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
  `;
  
  const modal = document.createElement('div');
  modal.style.cssText = `
    background: linear-gradient(135deg, #fff5fb 0%, #ffe8f5 100%);
    border-radius: 30px;
    padding: 40px 50px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(255, 105, 180, 0.4);
    border: 3px solid #ffb8d8;
    text-align: center;
    animation: slideIn 0.4s ease;
  `;
  
  modal.innerHTML = `
    <div style="font-size: 3rem; margin-bottom: 15px;">💕</div>
    <h2 style="color: #ff69b4; font-size: 1.8rem; margin-bottom: 15px; font-weight: 700;">
      Welcome!
    </h2>
    <p style="color: #5a3a4a; font-size: 1.1rem; margin-bottom: 25px; line-height: 1.6;">
      <strong>${creatorName}</strong> ne aapko quiz bheja hai 💖<br>
      Apna naam enter karein:
    </p>
    <input 
      type="text" 
      id="nameInput" 
      placeholder="Your name..."
      style="
        width: 100%;
        padding: 15px 20px;
        font-size: 1.1rem;
        border: 3px solid #ffd4e8;
        border-radius: 20px;
        outline: none;
        font-family: 'Segoe UI', sans-serif;
        transition: all 0.3s ease;
        background: white;
        color: #5a3a4a;
        margin-bottom: 20px;
      "
    />
    <button 
      id="startQuizBtn"
      style="
        width: 100%;
        padding: 16px;
        font-size: 1.15rem;
        font-weight: 700;
        background: linear-gradient(135deg, #ff9ec8 0%, #ffb8d8 50%, #ffc8e0 100%);
        color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 8px 20px rgba(255, 105, 180, 0.4);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
      "
    >
      Start Quiz 💖
    </button>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  // Focus on input
  const nameInput = document.getElementById('nameInput');
  setTimeout(() => nameInput.focus(), 100);
  
  // Add hover effect to button
  const startBtn = document.getElementById('startQuizBtn');
  startBtn.addEventListener('mouseenter', () => {
    startBtn.style.transform = 'translateY(-3px) scale(1.05)';
    startBtn.style.boxShadow = '0 12px 30px rgba(255, 105, 180, 0.5)';
  });
  startBtn.addEventListener('mouseleave', () => {
    startBtn.style.transform = 'none';
    startBtn.style.boxShadow = '0 8px 20px rgba(255, 105, 180, 0.4)';
  });
  
  // Add focus effect to input
  nameInput.addEventListener('focus', () => {
    nameInput.style.borderColor = '#ffb8d8';
    nameInput.style.boxShadow = '0 0 0 4px rgba(255, 184, 216, 0.2)';
  });
  nameInput.addEventListener('blur', () => {
    nameInput.style.borderColor = '#ffd4e8';
    nameInput.style.boxShadow = 'none';
  });
  
  // Handle submit
  const handleSubmit = () => {
    const userName = nameInput.value.trim();
    if (!userName) {
      nameInput.style.borderColor = '#ff6b9d';
      nameInput.placeholder = 'Please enter your name...';
      nameInput.focus();
      return;
    }
    
    window.quizTakerName = userName;
    
    // Animate out
    modal.style.animation = 'slideOut 0.4s ease forwards';
    overlay.style.animation = 'fadeOut 0.3s ease forwards';
    
    setTimeout(() => {
      overlay.remove();
      loadQuestion();
    }, 400);
  };
  
  startBtn.addEventListener('click', handleSubmit);
  nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  });
}

// Show cute alert
function showCuteAlert(message, callback) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
  `;
  
  const modal = document.createElement('div');
  modal.style.cssText = `
    background: linear-gradient(135deg, #fff5fb 0%, #ffe8f5 100%);
    border-radius: 30px;
    padding: 40px 50px;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(255, 105, 180, 0.4);
    border: 3px solid #ffb8d8;
    text-align: center;
    animation: slideIn 0.4s ease;
  `;
  
  modal.innerHTML = `
    <div style="font-size: 3rem; margin-bottom: 15px;">💔</div>
    <p style="color: #5a3a4a; font-size: 1.2rem; margin-bottom: 25px; line-height: 1.6;">
      ${message}
    </p>
    <button 
      id="alertOkBtn"
      style="
        padding: 14px 40px;
        font-size: 1.1rem;
        font-weight: 700;
        background: linear-gradient(135deg, #ff9ec8 0%, #ffb8d8 50%, #ffc8e0 100%);
        color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 8px 20px rgba(255, 105, 180, 0.4);
      "
    >
      OK
    </button>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  const okBtn = document.getElementById('alertOkBtn');
  okBtn.addEventListener('click', () => {
    modal.style.animation = 'slideOut 0.4s ease forwards';
    overlay.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => {
      overlay.remove();
      if (callback) callback();
    }, 400);
  });
}

// Show message when quiz is already completed
function showAlreadyCompletedMessage() {
  area.style.display = 'none';
  resultsScreen.style.display = 'none';
  
  const completedDiv = document.createElement('div');
  completedDiv.style.cssText = `
    max-width: 600px;
    margin: 100px auto;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 30px;
    padding: 60px 40px;
    text-align: center;
    box-shadow: 0 20px 60px rgba(255, 105, 180, 0.3);
    border: 3px solid #ffb8d8;
    position: relative;
    z-index: 1;
  `;
  completedDiv.innerHTML = `
    <div style="font-size: 4rem; margin-bottom: 20px;">💕</div>
    <h2 style="color: #ff69b4; font-size: 2rem; margin-bottom: 15px;">Already Completed!</h2>
    <p style="color: #5a3a4a; font-size: 1.2rem; line-height: 1.6;">
      This quiz has already been completed.<br>
      Thank you for your interest! 💖
    </p>
  `;
  
  document.body.appendChild(completedDiv);
}

// Submit results to server
async function submitResultsToServer(verdict, detailedAnswers) {
  if (sessionId) {
    try {
      const payload = {
        sessionId,
        userName: window.quizTakerName,
        results: {
          brightGreen,
          green,
          lightGreen,
          orange,
          red,
          bigRed,
          verdict,
          detailedAnswers  // Send all answers
        }
      };
      
      const response = await fetch('/api/submit-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      // Remove the button with animation
      const restartBtn = document.getElementById('restart-button');
      if (restartBtn) {
        // Animate button before removing
        restartBtn.style.transition = 'all 0.5s ease';
        restartBtn.style.transform = 'scale(0)';
        restartBtn.style.opacity = '0';
        
        setTimeout(() => {
          restartBtn.remove();
        }, 500);
        
        // Add confetti effect
        createConfetti();
        
        // Show a cute message overlay
        showThankYouMessage();
      }
    } catch (error) {
      // Error submitting results
    }
  }
}

// Show thank you overlay message
function showThankYouMessage() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: linear-gradient(135deg, #ff9ec8, #ffb8d8);
    color: white;
    padding: 40px 60px;
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(255, 105, 180, 0.5);
    z-index: 10000;
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    animation: popIn 0.5s ease forwards;
    border: 4px solid white;
  `;
  overlay.innerHTML = `
    <div style="font-size: 3rem; margin-bottom: 15px;">💕</div>
    <div>Thank You!</div>
    <div style="font-size: 1.2rem; margin-top: 10px; font-weight: normal;">Your answers have been sent 💖</div>
  `;
  
  document.body.appendChild(overlay);
  
  // Remove after 3 seconds
  setTimeout(() => {
    overlay.style.animation = 'popOut 0.5s ease forwards';
    setTimeout(() => overlay.remove(), 500);
  }, 3000);
}

// Cute confetti effect
function createConfetti() {
  const confettiCount = 30;
  const colors = ['💕', '💖', '💗', '💓', '💝', '✨', '🌸', '🎀'];
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.textContent = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-50px';
    confetti.style.fontSize = '2rem';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s linear forwards`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 4000);
  }
}

// Add all animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
  @keyframes confettiFall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  @keyframes popIn {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
  
  @keyframes popOut {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-50px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(animationStyles);

// Initialize the survey on page load
window.onload = checkSession;
