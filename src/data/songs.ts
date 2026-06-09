import type { BossSong } from "@/lib/types";

export const bossSongs: BossSong[] = [
  {
    id: "gunfire-segment",
    title: "枪火 6句粤语 Rap",
    sourceTitle: "枪火",
    language: "Cantonese",
    timeRange: "01:05-01:17",
    goal: "把 6 句粤语 Rap 唱准、唱顺、唱出港味。",
    readinessBase: 10,
    statusLabel: "当前真实学员任务",
    lines: [
      {
        id: "gunfire-line-01",
        order: 1,
        timestamp: "01:05.06",
        text: "在风中得我一个",
        jyutping: "zoi6 fung1 zung1 dak1 ngo5 jat1 go3",
        focus: ["dak1", "ngo5", "jat1", "go3"],
      },
      {
        id: "gunfire-line-02",
        order: 2,
        timestamp: "01:06.66",
        text: "火光一片穿过",
        jyutping: "fo2 gwong1 jat1 pin3 cyun1 gwo3",
        focus: ["gwong1", "jat1", "cyun1", "gwo3"],
      },
      {
        id: "gunfire-line-03",
        order: 3,
        timestamp: "01:08.42",
        text: "任枪声激发璀璨真我",
        jyutping: "jam6 coeng1 seng1 gik1 faat3 ceoi1 caan3 zan1 ngo5",
        focus: ["jam6", "coeng1", "gik1", "faat3", "ngo5"],
      },
      {
        id: "gunfire-line-04",
        order: 4,
        timestamp: "01:12.60",
        text: "就不应得过且过",
        jyutping: "zau6 bat1 jing1 dak1 gwo3 ce2 gwo3",
        focus: ["zau6", "bat1", "dak1", "ce2"],
      },
      {
        id: "gunfire-line-05",
        order: 5,
        timestamp: "01:14.27",
        text: "扯火顶起撕破",
        jyutping: "ce2 fo2 deng2 hei2 si1 po3",
        focus: ["ce2", "deng2", "hei2", "港式咬字"],
      },
      {
        id: "gunfire-line-06",
        order: 6,
        timestamp: "01:16.47",
        text: "用双手打拼一世枪火",
        jyutping: "jung6 soeng1 sau2 daa2 ping3 jat1 sai3 coeng1 fo2",
        focus: ["jung6", "soeng1", "jat1", "coeng1 fo2"],
      },
    ],
  },
];

export const activeBossSong = bossSongs[0];
