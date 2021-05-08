import { IMovie } from './movie.model';

export interface IWatchlist {
  hidden: boolean
  sharedWith: any[]
  _id: string
  by: string
  dateCreated: string
  movies: IMovie[]
  __v: number
  name: string
}




