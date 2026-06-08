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
      <div className="node-number">{node.order}</div>
      <div className="node-type">{node.type.replace("-", " ")}</div>
      <h3>{node.title}</h3>
      <p>{node.copy}</p>
      <small>{node.unlocks}</small>
      <button className="node-button" disabled={status !== "active"} onClick={onClear} type="button">
        {actionLabel}
      </button>
    </article>
  );
}
