import { Injectable, computed, effect, signal } from '@angular/core';
import { Juego } from '../modelos/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  private readonly claveLocalStorage = 'catalogo-juegos-mario';

  private readonly juegosIniciales: Juego[] = [
    {
      id: 1,
      titulo: 'Super Mario Bros.',
      plataforma: 'NES',
      anio: 1985,
      tipo: 'Plataformas',
      categoria: 'Principal'
    },
    {
      id: 2,
      titulo: 'Super Mario World',
      plataforma: 'Super Nintendo',
      anio: 1990,
      tipo: 'Plataformas',
      categoria: 'Principal'
    },
    {
      id: 3,
      titulo: 'Mario Kart 8 Deluxe',
      plataforma: 'Nintendo Switch',
      anio: 2017,
      tipo: 'Carreras',
      categoria: 'Spin-off'
    },
    {
      id: 4,
      titulo: 'Mario Party Superstars',
      plataforma: 'Nintendo Switch',
      anio: 2021,
      tipo: 'Fiesta',
      categoria: 'Spin-off'
    },
    {
      id: 5,
      titulo: 'Super Mario Odyssey',
      plataforma: 'Nintendo Switch',
      anio: 2017,
      tipo: 'Plataformas',
      categoria: 'Principal'
    },
    {
      id: 6,
      titulo: 'Mario Tennis Aces',
      plataforma: 'Nintendo Switch',
      anio: 2018,
      tipo: 'Deportes',
      categoria: 'Spin-off'
    }
  ];

  private readonly _juegos = signal<Juego[]>(this.cargarJuegos());

  readonly juegos = this._juegos.asReadonly();

  readonly totalJuegos = computed(() => this._juegos().length);

  constructor() {
    effect(() => {
      const juegosActuales = this._juegos();

      localStorage.setItem(
        this.claveLocalStorage,
        JSON.stringify(juegosActuales)
      );
    });
  }

  agregarJuego(nuevoJuego: Omit<Juego, 'id'>): void {
    const nuevoId = this.obtenerSiguienteId();

    this._juegos.update(listaActual => [
      ...listaActual,
      {
        id: nuevoId,
        ...nuevoJuego
      }
    ]);
  }

  eliminarJuego(id: number): void {
    this._juegos.update(listaActual =>
      listaActual.filter(juego => juego.id !== id)
    );
  }

  private cargarJuegos(): Juego[] {
    const juegosGuardados = localStorage.getItem(this.claveLocalStorage);

    if (!juegosGuardados) {
      return this.juegosIniciales;
    }

    try {
      return JSON.parse(juegosGuardados) as Juego[];
    } catch {
      return this.juegosIniciales;
    }
  }

  private obtenerSiguienteId(): number {
    const listaActual = this._juegos();

    if (listaActual.length === 0) {
      return 1;
    }

    return Math.max(...listaActual.map(juego => juego.id)) + 1;
  }
}
