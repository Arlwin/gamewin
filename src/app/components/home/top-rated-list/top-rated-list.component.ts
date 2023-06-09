import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-top-rated-list',
  templateUrl: './top-rated-list.component.html',
  styleUrls: ['./top-rated-list.component.scss'],
})
export class TopRatedListComponent {
  @Input() games?: Game[];

  constructor(private gameService: GameService) {}
}
