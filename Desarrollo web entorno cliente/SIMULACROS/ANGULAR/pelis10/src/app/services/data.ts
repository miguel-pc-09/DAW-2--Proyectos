import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Objeto } from '../model/objeto';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private url = 'https://api.sampleapis.com/movies/animation';
  constructor(private http: HttpClient) {}

  getAllPeliculas(): Observable<Objeto[]> {
    return this.http.get<Objeto[]>(this.url);
  }
}
