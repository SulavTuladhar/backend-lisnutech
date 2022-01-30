const mongoose = require('mongoose');

const graphicsDesignContent = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports  = mongoose.model('graphicsDesignContent',   graphicsDesignContent);