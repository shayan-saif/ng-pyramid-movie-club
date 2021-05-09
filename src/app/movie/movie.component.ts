import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../models/movie.model';
import { IWatchlist } from '../models/watchlist.model';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  search: boolean = false;
  @Input() movie: IMovie;
  // @Input() watchlistId: string;
  watched: boolean;
  bookmarkStatus: boolean;
  @Output() bookmark = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
    this.bookmarkStatus = this.movie.club.bookmarked;
    this.watched = this.movie.club.watched;
  }

  onToggleBookmark(): void {
    this.bookmarkStatus = !this.bookmarkStatus;
    console.log(this.bookmarkStatus);
    this.bookmark.emit(this.movie.id);
  }

}
