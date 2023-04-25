export enum SortValues {
  RELEVANCE,
  RELEASE_DATE,
  TOTAL_RATINGS,
  FOLLOWS,
  HYPES,
  UPDATED,
}

export class Sort {
  static getLabel(value: SortValues): string {
    switch (value) {
      case SortValues.RELEVANCE:
        return 'Relevance';
      case SortValues.RELEASE_DATE:
        return 'Release';
      case SortValues.TOTAL_RATINGS:
        return 'Ratings';
      case SortValues.FOLLOWS:
        return 'Followers';
      case SortValues.HYPES:
        return 'Hypes';
      case SortValues.UPDATED:
        return 'Update';
    }
  }

  static getQuery(value: SortValues) {
    switch (value) {
      case SortValues.RELEVANCE:
        return '';
      case SortValues.RELEASE_DATE:
        return 'first_release_date';
      case SortValues.TOTAL_RATINGS:
        return 'total_rating';
      case SortValues.FOLLOWS:
        return 'follows';
      case SortValues.HYPES:
        return 'hypes';
      case SortValues.UPDATED:
        return 'updated_at';
    }
  }
}
