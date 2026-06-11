import { AppNav } from "@/components/AppNav";
import { BossSongCard } from "@/components/BossSongCard";
import Link from "next/link";
import { activeBossSong } from "@/data/songs";
import { calculateReadiness } from "@/lib/mock-ai";

export default function FinalBossPage() {
  const readiness = calculateReadiness(activeBossSong.readinessBase, 4);

  return (
    <main className="single-page narrow">
      <header className="simple-header">
        <p className="eyebrow">整段 Boss Run</p>
        <h1>跑完《枪火》01:05-01:17</h1>
        <p>最终关把入声、鼻音、口型、低调、节奏卡点和港味气场合成一次 6 句通关。</p>
      </header>
      <AppNav />
      <BossSongCard song={activeBossSong} readiness={readiness} compact />
      <section className="final-boss-card">
        <span className="challenge-tag">Boss Gate</span>
        <h2>6句 Rap，一次 clear attempt。</h2>
        <p>当前 MVP 不录音、不评分，只验证短段落逐句通关是否让真实学习者愿意练下去。</p>
        <div className="boss-run-lines">
          {activeBossSong.lines?.map((line) => (
            <article key={line.id}>
              <span>{line.timestamp}</span>
              <strong>{line.text}</strong>
            </article>
          ))}
        </div>
        <div className="final-checks">
          <span>入声收尾</span>
          <span>ngo5 鼻音</span>
          <span>gw / cyun / coeng</span>
          <span>低声调</span>
          <span>节奏卡点</span>
          <span>港味气场</span>
        </div>
        <div className="boss-cta-row">
          <Link className="secondary-link" href="/challenge">回看今日弱点</Link>
          <Link className="secondary-link" href="/path">查看通关路线</Link>
        </div>
      </section>
    </main>
  );
}
