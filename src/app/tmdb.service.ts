import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  movies = new BehaviorSubject<IMovie[]>(null);

  constructor(private http: HttpClient) { }

  titleSearch(title: string) {
    const options = { params: new HttpParams().set('title', title) };

    this.http.get<IMovie[]>('http://localhost:3000/api/search', options).subscribe((results) => {
      this.movies.next(results);
    });
  }
}
