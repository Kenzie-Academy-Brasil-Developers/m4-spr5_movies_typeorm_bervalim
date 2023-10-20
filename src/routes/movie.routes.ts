import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { movieRequestSchema, movieUpdateSchema } from "../schemas/movie.schema";
import {
  createMovieController,
  deleteMovieController,
  readMoviesController,
  updateMovieController,
} from "../controllers/movie.controller";
import { verifyNameExists } from "../middlewares/verifyNameExists.middleware";
import { verifyId } from "../middlewares/verivyId.middleware";
import { pagination } from "../middlewares/pagination.middleware";

export const movieRouter: Router = Router();
movieRouter.post(
  "/",
  validateBody(movieRequestSchema),
  verifyNameExists,
  createMovieController
);
movieRouter.get("/", pagination, readMoviesController);
movieRouter.use("/:id", verifyId);
movieRouter.delete("/:id", deleteMovieController);
movieRouter.patch(
  "/:id",
  validateBody(movieUpdateSchema),
  verifyNameExists,
  updateMovieController
);
