import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
    secret: new FormControl(null)
  })
  error: { status: number, message: string };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.registerError.subscribe(err => {
      if (err) {
        this.error = {
          status: err.status,
          message: err.error
        }
      } else {
        this.error = null;
      }
    });
  }

  onSignup() {
    this.auth.registerUser(this.registerForm.value)
      .pipe(catchError(this.handleError))
      .subscribe(() => {
        this.router.navigate(['login']);
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

