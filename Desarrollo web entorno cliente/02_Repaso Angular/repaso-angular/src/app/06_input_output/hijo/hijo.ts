import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  // 🔥 INPUT → recibe datos del padre
  @Input() nombre: string = '';

  // 🔥 OUTPUT → envía datos al padre
  @Output() mensajeEnviado = new EventEmitter<string>();

  // Método que envía datos al padre
  enviarMensaje(): void {
    this.mensajeEnviado.emit('Mensaje desde el hijo');
  }
}
