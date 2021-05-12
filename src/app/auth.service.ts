import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ILogin, IRegister, IUser } from './models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<IUser>(null);
  loginError = new BehaviorSubject(null);
  registerError = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  registerUser(registerInfo: IRegister): void {
    let user = {
      username: registerInfo.username,
      password: registerInfo.password,
      secret: registerInfo.secret
    }
    this.http.post<IUser>('http://localhost:3000/api/auth/register', user)
      .pipe(catchError(this.handleRegisterError))
      .subscribe((userInfo) => {
        console.log(userInfo);
      }, (err) => this.registerError.next(err));
  }

  handleRegisterError(error) {
    return throwError(error || "Server error");
  }

  loginUser(loginInfo: ILogin): void {
    let user = {
      username: loginInfo.username,
      password: loginInfo.password,
    }

    this.http.post<IUser>('http://localhost:3000/api/auth/login', user)
      .pipe(catchError(this.handleLoginError))
      .subscribe((userInfo) => {
        this.user.next(userInfo);
      }, (err) => this.loginError.next(err));
  }

  handleLoginError(error) {
    return throwError(error || "Server error");
  }

  logout() {
    this.http.get('http://localhost:3000/api/auth/logout').subscribe(() => {
      this.user.next(null);
    });
  }
}
