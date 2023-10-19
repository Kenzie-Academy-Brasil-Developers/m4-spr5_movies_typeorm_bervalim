import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { movieRequestSchema } from "../schemas/movie.schema";
import { createMovieController } from "../controllers/movie.controller";
import { verifyNameExists } from "../middlewares/verifyNameExists.middleware";

export const movieRouter: Router = Router();
movieRouter.post(
  "/",
  validateBody(movieRequestSchema),
  verifyNameExists,
  createMovieController
);
