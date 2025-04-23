// server/models/Landmark.js
const mongoose = require('mongoose');

const LandmarkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    description: String,
    category: {
        type: String,
        enum: ['historical', 'natural', 'cultural', 'other'],
        default: 'other'
    }
}, { timestamps: true });

module.exports = mongoose.model('Landmark', LandmarkSchema);
