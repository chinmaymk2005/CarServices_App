const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();


// Generate Token
const generateToken = (id) => {
  return jwt.sign(
    { userId: id },
    process.env.JWT_SECRET    
  );
};

//Signup Controller
exports.signup = async (req, res) => {
  const { name, email, password, location } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashpassword,
      location,
    });

    // ✅ Generate token for the new user
    const token = generateToken(newUser._id);

    res.status(201).json({
      message: 'Signup successful',
      user: newUser._id,
      token, // lowercase 'token' for consistency
    });
  } catch (err) {
    console.error('Error during signup:', err.message);
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};


//Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt with email:', email);

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User does not exist!!' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    console.log('User authenticated:', user._id);

    const token = generateToken(user._id);

    res.status(200).json({
      message: 'Login successful',
      user: user._id,
      token, // lowercase for frontend to access with localStorage
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};


//Check Authentication
exports.checkAuth = async (req, res) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ message: 'User is authenticated', user: decoded });
  } catch (err) {
    console.log('JWT verification failed:', err.message);
    res.status(403).json({ message: 'Invalid or expired token' });
  }
}