import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../model/producto';
import { ApiProductos } from '../../services/api-productos';
import { ServicioCarrito } from '../../services/servicio-carrito';

declare const Swal: any;

@Component({
  selector: 'app-detalle-producto',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto {
  // Aquí guardo el producto que recibo de la API.
  // Lo dejo en null al principio porque al entrar todavía no tengo datos.
  producto: Product | null = null;

  constructor(
    // Esto me sirve para leer el id que llega por la URL
    private gestorRutas: ActivatedRoute,

    // Servicio que uso para pedir productos a la API
    private servicio: ApiProductos,

    // Servicio que uso para añadir productos al carrito
    private servicioCarrito: ServicioCarrito,
  ) {
    // Escucho los parámetros de la ruta para recuperar el id del producto
    // igual que en el ejemplo del profesor
    this.gestorRutas.paramMap.subscribe((params) => {
      const idProducto = params.get('id');

      // Solo hago la petición si realmente he recibido un id
      if (idProducto) {
        this.servicio.getProductoById(idProducto).subscribe({
          next: (respuesta) => {
            // Guardo el producto que devuelve la API
            this.producto = respuesta;
          },
          error: (error) => {
            console.error('Error al cargar el detalle del producto', error);
          },
        });
      }
    });
  }

  // Este método añade el producto actual al carrito
  agregarAlCarrito(): void {
    // Si todavía no hay producto cargado, no hago nada
    if (!this.producto) {
      return;
    }

    // Añado el producto al carrito
    this.servicioCarrito.agregarProducto(this.producto);

    // Muestro mensaje de confirmación
    Swal.fire({
      icon: 'success',
      title: 'Producto añadido',
      text: `${this.producto.title} se añadió al carrito`,
      timer: 1300,
      showConfirmButton: false,
    });
  }
}
