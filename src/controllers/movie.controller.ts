import { Request, Response } from "express";
import { TmovieRead, TmovieResponse } from "../interfaces/movie.interfaces";
import {
  createMovieService,
  deleteMovieService,
  readMoviesService,
} from "../services/movie.services";

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newMovie: TmovieResponse = await createMovieService(req.body);
  return res.status(201).json(newMovie);
};

export const readMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movies: TmovieRead = await readMoviesService();
  return res.status(200).json(movies);
};

export const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteMovieService(res.locals.findMovie);
  return res.status(204).json();
};