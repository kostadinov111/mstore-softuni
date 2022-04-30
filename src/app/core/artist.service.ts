import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArtist, IEvent } from './interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient) { }

  loadArtistList$(): Observable<IArtist[]> {
    return this.http.get<IArtist[]>(`${environment.apiUrl}/artists/artists.json`);
  }

  loadArtistById$(id: string): Observable<IArtist> {
    return this.http.get<IArtist>(`${environment.apiUrl}/artists/artists/${+(id) - 1}.json`);
  }

  loadEvents$(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(`${environment.apiUrl}/events.json`);
  }

  updateArtist$(id: string, data: any): void {
    
    this.http.patch(`${environment.apiUrl}/artists/artists/${id}.json`, data).subscribe(response => {
      // console.log(response);
    });
  }

  deleteArtist$(id: string): void {
    this.http.delete(`${environment.apiUrl}/artists/artists/${id}.json`).subscribe();
  }

  addEvent$(length: number, body: any): void {
    this.http.put<IEvent>(`${environment.apiUrl}/events/${length}.json`, body).subscribe();
  }
}
