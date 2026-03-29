import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prioridades',
  imports: [],
  templateUrl: './prioridades.html',
  styleUrl: './prioridades.css',
})
export class Prioridades {
  param?: string;

  constructor(private gestorRutas: ActivatedRoute) {
    this.gestorRutas.paramMap.subscribe((data) => {
      this.param = data.get('id') ?? '0';

      // Con este dato, te vas al servicio y haces busqueda.
    });
  }
}
