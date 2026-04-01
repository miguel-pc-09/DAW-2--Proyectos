import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class DetalleProducto implements OnInit {
  // Aquí guardo el producto que voy a recibir desde la API.
  // Lo pongo en null al principio porque al cargar la página todavía no existe.
  producto: Product | null = null;

  constructor(
    // Esto me sirve para leer el id que llega por la URL
    private gestorRutas: ActivatedRoute,

    // Servicio que uso para pedir el producto a la API
    private servicio: ApiProductos,

    // Servicio que uso para añadir productos al carrito
    private servicioCarrito: ServicioCarrito,
  ) {}

  // Este método se ejecuta cuando el componente ya está cargado
  ngOnInit(): void {
    // Escucho los parámetros de la ruta para coger el id del producto
    this.gestorRutas.paramMap.subscribe((params) => {
      const idProducto = params.get('id');

      // Solo hago la petición si realmente tengo id
      if (idProducto) {
        this.servicio.getProductoById(idProducto).subscribe((respuesta) => {
          this.producto = respuesta;
        });
      }
    });
  }

  // Este método añade el producto actual al carrito
  agregarAlCarrito(): void {
    // Si todavía no hay producto cargado, salgo del método
    if (!this.producto) {
      return;
    }

    // Añado el producto al carrito
    this.servicioCarrito.agregarProducto(this.producto);

    // Muestro un mensaje de confirmación
    Swal.fire({
      icon: 'success',
      title: 'Producto añadido',
      text: `${this.producto.title} se añadió al carrito`,
      timer: 1300,
      showConfirmButton: false,
    });
  }
}
