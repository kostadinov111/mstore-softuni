import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './feature/pages/about/about.component';
import { ArtistListItemProfileComponent } from './feature/pages/artist/artist-list-item-profile/artist-list-item-profile.component';
import { ArtistListComponent } from './feature/pages/artist/artist-list/artist-list.component';
import { HomeComponent } from './feature/pages/home/home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
