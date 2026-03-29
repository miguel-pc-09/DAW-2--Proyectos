import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tarea } from '../../model/tarea';
import { Tareas } from '../../services/tareas';
/* import { tarea } from '../../model/tarea'; */

@Component({
  selector: 'app-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  dificultad?: string | undefined;
  nombre?: string;
  responsable?: string;
  complemento?: string;
  definicion?: string;
  fecha?: string;

  constructor(private servicio: Tareas) {}
  anadirTarea() {
    this.servicio.addTarea({
      // nombre: this.nombre, Para que no de error podemos poner !! para decirle que no es undefined
      // Y la otra es meterle ? en tarea del model para decirle que es opcional.
      // Aqui lo dejamos con !! porque antes tendriamos que validar datos.
      id: -1,
      nombre: this.nombre!!,
      responsable: this.responsable!!,
      fecha: this.fecha!!,
      descripcion: this.definicion!!,
      complemento: this.complemento!!,
      prioridad: Number(this.dificultad),
    });
  }

  // Como queremos que lo que el ususario rellene se guarde lo que necesitamos es un array de tarea
  // tareas: tarea [] = []; ya no sirve si utilizamos el servicio.

  /* opcion 1 creacion de objeto */
  /* tarea1: tarea = new tarea('T1', 'R1', 'D1', '0-10-26', '1', 'C1'); */

  /* Opcion 2 con interfaz */
  /* tarea1: tarea = {
    nombre: 'T1',
    responsable: 'Miguel',
    descripcion: 'asdasd',
    fecha: '',
    prioridad: 1,
    complemento: 'asd'

} */
}
