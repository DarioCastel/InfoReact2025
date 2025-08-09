export interface Pelicula {
  id: number;
  titulo: string;
  categoria: string;
  duracion: number; // en minutos
  imagen: string;
  video?: string;
  descripcion?: string;
}

export const moviesDB: Pelicula[] = [
  {
    id: 1,
    titulo: "El Padrino",
    categoria: "Drama",
    duracion: 175,
    imagen: "https://link-a-imagen-padrino.jpg",
    video: "https://link-a-video-padrino.mp4",
    descripcion: "La saga de una familia mafiosa en Nueva York.",
  },
  {
    id: 2,
    titulo: "Titanic",
    categoria: "Romance",
    duracion: 195,
    imagen: "https://link-a-imagen-titanic.jpg",
    video: "https://link-a-video-titanic.mp4",
    descripcion: "Historia de amor en el famoso naufragio.",
  },
  {
    id: 3,
    titulo: "Matrix",
    categoria: "Ciencia ficción",
    duracion: 136,
    imagen: "https://link-a-imagen-matrix.jpg",
    video: "https://link-a-video-matrix.mp4",
    descripcion: "Un hacker descubre la verdad sobre su realidad.",
  },
];
