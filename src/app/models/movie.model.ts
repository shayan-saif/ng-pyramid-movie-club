import { IClub } from './club.model';

export interface IMovie {
  club?: IClub
  genres: IGenre[]
  productionCompanies: IProductionCompany[]
  productionCountries: ProductionCountry[]
  spokenLanguages: ISpokenLanguage[]
  _id: string
  adult: boolean
  backdropPath: string
  belongsToCollection: any
  budget: number
  homepage: string
  id: number
  imdbId: string
  originalLanguage: string
  originalTitle: string
  overview: string
  popularity: number
  posterPath: string
  releaseDate: string
  revenue: any
  runtime: number
  status: string
  tagline: string
  title: string
  video: boolean
  voteAverage: number
  voteCount: number
}

export interface IGenre {
  id: number
  name: string
}

export interface IProductionCompany {
  id: number
  logoPath?: string
  name: string
  originCountry: string
}

export interface ProductionCountry {
  iso31661: string
  name: string
}

export interface ISpokenLanguage {
  englishName: string
  iso6391: string
  name: string
}
