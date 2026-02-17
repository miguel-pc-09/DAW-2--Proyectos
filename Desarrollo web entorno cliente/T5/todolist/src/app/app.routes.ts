import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Add } from './components/add/add';
import { Search } from './components/search/search';
import { List } from './components/list/list';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'add', component: Add},
    {path: 'search', component: Search},
    {path: 'list', component: List},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
];
