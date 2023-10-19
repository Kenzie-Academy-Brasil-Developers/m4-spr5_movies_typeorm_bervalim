import {
  TmovieRead,
  TmovieRequest,
  TmovieResponse,
} from "../interfaces/movie.interfaces";
import { movieRepo } from "../repositories/movie.repositorie";

export const createMovieService = async (
  bodyRequest: TmovieRequest
): Promise<TmovieResponse> => {
  const newMovie: TmovieResponse = await movieRepo.save(bodyRequest);
  return newMovie;
};

export const readMoviesService = async (): Promise<TmovieRead> => {
  const movies: TmovieRead = await movieRepo.find();
  return movies;
};

export const deleteMovieService = async (
  movie: TmovieResponse
): Promise<void> => {
  await movieRepo.remove(movie);
};
