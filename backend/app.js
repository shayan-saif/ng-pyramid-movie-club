var createError = require('http-errors');
var express = require('express');
// var cors = require('cors')
var path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, "../.env") });
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./connect');

var watchlistRouter = require('./routes/watchlist');
var searchRouter = require('./routes/search');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'Angular')));

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:4200'}));
app.use('/api/watchlist', watchlistRouter);
app.use('/api/search', searchRouter);
app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, "Angular", "index.html"));
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
