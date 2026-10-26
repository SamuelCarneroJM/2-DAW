import { Component, OnInit, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { JuegosService } from '../services/services';
import { Juego } from '../interfaces/interfaces';

@Component({
  selector: 'app-detalle-juego',
  standalone: true,
  template: `
    <div class="contenedor-detalle">
      @if (cargando()) {
        <p>Obteniendo detalles del juego #{{ id() }}...</p>
      } @else if (juego()) {
        <div class="ficha">
          <h2>{{ juego()?.titulo }}</h2>
          <p><strong>ID de recurso:</strong> #{{ juego()?.id }}</p>
          <p><strong>Plataforma:</strong> {{ juego()?.plataforma }}</p>
          <p><strong>Año de lanzamiento:</strong> {{ juego()?.anio }}</p>
          <p><strong>Categoría:</strong> {{ juego()?.categoria }}</p>
          <p class="descripcion">{{ juego()?.descripcion }}</p>
          <button (click)="volverAlCatalogo()" class="btn-volver">
            ← Volver al Catálogo
          </button>
        </div>
      } @else {
        <p>No se pudo encontrar el videojuego solicitado.</p>
        <button (click)="volverAlCatalogo()">Volver</button>
      }
    </div>
  `,
  styles: [`
    .contenedor-detalle { max-width: 600px; margin: 2rem auto; padding: 1rem; }
    .ficha { border: 2px solid #e60012; border-radius: 10px; padding: 1.5rem; background: #fff5f5; }
    .descripcion { background: #fff; padding: 10px; border-radius: 4px; border-left: 4px solid #e60012; }
    .btn-volver { background: #e60012; color: white; border: none; padding: 10px 18px; border-radius: 5px; cursor: pointer; font-weight: bold; margin-top: 1rem; }
  `]
})
export class DetalleJuegoComponent implements OnInit {
  private juegosService = inject(JuegosService);
  private router = inject(Router);

  id = input.required<string>();
  juego = signal<Juego | null>(null);
  cargando = signal<boolean>(true);

  ngOnInit(): void {
    const juegoId = Number(this.id());
    this.juegosService.getJuegoPorId(juegoId).subscribe({
      next: (datos) => {
        this.juego.set(datos);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al cargar la ficha:', err);
        this.cargando.set(false);
      }
    });
  }

  volverAlCatalogo(): void {
    this.router.navigate(['/juegos']);
  }
}