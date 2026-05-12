import { Component } from '@angular/core';
import { Peliculas } from '../../model/objeto';
import { Dato } from '../../services/dato';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {
  peliculas: Peliculas[] = [];

  constructor(private servicio: Dato) {
    this.servicio.getAllPeliculas().subscribe((data) => {
      this.peliculas = data;
    });
  }
}
