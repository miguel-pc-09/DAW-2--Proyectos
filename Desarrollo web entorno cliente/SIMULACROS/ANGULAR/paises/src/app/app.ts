import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pais } from './components/pais/pais';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pais],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('paises');
}
