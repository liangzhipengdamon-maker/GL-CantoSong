import { AppNav } from "@/components/AppNav";
import { BossSegmentMap } from "@/components/BossSegmentMap";
import { BossSongCard } from "@/components/BossSongCard";
import { GameLearnBadge } from "@/components/GameLearnBadge";
import Link from "next/link";
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
          <h1>先看清目标</h1>
          <p className="page-subtitle">这里解释你要攻克的 12 秒，不在这里完成全部训练。</p>
        </div>
        <GameLearnBadge />
      </header>
      <AppNav />
      <BossSongCard song={activeBossSong} readiness={readiness} />
      {activeBossSong.lines ? <BossSegmentMap lines={activeBossSong.lines} /> : null}
      <section className="overview-panel" aria-labelledby="boss-demands-title">
        <div className="section-heading compact">
          <div>
            <p className="mode-label">关键难点概览</p>
            <h2 id="boss-demands-title">这段歌主要难在哪里？</h2>
          </div>
          <span className="path-metrics"><span>{analysis.dna.length} 个 DNA 点</span></span>
        </div>
        <div className="summary-grid">
          <article>
            <strong>关键口型</strong>
            <p>ngo5 / dak1 / jat1 / gwong1 / cyun1 / coeng1</p>
          </article>
          <article>
            <strong>关键节奏</strong>
            <p>入声卡点、短句推进、12 秒内不拖拍。</p>
          </article>
          <article>
            <strong>关键气质</strong>
            <p>港式咬字要狠，但不要靠喊来制造气势。</p>
          </article>
        </div>
        <div className="boss-cta-row">
          <Link className="primary-action" href="/challenge">开始今日挑战</Link>
          <Link className="secondary-link" href="/path">查看逐句通关</Link>
          <Link className="secondary-link" href="/final-boss">进入 Boss Run</Link>
        </div>
      </section>
    </main>
  );
}
