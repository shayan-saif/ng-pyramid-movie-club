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
  watchlists: IWatchlist[];
  watchlistSubscription: Subscription;

  selectedWatchlist: IWatchlist;
  watchlistForm = false;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistService.getWatchlists();
    this.watchlistSubscription = this.watchlistService.getWatchlistListener().subscribe(watchlists => {
      this.watchlists = watchlists;
    });
  }

  onSelectWatchlist(watchlist: IWatchlist): void {
    if (this.selectedWatchlist === watchlist) {
      this.selectedWatchlist = null;
    } else {
      this.selectedWatchlist = watchlist;
      this.watchlistForm = false;
    }
  }

  toggleCreateWatchlist() {
    this.watchlistForm = true;
    this.selectedWatchlist = null;
  }

  onDeleteWatchlist() {
    this.watchlistService.deleteWatchlist(this.selectedWatchlist);
    this.selectedWatchlist = this.watchlists[0];
  }

  ngOnDestroy(): void {
  }

}
