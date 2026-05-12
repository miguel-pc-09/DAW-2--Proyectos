import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Peliculas } from '../model/objeto';

@Injectable({
  providedIn: 'root',
})
export class Dato {
  private url = 'https://api.sampleapis.com/movies/animation';
  constructor(private http: HttpClient) {}
  getAllPeliculas(): Observable<Peliculas[]> {
    return this.http.get<Peliculas[]>(this.url);
  }
}
