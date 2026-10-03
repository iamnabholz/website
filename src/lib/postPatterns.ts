import { getCollection } from "astro:content";

export const POST_PATTERNS = [
  "pixels",
  "diagonal",
  "chevrons",
  "crosses",
  "tetrominoes",
] as const;

export type PostPattern = (typeof POST_PATTERNS)[number];

export async function getPatternedPosts() {
  const posts = (await getCollection("notes")).sort((a, b) => {
    const dateA = a.data.date?.valueOf() ?? 0;
    const dateB = b.data.date?.valueOf() ?? 0;

    return dateB - dateA || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  });

  return posts.map((entry, index) => ({
    ...entry,
    pattern: POST_PATTERNS[index % POST_PATTERNS.length]!,
  }));
}
