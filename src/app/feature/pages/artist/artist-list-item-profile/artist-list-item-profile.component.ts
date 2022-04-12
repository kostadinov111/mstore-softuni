import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.isLoading = true;
    this.artistService.loadArtistById$(id).subscribe(artist => {
      this.artist = artist;
      this.isLoading = false;
    })
  }

}
