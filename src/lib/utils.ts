// src/lib/random-color.ts
export const PALETTE = [
  "#ef483c",
  "#ffbd17",
  "#1973c0",
  "#1da849",
  "#f9b6b1",
  "#e8c5ac",
] as const;

type PaletteColor = (typeof PALETTE)[number];

export function colorForIndex(index: number): PaletteColor {
  return PALETTE[index % PALETTE.length]!;
}
