import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IWatchlist } from 'src/app/models/watchlist.model';
import { TmdbService } from 'src/app/tmdb.service';
import { WatchlistService } from 'src/app/watchlist.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  watchlists: IWatchlist[] = [];
  watchlist: IWatchlist = null;

  constructor(private watchlistService: WatchlistService, private tmdb: TmdbService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.watchlistService.watchlists.subscribe((watchlists) => {
      this.watchlists = watchlists;
    });
  }

  addToWatchlist() {
    this.watchlistService.selectedWatchlist.next(this.watchlist);
    this.tmdb.addMovieToWatchlist();
    this.snackBar.open('Movie added', 'Dismiss', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }

}
