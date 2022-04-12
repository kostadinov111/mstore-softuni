import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArtist } from './interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient) { }

  loadArtistList(): Observable<IArtist[]> {
    return this.http.get<IArtist[]>(`${environment.apiUrl}/artists`);
  }

}
