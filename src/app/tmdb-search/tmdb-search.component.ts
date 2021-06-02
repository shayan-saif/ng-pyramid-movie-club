import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IMovie } from '../models/movie.model';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-tmdb-search',
  templateUrl: './tmdb-search.component.html',
  styleUrls: ['./tmdb-search.component.scss']
})
export class TmdbSearchComponent implements OnInit {
  movies: IMovie[] = null;
  tmdbSub: Subscription;

  movieQueryForm = new FormGroup({
    title: new FormControl(null)
  });

  constructor(private tmdb: TmdbService) { }

  ngOnInit(): void {
    this.tmdbSub = this.tmdb.movies.subscribe((movies) => {
      if (!movies) {
        this.tmdbSub = this.tmdb.getDiscover().subscribe((movies) => {
        this.tmdb.movies.next(movies);
        this.movies = movies;
        });
      } else {
        this.movies = movies;
      }
    });
  }

  onTitleSearch() {
    this.tmdb.titleSearch(this.movieQueryForm.value.title);
  }

  ngOnDestroy(): void {
    this.tmdbSub.unsubscribe();
  }

}
