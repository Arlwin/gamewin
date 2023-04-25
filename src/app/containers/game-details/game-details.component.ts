import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent {
  game?: Game;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getGameDetails();
  }

  getGameDetails() {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.gameService.getGame(slug).subscribe((games) => (this.game = games[0]));
  }

  goBack() {
    this.location.back();
  }
}
