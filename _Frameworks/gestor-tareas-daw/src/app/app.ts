import { Component, inject, signal } from '@angular/core';
import { TareasService } from './servicios/tareas';
import { TareaItem } from './componentes/tarea-item/tarea-item';

@Component({
  selector: 'app-root',
  imports: [TareaItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Inyectamos el servicio centralizado.
  private tareasService = inject(TareasService);

  // Conectamos la lista del servicio con la vista.
  listaTareas = this.tareasService.tareas;

  // Signal local para el contenido del input.
  nuevaTareaInput = signal('');

  // Actualiza el contenido del input.
  actualizarTexto(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.nuevaTareaInput.set(valor);
  }

  // Añade una tarea utilizando el servicio.
  agregar(): void {
    this.tareasService.agregarTarea(this.nuevaTareaInput());
    this.nuevaTareaInput.set('');
  }

  // Elimina una tarea utilizando su índice.
  borrar(index: number): void {
    this.tareasService.eliminarTarea(index);
  }
}
