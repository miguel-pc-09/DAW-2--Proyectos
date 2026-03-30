// Importo Component
import { Component } from '@angular/core';

// Importo el componente hijo
import { Hijo } from '../hijo/hijo';

// Defino el componente padre
@Component({
  standalone: true,
  selector: 'app-padre',

  // IMPORTANTE → importar el hijo
  imports: [Hijo],

  templateUrl: './padre.html',
  styleUrl: './padre.css',
})

// Clase del componente padre
export class Padre {
  // Variable que enviaré al hijo
  nombrePadre: string = 'Miguel';

  // Variable para mostrar mensaje del hijo
  mensaje: string = 'Esperando mensaje...';

  // Método que recibe el mensaje del hijo
  recibirMensaje(texto: string): void {
    this.mensaje = texto;
  }
}
