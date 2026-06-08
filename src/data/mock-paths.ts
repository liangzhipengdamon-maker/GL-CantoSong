import type { DailyChallenge, KnowledgeNode } from "@/lib/types";

export const mockPath: KnowledgeNode[] = [
  {
    id: "mark-chorus-map",
    songId: "fuji-mountain",
    order: 1,
    type: "listen",
    title: "Mark the chorus map",
    copy: "Tap the three moments where the melody changes emotional gear.",
    unlocks: "You know where the chorus starts to turn.",
  },
  {
    id: "hold-si6",
    songId: "fuji-mountain",
    order: 2,
    type: "tone",
    title: "Hold si6 without drifting",
    copy: "Practice the low tone on the phrase “誰都只得那雙手”.",
    unlocks: "The hook stops sounding Mandarin-shaped.",
  },
  {
    id: "close-finals",
    songId: "fuji-mountain",
    order: 3,
    type: "mouth-shape",
    title: "Close final consonants",
    copy: "Keep endings audible while staying singable and relaxed.",
    unlocks: "Cantonese texture becomes audible.",
  },
  {
    id: "one-long-line",
    songId: "fuji-mountain",
    order: 4,
    type: "breath",
    title: "Clear one long line",
    copy: "Place one silent breath before the line becomes unstable.",
    unlocks: "The chorus can be sung without gasping.",
  },
  {
    id: "sing-chorus",
    songId: "fuji-mountain",
    order: 5,
    type: "boss-gate",
    title: "Sing the chorus",
    copy: "One full chorus attempt with tone, breath, and emotion checks.",
    unlocks: "A first Boss Song clear attempt.",
  },
];

export const dailyChallenges: DailyChallenge[] = [
  {
    id: "daily-hold-si6",
    songId: "fuji-mountain",
    nodeId: "hold-si6",
    prompt: "Sing “誰都只得那雙手” slowly and keep the final low tone grounded.",
    target: "Tone shape stays low and steady through the phrase ending.",
  },
];
