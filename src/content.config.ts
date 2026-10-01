import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!drafts/**"],
    base: "./src/content/notes",
  }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    image: z.string(),
    selected: z.boolean().optional(),
    project: z.string().optional(),
  }),
});

export const collections = { notes };
