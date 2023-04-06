import { Component } from '@angular/core';
import { GameItemType } from 'src/app/enums/game-item-type.enum';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-most-popular-list',
  templateUrl: './most-popular-list.component.html',
  styleUrls: ['./most-popular-list.component.scss'],
})
export class MostPopularListComponent {
  games: Game[] = [];
  type = GameItemType.Panel;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService
      .getMostPopularGames()
      .subscribe((games) => (this.games = games));
  }
}
