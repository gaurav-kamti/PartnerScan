const mongoose = require('mongoose');

const quizSessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  creatorEmail: {
    type: String,
    required: true
  },
  creatorName: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    enum: ['situationship-female', 'relationship-female', 'fiancee-female', 'situationship-male', 'relationship-male', 'fiance-male'],
    default: 'situationship-female'
  },
  completed: {
    type: Boolean,
    default: false
  },
  takerName: {
    type: String
  },
  results: {
    brightGreen: Number,
    green: Number,
    lightGreen: Number,
    orange: Number,
    red: Number,
    bigRed: Number,
    verdict: String,
    detailedAnswers: [{
      question: String,
      answer: String,
      flag: String,
      originalIndex: Number
    }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  completedAt: {
    type: Date
  }
});

module.exports = mongoose.model('QuizSession', quizSessionSchema);
