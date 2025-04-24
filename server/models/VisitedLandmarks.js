const mongoose = require('mongoose');

const VisitedLandmarkSchema = new mongoose.Schema({
    landmark_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Landmark', required: true },
    visited_date: { type: Date, required: true },
    visitor_name: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('VisitedLandmark', VisitedLandmarkSchema);
