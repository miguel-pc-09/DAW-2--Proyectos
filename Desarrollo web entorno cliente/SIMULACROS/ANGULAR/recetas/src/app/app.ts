import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recetas } from './components/recetas/recetas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Recetas],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('recetas');
}
