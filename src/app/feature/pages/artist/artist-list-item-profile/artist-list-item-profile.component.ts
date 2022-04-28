import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ArtistService } from 'src/app/core/artist.service';
import { IArtist } from 'src/app/core/interfaces';

@Component({
  selector: 'app-artist-list-item-profile',
  templateUrl: './artist-list-item-profile.component.html',
  styleUrls: ['./artist-list-item-profile.component.css']
})
export class ArtistListItemProfileComponent implements OnInit {

  artist?: IArtist;
  isLoading: boolean = false;
  id$: string;

  constructor(private activatedRoute: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap(params => {
          this.isLoading = true;
        }),
        switchMap(params => {
          return this.artistService.loadArtistById$(params['id'])
        })
      ).subscribe({
        next: artist => {
          this.artist = artist;
          this.isLoading = false;
        },
        error: err => {
          this.isLoading = false;
          console.log("An error occurred.", err);
          
        }
      })

  }
}