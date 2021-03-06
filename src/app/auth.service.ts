import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILogin, IRegister, IUser } from './models/auth.model';
import { environment } from '../environments/environment';
import { WatchlistService } from './watchlist.service';

const BACKEND_URL = environment.apiUrl + '/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<IUser>(null);
  loginError = new BehaviorSubject(null);
  registerError = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private watchlistService: WatchlistService
    ) { }

  registerUser(registerInfo: IRegister) {
    let user = {
      username: registerInfo.username,
      password: registerInfo.password,
      secret: registerInfo.secret
    }

    return this.http.post<IUser>(BACKEND_URL + '/register', user);
  }

  loginUser(loginInfo: ILogin) {
    let user = {
      username: loginInfo.username,
      password: loginInfo.password,
    }

    return this.http.post<IUser>(BACKEND_URL + '/login', user);
  }



  logout() {
    this.http.get(BACKEND_URL + '/logout').subscribe(() => {
      this.watchlistService.getWatchlists();
      this.user.next(null);
    });
  }
}
