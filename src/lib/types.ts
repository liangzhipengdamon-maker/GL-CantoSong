export type SongId = "fuji-mountain";

export type SkillCategory = "listen" | "tone" | "mouth-shape" | "breath" | "emotion" | "boss-gate";

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
  name: string;
  detail: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  unlocks: string;
}

export interface KnowledgeNode {
  id: string;
  songId: SongId;
  order: number;
  type: SkillCategory;
  title: string;
  copy: string;
  unlocks: string;
}

export interface DailyChallenge {
  id: string;
  songId: SongId;
  nodeId: string;
  prompt: string;
  target: string;
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
