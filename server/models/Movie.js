const {
    Schema, 
    model,
    Types
} = require('mongoose');

// Schema to create movie model
const movieSchema = new Schema({
    movieId: {
        type: Number,
        default: () => Types.ObjectId()
    },
    movieTitle: {
        type: String,
        required: true
    },
    movieYear: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Movie = model('Movie' , movieSchema);

module.exports = Movie;