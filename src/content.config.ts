import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const faqs = defineCollection({
  loader: file("src/data/faqs.json"),
  schema: z.object({
    id: z.number(),
    question: z.string(),
    answer: z.string(),
  }),
});

export const collections = { faqs };
