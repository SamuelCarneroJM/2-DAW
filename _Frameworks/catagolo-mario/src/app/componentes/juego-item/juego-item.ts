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
    gap: 15px;
    padding: 15px;
    margin-bottom: 10px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  h2 {
    margin: 0 0 8px;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #555;
  }

  .detalles {
    display: flex;
    gap: 15px;
    color: #666;
  }

  .categoria {
    color: #d62828;
    font-weight: bold;
  }

  .boton-eliminar {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    background-color: #dc3545;
    color: white;
    cursor: pointer;
  }

  .boton-eliminar:hover {
    background-color: #a71d2a;
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
