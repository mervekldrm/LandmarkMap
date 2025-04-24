const express = require('express');
const router = express.Router();
const Plan = require('../models/Plan');

router.post('/', async (req, res) => {
  try {
    const plan = new Plan(req.body);
    await plan.save();
    res.status(201).json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const plans = await Plan.find();
  res.json(plans);
});

module.exports = router;
