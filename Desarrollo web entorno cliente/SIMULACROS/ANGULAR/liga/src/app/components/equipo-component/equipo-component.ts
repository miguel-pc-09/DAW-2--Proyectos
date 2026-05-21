import { Component } from '@angular/core';
import { Equipo } from '../../model/equipo';
import { Dato } from '../../services/dato';

@Component({
  selector: 'app-equipo-component',
  imports: [],
  templateUrl: './equipo-component.html',
  styleUrl: './equipo-component.css',
})
export class EquipoComponent {
  equipos: Equipo[] = [];
  constructor(private servicio: Dato) {
    this.servicio.getAllEquipos().subscribe((respuesta) => {
      this.equipos = respuesta.teams;
    });
  }
}
