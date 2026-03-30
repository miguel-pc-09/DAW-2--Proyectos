// Importo Component
import { Component } from '@angular/core';

// Importo FormsModule para usar ngModel
import { FormsModule } from '@angular/forms';

// Importo el servicio de tareas
import { Tareas } from '../../services/tareas';

// Defino el componente
@Component({
  // Indico que es standalone
  standalone: true,

  // Nombre de la etiqueta del componente
  selector: 'app-servicios',

  // Importo FormsModule porque lo usaré en el HTML
  imports: [FormsModule],

  // Archivo HTML del componente
  templateUrl: './servicios.html',

  // Archivo CSS del componente
  styleUrl: './servicios.css',
})

// Clase del componente
export class Servicios {
  // Array donde voy a guardar las tareas recibidas del servicio
  listaTareas: string[] = [];

  // Variable enlazada al input
  nuevaTarea: string = '';

  // Inyecto el servicio en el constructor
  constructor(private tareasService: Tareas) {
    // Cargo las tareas iniciales desde el servicio
    this.listaTareas = this.tareasService.getTareas();
  }

  // Método para añadir una tarea nueva usando el servicio
  agregarTarea(): void {
    // Llamo al método del servicio
    this.tareasService.addTarea(this.nuevaTarea);

    // Actualizo la lista en pantalla
    this.listaTareas = this.tareasService.getTareas();

    // Limpio el input después de añadir
    this.nuevaTarea = '';
  }
}
