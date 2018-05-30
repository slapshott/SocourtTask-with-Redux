const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true, unique: true },
    creationDate: { type: mongoose.Schema.Types.String },
    lastUpdate: { type: mongoose.Schema.Types.String },
    
});

const Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre;