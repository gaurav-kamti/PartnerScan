require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

// Import models
const User = require('./models/User');
const QuizSession = require('./models/QuizSession');

// Email transporter - lazy initialization
let transporter;
function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }
  return transporter;
}

// Generate 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP email
async function sendOTPEmail(email, name, otp) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Verification Code - PartnerScan',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h2 style="color: #667eea; margin: 0;">PartnerScan ⚡</h2>
        </div>
        <h3 style="color: #333;">Hi ${name}! 👋</h3>
        <p style="color: #666; font-size: 1rem;">Thank you for signing up! Use this code to verify your email:</p>
        
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
          <div style="color: white; font-size: 0.9rem; margin-bottom: 10px;">YOUR VERIFICATION CODE</div>
          <div style="background: white; display: inline-block; padding: 20px 40px; border-radius: 10px;">
            <span style="font-size: 2.5rem; font-weight: bold; color: #667eea; letter-spacing: 8px;">${otp}</span>
          </div>
        </div>
        
        <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 5px;">
          <p style="margin: 0; color: #856404; font-size: 0.9rem;">⚠️ This code expires in <strong>10 minutes</strong>.</p>
        </div>
      </div>
    `
  };
  
  try {
    await getTransporter().sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rishta-radar';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    // Start cleanup job
    startCleanupJob();
  })
  .catch(err => console.error('❌ MongoDB Error:', err.message));

// Cleanup expired sessions
async function cleanupExpiredSessions() {
  try {
    const now = new Date();
    const result = await QuizSession.deleteMany({
      expiresAt: { $lt: now },
      completed: false
    });
    if (result.deletedCount > 0) {
      console.log(`🧹 Cleaned up ${result.deletedCount} expired session(s)`);
    }
  } catch (error) {
    console.error('❌ Cleanup error:', error.message);
  }
}

// Run cleanup every hour
function startCleanupJob() {
  cleanupExpiredSessions(); // Run immediately on startup
  setInterval(cleanupExpiredSessions, 60 * 60 * 1000); // Run every hour
}

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: MONGODB_URI,
    touchAfter: 24 * 3600
  }),
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

// Auth middleware
const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  next();
};

// Clean URL routes (without .html)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/landing.html');
});

app.get('/landing', (req, res) => {
  res.sendFile(__dirname + '/public/landing.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/public/signup.html');
});

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/dashboard.html');
});

app.get('/quiz', (req, res) => {
  res.sendFile(__dirname + '/public/quiz.html');
});

app.get('/inbox', (req, res) => {
  res.sendFile(__dirname + '/public/inbox.html');
});

app.get('/privacy', (req, res) => {
  res.sendFile(__dirname + '/public/privacy.html');
});

app.get('/terms', (req, res) => {
  res.sendFile(__dirname + '/public/terms.html');
});

app.get('/result', (req, res) => {
  res.sendFile(__dirname + '/public/result.html');
});

app.get('/verify-otp', (req, res) => {
  res.sendFile(__dirname + '/public/verify-otp.html');
});

// Routes
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 8);
    
    // Generate OTP
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    
    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationOTP: otp,
      otpExpires: otpExpires
    });
    
    await user.save();
    
    // Send OTP email
    const emailSent = await sendOTPEmail(email, name, otp);
    
    // If email fails, log OTP for debugging but still require verification
    if (!emailSent) {
      console.log('⚠️  Email failed to send. OTP for debugging:', otp);
      // Still require verification - user can use resend button
    }
    
    req.session.userId = user._id.toString();
    res.json({ success: true, userId: user._id, name: user.name, email: user.email, needsVerification: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Verify OTP
app.post('/api/verify-otp', requireAuth, async (req, res) => {
  try {
    const { otp } = req.body;
    
    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    if (user.emailVerified) {
      return res.status(400).json({ error: 'Email already verified' });
    }
    
    // Check if OTP expired
    if (new Date() > user.otpExpires) {
      return res.status(400).json({ error: 'Code expired. Please request a new one.' });
    }
    
    // Check attempts
    if (user.otpAttempts >= 5) {
      return res.status(429).json({ error: 'Too many attempts. Please request a new code.' });
    }
    
    // Verify OTP
    if (user.verificationOTP !== otp) {
      user.otpAttempts += 1;
      await user.save();
      return res.status(400).json({ error: `Invalid code. ${5 - user.otpAttempts} attempts remaining.` });
    }
    
    // Success - verify email
    user.emailVerified = true;
    user.verificationOTP = undefined;
    user.otpExpires = undefined;
    user.otpAttempts = 0;
    await user.save();
    
    res.json({ success: true, message: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Resend OTP
app.post('/api/resend-otp', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    if (user.emailVerified) {
      return res.status(400).json({ error: 'Email already verified' });
    }
    
    // Generate new OTP
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
    
    user.verificationOTP = otp;
    user.otpExpires = otpExpires;
    user.otpAttempts = 0;
    await user.save();
    
    // Send email
    const emailSent = await sendOTPEmail(user.email, user.name, otp);
    
    if (!emailSent) {
      return res.status(500).json({ error: 'Failed to send email' });
    }
    
    res.json({ success: true, message: 'New code sent' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    req.session.userId = user._id.toString();
    
    // Check if email verification is needed
    if (!user.emailVerified) {
      return res.json({ 
        success: true, 
        userId: user._id, 
        name: user.name, 
        email: user.email,
        needsVerification: true 
      });
    }
    
    res.json({ success: true, userId: user._id, name: user.name });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

app.get('/api/me', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ id: user._id, email: user.email, name: user.name });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create quiz session
app.post('/api/create-session', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const { stage, nickname } = req.body;
    const sessionId = uuidv4();
    
    const quizSession = new QuizSession({
      sessionId,
      creatorId: user._id,
      creatorEmail: user.email,
      creatorName: user.name,
      stage: stage || 'situationship-female',
      nickname: nickname || ''
    });
    
    await quizSession.save();
    
    const shareLink = `${req.protocol}://${req.get('host')}/quiz?s=${sessionId}`;
    res.json({ sessionId, shareLink });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get session info
app.get('/api/session/:sessionId', async (req, res) => {
  try {
    const session = await QuizSession.findOne({ sessionId: req.params.sessionId });
    
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    
    // Check if expired
    if (new Date() > session.expiresAt) {
      return res.status(410).json({ error: 'Quiz link has expired' });
    }
    
    if (session.completed) {
      return res.status(400).json({ error: 'Quiz already completed' });
    }
    
    res.json({
      id: session.sessionId,
      completed: session.completed,
      creatorName: session.creatorName,
      stage: session.stage || 'situationship'
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Submit quiz results
app.post('/api/submit-results', async (req, res) => {
  try {
    const { sessionId, results, userName } = req.body;
    
    const session = await QuizSession.findOne({ sessionId });
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    
    if (session.completed) {
      return res.status(400).json({ error: 'Quiz already completed' });
    }
    
    session.completed = true;
    session.results = {
      ...results,
      detailedAnswers: results.detailedAnswers || []
    };
    session.takerName = userName;
    session.completedAt = new Date();
    
    await session.save();
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user's quiz sessions
app.get('/api/my-sessions', requireAuth, async (req, res) => {
  try {
    const sessions = await QuizSession.find({ 
      creatorId: req.session.userId,
      archived: { $ne: true }
    }).sort({ createdAt: -1 });
    
    const userSessions = sessions.map(s => {
      const isExpired = new Date() > s.expiresAt;
      return {
        id: s.sessionId,
        nickname: s.nickname,
        completed: s.completed,
        takerName: s.takerName,
        createdAt: s.createdAt,
        completedAt: s.completedAt,
        expiresAt: s.expiresAt,
        expired: isExpired,
        results: s.results
      };
    });
    
    res.json(userSessions);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get specific result by session ID (public)
app.get('/api/result/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    const session = await QuizSession.findOne({ sessionId });
    
    if (!session) {
      return res.status(404).json({ error: 'Result not found' });
    }
    
    if (!session.completed) {
      return res.status(404).json({ error: 'Quiz not completed yet' });
    }
    
    res.json({
      takerName: session.takerName,
      results: session.results,
      completedAt: session.completedAt
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete session
app.delete('/api/session/:sessionId', requireAuth, async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    const session = await QuizSession.findOne({ sessionId, creatorId: req.session.userId });
    
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    
    await QuizSession.deleteOne({ sessionId });
    res.json({ success: true, message: 'Session deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Archive session
app.patch('/api/session/:sessionId/archive', requireAuth, async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    const session = await QuizSession.findOne({ sessionId, creatorId: req.session.userId });
    
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    
    session.archived = !session.archived;
    await session.save();
    
    res.json({ success: true, archived: session.archived });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {});
