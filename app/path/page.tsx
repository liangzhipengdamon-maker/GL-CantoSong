import { AppNav } from "@/components/AppNav";
import Link from "next/link";
import { activeBossSong } from "@/data/songs";
import { analyzeBossSong } from "@/lib/mock-ai";

export default function PathPage() {
  const analysis = analyzeBossSong(activeBossSong.id);

  return (
    <main className="single-page">
      <header className="simple-header">
        <p className="eyebrow">逐句通关</p>
        <h1>7天清掉《枪火》6句 Rap</h1>
        <p>这里看整条路线：每天解锁哪一句、降低多少 Boss 难度。具体训练放到今日挑战页。</p>
      </header>
      <AppNav />
      <section className="path-overview" aria-labelledby="path-overview-title">
        <div className="section-heading compact">
          <div>
            <p className="mode-label">7-day map</p>
            <h2 id="path-overview-title">从听懂到整段 Boss Run</h2>
          </div>
          <span className="path-metrics"><span>{analysis.path.length} 天</span></span>
        </div>
        <div className="compact-path-grid">
          {analysis.path.map((node, index) => (
            <article className={`compact-day-card ${index === 1 ? "is-current" : ""}`} key={node.id}>
              <div className="node-topline">
                <div className="node-number">{node.day}</div>
                <span className="node-status">{index === 1 ? "current" : index < 1 ? "cleared" : "locked"}</span>
              </div>
              <div className="node-type">Day {node.day} · {node.type.replaceAll("-", " ")}</div>
              <h3>{node.title}</h3>
              <p>{node.unlocks}</p>
              <span className="difficulty-chip">Boss -{node.difficultyReduction}</span>
              <Link className={index === 1 ? "primary-action compact-action" : "secondary-link compact-action"} href="/challenge">
                {index === 1 ? "去今日挑战" : "查看该关"}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
