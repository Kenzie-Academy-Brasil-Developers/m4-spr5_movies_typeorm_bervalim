import { Request, Response } from "express";
import { TmovieResponse } from "../interfaces/movie.interfaces";
import { createMovieService } from "../services/movie.services";

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newMovie: TmovieResponse = await createMovieService(req.body);
  return res.status(201).json(newMovie);
};
