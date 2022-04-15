import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces';

@Injectable()
export class UserService {

  // currentUser: IUser;

  // get isLogged() {
  //   return !!this.currentUser;
  // }

  constructor(private httpClient: HttpClient) { }

  // login$(userData: {email: string, password: string}): Observable<IUser> {
  //   return this.httpClient.post<IUser>(`${environment.apiUrlAuth}/login`, userData, {withCredentials: true})
  //   .pipe(tap(user => this.currentUser = user)
  //   );
  // }

  // register$(userData: {username: string, email: string, password: string}): Observable<IUser> {
  //   return this.httpClient.post<IUser>(`${environment.apiUrlAuth}/register`, userData, { withCredentials: true });
  // }

}
