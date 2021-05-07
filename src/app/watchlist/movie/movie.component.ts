import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: IMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
