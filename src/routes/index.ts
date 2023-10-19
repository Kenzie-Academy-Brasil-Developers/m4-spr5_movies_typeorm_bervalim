import { Router } from "express";
import { movieRouter } from "./movie.routes";

export const allRoutes: Router = Router();

allRoutes.use("/movies", movieRouter);
