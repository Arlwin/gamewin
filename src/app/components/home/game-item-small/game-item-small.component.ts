import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-item-small',
  templateUrl: './game-item-small.component.html',
  styleUrls: ['./game-item-small.component.scss'],
})
export class GameItemSmallComponent {
  @Input() game?: Game;

  getDate(): string {
    return new Date(this.game?.first_release_date! * 1000).toUTCString();
  }
}
