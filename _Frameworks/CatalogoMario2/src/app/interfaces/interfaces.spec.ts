import { Juego } from './interfaces';

describe('Juego interface', () => {
  it('should allow a valid Mario game model', () => {
    const juego: Juego = {
      id: 1,
      titulo: 'Super Mario Bros',
      plataforma: 'Nintendo',
      anio: 1985,
      categoria: 'Principal',
      descripcion: 'Juego clásico de plataformas.',
      imagenUrl: 'https://example.com/mario.png',
    };

    expect(juego.titulo).toBe('Super Mario Bros');
    expect(juego.categoria).toBe('Principal');
  });
});
