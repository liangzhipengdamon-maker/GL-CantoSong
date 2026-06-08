export type SongId = string;

export type SkillCategory =
  | "listen"
  | "pronunciation"
  | "tone"
  | "mouth-shape"
  | "final-consonants"
  | "vocabulary"
  | "grammar"
  | "rhythm"
  | "breath"
  | "expression"
  | "culture"
  | "boss-gate";

export type KnowledgeNodeStatus = "cleared" | "active" | "locked";

export interface BossSong {
  id: SongId;
  title: string;
  artist: string;
  language: "Cantonese";
  goal: string;
  chorusLine: string;
  readinessBase: number;
}

export interface SongDNAItem {
  id: string;
  songId: SongId;
  category: SkillCategory;
  name: string;
  detail: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  unlocks: string;
}

export interface KnowledgeNode {
  id: string;
  songId: SongId;
  order: number;
  day: number;
  type: SkillCategory;
  title: string;
  copy: string;
  unlocks: string;
  difficultyReduction: number;
}

export interface DailyChallenge {
  id: string;
  songId: SongId;
  nodeId: string;
  day: number;
  prompt: string;
  target: string;
  steps: string[];
  xpReward: number;
  difficultyReduction: number;
}

export interface FeedbackSignal {
  label: string;
  state: "waiting" | "good" | "needs-work";
}

export interface MockAIAnalysis {
  songId: SongId;
  summary: string;
  dna: SongDNAItem[];
  path: KnowledgeNode[];
}
