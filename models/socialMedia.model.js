const mongoose = require('mongoose');

const socialMedia = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    }
},{
    timestamps: true
})
module.exports = mongoose.model('socialMedia', socialMedia);