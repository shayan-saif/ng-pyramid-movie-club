export interface IClub {
  bookmarked: boolean
  dateAdded: string
  addedBy: string
  viewing: boolean
  attendants: string[][]
  watched: boolean
  participants: any[]
  dateViewing?: string,
  dateWatched?: Date
  ourRating?: number;
}