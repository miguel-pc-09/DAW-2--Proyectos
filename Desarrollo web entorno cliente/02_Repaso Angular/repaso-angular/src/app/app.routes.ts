// Importo Routes para definir las rutas
import { Routes } from '@angular/router';

// Importo el componente del tema 01
import { QueEsAngular } from './01_que_es_angular/que-es-angular/que-es-angular';

// Importo el componente del tema 02
import { Estructura } from './02_estructura/estructura/estructura';

// Importo el componente del tema 03
import { Binding } from './03_binding/binding/binding';

// Importo el componente del tema 04
import { Directivas } from './04_directivas/directivas/directivas';

// Importo el componente del tema 05
import { Eventos } from './05_eventos/eventos/eventos';

// Importo el componente del tema 06
import { Padre } from './06_input_output/padre/padre';

// Importo el componente del tema 07
import { Servicios } from './07_servicios/servicios/servicios';

// Importo el componente del tema 08
import { Rutas } from './08_rutas/rutas/rutas';

// Importo el componente del tema 09
import { Pipes } from './09_pipes/pipes/pipes';

// Importo el componente del tema 10
import { Fetch } from './10_fetch/fetch/fetch';

// Defino las rutas de la aplicación
export const routes: Routes = [
  // Ruta del tema 01
  { path: '01-que-es-angular', component: QueEsAngular },

  // Ruta del tema 02
  { path: '02-estructura', component: Estructura },

  // Ruta del tema 03
  { path: '03-binding', component: Binding },

  // Ruta por defecto
  { path: '', redirectTo: '01-que-es-angular', pathMatch: 'full' },

  // Ruta del tema 04
  { path: '04-directivas', component: Directivas },

  // Ruta del tema 05
  { path: '05-eventos', component: Eventos },

  // Ruta del tema 06
  { path: '06-input-output', component: Padre },

  // Ruta del tema 07
  { path: '07-servicios', component: Servicios },

  // Ruta del tema 08
  { path: '08-rutas', component: Rutas },

  // Ruta del tema 09
  { path: '09-pipes', component: Pipes },

  // Ruta del tema 10
  { path: '10-fetch', component: Fetch },
];
