// Importo Component para crear el componente
import { Component } from '@angular/core';

// Importo FormsModule para poder usar ngModel en el input
import { FormsModule } from '@angular/forms';

// Defino el componente del tema 03
@Component({
  // Indico que el componente es standalone
  standalone: true,

  // Nombre de la etiqueta del componente
  selector: 'app-binding',

  // Importo FormsModule porque lo voy a usar en el HTML
  imports: [FormsModule],

  // Archivo HTML del componente
  templateUrl: './binding.html',

  // Archivo CSS del componente
  styleUrl: './binding.css',
})

// Clase del componente
export class Binding {
  // Variable que mostraré con interpolación
  titulo: string = 'Binding en Angular';

  // Variable para explicar el tema
  descripcion: string = 'Binding significa conectar datos y eventos entre TypeScript y HTML.';

  // Variable que voy a mostrar en un texto y en un input
  nombre: string = 'Miguel';

  // Variable para una imagen
  imagen: string = 'https://via.placeholder.com/250x120?text=Angular';

  // Variable para guardar el texto del botón
  mensaje: string = 'Todavía no he pulsado el botón';

  // Método que se ejecutará al pulsar el botón
  cambiarMensaje(): void {
    // Cambio el contenido de la variable mensaje
    this.mensaje = 'Has pulsado el botón correctamente';
  }
}
