import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from './models/movie.model';
import { IWatchlist } from './models/watchlist.model';
import { WatchlistService } from './watchlist.service';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  movies = new BehaviorSubject<IMovie[]>(null);
  selectedMovie = new BehaviorSubject<IMovie>(null);

  constructor(private http: HttpClient, private watchlistService: WatchlistService) { }

  titleSearch(title: string) {
    const options = { params: new HttpParams().set('title', title) };

    this.http.get<IMovie[]>('http://localhost:3000/api/search', options).subscribe((results) => {
      this.movies.next(results);
    });
  }

  addMovieToWatchlist() {
    console.log(this.selectedMovie);
    let movieId = this.selectedMovie.value.id;
    let watchlistId = this.watchlistService.selectedWatchlist.value._id;

    const payload = {
      movieId: movieId,
      watchlistId: watchlistId
    }

    this.http.post<IWatchlist>(`http://localhost:3000/api/search`, payload).subscribe((updatedWatchlist) => {
      //   let updatedWatchlist = this.watchlistService.selectedWatchlist.value;
      //   updatedWatchlist.movies.push(newMovie);
      let updatedWatchlists = this.watchlistService.watchlists.value;
      const watchlistIndex = updatedWatchlists.findIndex(watchlist => watchlist._id === updatedWatchlist._id);
      updatedWatchlists[watchlistIndex] = updatedWatchlist;
      this.watchlistService.watchlists.next(updatedWatchlists);
      // this.watchlistService.selectedWatchlist.next(updatedWatchlist);
      // console.log(this.watchlistService.selectedWatchlist);
    });
  }
}
