import { Component, Input } from '@angular/core';
import { GameItemType } from 'src/app/enums/game-item-type.enum';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss'],
})
export class GameItemComponent {
  @Input() game?: Game;
  @Input() type: GameItemType = GameItemType.Tile;

  gameType = GameItemType;

  getDate(): string {
    return new Date(this.game?.first_release_date! * 1000).toUTCString();
  }
}
