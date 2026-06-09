import { AppNav } from "@/components/AppNav";
import { DailyChallengeCard } from "@/components/DailyChallengeCard";
import { activeBossSong } from "@/data/songs";
import { analyzeBossSong, getActiveNode, getDailyChallenge } from "@/lib/mock-ai";

export default function ChallengePage() {
  const analysis = analyzeBossSong(activeBossSong.id);
  const activeNode = getActiveNode(analysis.path, 1);
  const activeChallenge = getDailyChallenge(activeBossSong.id, activeNode.day);

  return (
    <main className="single-page narrow">
      <header className="simple-header">
        <p className="eyebrow">今日挑战</p>
        <h1>每天通关一句</h1>
        <p>先用 mock feedback 验证逐句练习闭环，不加入真实 AI 评分或录音。</p>
      </header>
      <AppNav />
      <DailyChallengeCard challenge={activeChallenge} node={activeNode} />
    </main>
  );
}
