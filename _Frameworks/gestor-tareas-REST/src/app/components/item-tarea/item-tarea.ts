import { Component, input, output } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-item-tarea',
  standalone: true,
  template: `
    <div class="item-card" [class.completada]="tarea().completed">
      <span>{{ tarea().title }}</span>
      <div class="acciones">
        <button type="button" (click)="onToggle.emit(tarea().id)">
          {{ tarea().completed ? 'Desmarcar' : 'Completar' }}
        </button>
        <button
          type="button"
          class="btn-borrar"
          (click)="onDelete.emit(tarea().id)"
        >
          Eliminar
        </button>
      </div>
    </div>
  `,
  styles: `
    .item-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      padding: 8px;
      margin-bottom: 6px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .completada span {
      color: gray;
      text-decoration: line-through;
    }

    .acciones {
      display: flex;
      gap: 8px;
    }

    .btn-borrar {
      background-color: #ff4d4d;
    }
  `
})
export class ItemTarea {
  tarea = input.required<Tarea>();
  onToggle = output<number>();
  onDelete = output<number>();
}
