const {
    Schema, 
    model,
    Types
} = require('mongoose');

// Schema to create movie model
const movieSchema = new Schema({
    movieId: {
        type: Schema.Types.ObjectId,
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

module.exports = movieSchema;