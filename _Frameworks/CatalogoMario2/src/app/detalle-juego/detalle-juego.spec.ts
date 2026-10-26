import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { JuegosService } from '../services/services';
import { DetalleJuegoComponent } from './detalle-juego';

describe('DetalleJuegoComponent', () => {
  let component: DetalleJuegoComponent;
  let fixture: ComponentFixture<DetalleJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleJuegoComponent],
      providers: [
        provideRouter([]),
        {
          provide: JuegosService,
          useValue: {
            getJuegoPorId: () => of({
              id: 1,
              titulo: 'Super Mario Bros',
              plataforma: 'Nintendo',
              anio: 1985,
              categoria: 'Principal',
              descripcion: 'Juego clásico',
              imagenUrl: 'https://example.com/mario.png',
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleJuegoComponent);
    fixture.componentRef.setInput('id', '1');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
