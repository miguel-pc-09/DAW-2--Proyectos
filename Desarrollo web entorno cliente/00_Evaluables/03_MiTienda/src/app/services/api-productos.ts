import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Welcome } from '../model/producto';

@Injectable({
  providedIn: 'root',
})
export class ApiProductos {
  private url = 'https://dummyjson.com/products';

  constructor(private gestorHttp: HttpClient) {}

  // Método para obtener todos los productos
  getAllProductos(): Observable<Welcome> {
    return this.gestorHttp.get<Welcome>(this.url);
  }

  // Método para obtener un producto por su id
  getProductoById(idProducto: string): Observable<Product> {
    return this.gestorHttp.get<Product>(this.url + '/' + idProducto);
  }
}
