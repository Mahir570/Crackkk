const mongoose = require('mongoose');

const MapSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    RollNumber: {
        type: String,
        required: true,
        unique: true
    }
});

const MapModel = mongoose.model('Map', MapSchema);

// Correct export:
module.exports = MapModel;
