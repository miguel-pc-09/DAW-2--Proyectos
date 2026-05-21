import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dato {
  private url =
    'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish%20La%20Liga';

  constructor(private gestorHttp: HttpClient) {}

  getAllEquipos(): Observable<any> {
    return this.gestorHttp.get<any>(this.url);
  }
}
