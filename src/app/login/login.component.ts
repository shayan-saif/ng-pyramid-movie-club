import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null)
  })
  error: { status: number, message: string };

  constructor(private auth: AuthService, private router: Router) { }

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
        this.router.navigate(['']);
      }, (err) => {
        this.error = {
          status: err.status,
          message: err.error
        }
      });
    }

  handleError(error) {
    return throwError(error || "Server error");
  }

}
