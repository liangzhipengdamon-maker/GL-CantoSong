import { AppNav } from "@/components/AppNav";
import { BossSegmentMap } from "@/components/BossSegmentMap";
import { BossSongCard } from "@/components/BossSongCard";
import { GameLearnBadge } from "@/components/GameLearnBadge";
import { MouthCoachPanel } from "@/components/MouthCoachPanel";
import { SongDNA } from "@/components/SongDNA";
import { mouthCoachCards } from "@/data/mouth-coach-cards";
import { activeBossSong } from "@/data/songs";
import { analyzeBossSong, calculateReadiness } from "@/lib/mock-ai";

export default function BossPage() {
  const analysis = analyzeBossSong(activeBossSong.id);
  const readiness = calculateReadiness(activeBossSong.readinessBase, 1);

  return (
    <main className="single-page">
      <header className="topbar">
        <div>
          <p className="eyebrow">Boss 段落</p>
          <h1>当前真实学员任务</h1>
        </div>
        <GameLearnBadge />
      </header>
      <AppNav />
      <BossSongCard song={activeBossSong} readiness={readiness} />
      {activeBossSong.lines ? <BossSegmentMap lines={activeBossSong.lines} /> : null}
      <MouthCoachPanel cards={mouthCoachCards} />
      <SongDNA items={analysis.dna} />
    </main>
  );
}
