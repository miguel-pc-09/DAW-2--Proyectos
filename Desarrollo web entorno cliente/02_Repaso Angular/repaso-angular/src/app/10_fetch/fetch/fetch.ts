import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch',
  imports: [],
  templateUrl: './fetch.html',
  styleUrl: './fetch.css',
})
export class Fetch {
  // Array donde guardaré los datos de la API
  usuarios: any[] = [];

  // Variable para estado de carga
  cargando: boolean = false;

  // Método que hace la petición
  obtenerUsuarios(): void {
    // Indico que está cargando
    this.cargando = true;

    // Hago petición con fetch
    fetch('https://jsonplaceholder.typicode.com/users')
      // Cuando llega respuesta la convierto a JSON
      .then((res) => res.json())

      // Cuando tengo los datos
      .then((data) => {
        this.usuarios = data;

        // Quito el loading
        this.cargando = false;
      })

      // Si hay error
      .catch((error) => {
        console.error('Error:', error);
        this.cargando = false;
      });
  }
}
