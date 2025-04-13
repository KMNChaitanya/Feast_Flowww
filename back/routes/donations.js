const express = require('express');
const router = express.Router();
const Donation = require('../models/donation');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

// Middleware to verify token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  console.log('Received Token:', token); // Debug token
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error('Token Verification Error:', err.message);
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.userId = decoded.id; // Set userId from token
    console.log('Decoded User ID:', req.userId); // Debug userId
    next();
  });
};

// Create a new donation
router.post('/', authenticateToken, async (req, res) => {
  const { donorName, restaurantName, mobileNumber, location, quantity } = req.body;

  try {
    const newDonation = new Donation({
      donorName,
      restaurantName,
      mobileNumber,
      location,
      quantity,
      userId: req.userId,
    });
    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (err) {
    res.status(500).json({ message: 'Error creating donation', error: err.message });
  }
});

// Get all donations for the authenticated user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const donations = await Donation.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching donations', error: err.message });
  }
});

module.exports = router;