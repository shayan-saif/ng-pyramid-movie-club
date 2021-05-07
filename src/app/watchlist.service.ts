import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWatchlist } from './models/watchlist.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private watchlists: IWatchlist;

  constructor(private http: HttpClient) { }

  getWatchlists(): Observable<IWatchlist[]> {
    return this.http.get<IWatchlist[]>('http://localhost:3000/api/watchlist');
  }

}
