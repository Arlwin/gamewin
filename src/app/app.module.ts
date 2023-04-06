import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { GameItemComponent } from './components/game/game-item/game-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './containers/home/home.component';
import { TopRatedListComponent } from './components/home/top-rated-list/top-rated-list.component';
import { NewReleaseListComponent } from './components/home/new-release-list/new-release-list.component';
import { MostAnticipatedListComponent } from './components/home/most-anticipated-list/most-anticipated-list.component';
import { MostPopularListComponent } from './components/home/most-popular-list/most-popular-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GameItemComponent,
    TopRatedListComponent,
    NewReleaseListComponent,
    MostAnticipatedListComponent,
    MostPopularListComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
