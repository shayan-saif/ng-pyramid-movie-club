import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWatchlist } from './models/watchlist.model';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

const BACKEND_URL = environment.apiUrl + '/watchlist';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  // private watchlists: IWatchlist[] = [];
  watchlists = new BehaviorSubject<IWatchlist[]>(null);
  selectedWatchlist = new BehaviorSubject<IWatchlist>(null);


  constructor(private http: HttpClient) { }

  getWatchlists() {
    this.http.get<IWatchlist[]>(BACKEND_URL).subscribe(watchlists => {
      this.watchlists.next(watchlists);
      // this.selectedWatchlist.next(watchlists[0]);
    });
  }

  toggleBookmark(movieId: number) {
    let watchlistId = this.selectedWatchlist.value._id;

    this.http.post<IWatchlist>(`${BACKEND_URL}/${watchlistId}/${movieId}/bookmark`, {}).subscribe((watchlistResponse) => {
      // this.watchlists.next([...this.watchlists.value, watchlistResponse]);
      let watchlistIndex = this.watchlists.value.findIndex(watchlist => watchlist._id === watchlistResponse._id);
      let updatedWatchlist = this.watchlists.value;
      updatedWatchlist[watchlistIndex] = watchlistResponse;
      this.watchlists.next(updatedWatchlist);
      this.selectedWatchlist.next(watchlistResponse);
    });
  }

  createWatchlist(watchlist: { name: string, by: string, 'private': boolean }) {
    this.http.post<IWatchlist>(BACKEND_URL, watchlist).subscribe((watchlistCreated) => {
      this.watchlists.next([...this.watchlists.value, watchlistCreated]);
      this.selectedWatchlist.next(watchlistCreated);
    });
  }

  deleteWatchlist() {
    let currentWatchlists = this.watchlists.value;
    const watchlistId = this.selectedWatchlist.value._id;

    this.http.delete<IWatchlist>(`${BACKEND_URL}/${watchlistId}`).subscribe((deletedWatchlist) => {
      currentWatchlists = currentWatchlists.filter(watchlist => deletedWatchlist._id !== watchlist._id);
      this.watchlists.next(currentWatchlists);
      this.selectedWatchlist.next(null);
    });
  }
}