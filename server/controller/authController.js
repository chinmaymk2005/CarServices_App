
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Generate Token
const generateToken = (id) => {
  return jwt.sign(
    { userId: id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

//Signup Controller
exports.signup = async (req, res) => {
  const { name, email, password, location } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashpassword,
      location
    })

    const token = generateToken(newUser._id);
    
    res.cookie('JwtToken', token, {
      httponly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: 3 * 24 * 60 * 60 * 1000,
    })

    res.status(201).json({ message: 'Signup successful', user: newUser._id, Token: token });

  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
    console.log('Error during signup:', err.message);

  }
}

//Login Controller
exports.login = async (req, res) => {

  try {
    const { email, password } = req.body;
    console.log('Login attempt with email:', email,password);
    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User does not exist!!' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = generateToken(user._id);
    
    res.cookie('JwtToken', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ message: 'Login successful', user: user._id,Token: token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
