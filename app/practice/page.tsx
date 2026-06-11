import { AppNav } from "@/components/AppNav";
import { GuidedPracticeFlow } from "@/components/GuidedPracticeFlow";
import { mouthCoachCards } from "@/data/mouth-coach-cards";
import { activeBossSong } from "@/data/songs";
import { getHumanDemosForLine } from "@/lib/demo-assets";
import { analyzeBossSong, getActiveNode, getDailyChallenge } from "@/lib/mock-ai";

export default function PracticePage() {
  const analysis = analyzeBossSong(activeBossSong.id);
  const activeNode = getActiveNode(analysis.path, 1);
  const challenge = getDailyChallenge(activeBossSong.id, activeNode.day);
  const lineId = activeNode.targetLines?.[0];
  const line = activeBossSong.lines?.find((item) => item.id === lineId);

  if (!line) {
    throw new Error(`Missing lyric line for ${activeNode.id}`);
  }

  const relevantCards = mouthCoachCards.filter((card) => card.lyricLineIds.includes(line.id));
  const demos = getHumanDemosForLine(line.id).filter((demo) => demo.speed === "slow").slice(0, 2);

  return (
    <main className="single-page practice-page">
      <header className="practice-header">
        <div>
          <p className="eyebrow">今天任务 · 第 {challenge.day} 天</p>
          <h1>跟着做就好</h1>
        </div>
        <AppNav />
      </header>
      <GuidedPracticeFlow challenge={challenge} demos={demos} line={line} mouthCoachCards={relevantCards} />
    </main>
  );
}
