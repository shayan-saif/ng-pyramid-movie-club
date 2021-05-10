import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IMovie } from '../models/movie.model';
import { AddMovieComponent } from '../tmdb-search/add-movie/add-movie.component';
import { TmdbService } from '../tmdb.service';
import { ConfirmDeleteMovieComponent } from './confirm-delete-movie/confirm-delete-movie.component';

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


  constructor(private tmdb: TmdbService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

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
    this.snackBar.open(`Movie ${this.bookmarkStatus? '' : 'un'}bookmarked!`, 'Dismiss', {
      duration: 3000
    });
  }

  onAddMovie(): void {
    this.tmdb.selectedMovie.next(this.movie);
    this.dialog.open(AddMovieComponent);
  }

  onDeleteMovie(): void {
    // this.tmdb.deleteMovieFromWatchlist(this.movie.id);
    this.dialog.open(ConfirmDeleteMovieComponent, {
      data: { movieId: this.movie.id },
    });
  }

}
