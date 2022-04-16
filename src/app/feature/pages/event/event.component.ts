import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/core/artist.service';
import { IEvent } from 'src/app/core/interfaces';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: IEvent[];

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit(): void {
    this.artistService.loadEvents$().subscribe(events => {
      console.log(events);
      this.events = events
    });
  }

}
