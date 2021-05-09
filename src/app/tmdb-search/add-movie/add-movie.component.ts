import { Component, OnInit } from '@angular/core';
import { WatchlistService } from 'src/app/watchlist.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  watchlists: string[] = [];
  watchlist: string = null;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistService.watchlists.subscribe((watchlists) => {
      watchlists.forEach((watchlist) => {
        this.watchlists.push(watchlist.name);
      });
    });
  }

  addToWatchlist() {
    console.log(this.watchlist);
  }

}
