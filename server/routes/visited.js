const express = require('express');
const router = express.Router();
const Visited = require('../models/VisitedLandmarks');

router.post('/', async (req, res) => {
    try {
        const visit = new Visited(req.body);
        const saved = await visit.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const visits = await Visited.find().populate('landmark_id');
        res.status(200).json(visits);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
