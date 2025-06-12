const {
    Schema, 
    model,
    Types
} = require('mongoose');

// Schema to create movie model
const movieSchema = new Schema({
    movieTitle: {
        type: String,
        required: true
    },
    movieReleaseYear: {
        type: Number,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    runtime: {
        type: String,
        required: true
    },
    director: {
        type: Array,
        required: true
    },
    writer: {
        type: Array,
        required: true
    },
    cast: {
        type: Array,
        required: true
    },
    accolades: {
        type: Array,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    viewingNumber: {
        type: Number,
        required: true,
        unique: true
    },
    dateViewed: {
        type: String,
        required: true
    },
    picker: {
        type: String,
        required: true
    },
    attendees: {
        type: Array,
        required: true
    },
    memberRating: {
        type: Number,
        required: false
    },
    season: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Movie = model('Movie' , movieSchema);

module.exports = Movie;