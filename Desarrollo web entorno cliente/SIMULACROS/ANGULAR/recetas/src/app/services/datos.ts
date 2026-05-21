import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaRecetas } from '../model/receta';

@Injectable({
  providedIn: 'root',
})
export class Datos {
  private urlTags: string = 'https://dummyjson.com/recipes/tags';
  private urlRecetas: string = 'https://dummyjson.com/recipes/tag/';

  constructor(private http: HttpClient) {}

  getTags() {
    return this.http.get<string[]>(this.urlTags);
  }

  getRecetasPorTag(tag: string) {
    return this.http.get<RespuestaRecetas>(this.urlRecetas + tag);
  }
}
