var express = require('express');
const watchlistModel = require('../models/watchlist');
var router = express.Router();


// Return ALL watchlists
router.get('/', async function (req, res, next) {
  let watchlists = await watchlistModel.find();
  // let watchlistBasicInfo = [];
  
  // watchlists.forEach(watchlist => {
  //   watchlistBasicInfo.push(watchlist.name)
  // });
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

// (un)Bookmark SPECIFIC movie in SPECIFIC watchlist
router.post('/:watchlistId/:movieId/bookmark', async function(req, res, next) {
  const { watchlistId, movieId } = req.params;

  let watchlist = await watchlistModel.findById(watchlistId);
  let movies = watchlist.movies;

  movieIndex = movies.findIndex((movie) => {
    return movie.id == movieId;
  });

  if(movieIndex === -1) {
    res.sendStatus(404);
  } else {
    let movie = movies[movieIndex];
    movie.club.bookmarked = !movie.club.bookmarked;

    watchlist.movies[movieIndex] = movie;
    watchlist.save();

    res.json(watchlist.movies[movieIndex]);
  }

});

// Modify viewing for SPECIFIC movie in SPECIFIC watchlist
router.post('/:watchlistId/:movieId/viewing', async function(req, res, next) {
  const { watchlistId, movieId } = req.params;
  const { viewing, dateViewing, attendants} = req.body;

  let watchlist = await watchlistModel.findById(watchlistId);
  let movies = watchlist.movies;

  movieIndex = movies.findIndex((movie) => {
    return movie.id == movieId;
  });

  if(movieIndex === -1) {
    res.sendStatus(404);
  } else {
    let movie = movies[movieIndex];

    movie.club.viewing = viewing || movie.club.viewing;
    movie.club.dateViewing = dateViewing || movie.club.dateViewing;
    movie.club.attendants = attendants || movie.club.attendants;

    watchlist.movies[movieIndex] = movie;
    watchlist.save();

    res.sendStatus(200);
  }

});

// (un)Archive SPECIFIC movie in SPECIFIC watchlist
router.post('/:watchlistId/:movieId/archive', async function(req, res, next) {
  const { watchlistId, movieId } = req.params;
  const { watched, participants, dateWatched, ourRating } = req.body;

  let watchlist = await watchlistModel.findById(watchlistId);
  let movies = watchlist.movies;

  movieIndex = movies.findIndex((movie) => {
    return movie.id == movieId;
  });

  if(movieIndex === -1) {
    res.sendStatus(404);
  } else {
    let movie = movies[movieIndex];

    movie.club.watched = watched || movie.club.watched;
    movie.club.participants = participants || movie.club.participants;
    movie.club.dateWatched = dateWatched || movie.club.dateWatched;
    movie.club.ourRating = ourRating || movie.club.ourRating;

    watchlist.movies[movieIndex] = movie;
    watchlist.save();

    res.sendStatus(200);
  }

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
      res.json(doc);
    } else if (!doc) {
      res.sendStatus(404);
    } else {
      res.sendStatus(500);
    }
  });
});



module.exports = router;
