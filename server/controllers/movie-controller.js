const { Movie , Member, Event } = require('../models');

// get all movies
function getMovies(req, res) {
    Movie.find()
    .sort({ createdAt: -1 })
    .then((dbMovieData) => {
        res.json(dbMovieData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// get a single movie by id
function getSingleMovie(req, res) {
    Movie.findOne({ _id: req.params.movieId })
    .then((dbMovieData) => {
        if (!dbMovieData) {
            return res.status(404).json({ message: 'No movie with this id!' });
        } 
        res.json(dbMovieData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// create a movie
function createMovie(req, res) {
    Movie.create(req.body)
    .then((dbMovieData) => {
        return Member.findOneAndUpdate(
            { _id: req.body.memberId },
            { $push: { movies: dbMovieData._id } },
            { new: true }
        );
    })
    .then((dbMovieData) => {
        if (!dbMovieData) {
            return res.status(404).json({ message: 'Movie created but no member with this id!' });
        }
        res.json({ message: 'Movie was successfully created!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
}

// update a movie
function updateMovie(req, res) {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
    .then((dbMovieData) => {
        if(!dbMovieData) {
            return res.status(404).json({ message: 'No movie with this id!' });
        }
        res.json(dbMovieData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// delete movie
function  deleteMovie(req, res) {
    Movie.findOneAndRemove({ _id: req.params.movieId })
    .then((dbMovieData) => {
        if (!dbMovieData) {
            return res.status(404).json({ message: 'No movie with this id!' });
        }
        res.json({ message: 'Movie was removed!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// add a rating to a movie
function addRating(req, res) {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
    )
    .then((dbMovieData) => {
        if (!dbMovieData) {
            return res.status(404).json({ message: 'No movie with this id!' });
        }
        res.json(dbMovieData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// change rating from movie
function changeRating(req, res) {
    Movie.findOneAndUpdate(
        { _id: req.parms.movieId },
        { $pull: { ratings: { ratingId: req.params.ratingId } } },
        { runValidators: true, new: true }
    )
    .then((dbMovieData) => {
        if(!dbMovieData) {
            return res.status(404).json({ message: 'No movie with this id!' });
        }
        res.json(dbMovieData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// remove rating from movie
function removeRating(req, res) {
    Movie.findOneAndUpdate(
        { _id: req.prams.movieId },
        { $pull: { reactions: { reactionId: req.params.ratingId } } },
        { runValidators: true, new: true }
    )
    .then((dbMovieData) => {
        if (!dbMovieData) {
            return res.status(404).json({ message: 'No rating with this id!' });
        }
        res.json(dbMovieData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

module.exports = { 
    getMovies,
    getSingleMovie,
    createMovie,
    updateMovie,
    deleteMovie,
    addRating,
    changeRating,
    removeRating,
 };