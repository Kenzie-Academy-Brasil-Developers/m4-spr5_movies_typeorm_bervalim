import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories/movie.repositorie";
import AppError from "../errors/AppError.error";

export const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.body.name) {
    return next();
  }
  const findMovieName = await movieRepo.findOneBy({ name: req.body.name });

  if (findMovieName) {
    throw new AppError("Movie already exists", 409);
  }

  return next();
};
