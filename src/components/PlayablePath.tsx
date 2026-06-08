"use client";

import { useState } from "react";
import { KnowledgeNodeCard } from "@/components/KnowledgeNodeCard";
import type { KnowledgeNode, KnowledgeNodeStatus } from "@/lib/types";
import { calculateBossDifficulty } from "@/lib/mock-ai";

interface PlayablePathProps {
  nodes: KnowledgeNode[];
  initialCleared?: number;
}

export function PlayablePath({ nodes, initialCleared = 1 }: PlayablePathProps) {
  const [clearedCount, setClearedCount] = useState(initialCleared);
  const cappedCleared = Math.min(clearedCount, nodes.length);
  const bossDifficulty = calculateBossDifficulty(cappedCleared, nodes);

  function getStatus(index: number): KnowledgeNodeStatus {
    if (index < clearedCount) {
      return "cleared";
    }

    return index === clearedCount ? "active" : "locked";
  }

  return (
    <section className="path-section" aria-labelledby="path-title">
      <div className="section-heading compact">
        <div>
          <p className="mode-label">Playable Path</p>
          <h2 id="path-title">14-day Boss Path</h2>
        </div>
        <div className="path-metrics" aria-label={`${cappedCleared} of ${nodes.length} days cleared`}>
          <span>{cappedCleared} / {nodes.length} days</span>
          <span>Boss difficulty {bossDifficulty}</span>
        </div>
      </div>
      <div className="day-progress" aria-hidden="true">
        {nodes.map((node, index) => (
          <span className={getStatus(index)} key={node.id} />
        ))}
      </div>
      <div className="path-track" aria-live="polite">
        {nodes.map((node, index) => (
          <KnowledgeNodeCard
            key={node.id}
            node={node}
            status={getStatus(index)}
            onClear={() => setClearedCount((current) => Math.min(current + 1, nodes.length))}
          />
        ))}
      </div>
    </section>
  );
}
