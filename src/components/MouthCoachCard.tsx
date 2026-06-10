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
      {card.contrast ? (
        <section className="coach-contrast" aria-label="普通话习惯 vs 粤语目标">
          <h4>普通话习惯 vs 粤语目标</h4>
          <div className="contrast-grid">
            <div>
              <strong>普通话习惯</strong>
              <p>{card.contrast.mandarinHabitZh}</p>
            </div>
            <div>
              <strong>粤语目标</strong>
              <p>{card.contrast.cantoneseTargetZh}</p>
            </div>
          </div>
          <p className="contrast-note">{card.contrast.keyDifferenceZh}</p>
        </section>
      ) : null}
      {card.englishApprox ? (
        <section className="english-approx" aria-label="英文近似入口">
          <div className="approx-heading">
            <h4>英文近似入口</h4>
            <span>不是标准粤语发音</span>
          </div>
          <p className="approx-warning">这不是标准粤语发音，只是帮助你找到接近的口腔动作。</p>
          <div className="approx-example">
            <strong>近似例子</strong>
            <span>
              {card.englishApprox.example}
              {card.englishApprox.ipa ? ` ${card.englishApprox.ipa}` : ""}
            </span>
          </div>
          <div className="coach-grid is-two">
            <div>
              <strong>为什么有帮助</strong>
              <p>{card.englishApprox.whyItHelpsZh}</p>
            </div>
            <div>
              <strong>和粤语的区别</strong>
              <p>{card.englishApprox.differenceZh}</p>
            </div>
          </div>
        </section>
      ) : null}
      <HumanMouthDemoPanel demos={demos} />
    </article>
  );
}
