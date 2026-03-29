/* 
clase -> constructor atri. metodos 
*/
export class tareaClase {
  constructor(
    private nombre: string,
    private responsable: string,
    private definicion: string,
    private fecha: string,
    private prioridad: string,
    private complemento: string,
  ) {}

  // A diferencia de Java aqui lo podemos definir como get o set para tratarlo como una propiedad
  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre: string) {
    this.nombre = nombre;
  }

  // Define los metodos que quieras
}

/* Si desde aqui queremos crear un objeto de tipo tarea,
me pide en constructor todos los datos */
// let tarea1 = new tarea('T1', 'R1', 'D1', '0-10-26', '1', 'C1');

/* Segunda forma de crear, con interfaz */
export interface tarea {
  // atributos y su tipo
  id: Number;
  nombre: string;
  responsable: string;
  descripcion: string;
  fecha: string;
  prioridad: number;
  complemento: string;
}

/* let tarea1: tarea = {
    nombre: 'T1',
    responsable: 'Miguel',
    descripcion: 'asdasd',
    fecha: '',
    prioridad: 1,
    complemento: 'asd'
} */
