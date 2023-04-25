import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { GameServiceQueries } from '../constants/game.service.queries';
import { Result } from '../models/result.model';
import { Game } from '../models/game.model';
import { Genre } from '../models/genre.model';
import { SortValues } from '../enums/sort.enum';
import { HttpService } from './http.service';

// import { NEW_RELEASE_GAMES } from '../mocks/new-release.mock';
// import { TOP_RATED_GAMES } from '../mocks/top-rated.mock';
// import { MOST_ANTICIPATED_GAMES } from '../mocks/most-anticipated.mock';
// import { MOST_POPULAR_GAMES } from '../mocks/most-popular.mock';
// import { GAME } from '../mocks/game.mock';
// import { SEARCH_GAMES } from '../mocks/search-games.mock';
// import { FAVORITE_GAMES } from '../mocks/favorites.mock';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpService) {}

  getHomepageGames(): Observable<Result<Game[]>[]> {
    const curDate = Math.floor(Date.now() / 1000);

    return this.http.post<Result<Game[]>[]>(
      'multiquery',
      GameServiceQueries.queryMultiple([
        {
          name: 'top-rated',
          endpoint: 'games',
          query: GameServiceQueries.getTopRatedGames(3),
        },
        {
          name: 'new-release',
          endpoint: 'games',
          query: GameServiceQueries.getNewReleaseGames(10, curDate),
        },
        {
          name: 'most-anticipated',
          endpoint: 'games',
          query: GameServiceQueries.getMostAnticipatedGames(10, curDate),
        },
        {
          name: 'most-popular',
          endpoint: 'games',
          query: GameServiceQueries.getMostPopularGames(10),
        },
      ])
    );
  }

  getDiscoverPageFilters(): Observable<any[]> {
    return this.http.post<Result<any>[]>(
      'multiquery',
      GameServiceQueries.queryMultiple([
        {
          name: 'genres',
          endpoint: 'genres',
          query: GameServiceQueries.getGenres(500),
        },
        {
          name: 'platforms',
          endpoint: 'platforms',
          query: GameServiceQueries.getPlatforms(500),
        },
      ])
    );
  }

  getGameGenres(limit = 500): Observable<Genre[]> {
    return this.http.post<Genre[]>(
      'genres',
      GameServiceQueries.getGenres(limit)
    );
  }

  getGamesFromIds(ids: number[], limit = 100) {
    // return of(FAVORITE_GAMES);

    return this.http.post<Game[]>(
      'games',
      GameServiceQueries.getByGameIds(ids, limit)
    );
  }

  getTopRatedGames(limit = 3): Observable<Game[]> {
    // return of(TOP_RATED_GAMES);
    return this.http.post<Game[]>(
      'games',
      GameServiceQueries.getTopRatedGames(limit)
    );
  }

  getNewReleaseGames(limit = 10): Observable<Game[]> {
    // return of(NEW_RELEASE_GAMES);

    return this.http.post<Game[]>(
      'games',
      GameServiceQueries.getNewReleaseGames(limit, Date.now())
    );
  }

  getMostAnticipatedGames(limit = 10): Observable<Game[]> {
    // return of(MOST_ANTICIPATED_GAMES);

    return this.http.post<Game[]>(
      'games',
      GameServiceQueries.getMostAnticipatedGames(limit, Date.now())
    );
  }

  getMostPopularGames(limit = 10): Observable<Game[]> {
    // return of(MOST_POPULAR_GAMES);

    return this.http.post<Game[]>(
      'games',
      GameServiceQueries.getMostPopularGames(limit)
    );
  }

  getRecentlyUpdatedGames(limit = 500): Observable<Game[]> {
    return this.http.post<Game[]>(
      'games',
      GameServiceQueries.getRecentlyUpdatedGames(limit)
    );
  }

  getGame(slug: string): Observable<Game[]> {
    // return of(GAME);

    return this.http.post<Game[]>(
      'games',
      GameServiceQueries.getGameBySlug(slug)
    );
  }

  searchGames(
    term: string,
    {
      limit = 500,
      genres = [],
      platforms = [],
      sort = SortValues.RELEVANCE,
      order = 'desc',
      showUnreleased = false,
    }: {
      limit?: number;
      genres?: number[];
      platforms?: number[];
      sort?: SortValues;
      order?: string;
      showUnreleased?: boolean;
    }
  ): Observable<Game[]> {
    // return of(SEARCH_GAMES);

    return this.http.post<Game[]>(
      'games',
      GameServiceQueries.searchGameByTerm(
        term,
        limit,
        platforms,
        genres,
        sort,
        order
      )
    );
  }

  addToFavorites(id: number): void {
    let favorites: Set<number> = new Set(
      JSON.parse(localStorage.getItem('favorites') ?? '[]')
    );

    favorites.add(id);

    localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
  }

  removeFromFavorites(id: number): void {
    let favorites: Set<number> = new Set(
      JSON.parse(localStorage.getItem('favorites') ?? '[]')
    );

    favorites.delete(id);

    localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
  }

  getFavorites(): Observable<Set<number>> {
    let favorites: Set<number> = new Set(
      JSON.parse(localStorage.getItem('favorites') ?? '[]')
    );

    return of(favorites);
  }
}
