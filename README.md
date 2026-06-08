# GL-CantoSong

GL-CantoSong is a GameLearn sub-project for turning Cantonese song learning into a playable path.

The MVP is intentionally not a generic AI singing app, generic Cantonese course, or simple song list. The learner chooses one Boss Song they truly want to sing, then clears the Cantonese knowledge and singing micro-skill nodes needed to conquer it.

Core principle:

> AI is not the product. The path is the product.

## MVP Scope

- Boss Song selection and readiness view.
- Mock Song DNA analysis.
- Playable learning path with locked, active, and cleared nodes.
- Daily challenge panel with lightweight simulated feedback.
- Creator notes that show how AI can scale content without becoming the main product.

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
```

## Verification

Last checked:

- npm install: passed
- npm run typecheck: passed
- npm run build: passed
- npm run lint: passed

## Product Guardrails

- Keep the first screen focused on the learner's chosen Boss Song.
- Treat AI as analysis and content leverage, not the user-facing promise.
- Every lesson should answer: "What does this unlock in the song?"
- Prefer small clearable challenges over passive content.
