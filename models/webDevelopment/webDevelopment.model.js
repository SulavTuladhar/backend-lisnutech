const mongoose = require('mongoose');

const webDevelopment = new mongoose.Schema({
    topTitle: {
        type: String,
        required: true
    },
    topDescription: {
        type: String,
        required: true
    },
    header : {
        type: String
    }
},{
    timestamps: true
})
module.exports = mongoose.model('webDevelopment', webDevelopment);
