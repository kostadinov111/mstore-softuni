import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtistListComponent } from './pages/artist/artist-list/artist-list.component';
import { ArtistListItemComponent } from './pages/artist/artist-list-item/artist-list-item.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ArtistListComponent,
    ArtistListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
