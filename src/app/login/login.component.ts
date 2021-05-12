import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private auth: AuthService) { }

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

  onLogin(): void {
    this.auth.loginUser(this.loginForm.value);
  }

}
