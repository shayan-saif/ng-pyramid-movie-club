import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILogin, IRegister, IUser } from './models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<IUser>(null);
  loginError = new BehaviorSubject(null);
  registerError = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  registerUser(registerInfo: IRegister) {
    let user = {
      username: registerInfo.username,
      password: registerInfo.password,
      secret: registerInfo.secret
    }
    
    return this.http.post<IUser>('http://pyramidmovieclub-env.eba-2f3jnpr3.us-east-1.elasticbeanstalk.com/api/auth/register', user);
  }

  loginUser(loginInfo: ILogin) {
    let user = {
      username: loginInfo.username,
      password: loginInfo.password,
    }

    return this.http.post<IUser>('http://pyramidmovieclub-env.eba-2f3jnpr3.us-east-1.elasticbeanstalk.com/api/auth/login', user);
  }

  

  logout() {
    this.http.get('http://pyramidmovieclub-env.eba-2f3jnpr3.us-east-1.elasticbeanstalk.com/api/auth/logout').subscribe(() => {
      this.user.next(null);
    });
  }
}
