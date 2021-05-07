var express = require('express');
var router = express.Router();
var tmdb = require('../tmdb');
var { NotFoundError } = require('tmdb');
const watchlistModel = require('../models/watchlist');


// Return SPECIFIC movie from TMDB
router.get('/id/:movieId', async function (req, res, next) {
  const movieId = req.params.movieId;
  let movie = {};
  try {
    movie = await tmdb.getMovie(movieId);
    res.json(movie);
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.sendStatus(404);
    } else {
      res.sendStatus(500);
      throw error;
    }
  }
});

// Return MULTIPLE (query) movie from TMDB
router.get('/', async function (req, res, next) {
  const { title } = req.query;
  let movies = [];
  try {
    movies = await tmdb.get('search/movie', {
      query: title
    });
    res.json(movies.results);
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.sendStatus(404);
    } else {
      res.sendStatus(500);
      throw error;
    }
  }
});

// Add SPECIFIC movie to SPECIFIC watchlist OR Global
router.post('/', async function (req, res, next) {
  const { movieId, addedBy } = req.body;
  const watchlistId = req.body.watchlistId || '6092f5e8cb847e4a0cd5e8c4';
  const watchlist = await watchlistModel.findById(watchlistId);

  let movie = {};
  try {
    movie = await tmdb.getMovie(movieId);
    let duplicate = await checkDuplicate(movieId, watchlist.movies);
    if (duplicate) {
      res.send("duplicate");
    } else {
      watchlist.movies.push(movie);
      watchlist.save();
      res.sendStatus(200);
    }
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.sendStatus(404);
    } else {
      res.sendStatus(500);
      throw error;
    }
  }
});

// Check if movie ALREADY EXISTS in watchlist
async function checkDuplicate(movieId, movies) {
  let foundDuplicate = false;

  for (const movie of movies) {
    if (movie.id == movieId) {
      foundDuplicate = true;
    }
  }

  return foundDuplicate;
}

module.exports = router;
