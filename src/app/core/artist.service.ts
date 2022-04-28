import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArtist, IEvent } from './interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient) { }

  loadArtistList$(): Observable<IArtist[]> {
    return this.http.get<IArtist[]>(`${environment.apiUrl}/artists.json`);
  }

  loadArtistById$(id: string): Observable<IArtist> {
    return this.http.get<IArtist>(`${environment.apiUrl}/artists/${+(id) - 1}.json`);
  }

  loadEvents$(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(`${environment.apiUrl}/events.json`);
  }
}
