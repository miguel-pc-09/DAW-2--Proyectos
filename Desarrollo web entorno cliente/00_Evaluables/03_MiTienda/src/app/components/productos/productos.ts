import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  // Aquí guardo todos los productos completos
  productos: Product[] = [];

  // Aquí guardo solo los productos que voy a mostrar tras filtrar
  productosFiltrados: Product[] = [];

  // Aquí guardo la categoría elegida
  categoriaSeleccionada: string = 'todos';

  constructor(
    // Servicio para pedir productos
    private servicio: ApiProductos,

    // Servicio del carrito
    private servicioCarrito: ServicioCarrito,

    // Esto me sirve para forzar que Angular repinte la vista
    private detectorCambios: ChangeDetectorRef,
  ) {}

  // Cargo los productos cuando el componente ya está creado
  ngOnInit(): void {
    this.servicio.getAllProductos().subscribe({
      next: (data) => {
        // Guardo todos los productos
        this.productos = data.products;

        // Al principio muestro todos
        this.productosFiltrados = data.products;

        // Fuerzo que Angular refresque la vista en ese momento
        this.detectorCambios.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar los productos', error);
      },
    });
  }

  // Este método filtra productos por categoría
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

  // Este método añade un producto al carrito
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

  // Este método devuelve el texto que enseño en el botón del filtro
  getTextoCategoria(): string {
    if (this.categoriaSeleccionada === 'todos') {
      return 'Todos los productos';
    }

    return this.categoriaSeleccionada;
  }
}
