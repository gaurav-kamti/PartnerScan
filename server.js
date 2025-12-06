require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

// Import models
const User = require('./models/User');
const QuizSession = require('./models/QuizSession');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rishta-radar';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err.message));

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

// Routes
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      name,
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    req.session.userId = user._id.toString();
    res.json({ success: true, userId: user._id, name: user.name });
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
    
    const { stage } = req.body;
    const sessionId = uuidv4();
    
    const quizSession = new QuizSession({
      sessionId,
      creatorId: user._id,
      creatorEmail: user.email,
      creatorName: user.name,
      stage: stage || 'situationship-female'
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
    const sessions = await QuizSession.find({ creatorId: req.session.userId })
      .sort({ createdAt: -1 });
    
    const userSessions = sessions.map(s => {
      return {
        id: s.sessionId,
        completed: s.completed,
        takerName: s.takerName,
        createdAt: s.createdAt,
        completedAt: s.completedAt,
        results: s.results
      };
    });
    
    res.json(userSessions);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {});
