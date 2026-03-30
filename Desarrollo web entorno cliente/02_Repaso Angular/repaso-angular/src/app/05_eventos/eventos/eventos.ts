import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos {
  // Variable para mostrar mensajes
  mensaje: string = 'No has hecho ninguna acción';

  // Método al hacer click
  hacerClick(): void {
    this.mensaje = 'Has hecho click en el botón';
  }

  // Método al escribir en input
  escribir(event: any): void {
    this.mensaje = 'Estás escribiendo: ' + event.target.value;
  }
}
