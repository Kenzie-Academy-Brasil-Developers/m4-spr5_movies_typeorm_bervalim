import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { TmovieRepo } from "../interfaces/movie.interfaces";

export const movieRepo: TmovieRepo = AppDataSource.getRepository(Movie);
