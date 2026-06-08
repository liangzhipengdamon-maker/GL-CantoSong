import Link from "next/link";
import type { BossSong } from "@/lib/types";
import { ProgressBar } from "@/components/ProgressBar";

interface BossSongCardProps {
  song: BossSong;
  readiness: number;
  compact?: boolean;
}

export function BossSongCard({ song, readiness, compact = false }: BossSongCardProps) {
  return (
    <section className={`boss-panel ${compact ? "is-compact" : ""}`} aria-labelledby="boss-title">
      <div className="boss-copy">
        <p className="mode-label">Boss Song</p>
        <h2 id="boss-title">{song.title}</h2>
        <p className="boss-meta">Goal: {song.goal}</p>
        <div className="boss-actions">
          <Link className="primary-action" href="/challenge">
            Start Today
          </Link>
          <Link className="secondary-link" href="/path">
            View Path
          </Link>
        </div>
      </div>
      <ProgressBar value={readiness} label="Boss Song readiness" />
    </section>
  );
}
