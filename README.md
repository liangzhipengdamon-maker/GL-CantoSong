# GL-CantoSong

GL-CantoSong turns Cantonese song learning into a playable path.

v0.3 pivots to a real learner request: one short Boss Segment from `枪火`.
The goal is not catalog expansion, but proving that a short target segment can generate a focused pronunciation path.

v0.5 prepares a human mouth demo asset pipeline.
The first demos are placeholders until creator-shot videos are added.

Core principle:

> AI is not the product. The path is the product.

## MVP Scope

- Boss Segment target: `枪火｜01:05-01:17｜6句粤语 Rap`.
- Six provided lyric lines with timestamps, Jyutping, and focus tags.
- Segment-specific Song DNA for pronunciation, tone, rhythm, breath, and HK bite.
- MouthCoach cards linked to planned real human mouth demo clips.
- 7-day playable path that progresses line by line into a full Boss Run.
- One daily challenge per path day with mock feedback.
- No extra lyrics, real AI scoring, audio recording, authentication, database, or song catalog.

## Tech Stack

- Next.js App Router
- TypeScript
- React components
- Mock data and mock AI boundary
- CSS in `app/globals.css`

## Structure

```text
app/
  layout.tsx
  page.tsx
  boss/page.tsx
  path/page.tsx
  challenge/page.tsx
  final-boss/page.tsx

src/
  components/
  data/
  lib/

docs/
  PRODUCT_VISION.md
  MVP_PRD.md
  TECH_ARCHITECTURE.md
  CODEX_BRIEF.md
  FILMING_GUIDE_MOUTH_DEMOS.md
```

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Useful checks:

```bash
npm run typecheck
npm run build
npm run lint
```

## Verification

Last checked:

- npm install: passed
- npm run typecheck: passed
- npm run build: passed
- npm run lint: passed

## Product Guardrails

- Keep the first screen focused on the learner's current Boss Segment.
- Treat AI as analysis and content leverage, not the user-facing promise.
- Every lesson should answer: "这一关解锁《枪火》哪一句？"
- Every mouth demo should answer: "这个示范帮助唱准哪一句、哪个音？"
- Prefer short clearable segment challenges over broad song catalog features.
