import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-new-release-list',
  templateUrl: './new-release-list.component.html',
  styleUrls: ['./new-release-list.component.scss'],
})
export class NewReleaseListComponent {
  @Input() games: Game[] = [];
}
