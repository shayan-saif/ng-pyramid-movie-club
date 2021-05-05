var mongoose = require("mongoose");

const movieSchema =
{
  "adult": {
    "type": "Boolean"
  },
  "backdropPath": {
    "type": "String"
  },
  "belongsToCollection": {
    "type": "Mixed"
  },
  "budget": {
    "type": "Number"
  },
  "genres": {
    "type": [
      "Mixed"
    ]
  },
  "homepage": {
    "type": "String"
  },
  "id": {
    "type": "Number"
  },
  "imdbId": {
    "type": "String"
  },
  "originalLanguage": {
    "type": "String"
  },
  "originalTitle": {
    "type": "String"
  },
  "overview": {
    "type": "String"
  },
  "popularity": {
    "type": "Number"
  },
  "posterPath": {
    "type": "String"
  },
  "productionCompanies": {
    "type": [
      "Mixed"
    ]
  },
  "productionCountries": {
    "type": [
      "Mixed"
    ]
  },
  "releaseDate": {
    "type": "Date"
  },
  "revenue": {
    "type": "Mixed"
  },
  "runtime": {
    "type": "Number"
  },
  "spokenLanguages": {
    "type": [
      "Mixed"
    ]
  },
  "status": {
    "type": "String"
  },
  "tagline": {
    "type": "String"
  },
  "title": {
    "type": "String"
  },
  "video": {
    "type": "Boolean"
  },
  "voteAverage": {
    "type": "Number"
  },
  "voteCount": {
    "type": "Number"
  },
  "club": {
    "bookmarked": {
      "type": "Boolean",
      "default": "false"
    },
    "dateAdded": {
      "type": "Date",
      "default": new Date()
    },
    "addedBy": {
      "type": "String",
      "default": "Anonymous"
    },
    "dateWatched": {
      "type": "Date",
    },
    "watched": {
      "type": "Boolean",
      "default": "false"
    },
    "participants": {
      "type": "Array",
      default: []
    },
    "ourRating": {
      "type": "Number"
    }
  }
}

const movieModel = mongoose.model("Movie", movieSchema);

module.exports = { movieModel, movieSchema };
