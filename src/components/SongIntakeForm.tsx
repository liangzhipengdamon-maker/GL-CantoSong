"use client";

import { useState } from "react";
import { mockAnalyzeSongUrl } from "@/lib/song-intake";
import type { MockSongAnalyzeResult } from "@/lib/types";

const platformLabels: Record<MockSongAnalyzeResult["source"]["platform"], string> = {
  youtube: "YouTube",
  bilibili: "B站",
  netease: "网易云音乐",
  qqmusic: "QQ音乐",
  spotify: "Spotify",
  "apple-music": "Apple Music",
  "generic-url": "通用链接",
  "manual-demo": "Demo",
};

export function SongIntakeForm() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<MockSongAnalyzeResult | null>(null);

  function handleAnalyze() {
    setResult(mockAnalyzeSongUrl(url));
  }

  function handleDemo() {
    setUrl("");
    setResult(mockAnalyzeSongUrl(""));
  }

  return (
    <section className="song-intake" aria-labelledby="song-intake-title">
      <div className="section-heading compact">
        <div>
          <p className="mode-label">选择歌曲</p>
          <h2 id="song-intake-title">我要学哪首歌？</h2>
        </div>
        <span className="intake-badge">URL Intake Mock</span>
      </div>
      <div className="intake-grid">
        <label className="intake-field">
          <span>粘贴歌曲链接</span>
          <input
            placeholder="YouTube / B站 / 网易云 / QQ音乐 / 任意歌曲链接"
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </label>
        <div className="intake-actions">
          <button className="primary-action" onClick={handleAnalyze} type="button">
            开始分析
          </button>
          <button className="secondary-action" onClick={handleDemo} type="button">
            直接体验《枪火》Demo
          </button>
        </div>
      </div>
      <p className="intake-disclaimer">不会下载或保存原歌曲。当前版本先用 Demo 跑通流程。</p>
      {result ? (
        <div className="intake-result" aria-live="polite">
          <div>
            <strong>已识别平台</strong>
            <span>{platformLabels[result.source.platform]}</span>
          </div>
          <div>
            <strong>状态</strong>
            <span>{result.source.status}</span>
          </div>
          <p>{result.messageZh}</p>
          <ul>
            {result.limitationsZh.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
