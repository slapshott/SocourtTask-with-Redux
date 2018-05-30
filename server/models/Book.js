const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true, unique: true },
    author: { type: mongoose.Schema.Types.String, required: true },
    genre: { type: mongoose.Schema.Types.String },
    creationDate: { type: mongoose.Schema.Types.String },
    lastUpdate: { type: mongoose.Schema.Types.String }
});

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;

