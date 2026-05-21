import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EquipoComponent } from './components/equipo-component/equipo-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EquipoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('liga');
}
