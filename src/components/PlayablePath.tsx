"use client";

import { useState } from "react";
import { KnowledgeNodeCard } from "@/components/KnowledgeNodeCard";
import type { KnowledgeNode, KnowledgeNodeStatus } from "@/lib/types";

interface PlayablePathProps {
  nodes: KnowledgeNode[];
  initialCleared?: number;
}

export function PlayablePath({ nodes, initialCleared = 1 }: PlayablePathProps) {
  const [clearedCount, setClearedCount] = useState(initialCleared);

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
          <h2 id="path-title">Unlock the chorus</h2>
        </div>
        <span className="path-count">{Math.min(clearedCount, nodes.length)} / {nodes.length} cleared</span>
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
