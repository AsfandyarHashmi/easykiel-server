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
    type: {
        type: Number,
        required: true
    },
    time : { type : Date, default: Date.now }
});

module.exports = mongoose.model('Guide', schema);
