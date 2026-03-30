// Importo Injectable para crear un servicio
import { Injectable } from '@angular/core';

// Defino el servicio
@Injectable({
  // Con root hago que el servicio esté disponible en toda la aplicación
  providedIn: 'root',
})

// Clase del servicio
export class Tareas {
  // Creo un array privado con unas tareas de ejemplo
  private tareas: string[] = ['Estudiar Angular', 'Repasar rutas', 'Practicar componentes'];

  // Método para devolver todas las tareas
  getTareas(): string[] {
    return this.tareas;
  }

  // Método para añadir una tarea nueva
  addTarea(nuevaTarea: string): void {
    // Compruebo que no esté vacía
    if (nuevaTarea.trim() !== '') {
      this.tareas.push(nuevaTarea);
    }
  }
}
