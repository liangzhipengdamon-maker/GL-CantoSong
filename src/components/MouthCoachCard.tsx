import { HumanMouthDemoPanel } from "@/components/HumanMouthDemoPanel";
import { getHumanDemosForMouthCoach } from "@/lib/demo-assets";
import type { MouthCoachCard as MouthCoachCardModel } from "@/lib/types";

interface MouthCoachCardProps {
  card: MouthCoachCardModel;
}

export function MouthCoachCard({ card }: MouthCoachCardProps) {
  const demos = getHumanDemosForMouthCoach(card.id);

  return (
    <article className="mouth-coach-card">
      <div className="mouth-coach-topline">
        <span>口型教练卡</span>
        <span>{card.targetText}</span>
      </div>
      <h3>{card.titleZh}</h3>
      <p className="node-jyutping">{card.jyutping}</p>
      <div className="coach-grid">
        <div>
          <strong>嘴型提示</strong>
          <p>{card.mouthCueZh}</p>
        </div>
        <div>
          <strong>常见错误</strong>
          <p>{card.commonMistakeZh}</p>
        </div>
        <div>
          <strong>纠正方法</strong>
          <p>{card.correctionZh}</p>
        </div>
      </div>
      <ol className="challenge-steps">
        {card.practiceSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <HumanMouthDemoPanel demos={demos} />
    </article>
  );
}
