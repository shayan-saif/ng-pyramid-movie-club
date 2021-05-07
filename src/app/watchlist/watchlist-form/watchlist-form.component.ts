import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WatchlistService } from 'src/app/watchlist.service';

@Component({
  selector: 'app-watchlist-form',
  templateUrl: './watchlist-form.component.html',
  styleUrls: ['./watchlist-form.component.scss']
})
export class WatchlistFormComponent implements OnInit {
  watchlistForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
  })

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    const name = this.watchlistForm.value.name;
    const by = "Anonymous";

    const watchlist = {
      name: name,
      by: by,
      private: false
    }

    this.watchlistService.createWatchlist(watchlist);
  }

}
