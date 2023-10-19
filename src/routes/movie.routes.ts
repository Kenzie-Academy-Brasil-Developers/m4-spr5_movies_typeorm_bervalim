import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { movieRequestSchema } from "../schemas/movie.schema";
import {
  createMovieController,
  deleteMovieController,
  readMoviesController,
} from "../controllers/movie.controller";
import { verifyNameExists } from "../middlewares/verifyNameExists.middleware";
import { verifyId } from "../middlewares/verivyId.middleware";

export const movieRouter: Router = Router();
movieRouter.post(
  "/",
  validateBody(movieRequestSchema),
  verifyNameExists,
  createMovieController
);
movieRouter.get("/", readMoviesController);
movieRouter.use("/:id", verifyId);
movieRouter.delete("/:id", deleteMovieController);
