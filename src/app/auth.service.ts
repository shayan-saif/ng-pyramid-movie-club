import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILogin, IRegister, IUser } from './models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(null);
  user = new BehaviorSubject<IUser>(null);

  constructor(private http: HttpClient) { }

  registerUser(registerInfo: IRegister): void {
    let user = {
      username: registerInfo.username,
      password: registerInfo.password,
      secret: registerInfo.secret
    }
    this.http.post<IUser>('http://localhost:3000/api/auth/register', user).subscribe((userInfo) => {
      console.log(userInfo);
    });
  }

  loginUser(loginInfo: ILogin): void {
    let user = {
      username: loginInfo.username,
      password: loginInfo.password,
    }

    this.http.post<IUser>('http://localhost:3000/api/auth/login', user).subscribe((userInfo) => {
      this.isLoggedIn.next(true);
      this.user.next(userInfo);
      console.log(this.isLoggedIn.value);
      console.log(this.user.value);
    });
  }

  logout(): void {
    this.http.get('http://localhost:3000/api/auth/register').subscribe(() => {
      this.isLoggedIn.next(null);
      this.user.next(null);
    })
  }
}
