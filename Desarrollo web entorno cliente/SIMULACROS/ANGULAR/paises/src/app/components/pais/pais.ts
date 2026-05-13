import { Component } from '@angular/core';
import { Dato } from '../../services/dato';
import { Paises } from '../../model/objeto';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-pais',
  imports: [KeyValuePipe],
  templateUrl: './pais.html',
  styleUrl: './pais.css',
})
export class Pais {
  paises: Paises[] = [];
  constructor(private servicio: Dato) {
    this.servicio.getAllPaises().subscribe((respuesta) => {
      this.paises = respuesta;
    });
  }
}
