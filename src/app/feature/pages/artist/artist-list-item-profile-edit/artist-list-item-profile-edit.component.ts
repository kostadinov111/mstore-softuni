import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ArtistService } from 'src/app/core/artist.service';
import { IArtist } from 'src/app/core/interfaces';

@Component({
  selector: 'app-artist-list-item-profile-edit',
  templateUrl: './artist-list-item-profile-edit.component.html',
  styleUrls: ['./artist-list-item-profile-edit.component.css']
})
export class ArtistListItemProfileEditComponent implements OnInit {

  artist: IArtist;
  id: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private artistService: ArtistService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap(
          params => { this.id = +params['id'] }
        ),
        switchMap(
          params => {
            return this.artistService.loadArtistById$(params['id'])
          }
        )
      ).subscribe({
        next: artist => {
          this.artist = artist;
          console.log(artist);
          
        },
        error: err => {
          console.log('Error happened: ', err);

        }
      }
      )
  }

  handleEdit(): void {
    
  }

}
