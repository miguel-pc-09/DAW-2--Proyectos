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
  // guardo los productos que me llegan de la API
  productos: Product[] = [];

  // constructor de la clase
  constructor(private servicio: ApiProductos) {}

  ngOnInit(): void {
    this.servicio.getAllProductos().subscribe((data) => {
      this.productos = data.products;
    });
  }
}
