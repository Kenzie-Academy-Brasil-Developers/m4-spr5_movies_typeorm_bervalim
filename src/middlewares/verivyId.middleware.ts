import { NextFunction, Request, Response } from "express";
import { TmovieResponse } from "../interfaces/movie.interfaces";
import { movieRepo } from "../repositories/movie.repositorie";
import AppError from "../errors/AppError.error";

export const verifyId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const findMovie: TmovieResponse | null = await movieRepo.findOneBy({
    id: Number(req.params.id),
  });

  if (!findMovie) {
    throw new AppError("Movie not found.", 404);
  }

  res.locals = { ...res.locals, findMovie };

  return next();
};
