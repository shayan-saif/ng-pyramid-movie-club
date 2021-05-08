import { Component, OnInit } from '@angular/core';
import { IMovie } from '../models/movie.model';
import { IWatchlist } from '../models/watchlist.model';

@Component({
  selector: 'app-watchlist-detail',
  templateUrl: './watchlist-detail.component.html',
  styleUrls: ['./watchlist-detail.component.scss']
})
export class WatchlistDetailComponent implements OnInit {
  watchlist: IWatchlist = {
    "hidden": false,
    "sharedWith": [],
    "_id": "6094c4e054a0826e84b07427",
    "name": "Global",
    "by": "Shayan",
    "dateCreated": "2021-05-07T01:12:18.949Z",
    "movies": [
      {
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
      },
      {
        "club": {
          "bookmarked": false,
          "dateAdded": "2021-05-07T01:09:50.798Z",
          "addedBy": "Anonymous",
          "viewing": false,
          "attendants": [],
          "watched": true,
          "participants": []
        },
        "genres": [
          {
            "id": 878,
            "name": "Science Fiction"
          },
          {
            "id": 28,
            "name": "Action"
          },
          {
            "id": 18,
            "name": "Drama"
          }
        ],
        "productionCompanies": [
          {
            "id": 174,
            "logoPath": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
            "name": "Warner Bros. Pictures",
            "originCountry": "US"
          },
          {
            "id": 923,
            "logoPath": "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
            "name": "Legendary Pictures",
            "originCountry": "US"
          }
        ],
        "productionCountries": [
          {
            "iso31661": "US",
            "name": "United States of America"
          }
        ],
        "spokenLanguages": [
          {
            "englishName": "English",
            "iso6391": "en",
            "name": "English"
          }
        ],
        "_id": "609494158b6c011524682c2e",
        "adult": false,
        "backdropPath": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
        "belongsToCollection": {
          "id": 535313,
          "name": "Godzilla Collection",
          "posterPath": "/inNN466SKHNjbGmpfhfsaPQNleS.jpg",
          "backdropPath": "/oboBn4VYB79uDxnyIri0Nt3U3N2.jpg"
        },
        "budget": 200000000,
        "homepage": "https://www.godzillavskong.net/",
        "id": 399566,
        "imdbId": "tt5034838",
        "originalLanguage": "en",
        "originalTitle": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 2543.473,
        "posterPath": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        "releaseDate": "2021-03-24T00:00:00.000Z",
        "revenue": 415590000,
        "runtime": 113,
        "status": "Released",
        "tagline": "One Will Fall",
        "title": "Godzilla vs. Kong",
        "video": false,
        "voteAverage": 8.1,
        "voteCount": 5278
      },
      {
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
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 14,
            "name": "Fantasy"
          },
          {
            "id": 878,
            "name": "Science Fiction"
          }
        ],
        "productionCompanies": [
          {
            "id": 174,
            "logoPath": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
            "name": "Warner Bros. Pictures",
            "originCountry": "US"
          },
          {
            "id": 114152,
            "logoPath": null,
            "name": "The Stone Quarry",
            "originCountry": "US"
          },
          {
            "id": 507,
            "logoPath": "/z7H707qUWigbjHnJDMfj6QITEpb.png",
            "name": "Atlas Entertainment",
            "originCountry": "US"
          },
          {
            "id": 9993,
            "logoPath": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
            "name": "DC Entertainment",
            "originCountry": "US"
          },
          {
            "id": 103376,
            "logoPath": null,
            "name": "Access Entertainment",
            "originCountry": "US"
          },
          {
            "id": 444,
            "logoPath": "/42UPdZl6B2cFXgNUASR8hSt9mpS.png",
            "name": "Dune Entertainment",
            "originCountry": "US"
          },
          {
            "id": 128064,
            "logoPath": "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
            "name": "DC Films",
            "originCountry": "US"
          },
          {
            "id": 429,
            "logoPath": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
            "name": "DC Comics",
            "originCountry": "US"
          }
        ],
        "productionCountries": [
          {
            "iso31661": "US",
            "name": "United States of America"
          }
        ],
        "spokenLanguages": [
          {
            "englishName": "English",
            "iso6391": "en",
            "name": "English"
          }
        ],
        "_id": "6094a77a8b6c011524682c31",
        "adult": false,
        "backdropPath": "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        "belongsToCollection": null,
        "budget": 70000000,
        "homepage": "https://www.hbomax.com/zacksnydersjusticeleague",
        "id": 791373,
        "imdbId": "tt12361974",
        "originalLanguage": "en",
        "originalTitle": "Zack Snyder's Justice League",
        "overview": "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
        "popularity": 1510.04,
        "posterPath": "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "releaseDate": "2021-03-18T00:00:00.000Z",
        "revenue": null,
        "runtime": 242,
        "status": "Released",
        "tagline": "",
        "title": "Zack Snyder's Justice League",
        "video": false,
        "voteAverage": 8.5,
        "voteCount": 5311
      }
    ],
    "__v": 3
  }

  toWatchMovies: IMovie[];
  watchedMovies: IMovie[];


  constructor() { }

  ngOnInit(): void {
    this.toWatchMovies = this.watchlist.movies.filter(movie => !movie.club.watched);
    this.watchedMovies = this.watchlist.movies.filter(movie => movie.club.watched);
  }

}
