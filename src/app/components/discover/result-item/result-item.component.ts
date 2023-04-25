import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {
  @Input() game?: Game;
  @Output() manageFavorites: EventEmitter<Game> = new EventEmitter();

  constructor() {}

  getDate(): string {
    return new Date(this.game?.first_release_date! * 1000).toUTCString();
  }

  onClickFavorite() {
    this.manageFavorites.emit(this.game);
    this.game!.favorite = !(this.game?.favorite ?? false);
  }
}
