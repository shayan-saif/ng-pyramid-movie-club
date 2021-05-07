import { Component, OnInit } from '@angular/core';
import { IMovie } from '../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: IMovie = {
    "club": {
      "bookmarked": false,
      "dateAdded": "2021-05-07T01:09:50.798Z",
      "addedBy": "Anonymous",
      "viewing": false,
      "attendants": [],
      "watched": false,
      "participants": []
    },
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      }
    ],
    "productionCompanies": [
      {
        "id": 76907,
        "logoPath": "/wChlWsVgwSd4ZWxTIm8PTEcaESz.png",
        "name": "Atomic Monster",
        "originCountry": "US"
      },
      {
        "id": 8000,
        "logoPath": "/f8NwLg72BByt3eav7lX1lcJfe60.png",
        "name": "Broken Road Productions",
        "originCountry": "US"
      },
      {
        "id": 12,
        "logoPath": "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
        "name": "New Line Cinema",
        "originCountry": "US"
      },
      {
        "id": 174,
        "logoPath": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
        "name": "Warner Bros. Pictures",
        "originCountry": "US"
      },
      {
        "id": 2806,
        "logoPath": "/vxOhCbpsRBh10m6LZ3HyImTYpPY.png",
        "name": "South Australian Film Corporation",
        "originCountry": "AU"
      },
      {
        "id": 13033,
        "logoPath": null,
        "name": "NetherRealm Studios",
        "originCountry": "US"
      }
    ],
    "productionCountries": [
      {
        "iso31661": "AU",
        "name": "Australia"
      },
      {
        "iso31661": "US",
        "name": "United States of America"
      }
    ],
    "spokenLanguages": [
      {
        "englishName": "Japanese",
        "iso6391": "ja",
        "name": "日本語"
      },
      {
        "englishName": "English",
        "iso6391": "en",
        "name": "English"
      },
      {
        "englishName": "Mandarin",
        "iso6391": "zh",
        "name": "普通话"
      }
    ],
    "_id": "6094940a8b6c011524682c2d",
    "adult": false,
    "backdropPath": "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
    "belongsToCollection": null,
    "budget": 20000000,
    "homepage": "https://www.mortalkombatmovie.net",
    "id": 460465,
    "imdbId": "tt0293429",
    "originalLanguage": "en",
    "originalTitle": "Mortal Kombat",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
    "popularity": 4614.697,
    "posterPath": "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg",
    "releaseDate": "2021-04-07T00:00:00.000Z",
    "revenue": 50115000,
    "runtime": 110,
    "status": "Released",
    "tagline": "Get over here.",
    "title": "Mortal Kombat",
    "video": false,
    "voteAverage": 7.8,
    "voteCount": 2114
  }

  constructor() { }

  ngOnInit(): void {
  }

}
