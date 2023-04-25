export interface Platform {
  id: number;
  name: string;
  abbreviation: string;
  slug?: string;

  checked?: boolean;
}
