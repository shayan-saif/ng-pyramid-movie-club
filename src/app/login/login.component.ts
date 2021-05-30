import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })
  error: { status: number, message: string };
  hidePassword: boolean;

  constructor(
    private watchlistService: WatchlistService,
    private auth: AuthService, 
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.auth.loginError.subscribe(err => {
      if (err) {
        this.error = {
          status: err.status,
          message: err.error
        }
      }
    });
  }

  onLogin() {
    this.auth.loginUser(this.loginForm.value)
      .pipe(catchError(this.handleError))
      .subscribe((userInfo) => {
        this.auth.user.next(userInfo);
        this.snackBar.open('Logged in', 'Dismiss', {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top"
        });
        this.watchlistService.getWatchlists();
        this.watchlistService.selectedWatchlist.next(this.watchlistService.watchlists.value[0]);
        this.router.navigate(['']);
      }, (err) => {
        this.error = {
          status: err.status,
          message: err.error
        }
        this.snackBar.open(this.error.message, 'Dismiss', {
          horizontalPosition: "center",
          verticalPosition: "top"
        });
      });
    }

  handleError(error) {
    return throwError(error || "Server error");
  }

}
