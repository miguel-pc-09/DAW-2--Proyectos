import { Component, signal } from '@angular/core';
import { Peliculas } from './components/peliculas/peliculas';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pelis10');
}
