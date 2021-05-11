import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWatchlist } from '../models/watchlist.model';
import { WatchlistService } from '../watchlist.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateWatchlistComponent } from '../create-watchlist/create-watchlist.component';
import { Router } from '@angular/router';
import { IUser } from '../models/auth.model';
import { AuthService } from '../auth.service';


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
  user: IUser = null;
  canCreate: boolean = null;

  constructor(
    private watchlistService: WatchlistService,
    private auth: AuthService, 
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.watchlistService.getWatchlists();
    this.watchlistSubscription = this.watchlistService.watchlists.subscribe(watchlists => {
      this.watchlists = watchlists;
    });
    this.watchlistSelectSubscription = this.watchlistService.selectedWatchlist.subscribe((selectedWatchlist) => {
      this.selectedWatchlist = selectedWatchlist;
    });
    this.auth.user.subscribe((user) => {
      this.user = user;
      if(user && user.permission.create) {
        this.canCreate = true;
      }
    });
  }

  onSelectWatchlist(watchlistSelected: IWatchlist) {
    // this.watchlistService.getWatchlists();
    if(this.router.url !== '/' ) {
      this.router.navigate(['/']);
    }
    // this.watchlistService.getWatchlists();
    this.watchlistService.selectedWatchlist.next(watchlistSelected);
    
  }

  openCreateWatchlist() {
    this.dialog.open(CreateWatchlistComponent);
  }
}
