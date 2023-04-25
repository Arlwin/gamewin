import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-item-large',
  templateUrl: './game-item-large.component.html',
  styleUrls: ['./game-item-large.component.scss'],
})
export class GameItemLargeComponent {
  @Input() game?: Game;

  getDate(): string {
    return new Date(this.game?.first_release_date! * 1000).toUTCString();
  }
}
