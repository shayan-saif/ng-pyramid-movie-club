import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from '../models/movie.model';
import { IWatchlist } from '../models/watchlist.model';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlists: IWatchlist[];
  watchlistSubscription: Subscription;

  selectedWatchlist: IWatchlist;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistSubscription= this.watchlistService.getWatchlists().subscribe(watchlists => {
      this.watchlists = watchlists;
    });
  }

  onSelectWatchlist(watchlist: IWatchlist): void {
    if(this.selectedWatchlist === watchlist) {
      null;
    } else {
      this.selectedWatchlist = watchlist;
    }
    
  }

  ngOnDestroy(): void {
    this.watchlistSubscription.unsubscribe();
  }

}
