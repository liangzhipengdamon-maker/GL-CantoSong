import { AppNav } from "@/components/AppNav";
import { BossSegmentMap } from "@/components/BossSegmentMap";
import { BossSongCard } from "@/components/BossSongCard";
import { CreatorPanel } from "@/components/CreatorPanel";
import { DailyChallengeCard } from "@/components/DailyChallengeCard";
import { GameLearnBadge } from "@/components/GameLearnBadge";
import { PlayablePath } from "@/components/PlayablePath";
import { SongDNA } from "@/components/SongDNA";
import { activeBossSong } from "@/data/songs";
import { analyzeBossSong, calculateReadiness, getActiveNode, getDailyChallenge } from "@/lib/mock-ai";

export function HomeExperience() {
  const analysis = analyzeBossSong(activeBossSong.id);
  const readiness = calculateReadiness(activeBossSong.readinessBase, 1);
  const activeNode = getActiveNode(analysis.path, 1);
  const activeChallenge = getDailyChallenge(activeBossSong.id, activeNode.day);

  return (
    <main className="app-shell">
      <section className="stage" aria-labelledby="app-title">
        <header className="topbar">
          <div>
            <p className="eyebrow">GameLearn Cantonese Song Lab</p>
            <h1 id="app-title">GL-CantoSong</h1>
          </div>
          <GameLearnBadge />
        </header>
        <AppNav />
        <BossSongCard song={activeBossSong} readiness={readiness} />
        {activeBossSong.lines ? <BossSegmentMap lines={activeBossSong.lines} /> : null}
        <section className="workspace-grid">
          <SongDNA items={analysis.dna} />
          <DailyChallengeCard challenge={activeChallenge} node={activeNode} />
        </section>
        <PlayablePath nodes={analysis.path} />
      </section>
      <CreatorPanel />
    </main>
  );
}
