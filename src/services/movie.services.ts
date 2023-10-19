import { TmovieRequest, TmovieResponse } from "../interfaces/movie.interfaces";
import { movieRepo } from "../repositories/movie.repositorie";

export const createMovieService = async (
  bodyRequest: TmovieRequest
): Promise<TmovieResponse> => {
  const newMovie: TmovieResponse = await movieRepo.save(bodyRequest);
  return newMovie;
};
