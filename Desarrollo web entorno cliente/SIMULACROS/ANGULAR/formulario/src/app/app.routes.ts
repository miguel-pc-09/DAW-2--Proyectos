import { Routes } from '@angular/router';
import { Formulario } from './components/formulario/formulario';
import { Lista } from './components/lista/lista';
import { Detalle } from './components/detalle/detalle';

export const routes: Routes = [
  { path: 'formulario', component: Formulario },
  { path: 'lista', component: Lista },
  { path: 'detalle/:id', component: Detalle },
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
];
