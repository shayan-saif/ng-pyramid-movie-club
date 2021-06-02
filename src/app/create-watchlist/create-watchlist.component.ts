import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WatchlistService } from '../watchlist.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { IUser } from '../models/auth.model';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-create-watchlist',
  templateUrl: './create-watchlist.component.html',
  styleUrls: ['./create-watchlist.component.scss']
})
export class CreateWatchlistComponent implements OnInit {
  currentUser: IUser;
  authSub: Subscription;

  createWatchlistForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    hidden: new FormControl(false),
    currentName: new FormControl(null)
  });

  names: string[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(
    private watchlistService: WatchlistService,
    private auth: AuthService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.authSub = this.auth.user.subscribe((user) => this.currentUser = user);
  }

  onAddName(): void {
    console.log(this.createWatchlistForm.value.currentName);
    const value = (this.createWatchlistForm.value.currentName || '').trim();
    if (value) {
      if (value == this.currentUser.username) {
        this.snackBar.open('You will have access, don\'t worry', 'Dismiss', {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top"
        });
      } else if (this.names.includes(value)) {
        this.snackBar.open('That name has already been added', 'Dismiss', {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top"
        });
      } else {
        this.names.push(value);
      }
    }
    this.createWatchlistForm.controls['currentName'].setValue('');
  }

  onCreateWatchlist() {
    const watchlistName = this.createWatchlistForm.value.name;
    const hidden = this.createWatchlistForm.value.hidden;


    const inputWatchlist = {
      name: watchlistName,
      by: 'Anonymous',
      hidden: hidden,
      sharedWith: this.names
    }

    this.watchlistService.createWatchlist(inputWatchlist);

    this.snackBar.open('Watchlist created', 'Dismiss', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

}
