# 🎯 START HERE - PartnerScan Setup

Welcome! Your collaborative quiz app is ready. Follow these steps to get started.

## ⚡ Quick Start (3 Steps)

### Step 1: Setup MongoDB
You need a database. Choose the easiest option for you:

**Option A: MongoDB Atlas (Cloud - Recommended)**
- Free, no installation needed
- Takes 5 minutes
- Follow: `MONGODB_SETUP.md`

**Option B: Local MongoDB**
- Download and install MongoDB
- Follow: `MONGODB_SETUP.md`

### Step 2: Configure Email (Optional)
For email notifications when quiz is completed:
- Use Gmail with app password
- Update `.env` file with your credentials
- See `SETUP_CHECKLIST.md` for details

**Note:** App works without email! Results still saved to database.

### Step 3: Run the App
```bash
npm run check    # Verify setup
npm start        # Start server
```

Visit: `http://localhost:3000`

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **START_HERE.md** | This file - quick start guide |
| **QUICKSTART.md** | Detailed setup instructions |
| **SETUP_CHECKLIST.md** | Step-by-step checklist |
| **MONGODB_SETUP.md** | Database setup guide |
| **PROJECT_SUMMARY.md** | Complete project overview |
| **README.md** | Full documentation |

## 🎮 How It Works

```
1. User1 creates account → Selects relationship stage
2. User1 generates shareable link (shortened with ?s=)
3. User1 shares link with User2 (WhatsApp, email, etc.)
4. User2 clicks link → Takes stage-specific quiz (randomized)
5. Results automatically saved to MongoDB with original order
6. User1 receives email + sees detailed results in inbox
```

## 🆘 Need Help?

**MongoDB not connecting?**
→ See `MONGODB_SETUP.md`

**Email not working?**
→ Check `.env` file, use app password not regular password

**Port already in use?**
→ Change `PORT` in `.env` file

**Other issues?**
→ Check `SETUP_CHECKLIST.md` troubleshooting section

## ✅ What's Included

- ✅ User authentication with password confirmation
- ✅ MongoDB database integration
- ✅ Relationship stage selector (Situationship/Relationship/Fiancée)
- ✅ Stage-specific question sets
- ✅ Question randomization with order tracking
- ✅ Shortened shareable quiz links (?s=)
- ✅ Email notifications
- ✅ Results inbox with original question order
- ✅ Interactive info tooltips
- ✅ Clean URLs without .html extensions
- ✅ Mobile-optimized responsive design
- ✅ Complete documentation

## 🚀 Next Steps

1. **Setup MongoDB** (5 minutes)
2. **Run `npm run check`** to verify
3. **Run `npm start`** to launch
4. **Visit `http://localhost:3000/landing`**
5. **Create account and test!**

---

**Ready?** → Open `QUICKSTART.md` for detailed instructions!
