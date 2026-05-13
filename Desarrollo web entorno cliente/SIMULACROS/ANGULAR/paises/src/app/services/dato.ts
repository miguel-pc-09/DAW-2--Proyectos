import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Paises } from '../model/objeto';

@Injectable({
  providedIn: 'root',
})
export class Dato {
  private url = 'https://restcountries.com/v3.1/all?fields=name,flags,languages';
  constructor(private gestorHttp: HttpClient) {}

  getAllPaises(): Observable<Paises[]> {
    return this.gestorHttp.get<Paises[]>(this.url);
  }
}
