# 粤语发音与口型教学深度研究报告

> Project: GL-CantoSong  
> Focus: Cantonese Mouth Coach / 粤语口型教练  
> Current MVP target: 《枪火》01:05-01:17 六句粤语 Rap

## 0. Executive Summary

GL-CantoSong 的核心不应该是“AI 给唱歌打分”，而应该是：

> 把一段用户真正想唱的 Boss Segment，拆成可通关的粤语发音、口型、节奏和表达节点。

针对普通话母语者，粤语歌曲学习的最大难点不是单纯“不会读粤拼”，而是：

1. 口型不同：圆唇、开口度、前后舌位和普通话不同。
2. 韵尾不同：`-p / -t / -k / -m / -n / -ng` 等收尾需要短促、干净。
3. 声母不同：`ng` 起音、`gw / kw` 圆唇声母、`c / z` 与普通话对应不直观。
4. 声调不同：唱歌时旋律会干扰声调，Rap 时节奏又会压缩发音时间。
5. 港味表达：很多粤语歌不是读准就够，还要有咬字质感、节奏卡点和语气。

现有线上教学大多停留在：

```text
汉字 → 粤拼 → 老师示范 → 学生跟读 → 录音对比
```

这对入门有用，但无法精确告诉用户：

```text
你的 ngo5 丢了鼻音。
你的 gwong1 没有先圆唇。
你的 dak1 入声收尾拖成了 da-ke。
你的 coeng1 被普通话 q/ch 化了。
```

因此，GL-CantoSong 应优先做一个轻量但教学有效的 **Mouth Coach**：

```text
Boss Segment
→ 逐句 Jyutping
→ 难点音拆解
→ 口型卡 / 真人示范 / 简单动画
→ 慢速跟读
→ 节奏跟读
→ 整段 Boss Run
```

短期不建议做高成本 3D Avatar 或复杂口型识别。最优先路线是：

```text
真人示范短视频 + 静态/半动态 SVG 口型卡 + Jyutping 发音节点 + 逐句挑战
```

---

## 1. 粤语发音系统难点

### 1.1 声母难点

#### `ng` 起音

普通话用户常把粤语 `ngo5` 读成接近普通话“我 / wo”。粤语里 `我` 是 `ngo5`，需要先有鼻音起音。

教学要点：

```text
先像“嗯”一样从鼻腔起音，再打开到 o。
不要直接从 w/o 开始。
```

适合动画：

```text
鼻音提示 → 舌根轻抬 → 嘴巴打开到 o
```

#### `gw / kw` 圆唇声母

如：

```text
gwong1 光
gwo3 过
```

普通话用户容易读成普通话 `guang / guo`，但粤语的 `gw` 更需要先形成圆唇和后舌位的组合。

教学要点：

```text
先圆唇，再发 g/w 结合音。
不要先发普通话 g 再补一个 u。
```

#### `c / z` 与普通话映射不直观

如：

```text
cyun1 穿
coeng1 枪
ce2 扯
zan1 真
zung1 中
zau6 就
```

普通话用户常见错误：

```text
cyun1 → chuan / quan 化
coeng1 → qiang / chang 化
ce2 → che / qie 化
zau6 → zhou / zao 化
```

教学要点：

```text
不要卷舌。
不要完全套普通话 q/ch/z/zh。
保持粤语更短、更前、更干净的咬字。
```

---

### 1.2 韵母与口型难点

#### 圆唇音

《枪火》片段中高频出现：

```text
fo2 火
gwong1 光
gwo3 过
coeng1 枪
```

普通话用户容易开口过大或口型不够圆。

教学要点：

```text
嘴唇先收圆，声音不要散。
圆唇不是夸张嘟嘴，而是稳定的前口腔形状。
```

#### `eo / oe / eoi` 等粤语特征口型

如：

```text
ceoi1 璀
```

这类音对普通话用户不直观，容易读成普通话 `cui`。

教学要点：

```text
先做前圆唇感，再快速切到目标韵母。
不要直接普通话 cui 化。
```

---

### 1.3 入声韵尾难点

粤语保留 `-p / -t / -k` 入声韵尾，这对普通话用户非常关键。

《枪火》片段中包括：

```text
dak1 得
jat1 一
bat1 不
gik1 激
faat3 发
```

普通话用户常见错误：

```text
dak1 → da-ke
jat1 → ya-te
bat1 → bu-te
gik1 → ji-ke
faat3 → fa-a-te
```

正确方向：

```text
短促、收住、不加尾音。
-k：舌根后部轻收。
-t：舌尖/舌面前部轻收。
-p：双唇闭合收住。
```

教学语言：

```text
不是把尾音唱出来，而是把门关上。
```

动画建议：

```text
开口 → 快速闭合/收住 → 停止，不释放额外元音
```

---

### 1.4 声调与旋律/Rap 的冲突

粤语声调本来就比普通话更细。唱歌或 Rap 时，旋律和节奏会覆盖自然声调，初学者容易出现两种问题：

1. 只跟旋律，粤语声调全散。
2. 过度强调声调，音乐性消失。

《枪火》这类 Rap 片段更适合先用“说唱节奏”训练：

```text
先读准 → 再卡节奏 → 最后半唱半说
```

低调重点：

```text
zoi6 在
jam6 任
zau6 就
jung6 用
```

教学要点：

```text
低调要稳，不要因为节奏兴奋就往上飘。
狠不等于喊，高能不等于升调。
```

---

## 2. 现有线上/AI 发音教学方法对比

### 2.1 线上真人课程

典型流程：

```text
老师讲粤拼
老师示范发音
学生跟读
老师纠错
```

优点：

- 真人示范直观。
- 可以解释口型、舌位、常见错误。
- 适合建立信任。

缺点：

- 不可规模化。
- 学生课后缺少即时反馈。
- 口型细节依赖老师语言描述。
- 内容常按教材顺序，不按用户目标歌曲反推路径。

对 GL-CantoSong 的启发：

```text
真人示范是高价值资产，尤其你本人粤语好、会唱歌、镜头表现好。
但真人教学要被产品化成可复用节点，而不是每次重新讲。
```

---

### 2.2 录音对比型语言 App

典型流程：

```text
播放标准音频
用户录音
显示波形/评分
提示再读一次
```

优点：

- 可规模化。
- 用户能反复练。
- 对节奏和整体相似度有一定帮助。

缺点：

- 波形对普通用户不直观。
- 评分不告诉用户具体错在口型、声母、韵尾还是声调。
- 多数产品不针对粤语入声和声调。

对 GL-CantoSong 的启发：

```text
录音对比可以作为后续增强，但 v1 不应把“分数”当核心。
真正核心是音素级、口型级的可操作纠错。
```

---

### 2.3 AI 口语陪练产品

典型能力：

```text
ASR 识别
发音评分
流利度评分
语法/词汇反馈
AI 角色对话
```

优点：

- 互动强。
- 能降低练习门槛。
- 适合会话语言学习。

缺点：

- 多数面向英语/普通话等大语种。
- 对粤语歌曲、Rap、入声、节奏卡点支持弱。
- avatar 口型常是“看起来在说话”，不是“教学级口型”。

对 GL-CantoSong 的启发：

```text
AI 可以做路径生成、音素诊断和练习反馈。
但用户界面不应是通用聊天机器人，而应是 Boss Segment 的通关教练。
```

---

### 2.4 音素级发音纠错研究方向

理想流程：

```text
用户音频
→ ASR/forced alignment
→ Jyutping/phoneme 对齐
→ 错误音素定位
→ 具体反馈
```

例子：

```text
dak1：-k 没收住
ngo5：ng 起音缺失
gwong1：gw 圆唇不足
coeng1：普通话 q/ch 化
```

这类反馈比 82 分更有价值。

但难点是：

- 粤语 ASR/phoneme alignment 数据资源较少。
- 唱歌/Rap 音频比普通朗读更难对齐。
- 初期没有必要追求完全自动。

阶段性策略：

```text
v0.x：人工预设难点 + 用户自检
v1.x：半自动音频定位 + AI 文本反馈
v2.x：音素级自动诊断
```

---

## 3. 现成口型动画与 Viseme/Lip-sync 技术可行性

### 3.1 Viseme 是什么

Viseme 是“视觉上相近的发音口型集合”。它不是 phoneme 的一一映射。

例如：

```text
多个音在嘴唇外观上可能相同，但舌位和声带动作不同。
```

因此，viseme 适合展示：

```text
嘴巴大概怎么动
```

不适合独立判断：

```text
粤语音是否完全准确
```

---

### 3.2 开源 Lip-sync 工具

常见工具类型：

```text
音频/文本 → phoneme/viseme → 2D/3D 嘴型动画
```

代表方向：

- Papagayo 类 2D lip-sync 工具。
- Rhubarb Lip Sync 类自动嘴型生成工具。
- Blender/Live2D/Spine 等角色动画系统。
- ARKit blendshape / Oculus LipSync / Ready Player Me avatar pipeline。

可用价值：

- 可以生成“嘴巴在动”的动画。
- 适合卡通老师、虚拟口型演示。
- 可用于增加趣味性。

局限：

- 多数不是粤语专用。
- 不懂 Jyutping。
- 不懂入声韵尾教学。
- 不懂普通话用户的典型错误。
- 自动 lip-sync 的目标是“自然”，不是“教学清晰”。

结论：

```text
可以借鉴 viseme/lip-sync，但不应直接依赖现成工具作为核心教学。
GL-CantoSong 需要自己的 Cantonese Teaching Viseme Layer。
```

---

### 3.3 3D Avatar / AI Talking Head

优势：

- 视觉吸引力强。
- 适合营销。
- 可以做虚拟老师。

问题：

- 成本高。
- 教学精度不一定高。
- 很容易变成“炫技 AI 产品”，偏离路径设计。
- 真实嘴型还涉及舌位、腔体和声调，普通 3D avatar 很难准确展示。

建议：

```text
v1 之前不做高成本 3D avatar。
如果做，也应作为展示层，不是教学核心。
```

---

## 4. 分阶段产品落地方案

### v0.3：Boss Segment + Jyutping + 难点标签

目标：先让真实朋友能练《枪火》这 6 句。

功能：

```text
六句歌词地图
每句 Jyutping
重点音标签
7 天逐句路径
每日挑战
Boss Run checklist
```

不做：

```text
真实录音评分
3D 口型动画
登录/数据库
完整歌曲库
```

---

### v0.4：MouthCoachCard

加入口型教学卡片。

每张卡包括：

```text
目标音
汉字例子
Jyutping
嘴型提示
舌位提示
常见错误
练习步骤
解锁哪一句歌词
```

优先做这些音：

```text
ngo5
gwong1 / gwo3
cyun1 / coeng1
dak1 / jat1 / bat1 / gik1
faat3
ceoi1 caan3
```

---

### v0.5：SVG 半动态口型

用 SVG/Canvas 做 8-10 个基础教学口型：

```text
neutral
open-aa
round-o
round-u
wide-i
closed-p/b/m
front-c/z
nasal-ng
stop-t
stop-k
```

示例映射：

```text
dak1 = d onset → open-a → stop-k
gwong1 = round lips → gw onset → ong → ng
ngo5 = nasal-ng → o vowel
jat1 = j onset → a → stop-t
```

注意：这是 teaching animation，不是影视级 lip-sync。

---

### v0.6：真人示范素材库

你本人录制短视频：

```text
正面口型
侧面口型
慢速读
节奏读
半唱半说
原速示范
```

每个难点音 5-8 秒即可。

优先级高于 3D avatar，因为真人更有信任感，也更符合“会唱歌、粤语好、颜值高”的个人优势。

---

### v1.0：音频反馈与半自动纠错

基础流程：

```text
用户录音
→ 对齐到目标句
→ 检测节奏/时长/明显漏音
→ 结合预设难点生成反馈
```

先做粗反馈：

```text
这一遍节奏偏慢
dak1 / jat1 入声可能拖长
ngo5 开头可能不明显
```

不要一开始追求 100% 音素准确率。

---

## 5. 《枪火》01:05-01:17 逐句发音与口型拆解

> 注：仅使用用户提供的 6 句片段，不添加完整歌词。

### Line 1

```text
01:05.06 在风中得我一个
zoi6 fung1 zung1 dak1 ngo5 jat1 go3
```

关键难点：

- `zoi6`：低调，不要上扬。
- `fung1 / zung1`：`-ng` 收尾要清楚。
- `dak1`：`-k` 入声，短促收住。
- `ngo5`：鼻音起音，不要读成普通话 wo。
- `jat1`：`-t` 入声，不要加尾音。
- `go3`：圆唇，别变成普通话“锅”。

口型训练：

```text
ngo5：先“嗯”再打开到 o。
dak1：a 后舌根轻关门，不要 da-ke。
jat1：a 后前部收住，不要 ya-te。
```

---

### Line 2

```text
01:06.66 火光一片穿过
fo2 gwong1 jat1 pin3 cyun1 gwo3
```

关键难点：

- `fo2`：圆唇。
- `gwong1`：先圆唇再发 gw。
- `jat1`：入声 -t。
- `cyun1`：不要普通话 chuan / quan 化。
- `gwo3`：保持圆唇与短促收束。

口型训练：

```text
gwong1：圆唇 → g/w → ong。
cyun1：舌位靠前，送气，但不要卷舌。
```

---

### Line 3

```text
01:08.42 任枪声激发璀璨真我
jam6 coeng1 seng1 gik1 faat3 ceoi1 caan3 zan1 ngo5
```

关键难点：

- `jam6`：低调开头。
- `coeng1`：不要读成普通话 qiang/chang。
- `seng1`：`-ng` 收尾。
- `gik1`：`-k` 入声，短促。
- `faat3`：开口 `aa`，`-t` 收住。
- `ceoi1 caan3`：口型切换快。
- `ngo5`：鼻音起音。

口型训练：

```text
gik1：i 后快速舌根收住。
faat3：嘴打开，但尾巴立即关门。
ceoi1 → caan3：从前圆唇快速打开到 aa。
```

---

### Line 4

```text
01:12.60 就不应得过且过
zau6 bat1 jing1 dak1 gwo3 ce2 gwo3
```

关键难点：

- `zau6`：低调，不要唱高。
- `bat1`：`-t` 入声。
- `jing1`：`j` 与 `-ng`。
- `dak1`：`-k` 入声。
- `gwo3`：圆唇重复保持一致。
- `ce2`：不要普通话 qie / che 化。

口型训练：

```text
bat1 / dak1：两个入声一个 -t，一个 -k，要区分收尾位置。
gwo3：每次都先圆唇，不要后面越读越散。
```

---

### Line 5

```text
01:14.27 扯火顶起撕破
ce2 fo2 deng2 hei2 si1 po3
```

关键难点：

- `ce2`：短、前、不要卷舌。
- `fo2`：圆唇。
- `deng2`：`-ng` 收尾。
- `hei2`：气息轻，但不要漏音。
- `si1`：保持细窄口型。
- `po3`：双唇爆破但不要喊。

表达重点：

```text
这句要“顶起来”，但不是靠喉咙喊。
要靠节奏、咬字和重音。
```

---

### Line 6

```text
01:16.47 用双手打拼一世枪火
jung6 soeng1 sau2 daa2 ping3 jat1 sai3 coeng1 fo2
```

关键难点：

- `jung6`：低调 + `-ng`。
- `soeng1`：圆唇/双元音质感。
- `sau2`：收得轻。
- `daa2`：开口稳定。
- `ping3`：`p` 起音 + `-ng` 收尾。
- `jat1`：入声 -t。
- `sai3`：不要普通话 sai 过扁。
- `coeng1`：枪，不要 qiang/chang 化。
- `fo2`：圆唇收尾。

表达重点：

```text
最后一句是推进句，要有气势，但每个字仍然要清楚。
```

---

## 6. MouthCoach 组件设计

### 6.1 TypeScript 接口草案

```ts
export type MouthShapeType =
  | "neutral"
  | "open-aa"
  | "round-o"
  | "round-u"
  | "wide-i"
  | "closed-pbm"
  | "front-cz"
  | "nasal-ng"
  | "stop-t"
  | "stop-k";

export interface MouthCoachCard {
  id: string;
  bossSegmentId: string;
  targetText: string;
  jyutping: string;
  targetSound: string;
  mouthShape: MouthShapeType[];
  mouthCueZh: string;
  tongueCueZh?: string;
  breathCueZh?: string;
  commonMistakeZh: string;
  correctionCueZh: string;
  practiceStepsZh: string[];
  lyricLineIds: string[];
  unlocksZh: string;
}
```

### 6.2 示例数据

```ts
export const mouthCoachCards: MouthCoachCard[] = [
  {
    id: "mc-ngo5",
    bossSegmentId: "gunfire-segment",
    targetText: "我",
    jyutping: "ngo5",
    targetSound: "ng onset",
    mouthShape: ["nasal-ng", "round-o"],
    mouthCueZh: "先从鼻腔起音，像轻轻说“嗯”，再打开到 o。",
    tongueCueZh: "舌根轻轻抬起，不要从 w 开始。",
    commonMistakeZh: "直接读成普通话“我/wo”，ng 起音消失。",
    correctionCueZh: "先练 ng，再接 o：ng-o，ngo5。",
    practiceStepsZh: ["闭口哼 ng", "打开到 o", "读 ngo5", "放回歌词"],
    lyricLineIds: ["line-1", "line-3"],
    unlocksZh: "解决“得我一个 / 真我”的港味起音。",
  },
];
```

---

## 7. 技术路线图

### v0.3：Gunfire Boss Segment

- 默认目标改为《枪火》01:05-01:17。
- 展示 6 句歌词、时间戳、Jyutping。
- 7 天逐句路径。
- 每天一个挑战。
- Boss Run checklist。

### v0.4：MouthCoachCard

- 增加口型卡数据结构。
- 为《枪火》高频难点建立 8-12 张口型卡。
- 每个挑战关联 1-3 张口型卡。
- 中文优先展示。

### v0.5：SVG Mouth Animation

- 实现简单 SVG 嘴型组件。
- 支持 `MouthShapeType` 序列播放。
- 不追求自然 lip-sync，追求教学清楚。

### v0.6：真人示范视频

- 为每个难点音录制短视频。
- 支持正面/侧面/慢速/原速。
- 建立 creator asset workflow。

### v0.8：录音与自评

- 用户录音。
- 手动/半自动播放对比。
- 提供节奏、入声、鼻音、圆唇自检表。

### v1.0：AI Assisted Feedback

- 接入 Cantonese ASR / forced alignment。
- 对齐到具体 lyric line。
- 结合预设 MouthCoach 节点生成反馈。
- 不只给分数，而是输出可执行建议。

---

## 8. 推荐下一步工程任务

### Task 1: Add MouthCoach data model

```text
Add MouthCoachCard type and mouthCoachCards data for gunfire-segment.
```

### Task 2: Add MouthCoachCard component

```text
Create a UI card showing target sound, mouth cue, common mistake, correction cue, and practice steps.
```

### Task 3: Link MouthCoach to daily challenges

```text
Each daily challenge should surface relevant mouth coach cards.
```

### Task 4: Add simple SVG mouth shapes

```text
Implement a non-realistic teaching animation for ng, round-o, stop-t, stop-k.
```

---

## 9. Final Product Judgment

GL-CantoSong 的真正差异化不是：

```text
AI 唱歌评分
```

而是：

```text
把用户想唱的一段粤语歌，拆成可通关的发音与口型节点。
```

对《枪火》这 6 句而言，第一版最有价值的界面不是一个分数，而是：

```text
这句怎么读
嘴巴怎么动
哪里最容易普通话化
我今天通关了哪个音
这个音解锁了哪一句 Boss Segment
```

这就是 GameLearn 在粤语歌学习里的落点。
