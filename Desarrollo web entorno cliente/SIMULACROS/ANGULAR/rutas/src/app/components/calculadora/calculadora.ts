import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  historial: string[] = [];

  sumar() {
    this.resultado = this.numero1 + this.numero2;

    this.historial.push(`${this.numero1} + ${this.numero2} = ${this.resultado}`);
  }
  restar() {
    this.resultado = this.numero1 - this.numero2;
    this.historial.push(`${this.numero1} - ${this.numero2} = ${this.resultado}`);
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
    this.historial.push(`${this.numero1} * ${this.numero2} = ${this.resultado}`);
  }

  dividir() {
    this.resultado = this.numero1 / this.numero2;
    this.historial.push(`${this.numero1} / ${this.numero2} = ${this.resultado}`);
  }
}
