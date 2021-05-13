import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-create-watchlist',
  templateUrl: './create-watchlist.component.html',
  styleUrls: ['./create-watchlist.component.scss']
})
export class CreateWatchlistComponent implements OnInit {
  createWatchlistForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(16)])
  })

  constructor(private watchlistService: WatchlistService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onCreateWatchlist() {
    let watchlistName = this.createWatchlistForm.value.name;

    let inputWatchlist = { 
      name: watchlistName,
      by: 'Anonymous',
      'private': false
    }
    
    this.watchlistService.createWatchlist(inputWatchlist);

    this.snackBar.open('Watchlist created', 'Dismiss', {
      duration: 3000
    });
  }

}
