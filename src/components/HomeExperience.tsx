import Link from "next/link";
import { AppNav } from "@/components/AppNav";
import { GameLearnBadge } from "@/components/GameLearnBadge";
import { activeBossSong } from "@/data/songs";
import { analyzeBossSong, getActiveNode, getDailyChallenge } from "@/lib/mock-ai";

export function HomeExperience() {
  const analysis = analyzeBossSong(activeBossSong.id);
  const activeNode = getActiveNode(analysis.path, 1);
  const activeChallenge = getDailyChallenge(activeBossSong.id, activeNode.day);
  const activeLine = activeBossSong.lines?.find((line) => activeNode.targetLines?.includes(line.id));

  return (
    <main className="learner-home">
      <section className="learner-stage" aria-labelledby="app-title">
        <header className="topbar">
          <div>
            <p className="eyebrow">你的粤语歌练习</p>
            <h1 id="app-title">GL-CantoSong</h1>
          </div>
          <GameLearnBadge />
        </header>
        <AppNav />

        <section className="song-intake" aria-labelledby="song-intake-title">
          <p className="home-step">1</p>
          <div>
            <p className="mode-label">我要学哪首歌？</p>
            <h2 id="song-intake-title">《{activeBossSong.sourceTitle ?? activeBossSong.title}》</h2>
            <p>{activeBossSong.timeRange} · 已为你选好今天的练习内容</p>
          </div>
        </section>

        <section className="today-task" aria-labelledby="today-task-title">
          <div className="today-task-head">
            <div>
              <p className="mode-label">今天我该练什么？</p>
              <h2 id="today-task-title">今天只练这一句</h2>
            </div>
            <span>Day {activeChallenge.day} / {analysis.path.length}</span>
          </div>
          <div className="today-line">
            <strong>{activeLine?.text ?? activeNode.title}</strong>
            {activeLine?.jyutping ? <p>{activeLine.jyutping}</p> : null}
          </div>
          <p className="today-focus">练习目标：{activeChallenge.target}</p>
          <Link className="primary-action home-start" href="/practice">
            开始今日练习
          </Link>
        </section>

        <footer className="advanced-links">
          <span>高级查看</span>
          <Link href="/boss">段落详情</Link>
          <Link href="/final-boss">完整挑战</Link>
        </footer>
      </section>
    </main>
  );
}
