import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../models/auth.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: IUser;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => this.user = user);
  }

  onLogout(): void {
    this.auth.logout();
  }

}
