import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../model/producto';
import { ApiProductos } from '../../services/api-productos';
import { ServicioCarrito } from '../../services/servicio-carrito';

declare const Swal: any;

@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {
  productos: Product[] = [];
  productosFiltrados: Product[] = [];
  categoriaSeleccionada: string = 'todos';

  constructor(
    private servicio: ApiProductos,
    private servicioCarrito: ServicioCarrito,
  ) {}

  ngOnInit(): void {
    this.servicio.getAllProductos().subscribe((data) => {
      this.productos = data.products;
      this.productosFiltrados = data.products;
    });
  }

  filtrarProductos(categoria: string): void {
    this.categoriaSeleccionada = categoria;

    if (categoria === 'todos') {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(
        (producto) => producto.category === categoria,
      );
    }
  }

  agregarAlCarrito(producto: Product): void {
    this.servicioCarrito.agregarProducto(producto);

    Swal.fire({
      icon: 'success',
      title: 'Producto añadido',
      text: `${producto.title} se añadió al carrito`,
      timer: 1300,
      showConfirmButton: false,
    });
  }

  getTextoCategoria(): string {
    if (this.categoriaSeleccionada === 'todos') {
      return 'Todos los productos';
    }
    return this.categoriaSeleccionada;
  }
}
