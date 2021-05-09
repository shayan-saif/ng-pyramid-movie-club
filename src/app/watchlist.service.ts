import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWatchlist } from './models/watchlist.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private watchlists: IWatchlist[] = [];
  private watchlistSubject = new Subject<IWatchlist[]>();
  selectedWatchlist = new BehaviorSubject<IWatchlist>(null);


  constructor(private http: HttpClient) { }

  getWatchlists() {
    this.http.get<IWatchlist[]>('http://localhost:3000/api/watchlist').subscribe(watchlists => {
      this.watchlists = watchlists;
      this.watchlistSubject.next([...this.watchlists]);
    });
  }

  getWatchlistListener() {
    return this.watchlistSubject.asObservable();
  }

  // toggleBookmark(movieId: number) {
  //   // this.selectedWatchlist.subscribe((watchlist) => {
  //   //   console.log(`http://localhost:3000/api/watchlist/${watchlist._id}/${movieId}`);
  //   //   this.http.post(`http://localhost:3000/api/watchlist/${watchlist._id}/${movieId}`, {}).subscribe((res) => {
  //   //     console.log(res);
  //   //   });
  //   // });
  //   console.log(this.selectedWatchlist);
  // }



  createWatchlist(watchlist: { name: string, by: string, 'private': boolean }) {
    this.http.post<IWatchlist>('http://localhost:3000/api/watchlist', watchlist).subscribe((res) => {
      this.watchlists.push(res);
      this.watchlistSubject.next([...this.watchlists]);
    });
  }

  deleteWatchlist(watchlist: IWatchlist) {
    const watchlistId = watchlist._id;
    this.http.delete<IWatchlist>(`http://localhost:3000/api/watchlist/${watchlistId}`).subscribe((res) => {
      this.watchlists = this.watchlists.filter(element => {
        return element._id !== res._id;
      });
      this.watchlistSubject.next([...this.watchlists]);
    });
  }
}