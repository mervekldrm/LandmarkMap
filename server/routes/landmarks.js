// server/routes/landmarks.js
const express = require('express');
const router = express.Router();
const Landmark = require('../models/Landmark');

router.post('/', async (req, res) => {
    try {
        const newLandmark = new Landmark(req.body);
        const saved = await newLandmark.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
