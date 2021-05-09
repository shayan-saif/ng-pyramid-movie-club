import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWatchlist } from './models/watchlist.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { IMovie } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  // private watchlists: IWatchlist[] = [];
  watchlists = new BehaviorSubject<IWatchlist[]>(null);
  selectedWatchlist = new BehaviorSubject<IWatchlist>(null);


  constructor(private http: HttpClient) { }

  getWatchlists() {
    this.http.get<IWatchlist[]>('http://localhost:3000/api/watchlist').subscribe(watchlists => {
      this.watchlists.next(watchlists);
    });
  }

  // getWatchlistListener() {
  //   return this.watchlists.asObservable();
  // }

  toggleBookmark(movieId: number) {
    let watchlistId = this.selectedWatchlist.value._id;

    this.http.post<IMovie>(`http://localhost:3000/api/watchlist/${watchlistId}/${movieId}/bookmark`, {}).subscribe((movie) => {
        let movieId = movie.id;
        let movieIndex = this.selectedWatchlist.value.movies.findIndex((movie) => {
          return movie.id === movieId;
        });
        this.selectedWatchlist.value.movies[movieIndex] = movie;
      });
  }



  // createWatchlist(watchlist: { name: string, by: string, 'private': boolean }) {
  //   this.http.post<IWatchlist>('http://localhost:3000/api/watchlist', watchlist).subscribe((res) => {
  //     this.watchlists.push(res);
  //     this.watchlistSubject.next([...this.watchlists]);
  //   });
  // }

  // deleteWatchlist(watchlist: IWatchlist) {
  //   const watchlistId = watchlist._id;
  //   this.http.delete<IWatchlist>(`http://localhost:3000/api/watchlist/${watchlistId}`).subscribe((res) => {
  //     this.watchlists = this.watchlists.filter(element => {
  //       return element._id !== res._id;
  //     });
  //     this.watchlistSubject.next([...this.watchlists]);
  //   });
  // }
}