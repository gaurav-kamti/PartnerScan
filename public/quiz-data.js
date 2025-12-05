// Quiz data organized by relationship stage

const situationshipQuestions = [
  {
    category: "Politics",
    question: "BJP ya Congress?",
    choices: ["BJP", "Congress", "Depends on candidate, not party", "Neither, I hate politics"]
  },
  {
    category: "City vs Village",
    question: "City life better hai ya village life?",
    choices: ["100% city", "City hi but peaceful area", "Village peaceful hota hai", "Abroad best hai"]
  },
  {
    category: "Sleep Schedule",
    question: "Normally kab soti ho aur kab jagti ho?",
    choices: ["jaldi uthna, jaldi sona", "jaldi uthna, late sona", "Late uthna, Late sona", "No fixed time, mood pe depend"]
  },
  {
    category: "Male Friends",
    question: "Currently koi male best friend hai ya close male friend?",
    choices: ["Haan, 1-2 close", "Haan but normal friends", "Sirf colleagues/classmates, close nahi", "Bilkul nahi"]
  },
  {
    category: "Handling Unwanted Attention",
    question: "Kahin koi ladka zyada line maar raha ho toh tu kaise handle karti?",
    choices: ["Direct mana kaise karun", "Friendly rehti but thoda door rehti hoon", "Seedha bol deti I'm not interested", "Bina bole distance bana lungi"]
  },
  {
    category: "Privacy in Relationship",
    question: "Couple ke beech privacy honi chahiye ya nahi?",
    choices: ["Full privacy, phone bhi nahi check", "Thodi privacy but bada trust issue nahi", "Sab kuch share, no secrets", "Mujhe full access chahiye, tumhe nahi"]
  },
  {
    category: "Shopping Style",
    question: "Shopping karti ho toh budget banake jaati ho ya dil khol ke shopping?",
    choices: ["Strict budget", "Approximate idea hota hai", "Dil kare toh ho jata hai", "Paise kon dekhta hai"]
  },
  {
    category: "Defining the Status/Clarity",
    question: "Agar koi humse puche ki hum dono kya hain, toh tum kya jawab dogi?",
    choices: ["Casual Date hi bolungi", "Friend hi bolungi", "Relationship, if you introduce me", "Pata nahi, jaisa tum bolo"]
  },
  {
    category: "Future Projection/Intentions",
    question: "Tumhara kya khayal hai, ek 'Acha Time' kitne din tak 'Acha Relationship' ban sakta hai?",
    choices: ["Jab tak baatein ho rahi hai, tab tak theek hai.", "Jab tak hum dono openly isey exclusive na kar dein.", "Main toh future ka sochti hi nahi, sirf present.", "Agar dono ki feelings serious ho jaayein toh."]
  },
  {
    category: "Effort & Communication Need",
    question: "Agar hum ek doosre se ek hafta baat na karein, toh tum kitni worried hogi?",
    choices: ["Thodi si worried, par assume karungi ki tum busy hoge.", "Bahut gussa, aur fir main tumse contact karna band kar dungi.", "Mujhe koi fark nahi padega, it's a situationship.", "Tumhe call karungi, confirm karne ke liye ki sab theek hai."]
  },
  {
    category: "Dealing with Exclusivity",
    question: "Tumhara kya vichaar hai ki kya hum dono ko aur logo ko bhi date karna chahiye?",
    choices: ["Haan, jab tak baat clear na ho, flexibility honi chahiye.", "Nahi, main kisi bhi 'situation' mein cheating nahi karti.", "Tumhari marzi, mujhe koi problem nahi.", "Mujhe is par baat nahi karni."]
  },
  {
    category: "Need for External Validation",
    question: "Agar tumhare friends puche ki 'Tumhare aur uske beech kya chal raha hai?', toh tumhara standard answer kya hoga?",
    choices: ["Detail mein sab kuch bataungi.", "Bolungi ki 'Bahut accha hai, but we're taking it slow.'", "Unko ghumakar jawab dungi aur keh dungi ki 'Apna Kaam karo'.", "Bolungi ki 'Mujhe koi commitment nahi chahiye.'"]
  },
  {
    category: "Commitment Fear/Avoidance",
    question: "Agar hum dono ke beech 'Feelings' bahut zyada ho jaayein, toh tumhara agla kadam kya hoga?",
    choices: ["Main turant relationship mein aane ke liye ready ho jaungi.", "Main pehle tumse is par baat karungi.", "Main thoda peeche hatt jaungi, kyunki commitment se darr lagta hai.", "Zyada feelings se mujhe anxiety hoti hai, so I'll stop seeing you."]
  },
  {
    category: "Setting Boundaries/Priorities",
    question: "Tumhara kya vichaar hai ki hum ek doosre ke 'Family' ko milne ya unki life mein kitna involve ho sakte hain?",
    choices: ["Sirf tab jab hum full-time relationship mein ho.", "Family ko involve karne ki koi zaroorat nahi hai.", "Jab tum chaho, main ready hoon.", "Dheere-dheere, ek casual tareeke se."]
  },
  {
    category: "Emotional Investment vs. Transaction",
    question: "Tumhare liye yeh 'situation' zyada kya hai - 'Time pass' ya 'Emotional connection'?",
    choices: ["Emotional connection Kind of.", "Abhi toh feelings nhi hai but agar ho gaya toh accha hai.", "Emotions involve nahi karne.", "Jo bhi ho, itna kon sochta hai."]
  }
];

const relationshipQuestions = [
  {
    category: "Politics",
    question: "BJP ya Congress?",
    choices: ["BJP", "Congress", "Depends on candidate, not party", "Neither, I hate politics"]
  },
  {
    category: "City vs Village",
    question: "City life better hai ya village life?",
    choices: ["100% city", "City hi but peaceful area", "Village peaceful hota hai", "Abroad best hai"]
  },
  {
    category: "Sleep Schedule",
    question: "Normally kab soti ho aur kab jagti ho?",
    choices: ["jaldi uthna, jaldi sona", "jaldi uthna, late sona", "Late uthna, Late sona", "No fixed time, mood pe depend"]
  },
  {
    category: "Male Friends",
    question: "Currently koi male best friend hai ya close male friend?",
    choices: ["Haan, 1-2 close", "Haan but normal friends", "Sirf colleagues/classmates, close nahi", "Bilkul nahi"]
  },
  {
    category: "Handling Unwanted Attention",
    question: "Kahin koi ladka zyada line maar raha ho toh tu kaise handle karti?",
    choices: ["Direct mana kaise karun", "Friendly rehti but thoda door rehti hoon", "Seedha bol deti I'm not interested", "Bina bole distance bana lungi"]
  },
  {
    category: "Parents' Arguments",
    question: "Tumhare mummy-papa ke jhagde mein maximum time kon sahi hote the?",
    choices: ["Papa mostly sahi", "Mummy mostly sahi", "Dono barabar / Depends on situation", "Main kabhi notice nahi karti thi"]
  },
  {
    category: "Childhood Reaction to Scolding",
    question: "Bachpan mein teacher ne class mein daanta toh tum roti thi ya jawab deti thi?",
    choices: ["Roti thi", "Chup reh jati thi", "Jawab deti thi", "Teacher se lad padti thi"]
  },
  {
    category: "Biggest Family Fight",
    question: "Tumhare ghar ka sabse bada jhagda kis baat pe hua tha jo aaj bhi yaad hai?",
    choices: ["Paise ke upar", "Respect ke upar", "Chhoti baat pe bada bawaal", "Kabhi bada jhagda nahi hua"]
  },
  {
    category: "Shopping Style",
    question: "Shopping karti ho toh budget banake jaati ho ya dil khol ke shopping?",
    choices: ["Strict budget", "Approximate idea hota hai", "Dil kare toh ho jata hai", "Paise kon dekhta hai"]
  },
  {
    category: "Lending Money",
    question: "Agar tumhare best-friends, relatives, parents tumse 3 lac udhaar maange aur bole 5 saal mein lautayega, dogi?",
    choices: ["Haan de dungi bina soch ke", "Sirf agar emergency ho", "Nahi dungi, sorry bol dungi", "Thoda-thoda de sakti hoon max 10-15k"]
  },
  {
    category: "Privacy in Relationship",
    question: "Couple ke beech privacy honi chahiye ya nahi?",
    choices: ["Full privacy, phone bhi nahi check", "Thodi privacy but bada trust issue nahi", "Sab kuch share, no secrets", "Mujhe full access chahiye, tumhe nahi"]
  },
  {
    category: "Changing in Husband",
    question: "Apne future husband mein sabse pehle kya change karogi?",
    choices: ["Uska gussa", "Uski annoying(nashe, unhygienic, etc) habits", "Uska friend circle", "Kuch nahi change karungi"]
  },
  {
    category: "Emotional Validation & Support",
    question: "Ek dost jo apni job chhodkar naya business shuru karna chahta hai, use tum kya salah (advice) dogi?",
    choices: ["Use bolungi ki 'Dream big!' par pehle ek detailed plan banao aur backup rakho.", "Kahungi ki 'Job mat chhod, bahar bahut competition hai, safe raho.'", "Bolungi ki 'Jo karna hai karo, mujhe kya? Main toh apne decisions par focus karti hoon.'", "Use apne purane experiences bataungi aur usko naya business shuru karne se rokungi."]
  },
  {
    category: "Handling Past Conflicts and Forgiveness",
    question: "Agar tumhare kisi purane dost se tumhara jhagda ho jaaye aur woh bahut dino baad maafi maange, toh tumhari pehli reaction kya hogi?",
    choices: ["Use maaf kar dungi aur aage badhne ki koshish karungi.", "Maaf toh kar dungi, par uss galti ko baar-baar yaad dilaungi taaki woh dobara na kare.", "Use seedhe block kar dungi aur kabhi baat nahi karungi.", "Pehle usse poora sunungi, phir thoda time lekar sochungi aur agar woh badal gaya ho toh maaf karungi."]
  },
  {
    category: "Social Independence and Partner's Focus",
    question: "Tumhara kya मानना hai ki ek relationship mein, apne partner ke kitne dosto ko importance deni chahiye?",
    choices: ["Sirf un dosto ko jo hum dono ke common hain, baaki sab zaroori nahi.", "Partner ke saare dosto ko importance deni chahiye aur unke saath time spend karna chahiye, woh uski life ka hissa hain.", "Dosto ko chhodkar, sirf relationship aur hum dono par focus karna chahiye.", "Main bas itna expect karungi ki woh apne personal aur dosto ke liye time manage kare, main interfere nahi karungi."]
  }
];

const fianceQuestions = [
  {
    category: "Politics",
    question: "BJP ya Congress?",
    choices: ["BJP", "Congress", "Depends on candidate, not party", "Neither, I hate politics"]
  },
  {
    category: "City vs Village",
    question: "City life better hai ya village life?",
    choices: ["100% city", "City hi but peaceful area", "Village peaceful hota hai", "Abroad best hai"]
  },
  {
    category: "Sleep Schedule",
    question: "Normally kab soti ho aur kab jagti ho?",
    choices: ["jaldi uthna, jaldi sona", "jaldi uthna, late sona", "Late uthna, Late sona", "No fixed time, mood pe depend"]
  },
  {
    category: "Male Friends",
    question: "Currently koi male best friend hai ya close male friend?",
    choices: ["Haan, 1-2 close", "Haan but normal friends", "Sirf colleagues/classmates, close nahi", "Bilkul nahi"]
  },
  {
    category: "Handling Unwanted Attention",
    question: "Kahin koi ladka zyada line maar raha ho toh tu kaise handle karti?",
    choices: ["Direct mana kaise karun", "Friendly rehti but thoda door rehti hoon", "Seedha bol deti I'm not interested", "Bina bole distance bana lungi"]
  },
  {
    category: "Parents' Arguments",
    question: "Tumhare mummy-papa ke jhagde mein maximum time kon sahi hote the?",
    choices: ["Papa mostly sahi", "Mummy mostly sahi", "Dono barabar / Depends on situation", "Main kabhi notice nahi karti thi"]
  },
  {
    category: "Childhood Reaction to Scolding",
    question: "Bachpan mein teacher ne class mein daanta toh tum roti thi ya jawab deti thi?",
    choices: ["Roti thi", "Chup reh jati thi", "Jawab deti thi", "Teacher se lad padti thi"]
  },
  {
    category: "Biggest Family Fight",
    question: "Tumhare ghar ka sabse bada jhagda kis baat pe hua tha jo aaj bhi yaad hai?",
    choices: ["Paise ke upar", "Respect ke upar", "Chhoti baat pe bada bawaal", "Kabhi bada jhagda nahi hua"]
  },

  {
    category: "Shopping Style",
    question: "Shopping karti ho toh budget banake jaati ho ya dil khol ke shopping?",
    choices: ["Strict budget", "Approximate idea hota hai", "Dil kare toh ho jata hai", "Paise kon dekhta hai"]
  },
  {
    category: "Lending Money",
    question: "Agar tumhare best-friends, relatives, parents tumse 3 lac udhaar maange aur bole 5 saal mein lautayega, dogi?",
    choices: ["Haan de dungi bina soch ke", "Sirf agar emergency ho", "Nahi dungi, sorry bol dungi", "Thoda-thoda de sakti hoon max 10-15k"]
  },
  {
    category: "Changing in Husband",
    question: "Apne future husband mein sabse pehle kya change karogi?",
    choices: ["Uska gussa", "Uski annoying(nashe, unhygienic, etc) habits", "Uska friend circle", "Kuch nahi change karungi"]
  },

  {
    category: "Baby Planning",
    question: "Shaadi ke kitne saal baad baby planning?",
    choices: ["1-2 saal mein", "3-5 saal ke baad", "5+ saal ya kabhi nahi", "Jaisa husband kahenge"]
  },
  {
    category: "Privacy in Relationship",
    question: "Couple ke beech privacy honi chahiye ya nahi?",
    choices: ["Full privacy, phone bhi nahi check", "Thodi privacy but bada trust issue nahi", "Sab kuch share, no secrets", "Mujhe full access chahiye, tumhe nahi"]
  },
  {
    category: "Money Division After Marriage",
    question: "Shaadi ke baad paise kaise divide honge?",
    choices: ["Husband manage karega, mujhe pocket money milegi", "Joint account + mera personal account", "Sab alag-alag, bill 50-50", "Main manage karungi, husband paise denge"]
  },
  {
    category: "Husband's Salary Share",
    question: "Husband ki salary ka kitna percent wife ke personal account mein automatically aana chahiye?",
    choices: ["0% – husband manage kare", "100% - Main manage karungi", "50% approx", "Pocket money jaise"]
  },
  {
    category: "Phone Password",
    question: "Shaadi ke baad phone ka password mujhe dena padega ya privacy bolke taal dogi?",
    choices: ["Password dungi, kuch hide nahi", "Sirf emergency mein dikhaungi", "Kabhi nahi, privacy important", "Husband bhi dega tab"]
  },
  {
    category: "Husband Hiding Salary",
    question: "Agar pata chale husband salary chhupa raha hai, first reaction?",
    choices: ["Ghar chod ke maayke chali jaungi", "Bada jhagda + trust gaya forever", "Baat karke samjhaungi, mauka dungi", "Chup reh jaungi"]
  },
  {
    category: "Emotional Validation & Support",
    question: "Ek dost jo apni job chhodkar naya business shuru karna chahta hai, use tum kya salah (advice) dogi?",
    choices: ["Use bolungi ki 'Dream big!' par pehle ek detailed plan banao aur backup rakho.", "Kahungi ki 'Job mat chhod, bahar bahut competition hai, safe raho.'", "Bolungi ki 'Jo karna hai karo, mujhe kya? Main toh apne decisions par focus karti hoon.'", "Use apne purane experiences bataungi aur usko naya business shuru karne se rokungi."]
  },
  {
    category: "Handling Past Conflicts and Forgiveness",
    question: "Agar tumhare kisi purane dost se tumhara jhagda ho jaaye aur woh bahut dino baad maafi maange, toh tumhari pehli reaction kya hogi?",
    choices: ["Use maaf kar dungi aur aage badhne ki koshish karungi.", "Maaf toh kar dungi, par uss galti ko baar-baar yaad dilaungi taaki woh dobara na kare.", "Use seedhe block kar dungi aur kabhi baat nahi karungi.", "Pehle usse poora sunungi, phir thoda time lekar sochungi aur agar woh badal gaya ho toh maaf karungi."]
  },
  {
    category: "Social Independence and Partner's Focus",
    question: "Tumhara kya मानना hai ki ek relationship mein, apne partner ke kitne dosto ko importance deni chahiye?",
    choices: ["Sirf un dosto ko jo hum dono ke common hain, baaki sab zaroori nahi.", "Partner ke saare dosto ko importance deni chahiye aur unke saath time spend karna chahiye, woh uski life ka hissa hain.", "Dosto ko chhodkar, sirf relationship aur hum dono par focus karna chahiye.", "Main bas itna expect karungi ki woh apne personal aur dosto ke liye time manage kare, main interfere nahi karungi."]
  }
];
