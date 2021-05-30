import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangePasswordComponent } from '../account/change-password/change-password.component';
import { DeleteAccountComponent } from '../account/delete-account/delete-account.component';
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
  

  constructor(
    private auth: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => this.user = user);
    this.innerWidth = window.innerWidth;
  }

  onLogout(): void {
    this.auth.logout();
    this.snackBar.open('Logged out', 'Dismiss', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
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

  openChangePassword(): void {
    this.dialog.open(ChangePasswordComponent);
  }

  openDeleteAccount(): void {
    this.dialog.open(DeleteAccountComponent);
  }

}
