import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
