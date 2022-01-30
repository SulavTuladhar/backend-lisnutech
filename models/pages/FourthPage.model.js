const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fourthPageSchema = new Schema({
    firstTitle: String,
    secondTitle: String,
    firstDescription: String,
    secondDescription: String,
    middleDescription: String,
    img: String,
},{
    timestamps: true
})

module.exports = mongoose.model('fourthPage', fourthPageSchema);