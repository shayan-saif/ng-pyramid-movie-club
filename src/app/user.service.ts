import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { IUser } from './models/auth.model';

const BACKEND_URL = environment.apiUrl + '/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  verifyStatus() {
    this.http.get<IUser>(BACKEND_URL + '/status').subscribe((user) => {
      this.auth.user.next(user);
    });
  }

  changePassword(userId: string, password: String) {
    const payload = {
      password: password
    }
    console.log(userId + " " + password);
    this.http.post(BACKEND_URL + '/id/' + userId, payload).subscribe((res) => {
      console.log(res);
      this.auth.user.next(null);
    });
  }
}
