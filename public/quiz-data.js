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


// Male Situationship Questions
const situationshipMaleQuestions = [
  {
    category: "Defining Commitment",
    question: "Agar main social media par humari photos daalun, toh tum kya expect karoge?",
    choices: ["Normal hai, main bhi karunga.", "Zyada mat post karna, public mein show-off theek nahi.", "Sirf close friends ko dikhana.", "Main prefer karunga ki tum mat karo."]
  },
  {
    category: "Long-Term View",
    question: "Tum relationship ko kitna time dete ho, before you think about 'next step'?",
    choices: ["3-6 mahine", "1 saal", "Jab feel ho, time se farak nahi padta.", "Aisi cheezon ke baare mein socha nahi hai."]
  },
  {
    category: "Handling Exes",
    question: "Tumhare hisaab se ex-partners se kitna touch mein rehna theek hai?",
    choices: ["Bilkul nahi, past is past.", "Casual greetings/updates.", "Agar common friends ho toh.", "Depends on the reason, agar koi help chahiye ho toh."]
  },
  {
    category: "Personal Space",
    question: "Agar hum saath mein na hon, toh tumhe kitna 'space' chahiye hota hai?",
    choices: ["Jitna tum bolo, I don't need much.", "Apne hobbies/work ke liye time.", "Pure weekend friends ke saath.", "Mujhse depend karta hai, kabhi zyada, kabhi kam."]
  },
  {
    category: "Support System",
    question: "Jab tum bahut stressed ya pareshan hote ho, toh tum kis se baat karte ho?",
    choices: ["Sirf apne closest friends se.", "Family se.", "I deal with it myself.", "Jise bhi main us waqt sabse close feel karun."]
  },
  {
    category: "Financial View",
    question: "Tumhare liye financial planning kitni important hai, especially long-term mein?",
    choices: ["Bohut, I save a major part of my income.", "Important hai, but enjoyment zyada zaroori hai.", "Bas itna ki bills time pe pay ho jayein.", "Abhi toh career pe focus hai, baad mein dekhenge."]
  },
  {
    category: "Conflict Resolution",
    question: "Agar tumhara kisi dost se bada jhagda ho jaye, toh tum use kaise handle karte ho?",
    choices: ["Pehle usko space deta hoon, phir rational baat karta hoon.", "Ignore karta hoon jab tak situation theek na ho jaye.", "Uske point ko samajhne ki koshish karta hoon.", "Main cut off kar deta hoon agar baat bigad jaye."]
  },
  {
    category: "Work-Life Balance",
    question: "Sunday ko 4 ghante mandatory kaam karna pade, ya 4 ghante ki party cancel karni pade, kya choose karoge?",
    choices: ["Kaam, work comes first.", "Party cancel karke work karunga.", "Depend karta hai mood pe.", "Party karunga, kaam baad mein ho jayega."]
  },
  {
    category: "Social Responsibility",
    question: "Tumhe kya lagta hai, ek achha insaan hone ke liye sabse important quality kya hai?",
    choices: ["Honesty and Integrity.", "Loyalty towards people you care about.", "Success and ability to provide.", "Kindness and Empathy."]
  },
  {
    category: "Jealousy/Possessiveness",
    question: "Agar main kisi male friend ke saath bahar jaaun, toh tumhari pehli reaction kya hogi?",
    choices: ["Cool, bas mujhe bata dena.", "Thodi si insecurity ho sakti hai.", "Achha nahi lagega, par trust karta hoon.", "Mujhe detailed update chahiye."]
  },
  {
    category: "Coping Mechanism",
    question: "Jab tum overwhelmed feel karte ho, toh tumhara go-to tareeka kya hai relax karne ka?",
    choices: ["Exercise ya koi hobby.", "Dosto ke saath time spend karna.", "Alcohol ya binge-watching.", "Akele rehna, silent mode pe."]
  },
  {
    category: "Punctuality/Routine",
    question: "Tumhara din kitna structured ya routine-based hota hai?",
    choices: ["Bahut structured, sab time pe hona chahiye.", "Thoda flexible, but main things are on time.", "Bilkul flexible, I go with the flow.", "Bahut random, main late ho jata hoon aksar."]
  },
  {
    category: "Physical Health/Image",
    question: "Fitness aur apne looks pe tum kitna dhyaan dete ho?",
    choices: ["Regular exercise and focus on health.", "Jab mood ho tab, but not a priority.", "Jitna zaroori ho presentable rehne ke liye.", "Bilkul kam, I don't care much about it."]
  },
  {
    category: "Anger Management",
    question: "Tumhe last time bahut gussa kab aaya tha, aur tumne kya kiya?",
    choices: ["Jab injustice dekha, I tried to resolve it calmly.", "Jab plans kharab ho gaye, I got a bit loud.", "Jab kisi ne disrespect kiya, I shouted back.", "Mujhe gussa kam aata hai, I usually withdraw."]
  },
  {
    category: "Handling Criticism",
    question: "Agar main tumhari kisi choti aadat ko change karne ko kahun, toh tumhara reaction kya hoga?",
    choices: ["Open to change, agar woh helpful hai.", "Thoda defensive, but I'll think about it.", "I'll ask for the reason, but won't change.", "Offended ho jaunga, kyunki woh meri marzi hai."]
  }
];


// Male Relationship Questions
const relationshipMaleQuestions = [
  {
    category: "Defining the Status (Direct)",
    question: "Agar main tumhe family/friends ko milwaun, toh tum is 'status' ko kya bologe?",
    choices: ["Casual Date hi bolunga", "Friend hi bolunga", "Relationship, if you introduce me", "Pata nahi, jaisa tum bolo"]
  },
  {
    category: "Commitment Timeline (Direct)",
    question: "Agar 6-8 mahine baad bhi hum yahin hain, toh tumhara aage ka kya plan hai?",
    choices: ["Dekhenge, abhi itni jaldi kya hai", "Main toh serious hoon, shaadi tak ka soch sakta hoon", "Jab tak chal raha hai, theek hai", "Jab tum comfortable ho, tab discuss karenge"]
  },
  {
    category: "Financial Transparency (Direct)",
    question: "Agar mujhe koi financial emergency aa jaye, toh tum kitna open rahoge batane mein?",
    choices: ["Sirf advice doonga", "Jo main manage kar sakta hoon, utna bata doonga", "Apni har detail bataunga, hum ek team hain", "Depends karta hai, tumhara kitna bada problem hai"]
  },
  {
    category: "Privacy & Boundaries (Direct)",
    question: "Agar main phone lock kar doon ya password na bataun, toh tumhara reaction kya hoga?",
    choices: ["Koi baat nahi, sabka personal space hota hai", "Thoda bura lagega, kya chupa rahi ho?", "Mujhe toh pata hona chahiye, hum relationship mein hain", "Mera phone bhi locked hi rahega ab se"]
  },
  {
    category: "Public vs. Private (Direct)",
    question: "Jab hum bahar honge aur koi jaanne wala mil jaye, toh tum kaise react karoge?",
    choices: ["Casual friend ki tarah, haath bhi nahi pakadunga", "Sirf 'hello' bolkar aage badh jaunga", "Apna partner hi introduce karunga, agar unko pata chal jaye toh chal jaye", "Jaise normal couple karte hain, public display of affection nahi"]
  },
  {
    category: "Conflict Resolution (Indirect)",
    question: "Tumhe kya lagta hai, jhagde ke baad pehle sorry kisko bolna chahiye?",
    choices: ["Hamesha ladke ko, kyunki woh zyada mature hote hain", "Usko jiski galti ho, chahe koi bhi ho", "Pehle usko bolna chahiye jisko relationship ki zyada fikar hai", "Pehle tumko bolna chahiye, tum jaldi calm ho jati ho"]
  },
  {
    category: "Girl's Career (Indirect)",
    question: "Agar tumhari partner ka career tumhare career se zyada successful ho jaye, toh tum kaisa feel karoge?",
    choices: ["Bahut proud feel karunga, usko support karunga", "Thoda insecure ho jaunga, par adjust kar loonga", "Mujhe thoda 'man of the house' jaisa feel karna hai, toh adjust karna mushkil hoga", "Achcha hai, at least financial load kam hoga"]
  },
  {
    category: "Dealing with Friends (Indirect)",
    question: "Agar tumhare dost bole ki 'tumhari GF bore karti hai', toh tum kya karoge?",
    choices: ["Doston ko bolunga ki woh galat hain, aur tumhe defend karunga", "Unko bolunga ki aisi baatein mat karein, par tumhe nahi bataunga", "Doston se kam milna start kar doonga", "Tumhe bolunga ki thoda 'fun' hona seekho, warna woh aana band kar denge"]
  },
  {
    category: "Past Relationships (Indirect)",
    question: "Tum apni ex-partner ke bare mein sabse zyada kya yaad karte ho (positive ya negative)?",
    choices: ["Woh kitni supportive thi, ya usne mujhe kitna hurt kiya (Focus on learning)", "Uske looks ya physical attraction (Focus on superficial)", "Uski galtiyan aur failure points (Focus on blame)", "Yeh sab baatein bekar hain, aage badhte hain (Focus on avoidance)"]
  },
  {
    category: "Alone Time (Indirect)",
    question: "Agar main tumhe bolun ki mujhe is weekend 'me-time' chahiye, toh tumhara reaction kya hoga?",
    choices: ["Definitely, enjoy karo. Main bhi apne doston ke saath plan bana lunga", "Theek hai, par mujhe bata dena tum free kab ho", "Tumhe bore toh nahi ho raha hai? Mere saath time spend karna achcha nahi lag raha?", "Kya problem hai? Kya tum mujhse kuch chupa rahi ho?"]
  },
  {
    category: "Stress & Anger (Physiological/Emotional)",
    question: "Tum gusse mein ya bahut stress mein ho, toh tumhara sabse pehla reaction kya hota hai?",
    choices: ["Gussa nikalne ke liye chilla deta hoon ya cheezein fek deta hoon", "Thoda time akele rehkar calm down hone ki koshish karta hoon", "Apne close friend/partner se baat karke hal nikalta hoon", "Smoking/drinking karta hoon, ya phone off kar deta hoon"]
  },
  {
    category: "Emotional Need (Physiological/Emotional)",
    question: "Jab tum bahut dukhi hote ho, toh tum kis tarah ka support prefer karte ho?",
    choices: ["Mujhe akela chhod do, main khud hi theek ho jaunga", "Physical comfort, jaise ki hug/cuddle", "Sirf suno, koi advice mat do, bas mere paas raho", "Mujhe koi solution do ya mera mind divert karo"]
  },
  {
    category: "Jealousy Threshold (Physiological/Emotional)",
    question: "Agar koi ladka mujhse flirt kare ya zyada dosti dikhaye, toh tumhara 'jealousy meter' kahan tak jata hai?",
    choices: ["Mujhe koi farak nahi padta, tum par pura trust hai", "Thoda awkward feel hota hai, par tumhe nahi bataunga", "Main us ladke ko seedha confront karunga", "Main tum par shak karna start kar doonga, aur tumse explanation maangunga"]
  },
  {
    category: "Apology & Acceptance (Physiological/Emotional)",
    question: "Jab tum galti karte ho aur sorry bolte ho, aur main phir bhi gusse mein rahun, toh tum kitni der tak koshish karoge?",
    choices: ["Ek baar sorry bol diya, ab main kya kar sakta hoon", "Jab tak tumhare chehre par smile nahi aa jati, tab tak main try karta rahunga", "Thoda time doonga, aur phir kuch der baad dobara baat karunga", "Ulta main hi gussa ho jaunga ki abhi bhi kyu naraz ho"]
  },
  {
    category: "Communication Need (Physiological/Emotional)",
    question: "Tumhe kitni baar baat karna ya milna 'enough' lagta hai?",
    choices: ["Daily 2-3 calls, Weekend pe milna", "Jab bhi tum bolo", "Jab main free hoon tab", "Jab tak tum interest dikhao"]
  }
];


// Male Fiance Questions
const fianceMaleQuestions = [
  {
    category: "Post-Marriage Finances",
    question: "Shaadi ke baad humari salaries ko kaise manage karenge (separate/joint/allocated)?",
    choices: ["Meri salary meri, tumhari tumhari. Bills divide kar lenge", "Ek joint account kho lenge jismein dono daalenge", "Main hi sab manage karunga, tum bas budget bata dena", "Pehle tumhari family ki zaroorat puri karenge, phir dekhenge"]
  },
  {
    category: "Parental Influence",
    question: "Humare bade-boodhe agar koi bada decision lenge (property/job change), toh tum kya karoge?",
    choices: ["Jo unhone bola, wahi final hoga", "Pehle main tumse discuss karunga, phir unko samjhaunga", "Humari family life mein unka interference nahi hona chahiye", "Main unke saath hi rahoonga, tumhein adjust karna padega"]
  },
  {
    category: "Relocation",
    question: "Agar meri job ke liye humein kisi aur sheher shift hona pade, toh tumhara reaction kya hoga?",
    choices: ["Main apna career chorh nahi sakta, tumhe hi sacrifice karna padega", "Dekhte hain, agar tumhari salary zyada ho toh main sochunga", "Hum dono milkar faisla lenge ki kiske liye behtar hai", "Mujhe koi problem nahi, main kahin bhi adjust kar loonga"]
  },
  {
    category: "Time Allocation",
    question: "Shaadi ke baad tum Sunday ko kahan zyada time dena prefer karoge (Family vs. Us)?",
    choices: ["Poora din bas apne family members ke saath bitaunga", "Morning tumhare saath, evening main apne doston/family ko doonga", "Humari choti family (tum aur main) priority hogi", "Jaise abhi karte hain, waise hi chalega"]
  },
  {
    category: "Disagreement Handling",
    question: "Agar humari kissi baat par sehmat na ho (non-negotiable), toh last word kiska hona chahiye?",
    choices: ["Jo zyada mature ho, uska", "Mera hi hona chahiye, I am the man of the house", "Humesha solution dhundhenge jo dono ko comfortable ho", "Jis se main darrunga (galti se), uska"]
  },
  {
    category: "Partner's Friends",
    question: "Tumhe kya lagta hai, shaadi ke baad ek ladki ko apne male friends se kitna distance rakhna chahiye?",
    choices: ["Bohot zyada distance, milna-julna band kar dena chahiye", "Sirf group mein ya jab tum mere saath ho tab", "Friendship maintain karni chahiye, jab tak trust break na ho", "Jo friends tumhe pasand nahi hain, unse nahi milna chahiye"]
  },
  {
    category: "Handling Failure",
    question: "Agar main kissi bade professional target mein fail ho jaun, toh tum kaisa react karoge?",
    choices: ["Main bolunga 'tumse nahi hoga', ya 'main hi kar loonga'", "Tumhe himmat doonga aur next time ke liye help karunga", "Mujhe bohot gussa aayega, itna time waste kar diya", "Poochunga ki kya tumne poori mehnat ki thi?"]
  },
  {
    category: "Ideal Wife Trait",
    question: "Tumhe *ideal wife* mein sabse achhi quality kya lagti hai (apart from loving you)?",
    choices: ["Jo mere family members ki care kare aur ghar sambhaale", "Jo apne career aur ghar ko achhe se balance kar le", "Jo independent ho aur mujhe challenge kar sake", "Jo meri har baat maane aur argue na kare"]
  },
  {
    category: "Leisure Time",
    question: "Jab hum free honge, toh tumhein kis tarah ke *Hobbies* karni chahiye (tumhare ya mere interest ki)?",
    choices: ["Woh jo mujhe pasand hain ya mere doston ko pasand hain", "Aise hobbies jo hum dono saath mein enjoy kar sakein", "Tumhare hobbies ko main support karunga, par main apna karunga", "Jo meri family ko achha lage, wahi karenge"]
  },
  {
    category: "Unsolicited Advice",
    question: "Agar koi dost tumhein mere baare mein koi negative baat bataye (gossip), toh tum kya karoge?",
    choices: ["Us dost par trust karunga aur tumse chhipakar tumhe monitor karunga", "Seedha tumse poochunga aur situation clear karunga", "Main us dost ko samjhaunga ki humare beech mein na pade", "Ignore kar doonga, mujhe tum par trust hai"]
  },
  {
    category: "Expressing Love",
    question: "Tumhe gussa/stress mein ho, toh tum apna pyaar kaise express karoge?",
    choices: ["Us time main pyaar nahi dikhaunga, jab mood theek hoga tab karenge", "Physical distance bana loonga ya silent ho jaunga", "Tab bhi tumhari care karunga, taaki tum safe feel karo", "Main apna gussa tum par nikal doonga aur baad mein sorry bolunga"]
  },
  {
    category: "Handling Tears",
    question: "Agar main kissi baat par bahut dukhi ho jaun aur rone lagun, toh tumhara instinct kya hoga?",
    choices: ["Emotional ho jaunga aur main bhi rone lagunga", "Tumhe chup karaunga, hal nikalunga, aur comfort doonga", "Poochunga ki *dikhawa toh nahi kar rahi ho?*", "Main wahan se chala jaunga, mujhe drama pasand nahi hai"]
  },
  {
    category: "Coping Mechanism",
    question: "Jab tum bahut zyada pressure mein hote ho, toh tumhara go-to method kya hota hai?",
    choices: ["Bahut zyada kaam karunga ya khelunga (avoidance)", "Apne feelings ko pi jaunga aur kisi ko nahi bataunga", "Tumse baat karunga ya kissi trusted source se advice loonga", "Smoking/drinking karunga ya phone switch off kar doonga (maladaptive)"]
  },
  {
    category: "Need for Approval",
    question: "Tumhe kitna zaroori lagta hai ki tumhari har cheez ko main approve karun (dress, friends, plan)?",
    choices: ["Mera har decision tumhe pasand hona chahiye, warna main change kar doonga", "Main tumhari rai loonga par last decision mera hoga", "Mera decision mera hai, tumhari approval ki zaroorat nahi hai", "Humara decision hona chahiye, not just mine or yours"]
  },
  {
    category: "Listening Style",
    question: "Jab main koi problem discuss karti hoon, toh tum zyada kya karte ho (sunna ya solution dena)?",
    choices: ["Main toh hamesha seedha solution deta hoon, faltu sunna pasand nahi hai", "Main pehle pura sununga, phir poochunga ki tum kya chahti ho", "Main tumhari baat ko kaatunga aur bataunga ki kya galat hai", "Bas sunta rahunga, advice nahi doonga unless puchho"]
  }
];
