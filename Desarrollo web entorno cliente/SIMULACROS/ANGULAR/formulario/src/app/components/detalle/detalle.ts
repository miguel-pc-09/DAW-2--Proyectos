import { Component } from '@angular/core';
import { Persona } from '../../model/persona';
import { ActivatedRoute } from '@angular/router';
import { Datos } from '../../services/datos';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {
  persona?: Persona;

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicioDatos: Datos,
  ) {
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.persona = this.servicioDatos.getPersonaById(id);
  }
}
