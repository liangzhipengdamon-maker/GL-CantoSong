# P0 真人口型素材拍摄清单

目标：先拍最小 8 条正面真人口型素材，验证真实口型 demo 是否明显增强《枪火》Boss Segment 的学习体验。

本清单不要求新增功能、不接 AI、不做上传/存储。拍完后把文件放进 `public/demos/gunfire/`，下一轮再把 `videoSrc` 接入 metadata。

## 1. 输出文件

拍摄并导出以下 8 个 mp4：

```text
public/demos/gunfire/
  ngo5-front-slow.mp4
  ngo5-front-rhythm.mp4
  dak1-front-slow.mp4
  dak1-front-rhythm.mp4
  jat1-front-slow.mp4
  jat1-front-rhythm.mp4
  gwong-front-slow.mp4
  gwong-front-rhythm.mp4
```

对应 MouthCoach 卡：

| 文件 | MouthCoach card | 解锁 |
| --- | --- | --- |
| `ngo5-front-slow.mp4` | `mc-ngo5` | 第 1 / 第 3 句的 `我 ngo5` |
| `ngo5-front-rhythm.mp4` | `mc-ngo5` | 第 1 / 第 3 句的 `我 ngo5` |
| `dak1-front-slow.mp4` | `mc-final-k` | `得 dak1 / 激 gik1` 的 -k 入声 |
| `dak1-front-rhythm.mp4` | `mc-final-k` | `得 dak1 / 激 gik1` 的 -k 入声 |
| `jat1-front-slow.mp4` | `mc-final-t` | `一 jat1 / 不 bat1 / 发 faat3` 的 -t 入声 |
| `jat1-front-rhythm.mp4` | `mc-final-t` | `一 jat1 / 不 bat1 / 发 faat3` 的 -t 入声 |
| `gwong-front-slow.mp4` | `mc-gwong-gwo` | `光 gwong1 / 过 gwo3` 的圆唇 gw |
| `gwong-front-rhythm.mp4` | `mc-gwong-gwo` | `光 gwong1 / 过 gwo3` 的圆唇 gw |

## 2. 统一拍摄规格

- 竖屏 9:16。
- 正面近景，嘴巴和下半脸清楚可见。
- 手机固定机位即可。
- 柔和正面光，背景干净。
- 安静房间，声音清楚。
- 每条 4-8 秒。
- 不讲长课，只示范一个动作。
- 示范要清楚，不要夸张。
- 不要喊，港味来自咬字、节奏和气场。

## 3. 单条脚本

### ngo5-front-slow.mp4

- 目标：展示 `我 ngo5` 鼻音起音，不要读成 `wo5`。
- 内容：`ng-o` 分开一次，`我 ngo5` 慢速三次。
- 动作顺序：闭口鼻音 -> 打开到 o -> 连成 `我 ngo5`。
- 验收：能看出嘴巴不是从 w 开始。

### ngo5-front-rhythm.mp4

- 目标：把 `我 ngo5` 放回第 1 / 第 3 句节奏。
- 内容：慢读 `我 ngo5` 一次，再按节奏读短片段。
- 验收：鼻音仍在，节奏不拖。

### dak1-front-slow.mp4

- 目标：展示 -k 入声收尾。
- 内容：`得 dak1` 慢速三次，可补 `激 gik1` 一次对比。
- 动作顺序：开口 -> 后舌根收住 -> 立刻停。
- 验收：没有多余 `ka` 或拖尾。

### dak1-front-rhythm.mp4

- 目标：用 -k 入声帮助 rap 卡点。
- 内容：`得 dak1 / 激 gik1` 节奏读，再放回相关短句节奏。
- 验收：短、准、能卡点。

### jat1-front-slow.mp4

- 目标：展示 -t 入声舌尖收尾。
- 内容：`一 jat1 / 不 bat1 / 发 faat3` 慢速读。
- 动作顺序：舌尖收住 -> 停在里面 -> 不弹出 te。
- 验收：看得出 -t 是内收，不是普通话尾音。

### jat1-front-rhythm.mp4

- 目标：把 -t 入声放回 rap 节奏。
- 内容：`一 jat1 / 不 bat1 / 发 faat3` 节奏读，再接短句节奏。
- 验收：每个 -t 都干净，不松散。

### gwong-front-slow.mp4

- 目标：展示 `光 gwong1 / 过 gwo3` 的圆唇 gw。
- 内容：`光 gwong1` 慢速三次，`过 gwo3` 慢速三次。
- 动作顺序：先圆唇做 gw -> 再打开到主元音。
- 验收：能看见圆唇起点，不像普通话 guang/guo。

### gwong-front-rhythm.mp4

- 目标：把圆唇动作放回第 2 / 第 4 句节奏。
- 内容：`光 gwong1 / 过 gwo3` 节奏读，再接短句节奏。
- 验收：圆唇不丢，节奏不拖。

## 4. 文件验收

每个文件必须满足：

- 文件名完全匹配本清单。
- mp4 格式。
- 4-8 秒。
- 画面不糊。
- 嘴巴无遮挡。
- 声音可听清。
- 没有长讲解。
- 没有加入《枪火》以外的歌词。
- 每条只服务一个口型/音点。

## 5. 拍完后的接入步骤

1. 把 8 个 mp4 放到：

```text
public/demos/gunfire/
```

2. 下一轮更新 `src/data/human-mouth-demos.ts` 的 `videoSrc`，例如：

```ts
videoSrc: "/demos/gunfire/ngo5-front-slow.mp4"
```

3. 运行：

```bash
npm run typecheck
npm run build
npm run lint
```

## 6. 本轮不做

- 不拍侧面素材。
- 不生成 poster 图片。
- 不改 demo metadata。
- 不接真实视频路径。
- 不做录音分析。
- 不做 AI 评分。
