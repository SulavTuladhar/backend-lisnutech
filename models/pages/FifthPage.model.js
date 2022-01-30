const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FifthPageSchema = new Schema({
    title: String,
    description: String,
    img: String,
},{
    timestamps: true
})

module.exports = mongoose.model('fifthPage', FifthPageSchema);