import { Injectable } from '@angular/core';
import { Product } from '../model/producto';

@Injectable({
  providedIn: 'root',
})
export class ServicioCarrito {
  // Aquí guardo los productos que el usuario va metiendo en el carrito
  productosCarrito: Product[] = [];

  constructor() {}

  // Añadir un producto al carrito
  agregarProducto(producto: Product): void {
    this.productosCarrito.push(producto);
  }

  // Obtener los productos del carrito
  getProductosCarrito(): Product[] {
    return this.productosCarrito;
  }

  // Eliminar un producto del carrito
  eliminarProducto(idProducto: number): void {
    // Busco el índice del producto a eliminar
    const indice = this.productosCarrito.findIndex((producto) => producto.id === idProducto);

    // Si lo encuentro, lo elimino
    if (indice !== -1) {
      this.productosCarrito.splice(indice, 1);
    }
  }

  // Obtener el total del carrito
  getTotalCarrito(): number {
    // variable para acumular el total
    let total = 0;

    // Recorro los productos del carrito y sumo sus precios
    this.productosCarrito.forEach((producto) => {
      total += producto.price;
    });
    // Devuelvo el total final
    return total;
  }

  // Vaciar el carrito
  vaciarCarrito(): void {
    // Elimino desde la posición 0 hasta el final del array
    this.productosCarrito.splice(0, this.productosCarrito.length);
  }
}
