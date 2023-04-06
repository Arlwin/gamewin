import { Component } from '@angular/core';
import { GameItemType } from 'src/app/enums/game-item-type.enum';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-new-release-list',
  templateUrl: './new-release-list.component.html',
  styleUrls: ['./new-release-list.component.scss'],
})
export class NewReleaseListComponent {
  games: Game[] = [];
  type = GameItemType.Panel;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService
      .getNewReleaseGames()
      .subscribe((games) => (this.games = games));
  }
}
