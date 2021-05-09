import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-create-watchlist',
  templateUrl: './create-watchlist.component.html',
  styleUrls: ['./create-watchlist.component.scss']
})
export class CreateWatchlistComponent implements OnInit {
  createWatchlistForm = new FormGroup({
    name: new FormControl(null, Validators.required)
  })

  constructor(private watchlistService: WatchlistService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreateWatchlist() {
    console.log(this.createWatchlistForm);
    let watchlistName = this.createWatchlistForm.value.name;

    let inputWatchlist = { 
      name: watchlistName,
      by: 'Anonymous',
      'private': false
    }
    
    this.watchlistService.createWatchlist(inputWatchlist);

    this.dialog.open(CreateWatchlistPopupComponent);
  }

}

@Component({
  selector: 'app-create-watchlist-popup',
  template:
    `
  <h2 mat-dialog-title>Watchlist Created</h2>
  <mat-dialog-content>You have successfully created a new watchlist!</mat-dialog-content>
  <mat-dialog-actions><button mat-button mat-dialog-close>Close</button></mat-dialog-actions>
  `,
  styleUrls: []
})
export class CreateWatchlistPopupComponent {

}
