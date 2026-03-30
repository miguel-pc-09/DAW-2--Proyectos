import { Component } from '@angular/core';

@Component({
  selector: 'app-rutas',
  imports: [],
  templateUrl: './rutas.html',
  styleUrl: './rutas.css',
})
export class Rutas {
  // Título del tema
  titulo: string = 'Rutas en Angular';

  // Descripción del tema
  descripcion: string =
    'Las rutas permiten navegar entre componentes usando la URL sin recargar toda la aplicación.';
}
