import { IMovie } from './movie.model';

export interface IWatchlist {
  private: boolean
  sharedWith: any[]
  _id: string
  by: string
  dateCreated: string
  movies: IMovie[]
  __v: number
  name: string
}




