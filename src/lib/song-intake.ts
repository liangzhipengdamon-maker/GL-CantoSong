import type { MockSongAnalyzeResult, SongSourceInput, SongSourcePlatform } from "@/lib/types";

const DEMO_BOSS_SEGMENT_ID = "gunfire-segment";

function normalizeUrl(url: string): string {
  return url.trim();
}

export function detectSongSourcePlatform(url: string): SongSourcePlatform {
  const normalized = normalizeUrl(url).toLowerCase();

  if (!normalized) {
    return "manual-demo";
  }

  if (normalized.includes("youtube.com") || normalized.includes("youtu.be")) {
    return "youtube";
  }

  if (normalized.includes("bilibili.com") || normalized.includes("b23.tv")) {
    return "bilibili";
  }

  if (normalized.includes("music.163.com")) {
    return "netease";
  }

  if (normalized.includes("y.qq.com") || normalized.includes("music.qq.com")) {
    return "qqmusic";
  }

  if (normalized.includes("spotify.com")) {
    return "spotify";
  }

  if (normalized.includes("music.apple.com")) {
    return "apple-music";
  }

  return "generic-url";
}

export function createSongSourceInput(url: string): SongSourceInput {
  const normalized = normalizeUrl(url);
  const platform = detectSongSourcePlatform(normalized);

  return {
    id: `source-${Date.now()}`,
    url: normalized,
    platform,
    status: normalized ? "received" : "idle",
    createdAt: new Date().toISOString(),
  };
}

export function mockAnalyzeSongUrl(url: string): MockSongAnalyzeResult {
  const source = createSongSourceInput(url);

  return {
    source: {
      ...source,
      status: "ready",
      titleHint: source.platform === "manual-demo" ? "《枪火》Demo" : undefined,
    },
    bossSegmentId: DEMO_BOSS_SEGMENT_ID,
    messageZh: source.url
      ? "已接收链接。当前版本先用《枪火》Demo 展示学习路径生成流程。"
      : "已载入《枪火》Demo。当前版本先跑通 Boss Segment 学习流程。",
    limitationsZh: [
      "当前版本不会下载音乐、抓取歌词或解析版权内容。",
      "这是产品流程入口，先用《枪火》Demo 展示分析结果。",
      "原歌曲播放请回到外部平台完成，GL-CantoSong 只承接练习路径。",
    ],
  };
}
