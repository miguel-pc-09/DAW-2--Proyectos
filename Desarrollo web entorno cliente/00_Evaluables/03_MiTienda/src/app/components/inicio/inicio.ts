import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiProductos } from '../../services/api-productos';
import { Product } from '../../model/producto';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  // Aquí guardo los productos que me llegan de la API
  productos: Product[] = [];

  constructor(
    // Servicio para pedir productos
    private servicio: ApiProductos,
  ) {
    // Cargo los productos directamente desde el constructor,
    // igual que en el ejemplo del profesor con la API
    this.servicio.getAllProductos().subscribe({
      next: (data) => {
        // Guardo los productos que devuelve la API
        this.productos = data.products;
      },
      error: (error) => {
        console.error('Error al cargar los productos de inicio', error);
      },
    });
  }
}
