import { Routes } from '@angular/router';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos';
import { DetalleJuegoComponent } from './detalle-juego/detalle-juego';

export const routes: Routes = [
  { path: '', redirectTo: 'juegos', pathMatch: 'full' },
  { path: 'juegos', component: ListaJuegosComponent },
  { path: 'juegos/:id', component: DetalleJuegoComponent },
  { path: '**', redirectTo: 'juegos' }
];