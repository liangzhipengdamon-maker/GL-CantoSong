interface ProgressBarProps {
  value: number;
  label: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  const circumference = 364.4;
  const offset = circumference - (circumference * value) / 100;

  return (
    <div className="readiness-meter" aria-label={label}>
      <svg viewBox="0 0 140 140" role="img" aria-labelledby="meter-title">
        <title id="meter-title">{`${label}: ${value} percent`}</title>
        <circle className="meter-track" cx="70" cy="70" r="58" />
        <circle className="meter-fill" cx="70" cy="70" r="58" style={{ strokeDashoffset: offset }} />
      </svg>
      <div className="meter-text">
        <strong>{value}%</strong>
        <span>ready</span>
      </div>
    </div>
  );
}
