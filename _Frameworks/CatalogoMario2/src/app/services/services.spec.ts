import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { JuegosService } from './services';

describe('JuegosService', () => {
  let service: JuegosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JuegosService],
    });

    service = TestBed.inject(JuegosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all games', () => {
    const mockGames = [{
      id: 1,
      titulo: 'Super Mario Bros',
      plataforma: 'Nintendo',
      anio: 1985,
      categoria: 'Principal',
      descripcion: 'Juego clásico',
      imagenUrl: 'https://example.com/mario.png',
    }];

    service.getJuegos().subscribe((games) => {
      expect(games).toEqual(mockGames);
    });

    const req = httpMock.expectOne('https://my-json-server.typicode.com/mario-api/juegos');
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  });
});
