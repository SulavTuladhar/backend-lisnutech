const mongoose = require('mongoose');

const blog = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    content:{
        type: String
    },
    img: String
},{
    timestamps: true
})
module.exports = mongoose.model('blog', blog)