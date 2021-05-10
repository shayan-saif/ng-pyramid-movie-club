import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TmdbService } from 'src/app/tmdb.service';


@Component({
  selector: 'app-confirm-delete-movie',
  templateUrl: './confirm-delete-movie.component.html',
  styleUrls: ['./confirm-delete-movie.component.scss']
})
export class ConfirmDeleteMovieComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { movieId: number },
    private tmdb: TmdbService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  deletionConfirmed(): void {
    this.tmdb.deleteMovieFromWatchlist(this.data.movieId);
    this.snackBar.open('Movie deleted!', 'Dismiss', {
      duration: 3000
    });
  }

}
