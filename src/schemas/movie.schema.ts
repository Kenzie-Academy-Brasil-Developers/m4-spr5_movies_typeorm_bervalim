import { z } from "zod";

export const movieResponseSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50).min(3),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().positive().int(),
});

export const movieRequestSchema = movieResponseSchema.omit({ id: true });
export const movieUpdateSchema = movieRequestSchema.partial();
