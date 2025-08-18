import { moviesDB } from "./db";
import type { Pelicula } from './db';

export function getMovies(): Promise<Pelicula[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...moviesDB]), 500);
  });
}

export function getMovieById(id: number): Promise<Pelicula> {
  return new Promise((resolve, reject) => {
    const movie = moviesDB.find((m) => m.id === id);
    setTimeout(() => {
      if (movie) resolve(movie);
      else reject(new Error("Película no encontrada"));
    }, 500);
  });
}

export function createMovie(data: Omit<Pelicula, "id">): Promise<Pelicula> {
  return new Promise((resolve) => {
    const id = moviesDB.length + 1;
    const newMovie = { id, ...data };
    moviesDB.push(newMovie);
    setTimeout(() => resolve(newMovie), 500);
  });
}
