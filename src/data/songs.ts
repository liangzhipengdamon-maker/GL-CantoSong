import type { BossSong } from "@/lib/types";

export const bossSongs: BossSong[] = [
  {
    id: "fuji-mountain",
    title: "《富士山下》",
    artist: "陳奕迅",
    language: "Cantonese",
    goal: "Sing one clean chorus with correct Cantonese shape, breath timing, and emotional contour.",
    chorusLine: "誰都只得那雙手",
    readinessBase: 18,
  },
];

export const activeBossSong = bossSongs[0];
