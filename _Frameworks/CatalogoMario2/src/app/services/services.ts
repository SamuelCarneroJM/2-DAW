import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class JuegosService {
  private http = inject(HttpClient);
  private apiUrl = 'https://my-json-server.typicode.com/mario-api/juegos';

  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.apiUrl);
  }

  getJuegoPorId(id: number): Observable<Juego> {
    return this.http.get<Juego>(`${this.apiUrl}/${id}`);
  }
}