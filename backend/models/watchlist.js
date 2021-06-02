var mongoose = require("mongoose");
var { movieSchema } = require("./movie");

const watchlistSchema =
{
  "name": {
    "type": "String"
  },
  "by": {
    "type": "String"
  },
  "dateCreated": {
    "type": "Date"
  },
  "dateModified": {
    "type": "Date"
  },
  "movies": {
    "type": [movieSchema],
  },
  "hidden": {
    "type": "Boolean",
    "default": "false",
  },
  "sharedWith": {
    "type": [String]
  },
}

const watchlistModel = mongoose.model("Watchlist", watchlistSchema);

module.exports = watchlistModel;
