import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSignup(): void {
    this.auth.registerUser(this.registerForm.value)
  }

}
