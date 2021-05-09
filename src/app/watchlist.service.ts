import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWatchlist } from './models/watchlist.model';
import { BehaviorSubject} from 'rxjs';

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
      // this.selectedWatchlist.next(watchlists[0]);
    });
  }

  toggleBookmark(movieId: number) {
    let watchlistId = this.selectedWatchlist.value._id;

    this.http.post<IWatchlist>(`http://localhost:3000/api/watchlist/${watchlistId}/${movieId}/bookmark`, {}).subscribe((watchlistResponse) => {
        this.selectedWatchlist.next(watchlistResponse);
      });
  }

  createWatchlist(watchlist: { name: string, by: string, 'private': boolean }) {
    this.http.post<IWatchlist>('http://localhost:3000/api/watchlist', watchlist).subscribe((watchlistCreated) => {
      this.watchlists.next([...this.watchlists.value, watchlistCreated]);
    });
  }

  deleteWatchlist() {
    let currentWatchlists = this.watchlists.value;
    const watchlistId = this.selectedWatchlist.value._id;

    this.http.delete<IWatchlist>(`http://localhost:3000/api/watchlist/${watchlistId}`).subscribe((deletedWatchlist) => {
      currentWatchlists = currentWatchlists.filter(watchlist => deletedWatchlist._id !== watchlist._id);
      this.watchlists.next(currentWatchlists);
    });
  }
}