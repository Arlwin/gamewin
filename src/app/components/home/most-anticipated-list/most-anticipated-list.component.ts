import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-most-anticipated-list',
  templateUrl: './most-anticipated-list.component.html',
  styleUrls: ['./most-anticipated-list.component.scss'],
})
export class MostAnticipatedListComponent {
  @Input() games: Game[] = [];
}
