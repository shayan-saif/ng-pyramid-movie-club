import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TmdbSearchComponent } from './tmdb-search/tmdb-search.component';
import { WatchlistDetailComponent } from './watchlist-detail/watchlist-detail.component';

const routes: Routes = [
  { path: '', component: WatchlistDetailComponent },
  { path: 'search', component: TmdbSearchComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
