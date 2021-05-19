import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchlistDetailComponent } from './watchlist-detail/watchlist-detail.component';
import { CreateWatchlistComponent } from './create-watchlist/create-watchlist.component';
import { WatchlistDeleteConfirmComponent } from './watchlist-detail/watchlist-delete-confirm/watchlist-delete-confirm.component';
import { TmdbSearchComponent } from './tmdb-search/tmdb-search.component';
import { AddMovieComponent } from './tmdb-search/add-movie/add-movie.component';
import { ConfirmDeleteMovieComponent } from './movie/confirm-delete-movie/confirm-delete-movie.component';
import { ArchiveMovieComponent } from './movie/archive-movie/archive-movie.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShortenPipe } from './shorten.pipe';
import { FooterComponent } from './footer/footer.component';
import { RatingDirective } from './rating.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    WatchlistComponent,
    WatchlistDetailComponent,
    CreateWatchlistComponent,
    WatchlistDeleteConfirmComponent,
    TmdbSearchComponent,
    AddMovieComponent,
    ConfirmDeleteMovieComponent,
    ArchiveMovieComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ShortenPipe,
    FooterComponent,
    RatingDirective
  ],
  entryComponents: [
    CreateWatchlistComponent,
    WatchlistDeleteConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    OrderModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
