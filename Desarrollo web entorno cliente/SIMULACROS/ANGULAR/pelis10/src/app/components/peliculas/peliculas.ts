import { Component } from '@angular/core';
import { Data } from '../../services/data';
import { Objeto } from '../../model/objeto';

@Component({
  selector: 'app-peliculas',
  standalone: false,
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})
export class Peliculas {
  peliculas?: Objeto[] = [];
  constructor(private servicio: Data) {
    this.servicio.getAllPeliculas().subscribe((response) => {
      this.peliculas = response;
    });
  }
}
