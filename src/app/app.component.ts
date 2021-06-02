import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { IUser } from './models/auth.model';
import { IWatchlist } from './models/watchlist.model';
import { UserService } from './user.service';
import { WatchlistService } from './watchlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDark = true;
  selectedWatchlist: IWatchlist;
  user: IUser;
  showDrawer: boolean = false;

  selectedWatchlistSub: Subscription;
  authSub: Subscription;

  constructor(
    private watchlistService: WatchlistService,
    private auth: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.watchlistService.getWatchlists();
    this.selectedWatchlistSub = this.selectedWatchlistSub = this.watchlistService.selectedWatchlist.subscribe((selectedWatchlist) => {
      this.selectedWatchlist = selectedWatchlist;
    });
    this.authSub = this.auth.user.subscribe((user) => {
      this.user = user
    });
    this.userService.verifyStatus();

  }

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  toggleDrawer() {
    this.showDrawer = !this.showDrawer;
  }

  ngOnDestroy(): void {
    this.selectedWatchlistSub.unsubscribe();
    this.authSub.unsubscribe();
  }
}
