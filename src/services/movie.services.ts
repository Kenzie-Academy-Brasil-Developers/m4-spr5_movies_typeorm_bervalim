import {
  TmovieRead,
  TmovieRequest,
  TmovieResponse,
  TmovieUpdate,
} from "../interfaces/movie.interfaces";
import { TpaginationParams } from "../interfaces/pagination.interface";
import { movieRepo } from "../repositories/movie.repositorie";

export const createMovieService = async (
  bodyRequest: TmovieRequest
): Promise<TmovieResponse> => {
  const newMovie: TmovieResponse = await movieRepo.save(bodyRequest);
  return newMovie;
};

export const readMoviesService = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: TpaginationParams): Promise<any> => {
  const [movies, count] = await movieRepo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

export const deleteMovieService = async (
  movie: TmovieResponse
): Promise<void> => {
  await movieRepo.remove(movie);
};

export const updateMovieService = async (
  movie: TmovieResponse,
  newBodyRequest: TmovieUpdate
) => {
  const updatedMovie = movieRepo.save({ ...movie, ...newBodyRequest });
  return updatedMovie;
};
