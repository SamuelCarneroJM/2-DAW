import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { JuegosService } from '../services/services';
import { ListaJuegosComponent } from './lista-juegos';

describe('ListaJuegosComponent', () => {
  let component: ListaJuegosComponent;
  let fixture: ComponentFixture<ListaJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaJuegosComponent],
      providers: [
        provideRouter([]),
        {
          provide: JuegosService,
          useValue: {
            getJuegos: () => of([
              {
                id: 1,
                titulo: 'Super Mario Bros',
                plataforma: 'Nintendo',
                anio: 1985,
                categoria: 'Principal',
                descripcion: 'Juego clásico',
                imagenUrl: 'https://example.com/mario.png',
              },
            ]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaJuegosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
