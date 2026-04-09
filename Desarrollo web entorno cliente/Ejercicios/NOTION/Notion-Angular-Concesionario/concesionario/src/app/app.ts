import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*
  Esta interfaz define cómo será cada coche.
  Así dejamos claro qué propiedades tiene cada objeto.
*/
interface Coche {
  marca: string;
  modelo: string;
  cv: number;
  cc: number;
  tipoMotor: string;
  matricula: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  /*
    Array principal donde guardo todos los coches que voy creando
    desde el formulario de la izquierda.
  */
  coches: Coche[] = [];

  /*
    Aquí guardo solo los coches que cumplen el filtro.
  */
  resultadosFiltro: Coche[] = [];

  /*
    Aquí guardo los coches que realmente se van a mostrar
    en las tarjetas de la parte derecha.
    Empieza vacío porque el enunciado dice que al arrancar
    no debe verse ningún coche.
  */
  cochesMostrados: Coche[] = [];

  /*
    Este objeto representa el formulario para agregar coches.
  */
  cocheFormulario = {
    marca: '',
    modelo: '',
    cv: null as number | null,
    cc: null as number | null,
    tipoMotor: '',
    matricula: '',
    precio: null as number | null,
  };

  /*
    Este objeto representa el formulario de filtrado.
  */
  filtroFormulario = {
    tipoMotor: '',
    precioMinimo: null as number | null,
  };

  /*
    Variables para controlar alertas y mensajes.
  */
  mostrarExito: boolean = false;
  mostrarError: boolean = false;
  mensajeError: string = '';

  /*
    Esta variable me dice si ya se ha hecho una búsqueda.
    Así solo muestro el mensaje de resultados cuando toque.
  */
  busquedaRealizada: boolean = false;

  /*
    Método para agregar un coche al array principal.
  */
  agregarCoche(): void {
    if (
      this.cocheFormulario.marca.trim() === '' ||
      this.cocheFormulario.modelo.trim() === '' ||
      this.cocheFormulario.cv === null ||
      this.cocheFormulario.cc === null ||
      this.cocheFormulario.tipoMotor.trim() === '' ||
      this.cocheFormulario.matricula.trim() === '' ||
      this.cocheFormulario.precio === null
    ) {
      this.mostrarError = true;
      this.mostrarExito = false;
      this.mensajeError = 'Faltan datos por rellenar. Revisa el formulario.';
      return;
    }

    const matriculaExiste = this.coches.some(
      (coche) => coche.matricula.toLowerCase() === this.cocheFormulario.matricula.toLowerCase(),
    );

    if (matriculaExiste) {
      this.mostrarError = true;
      this.mostrarExito = false;
      this.mensajeError = 'Ya existe un coche con esa matrícula.';
      return;
    }

    const nuevoCoche: Coche = {
      marca: this.cocheFormulario.marca,
      modelo: this.cocheFormulario.modelo,
      cv: this.cocheFormulario.cv,
      cc: this.cocheFormulario.cc,
      tipoMotor: this.cocheFormulario.tipoMotor,
      matricula: this.cocheFormulario.matricula,
      precio: this.cocheFormulario.precio,
      imagen: this.obtenerImagen(this.cocheFormulario.tipoMotor),
    };

    this.coches.push(nuevoCoche);

    this.mostrarExito = true;
    this.mostrarError = false;

    setTimeout(() => {
      this.mostrarExito = false;
    }, 3000);

    this.limpiarFormulario();
  }

  /*
    Este método filtra los coches según el tipo de motor
    y el precio mínimo indicado por el usuario.
  */
  filtrarCoches(): void {
    /*
      Al filtrar, primero limpio la lista visual para que
      no se vea nada hasta pulsar el botón Mostrar.
    */
    this.cochesMostrados = [];

    /*
      Marco que ya se ha hecho una búsqueda.
    */
    this.busquedaRealizada = true;

    this.resultadosFiltro = this.coches.filter((coche) => {
      /*
        Compruebo tipo de motor.
        Si no se elige ninguno, lo doy por válido.
      */
      const cumpleMotor =
        this.filtroFormulario.tipoMotor === '' ||
        coche.tipoMotor === this.filtroFormulario.tipoMotor;

      /*
        Compruebo precio mínimo.
        Si no se escribe nada, lo doy por válido.
      */
      const cumplePrecio =
        this.filtroFormulario.precioMinimo === null ||
        coche.precio >= this.filtroFormulario.precioMinimo;

      /*
        El coche solo entra en resultados si cumple ambas condiciones.
      */
      return cumpleMotor && cumplePrecio;
    });
  }

  /*
    Este método copia los resultados del filtro al array que sí se pinta.
  */
  mostrarResultados(): void {
    this.cochesMostrados = [...this.resultadosFiltro];
  }

  /*
    Devuelvo una imagen según el tipo de motor.
  */
  obtenerImagen(tipoMotor: string): string {
    if (tipoMotor === 'Híbrido') {
      return 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80';
    } else {
      return 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80';
    }
  }

  /*
    Limpio el formulario de agregar coche.
  */
  limpiarFormulario(): void {
    this.cocheFormulario = {
      marca: '',
      modelo: '',
      cv: null,
      cc: null,
      tipoMotor: '',
      matricula: '',
      precio: null,
    };
  }

  /*
    Cierro la alerta de error manualmente.
  */
  cerrarError(): void {
    this.mostrarError = false;
  }
}
