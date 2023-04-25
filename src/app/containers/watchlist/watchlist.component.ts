import { Component } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent {
  favorites: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    let favoriteGameIds: number[] = [];

    this.gameService
      .getFavorites()
      .subscribe((favorites) => (favoriteGameIds = Array.from(favorites)));

    this.gameService
      .getGamesFromIds(favoriteGameIds)
      .subscribe((games) => (this.favorites = games));
  }

  onClickFavorites(game: Game) {
    this.gameService.removeFromFavorites(game.id);
  }
}
