import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './containers/home/home.component';
import { TopRatedListComponent } from './components/home/top-rated-list/top-rated-list.component';
import { NewReleaseListComponent } from './components/home/new-release-list/new-release-list.component';
import { MostAnticipatedListComponent } from './components/home/most-anticipated-list/most-anticipated-list.component';
import { MostPopularListComponent } from './components/home/most-popular-list/most-popular-list.component';
import { AppRoutingModule } from './app-routing.module';
import { WatchlistComponent } from './containers/watchlist/watchlist.component';
import { GameDetailsComponent } from './containers/game-details/game-details.component';
import { DiscoverComponent } from './containers/discover/discover.component';
import { ResultItemComponent } from './components/discover/result-item/result-item.component';
import { GameItemLargeComponent } from './components/home/game-item-large/game-item-large.component';
import { GameItemSmallComponent } from './components/home/game-item-small/game-item-small.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TopRatedListComponent,
    NewReleaseListComponent,
    MostAnticipatedListComponent,
    MostPopularListComponent,
    WatchlistComponent,
    GameDetailsComponent,
    DiscoverComponent,
    ResultItemComponent,
    GameItemLargeComponent,
    GameItemSmallComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
