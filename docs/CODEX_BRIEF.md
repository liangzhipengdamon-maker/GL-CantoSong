# Codex Brief

## Product Rule

Do not turn GL-CantoSong into a generic AI singing app.

The product is the playable path from one desired Boss Song to a clearable chorus attempt.

## Current Implementation

- Next.js + TypeScript MVP.
- Routes under `app/`.
- Reusable components under `src/components/`.
- Typed mock data under `src/data/`.
- Mock AI/scoring layer under `src/lib/mock-ai.ts`.

## Work Principles

- Keep AI lightweight and mockable until the path is compelling.
- Every new lesson or node must state what it unlocks in the song.
- Prefer one Boss Song done well over a broad song catalog.
- Add backend or scoring only behind stable typed interfaces.

## Suggested Next Tasks

1. Add a song selection flow with 2-3 curated Boss Songs.
2. Persist path progress locally.
3. Add a recording placeholder component for the challenge and final boss routes.
4. Expand `mock-ai.ts` into an interface that can support real providers later.
