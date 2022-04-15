import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AboutComponent } from './feature/pages/about/about.component';
import { ArtistListItemProfileComponent } from './feature/pages/artist/artist-list-item-profile/artist-list-item-profile.component';
import { ArtistListComponent } from './feature/pages/artist/artist-list/artist-list.component';
import { EventComponent } from './feature/pages/event/event.component';
import { HipHopPageComponent } from './feature/pages/hip-hop-page/hip-hop-page.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { JazzPageComponent } from './feature/pages/jazz-page/jazz-page.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';
import { RockPageComponent } from './feature/pages/rock-page/rock-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'artists',
    component: ArtistListComponent
  },
  {
    path: 'artists/:id',
    component: ArtistListItemProfileComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events',
    component: EventComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rock',
    component: RockPageComponent
  },
  {
    path: 'jazz',
    component: JazzPageComponent
  },
  {
    path: 'hip-hop',
    component: HipHopPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
