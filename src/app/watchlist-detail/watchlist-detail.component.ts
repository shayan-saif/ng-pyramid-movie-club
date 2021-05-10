import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
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

  toWatchMovies: IMovie[];
  bookmarkedMovies: IMovie[];
  watchedMovies: IMovie[];


  constructor(private watchlistService: WatchlistService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.watchlistSubscription = this.watchlistService.selectedWatchlist.subscribe((watchlist) => {
      this.watchlist = watchlist;

      if (watchlist) {
        this.toWatchMovies = this.watchlist.movies.filter(movie => !movie.club.watched && !movie.club.bookmarked);
        this.bookmarkedMovies = this.watchlist.movies.filter(movie => !movie.club.watched && movie.club.bookmarked);
        this.watchedMovies = this.watchlist.movies.filter(movie => movie.club.watched);
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