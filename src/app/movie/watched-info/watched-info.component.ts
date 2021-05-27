import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovie } from 'src/app/models/movie.model';

interface IParticipant {
  _id: string,
  name: string,
  rating: number
}

@Component({
  selector: 'app-watched-info',
  templateUrl: './watched-info.component.html',
  styleUrls: ['./watched-info.component.scss']
})
export class WatchedInfoComponent implements OnInit {
  movie: IMovie;
  participants: IParticipant[];
  ourRating: number;

  constructor(@Inject(MAT_DIALOG_DATA) private _data: {
    movie: IMovie,
    currentUser: string
  }) { }

  ngOnInit(): void {
    this.movie = this._data.movie;
    this.participants = this._data.movie.club.participants;
    this.ourRating = this._data.movie.club.ourRating;
  }

}
