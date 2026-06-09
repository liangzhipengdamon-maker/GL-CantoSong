import { MouthCoachCard } from "@/components/MouthCoachCard";
import type { MouthCoachCard as MouthCoachCardModel } from "@/lib/types";

interface MouthCoachPanelProps {
  cards: MouthCoachCardModel[];
}

export function MouthCoachPanel({ cards }: MouthCoachPanelProps) {
  return (
    <section className="mouth-coach-panel" aria-labelledby="mouth-coach-title">
      <div className="section-heading compact">
        <div>
          <p className="mode-label">MouthCoach / 粤语口型教练</p>
          <h2 id="mouth-coach-title">真人示范解锁具体音</h2>
        </div>
        <span className="path-metrics"><span>{cards.length} 张卡</span></span>
      </div>
      <div className="mouth-coach-list">
        {cards.map((card) => (
          <MouthCoachCard card={card} key={card.id} />
        ))}
      </div>
    </section>
  );
}
