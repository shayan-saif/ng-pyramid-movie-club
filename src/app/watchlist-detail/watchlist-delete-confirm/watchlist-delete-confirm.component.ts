import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WatchlistService } from 'src/app/watchlist.service';

@Component({
  selector: 'app-watchlist-delete-confirm',
  templateUrl: './watchlist-delete-confirm.component.html',
  styleUrls: ['./watchlist-delete-confirm.component.scss']
})
export class WatchlistDeleteConfirmComponent implements OnInit {

  constructor(private watchlistService: WatchlistService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  deletionConfirmed() {

    this.watchlistService.deleteWatchlist();

    this.snackBar.open('Watchlist deleted', 'Dismiss', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }

}

