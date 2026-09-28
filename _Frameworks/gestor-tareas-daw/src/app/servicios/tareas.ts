import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  // Signal privada que almacena la lista global de tareas.
  private _tareas = signal<string[]>([
    'Aprender componentes standalone en Angular',
    'Practicar la comunicación entre componentes con input y output',
    'Dominar la inyección de dependencias con inject()'
  ]);

  // Lista pública de solo lectura para que AppComponent la muestre.
  readonly tareas = this._tareas.asReadonly();

  // Añade una nueva tarea a la lista.
  agregarTarea(nuevaTarea: string): void {
    if (nuevaTarea.trim() === '') {
      return;
    }

    this._tareas.update((listaActual) => [
      ...listaActual,
      nuevaTarea
    ]);
  }

  // Elimina una tarea utilizando su posición dentro del array.
  eliminarTarea(index: number): void {
    this._tareas.update((listaActual) =>
      listaActual.filter((_, i) => i !== index)
    );
  }
}
