import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchlistDetailComponent } from './watchlist-detail/watchlist-detail.component';
import { CreateWatchlistComponent, CreateWatchlistPopupComponent } from './create-watchlist/create-watchlist.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    WatchlistComponent,
    WatchlistDetailComponent,
    CreateWatchlistComponent,
    CreateWatchlistPopupComponent
  ],
  entryComponents: [
    CreateWatchlistComponent,
    CreateWatchlistPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    OrderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
