const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ananytiwari415:anany123@cluster0.s2lot9f.mongodb.net/?appName=Cluster0'
    );
    console.log(' MongoDB connected successfully');
  } catch (err) {
    console.error(' MongoDB connection error:', err.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};

module.exports = connectDB;
