import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskList } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskList, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gestorTareas');
}
