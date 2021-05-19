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
  user: IUser;
  canDelete: boolean = false;
  admin: boolean = false;

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

    });

    this.auth.user.subscribe((user) => {
      if(user) {
        this.user = user;
        this.canDelete = user.permission.delete;
        this.admin = user.permission.admin;
      }
    });
  }

  toggleBookmark(movieId: number): void {
    this.watchlistService.toggleBookmark(movieId);
  }

  openDeleteDialog() {
    this.dialog.open(WatchlistDeleteConfirmComponent)
  }

}