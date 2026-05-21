import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Receta } from '../../model/receta';
import { Datos } from '../../services/datos';

@Component({
  selector: 'app-recetas',
  imports: [FormsModule],
  templateUrl: './recetas.html',
  styleUrl: './recetas.css',
})
export class Recetas {
  tags: string[] = [];
  recetas: Receta[] = [];
  tagSeleccionado: string = '';

  constructor(private servicioDatos: Datos) {
    this.servicioDatos.getTags().subscribe((respuesta) => {
      this.tags = respuesta;
    });
  }

  buscarRecetas() {
    if (this.tagSeleccionado == '') {
      alert('Selecciona una etiqueta');
    } else {
      this.servicioDatos.getRecetasPorTag(this.tagSeleccionado).subscribe((respuesta) => {
        this.recetas = respuesta.recipes;
      });
    }
  }
}
