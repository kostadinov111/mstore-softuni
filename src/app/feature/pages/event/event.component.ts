import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/core/artist.service';
import { IEvent } from 'src/app/core/interfaces';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: IEvent[];
  isInAddMode: boolean = false;

  constructor(
    private artistService: ArtistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.artistService.loadEvents$().subscribe(events => {
      console.log(events);
      this.events = events
    });
  }

  enterAddEventMode(): void {
    this.isInAddMode = true;
  }

  submitNewEvent(addEvent: NgForm): void {
    console.log(addEvent.value);
    
  }

  handleCancel(): void {
    this.isInAddMode = false;
  }

}
