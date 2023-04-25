import { Game } from './game.model';

export interface Result<T> {
  name: string;
  result: T;
}
