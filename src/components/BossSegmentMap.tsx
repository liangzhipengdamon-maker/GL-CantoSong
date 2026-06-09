import type { LyricLine } from "@/lib/types";

interface BossSegmentMapProps {
  lines: LyricLine[];
}

export function BossSegmentMap({ lines }: BossSegmentMapProps) {
  return (
    <section className="segment-map" aria-labelledby="segment-map-title">
      <div className="section-heading">
        <p className="mode-label">Boss Segment Map</p>
        <h2 id="segment-map-title">6句粤语 Rap</h2>
      </div>
      <div className="segment-lines">
        {lines.map((line) => (
          <article className="segment-line" key={line.id}>
            <div className="segment-time">{line.timestamp}</div>
            <h3>{line.text}</h3>
            <p>{line.jyutping}</p>
            <div className="focus-tags" aria-label={`Line ${line.order} focus points`}>
              {line.focus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
