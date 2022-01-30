const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThirdPageSchema = new Schema({
    title: String,
    description: String,
    img: String,
},{
    timestamps: true
})

module.exports = mongoose.model('thirdPage', ThirdPageSchema);