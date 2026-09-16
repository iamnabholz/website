import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    background: z.string().optional(),
    images: z.array(z.string()).optional(),
    order: z.number().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { posts };
