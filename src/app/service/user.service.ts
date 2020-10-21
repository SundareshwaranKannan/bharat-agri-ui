import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../shared/model/user';
import {UserLogin} from '../shared/model/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'localhost:5000/auth';
  currentUser = {} as User;
  userDataBase = [] as UserLogin[];

  constructor(private http: HttpClient) {
    const user = {} as UserLogin;
    user.email = 'sample@gmail.com';
    user.password = '123';
    this.userDataBase.push(user);
  }

  getUserDetails(userRequest: UserLogin): Observable<User> {
    return this.http.post<User>(this.url + '/login', userRequest);
  }

  registerUser(userRequest: UserLogin): Observable<User> {
    return this.http.post<User>(this.url + '/register', userRequest);
  }
}
