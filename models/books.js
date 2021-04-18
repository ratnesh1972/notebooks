const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    description: String,
    quote: String,
    Image: String,
    rating: Number,
})

module.exports = mongoose.model('Book', bookSchema);