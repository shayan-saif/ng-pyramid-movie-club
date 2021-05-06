var express = require('express');
const watchlistModel = require('../models/watchlist');
var router = express.Router();


// Return ALL watchlists
router.get('/', async function (req, res, next) {
  let watchlists = await watchlistModel.find();

  res.json(watchlists);
});

// Return SPECIFIC watchlist
router.get('/:watchlistId', function (req, res, next) {
  let watchlistId = req.params.watchlistId;
  console.log(watchlistId);
  watchlistModel.findById(watchlistId, (err, doc) => {
    if (doc) {
      res.json(doc);
    } else {
      res.sendStatus(404);
    }
  });
});

// Create NEW watchlist
router.post('/', function (req, res, next) {
  const { name, by, private, sharedWith } = req.body;
  const dateCreated = new Date();

  const watchlist = {
    name: name,
    by: by,
    dateCreated: dateCreated,
    private: private,
    sharedWith: sharedWith
  }

  console.log(sharedWith);

  watchlistModel.create(watchlist, (err, doc) => {
    if (!err) {
      res.json(doc);
    } else {
      res.sendStatus(500);
    }
  })
});

// Update SPECIFIC watchlist
router.put('/:watchlistId', async function (req, res, next) {
  const watchlistId = req.params.watchlistId;
  const { name, private, sharedWith } = req.body;
  let watchlist = await watchlistModel.findById(watchlistId);

  watchlist.name = name;
  watchlist.private = private || watchlist.private;
  watchlist.sharedWith = sharedWith || watchlist.sharedWith;
  watchlist.save();

  res.sendStatus(200);
});

// Delete SPECIFIC movie from a watchlist
router.delete('/:watchlistId/:movieId', async function (req, res, next) {
  let { watchlistId, movieId } = req.params;
  if (movieId === '*') {
    next();
  } else {
    let watchlist = await watchlistModel.findById(watchlistId);
    if (!watchlist) {
      res.sendStatus(404);
    }

    let movies = watchlist.movies;
    let filteredMovies = [];

    filteredMovies = movies.filter(movie => {
      return movie.id != movieId;
    });

    if (filteredMovies.length === movies.length) {
      res.sendStatus(404);
    } else {
      watchlist.movies = filteredMovies;
      watchlist.save();

      res.sendStatus(200);
    }
  }
});

// Clear ALL movies from a watchlist
router.delete('/:watchlistId/*', async function (req, res, next) {
  let watchlistId = req.params.watchlistId;
  let watchlist = await watchlistModel.findById(watchlistId);
  watchlist.movies = [];
  watchlist.save();
  res.sendStatus(200);
});

// Delete SPECIFIC watchlist
router.delete('/:watchlistId', function (req, res, next) {
  let watchlistId = req.params.watchlistId;
  watchlistModel.findByIdAndRemove(watchlistId, (err, doc) => {
    if (doc && !err) {
      res.sendStatus(200);
    } else if (!doc) {
      res.sendStatus(404);
    } else {
      res.sendStatus(500);
    }
  });
});



module.exports = router;
