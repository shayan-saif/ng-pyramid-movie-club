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
  watchlistSubscription = new Subscription;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistService.getWatchlists();
    this.watchlistSubscription = this.watchlistService.getSelectedWatchlistListener().subscribe((watchlists => {
      console.log(watchlists);
    }));
  }

}
