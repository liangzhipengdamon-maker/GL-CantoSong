# Codex Brief

## Product Rule

Do not turn GL-CantoSong into a generic AI singing app or song catalog.

The current product is the playable path from one real Boss Segment to a clearable 6-line Boss Run.

## Current Implementation

- Next.js + TypeScript MVP.
- Routes under `app/`.
- Reusable components under `src/components/`.
- Typed mock segment data under `src/data/`.
- Placeholder human mouth demo metadata under `src/data/human-mouth-demos.ts`.
- Mock AI/scoring layer under `src/lib/mock-ai.ts`.

## Current Boss Segment

```text
枪火｜01:05-01:17｜6句粤语 Rap
```

Only use the provided excerpt. Do not fetch, copy, or add more lyrics.

## Work Principles

- Keep AI lightweight and mockable until the path is compelling.
- Every new lesson or node must state which provided line it unlocks.
- Every mouth demo must state which sound and lyric line it helps clear.
- Prefer one short Boss Segment done well over full-song or multi-song expansion.
- Add backend or scoring only behind stable typed interfaces.

## Suggested Next Tasks

1. Shoot P0 mouth demos from `docs/FILMING_GUIDE_MOUTH_DEMOS.md`.
2. Wire published demo file paths into `human-mouth-demos.ts`.
3. Persist path progress locally.
4. Add a retry flow for the weakest line after Day 7.
