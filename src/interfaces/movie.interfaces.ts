import { z } from "zod";
import {
  movieRequestSchema,
  movieResponseSchema,
} from "../schemas/movie.schema";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";

export type TmovieResponse = z.infer<typeof movieResponseSchema>;
export type TmovieRequest = z.infer<typeof movieRequestSchema>;
export type TmovieUpdate = DeepPartial<Movie>;
export type TmovieRead = Array<Movie>;
export type TmovieRepo = Repository<Movie>;
