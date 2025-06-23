const express = require('express');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // store user info for further use
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token", error: error.message });
  }
};

module.exports = { verifyToken };
