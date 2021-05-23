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
  watched: boolean = false;
  bookmarkStatus: boolean;
  @Output() bookmark = new EventEmitter<number>();
  user: IUser;


  constructor(private tmdb: TmdbService,
    private auth: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
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
        };
      }
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
      data: { movieId: this.movie.id, movieTitle: this.movie.title, currentUser: this.user.username },
      maxHeight: '70vh',
      position: {'top': '50px'}
    });
  }


  onDeleteMovie(): void {
    // this.tmdb.deleteMovieFromWatchlist(this.movie.id);
    this.dialog.open(ConfirmDeleteMovieComponent, {
      data: { movieId: this.movie.id },
    });
  }

}
