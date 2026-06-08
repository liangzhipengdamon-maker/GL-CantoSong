import { AppNav } from "@/components/AppNav";
import { BossSongCard } from "@/components/BossSongCard";
import { GameLearnBadge } from "@/components/GameLearnBadge";
import { SongDNA } from "@/components/SongDNA";
import { activeBossSong } from "@/data/songs";
import { analyzeBossSong, calculateReadiness } from "@/lib/mock-ai";

export default function BossPage() {
  const analysis = analyzeBossSong(activeBossSong.id);
  const readiness = calculateReadiness(activeBossSong.readinessBase, 1);

  return (
    <main className="single-page">
      <header className="topbar">
        <div>
          <p className="eyebrow">Boss Song</p>
          <h1>Target the song</h1>
        </div>
        <GameLearnBadge />
      </header>
      <AppNav />
      <BossSongCard song={activeBossSong} readiness={readiness} />
      <SongDNA items={analysis.dna} />
    </main>
  );
}
