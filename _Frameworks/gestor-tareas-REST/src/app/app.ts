import { Component, OnInit, inject, signal, computed, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';
import { Tarea } from './interfaces/tarea.interface';
import { ItemTarea } from './components/item-tarea/item-tarea';

const titulosIniciales = [
  'Estudiar para el examen',
  'Hacer la compra',
  'Echar gasolina',
  'Llamar a un amigo',
  'Preparar la comida',
  'Ordenar la habitación',
  'Pasear al perro',
  'Leer un rato'
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ItemTarea],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private tareasService = inject(TareasService);

  tareas = signal<Tarea[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);
  nuevoTitulo = signal<string>('');

  totalTareas = computed(() => this.tareas().length);
  completadas = computed(() => this.tareas().filter(t => t.completed).length);
  porcentaje = computed(() => {
    if (this.totalTareas() === 0) return 0;
    return Math.round((this.completadas() / this.totalTareas()) * 100);
  });

  constructor() {
    effect(() => {
      console.log(`[Efecto Automático]: Estado de tareas actualizado. Total actual: ${this.totalTareas()}`);
      localStorage.setItem('tareas_backup', JSON.stringify(this.tareas()));
    });
  }

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.cargando.set(true);
    this.error.set(null);
    this.tareasService.getTareas().subscribe({
      next: (data) => {
        this.tareas.set(
          data.slice(0, titulosIniciales.length).map((tarea, index) => ({
            ...tarea,
            title: titulosIniciales[index]
          }))
        );
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudo conectar con el servidor.');
        this.cargando.set(false);
      }
    });
  }

  agregarTarea(): void {
    const titulo = this.nuevoTitulo().trim();
    if (!titulo) return;

    const nuevaTarea: Omit<Tarea, 'id'> = {
      userId: 1,
      title: titulo,
      completed: false
    };

    this.error.set(null);
    this.tareasService.crearTarea(nuevaTarea).subscribe({
      next: (tareaCreada) => {
        const tareaConId = { ...tareaCreada, id: Date.now() };
        this.tareas.update(lista => [tareaConId, ...lista]);
        this.nuevoTitulo.set('');
      },
      error: () => this.error.set('No se pudo crear la tarea.')
    });
  }

  toggleTarea(id: number): void {
    const tareaActual = this.tareas().find(t => t.id === id);
    if (!tareaActual) return;

    this.error.set(null);
    this.tareasService.cambiarEstado(id, !tareaActual.completed).subscribe({
      next: () => {
        this.tareas.update(lista =>
          lista.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
        );
      },
      error: () => this.error.set('No se pudo actualizar la tarea.')
    });
  }

  eliminarTarea(id: number): void {
    this.error.set(null);
    this.tareasService.eliminarTarea(id).subscribe({
      next: () => {
        this.tareas.update(lista => lista.filter(t => t.id !== id));
      },
      error: () => this.error.set('No se pudo eliminar la tarea.')
    });
  }
}