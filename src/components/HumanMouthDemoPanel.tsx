import { HumanMouthDemoCard } from "@/components/HumanMouthDemoCard";
import type { HumanMouthDemo } from "@/lib/types";

interface HumanMouthDemoPanelProps {
  demos: HumanMouthDemo[];
}

export function HumanMouthDemoPanel({ demos }: HumanMouthDemoPanelProps) {
  if (demos.length === 0) {
    return null;
  }

  return (
    <section className="human-demo-panel" aria-label="真人口型示范">
      <div className="demo-panel-heading">
        <div>
          <p className="mode-label">真人口型示范</p>
          <h3>看嘴巴怎么动</h3>
        </div>
        <span>{demos.length} 个占位</span>
      </div>
      <div className="human-demo-list">
        {demos.map((demo) => (
          <HumanMouthDemoCard demo={demo} key={demo.id} />
        ))}
      </div>
    </section>
  );
}
