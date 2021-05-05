exports.__esModule = true;
var tmdb_1 = require("tmdb");
var apiKey = process.env.apiKey;
var tmdb = new tmdb_1.Tmdb(apiKey);

module.exports = tmdb;