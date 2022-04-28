import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @ViewChild('editForm') editForm: NgForm;

  artist: IArtist;
  id: number = 0;
  idParam: string;

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
          this.id = (+(artist.id)) - 1;
          this.idParam = this.id + '';
          console.log(artist);
          this.editForm.form.patchValue({
            name: this.artist.name,
            formed: this.artist.formed,
            desc: this.artist.desc
          });
          
        },
        error: err => {
          console.log('Error happened: ', err);

        }
      }
      )
  }

  updateArtist(): void {
    // console.log(this.editForm.value);
    // console.log(JSON.stringify(this.editForm.value));
    this.artistService.updateArtist$(this.idParam, JSON.stringify(this.editForm.value));
    
  }

}
