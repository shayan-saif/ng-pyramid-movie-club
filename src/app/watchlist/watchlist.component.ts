import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWatchlist } from '../models/watchlist.model';
import { WatchlistService } from '../watchlist.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateWatchlistComponent } from '../create-watchlist/create-watchlist.component';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlists: IWatchlist[] = [];
  selectedWatchlist: IWatchlist;
  watchlistSubscription = new Subscription;
  watchlistSelectSubscription = new Subscription;

  constructor(private watchlistService: WatchlistService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.watchlistService.getWatchlists();
    this.watchlistSubscription = this.watchlistService.watchlists.subscribe(watchlists => {
      this.watchlists = watchlists;
    });
    this.watchlistSelectSubscription = this.watchlistService.selectedWatchlist.subscribe((selectedWatchlist) => {
      this.selectedWatchlist = selectedWatchlist;
    })
  }

  onSelectWatchlist(watchlistSelected: IWatchlist) {
    this.watchlistService.selectedWatchlist.next(watchlistSelected);
  }

  openCreateWatchlist() {
    this.dialog.open(CreateWatchlistComponent);
  }
}
