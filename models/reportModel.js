const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    timestamp: Number,
    noise_level: Number,
    lat: Number,
    lng: Number,
    radius: Number,
    comment: String,
    confidence: Number,
}, { versionKey: false });

module.exports = mongoose.model("Report", schema);
