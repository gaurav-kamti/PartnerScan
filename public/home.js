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



// Initialize
window.onload = async () => {
  const user = await checkAuth();
  if (!user) return;
  
  document.getElementById('userName').textContent = `Welcome, ${user.name}!`;
  
  // Logout
  document.getElementById('logoutBtn').addEventListener('click', async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/login';
  });
  
  // Full questions for each stage
  const stageQuestions = {
    'situationship': [
      'BJP ya Congress?',
      'City life better hai ya village life?',
      'Normally kab soti ho aur kab jagti ho?',
      'Currently koi male best friend hai ya close male friend?',
      'Kahin koi ladka zyada line maar raha ho toh tu kaise handle karti?',
      'Couple ke beech privacy honi chahiye ya nahi?',
      'Shopping karti ho toh budget banake jaati ho ya dil khol ke shopping?',
      'Agar koi humse puche ki hum dono kya hain, toh tum kya jawab dogi?',
      'Tumhara kya khayal hai, ek \'Acha Time\' kitne din tak \'Acha Relationship\' ban sakta hai?',
      'Agar hum ek doosre se ek hafta baat na karein, toh tum kitni worried hogi?',
      'Tumhara kya vichaar hai ki kya hum dono ko aur logo ko bhi date karna chahiye?',
      'Agar tumhare friends puche ki \'Tumhare aur uske beech kya chal raha hai?\', toh tumhara standard answer kya hoga?',
      'Agar hum dono ke beech \'Feelings\' bahut zyada ho jaayein, toh tumhara agla kadam kya hoga?',
      'Tumhara kya vichaar hai ki hum ek doosre ke \'Family\' ko milne ya unki life mein kitna involve ho sakte hain?',
      'Tumhare liye yeh \'situation\' zyada kya hai - \'Time pass\' ya \'Emotional connection\' ki taraf ek step?'
    ],
    'relationship': [
      'BJP ya Congress?',
      'City life better hai ya village life?',
      'Normally kab soti ho aur kab jagti ho?',
      'Currently koi male best friend hai ya close male friend?',
      'Kahin koi ladka zyada line maar raha ho toh tu kaise handle karti?',
      'Tumhare mummy-papa ke jhagde mein maximum time kon sahi hote the?',
      'Bachpan mein teacher ne class mein daanta toh tum roti thi ya jawab deti thi?',
      'Tumhare ghar ka sabse bada jhagda kis baat pe hua tha jo aaj bhi yaad hai?',
      'Shopping karti ho toh budget banake jaati ho ya dil khol ke shopping?',
      'Agar tumhare best-friends, relatives, parents tumse 3 lac udhaar maange aur bole 5 saal mein lautayega, dogi?',
      'Couple ke beech privacy honi chahiye ya nahi?',
      'Apne future husband mein sabse pehle kya change karogi?',
      'Ek dost jo apni job chhodkar naya business shuru karna chahta hai, use tum kya salah (advice) dogi?',
      'Agar tumhare kisi purane dost se tumhara jhagda ho jaaye aur woh bahut dino baad maafi maange, toh tumhari pehli reaction kya hogi?',
      'Tumhara kya मानना hai ki ek relationship mein, apne partner ke kitne dosto ko importance deni chahiye?'
    ],
    'fiance': [
      'BJP ya Congress?',
      'City life better hai ya village life?',
      'Normally kab soti ho aur kab jagti ho?',
      'Currently koi male best friend hai ya close male friend?',
      'Kahin koi ladka zyada line maar raha ho toh tu kaise handle karti?',
      'Tumhare mummy-papa ke jhagde mein maximum time kon sahi hote the?',
      'Bachpan mein teacher ne class mein daanta toh tum roti thi ya jawab deti thi?',
      'Tumhare ghar ka sabse bada jhagda kis baat pe hua tha jo aaj bhi yaad hai?',
      'Shopping karti ho toh budget banake jaati ho ya dil khol ke shopping?',
      'Agar tumhare best-friends, relatives, parents tumse 3 lac udhaar maange aur bole 5 saal mein lautayega, dogi?',
      'Apne future husband mein sabse pehle kya change karogi?',
      'Shaadi ke kitne saal baad baby planning?',
      'Couple ke beech privacy honi chahiye ya nahi?',
      'Shaadi ke baad paise kaise divide honge?',
      'Husband ki salary ka kitna percent wife ke personal account mein automatically aana chahiye?',
      'Shaadi ke baad phone ka password mujhe dena padega ya privacy bolke taal dogi?',
      'Agar pata chale husband salary chhupa raha hai, first reaction?',
      'Ek dost jo apni job chhodkar naya business shuru karna chahta hai, use tum kya salah (advice) dogi?',
      'Agar tumhare kisi purane dost se tumhara jhagda ho jaaye aur woh bahut dino baad maafi maange, toh tumhari pehli reaction kya hogi?',
      'Tumhara kya मानना hai ki ek relationship mein, apne partner ke kitne dosto ko importance deni chahiye?'
    ]
  };

  // Update question count when stage changes
  const stageRadios = document.querySelectorAll('input[name="relationship-stage"]');
  const questionCount = document.getElementById('questionCount');
  const stageCounts = {
    'situationship': '15 questions',
    'relationship': '15 questions',
    'fiance': '21 questions'
  };
  
  stageRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      questionCount.textContent = stageCounts[radio.value];
    });
  });

  // Info icon tooltip
  const tooltip = document.getElementById('question-tooltip');
  const tooltipBackdrop = document.getElementById('tooltip-backdrop');
  const tooltipContent = document.getElementById('tooltip-content');
  const infoIcons = document.querySelectorAll('.info-icon');
  const closeTooltip = document.querySelector('.close-tooltip');

  function showTooltip(stage) {
    const questions = stageQuestions[stage];
    tooltipContent.innerHTML = questions.map((q, i) => 
      `<div class="question-item">
        <div class="question-number">Q${i + 1}.</div>
        <div>${q}</div>
      </div>`
    ).join('');
    tooltipBackdrop.style.display = 'flex';
  }

  function hideTooltip() {
    tooltipBackdrop.style.display = 'none';
  }

  infoIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const stage = icon.getAttribute('data-stage');
      showTooltip(stage);
    });
  });

  // Prevent clicks inside tooltip from closing it
  tooltip.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close tooltip with X button
  closeTooltip.addEventListener('click', (e) => {
    e.stopPropagation();
    hideTooltip();
  });

  // Close tooltip when clicking on backdrop
  tooltipBackdrop.addEventListener('click', (e) => {
    hideTooltip();
  });

  // Start button - create session
  document.getElementById('startBtn').addEventListener('click', async () => {
    try {
      const selectedStage = document.querySelector('input[name="relationship-stage"]:checked').value;
      
      const response = await fetch('/api/create-session', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage: selectedStage })
      });
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
