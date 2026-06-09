import { humanMouthDemos } from "@/data/human-mouth-demos";
import type { HumanMouthDemo, SongId } from "@/lib/types";

export function getHumanDemosForMouthCoach(cardId: string): HumanMouthDemo[] {
  return humanMouthDemos.filter((demo) => demo.mouthCoachCardId === cardId);
}

export function getHumanDemosForLine(lineId: string): HumanMouthDemo[] {
  return humanMouthDemos.filter((demo) => demo.lyricLineIds.includes(lineId));
}

export function getHumanDemosForSegment(songId: SongId): HumanMouthDemo[] {
  return humanMouthDemos.filter((demo) => demo.bossSegmentId === songId);
}

export function getPrimaryHumanDemoForMouthCoach(cardId: string): HumanMouthDemo | undefined {
  return getHumanDemosForMouthCoach(cardId).find((demo) => demo.angle === "front" && demo.speed === "slow");
}
