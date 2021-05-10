import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMovie } from '../models/movie.model';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-tmdb-search',
  templateUrl: './tmdb-search.component.html',
  styleUrls: ['./tmdb-search.component.scss']
})
export class TmdbSearchComponent implements OnInit {
  movies: IMovie[] = null;

  movieQueryForm = new FormGroup({
    title: new FormControl(null)
  });

  constructor(private tmdb: TmdbService) { }

  ngOnInit(): void {
    this.tmdb.movies.subscribe((movies) => {
      this.movies = movies;
    });
  }

  onTitleSearch() {
    this.tmdb.titleSearch(this.movieQueryForm.value.title);
  }

}
