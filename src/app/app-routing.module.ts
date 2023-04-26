import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './containers/discover/discover.component';
import { GameDetailsComponent } from './containers/game-details/game-details.component';
import { HomeComponent } from './containers/home/home.component';
import { WatchlistComponent } from './containers/watchlist/watchlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'game/:slug', component: GameDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
