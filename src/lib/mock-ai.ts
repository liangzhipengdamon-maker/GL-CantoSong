import { mockPath } from "@/data/mock-paths";
import { songDNA } from "@/data/song-dna";
import type { FeedbackSignal, KnowledgeNode, MockAIAnalysis, SongId } from "@/lib/types";

export function analyzeBossSong(songId: SongId): MockAIAnalysis {
  return {
    songId,
    summary: "Mock analysis: this Boss Song is won by tone anchors, phrase breath, final consonants, and emotional restraint.",
    dna: songDNA.filter((item) => item.songId === songId),
    path: mockPath.filter((node) => node.songId === songId),
  };
}

export function getActiveNode(path: KnowledgeNode[], clearedCount: number): KnowledgeNode {
  return path[Math.min(clearedCount, path.length - 1)];
}

export function calculateReadiness(base: number, clearedCount: number): number {
  return Math.min(100, base + clearedCount * 20);
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
