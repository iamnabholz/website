// src/lib/random-color.ts
const PALETTE = [
  "#fcc010",
  "#cd2e55",
  "#13955f",
  "#1eb8d1",
  "#088ea7",
] as const;
export type PaletteColor = (typeof PALETTE)[number];

export function pickDifferent<T>(pool: readonly T[], previous?: T): T {
  if (pool.length <= 1) return pool[0];
  let next = previous;
  while (next === previous) {
    next = pool[Math.floor(Math.random() * pool.length)];
  }
  return next as T;
}

export function pickRandomColor(previous?: PaletteColor): PaletteColor {
  return pickDifferent(PALETTE, previous);
}
