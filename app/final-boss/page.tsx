import { AppNav } from "@/components/AppNav";
import { BossSongCard } from "@/components/BossSongCard";
import { activeBossSong } from "@/data/songs";
import { calculateReadiness } from "@/lib/mock-ai";

export default function FinalBossPage() {
  const readiness = calculateReadiness(activeBossSong.readinessBase, 4);

  return (
    <main className="single-page narrow">
      <header className="simple-header">
        <p className="eyebrow">Final Boss</p>
        <h1>Attempt the chorus</h1>
        <p>The final gate combines tone, mouth shape, breath, and emotional contour into one performance attempt.</p>
      </header>
      <AppNav />
      <BossSongCard song={activeBossSong} readiness={readiness} compact />
      <section className="final-boss-card">
        <span className="challenge-tag">Boss Gate</span>
        <h2>One chorus. Three checks.</h2>
        <p>Record one full chorus attempt. In the MVP, this is a placeholder for future scoring and teacher review.</p>
        <div className="final-checks">
          <span>Tone anchors</span>
          <span>Phrase breath</span>
          <span>Emotion curve</span>
        </div>
      </section>
    </main>
  );
}
