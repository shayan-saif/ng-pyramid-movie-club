import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { IUser } from '../models/auth.model';
import { IMovie } from '../models/movie.model';
import { IWatchlist } from '../models/watchlist.model';
import { WatchlistService } from '../watchlist.service';
import { WatchlistDeleteConfirmComponent } from './watchlist-delete-confirm/watchlist-delete-confirm.component';

@Component({
  selector: 'app-watchlist-detail',
  templateUrl: './watchlist-detail.component.html',
  styleUrls: ['./watchlist-detail.component.scss']
})
export class WatchlistDetailComponent implements OnInit {
  watchlist: IWatchlist;
  watchlistSubscription: Subscription;
  authSub: Subscription;
  user: IUser;
  owner?: boolean;

  selectedTab: number = 0;
  toWatchMovies: IMovie[];
  bookmarkedMovies: IMovie[];
  watchedMovies: IMovie[];


  constructor(
    private watchlistService: WatchlistService,
    private auth: AuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.watchlistSubscription = this.watchlistService.selectedWatchlist.subscribe((watchlist) => {
      this.watchlist = watchlist;

      if (watchlist) {
        this.toWatchMovies = this.watchlist.movies.filter(movie => !movie.club.watched && !movie.club.bookmarked);
        this.bookmarkedMovies = this.watchlist.movies.filter(movie => !movie.club.watched && movie.club.bookmarked);
        this.watchedMovies = this.watchlist.movies.filter(movie => movie.club.watched);
      }

      if (this.user && this.user.username === this.watchlist.by) {
        this.owner = true;
      } else {
        this.owner = false;
      }

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

  toggleBookmark(movieId: number): void {
    this.watchlistService.toggleBookmark(movieId);
  }

  openDeleteDialog() {
    this.dialog.open(WatchlistDeleteConfirmComponent, {
      maxWidth: '30rem',
      position: {'top': '10rem'}
    })
  }

  ngOnDestroy(): void {
    this.watchlistSubscription.unsubscribe();
    this.authSub.unsubscribe();
  }

}