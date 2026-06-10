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

## 3. 教学序列

- `front-slow`：普通话习惯/错误口型 -> 英文近似入口 -> 粤语正确口型。
- `front-rhythm`：粤语正确口型 -> 放回《枪火》节奏。
- 英文近似入口不是标准粤语发音，只是帮助找到接近的口腔动作。

## 4. 单条脚本

### ngo5-front-slow.mp4

- 目标：展示 `我 ngo5` 鼻音起音，不要读成 `wo5`。
- 普通话习惯：`wo`。
- 英文近似入口：`sing` 结尾 `ng`。
- 粤语目标：`我 ngo5`。
- 脚本：`wo`（普通话习惯）-> `sing` 结尾 `ng`，单独哼 `ng` -> `ng-o` 分开 -> `我 ngo5` 慢速三次。
- 验收：能看出起音不是 w，而是先有 ng 鼻音。

### ngo5-front-rhythm.mp4

- 目标：把 `我 ngo5` 放回第 1 / 第 3 句节奏。
- 内容：慢读 `我 ngo5` 一次，再按节奏读短片段。
- 验收：鼻音仍在，节奏不拖。

### dak1-front-slow.mp4

- 目标：展示 -k 入声收尾。
- 普通话习惯：`da-ke / de`。
- 英文近似入口：`duck`。
- 粤语目标：`得 dak1 / 激 gik1`。
- 脚本：`da-ke`（普通话习惯）-> `duck`（英文近似入口）-> `得 dak1`，嘴巴比 duck 收一点，k 只收住 -> `激 gik1` 对比一次。
- 验收：没有多余 `ka` 或拖尾；-k 是收住，不是释放出来。

### dak1-front-rhythm.mp4

- 目标：用 -k 入声帮助 rap 卡点。
- 内容：`得 dak1 / 激 gik1` 节奏读，再放回相关短句节奏。
- 验收：短、准、能卡点。

### jat1-front-slow.mp4

- 目标：展示 -t 入声舌尖收尾。
- 普通话习惯：`yi / bu / fa-te`。
- 英文近似入口：`cat / bat` 的结尾 t。
- 粤语目标：`一 jat1 / 不 bat1 / 发 faat3`。
- 脚本：`yi / bu / fa-te`（普通话习惯）-> `cat / bat` 的结尾 t -> `一 jat1 / 不 bat1 / 发 faat3` 慢速 -> 重复一次，强调 t 停在里面。
- 验收：看得出 -t 是内收，不是普通话尾音。

### jat1-front-rhythm.mp4

- 目标：把 -t 入声放回 rap 节奏。
- 内容：`一 jat1 / 不 bat1 / 发 faat3` 节奏读，再接短句节奏。
- 验收：每个 -t 都干净，不松散。

### gwong-front-slow.mp4

- 目标：展示 `光 gwong1 / 过 gwo3` 的圆唇 gw。
- 普通话习惯：`guang / guo`。
- 英文近似入口：`go / quote` 的圆唇起点。
- 粤语目标：`光 gwong1 / 过 gwo3`。
- 脚本：`guang / guo`（普通话习惯）-> `go / quote` 的圆唇入口 -> `光 gwong1 / 过 gwo3` 慢速 -> 重复一次，强调先圆唇做 gw。
- 验收：能看见圆唇起点，不像普通话 guang/guo。

### gwong-front-rhythm.mp4

- 目标：把圆唇动作放回第 2 / 第 4 句节奏。
- 内容：`光 gwong1 / 过 gwo3` 节奏读，再接短句节奏。
- 验收：圆唇不丢，节奏不拖。

## 5. 文件验收

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

## 6. 拍完后的接入步骤

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

## 7. 本轮不做

- 不拍侧面素材。
- 不生成 poster 图片。
- 不改 demo metadata。
- 不接真实视频路径。
- 不做录音分析。
- 不做 AI 评分。
