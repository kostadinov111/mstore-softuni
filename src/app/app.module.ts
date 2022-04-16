import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AuthModule } from './auth/auth.module';
import { ArtistService } from './core/artist.service';
import { AuthInterceptor } from './core/auth.interceptor';
import { CoreModule } from './core/core.module';
import { UserService } from './core/user.service';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeatureModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [{
    provide: ArtistService
  },
  UserService,
  {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor
  },
  {
    provide: APP_INITIALIZER,
    useFactory: (authService: AuthService) => {
      return () => authService.authenticate();
    },
    deps:[AuthService],
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
