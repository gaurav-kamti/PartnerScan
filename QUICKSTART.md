# 🚀 Quick Start Guide

## Prerequisites
- Node.js installed (v14 or higher)
- MongoDB (local or Atlas account)

## Setup Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Setup MongoDB
Choose one option:

**Option A: MongoDB Atlas (Cloud - Easiest)**
- See `MONGODB_SETUP.md` for detailed instructions
- Get your connection string from Atlas
- Update `.env` file with your connection string

**Option B: Local MongoDB**
- Install MongoDB Community Server
- Start MongoDB service
- Use default connection in `.env`

### 3️⃣ Configure Environment
Copy `.env.example` to `.env` and update:
```env
MONGODB_URI=your-mongodb-connection-string
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### 4️⃣ Check Setup
```bash
npm run check
```

This will verify:
- Environment variables are set
- MongoDB connection works

### 5️⃣ Start Server
```bash
npm start
```

Server will run at: `http://localhost:3000`

## 🎯 Testing the Flow

1. **User1 (Creator)**:
   - Visit `http://localhost:3000/signup.html`
   - Create an account
   - Click "Start" button
   - Copy the generated link

2. **User2 (Quiz Taker)**:
   - Open the shared link in another browser/incognito
   - Enter your name
   - Complete the quiz
   - Submit results

3. **User1 (View Results)**:
   - Check email for notification
   - Or view results on dashboard (homepage)

## 📧 Email Setup (Optional but Recommended)

For Gmail:
1. Enable 2-Factor Authentication
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use app password in `.env` file

Without email setup, results will still be saved to database and visible on dashboard.

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Check if MongoDB service is running
- Verify connection string in `.env`
- See `MONGODB_SETUP.md` for detailed setup

**Email Not Sending:**
- Verify email credentials in `.env`
- Check if app password is correct (not regular password)
- Email errors won't stop quiz submission

**Port Already in Use:**
- Change `PORT` in `.env` file
- Or stop other services using port 3000

## 📁 Project Structure

```
rishta-radar/
├── models/
│   ├── User.js              # User schema
│   └── QuizSession.js       # Quiz session schema
├── public/
│   ├── login.html           # Login page
│   ├── signup.html          # Signup page
│   ├── index.html           # Homepage/Dashboard
│   ├── quiz.html            # Quiz page
│   ├── script.js            # Quiz logic
│   ├── auth.js              # Auth logic
│   └── *.css                # Styles
├── server.js                # Express server
├── check-setup.js           # Setup checker
├── .env                     # Environment variables
└── package.json             # Dependencies
```

## 🎨 Customization

**Add More Questions:**
- Edit `public/script.js`
- Update `quizData` array

**Change Scoring:**
- Edit `choiceToValueMap` in `public/script.js`

**Modify Email Template:**
- Edit email HTML in `server.js` (submit-results endpoint)

## 🚀 Deployment

For production deployment:
1. Use MongoDB Atlas (cloud database)
2. Deploy to Heroku, Vercel, or AWS
3. Set environment variables on hosting platform
4. Use proper SMTP service (SendGrid, AWS SES)
5. Enable HTTPS
6. Add rate limiting and security headers

## 📞 Support

Check these files for help:
- `README.md` - Full documentation
- `MONGODB_SETUP.md` - Database setup
- `QUICKSTART.md` - This file
