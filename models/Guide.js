var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String
    },
    steps: {
        type: String,
        required: true
    },
    coords: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    guide_type: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Guide', schema);
