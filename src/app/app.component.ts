import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWatchlist } from './models/watchlist.model';
import { WatchlistService } from './watchlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedWatchlist: IWatchlist;

  selectedWatchlistSubscription: Subscription;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistService.getWatchlists();
    this.selectedWatchlistSubscription = this.watchlistService.selectedWatchlist.subscribe((selectedWatchlist) => {
      this.selectedWatchlist = selectedWatchlist;
    });
  }
}
