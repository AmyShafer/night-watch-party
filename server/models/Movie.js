const { default: concurrently } = require('concurrently');
const {
    Schema, 
    model,
    Types
} = require('mongoose');

// Schema to create movie model
const movieSchema = new Schema({
    movieTitle: {
        type: String,
        required: false
    },
    movieReleaseYear: {
        type: Number,
        required: false
    },
    genre: {
        type: Array,
        required: false
    },
    rating: {
        type: String,
        required: false
    },
    runtime: {
        type: String,
        required: false
    },
    director: {
        type: Array,
        required: false
    },
    writer: {
        type: Array,
        required: false
    },
    cast: {
        type: Array,
        required: false
    },
    accolades: {
        type: Array,
        required: false
    },
    releaseDate: {
        type: String,
        required: false
    },
    tags: {
        type: Array,
        required: false
    },
    viewingNumber: {
        type: Number,
        required: false
    },
    dateViewed: {
        type: String,
        required: false
    },
    picker: {
        type: String,
        required: false
    },
    attendees: {
        type: Array,
        required: false
    },
    memberRating: {
        type: Number,
        required: false
    },
    currentlyStreaming: {
        type: Array,
        required: false
    },
    season: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Movie = model('Movie' , movieSchema);

module.exports = Movie;