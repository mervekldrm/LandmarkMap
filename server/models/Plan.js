const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  places: [{
    name: String,
    note: String,
    location: {
      latitude: Number,
      longitude: Number
    }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Plan', PlanSchema);
