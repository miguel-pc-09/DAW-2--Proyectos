import { Component } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskItem } from '../task-item/task-item';
import { Tarea } from '../../model/tarea';

@Component({
  selector: 'app-task-list',
  imports: [TaskForm, TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tareas: Tarea[] = [];

  filtro: string = 'todas';

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
  }

  cambiarEstado(id: number) {
    const tareaEncontrada = this.tareas.find((item) => item.id === id);

    if (tareaEncontrada) {
      tareaEncontrada.completada = !tareaEncontrada.completada;
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter((item) => item.id !== id);
  }

  cambiarFiltro(filtroNuevo: string) {
    this.filtro = filtroNuevo;
  }

  get tareasFiltradas(): Tarea[] {
    if (this.filtro === 'pendientes') {
      return this.tareas.filter((item) => item.completada === false);
    }

    if (this.filtro === 'completadas') {
      return this.tareas.filter((item) => item.completada === true);
    }

    return this.tareas;
  }

  get contadorPendientes(): number {
    return this.tareas.filter((item) => item.completada === false).length;
  }
}
