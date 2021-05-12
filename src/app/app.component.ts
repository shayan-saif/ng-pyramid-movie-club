import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { IUser } from './models/auth.model';
import { IWatchlist } from './models/watchlist.model';
import { WatchlistService } from './watchlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDark = true;
  selectedWatchlist: IWatchlist;
  selectedWatchlistSubscription: Subscription;
  user: IUser = null;

  constructor(
    private watchlistService: WatchlistService,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    this.watchlistService.getWatchlists();
    this.selectedWatchlistSubscription = this.watchlistService.selectedWatchlist.subscribe((selectedWatchlist) => {
      this.selectedWatchlist = selectedWatchlist;
    });
    this.auth.user.subscribe((user) => this.user = user);
  }

  onLogout(): void {
    this.auth.logout();
  }

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }
}
