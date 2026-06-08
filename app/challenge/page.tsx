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
        <p className="eyebrow">Daily Challenge</p>
        <h1>One small clear today</h1>
        <p>Feedback is mocked for the MVP so the product loop can be tested before real scoring is added.</p>
      </header>
      <AppNav />
      <DailyChallengeCard challenge={activeChallenge} node={activeNode} />
    </main>
  );
}
