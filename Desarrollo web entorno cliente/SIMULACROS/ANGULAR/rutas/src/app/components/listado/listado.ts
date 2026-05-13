import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {
  nombres: string[] = ['Miguel', 'Lucía', 'Carlos', 'Ana', 'Pedro'];
}
