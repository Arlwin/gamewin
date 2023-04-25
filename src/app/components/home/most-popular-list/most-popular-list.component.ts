import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-most-popular-list',
  templateUrl: './most-popular-list.component.html',
  styleUrls: ['./most-popular-list.component.scss'],
})
export class MostPopularListComponent {
  @Input() games: Game[] = [];
}
