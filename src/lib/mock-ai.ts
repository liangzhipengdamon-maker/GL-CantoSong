import { dailyChallenges, mockPath } from "@/data/mock-paths";
import { songDNA } from "@/data/song-dna";
import type { DailyChallenge, FeedbackSignal, KnowledgeNode, MockAIAnalysis, SongId } from "@/lib/types";

export function analyzeBossSong(songId: SongId): MockAIAnalysis {
  const path = generateBossPath(songId);

  return {
    songId,
    summary: "Mock analysis: this Boss Song is won by a 14-day path through Cantonese tone, diction, breath, lyric meaning, and restrained ballad expression.",
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

export function calculateBossDifficulty(clearedCount: number, path: KnowledgeNode[] = generateBossPath("fuji-mountain")): number {
  const clearedNodes = path.slice(0, clearedCount);
  const reduction = clearedNodes.reduce((total, node) => total + node.difficultyReduction, 0);

  return Math.max(0, 100 - reduction);
}

export function simulateChallengeFeedback(seed: number): FeedbackSignal[] {
  const feedbackSets: FeedbackSignal[][] = [
    [
      { label: "Pitch anchor: stable", state: "good" },
      { label: "Tone shape: si6 held", state: "good" },
      { label: "Breath: early but clean", state: "good" },
    ],
    [
      { label: "Pitch anchor: close", state: "good" },
      { label: "Tone shape: drifted upward", state: "needs-work" },
      { label: "Breath: clean", state: "good" },
    ],
    [
      { label: "Pitch anchor: stable", state: "good" },
      { label: "Tone shape: clear", state: "good" },
      { label: "Breath: ran out near line end", state: "needs-work" },
    ],
  ];

  return feedbackSets[seed % feedbackSets.length];
}

export const waitingFeedback: FeedbackSignal[] = [
  { label: "Pitch anchor: waiting", state: "waiting" },
  { label: "Tone shape: waiting", state: "waiting" },
  { label: "Breath: waiting", state: "waiting" },
];
