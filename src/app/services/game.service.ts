import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Game } from '../models/game.model';

import { NEW_RELEASE_GAMES } from '../mocks/new-release.mock';
import { TOP_RATED_GAMES } from '../mocks/top-rated.mock';
import { MOST_ANTICIPATED_GAMES } from '../mocks/most-anticipated.mock';
import { MOST_POPULAR_GAMES } from '../mocks/most-popular.mock';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  headers = new HttpHeaders({
    'Content-Type': 'text/plain',
    Authorization: 'Bearer dasdas',
    'Client-ID': 'asdasdas',
  });

  constructor(private http: HttpClient) {}

  getTopRatedGames(limit = 3): Observable<Game[]> {
    return of(TOP_RATED_GAMES);

    // return this.http
    //   .post<Game[]>(
    //     'https://api.igdb.com/v4/games',
    //     `
    //     fields name, total_rating, release_dates.date, cover.image_id, first_release_date;
    //     sort total_rating desc;
    //     where total_rating != null;
    //     limit ${limit};
    //   `,
    //     {
    //       headers: this.headers,
    //     }
    //   )
    //   .pipe(tap((res: Game[]) => console.log(res)));
  }

  getNewReleaseGames(): Observable<Game[]> {
    return of(NEW_RELEASE_GAMES);
  }

  getMostAnticipatedGames(): Observable<Game[]> {
    return of(MOST_ANTICIPATED_GAMES);
  }

  getMostPopularGames(): Observable<Game[]> {
    return of(MOST_POPULAR_GAMES);
  }
}
