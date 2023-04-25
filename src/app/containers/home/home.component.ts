import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { Result } from 'src/app/models/result.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('searchInput', { static: true })
  searchInput!: ElementRef;

  gameLists: Map<string, Result<Game[]>> = new Map();

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.getHomepageGames().subscribe((results) => {
      for (let result of results) {
        this.gameLists.set(result.name, result);
      }
    });
  }

  onSearch() {
    const input = this.searchInput.nativeElement.value;
    this.router.navigate(['discover'], { queryParams: { q: input } });
  }
}
