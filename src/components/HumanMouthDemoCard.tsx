import type { HumanMouthDemo } from "@/lib/types";

interface HumanMouthDemoCardProps {
  demo: HumanMouthDemo;
}

const angleLabels: Record<HumanMouthDemo["angle"], string> = {
  front: "正面",
  side: "侧面",
  "three-quarter": "三分之四侧面",
};

const speedLabels: Record<HumanMouthDemo["speed"], string> = {
  slow: "慢速",
  normal: "正常",
  rhythm: "节奏",
  "boss-tempo": "Boss 速度",
};

const modeLabels: Record<HumanMouthDemo["mode"], string> = {
  speak: "读音",
  chant: "节奏读",
  rap: "Rap",
  sing: "唱",
};

const statusLabels: Record<HumanMouthDemo["filmingStatus"], string> = {
  placeholder: "占位",
  planned: "待拍摄",
  shot: "已拍摄",
  edited: "已剪辑",
  published: "已发布",
};

export function HumanMouthDemoCard({ demo }: HumanMouthDemoCardProps) {
  return (
    <article className="human-demo-card">
      <div className="demo-video-shell">
        {demo.videoSrc ? (
          <video controls poster={demo.posterSrc} src={demo.videoSrc}>
            <track kind="captions" />
          </video>
        ) : (
          <div className="demo-placeholder">
            <span>待拍摄真人口型示范</span>
          </div>
        )}
      </div>
      <div className="demo-body">
        <div className="demo-headline">
          <h4>{demo.titleZh}</h4>
          <span className={`demo-status is-${demo.filmingStatus}`}>{statusLabels[demo.filmingStatus]}</span>
        </div>
        <p className="demo-target">
          {demo.targetText} · {demo.jyutping}
        </p>
        <div className="demo-meta">
          <span>{angleLabels[demo.angle]}</span>
          <span>{speedLabels[demo.speed]}</span>
          <span>{modeLabels[demo.mode]}</span>
          {demo.durationSec ? <span>{demo.durationSec}s</span> : null}
        </div>
        <p>{demo.descriptionZh}</p>
      </div>
    </article>
  );
}
