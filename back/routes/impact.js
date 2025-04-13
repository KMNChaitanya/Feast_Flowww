const express = require('express');
const router = express.Router();
const Impact = require('../models/impact');
const jwt = require('jsonwebtoken');
const multer = require('multer'); // For handling file uploads
const path = require('path');

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Middleware to verify token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.userId = decoded.id;
    next();
  });
};

// Upload a new impact image (authenticated users only)
router.post('/upload', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file uploaded' });
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    const newImpact = new Impact({ userId: req.userId, imageUrl });
    await newImpact.save();

    res.status(201).json({ message: 'Image uploaded successfully', imageUrl });
  } catch (err) {
    res.status(500).json({ message: 'Error uploading image', error: err.message });
  }
});

// Get all impact images for the authenticated user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const impacts = await Impact.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(impacts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching impacts', error: err.message });
  }
});

module.exports = router;