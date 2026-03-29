import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Add } from './components/add/add';
import { Search } from './components/search/search';
import { List } from './components/list/list';
import { Prioridades } from './components/prioridades/prioridades';
import { Detail } from './components/detail/detail';
import { PostFetch } from './components/post-fetch/post-fetch';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'add', component: Add },
  { path: 'search', component: Search },
  { path: 'fetch', component: PostFetch },
  { path: 'priority/:id', component: Prioridades },
  { path: 'detail/:id', component: Detail },
  { path: 'list', component: List },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
