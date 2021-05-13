import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    username: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    password: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
    secret: new FormControl(null, [Validators.required, Validators.maxLength(64)])
  })
  error: { status: number, message: string };
  hidePassword: boolean;
  hideKey: boolean;

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

