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
    category: "Parents Saying Sorry",
    question: "Tumhare papa ne kabhi mummy ke saamne sorry bola hai ya mummy hi maafi maang leti thi?",
    choices: ["Papa kabhi sorry nahi bolte", "Papa sorry bolte the", "Mummy hi mostly sorry bolti thi", "Dono kabhi sorry nahi bolte the"]
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
    category: "Living Arrangement After Marriage",
    question: "Shaadi ke baad city mein saath rehne ke liye force karogi ya adjust kar logi agar mera job dusre city mein ho?",
    choices: ["Bilkul force karungi, separate nahi reh sakte", "Long-distance bhi chalega 2-3 saal", "Main ghar pe reh lungi", "Mere ghar pe sath rehna hoga"]
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
    category: "Parents Saying Sorry",
    question: "Tumhare papa ne kabhi mummy ke saamne sorry bola hai ya mummy hi maafi maang leti thi?",
    choices: ["Papa kabhi sorry nahi bolte", "Papa sorry bolte the", "Mummy hi mostly sorry bolti thi", "Dono kabhi sorry nahi bolte the"]
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
    category: "Living Arrangement After Marriage",
    question: "Shaadi ke baad city mein saath rehne ke liye force karogi ya adjust kar logi agar mera job dusre city mein ho?",
    choices: ["Bilkul force karungi, separate nahi reh sakte", "Long-distance bhi chalega 2-3 saal", "Main ghar pe reh lungi", "Mere ghar pe sath rehna hoga"]
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
  }
];
