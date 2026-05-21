import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Datos } from '../../services/datos';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nombre: string = '';
  correo: string = '';
  anios: number = 0;

  constructor(private servicioDatos: Datos) {}

  enviar() {
    const nuevaPersona: Persona = {
      id: Date.now(),
      nombre: this.nombre,
      correo: this.correo,
      anios: this.anios,
    };

    this.servicioDatos.agregarPersona(nuevaPersona);

    this.nombre = '';
    this.correo = '';
    this.anios = 0;
  }
}
