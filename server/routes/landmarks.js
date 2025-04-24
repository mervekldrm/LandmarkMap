const express = require('express');
const router = express.Router();
const Landmark = require('../models/Landmark');

// POST /landmarks
router.post('/', async (req, res) => {
  try {
    const landmark = new Landmark(req.body);
    await landmark.save();
    res.status(201).json(landmark);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /landmarks
router.get('/', async (req, res) => {
  const landmarks = await Landmark.find();
  res.json(landmarks);
});

// GET /landmarks/:id
router.get('/:id', async (req, res) => {
  try {
    const landmark = await Landmark.findById(req.params.id);
    if (!landmark) return res.status(404).json({ error: 'Not found' });
    res.json(landmark);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
});

// PUT /landmarks/:id
router.put('/:id', async (req, res) => {
  try {
    const updated = await Landmark.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /landmarks/:id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Landmark.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Landmark deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
