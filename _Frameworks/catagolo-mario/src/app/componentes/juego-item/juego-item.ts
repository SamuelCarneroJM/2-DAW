import { Component, input, output } from '@angular/core';
import { Juego } from '../../modelos/juego';

@Component({
  selector: 'app-juego-item',
  standalone: true,
  imports: [],
  template: `
    <article class="tarjeta-juego">
      <div class="informacion-juego">
        <div class="cabecera-tarjeta">
          <h2>{{ juego().titulo }}</h2>
          <span class="categoria">
            {{ juego().categoria }}
          </span>
        </div>

        <p class="tipo">{{ juego().tipo }}</p>

        <div class="detalles">
          <span>
            <strong>Plataforma:</strong>
            {{ juego().plataforma }}
          </span>

          <span>
            <strong>Año:</strong>
            {{ juego().anio }}
          </span>
        </div>
      </div>

      <button
        class="boton-eliminar"
        type="button"
        (click)="eliminar()"
      >
        Eliminar
      </button>
    </article>
  `,
  styles: [`
    .tarjeta-juego {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 20px;
      margin-bottom: 14px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(15, 23, 42, 0.06);
    }

    .informacion-juego {
      flex: 1;
    }

    .cabecera-tarjeta {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    h2 {
      margin: 0;
      color: #1e293b;
      font-size: 1.2rem;
    }

    .categoria {
      padding: 4px 9px;
      border-radius: 999px;
      background-color: #fee2e2;
      color: #b91c1c;
      font-size: 0.8rem;
      font-weight: 700;
    }

    .tipo {
      margin: 8px 0;
      color: #dc2626;
      font-weight: 600;
    }

    .detalles {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
      color: #64748b;
      font-size: 0.9rem;
    }

    .detalles strong {
      color: #334155;
    }

    .boton-eliminar {
      flex-shrink: 0;
      padding: 9px 14px;
      border: 0;
      border-radius: 8px;
      background-color: #ef4444;
      color: white;
      cursor: pointer;
      font-weight: 600;
    }

    .boton-eliminar:hover {
      background-color: #dc2626;
    }

    @media (max-width: 600px) {
      .tarjeta-juego {
        align-items: flex-start;
        flex-direction: column;
      }

      .boton-eliminar {
        width: 100%;
      }
    }
  `]
})
export class JuegoItemComponent {
  juego = input.required<Juego>();

  onEliminar = output<number>();

  eliminar(): void {
    this.onEliminar.emit(this.juego().id);
  }
}
