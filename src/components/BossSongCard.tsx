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
        <p className="mode-label">Boss 段落</p>
        <h2 id="boss-title">{song.title}</h2>
        <p className="boss-meta">
          当前挑战：{song.sourceTitle ? `《${song.sourceTitle}》` : song.title}
          {song.timeRange ? ` ${song.timeRange}` : ""} · {song.lines?.length ?? 0}句粤语 Rap
        </p>
        <p className="boss-meta">目标：{song.goal}</p>
        {song.statusLabel ? <span className="status-ribbon">{song.statusLabel}</span> : null}
        <div className="boss-actions">
          <Link className="primary-action" href="/challenge">
            今日挑战
          </Link>
          <Link className="secondary-link" href="/path">
            逐句通关
          </Link>
        </div>
      </div>
      <ProgressBar value={readiness} label="Boss Segment readiness" />
    </section>
  );
}
