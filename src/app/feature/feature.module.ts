import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtistListComponent } from './pages/artist/artist-list/artist-list.component';
import { ArtistListItemComponent } from './pages/artist/artist-list-item/artist-list-item.component';
import { RouterModule } from '@angular/router';
import { ArtistListItemProfileComponent } from './pages/artist/artist-list-item-profile/artist-list-item-profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ArtistListComponent,
    ArtistListItemComponent,
    ArtistListItemProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FeatureModule { }
