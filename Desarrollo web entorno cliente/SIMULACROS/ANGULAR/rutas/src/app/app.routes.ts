import { Routes } from '@angular/router';
import { Calculadora } from './components/calculadora/calculadora';
import { Listado } from './components/listado/listado';

export const routes: Routes = [
    {path: 'calculadora', component: Calculadora},
    {path: 'listado', component: Listado},
    {path: '', redirectTo:'calculadora', pathMatch:'full'},
];
