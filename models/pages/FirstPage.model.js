const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FirstPageSchema = new Schema({
    name: String,
    description: String,
    photo: String,
},{
    timestamps: true
})

module.exports = mongoose.model('firstPage', FirstPageSchema);