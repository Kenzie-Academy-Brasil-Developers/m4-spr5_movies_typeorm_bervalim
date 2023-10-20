import { TmovieRead } from "./movie.interfaces";

export type TpaginationResponse = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TmovieRead;
};

export type TpaginationParams = {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
};
