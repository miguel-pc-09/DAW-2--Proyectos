import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiProductos } from '../../services/api-productos';
import { Product } from '../../model/producto';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {
  // Aquí guardo los productos que me llegan de la API
  productos: Product[] = [];

  constructor(
    // Servicio para pedir productos
    private servicio: ApiProductos,

    // Esto me sirve para forzar que Angular repinte la vista
    private detectorCambios: ChangeDetectorRef,
  ) {}

  // Cargo los productos cuando el componente ya está creado
  ngOnInit(): void {
    this.servicio.getAllProductos().subscribe({
      next: (data) => {
        // Guardo los productos que devuelve la API
        this.productos = data.products;

        // Fuerzo que la vista se refresque en ese mismo momento
        this.detectorCambios.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar los productos de inicio', error);
      },
    });
  }
}