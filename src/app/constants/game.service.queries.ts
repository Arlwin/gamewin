import { Sort, SortValues } from '../enums/sort.enum';

export class GameServiceQueries {
  static queryMultiple(
    queries: { name: string; endpoint: string; query: string }[]
  ): string {
    let queryBuilder: string = '';

    for (let query of queries) {
      queryBuilder += `
        query ${query.endpoint} "${query.name}" {
          ${query.query}
        };
      `;
    }

    return queryBuilder;
  }

  static getByGameIds(gameIds: number[], limit: number): string {
    return `
    fields name, platforms.name, platforms.abbreviation, genres.name, category, slug, total_rating, release_dates.date, cover.image_id, first_release_date;
    where id = (${gameIds.toString()});
    limit ${limit};
    `;
  }
  static getTopRatedGames(limit: number): string {
    return `
    fields name, slug, total_rating, release_dates.date, cover.image_id, first_release_date;
    sort total_rating desc;
    where total_rating != null;
    limit ${limit};
    `;
  }
  static getNewReleaseGames(limit: number, after_date: number): string {
    return `
    fields name, slug, total_rating, release_dates.date, cover.image_id, first_release_date;
    sort first_release_date desc;
    where first_release_date <= ${after_date};
    limit ${limit};
    `;
  }
  static getMostAnticipatedGames(limit: number, after_date: number): string {
    return `
    fields name, slug, total_rating, hypes, release_dates.date, cover.image_id, first_release_date;
    sort hypes desc;
    where first_release_date > ${after_date} & hypes != null;
    limit ${limit};
    `;
  }
  static getMostPopularGames(limit: number): string {
    return `
    fields name, slug, total_rating, release_dates.date, cover.image_id, first_release_date, follows;
    sort follows desc;
    where follows != null;
    limit ${limit};
    `;
  }
  static getRecentlyUpdatedGames(limit: number): string {
    return `
    fields name, slug, total_rating, release_dates.date, updated_at, cover.image_id, first_release_date, follows;
    sort updated_at desc;
    where updated_at != null;
    limit ${limit};
    `;
  }
  static getGameBySlug(slug: string): string {
    return `
    fields name, slug, summary, storyline, platforms.abbreviation, platforms.name, cover.image_id, genres.name, first_release_date, artworks.*, game_modes.*, rating, videos.name, videos.video_id;
    where slug="${slug}";
    `;
  }
  static searchGameByTerm(
    term: string,
    limit: number,
    platforms: number[],
    genres: number[],
    sort: SortValues,
    order: string
  ): string {
    const search = sort === SortValues.RELEVANCE;
    const hasFilters = genres.length || platforms.length;

    // Fields
    let query =
      'fields name, platforms.name, platforms.abbreviation, genres.name, category, slug, total_rating, release_dates.date, cover.image_id, first_release_date;\n';

    // Filters
    if (hasFilters) {
      const strGenres = genres.length ? `genres = (${genres.toString()})` : '';
      const strPlatforms = platforms.length
        ? `platforms = (${platforms.toString()})`
        : '';

      query =
        query +
        `where ${strGenres} ${
          genres.length && platforms.length ? '&' : ''
        } ${strPlatforms}${search ? ';' : ''}\n`;
    }

    // If Search, no sorting
    if (search) query = query + `search "${term}";\n`;
    else {
      // where here is a temporary workaround for IGDB's sorting
      query =
        query +
        `${hasFilters ? '&' : 'where'} name ~ *"${term}"*
        & ${Sort.getQuery(sort)} != null;
        sort ${Sort.getQuery(sort)} ${order};
      `;
    }

    // Limit
    query = query + `limit ${limit};`;

    return query;
  }
  static getGenres(limit: number): string {
    return `
    fields *;
    where name != null;
    sort name asc;
    limit ${limit};
    `;
  }

  static getPlatforms(limit: number) {
    return `
    fields name, slug, abbreviation;
    where abbreviation != null;
    sort name asc;
    limit ${limit};
    `;
  }
}
