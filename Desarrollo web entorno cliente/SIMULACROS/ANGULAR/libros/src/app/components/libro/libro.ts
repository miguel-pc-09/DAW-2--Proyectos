import { Component } from '@angular/core';
import { Datum, Libros } from '../../model/objeto';
import { Dato } from '../../service/dato';

@Component({
  selector: 'app-libro',
  imports: [],
  templateUrl: './libro.html',
  styleUrl: './libro.css',
})
export class Libro {
  libros: Datum[] = [];
  constructor(private servicio: Dato) {
    this.servicio.gestAllLibros().subscribe((respuesta) => {
      this.libros = respuesta.data;
    });
  }
}
