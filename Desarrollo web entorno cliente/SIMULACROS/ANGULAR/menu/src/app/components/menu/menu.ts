import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alimento } from '../../model/alimento';

@Component({
  selector: 'app-menu',
  imports: [FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  nombre: string = '';

  calorias: number = 0;

  alimentos: Alimento[] = [];

  totalCalorias: number = 0;

  agregarAlimento() {
    if (this.nombre == '' || this.calorias <= 0) {
      alert('Rellena los campos correctamente');
    } else {
      const nuevoAlimento: Alimento = {
        nombre: this.nombre,

        calorias: this.calorias,
      };

      this.alimentos.push(nuevoAlimento);

      this.totalCalorias = this.totalCalorias + this.calorias;

      this.nombre = '';

      this.calorias = 0;
    }
  }

  eliminarAlimento(alimento: Alimento) {
    this.totalCalorias = this.totalCalorias - alimento.calorias;

    this.alimentos = this.alimentos.filter((item) => item != alimento);
  }
}
