import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWatchlist } from '../models/watchlist.model';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlists: IWatchlist[] = [];
  selectedWatchlist: IWatchlist = this.watchlists[0];
  watchlistSubscription = new Subscription;
  watchlistSelectSubscription = new Subscription;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistService.getWatchlists();
    this.watchlistSubscription = this.watchlistService.getWatchlistListener().subscribe(watchlists => {
      this.watchlists = watchlists;
    });
    // this.selectedWatchlist = this.watchlistService.getSelectedWatchlist();
  }

  onSelectWatchlist(watchlistSelected: IWatchlist) {
    this.selectedWatchlist = watchlistSelected;
    this.watchlistService.selectedWatchlist.next(watchlistSelected);
  }

}
