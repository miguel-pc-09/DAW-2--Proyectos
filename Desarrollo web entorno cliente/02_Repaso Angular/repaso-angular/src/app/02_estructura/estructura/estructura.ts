import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-estructura',
  templateUrl: './estructura.html',
  styleUrl: './estructura.css',
})
export class Estructura {
  titulo: string = 'Estructura de Angular';

  descripcion: string = 'Cada archivo tiene una función dentro del proyecto';
}
