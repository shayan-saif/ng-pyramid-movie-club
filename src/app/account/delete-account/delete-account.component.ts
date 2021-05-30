import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth.service';
import { IUser } from 'src/app/models/auth.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {
  user: IUser;

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      this.user = user;
    })
  }

  deletionConfirmed(): void {
    this.userService.deleteAccount(this.user._id);
    this.snackBar.open('Account deleted', 'Dismiss', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }

}
