import { dailyChallenges, mockPath } from "@/data/mock-paths";
import { songDNA } from "@/data/song-dna";
import type { DailyChallenge, FeedbackSignal, KnowledgeNode, MockAIAnalysis, SongId } from "@/lib/types";

export function analyzeBossSong(songId: SongId): MockAIAnalysis {
  const path = generateBossPath(songId);

  return {
    songId,
    summary: "Mock analysis: this Boss Segment is won by clearing 6 Cantonese rap lines, then running the full 01:05-01:17 segment with precise finals, tones, rhythm, and HK bite.",
    dna: songDNA.filter((item) => item.songId === songId),
    path,
  };
}

export function generateBossPath(songId: SongId): KnowledgeNode[] {
  return mockPath.filter((node) => node.songId === songId).sort((a, b) => a.day - b.day);
}

export function getDailyChallenge(songId: SongId, day: number): DailyChallenge {
  const challenge = dailyChallenges.find((item) => item.songId === songId && item.day === day);

  if (!challenge) {
    throw new Error(`Missing daily challenge for ${songId} day ${day}`);
  }

  return challenge;
}

export function getActiveNode(path: KnowledgeNode[], clearedCount: number): KnowledgeNode {
  return path[Math.min(clearedCount, path.length - 1)];
}

export function calculateReadiness(base: number, clearedCount: number): number {
  return Math.min(100, base + clearedCount * 5);
}

export function calculateBossDifficulty(clearedCount: number, path: KnowledgeNode[] = generateBossPath("gunfire-segment")): number {
  const clearedNodes = path.slice(0, clearedCount);
  const reduction = clearedNodes.reduce((total, node) => total + node.difficultyReduction, 0);

  return Math.max(0, 100 - reduction);
}

export function simulateChallengeFeedback(seed: number): FeedbackSignal[] {
  const feedbackSets: FeedbackSignal[][] = [
    [
      { label: "入声收尾: clean", state: "good" },
      { label: "节奏卡点: on pocket", state: "good" },
      { label: "港味气场: controlled", state: "good" },
    ],
    [
      { label: "入声收尾: close", state: "good" },
      { label: "ngo5 鼻音: dropped", state: "needs-work" },
      { label: "节奏卡点: clean", state: "good" },
    ],
    [
      { label: "低声调: grounded", state: "good" },
      { label: "gw / cyun / coeng: clear", state: "good" },
      { label: "一句一口气: rushed", state: "needs-work" },
    ],
  ];

  return feedbackSets[seed % feedbackSets.length];
}

export const waitingFeedback: FeedbackSignal[] = [
  { label: "入声收尾: waiting", state: "waiting" },
  { label: "节奏卡点: waiting", state: "waiting" },
  { label: "港味气场: waiting", state: "waiting" },
];
