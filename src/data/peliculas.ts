export type Pelicula = {
  id: string;
  titulo: string;
  categoria: string;
  duracion: string;
  imagen: string;
  video: string; // 👈 campo agregado
};

export const peliculas: Pelicula[] = [
  {
    id: "1",
    titulo: "Dune: Parte Dos",
    categoria: "Ciencia Ficción",
    duracion: "2h 46min",
    imagen: "https://image.tmdb.org/t/p/w500/8uVKfOJUhmybNsVh089EqLHUYEG.jpg",
    video: "/videos/dune2.mp4"
  },
  {
    id: "2",
    titulo: "Godzilla y Kong: El nuevo imperio",
    categoria: "Acción",
    duracion: "1h 55min",
    imagen: "https://image.tmdb.org/t/p/w500/syDpJqSMM9qi4FjLkWcHtbUAeHd.jpg",
    video: "/videos/godzillakong.mp4"
  },
  {
    id: "3",
    titulo: "Barbie",
    categoria: "Comedia",
    duracion: "1h 54min",
    imagen: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    video: "/videos/barbie.mp4"
  },
  {
    id: "4",
    titulo: "Oppenheimer",
    categoria: "Drama",
    duracion: "3h 0min",
    imagen: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    video: "/videos/oppenheimer.mp4"
  },
  {
    id: "5",
    titulo: "Spider-Man: Cruzando el Multiverso",
    categoria: "Animación",
    duracion: "2h 20min",
    imagen: "https://image.tmdb.org/t/p/w500/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
    video: "/videos/spiderman-multiverso.mp4"
  },
  {
    id: "6",
    titulo: "John Wick 4",
    categoria: "Acción",
    duracion: "2h 49min",
    imagen: "https://image.tmdb.org/t/p/w500/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg",
    video: "/videos/johnwick4.mp4"
  },
  {
    id: "7",
    titulo: "Wonka",
    categoria: "Fantasía",
    duracion: "1h 56min",
    imagen: "https://image.tmdb.org/t/p/w500/rtosxP5sXuoRFPH4sVbMccLIPiV.jpg",
    video: "/videos/wonka.mp4"
  },
  {
    id: "8",
    titulo: "Civil War",
    categoria: "Drama / Acción",
    duracion: "1h 49min",
    imagen: "https://image.tmdb.org/t/p/w500/yBcxCPVYcD3FfzZ2dHQDebPYUu9.jpg",
    video: "/videos/civilwar.mp4"
  }
];
