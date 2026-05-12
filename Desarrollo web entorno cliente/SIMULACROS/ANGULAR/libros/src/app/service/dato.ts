import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dato {
  private url = 'https://stephen-king-api.onrender.com/api/books';
  constructor(private gestorHttp: HttpClient) {}

  gestAllLibros(): Observable<any> {
    return this.gestorHttp.get<any>(this.url);
  }
}
