import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMovies, getMovieById, createMovie } from "../../MOCKS/movies/service";
import type { Pelicula } from "../../MOCKS/movies/db";

export function useMovies() {
  return useQuery<Pelicula[], Error>({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
}

export function useMovie(id: number) {
  return useQuery<Pelicula, Error>({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
    enabled: !!id,
  });
}

export function useCreateMovie() {
  const queryClient = useQueryClient();

  return useMutation<Pelicula, Error, Omit<Pelicula, "id">>({
    mutationFn: createMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });
}
