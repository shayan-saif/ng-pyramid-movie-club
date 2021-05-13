import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMovie } from './models/movie.model';
import { IWatchlist } from './models/watchlist.model';
import { WatchlistService } from './watchlist.service';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  movies = new BehaviorSubject<IMovie[]>(null);
  selectedMovie = new BehaviorSubject<IMovie>(null);

  constructor(private http: HttpClient, private watchlistService: WatchlistService, public snackBar: MatSnackBar) { }

  titleSearch(title: string) {
    const options = { params: new HttpParams().set('title', title) };

    this.http.get<IMovie[]>('http://pyramidmovieclub-env.eba-2f3jnpr3.us-east-1.elasticbeanstalk.com/api/search', options).subscribe((results) => {
      this.movies.next(results);
    });
  }

  getDiscover() {
    return this.http.get<IMovie[]>('http://pyramidmovieclub-env.eba-2f3jnpr3.us-east-1.elasticbeanstalk.com/api/search/discover');
  }

  addMovieToWatchlist() {
    let movieId = this.selectedMovie.value.id;
    let watchlistId = this.watchlistService.selectedWatchlist.value._id;

    const payload = {
      movieId: movieId,
      watchlistId: watchlistId
    }

    this.http.post<IWatchlist>(`http://pyramidmovieclub-env.eba-2f3jnpr3.us-east-1.elasticbeanstalk.com/api/search`, payload)
      .pipe(catchError(this.handleError))

      .subscribe((updatedWatchlist) => {
        let updatedWatchlists = this.watchlistService.watchlists.value;
        const watchlistIndex = updatedWatchlists.findIndex(watchlist => watchlist._id === updatedWatchlist._id);
        updatedWatchlists[watchlistIndex] = updatedWatchlist;
        this.watchlistService.watchlists.next(updatedWatchlists);
      });
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else if (error.error.text === 'duplicate') {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(error.error.text);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  
  archiveMovie(movieId: number, archiveForm: FormGroup) {
    let watchlistId = this.watchlistService.selectedWatchlist.value._id;

    const payload = {
      watched: true,
      participants: archiveForm.value.participants,
      dateWatched: archiveForm.value.dateWatched,
      ourRating: 4
    }

    this.http.post<IWatchlist>(`http://pyramidmovieclub-env.eba-2f3jnpr3.us-east-1.elasticbeanstalk.com/api/watchlist/${watchlistId}/${movieId}/archive`, payload).subscribe((updatedWatchlist) => {
      let updatedWatchlists = this.watchlistService.watchlists.value;
      const watchlistIndex = updatedWatchlists.findIndex(watchlist => watchlist._id === updatedWatchlist._id);
      updatedWatchlists[watchlistIndex] = updatedWatchlist;
      this.watchlistService.watchlists.next(updatedWatchlists);
      this.watchlistService.selectedWatchlist.next(updatedWatchlist);
    });
  }


  deleteMovieFromWatchlist(movieId: number) {

    const watchlistId = this.watchlistService.selectedWatchlist.value._id;

    this.http.delete<IWatchlist>(`http://pyramidmovieclub-env.eba-2f3jnpr3.us-east-1.elasticbeanstalk.com/api/watchlist/${watchlistId}/${movieId}`).subscribe((updatedWatchlist) => {
      let updatedWatchlists = this.watchlistService.watchlists.value;
      const watchlistIndex = updatedWatchlists.findIndex(watchlist => watchlist._id === updatedWatchlist._id);
      updatedWatchlists[watchlistIndex] = updatedWatchlist;
      this.watchlistService.watchlists.next(updatedWatchlists);
      this.watchlistService.selectedWatchlist.next(updatedWatchlist);
    });
  }
}
