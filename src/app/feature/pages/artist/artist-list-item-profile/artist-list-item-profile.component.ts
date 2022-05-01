import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ArtistService } from 'src/app/core/artist.service';
import { IArtist } from 'src/app/core/interfaces';

@Component({
  selector: 'app-artist-list-item-profile',
  templateUrl: './artist-list-item-profile.component.html',
  styleUrls: ['./artist-list-item-profile.component.css']
})
export class ArtistListItemProfileComponent implements OnInit {

  @ViewChild('editForm') editForm: NgForm;

  artist?: IArtist;
  isLoading: boolean = false;
  isInEditMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private artistService: ArtistService,
    private router: Router
    ) { }

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
          // console.log(this.artist);
          this.isLoading = false;
        },
        error: err => {
          this.isLoading = false;
          console.log("An error occurred.", err);
          
        }
      })
  }

  enterEditMode(): void {
    this.isInEditMode = true;
    setTimeout(() => {
      this.editForm.form.patchValue({
        name: this.artist.name,
        formed: this.artist.formed,
        desc: this.artist.desc,
        imgUrl: this.artist.imgUrl
      })
    });
  }

  updateArtist(): void {
    console.log(this.editForm.value);
    this.artistService.updateArtist$(((this.artist.id - 1) + ''), JSON.stringify(this.editForm.value));
    setTimeout(() => {
      this.ngOnInit();
      this.isInEditMode = false;
    }, 50);
    
  }

  deleteArtist(): void {
    this.artistService.deleteArtist$(((this.artist.id - 1) + ''));
    setTimeout(() => {
      this.router.navigate(['/artists'])
    }, 50);
  }

}