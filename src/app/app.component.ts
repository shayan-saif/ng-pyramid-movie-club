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
  // watchlists: IWatchlist[] = [];
  // selectedWatchlist: IWatchlist;

  // selectedWatchlistSubscription: Subscription;
  // watchlistSubscription: Subscription;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    // this.watchlistService.getWatchlists();
    // this.watchlistSubscription = this.watchlistService.getWatchlistListener().subscribe(watchlists => {
    //   this.watchlists = watchlists;
    // });
    // this.selectedWatchlistSubscription = this.watchlistService.getSelectedWatchlist().subscribe((res => {
    //   console.log(res);
    // }));
  }
}
