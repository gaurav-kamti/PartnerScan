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
  const stageQuestions = {'situationship-female': ['BJP ya Congress?','City life better hai ya village life?','Normally kab soti ho aur kab jagti ho?','Currently koi male best friend hai ya close male friend?','Kahin koi ladka zyada line maar raha ho toh tu kaise handle karti?','Couple ke beech privacy honi chahiye ya nahi?','Shopping karti ho toh budget banake jaati ho ya dil khol ke shopping?','Agar koi humse puche ki hum dono kya hain, toh tum kya jawab dogi?','Tumhara kya khayal hai, ek \'Acha Time\' kitne din tak \'Acha Relationship\' ban sakta hai?','Agar hum ek doosre se ek hafta baat na karein, toh tum kitni worried hogi?','Tumhara kya vichaar hai ki kya hum dono ko aur logo ko bhi date karna chahiye?','Agar tumhare friends puche ki \'Tumhare aur uske beech kya chal raha hai?\', toh tumhara standard answer kya hoga?','Agar hum dono ke beech \'Feelings\' bahut zyada ho jaayein, toh tumhara agla kadam kya hoga?','Tumhara kya vichaar hai ki hum ek doosre ke \'Family\' ko milne ya unki life mein kitna involve ho sakte hain?','Tumhare liye yeh \'situation\' zyada kya hai - \'Time pass\' ya \'Emotional connection\' ki taraf ek step?'],'relationship-female': ['BJP ya Congress?','City life better hai ya village life?','Normally kab soti ho aur kab jagti ho?','Currently koi male best friend hai ya close male friend?','Kahin koi ladka zyada line maar raha ho toh tu kaise handle karti?','Tumhare mummy-papa ke jhagde mein maximum time kon sahi hote the?','Bachpan mein teacher ne class mein daanta toh tum roti thi ya jawab deti thi?','Tumhare ghar ka sabse bada jhagda kis baat pe hua tha jo aaj bhi yaad hai?','Shopping karti ho toh budget banake jaati ho ya dil khol ke shopping?','Agar tumhare best-friends, relatives, parents tumse 3 lac udhaar maange aur bole 5 saal mein lautayega, dogi?','Couple ke beech privacy honi chahiye ya nahi?','Apne future husband mein sabse pehle kya change karogi?','Ek dost jo apni job chhodkar naya business shuru karna chahta hai, use tum kya salah (advice) dogi?','Agar tumhare kisi purane dost se tumhara jhagda ho jaaye aur woh bahut dino baad maafi maange, toh tumhari pehli reaction kya hogi?','Tumhara kya मानना hai ki ek relationship mein, apne partner ke kitne dosto ko importance deni chahiye?'],'fiancee-female': ['BJP ya Congress?','City life better hai ya village life?','Normally kab soti ho aur kab jagti ho?','Currently koi male best friend hai ya close male friend?','Kahin koi ladka zyada line maar raha ho toh tu kaise handle karti?','Tumhare mummy-papa ke jhagde mein maximum time kon sahi hote the?','Bachpan mein teacher ne class mein daanta toh tum roti thi ya jawab deti thi?','Tumhare ghar ka sabse bada jhagda kis baat pe hua tha jo aaj bhi yaad hai?','Shopping karti ho toh budget banake jaati ho ya dil khol ke shopping?','Agar tumhare best-friends, relatives, parents tumse 3 lac udhaar maange aur bole 5 saal mein lautayega, dogi?','Apne future husband mein sabse pehle kya change karogi?','Shaadi ke kitne saal baad baby planning?','Couple ke beech privacy honi chahiye ya nahi?','Shaadi ke baad paise kaise divide honge?','Husband ki salary ka kitna percent wife ke personal account mein automatically aana chahiye?','Shaadi ke baad phone ka password mujhe dena padega ya privacy bolke taal dogi?','Agar pata chale husband salary chhupa raha hai, first reaction?','Ek dost jo apni job chhodkar naya business shuru karna chahta hai, use tum kya salah (advice) dogi?','Agar tumhare kisi purane dost se tumhara jhagda ho jaaye aur woh bahut dino baad maafi maange, toh tumhari pehli reaction kya hogi?','Tumhara kya मानना hai ki ek relationship mein, apne partner ke kitne dosto ko importance deni chahiye?'],'situationship-male': ['Agar main social media par humari photos daalun, toh tum kya expect karoge?','Tum relationship ko kitna time dete ho, before you think about \'next step\'?','Tumhare hisaab se ex-partners se kitna touch mein rehna theek hai?','Agar hum saath mein na hon, toh tumhe kitna \'space\' chahiye hota hai?','Jab tum bahut stressed ya pareshan hote ho, toh tum kis se baat karte ho?','Tumhare liye financial planning kitni important hai, especially long-term mein?','Agar tumhara kisi dost se bada jhagda ho jaye, toh tum use kaise handle karte ho?','Sunday ko 4 ghante mandatory kaam karna pade, ya 4 ghante ki party cancel karni pade, kya choose karoge?','Tumhe kya lagta hai, ek achha insaan hone ke liye sabse important quality kya hai?','Agar main kisi male friend ke saath bahar jaaun, toh tumhari pehli reaction kya hogi?','Jab tum overwhelmed feel karte ho, toh tumhara go-to tareeka kya hai relax karne ka?','Tumhara din kitna structured ya routine-based hota hai?','Fitness aur apne looks pe tum kitna dhyaan dete ho?','Tumhe last time bahut gussa kab aaya tha, aur tumne kya kiya?','Agar main tumhari kisi choti aadat ko change karne ko kahun, toh tumhara reaction kya hoga?'],'relationship-male': ['Agar main tumhe family/friends ko milwaun, toh tum is \'status\' ko kya bologe?','Agar 6-8 mahine baad bhi hum yahin hain, toh tumhara aage ka kya plan hai?','Agar mujhe koi financial emergency aa jaye, toh tum kitna open rahoge batane mein?','Agar main phone lock kar doon ya password na bataun, toh tumhara reaction kya hoga?','Jab hum bahar honge aur koi jaanne wala mil jaye, toh tum kaise react karoge?','Tumhe kya lagta hai, jhagde ke baad pehle sorry kisko bolna chahiye?','Agar tumhari partner ka career tumhare career se zyada successful ho jaye, toh tum kaisa feel karoge?','Agar tumhare dost bole ki \'tumhari GF bore karti hai\', toh tum kya karoge?','Tum apni ex-partner ke bare mein sabse zyada kya yaad karte ho (positive ya negative)?','Agar main tumhe bolun ki mujhe is weekend \'me-time\' chahiye, toh tumhara reaction kya hoga?','Tum gusse mein ya bahut stress mein ho, toh tumhara sabse pehla reaction kya hota hai?','Jab tum bahut dukhi hote ho, toh tum kis tarah ka support prefer karte ho?','Agar koi ladka mujhse flirt kare ya zyada dosti dikhaye, toh tumhara \'jealousy meter\' kahan tak jata hai?','Jab tum galti karte ho aur sorry bolte ho, aur main phir bhi gusse mein rahun, toh tum kitni der tak koshish karoge?','Tumhe kitni baar baat karna ya milna \'enough\' lagta hai?'],'fiance-male': ['Shaadi ke baad humari salaries ko kaise manage karenge (separate/joint/allocated)?','Humare bade-boodhe agar koi bada decision lenge (property/job change), toh tum kya karoge?','Agar meri job ke liye humein kisi aur sheher shift hona pade, toh tumhara reaction kya hoga?','Shaadi ke baad tum Sunday ko kahan zyada time dena prefer karoge (Family vs. Us)?','Agar humari kissi baat par sehmat na ho (non-negotiable), toh last word kiska hona chahiye?','Tumhe kya lagta hai, shaadi ke baad ek ladki ko apne male friends se kitna distance rakhna chahiye?','Agar main kissi bade professional target mein fail ho jaun, toh tum kaisa react karoge?','Tumhe *ideal wife* mein sabse achhi quality kya lagti hai (apart from loving you)?','Jab hum free honge, toh tumhein kis tarah ke *Hobbies* karni chahiye (tumhare ya mere interest ki)?','Agar koi dost tumhein mere baare mein koi negative baat bataye (gossip), toh tum kya karoge?','Tumhe gussa/stress mein ho, toh tum apna pyaar kaise express karoge?','Agar main kissi baat par bahut dukhi ho jaun aur rone lagun, toh tumhara instinct kya hoga?','Jab tum bahut zyada pressure mein hote ho, toh tumhara go-to method kya hota hai?','Tumhe kitna zaroori lagta hai ki tumhari har cheez ko main approve karun (dress, friends, plan)?','Jab main koi problem discuss karti hoon, toh tum zyada kya karte ho (sunna ya solution dena)?']};

  // Update question count when stage changes
  const stageRadios = document.querySelectorAll('input[name="relationship-stage"]');
  const questionCount = document.getElementById('questionCount');
  const stageCounts = {
    'situationship-female': '15 questions',
    'relationship-female': '15 questions',
    'fiancee-female': '21 questions'
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


  // Male card functionality
  const startBtnMale = document.getElementById('startBtnMale');
  const shareLinkMale = document.getElementById('shareLinkMale');
  const linkInputMale = document.getElementById('linkInputMale');
  const copyBtnMale = document.getElementById('copyBtnMale');
  
  // Update question count for male card when stage changes
  const stageRadiosMale = document.querySelectorAll('input[name="relationship-stage-male"]');
  const questionCountMale = document.getElementById('questionCountMale');
  const stageCountsMale = {
    'situationship-male': '15 questions',
    'relationship-male': '15 questions',
    'fiance-male': '15 questions'
  };
  
  stageRadiosMale.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (questionCountMale) {
        questionCountMale.textContent = stageCountsMale[e.target.value];
      }
    });
  });
  
  if (startBtnMale) {
    startBtnMale.addEventListener('click', async () => {
      const selectedStage = document.querySelector('input[name="relationship-stage-male"]:checked');
      const stage = selectedStage ? selectedStage.value : 'situationship-male';
      
      showLoading('Creating quiz link...');
      
      try {
        const response = await fetch('/api/create-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stage })
        });
        
        const data = await response.json();
        hideLoading();
        
        if (response.ok) {
          const link = `${window.location.origin}/quiz?s=${data.sessionId}`;
          linkInputMale.value = link;
          shareLinkMale.style.display = 'block';
          showToast('Quiz link created! 🎉', 'success');
        } else {
          showToast(data.error || 'Failed to create link', 'error');
        }
      } catch (error) {
        hideLoading();
        showToast('Network error. Please try again.', 'error');
      }
    });
  }
  
  if (copyBtnMale) {
    copyBtnMale.addEventListener('click', () => {
      linkInputMale.select();
      document.execCommand('copy');
      showToast('Link copied! 📋', 'success');
    });
  }
