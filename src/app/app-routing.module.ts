import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistFormComponent } from './watchlist/watchlist-form/watchlist-form.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {path: '', component: WatchlistComponent},
  {path: 'add', component: WatchlistFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
