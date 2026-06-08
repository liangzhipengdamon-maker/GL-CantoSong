interface GameLearnBadgeProps {
  streak?: number;
}

export function GameLearnBadge({ streak = 7 }: GameLearnBadgeProps) {
  return (
    <div className="streak" aria-label="Current practice streak">
      <span className="streak-number">{streak}</span>
      <span className="streak-label">day streak</span>
    </div>
  );
}
