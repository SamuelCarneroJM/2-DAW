import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  crearTarea(nuevaTarea: Omit<Tarea, 'id'>): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, nuevaTarea);
  }

  cambiarEstado(id: number, completed: boolean): Observable<Tarea> {
    return this.http.patch<Tarea>(`${this.apiUrl}/${id}`, { completed });
  }

  eliminarTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
