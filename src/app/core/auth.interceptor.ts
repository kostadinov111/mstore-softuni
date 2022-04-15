import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IUser } from './interfaces';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap(httpEvent => {
      if(httpEvent instanceof HttpResponse) {
        if(httpEvent.url.endsWith('login') || httpEvent.url.endsWith('register')) {
          const newLoggedUser = httpEvent.body;
          this.authService.handleLogin(newLoggedUser as IUser);
        }
      }
    }));
  }
}
