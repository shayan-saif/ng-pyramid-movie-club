import { Input, Pipe, PipeTransform } from '@angular/core';
import { IMovie } from './models/movie.model';

@Pipe({
  name: 'movieSort'
})
export class MovieSortPipe implements PipeTransform {
  compareByAdded(a: IMovie, b: IMovie) {
    return new Date(b.club.dateAdded).valueOf() - new Date(a.club.dateAdded).valueOf();
  }

  compareByWatched(a: IMovie, b: IMovie) {
    return new Date(b.club.dateWatched).valueOf() - new Date(a.club.dateWatched).valueOf();
  }

  transform(value: IMovie[], type: string): unknown {
    if (type === 'byAdded') {
      return value.sort(this.compareByAdded);
    } else if (type === 'byWatched') {
      return value.sort(this.compareByWatched);
    } else {
      return value;
    }
  }

}
