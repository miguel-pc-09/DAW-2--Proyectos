import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pelicula } from './components/pelicula/pelicula';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pelicula],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('peliculas5');
}
