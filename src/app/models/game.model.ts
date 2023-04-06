export interface Game {
  id: number;
  name: string;
  cover: Cover;
  total_rating?: number;
  hypes?: number;
  follows?: number;
  first_release_date: EpochTimeStamp;
  release_dates?: ReleaseDate[];
}

interface Cover {
  id: number;
  image_id: string;
}

interface ReleaseDate {
  id: number;
  date: EpochTimeStamp;
}
