import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!drafts/**"],
    base: "./src/content/posts",
  }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    background: z.string().optional(),
    images: z.array(z.string()).optional(),
    selected: z.boolean().optional(),
    project: z.boolean().optional(),
  }),
});

export const collections = { posts };
