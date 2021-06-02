import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWatchlist } from '../models/watchlist.model';
import { WatchlistService } from '../watchlist.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateWatchlistComponent } from '../create-watchlist/create-watchlist.component';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
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
  authSub: Subscription;
  watchlistSelectSubscription = new Subscription;
  user: IUser = null;
  activated: boolean;

  constructor(
    private watchlistService: WatchlistService,
    private auth: AuthService,
    public dialog: MatDialog,
    private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url !== "/") {
          this.watchlistService.selectedWatchlist.next(null);

        } else {
        }
      }
    });
  }

  ngOnInit(): void {
    this.watchlistService.getWatchlists();
    this.watchlistSubscription = this.watchlistService.watchlists.subscribe(watchlists => {
      this.watchlists = watchlists;
    });
    this.watchlistSelectSubscription = this.watchlistService.selectedWatchlist.subscribe((selectedWatchlist) => {
      this.selectedWatchlist = selectedWatchlist;
    });
    this.authSub = this.auth.user.subscribe((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = {
          ...this.user,
          username: null,
          permission: {
            admin: false,
            create: false,
            add: false,
            bookmark: false,
            archive: false,
            delete: false
          }
        }
      }
    });


  }

  onSelectWatchlist(watchlistSelected: IWatchlist) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
    this.watchlistService.selectedWatchlist.next(watchlistSelected);

  }

  openCreateWatchlist() {
    this.dialog.open(CreateWatchlistComponent, {
      maxWidth: '30rem',
      position: { 'top': '10rem' }
    });
  }

  ngOnDestroy(): void {
    this.watchlistSelectSubscription.unsubscribe();
    this.authSub.unsubscribe();
  }
}
