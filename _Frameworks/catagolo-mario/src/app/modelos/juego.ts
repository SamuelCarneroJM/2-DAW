export interface Juego {
  id: number;
  titulo: string;
  plataforma: string;
  anio: number;
  tipo: string;
  categoria: 'Principal' | 'Spin-off';
}
