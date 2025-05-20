const router = require('express').Router();
const {
  getMovies,
  getSingleMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  addRating,
  removeRating
} = require('../../controllers/movie-controller');

// /api/movies
router.route('/').get(getMovies).post(createMovie);

// /api/movies/:movieId
router.route('/:movieId').get(getSingleMovie).put(updateMovie).delete(deleteMovie);

// /api/movies/:movieId/ratings
router.route(':/movieId/ratings').post(addRating);

// /api/movies/:movieId/ratings/:ratingId
router.route('/:movieId/ratings/:ratingId').delete(removeRating);

module.exports = router;