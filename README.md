# PartnerScan - Relationship Compatibility Quiz

A collaborative relationship quiz application where User1 selects a relationship stage, creates a shareable link, and User2 takes the stage-specific quiz. Results are automatically saved and sent back to User1.

## Features

- User authentication with password confirmation
- Relationship stage selector (Situationship, Relationship, Fiancée)
- Stage-specific question sets (15/15/21 questions)
- Question randomization with original order tracking
- Shortened shareable quiz links (?s=)
- Clean URLs without .html extensions
- Results automatically sent to User1 via email
- Inbox with detailed results in original question order
- Interactive info tooltips showing full question lists
- Mobile-optimized responsive design
- Dashboard to view all quiz sessions with stage badges

## Setup

1. **Install MongoDB**:
   - Download from https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
   - Start MongoDB service: `mongod` (if local)

2. **Install dependencies**:
```bash
npm install
```

3. **Configure environment variables**:
   - Copy `.env.example` to `.env`
   - Update MongoDB URI (if not using default local)
   - Add your email credentials for notifications:
     - For Gmail: Enable 2FA and create an app-specific password
     - Update `EMAIL_USER` and `EMAIL_PASSWORD` in `.env`

4. **Start the server**:
```bash
npm start
```

5. **Open browser** at `http://localhost:3000`

## Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER 1 (Creator)                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    1. Visit /landing
                    2. Create account / Login
                              │
                              ▼
                    3. Redirected to /dashboard
                              │
                              ▼
              4. Select relationship stage:
                 - Situationship (15 questions)
                 - Relationship (15 questions)
                 - Fiancée (21 questions)
                              │
                              ▼
                    5. Click "Start" button
                              │
                              ▼
              6. Server generates unique session
                 Saves to MongoDB with sessionId & stage
                              │
                              ▼
              7. Get shortened shareable link
                 (e.g., /quiz?s=abc123)
                              │
                              ▼
              8. Copy & share link via WhatsApp/Email
                              │
                              │
┌─────────────────────────────┴───────────────────────────────────┐
│                                                                  │
│                         USER 2 (Quiz Taker)                      │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    9. Click shared link
                              │
                              ▼
              10. Taken to /quiz?s=abc123
                  Server verifies session & loads stage questions
                              │
                              ▼
                    11. Enter name (prompt)
                              │
                              ▼
              12. Questions randomized (order tracked)
                              │
                              ▼
                    13. Complete quiz questions
                              │
                              ▼
                    14. Submit results
                              │
                              ▼
              15. Results saved to MongoDB with originalIndex
                  Session marked as completed
                              │
                              ▼
              16. Email sent to User1 with results
                              │
                              │
┌─────────────────────────────┴───────────────────────────────────┐
│                                                                  │
│                    USER 1 (View Results)                         │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
              17. Receives email notification
                  OR clicks "Inbox" on dashboard
                              │
                              ▼
              18. See all quiz sessions with stage badges
                  - Pending sessions
                  - Completed sessions with scores
                              │
                              ▼
              19. Click "View Results" for detailed answers
                  - Answers shown in original question order
                  - Full question text with User2's responses
```

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js + Express.js
- **Database**: MongoDB + Mongoose ODM
- **Session Management**: express-session + connect-mongo
- **Email**: nodemailer
- **Authentication**: bcryptjs (password hashing)
- **IDs**: UUID v4

## Project Structure

```
partnerscan/
├── models/
│   ├── User.js              # User schema
│   └── QuizSession.js       # Quiz session schema
├── public/
│   ├── landing.html         # Landing page
│   ├── login.html           # Login page
│   ├── signup.html          # Signup page
│   ├── dashboard.html       # Dashboard with stage selector
│   ├── quiz.html            # Quiz interface
│   ├── inbox.html           # Results inbox
│   ├── privacy.html         # Privacy policy
│   ├── terms.html           # Terms of service
│   ├── script.js            # Quiz logic
│   ├── auth.js              # Authentication logic
│   ├── home.js              # Dashboard logic
│   ├── inbox.js             # Inbox logic
│   ├── quiz-data.js         # Question data by stage
│   ├── toast.js             # Toast notifications
│   ├── style.css            # Quiz styles
│   ├── dashboard.css        # Dashboard styles
│   ├── landing.css          # Landing page styles
│   ├── auth.css             # Auth page styles
│   └── images/
│       ├── favicon.png      # Browser tab icon
│       ├── logo.png         # Webpage logo
│       ├── info-icon.svg    # Info tooltip icon
│       ├── female-bow.png   # Female card icon
│       └── male-bow.png     # Male card icon
├── server.js                # Express server
├── check-setup.js           # Setup verification
├── package.json             # Dependencies
└── .env                     # Environment variables
```

## Database Schema

**User Model:**
- name, email, password (hashed), createdAt

**QuizSession Model:**
- sessionId (unique), creatorId, creatorEmail, creatorName
- stage (situationship/relationship/fiancee)
- completed, takerName
- results (brightGreen, green, lightGreen, orange, red, bigRed, verdict)
- answers (array with questionIndex, originalIndex, answer)
- createdAt, completedAt

## Production Notes

- Use MongoDB Atlas for cloud database
- Add proper environment variables for all secrets
- Configure proper SMTP service (SendGrid, AWS SES, etc.)
- Add HTTPS with SSL certificates
- Add rate limiting and security measures
- Add input validation and sanitization
- Implement proper error handling and logging
