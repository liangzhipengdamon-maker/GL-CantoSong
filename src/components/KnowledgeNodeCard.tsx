import type { KnowledgeNode, KnowledgeNodeStatus } from "@/lib/types";

interface KnowledgeNodeCardProps {
  node: KnowledgeNode;
  status: KnowledgeNodeStatus;
  onClear?: () => void;
}

export function KnowledgeNodeCard({ node, status, onClear }: KnowledgeNodeCardProps) {
  const actionLabel = status === "cleared" ? "Cleared" : status === "active" ? "Clear Node" : "Locked";

  return (
    <article className={`path-node is-${status}`}>
      <div className="node-topline">
        <div className="node-number">{node.day}</div>
        <span className="node-status">{status}</span>
      </div>
      <div className="node-type">Day {node.day} · {node.type.replaceAll("-", " ")}</div>
      <h3>{node.title}</h3>
      <p>{node.copy}</p>
      <div className="unlock-line">
        <strong>Unlocks</strong>
        <small>{node.unlocks}</small>
      </div>
      <span className="difficulty-chip">Boss -{node.difficultyReduction}</span>
      <button className="node-button" disabled={status !== "active"} onClick={onClear} type="button">
        {actionLabel}
      </button>
    </article>
  );
}
