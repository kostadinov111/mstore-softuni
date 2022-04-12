import { Component, Input, OnInit } from '@angular/core';
import { IArtist } from 'src/app/core/interfaces';

@Component({
  selector: 'app-artist-list-item',
  templateUrl: './artist-list-item.component.html',
  styleUrls: ['./artist-list-item.component.css']
})
export class ArtistListItemComponent implements OnInit {

  @Input() artist?: IArtist;

  constructor() { }

  ngOnInit(): void {
  }

}
