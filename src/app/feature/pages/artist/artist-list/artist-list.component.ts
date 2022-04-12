import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/core/artist.service';
import { IArtist } from 'src/app/core/interfaces';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: IArtist[] = [];

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.loadArtistList().subscribe(artists => {
      this.artists = artists;
    })
  }

}
