import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchlistDetailComponent } from './watchlist-detail/watchlist-detail.component';
import { WatchlistService } from './watchlist.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    WatchlistComponent,
    WatchlistDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [WatchlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
