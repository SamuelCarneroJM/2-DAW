import { Component, inject, signal } from '@angular/core';
import { JuegosService } from './servicios/juegos';
import { JuegoItemComponent } from './componentes/juego-item/juego-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JuegoItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  private readonly juegosService = inject(JuegosService);

  readonly juegos = this.juegosService.juegos;
  readonly totalJuegos = this.juegosService.totalJuegos;

  readonly tituloInput = signal('');
  readonly plataformaInput = signal('');
  readonly anioInput = signal('');
  readonly tipoInput = signal('');
  readonly categoriaInput = signal<'Principal' | 'Spin-off'>('Principal');

  actualizarTitulo(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tituloInput.set(input.value);
  }

  actualizarPlataforma(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.plataformaInput.set(input.value);
  }

  actualizarAnio(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.anioInput.set(input.value);
  }

  actualizarTipo(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tipoInput.set(input.value);
  }

  actualizarCategoria(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.categoriaInput.set(select.value as 'Principal' | 'Spin-off');
  }

  agregarJuego(): void {
    const titulo = this.tituloInput().trim();
    const plataforma = this.plataformaInput().trim();
    const anio = Number(this.anioInput());
    const tipo = this.tipoInput().trim();
    const categoria = this.categoriaInput();

    if (
      titulo === '' ||
      plataforma === '' ||
      !anio ||
      tipo === ''
    ) {
      return;
    }

    this.juegosService.agregarJuego({
      titulo,
      plataforma,
      anio,
      tipo,
      categoria
    });

    this.limpiarFormulario();
  }

  eliminarJuego(id: number): void {
    this.juegosService.eliminarJuego(id);
  }

  private limpiarFormulario(): void {
    this.tituloInput.set('');
    this.plataformaInput.set('');
    this.anioInput.set('');
    this.tipoInput.set('');
    this.categoriaInput.set('Principal');
  }
}
