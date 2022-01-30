const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SecondPageSchema = new Schema({
    firstTitle: String,
    secondTitle: String,
    firstDescription: String,
    secondDescription: String,
    img: String,
},{
    timestamps: true
})

module.exports = mongoose.model('secondPage', SecondPageSchema);