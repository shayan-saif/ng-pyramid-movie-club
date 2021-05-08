import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  search: boolean = false;
  @Input() movie: IMovie;
  watched: boolean;
  bookmarkStatus: boolean;

  toggleBookmark(): void {
    this.bookmarkStatus = !this.bookmarkStatus;
  }


  constructor() { }

  ngOnInit(): void {
    this.movie.club.bookmarked = this.movie.club.bookmarked;
    this.watched = this.movie.club.watched;
  }

}
