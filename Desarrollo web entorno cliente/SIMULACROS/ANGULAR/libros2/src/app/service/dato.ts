import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Libros } from '../model/objeto';

@Injectable({
  providedIn: 'root',
})
export class Dato {
  private url = 'https://stephen-king-api.onrender.com/api/books';

  constructor(private gestorHttp: HttpClient) {}

  getAllLibros(): Observable<Libros> {
    return this.gestorHttp.get<Libros>(this.url);
  }
}
