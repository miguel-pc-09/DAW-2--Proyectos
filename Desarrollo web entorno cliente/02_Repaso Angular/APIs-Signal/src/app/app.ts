import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaisComponent } from './componets/pais-component/pais-component';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaisComponent],
  template: `<app-pais-component></app-pais-component>`,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('APIs-Signal');
}
