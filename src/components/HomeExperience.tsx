import { AppNav } from "@/components/AppNav";
import { BossSongCard } from "@/components/BossSongCard";
import { CreatorPanel } from "@/components/CreatorPanel";
import { DailyChallengeCard } from "@/components/DailyChallengeCard";
import { GameLearnBadge } from "@/components/GameLearnBadge";
import { PracticeTabs } from "@/components/PracticeTabs";
import { SongDNA } from "@/components/SongDNA";
import { SongIntakeForm } from "@/components/SongIntakeForm";
import { humanMouthDemos } from "@/data/human-mouth-demos";
import { mouthCoachCards } from "@/data/mouth-coach-cards";
import { activeBossSong } from "@/data/songs";
import { analyzeBossSong, calculateReadiness, getActiveNode, getDailyChallenge } from "@/lib/mock-ai";

export function HomeExperience() {
  const analysis = analyzeBossSong(activeBossSong.id);
  const readiness = calculateReadiness(activeBossSong.readinessBase, 1);
  const activeNode = getActiveNode(analysis.path, 1);
  const activeChallenge = getDailyChallenge(activeBossSong.id, activeNode.day);

  return (
    <main className="learner-home">
      <section className="stage" aria-labelledby="app-title">
        <header className="topbar">
          <div>
            <p className="eyebrow">GameLearn Cantonese Song Lab</p>
            <h1 id="app-title">GL-CantoSong</h1>
          </div>
          <GameLearnBadge />
        </header>
        <AppNav />
        <SongIntakeForm />
        <section className="today-flow" aria-label="当前学习任务">
          <BossSongCard song={activeBossSong} readiness={readiness} compact />
          <DailyChallengeCard challenge={activeChallenge} node={activeNode} />
        </section>
        <PracticeTabs
          humanDemos={humanMouthDemos}
          lines={activeBossSong.lines ?? []}
          mouthCoachCards={mouthCoachCards}
          nodes={analysis.path}
        />
        <details className="technical-details">
          <summary>开发者说明 / Creator Console</summary>
          <div className="technical-grid">
            <SongDNA items={analysis.dna} />
            <CreatorPanel />
          </div>
        </details>
      </section>
    </main>
  );
}
