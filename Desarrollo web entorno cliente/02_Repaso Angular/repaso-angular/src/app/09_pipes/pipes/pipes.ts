import { Component } from '@angular/core';
import {
  UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  CurrencyPipe,
  DecimalPipe,
  DatePipe,
} from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DecimalPipe, DatePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  // Datos de ejemplo
  nombre: string = 'miguel';

  precio: number = 49.99;

  fecha: Date = new Date();

  texto: string = 'angular es potente';
}
