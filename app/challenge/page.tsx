import { AppNav } from "@/components/AppNav";
import { DailyChallengeCard } from "@/components/DailyChallengeCard";
import { HumanMouthDemoPanel } from "@/components/HumanMouthDemoPanel";
import { MouthCoachCard } from "@/components/MouthCoachCard";
import { humanMouthDemos } from "@/data/human-mouth-demos";
import { mouthCoachCards } from "@/data/mouth-coach-cards";
import { activeBossSong } from "@/data/songs";
import { analyzeBossSong, getActiveNode, getDailyChallenge } from "@/lib/mock-ai";

export default function ChallengePage() {
  const analysis = analyzeBossSong(activeBossSong.id);
  const activeNode = getActiveNode(analysis.path, 1);
  const activeChallenge = getDailyChallenge(activeBossSong.id, activeNode.day);
  const targetLineIds = activeNode.targetLines ?? [];
  const targetLines = activeBossSong.lines?.filter((line) => targetLineIds.includes(line.id)) ?? [];
  const relevantCards = mouthCoachCards.filter((card) => card.lyricLineIds.some((lineId) => targetLineIds.includes(lineId))).slice(0, 3);
  const relevantDemos = humanMouthDemos.filter((demo) => demo.lyricLineIds.some((lineId) => targetLineIds.includes(lineId))).slice(0, 4);

  return (
    <main className="single-page">
      <header className="simple-header">
        <p className="eyebrow">今日挑战</p>
        <h1>今天只练这一关</h1>
        <p>先把目标句、Jyutping 和相关口型处理清楚。当前仍是 mock feedback，不加入真实 AI 评分或录音。</p>
      </header>
      <AppNav />
      <section className="challenge-layout">
        <DailyChallengeCard challenge={activeChallenge} node={activeNode} />
        <aside className="target-line-panel" aria-labelledby="target-line-title">
          <p className="mode-label">目标句</p>
          <h2 id="target-line-title">今天练哪一句？</h2>
          {targetLines.map((line) => (
            <article className="target-lyric-card" key={line.id}>
              <span className="segment-time">{line.timestamp}</span>
              <h3>{line.text}</h3>
              <p className="node-jyutping">{line.jyutping}</p>
              <div className="focus-tags">
                {line.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </aside>
      </section>
      <section className="focused-practice" aria-labelledby="focused-practice-title">
        <div className="section-heading compact">
          <div>
            <p className="mode-label">相关口型</p>
            <h2 id="focused-practice-title">只看今天用得上的卡</h2>
          </div>
          <span className="path-metrics"><span>{relevantCards.length} 张卡</span></span>
        </div>
        <div className="focused-card-grid">
          {relevantCards.map((card) => (
            <MouthCoachCard card={card} key={card.id} />
          ))}
        </div>
        <HumanMouthDemoPanel demos={relevantDemos} />
      </section>
    </main>
  );
}
