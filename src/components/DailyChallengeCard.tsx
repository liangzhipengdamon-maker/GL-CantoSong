"use client";

import { useState } from "react";
import type { DailyChallenge, FeedbackSignal, KnowledgeNode } from "@/lib/types";
import { simulateChallengeFeedback, waitingFeedback } from "@/lib/mock-ai";

interface DailyChallengeCardProps {
  challenge: DailyChallenge;
  node: KnowledgeNode;
}

export function DailyChallengeCard({ challenge, node }: DailyChallengeCardProps) {
  const [feedback, setFeedback] = useState<FeedbackSignal[]>(waitingFeedback);
  const [attempt, setAttempt] = useState(0);

  function handleFeedback() {
    setFeedback(simulateChallengeFeedback(attempt));
    setAttempt((current) => current + 1);
  }

  return (
    <article className="daily-challenge" aria-labelledby="challenge-title">
      <div className="section-heading">
        <p className="mode-label">Daily Challenge · Day {challenge.day}</p>
        <h2 id="challenge-title">Clear today&apos;s Boss node</h2>
      </div>
      <div className="challenge-card">
        <span className="challenge-tag">{node.type.replaceAll("-", " ")}</span>
        <h3>{node.title}</h3>
        <p>{challenge.prompt}</p>
        <ol className="challenge-steps">
          {challenge.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="target-line">
          <strong>Unlock target</strong>
          <span>{challenge.target}</span>
        </div>
        <div className="reward-row">
          <span>+{challenge.xpReward} XP</span>
          <span>Boss difficulty -{challenge.difficultyReduction}</span>
        </div>
        <div className="feedback-strip">
          {feedback.map((item) => (
            <span className={item.state === "good" ? "is-good" : item.state === "needs-work" ? "needs-work" : ""} key={item.label}>
              {item.label}
            </span>
          ))}
        </div>
        <button className="secondary-action" onClick={handleFeedback} type="button">
          Simulate Feedback
        </button>
      </div>
    </article>
  );
}
