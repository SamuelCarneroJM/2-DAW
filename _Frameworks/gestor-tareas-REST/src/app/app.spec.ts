import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { TareasService } from './services/tareas.service';
import { of } from 'rxjs';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        {
          provide: TareasService,
          useValue: {
            getTareas: () => of([]),
            crearTarea: () => of({ userId: 1, id: 1, title: '', completed: false }),
            cambiarEstado: () => of({ userId: 1, id: 1, title: '', completed: false }),
            eliminarTarea: () => of(undefined)
          }
        }
      ]
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Gestor de Tareas REST');
  });
});
