import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMovie } from '../models/movie.model';
import { IWatchlist } from '../models/watchlist.model';
import { AddMovieComponent } from '../tmdb-search/add-movie/add-movie.component';
import { TmdbService } from '../tmdb.service';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  searchType: boolean = false;
  @Input() movie: IMovie;
  watched: boolean;
  bookmarkStatus: boolean;
  @Output() bookmark = new EventEmitter<number>();


  constructor(private tmdb: TmdbService, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.movie.club) {
      this.bookmarkStatus = this.movie.club.bookmarked;
      this.watched = this.movie.club.watched;
    } else {
      this.searchType = true;
    }
  }

  onToggleBookmark(): void {
    this.bookmarkStatus = !this.bookmarkStatus;
    this.bookmark.emit(this.movie.id);
  }

  onAddMovie(): void {
    this.tmdb.selectedMovie.next(this.movie);
    this.dialog.open(AddMovieComponent);
  }

}
