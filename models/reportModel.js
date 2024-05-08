const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    id: Number,
    noise_level: Number,
    lat: Number,
    lng: Number,
    radius: Number,
    timestamp: Date
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
