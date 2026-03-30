import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-que-es-angular',
  templateUrl: './que-es-angular.html',
  styleUrl: './que-es-angular.css',
})
export class QueEsAngular {
  titulo: string = 'Qué es Angular';

  descripcion: string =
    'Angular es un framework que permite crear aplicaciones web usando componentes.';
}
