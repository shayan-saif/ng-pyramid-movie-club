import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../models/auth.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: IUser;
  innerWidth: any;
  showToolbar: boolean;
  @Output() drawer = new EventEmitter();
  

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => this.user = user);
    this.innerWidth = window.innerWidth;
  }

  onLogout(): void {
    this.auth.logout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth < 1000) {
      this.showToolbar = true;
    } else {
      this.showToolbar = false;
    }
  }

  onToggleDrawer() {
    this.drawer.emit();
  }

}
