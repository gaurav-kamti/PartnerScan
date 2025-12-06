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
      "Main ghar pe reh lungi",
      "Mere ghar pe sath rehna hoga",
    ],
  },
  {
    category: "Parents' Arguments",
    question: "Tumhare mummy-papa ke jhagde mein maximum time kon sahi hote the?",
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
  {
    category: "Sleep Schedule",
    question:
      "Normally kab soti ho aur kab jagti ho?",
    choices: [
      "jaldi uthna, jaldi sona",
      "jaldi uthna, late sona",
      "Late uthna, Late sona",
      "No fixed time, mood pe depend",
    ],
  },
  {
    category: "Baby Planning",
    question: "Shaadi ke kitne saal baad baby planning?",
    choices: [
      "1-2 saal mein",
      "3-5 saal ke baad",
      "5+ saal ya kabhi nahi",
      "Jaisa husband kahenge",
    ],
  },
  {
    category: "Privacy in Relationship",
    question: "Couple ke beech privacy honi chahiye ya nahi?",
    choices: [
      "Full privacy, phone bhi nahi check",
      "Thodi privacy but bada trust issue nahi",
      "Sab kuch share, no secrets",
      "Mujhe full access chahiye, tumhe nahi",
    ],
  },
  {
    category: "Money Division After Marriage",
    question:
      "Shaadi ke baad paise kaise divide honge?",
    choices: [
      "Husband manage karega, mujhe pocket money milegi",
      "Joint account + mera personal account",
      "Sab alag-alag, bill 50-50",
      "Main manage karungi, husband paise denge",
    ],
  },
  {
    category: "Male Friends",
    question: "Currently koi male best friend hai ya close male friend?",
    choices: [
      "Haan, 1-2 close",
      "Haan but normal friends",
      "Sirf colleagues/classmates, close nahi",
      "Bilkul nahi",
    ],
  },
  {
    category: "Husband's Salary Share",
    question:
      "Husband ki salary ka kitna percent wife ke personal account mein automatically aana chahiye?",
    choices: ["0% – husband manage kare", "100% - Main manage karungi", "50% approx", "Pocket money jaise"],
  },
  {
    category: "Phone Password",
    question:
      "Shaadi ke baad phone ka password mujhe dena padega ya privacy bolke taal dogi?",
    choices: [
      "Password dungi, kuch hide nahi",
      "Sirf emergency mein dikhaungi",
      "Kabhi nahi, privacy important",
      "Husband bhi dega tab",
    ],
  },
  {
    category: "Childhood Reaction to Scolding",
    question:
      "Bachpan mein teacher ne class mein daanta toh tum roti thi ya jawab deti thi?",
    choices: [
      "Roti thi",
      "Chup reh jati thi",
      "Jawab deti thi",
      "Teacher se lad padti thi",
    ],
  },
  {
    category: "Biggest Family Fight",
    question:
      "Tumhare ghar ka sabse bada jhagda kis baat pe hua tha jo aaj bhi yaad hai?",
    choices: [
      "Paise ke upar",
      "Respect ke upar",
      "Chhoti baat pe bada bawaal",
      "Kabhi bada jhagda nahi hua",
    ],
  },
  {
    category: "Lending Money",
    question:
      "Agar tumhare best-friends, relatives, parents tumse 3 lac udhaar maange aur bole 5 saal mein lautayega, dogi?",
    choices: [
      "Haan de dungi bina soch ke",
      "Sirf agar emergency ho",
      "Nahi dungi, sorry bol dungi",
      "Thoda-thoda de sakti hoon max 10-15k",
    ],
  },
  {
    category: "Changing in Husband",
    question: "Apne future husband mein sabse pehle kya change karogi?",
    choices: [
      "Uska gussa",
      "Uski annoying(nashe, unhygienic, etc)  habits",
      "Uska friend circle",
      "Kuch nahi change karungi",
    ],
  },
  {
    category: "Parents Saying Sorry",
    question:
      "Tumhare papa ne kabhi mummy ke saamne sorry bola hai ya mummy hi maafi maang leti thi?",
    choices: [
      "Papa kabhi sorry nahi bolte",
      "Papa sorry bolte the",
      "Mummy hi mostly sorry bolti thi",
      "Dono kabhi sorry nahi bolte the",
    ],
  },
  {
    category: "Shopping Style",
    question:
      "Shopping karti ho toh budget banake jaati ho ya dil khol ke shopping?",
    choices: [
      "Strict budget",
      "Approximate idea hota hai",
      "Dil kare toh ho jata hai",
      "Paise kon dekhta hai",
    ],
  },
  {
    category: "Handling Unwanted Attention",
    question:
      "Kahin koi ladka zyada line maar raha ho toh tu kaise handle karti?",
    choices: [
      "Direct mana kaise karun",
      "Friendly rehti but thoda door rehti hoon",
      "Seedha bol deti I'm not interested",
      "Bina bole distance bana lungi",
    ],
  },
  {
    category: "Husband Hiding Salary",
    question: "Agar pata chale husband salary chhupa raha hai, first reaction?",
    choices: [
      "Ghar chod ke maayke chali jaungi",
      "Bada jhagda + trust gaya forever",
      "Baat karke samjhaungi, mauka dungi",
      "Chup reh jaungi",
    ],
  },
];

const choiceToValueMap = {
  "Defining the Status/Clarity": {
    "Casual Date hi bolungi": "Green",
    "Friend hi bolungi": "Big Red",
    "Relationship, if you introduce me": "Light Green",
    "Pata nahi, jaisa tum bolo": "Green",
  },
  "Future Projection/Intentions": {
    "Jab tak baatein ho rahi hai, tab tak theek hai.": "Red",
    "Jab tak hum dono openly isey exclusive na kar dein.": "Bright Green",
    "Main toh future ka sochti hi nahi, sirf present.": "Big Red",
    "Agar dono ki feelings serious ho jaayein toh.": "Green",
  },
  "Effort & Communication Need": {
    "Thodi si worried, par assume karungi ki tum busy hoge.": "Red",
    "Bahut gussa, aur fir main tumse contact karna band kar dungi.": "Big Red",
    "Mujhe koi fark nahi padega, it's a situationship.": "Big Red",
    "Tumhe call karungi, confirm karne ke liye ki sab theek hai.": "Bright Green",
  },
  "Dealing with Exclusivity": {
    "Haan, jab tak baat clear na ho, flexibility honi chahiye.": "Red",
    "Nahi, main kisi bhi 'situation' mein cheating nahi karti.": "Bright Green",
    "Tumhari marzi, mujhe koi problem nahi.": "Orange",
    "Mujhe is par baat nahi karni.": "Big Red",
  },
  "Need for External Validation": {
    "Detail mein sab kuch bataungi.": "Orange",
    "Bolungi ki 'Bahut accha hai, but we're taking it slow.'": "Bright Green",
    "Unko ghumakar jawab dungi aur keh dungi ki 'Apna Kaam karo'.": "Red",
    "Bolungi ki 'Mujhe koi commitment nahi chahiye.'": "Big Red",
  },
  "Commitment Fear/Avoidance": {
    "Main turant relationship mein aane ke liye ready ho jaungi.": "Bright Green",
    "Main pehle tumse is par baat karungi.": "Green",
    "Main thoda peeche hatt jaungi, kyunki commitment se darr lagta hai.": "Red",
    "Zyada feelings se mujhe anxiety hoti hai, so I'll stop seeing you.": "Big Red",
  },
  "Setting Boundaries/Priorities": {
    "Sirf tab jab hum full-time relationship mein ho.": "Light Green",
    "Family ko involve karne ki koi zaroorat nahi hai.": "Big Red",
    "Jab tum chaho, main ready hoon.": "Green",
    "Dheere-dheere, ek casual tareeke se.": "Green",
  },
  "Emotional Investment vs. Transaction": {
    "Emotional connection Kind of.": "Bright Green",
    "Abhi toh feelings nhi hai but agar ho gaya toh accha hai.": "Orange",
    "Emotions involve nahi karne.": "Big Red",
    "Jo bhi ho, itna kon sochta hai.": "Red",
  },
  Politics: {
    BJP: "Bright Green",
    Congress: "Red",
    "Depends on candidate, not party": "Green",
    "Neither, I hate politics": "Light Green",
  },
  "Parents' Arguments": {
    "Papa mostly sahi": "Bright Green",
    "Mummy mostly sahi": "Orange",
    "Dono barabar / Depends on situation": "Green",
    "Main kabhi notice nahi karti thi": "Big Red",
  },
  "City vs Village": {
    "100% city": "Red",
    "City hi but peaceful area": "Green",
    "Village peaceful hota hai": "Bright Green",
    "Abroad best hai": "Big Red",
  },
  "Sleep Schedule": {
    "jaldi uthna, jaldi sona": "Green",
    "jaldi uthna, late sona": "Light Green",
    "Late uthna, Late sona": "Red",
    "No fixed time, mood pe depend": "Big Red",
  },
  "Baby Planning": {
    "1-2 saal mein": "Light Green",
    "3-5 saal ke baad": "Green",
    "5+ saal ya kabhi nahi": "Red",
    "Jaisa husband kahenge": "Bright Green",
  },
  "Privacy in Relationship": {
    "Full privacy, phone bhi nahi check": "Big Red",
    "Thodi privacy but bada trust issue nahi": "Light Green",
    "Sab kuch share, no secrets": "Bright Green",
    "Mujhe full access chahiye, tumhe nahi": "Big Red",
  },
  "Money Division After Marriage": {
    "Husband manage karega, mujhe pocket money milegi": "Green",
    "Joint account + mera personal account": "Orange",
    "Sab alag-alag, bill 50-50": "Big Red",
    "Main manage karungi, husband paise denge": "Red",
  },
  "Male Friends": {
    "Haan, 1-2 close": "Big Red",
    "Haan but normal friends": "Orange",
    "Sirf colleagues/classmates, close nahi": "Green",
    "Bilkul nahi": "Bright Green",
  },
  "Husband's Salary Share": {
    "0% – husband manage kare": "Green",
    "100% - Main manage karungi": "Orange",
    "50% approx": "Orange",
    "Pocket money jaise": "Bright Green",
  },
  "Phone Password": {
    "Password dungi, kuch hide nahi": "Bright Green",
    "Sirf emergency mein dikhaungi": "Red",
    "Kabhi nahi, privacy important": "Big Red",
    "Husband bhi dega tab": "Bright Green",
  },
  "Childhood Reaction to Scolding": {
    "Roti thi": "Green",
    "Chup reh jati thi": "Bright Green",
    "Jawab deti thi": "Orange",
    "Teacher se lad padti thi": "Red",
  },
  "Biggest Family Fight": {
    "Paise ke upar": "Red",
    "Respect ke upar": "Orange",
    "Chhoti baat pe bada bawaal": "Green",
    "Kabhi bada jhagda nahi hua": "Big Red",
  },
  "Lending Money": {
    "Haan de dungi bina soch ke": "Red",
    "Sirf agar emergency ho": "Green",
    "Nahi dungi, sorry bol dungi": "Bright Green",
    "Thoda-thoda de sakti hoon max 10-15k": "Light Green",
  },
  "Changing in Husband": {
    "Uska gussa": "Orange",
    "Uski annoying(nashe, unhygienic, etc)  habits": "Bright Green",
    "Uska friend circle": "Red",
    "Kuch nahi change karungi": "Green",
  },

  "Shopping Style": {
    "Strict budget": "Bright Green",
    "Approximate idea hota hai": "Green",
    "Dil kare toh ho jata hai": "Red",
    "Paise kon dekhta hai": "Big Red",
  },
  "Handling Unwanted Attention": {
    "Direct mana kaise karun": "Red",
    "Friendly rehti but thoda door rehti hoon": "Big Red",
    "Seedha bol deti I'm not interested": "Bright Green",
    "Bina bole distance bana lungi": "Green",
  },
  "Husband Hiding Salary": {
    "Ghar chod ke maayke chali jaungi": "Big Red",
    "Bada jhagda + trust gaya forever": "Red",
    "Baat karke samjhaungi, mauka dungi": "Bright Green",
    "Chup reh jaungi": "Light Green",
  },
  "Emotional Validation & Support": {
    "Use bolungi ki 'Dream big!' par pehle ek detailed plan banao aur backup rakho.": "Bright Green",
    "Kahungi ki 'Job mat chhod, bahar bahut competition hai, safe raho.'": "Orange",
    "Bolungi ki 'Jo karna hai karo, mujhe kya? Main toh apne decisions par focus karti hoon.'": "Red",
    "Use apne purane experiences bataungi aur usko naya business shuru karne se rokungi.": "Big Red",
  },
  "Handling Past Conflicts and Forgiveness": {
    "Use maaf kar dungi aur aage badhne ki koshish karungi.": "Bright Green",
    "Maaf toh kar dungi, par uss galti ko baar-baar yaad dilaungi taaki woh dobara na kare.": "Big Red",
    "Use seedhe block kar dungi aur kabhi baat nahi karungi.": "Red",
    "Pehle usse poora sunungi, phir thoda time lekar sochungi aur agar woh badal gaya ho toh maaf karungi.": "Green",
  },
  "Social Independence and Partner's Focus": {
    "Sirf un dosto ko jo hum dono ke common hain, baaki sab zaroori nahi.": "Red",
    "Partner ke saare dosto ko importance deni chahiye aur unke saath time spend karna chahiye, woh uski life ka hissa hain.": "Green",
    "Dosto ko chhodkar, sirf relationship aur hum dono par focus karna chahiye.": "Big Red",
    "Main bas itna expect karungi ki woh apne personal aur dosto ke liye time manage kare, main interfere nahi karungi.": "Bright Green",
  },
  // Male Questions Mapping
  "Defining Commitment": {
    "Normal hai, main bhi karunga.": "Bright Green",
    "Zyada mat post karna, public mein show-off theek nahi.": "Orange",
    "Sirf close friends ko dikhana.": "Light Green",
    "Main prefer karunga ki tum mat karo.": "Big Red",
  },
  "Long-Term View": {
    "3-6 mahine": "Light Green",
    "1 saal": "Bright Green",
    "Jab feel ho, time se farak nahi padta.": "Orange",
    "Aisi cheezon ke baare mein socha nahi hai.": "Red",
  },
  "Handling Exes": {
    "Bilkul nahi, past is past.": "Bright Green",
    "Casual greetings/updates.": "Light Green",
    "Agar common friends ho toh.": "Orange",
    "Depends on the reason, agar koi help chahiye ho toh.": "Red",
  },
  "Personal Space": {
    "Jitna tum bolo, I don't need much.": "Orange",
    "Apne hobbies/work ke liye time.": "Bright Green",
    "Pure weekend friends ke saath.": "Red",
    "Mujhse depend karta hai, kabhi zyada, kabhi kam.": "Big Red",
  },
  "Support System": {
    "Sirf apne closest friends se.": "Light Green",
    "Family se.": "Green",
    "I deal with it myself.": "Big Red",
    "Jise bhi main us waqt sabse close feel karun.": "Bright Green",
  },
  "Financial View": {
    "Bohut, I save a major part of my income.": "Bright Green",
    "Important hai, but enjoyment zyada zaroori hai.": "Orange",
    "Bas itna ki bills time pe pay ho jayein.": "Red",
    "Abhi toh career pe focus hai, baad mein dekhenge.": "Big Red",
  },
  "Conflict Resolution": {
    "Pehle usko space deta hoon, phir rational baat karta hoon.": "Bright Green",
    "Ignore karta hoon jab tak situation theek na ho jaye.": "Red",
    "Uske point ko samajhne ki koshish karta hoon.": "Green",
    "Main cut off kar deta hoon agar baat bigad jaye.": "Big Red",
  },
  "Work-Life Balance": {
    "Kaam, work comes first.": "Green",
    "Party cancel karke work karunga.": "Bright Green",
    "Depend karta hai mood pe.": "Red",
    "Party karunga, kaam baad mein ho jayega.": "Orange",
  },
  "Social Responsibility": {
    "Honesty and Integrity.": "Bright Green",
    "Loyalty towards people you care about.": "Green",
    "Success and ability to provide.": "Orange",
    "Kindness and Empathy.": "Light Green",
  },
  "Jealousy/Possessiveness": {
    "Cool, bas mujhe bata dena.": "Bright Green",
    "Thodi si insecurity ho sakti hai.": "Light Green",
    "Achha nahi lagega, par trust karta hoon.": "Orange",
    "Mujhe detailed update chahiye.": "Big Red",
  },
  "Coping Mechanism": {
    "Exercise ya koi hobby.": "Bright Green",
    "Dosto ke saath time spend karna.": "Light Green",
    "Alcohol ya binge-watching.": "Big Red",
    "Akele rehna, silent mode pe.": "Red",
  },
  "Punctuality/Routine": {
    "Bahut structured, sab time pe hona chahiye.": "Green",
    "Thoda flexible, but main things are on time.": "Bright Green",
    "Bilkul flexible, I go with the flow.": "Red",
    "Bahut random, main late ho jata hoon aksar.": "Big Red",
  },
  "Physical Health/Image": {
    "Regular exercise and focus on health.": "Bright Green",
    "Jab mood ho tab, but not a priority.": "Orange",
    "Jitna zaroori ho presentable rehne ke liye.": "Light Green",
    "Bilkul kam, I don't care much about it.": "Red",
  },
  "Anger Management": {
    "Jab injustice dekha, I tried to resolve it calmly.": "Green",
    "Jab plans kharab ho gaye, I got a bit loud.": "Orange",
    "Jab kisi ne disrespect kiya, I shouted back.": "Big Red",
    "Mujhe gussa kam aata hai, I usually withdraw.": "Light Green",
  },
  "Handling Criticism": {
    "Open to change, agar woh helpful hai.": "Bright Green",
    "Thoda defensive, but I'll think about it.": "Light Green",
    "I'll ask for the reason, but won't change.": "Red",
    "Offended ho jaunga, kyunki woh meri marzi hai.": "Big Red",
  },
  // Male Relationship Questions Mapping
  "Defining the Status (Direct)": {
    "Casual Date hi bolunga": "Green",
    "Friend hi bolunga": "Big Red",
    "Relationship, if you introduce me": "Light Green",
    "Pata nahi, jaisa tum bolo": "Green",
  },
  "Commitment Timeline (Direct)": {
    "Dekhenge, abhi itni jaldi kya hai": "Red",
    "Main toh serious hoon, shaadi tak ka soch sakta hoon": "Bright Green",
    "Jab tak chal raha hai, theek hai": "Orange",
    "Jab tum comfortable ho, tab discuss karenge": "Green",
  },
  "Financial Transparency (Direct)": {
    "Sirf advice doonga": "Orange",
    "Jo main manage kar sakta hoon, utna bata doonga": "Green",
    "Apni har detail bataunga, hum ek team hain": "Bright Green",
    "Depends karta hai, tumhara kitna bada problem hai": "Red",
  },
  "Privacy & Boundaries (Direct)": {
    "Koi baat nahi, sabka personal space hota hai": "Bright Green",
    "Thoda bura lagega, kya chupa rahi ho?": "Orange",
    "Mujhe toh pata hona chahiye, hum relationship mein hain": "Red",
    "Mera phone bhi locked hi rahega ab se": "Big Red",
  },
  "Public vs. Private (Direct)": {
    "Casual friend ki tarah, haath bhi nahi pakadunga": "Big Red",
    "Sirf 'hello' bolkar aage badh jaunga": "Red",
    "Apna partner hi introduce karunga, agar unko pata chal jaye toh chal jaye": "Green",
    "Jaise normal couple karte hain, public display of affection nahi": "Bright Green",
  },
  "Conflict Resolution (Indirect)": {
    "Hamesha ladke ko, kyunki woh zyada mature hote hain": "Orange",
    "Usko jiski galti ho, chahe koi bhi ho": "Bright Green",
    "Pehle usko bolna chahiye jisko relationship ki zyada fikar hai": "Green",
    "Pehle tumko bolna chahiye, tum jaldi calm ho jati ho": "Red",
  },
  "Girl's Career (Indirect)": {
    "Bahut proud feel karunga, usko support karunga": "Bright Green",
    "Thoda insecure ho jaunga, par adjust kar loonga": "Orange",
    "Mujhe thoda 'man of the house' jaisa feel karna hai, toh adjust karna mushkil hoga": "Big Red",
    "Achcha hai, at least financial load kam hoga": "Red",
  },
  "Dealing with Friends (Indirect)": {
    "Doston ko bolunga ki woh galat hain, aur tumhe defend karunga": "Bright Green",
    "Unko bolunga ki aisi baatein mat karein, par tumhe nahi bataunga": "Orange",
    "Doston se kam milna start kar doonga": "Red",
    "Tumhe bolunga ki thoda 'fun' hona seekho, warna woh aana band kar denge": "Big Red",
  },
  "Past Relationships (Indirect)": {
    "Woh kitni supportive thi, ya usne mujhe kitna hurt kiya (Focus on learning)": "Bright Green",
    "Uske looks ya physical attraction (Focus on superficial)": "Red",
    "Uski galtiyan aur failure points (Focus on blame)": "Big Red",
    "Yeh sab baatein bekar hain, aage badhte hain (Focus on avoidance)": "Orange",
  },
  "Alone Time (Indirect)": {
    "Definitely, enjoy karo. Main bhi apne doston ke saath plan bana lunga": "Bright Green",
    "Theek hai, par mujhe bata dena tum free kab ho": "Light Green",
    "Tumhe bore toh nahi ho raha hai? Mere saath time spend karna achcha nahi lag raha?": "Orange",
    "Kya problem hai? Kya tum mujhse kuch chupa rahi ho?": "Big Red",
  },
  "Stress & Anger (Physiological/Emotional)": {
    "Gussa nikalne ke liye chilla deta hoon ya cheezein fek deta hoon": "Big Red",
    "Thoda time akele rehkar calm down hone ki koshish karta hoon": "Green",
    "Apne close friend/partner se baat karke hal nikalta hoon": "Bright Green",
    "Smoking/drinking karta hoon, ya phone off kar deta hoon": "Red",
  },
  "Emotional Need (Physiological/Emotional)": {
    "Mujhe akela chhod do, main khud hi theek ho jaunga": "Red",
    "Physical comfort, jaise ki hug/cuddle": "Bright Green",
    "Sirf suno, koi advice mat do, bas mere paas raho": "Green",
    "Mujhe koi solution do ya mera mind divert karo": "Light Green",
  },
  "Jealousy Threshold (Physiological/Emotional)": {
    "Mujhe koi farak nahi padta, tum par pura trust hai": "Bright Green",
    "Thoda awkward feel hota hai, par tumhe nahi bataunga": "Light Green",
    "Main us ladke ko seedha confront karunga": "Orange",
    "Main tum par shak karna start kar doonga, aur tumse explanation maangunga": "Big Red",
  },
  "Apology & Acceptance (Physiological/Emotional)": {
    "Ek baar sorry bol diya, ab main kya kar sakta hoon": "Big Red",
    "Jab tak tumhare chehre par smile nahi aa jati, tab tak main try karta rahunga": "Bright Green",
    "Thoda time doonga, aur phir kuch der baad dobara baat karunga": "Green",
    "Ulta main hi gussa ho jaunga ki abhi bhi kyu naraz ho": "Big Red",
  },
  "Communication Need (Physiological/Emotional)": {
    "Daily 2-3 calls, Weekend pe milna": "Bright Green",
    "Jab bhi tum bolo": "Green",
    "Jab main free hoon tab": "Red",
    "Jab tak tum interest dikhao": "Big Red",
  },
  // Male Fiance Questions Mapping
  "Post-Marriage Finances": {
    "Meri salary meri, tumhari tumhari. Bills divide kar lenge": "Green",
    "Ek joint account kho lenge jismein dono daalenge": "Bright Green",
    "Main hi sab manage karunga, tum bas budget bata dena": "Red",
    "Pehle tumhari family ki zaroorat puri karenge, phir dekhenge": "Orange",
  },
  "Parental Influence": {
    "Jo unhone bola, wahi final hoga": "Big Red",
    "Pehle main tumse discuss karunga, phir unko samjhaunga": "Bright Green",
    "Humari family life mein unka interference nahi hona chahiye": "Light Green",
    "Main unke saath hi rahoonga, tumhein adjust karna padega": "Red",
  },
  "Relocation": {
    "Main apna career chorh nahi sakta, tumhe hi sacrifice karna padega": "Red",
    "Dekhte hain, agar tumhari salary zyada ho toh main sochunga": "Orange",
    "Hum dono milkar faisla lenge ki kiske liye behtar hai": "Bright Green",
    "Mujhe koi problem nahi, main kahin bhi adjust kar loonga": "Green",
  },
  "Time Allocation": {
    "Poora din bas apne family members ke saath bitaunga": "Orange",
    "Morning tumhare saath, evening main apne doston/family ko doonga": "Green",
    "Humari choti family (tum aur main) priority hogi": "Bright Green",
    "Jaise abhi karte hain, waise hi chalega": "Light Green",
  },
  "Disagreement Handling": {
    "Jo zyada mature ho, uska": "Green",
    "Mera hi hona chahiye, I am the man of the house": "Big Red",
    "Humesha solution dhundhenge jo dono ko comfortable ho": "Bright Green",
    "Jis se main darrunga (galti se), uska": "Red",
  },
  "Partner's Friends": {
    "Bohot zyada distance, milna-julna band kar dena chahiye": "Big Red",
    "Sirf group mein ya jab tum mere saath ho tab": "Red",
    "Friendship maintain karni chahiye, jab tak trust break na ho": "Bright Green",
    "Jo friends tumhe pasand nahi hain, unse nahi milna chahiye": "Orange",
  },
  "Handling Failure": {
    "Main bolunga 'tumse nahi hoga', ya 'main hi kar loonga'": "Big Red",
    "Tumhe himmat doonga aur next time ke liye help karunga": "Bright Green",
    "Mujhe bohot gussa aayega, itna time waste kar diya": "Red",
    "Poochunga ki kya tumne poori mehnat ki thi?": "Orange",
  },
  "Ideal Wife Trait": {
    "Jo mere family members ki care kare aur ghar sambhaale": "Orange",
    "Jo apne career aur ghar ko achhe se balance kar le": "Green",
    "Jo independent ho aur mujhe challenge kar sake": "Bright Green",
    "Jo meri har baat maane aur argue na kare": "Red",
  },
  "Leisure Time": {
    "Woh jo mujhe pasand hain ya mere doston ko pasand hain": "Red",
    "Aise hobbies jo hum dono saath mein enjoy kar sakein": "Bright Green",
    "Tumhare hobbies ko main support karunga, par main apna karunga": "Green",
    "Jo meri family ko achha lage, wahi karenge": "Orange",
  },
  "Unsolicited Advice": {
    "Us dost par trust karunga aur tumse chhipakar tumhe monitor karunga": "Big Red",
    "Seedha tumse poochunga aur situation clear karunga": "Bright Green",
    "Main us dost ko samjhaunga ki humare beech mein na pade": "Green",
    "Ignore kar doonga, mujhe tum par trust hai": "Light Green",
  },
  "Expressing Love": {
    "Us time main pyaar nahi dikhaunga, jab mood theek hoga tab karenge": "Orange",
    "Physical distance bana loonga ya silent ho jaunga": "Green",
    "Tab bhi tumhari care karunga, taaki tum safe feel karo": "Bright Green",
    "Main apna gussa tum par nikal doonga aur baad mein sorry bolunga": "Red",
  },
  "Handling Tears": {
    "Emotional ho jaunga aur main bhi rone lagunga": "Orange",
    "Tumhe chup karaunga, hal nikalunga, aur comfort doonga": "Bright Green",
    "Poochunga ki *dikhawa toh nahi kar rahi ho?*": "Big Red",
    "Main wahan se chala jaunga, mujhe drama pasand nahi hai": "Red",
  },
  "Coping Mechanism": {
    "Bahut zyada kaam karunga ya khelunga (avoidance)": "Orange",
    "Apne feelings ko pi jaunga aur kisi ko nahi bataunga": "Red",
    "Tumse baat karunga ya kissi trusted source se advice loonga": "Bright Green",
    "Smoking/drinking karunga ya phone switch off kar doonga (maladaptive)": "Big Red",
  },
  "Need for Approval": {
    "Mera har decision tumhe pasand hona chahiye, warna main change kar doonga": "Red",
    "Main tumhari rai loonga par last decision mera hoga": "Orange",
    "Mera decision mera hai, tumhari approval ki zaroorat nahi hai": "Light Green",
    "Humara decision hona chahiye, not just mine or yours": "Bright Green",
  },
};

// Shuffle questions for randomization
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Store selected relationship stage
let selectedStage = null;
let shuffledQuizData = [];

// Get quiz data based on relationship stage
function getQuizDataForStage(stage) {
  let questions;
  switch(stage) {
    case 'situationship-female':
      questions = situationshipQuestions;
      break;
    case 'relationship-female':
      questions = relationshipQuestions;
      break;
    case 'fiancee-female':
      questions = fianceQuestions;
      break;
    case 'situationship-male':
      questions = situationshipMaleQuestions;
      break;
    case 'relationship-male':
      questions = relationshipMaleQuestions;
      break;
    case 'fiance-male':
      questions = fianceMaleQuestions;
      break;
    default:
      questions = situationshipQuestions;
  }
  
  // Add original index to each question before shuffling
  return questions.map((q, index) => ({...q, originalIndex: index}));
}

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
const prevButton = document.getElementById("prev-button");

let brightGreen = 0;
let green = 0;
let lightGreen = 0;
let orange = 0;
let red = 0;
let bigRed = 0;

const loadQuestion = () => {
  if (currentQuestionIndex >= shuffledQuizData.length) {
    showResults();
    return;
  }

  choicesContainer.innerHTML = "";
  nextButton.disabled = true;
  currentSelection = null;

  // Show/hide previous button
  if (currentQuestionIndex > 0) {
    prevButton.style.display = "inline-block";
  } else {
    prevButton.style.display = "none";
  }

  // If going back, restore previous selection
  if (userFavorites[currentQuestionIndex]) {
    currentSelection = userFavorites[currentQuestionIndex].choice;
    nextButton.disabled = false;
  }

  const currentQuestion = shuffledQuizData[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  // Update progress bar
  const progressFill = document.getElementById('progress-fill');
  const progressPercent = ((currentQuestionIndex + 1) / shuffledQuizData.length) * 100;
  if (progressFill) {
    progressFill.style.width = progressPercent + '%';
  }

  // Update question number
  const questionNumber = document.getElementById('question-number');
  if (questionNumber) {
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuizData.length}`;
  }

  if (currentQuestionIndex === shuffledQuizData.length - 1) {
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

  const currentCategory = shuffledQuizData[currentQuestionIndex].category;
  
  // Update or add answer with original index for proper ordering
  userFavorites[currentQuestionIndex] = {
    category: currentCategory,
    choice: currentSelection,
    originalIndex: shuffledQuizData[currentQuestionIndex].originalIndex
  };

  currentQuestionIndex++;
  loadQuestion();
});

prevButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
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

    // Add to detailed answers with original index
    detailedAnswers.push({
      question: item.category,
      answer: item.choice,
      flag: color,
      originalIndex: item.originalIndex !== undefined ? item.originalIndex : 999
    });

    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.category}</strong><br>${item.choice}`;
    finalResultsList.appendChild(li);
  });

  // Calculate weighted points
  const totalRedPoints = (orange * 0.5) + (red * 1) + (bigRed * 2);
  const totalGreenPoints = (lightGreen * 0.5) + (green * 1) + (brightGreen * 2);

  let verdict = "";

  if (totalRedPoints >= totalGreenPoints * 2.5) {
    verdict = "This relationship shows multiple serious red flags.";
  } else if (totalRedPoints >= totalGreenPoints * 1.5) {
    verdict = "There are several concerning patterns that deserve attention.";
  } else if (totalGreenPoints >= totalRedPoints * 2) {
    verdict = "This relationship shows many healthy, respectful behaviours.";
  } else if (totalGreenPoints > totalRedPoints) {
    verdict = "Overall healthy, with some areas to watch.";
  } else {
    verdict = "The concerns and positive signs are roughly balanced. Reflection is needed.";
  }
  
  // Submit results to server if this is a shared quiz
  submitResultsToServer(verdict, detailedAnswers);
}

// Get session ID from URL
const urlParams = new URLSearchParams(window.location.search);
const sessionId = urlParams.get('s') || urlParams.get('sessionId');

// Check if this is a shared quiz
async function checkSession() {
  if (!sessionId) {
    showCuteAlert('Invalid quiz link', () => {
      window.location.href = '/login';
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
    
    // Load questions based on session stage
    const stageQuestions = getQuizDataForStage(session.stage);
    shuffledQuizData = shuffleArray(stageQuestions);
    
    // Ask for user's name with cute modal
    showNameInputModal(session.creatorName);
  } catch (error) {
    showCuteAlert('Session not found', () => {
      window.location.href = '/login';
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
  const isMobile = window.innerWidth <= 480;
  
  overlay.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: linear-gradient(135deg, #ff9ec8, #ffb8d8);
    color: white;
    padding: ${isMobile ? '35px 45px' : '50px 80px'};
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(255, 105, 180, 0.5);
    z-index: 10000;
    text-align: center;
    font-size: ${isMobile ? '1.5rem' : '2rem'};
    font-weight: bold;
    animation: popIn 0.5s ease forwards;
    border: 4px solid white;
    max-width: ${isMobile ? '90%' : 'auto'};
  `;
  overlay.innerHTML = `
    <div style="font-size: ${isMobile ? '2.5rem' : '3.5rem'}; margin-bottom: 15px;">💕</div>
    <div>Thank You!</div>
    <div style="font-size: ${isMobile ? '1rem' : '1.4rem'}; margin-top: 10px; font-weight: normal;">for your time and all the effort you put in.💖</div>
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


