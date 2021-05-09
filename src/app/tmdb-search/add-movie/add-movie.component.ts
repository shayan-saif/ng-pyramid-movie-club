import { Component, OnInit } from '@angular/core';
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

  constructor(private watchlistService: WatchlistService, private tmdb: TmdbService) { }

  ngOnInit(): void {
    this.watchlistService.watchlists.subscribe((watchlists) => {
      this.watchlists = watchlists;
    });
  }

  addToWatchlist() {
    this.watchlistService.selectedWatchlist.next(this.watchlist);
    this.tmdb.addMovieToWatchlist();
  }

}
