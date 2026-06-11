"use client";

import { useState } from "react";
import { BossSegmentMap } from "@/components/BossSegmentMap";
import { HumanMouthDemoPanel } from "@/components/HumanMouthDemoPanel";
import { MouthCoachPanel } from "@/components/MouthCoachPanel";
import { PlayablePath } from "@/components/PlayablePath";
import type { HumanMouthDemo, KnowledgeNode, LyricLine, MouthCoachCard } from "@/lib/types";

type PracticeTabId = "lyrics" | "mouth" | "human-demo" | "path";

interface PracticeTabsProps {
  lines: LyricLine[];
  mouthCoachCards: MouthCoachCard[];
  humanDemos: HumanMouthDemo[];
  nodes: KnowledgeNode[];
}

const tabs: Array<{ id: PracticeTabId; label: string; hint: string }> = [
  { id: "lyrics", label: "歌词跟唱", hint: "先看 6 句时间点和 Jyutping" },
  { id: "mouth", label: "口型教练", hint: "逐个处理粤语发音动作" },
  { id: "human-demo", label: "真人示范", hint: "看嘴巴怎么动" },
  { id: "path", label: "通关路径", hint: "7 天清掉 Boss Segment" },
];

export function PracticeTabs({ lines, mouthCoachCards, humanDemos, nodes }: PracticeTabsProps) {
  const [activeTab, setActiveTab] = useState<PracticeTabId>("lyrics");

  return (
    <section className="practice-tabs" aria-labelledby="practice-tabs-title">
      <div className="section-heading">
        <p className="mode-label">练习工具</p>
        <h2 id="practice-tabs-title">一次只打开一个工具</h2>
      </div>
      <div className="tab-list" role="tablist" aria-label="练习工具">
        {tabs.map((tab) => (
          <button
            aria-selected={activeTab === tab.id}
            className={activeTab === tab.id ? "is-active" : ""}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            type="button"
          >
            <span>{tab.label}</span>
            <small>{tab.hint}</small>
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel">
        {activeTab === "lyrics" ? <BossSegmentMap lines={lines} /> : null}
        {activeTab === "mouth" ? <MouthCoachPanel cards={mouthCoachCards} /> : null}
        {activeTab === "human-demo" ? <HumanMouthDemoPanel demos={humanDemos} /> : null}
        {activeTab === "path" ? <PlayablePath nodes={nodes} /> : null}
      </div>
    </section>
  );
}
