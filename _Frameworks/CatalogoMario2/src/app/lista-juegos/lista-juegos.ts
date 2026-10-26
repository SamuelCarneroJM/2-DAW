import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JuegosService } from '../services/services';
import { Juego } from '../interfaces/interfaces';

@Component({
  selector: 'app-lista-juegos',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="contenedor">
      <h2>Catálogo del Universo Super Mario</h2>

      <div class="panel-info">
        <p><strong>Total de Juegos:</strong> {{ totalJuegos() }}</p>
        <p><strong>Spin-offs:</strong> {{ totalSpinOffs() }}</p>
      </div>

      @if (cargando()) {
        <p class="loader">Cargando juegos desde la API...</p>
      } @else {
        <div class="grid-juegos">
          @for (juego of juegos(); track juego.id) {
            <div class="card-juego">
              <img [src]="juego.imagenUrl" [alt]="juego.titulo" width="100%" />
              <h3>{{ juego.titulo }}</h3>
              <p>{{ juego.plataforma }} ({{ juego.anio }})</p>
              <a [routerLink]="['/juegos', juego.id]" class="btn-detalle">
                Ver Ficha Completa →
              </a>
            </div>
          } @empty {
            <p>No hay juegos disponibles en el catálogo.</p>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .contenedor { max-width: 900px; margin: 0 auto; padding: 1rem; }
    .panel-info { display: flex; gap: 2rem; background: #e6f2ff; padding: 10px; border-radius: 6px; }
    .grid-juegos { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem; }
    .card-juego { border: 1px solid #ccc; padding: 1rem; border-radius: 8px; text-align: center; background: #fff; }
    .btn-detalle { display: inline-block; margin-top: 10px; color: #d00000; font-weight: bold; text-decoration: none; }
    .loader { font-size: 1.2rem; color: #666; }
  `]
})
export class ListaJuegosComponent implements OnInit {
  private juegosService = inject(JuegosService);
  juegos = signal<Juego[]>([]);
  cargando = signal<boolean>(true);
  totalJuegos = computed(() => this.juegos().length);
  totalSpinOffs = computed(() => this.juegos().filter((j) => j.categoria === 'Spin-off').length);

  constructor() {
    effect(() => {
      console.log(`[Efecto Auditoría]: El catálogo actual tiene ${this.totalJuegos()} juegos.`);
    });
  }

  ngOnInit(): void {
    this.juegosService.getJuegos().subscribe({
      next: (datos) => {
        this.juegos.set(datos);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al conectar con la API:', err);
        this.cargando.set(false);
      }
    });
  }
}