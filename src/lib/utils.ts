// src/lib/random-color.ts
const PALETTE = [
  "#fcc010",
  "#f4971b",
  "#e9473a",
  "#cd2e55",
  "#f6bcd0",
  "#dedcdd",
  "#9dbfae",
  "#8dc04e",
  "#13955f",
  "#627e8b",
  "#4153a1",
  "#438ecc",
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
