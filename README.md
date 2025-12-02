# Rishta Radar - Collaborative Quiz App

A collaborative quiz application where User1 creates a shareable link and User2 takes the quiz, with results automatically sent back to User1.

## Features

- User authentication (signup/login)
- Generate unique shareable quiz links
- User2 takes quiz via shared link
- Results automatically sent to User1 via email
- Dashboard to view all quiz sessions and results

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
                    1. Visit /signup.html
                    2. Create account / Login
                              │
                              ▼
                    3. Redirected to /index.html
                              │
                              ▼
                    4. Click "Start" button
                              │
                              ▼
              5. Server generates unique session
                 Saves to MongoDB with sessionId
                              │
                              ▼
              6. Get shareable link with sessionId
                 (e.g., /quiz.html?sessionId=abc123)
                              │
                              ▼
              7. Copy & share link via WhatsApp/Email
                              │
                              │
┌─────────────────────────────┴───────────────────────────────────┐
│                                                                  │
│                         USER 2 (Quiz Taker)                      │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    8. Click shared link
                              │
                              ▼
              9. Taken to /quiz.html?sessionId=abc123
                 Server verifies session exists
                              │
                              ▼
                    10. Enter name (prompt)
                              │
                              ▼
                    11. Complete quiz questions
                              │
                              ▼
                    12. Submit results
                              │
                              ▼
              13. Results saved to MongoDB
                  Session marked as completed
                              │
                              ▼
              14. Email sent to User1 with results
                              │
                              │
┌─────────────────────────────┴───────────────────────────────────┐
│                                                                  │
│                    USER 1 (View Results)                         │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
              15. Receives email notification
                  OR views dashboard on homepage
                              │
                              ▼
              16. See all quiz sessions & results
                  - Pending sessions
                  - Completed sessions with scores
```

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Session Management: express-session + connect-mongo
- Email: nodemailer
- Authentication: bcryptjs

## Database Schema

**User Model:**
- name, email, password (hashed), createdAt

**QuizSession Model:**
- sessionId (unique), creatorId, creatorEmail, creatorName
- completed, takerName, results (brightGreen, green, etc.)
- createdAt, completedAt

## Production Notes

- Use MongoDB Atlas for cloud database
- Add proper environment variables for all secrets
- Configure proper SMTP service (SendGrid, AWS SES, etc.)
- Add HTTPS with SSL certificates
- Add rate limiting and security measures
- Add input validation and sanitization
- Implement proper error handling and logging
