# Product Vision

GL-CantoSong turns Cantonese song learning into a playable path.

The product is not a generic AI singing app, a generic Cantonese course, or a song list. The learner chooses one meaningful target and clears the knowledge, pronunciation, rhythm, and performance micro-skills needed to conquer it.

For the current MVP, that target is deliberately small:

```text
枪火｜01:05-01:17｜6句粤语 Rap
```

## Core Belief

> 最紧要好玩

GameLearn's method is:

> Turn a meaningful learning goal into a playable path.

For GL-CantoSong v0.3, the meaningful goal is not "learn Cantonese" or "learn a full song." It is:

> I want to say/sing this 12-second Cantonese rap segment accurately, smoothly, and with HK bite.

## v0.7 Product Flow

v0.7 moves the homepage from an internal showcase into a learner-first product flow:

```text
Song URL intake -> Demo analysis fallback -> Boss Segment -> Practice tools.
```

The intake is intentionally a mock boundary. It detects common source platforms, accepts a pasted link, and then uses the existing `枪火` Demo to show how a learning path would be generated.

v0.7 does not scrape websites, download songs, fetch copyrighted lyrics, embed players, record audio, connect AI scoring, add a backend, or add accounts.

## Product Sentence

> AI is not the product. The path is the product.

AI should support analysis, path generation, feedback, and creator scale. It should not become the headline experience.

## MVP Promise

A learner can:

1. Paste a song link or choose the `枪火` Demo.
2. See the generated Boss Segment fallback.
3. Start today's challenge.
4. Open practice tools progressively through tabs.
5. Reach a final Boss Run for the exact provided excerpt.

The MVP should prove whether a short real target segment feels motivating before the team invests in scoring, audio, backend, or content automation.
