import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.html',
  styleUrl: './directivas.css',
})
export class Directivas {
  // Variable para mostrar/ocultar contenido
  mostrar: boolean = true;

  // Lista de elementos para recorrer
  nombres: string[] = ['Miguel', 'Ana', 'Carlos'];

  // Método para cambiar el estado
  cambiarMostrar(): void {
    this.mostrar = !this.mostrar;
  }
}
