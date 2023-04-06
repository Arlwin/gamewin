import { Component } from '@angular/core';
import { GameItemType } from 'src/app/enums/game-item-type.enum';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-most-anticipated-list',
  templateUrl: './most-anticipated-list.component.html',
  styleUrls: ['./most-anticipated-list.component.scss'],
})
export class MostAnticipatedListComponent {
  games: Game[] = [];
  type = GameItemType.Panel;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService
      .getMostAnticipatedGames()
      .subscribe((games) => (this.games = games));
  }
}
