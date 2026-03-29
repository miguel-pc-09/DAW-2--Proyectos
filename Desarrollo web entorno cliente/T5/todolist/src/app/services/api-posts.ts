import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostsReponse } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class ApiPosts {
  // 1º necesitamos la url sobre la que hacemos la peticion
  private url = 'https://dummyjson.com/post';

  // 2º necesitamos hacer la peticion, igual que con las funciones fetch, aqui sobre el modulo http
  constructor(private gestorHttp: HttpClient) {} // Elemento que permite hacer peticiones hacia afuera
  /* Para que esto funcione necesito que mi proyecto me de la funcionalidad de poder ir hacia afuera, tenemos que ir a la configuracion
  del servidor, "app.config.server.ts" y en la linea de providers metemos el "provideServerRendering" */

  // Queremos tener todos los post. Lo tipamos como objeto de tipo observable <Tipado como..>
  getAllPost(): Observable<PostsReponse> {
    return this.gestorHttp.get<PostsReponse>(this.url);
  }

  // Ultimo paso en el componente postfetch

  // Metodo para Identificador
  getPostById(id: string): Observable<Post> {
    return this.gestorHttp.get<Post>(this.url);
  }
}
