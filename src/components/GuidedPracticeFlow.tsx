"use client";

import Link from "next/link";
import { useState } from "react";
import { HumanMouthDemoCard } from "@/components/HumanMouthDemoCard";
import type { DailyChallenge, HumanMouthDemo, LyricLine, MouthCoachCard } from "@/lib/types";

interface GuidedPracticeFlowProps {
  challenge: DailyChallenge;
  line: LyricLine;
  mouthCoachCards: MouthCoachCard[];
  demos: HumanMouthDemo[];
}

const stepLabels = ["目标句", "发音差异", "英文入口", "真人示范", "跟练"];

export function GuidedPracticeFlow({ challenge, line, mouthCoachCards, demos }: GuidedPracticeFlowProps) {
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const cardsWithApproximation = mouthCoachCards.filter((card) => card.englishApprox);

  function nextStep() {
    setStep((current) => Math.min(current + 1, stepLabels.length - 1));
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 0));
  }

  if (complete) {
    return (
      <section className="practice-complete" aria-live="polite">
        <span className="complete-mark" aria-hidden="true">✓</span>
        <p className="mode-label">Day {challenge.day} 完成</p>
        <h2>今日完成。明天继续下一句。</h2>
        <p>今天练的是「{line.text}」。先停在这里，让口型和节奏沉淀一下。</p>
        <Link className="primary-action" href="/">回到首页</Link>
      </section>
    );
  }

  return (
    <section className="guided-practice" aria-labelledby="practice-step-title">
      <div className="practice-progress" aria-label={`练习进度：第 ${step + 1} 步，共 ${stepLabels.length} 步`}>
        {stepLabels.map((label, index) => (
          <div className={index < step ? "is-done" : index === step ? "is-active" : ""} key={label}>
            <span>{index < step ? "✓" : index + 1}</span>
            <small>{label}</small>
          </div>
        ))}
      </div>

      <article className="practice-step-card">
        <p className="mode-label">第 {step + 1} 步 / {stepLabels.length}</p>

        {step === 0 ? (
          <div className="practice-step-content">
            <h2 id="practice-step-title">先看今天的目标句</h2>
            <div className="practice-target-line">
              <strong>{line.text}</strong>
              <span>{line.jyutping}</span>
            </div>
            <div className="practice-note">
              <strong>今天只注意这一件事</strong>
              <p>{challenge.target}</p>
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="practice-step-content">
            <h2 id="practice-step-title">看清发音差异</h2>
            <p className="step-intro">不需要一次记住全部。先看普通话习惯会把口型带到哪里。</p>
            <div className="guided-coach-list">
              {mouthCoachCards.map((card) => (
                <section className="guided-coach-card" key={card.id}>
                  <h3>{card.titleZh}</h3>
                  <p className="node-jyutping">{card.jyutping}</p>
                  {card.contrast ? (
                    <div className="guided-contrast">
                      <div><strong>普通话习惯</strong><p>{card.contrast.mandarinHabitZh}</p></div>
                      <div><strong>粤语目标</strong><p>{card.contrast.cantoneseTargetZh}</p></div>
                    </div>
                  ) : null}
                  <p className="contrast-note">{card.contrast?.keyDifferenceZh ?? card.correctionZh}</p>
                </section>
              ))}
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="practice-step-content">
            <h2 id="practice-step-title">借英文找到口型入口</h2>
            <p className="approx-warning guided-warning">这不是标准粤语发音，只是帮助你找到接近的口腔动作。</p>
            <div className="approx-list">
              {cardsWithApproximation.map((card) => (
                <section className="guided-approx-card" key={card.id}>
                  <p className="mode-label">{card.targetText} · {card.jyutping}</p>
                  <h3>{card.englishApprox?.example}{card.englishApprox?.ipa ? ` ${card.englishApprox.ipa}` : ""}</h3>
                  <p>{card.englishApprox?.whyItHelpsZh}</p>
                  <small>{card.englishApprox?.differenceZh}</small>
                </section>
              ))}
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="practice-step-content">
            <h2 id="practice-step-title">看真人口型示范</h2>
            <p className="step-intro">先看嘴巴从哪里开始、在哪里收住，再回到整句。</p>
            {demos.length > 0 && demos.every((demo) => !demo.videoSrc) ? (
              <p className="demo-empty is-inline">真人示范待拍摄，先按文字提示练习。</p>
            ) : null}
            {demos.length > 0 ? (
              <div className="guided-demo-list">
                {demos.map((demo) => <HumanMouthDemoCard demo={demo} key={demo.id} />)}
              </div>
            ) : (
              <p className="demo-empty">真人示范待拍摄，先按文字提示练习。</p>
            )}
          </div>
        ) : null}

        {step === 4 ? (
          <div className="practice-step-content">
            <h2 id="practice-step-title">现在跟练三遍</h2>
            <div className="practice-target-line is-compact">
              <strong>{line.text}</strong>
              <span>{line.jyutping}</span>
            </div>
            <ol className="guided-checklist">
              <li><span>1</span><div><strong>慢读一次</strong><p>先把每个音读清楚，不赶速度。</p></div></li>
              <li><span>2</span><div><strong>跟节奏一次</strong><p>保持收尾短促，让字落在拍点上。</p></div></li>
              <li><span>3</span><div><strong>半唱半说一遍</strong><p>不用追求完美，完整走完这一句。</p></div></li>
            </ol>
          </div>
        ) : null}

        <div className="practice-actions">
          {step > 0 ? <button className="practice-back" onClick={previousStep} type="button">上一步</button> : <span />}
          {step < stepLabels.length - 1 ? (
            <button className="primary-action" onClick={nextStep} type="button">
              {step === 0 ? "下一步：看发音差异" : step === 1 ? "下一步：借英文找口型" : step === 2 ? "下一步：看真人示范" : "下一步：跟练"}
            </button>
          ) : (
            <button className="primary-action" onClick={() => setComplete(true)} type="button">完成今日练习</button>
          )}
        </div>
      </article>
    </section>
  );
}
