// Quick setup checker
require('dotenv').config();
const mongoose = require('mongoose');

console.log('\n🔍 Checking Rishta Radar Setup...\n');

// Check environment variables
console.log('📋 Environment Variables:');
console.log(`   PORT: ${process.env.PORT || '3000 (default)'}`);
console.log(`   MONGODB_URI: ${process.env.MONGODB_URI ? '✅ Set' : '❌ Not set'}`);
console.log(`   EMAIL_USER: ${process.env.EMAIL_USER ? '✅ Set' : '⚠️  Not set (email notifications disabled)'}`);
console.log(`   EMAIL_PASSWORD: ${process.env.EMAIL_PASSWORD ? '✅ Set' : '⚠️  Not set (email notifications disabled)'}`);
console.log(`   SESSION_SECRET: ${process.env.SESSION_SECRET ? '✅ Set' : '⚠️  Using default'}`);

// Check MongoDB connection
console.log('\n🔌 Testing MongoDB Connection...');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rishta-radar';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('   ✅ MongoDB connected successfully!');
    console.log(`   📍 Connected to: ${MONGODB_URI.replace(/\/\/.*:.*@/, '//***:***@')}`);
    console.log('\n✨ Setup looks good! Run "npm start" to start the server.\n');
    process.exit(0);
  })
  .catch(err => {
    console.log('   ❌ MongoDB connection failed!');
    console.log(`   Error: ${err.message}`);
    console.log('\n📖 Please check MONGODB_SETUP.md for setup instructions.\n');
    process.exit(1);
  });
