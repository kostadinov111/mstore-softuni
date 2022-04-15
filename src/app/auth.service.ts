import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from './core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser = new BehaviorSubject<IUser>(undefined);

  currentUser$ = this._currentUser.asObservable();
  isLoggedIn$: Observable<boolean> = this.currentUser$.pipe(map(user => !!user))

  constructor(
    private httpClient: HttpClient
  ) { }

  login$(userData: {email: string, password: string}): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrlAuth}/login`, userData, {withCredentials: true});
  }

  logout$(): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiUrlAuth}/logout`, {}, {withCredentials: true});
  }

  register$(userData: {username: string, email: string, password: string}): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrlAuth}/register`, userData, { withCredentials: true });
  }

  handleLogin(newLoggedUser: IUser) {
    this._currentUser.next(newLoggedUser);
  }

  handleLogout() {
    this._currentUser.next(undefined);
  }
}
