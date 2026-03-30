// Importo Component para definir el componente principal
import { Component } from '@angular/core';

// Importo RouterLink y RouterOutlet para navegación
import { RouterLink, RouterOutlet } from '@angular/router';

// Defino el componente principal
@Component({
  selector: 'app-root',

  // Importo lo que usaré en el HTML
  imports: [RouterLink, RouterOutlet],

  // HTML principal
  templateUrl: './app.html',

  // CSS principal
  styleUrl: './app.css',
})
export class App {
  // Título principal
  titulo: string = 'Repaso de Angular';

  // Descripción
  descripcion: string = 'Proyecto organizado por temas para estudiar Angular paso a paso';
}
