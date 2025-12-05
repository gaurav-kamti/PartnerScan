# ✅ Setup Checklist

Follow this checklist to get your PartnerScan app running:

## 📦 Prerequisites

- [ ] Node.js installed (v14+)
  - Check: `node --version`
  - Download: https://nodejs.org/

- [ ] npm installed (comes with Node.js)
  - Check: `npm --version`

## 🗄️ Database Setup

Choose ONE option:

### Option A: MongoDB Atlas (Cloud - Recommended)
- [ ] Create free account at https://www.mongodb.com/cloud/atlas
- [ ] Create a new cluster (M0 Free tier)
- [ ] Create database user with password
- [ ] Add IP address to whitelist (0.0.0.0/0 for development)
- [ ] Get connection string
- [ ] Update `MONGODB_URI` in `.env` file

**Detailed instructions:** See `MONGODB_SETUP.md`

### Option B: Local MongoDB
- [ ] Download MongoDB Community Server
- [ ] Install MongoDB
- [ ] Start MongoDB service
- [ ] Keep default `MONGODB_URI` in `.env`

**Detailed instructions:** See `MONGODB_SETUP.md`

## 📧 Email Setup (Optional but Recommended)

For Gmail:
- [ ] Have a Gmail account
- [ ] Enable 2-Factor Authentication
- [ ] Generate App Password: https://myaccount.google.com/apppasswords
- [ ] Update `EMAIL_USER` in `.env`
- [ ] Update `EMAIL_PASSWORD` in `.env` (use app password, not regular password)

**Note:** Without email setup, results will still be saved and visible on dashboard.

## 🔧 Project Setup

- [ ] Clone/download project files
- [ ] Open terminal in project directory
- [ ] Run: `npm install`
- [ ] Copy `.env.example` to `.env` (if not exists)
- [ ] Update `.env` with your credentials:
  - [ ] `MONGODB_URI`
  - [ ] `EMAIL_USER`
  - [ ] `EMAIL_PASSWORD`
  - [ ] `SESSION_SECRET` (change from default)

## ✅ Verify Setup

- [ ] Run: `npm run check`
- [ ] Should see: "✅ MongoDB connected successfully!"
- [ ] Should see: "✅ Set" for all environment variables

## 🚀 Start Server

- [ ] Run: `npm start`
- [ ] Should see: "✅ Connected to MongoDB"
- [ ] Should see: "Server running on http://localhost:3000"
- [ ] Open browser: http://localhost:3000

## 🧪 Test the Application

### Test User1 Flow:
- [ ] Visit: http://localhost:3000/landing
- [ ] Click "Get Started"
- [ ] Create account with name, email, password, confirm password
- [ ] Should redirect to dashboard
- [ ] Select relationship stage (Situationship/Relationship/Fiancée)
- [ ] Click "Start" button
- [ ] Should see shareable link appear (shortened with ?s=)
- [ ] Copy the link

### Test User2 Flow:
- [ ] Open copied link in incognito/another browser
- [ ] Should prompt for name
- [ ] Enter name
- [ ] Should see quiz questions
- [ ] Answer all questions
- [ ] Click "Next Question" for each
- [ ] Click "Finish Survey" on last question
- [ ] Should see results screen
- [ ] Click arrow button to see final verdict

### Test Results:
- [ ] Check User1's email for notification (if email configured)
- [ ] Go back to User1's browser
- [ ] Click "Inbox" button on dashboard
- [ ] Should see completed session with stage badge
- [ ] Click "View Results" to see detailed answers in original order
- [ ] Should show User2's name and all answers

## 🐛 Troubleshooting

If something doesn't work:

**MongoDB Connection Error:**
- [ ] Check if MongoDB service is running
- [ ] Verify `MONGODB_URI` in `.env` is correct
- [ ] For Atlas: Check network access settings
- [ ] For Atlas: Verify username/password

**Email Not Sending:**
- [ ] Verify email credentials in `.env`
- [ ] Make sure using app password, not regular password
- [ ] Check spam folder
- [ ] Note: Quiz still works without email

**Port Already in Use:**
- [ ] Change `PORT` in `.env` to different number (e.g., 3001)
- [ ] Or stop other services using port 3000

**Page Not Loading:**
- [ ] Check if server is running
- [ ] Check console for errors
- [ ] Try clearing browser cache

## 📚 Next Steps

Once everything works:

- [ ] Read `README.md` for full documentation
- [ ] Customize quiz questions in `public/script.js`
- [ ] Modify styles in `public/*.css`
- [ ] Add more features as needed

## 🎯 Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run check` | Verify setup |
| `npm start` | Start server |
| `npm run dev` | Start with auto-reload (needs nodemon) |

| URL | Purpose |
|-----|---------|
| `/landing` | Landing page |
| `/signup` | Create account |
| `/login` | Login |
| `/dashboard` | Dashboard with stage selector |
| `/inbox` | Results inbox |
| `/quiz?s=...` | Take quiz (shortened shared link) |

## ✨ Success Criteria

You're all set when:
- ✅ Server starts without errors
- ✅ Can create account and login
- ✅ Can generate shareable link
- ✅ Can take quiz via shared link
- ✅ Results appear on dashboard
- ✅ (Optional) Email notifications work

---

**Need help?** Check:
- `QUICKSTART.md` - Quick start guide
- `MONGODB_SETUP.md` - Database setup
- `PROJECT_SUMMARY.md` - Project overview
- `README.md` - Full documentation
