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

export type DemoCameraAngle = "front" | "side" | "three-quarter";
export type DemoSpeed = "slow" | "normal" | "rhythm" | "boss-tempo";
export type DemoMode = "speak" | "chant" | "rap" | "sing";

export interface LyricLine {
  id: string;
  order: number;
  timestamp: string;
  text: string;
  jyutping: string;
  focus: string[];
}

export interface BossSong {
  id: SongId;
  title: string;
  sourceTitle?: string;
  artist?: string;
  language: "Cantonese";
  timeRange?: string;
  goal: string;
  readinessBase: number;
  lines?: LyricLine[];
  statusLabel?: string;
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
  targetLines?: string[];
  jyutping?: string;
  focus?: string[];
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

export interface MouthCoachCard {
  id: string;
  bossSegmentId: SongId;
  titleZh: string;
  targetText: string;
  jyutping: string;
  lyricLineIds: string[];
  mouthCueZh: string;
  commonMistakeZh: string;
  correctionZh: string;
  practiceSteps: string[];
}

export interface HumanMouthDemo {
  id: string;
  bossSegmentId: SongId;
  mouthCoachCardId: string;
  lyricLineIds: string[];
  targetText: string;
  jyutping: string;
  angle: DemoCameraAngle;
  speed: DemoSpeed;
  mode: DemoMode;
  titleZh: string;
  descriptionZh: string;
  videoSrc?: string;
  posterSrc?: string;
  durationSec?: number;
  filmingStatus: "placeholder" | "planned" | "shot" | "edited" | "published";
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
