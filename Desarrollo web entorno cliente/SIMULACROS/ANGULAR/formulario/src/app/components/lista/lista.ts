import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Persona } from '../../model/persona';
import { Datos } from '../../services/datos';

@Component({
  selector: 'app-lista',
  imports: [RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  personas: Persona[] = [];

  constructor(private servicioDatos: Datos) {
    this.personas = this.servicioDatos.getPersonas();
  }
}
