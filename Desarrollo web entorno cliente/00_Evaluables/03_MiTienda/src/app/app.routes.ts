import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Carrito } from './components/carrito/carrito';
import { DetalleProducto } from './components/detalle-producto/detalle-producto';
import { Productos } from './components/productos/productos';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'productos', component: Productos },
  { path: 'detalle-producto/:id', component: DetalleProducto },
  { path: 'carrito', component: Carrito },

  { path: '**', redirectTo: 'inicio' },
];
