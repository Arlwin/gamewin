import { Genre } from './genre.model';

export interface Game {
  id: number;
  name: string;
  slug: string;
  category?: number;
  cover?: {
    id: number;
    image_id: string;
  };
  total_rating?: number;
  hypes?: number;
  follows?: number;
  first_release_date?: EpochTimeStamp;
  release_dates?: {
    id: number;
    date?: EpochTimeStamp;
  }[];

  summary?: string;
  platforms?: {
    id: number;
    abbreviation?: string;
    name: string;
    platform_logo?: {
      id: number;
      image_id?: string;
    };
  }[];
  genres?: Genre[];
  videos?: {
    id: number;
    name: string;
    video_id: string;
  }[];

  // Own
  favorite?: boolean;
}
