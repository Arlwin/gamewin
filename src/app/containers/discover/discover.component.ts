import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sort, SortValues } from 'src/app/enums/sort.enum';
import { Game } from 'src/app/models/game.model';
import { Genre } from 'src/app/models/genre.model';
import { Platform } from 'src/app/models/platform.model';
import { Result } from 'src/app/models/result.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent {
  searchInput?: string;

  favorites: Set<number> = new Set();
  results: Game[] = [];

  genres: Genre[] = [];
  genresFilter: string = '';

  platforms: Platform[] = [];
  platformsFilter: string = '';

  sorts: {
    value: string;
    label: string;
  }[];

  filters: {
    descending: boolean;
    sort: string;
    genres: number[];
    platforms: number[];
  };

  showUnreleased: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) {
    this.sorts = Object.values(SortValues)
      .filter((value) => typeof value === 'string')
      .filter((value) => value !== 'UPDATED') // Don't show
      .map((sort) => ({
        value: sort as string,
        label: Sort.getLabel((<any>SortValues)[sort]),
      }));

    this.filters = {
      sort: this.sorts[0].value.toLowerCase(),
      descending: true,
      genres: [],
      platforms: [],
    };
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchInput = params['q'] ?? '';
      this.showUnreleased = params['unreleased'] === 'true';
      this.filters.sort = params['sort'] ?? this.filters.sort;
      this.filters.descending = params['desc']
        ? params['desc'] === 'true'
        : true;
      this.filters.genres = params['genres']
        ? (params['genres'] as string).split(',').map(Number)
        : [];
      this.filters.platforms = params['platforms']
        ? (params['platforms'] as string).split(',').map(Number)
        : [];
    });

    // Filters
    this.gameService.getDiscoverPageFilters().subscribe((results) => {
      this.genres = (results[0] as Result<Genre[]>).result.map((genre) => {
        genre.checked = this.filters.genres.includes(genre.id);
        return genre;
      });
      this.platforms = (results[1] as Result<Platform[]>).result.map(
        (platform) => {
          {
            platform.checked = this.filters.platforms.includes(platform.id);
            return platform;
          }
        }
      );
    });

    this.gameService
      .getFavorites()
      .subscribe((favorites) => (this.favorites = favorites));

    this.gameService
      .searchGames(this.searchInput!, {
        genres: this.filters.genres,
        platforms: this.filters.platforms,
        sort:
          !this.searchInput && this.filters.sort === 'relevance'
            ? SortValues.UPDATED // Default / No Input
            : (<any>SortValues)[this.filters.sort.toUpperCase()],
        order: this.filters.descending ? 'desc' : 'asc',
        showUnreleased: this.showUnreleased,
      })
      .subscribe(
        (results) =>
          (this.results = results.map((game) => {
            game.favorite = this.favorites.has(game.id);
            return game;
          }))
      );
  }

  onSearch() {
    this.searchInput = (this.searchInput ?? '').trim();

    this.setFilters();
  }

  toggleSort() {
    this.filters.descending = !this.filters.descending;
    this.setFilters();
  }

  searchGenres(input: string) {
    this.genresFilter = input;
  }

  getGenres(): Genre[] {
    if (!this.genresFilter || !this.genresFilter.trim()) return this.genres;

    try {
      return this.genres.filter((genre) => {
        return (
          genre.name.toLowerCase().match(this.genresFilter.toLowerCase()) ||
          genre.slug?.toLowerCase().match(this.genresFilter.toLowerCase())
        );
      });
    } catch (e) {
      return [];
    }
  }

  getCheckedGenres(): Genre[] {
    return this.genres.filter((genre) => genre.checked);
  }

  getCheckedPlatforms(): Platform[] {
    return this.platforms.filter((platform) => platform.checked);
  }

  searchPlatforms(input: string) {
    this.platformsFilter = input;
  }

  getPlatforms(): Platform[] {
    if (!this.platformsFilter || !this.platformsFilter.trim())
      return this.platforms;

    try {
      return this.platforms.filter((platform) => {
        return (
          platform.name
            .toLowerCase()
            .match(this.platformsFilter.toLowerCase()) ||
          platform.abbreviation
            .toLowerCase()
            .match(this.platformsFilter.toLowerCase()) ||
          platform.slug?.toLowerCase().match(this.platformsFilter.toLowerCase())
        );
      });
    } catch (e) {
      return [];
    }
  }

  manageFavorites(game: Game) {
    if (game.favorite) {
      this.gameService.removeFromFavorites(game.id);
    } else {
      this.gameService.addToFavorites(game.id);
    }
  }

  setFilters() {
    this.filters.genres = this.genres
      .filter((genre) => genre.checked)
      .map((genre) => genre.id);
    this.filters.platforms = this.platforms
      .filter((platform) => platform.checked)
      .map((platform) => platform.id);
    this.applyFilters();
  }

  applyFilters() {
    this.router
      .navigate(['discover'], {
        queryParams: {
          q: this.searchInput!,
          sort: this.filters.sort.toLowerCase(),
          desc: this.filters.descending,
          genres:
            this.filters.genres.length > 0
              ? this.filters.genres.toString()
              : null,
          platforms:
            this.filters.platforms.length > 0
              ? this.filters.platforms.toString()
              : null,
        },
      })
      .then(() => window.location.reload());
  }

  clearAllGenres() {
    this.genres.forEach((genre) => (genre.checked = false));
  }

  clearAllPlatforms() {
    this.platforms.forEach((platform) => (platform.checked = false));
  }

  toggleUnreleased() {
    console.log(this.showUnreleased);
  }
}
