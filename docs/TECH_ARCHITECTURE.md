# Technical Architecture

## Stack

- Next.js App Router for routes.
- TypeScript for domain models and component contracts.
- React client components only where interaction is needed.
- Mock data in `src/data`.
- Mock AI boundary in `src/lib/mock-ai.ts`.

## Route Map

```text
/             MVP overview
/boss         Boss Segment and Segment DNA
/path         7-day playable line path
/challenge    Daily challenge and simulated feedback
/final-boss   Full 6-line Boss Run placeholder
```

## Data Model

Domain types live in `src/lib/types.ts`:

- `BossSong`
- `LyricLine`
- `SongDNAItem`
- `KnowledgeNode`
- `DailyChallenge`
- `MouthCoachCard`
- `HumanMouthDemo`
- `FeedbackSignal`
- `MockAIAnalysis`

## Human Mouth Demo Assets

v0.5 adds a local placeholder asset system for creator-shot mouth demos:

- Metadata lives in `src/data/human-mouth-demos.ts`.
- MouthCoach cards live in `src/data/mouth-coach-cards.ts`.
- Lookup helpers live in `src/lib/demo-assets.ts`.
- UI slots live in `HumanMouthDemoCard`, `HumanMouthDemoPanel`, `MouthCoachCard`, and `MouthCoachPanel`.
- Placeholder asset folders live under `public/demos/gunfire/` and `public/posters/gunfire/`.

No upload backend, cloud storage, authentication, database, recording analysis, or AI scoring is included.

## Mock AI Boundary

`src/lib/mock-ai.ts` owns the current fake intelligence layer:

- `analyzeBossSong`
- `generateBossPath`
- `getDailyChallenge`
- `getActiveNode`
- `calculateReadiness`
- `calculateBossDifficulty`
- `simulateChallengeFeedback`

Future backend services should replace this module first, not the component tree.

## Future Backend Extension

Likely service boundaries:

- Segment ingestion and rights-safe metadata.
- Excerpt, rhythm, and pronunciation analysis.
- Cantonese pronunciation and tone extraction.
- Path generation.
- Human mouth demo asset publishing.
- Audio attempt upload.
- Lightweight scoring and teacher review.

The MVP avoids these dependencies so the team can validate the path experience first.
