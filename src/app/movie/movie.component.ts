import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { IUser } from '../models/auth.model';
import { IMovie } from '../models/movie.model';
import { AddMovieComponent } from '../tmdb-search/add-movie/add-movie.component';
import { TmdbService } from '../tmdb.service';
import { ArchiveMovieComponent } from './archive-movie/archive-movie.component';
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
  user: IUser;
  admin: boolean = false;
  canBookmark: boolean = false;
  canArchive: boolean = false;
  canDelete: boolean = false;
  canAdd: boolean = false;


  constructor(private tmdb: TmdbService,
    private auth: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      this.user = user;
      this.admin = user.permission.admin;
      this.canBookmark = user.permission.bookmark;
      this.canArchive = user.permission.archive;
      this.canDelete = user.permission.delete;
      this.canAdd = user.permission.add;
    });
    if (this.movie.club) {
      this.bookmarkStatus = this.movie.club.bookmarked;
      this.watched = this.movie.club.watched;
    } else {
      this.searchType = true;
    }
  }

  onAddMovie(): void {
    this.tmdb.selectedMovie.next(this.movie);
    this.dialog.open(AddMovieComponent);
  }

  onToggleBookmark(): void {
    this.bookmarkStatus = !this.bookmarkStatus;
    this.bookmark.emit(this.movie.id);
    this.snackBar.open(`Movie ${this.bookmarkStatus ? '' : 'un'}bookmarked!`, 'Dismiss', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }

  onArchiveMovie(): void {
    this.dialog.open(ArchiveMovieComponent, {
      data: { movieId: this.movie.id, movieTitle: this.movie.title },
    });
  }


  onDeleteMovie(): void {
    // this.tmdb.deleteMovieFromWatchlist(this.movie.id);
    this.dialog.open(ConfirmDeleteMovieComponent, {
      data: { movieId: this.movie.id },
    });
  }

}
