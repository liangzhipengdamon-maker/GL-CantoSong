# MVP PRD

## Goal

Build a maintainable MVP that demonstrates the GL-CantoSong loop:

Boss Segment -> Segment DNA -> playable line path -> daily challenge -> full Boss Run.

The current Boss Segment is `枪火｜01:05-01:17｜6句粤语 Rap`.

## Primary User

A Cantonese rap learner who wants to clear one short real segment, not browse a generic pronunciation course or learn a full song.

## Core Screens

- Home: combined overview of the Boss Segment, six-line map, active daily challenge, and path.
- Boss: segment goal, timestamps, Jyutping, focus tags, and Segment DNA.
- Path: 7 daily nodes with clear/active/locked states.
- Challenge: daily drill with simulated feedback, XP, and Boss difficulty reduction.
- Final Boss: full 6-line Boss Run placeholder.

## MVP Features

- Typed Boss Segment data with six provided lyric lines.
- Segment-specific DNA analysis with 15 pronunciation, rhythm, breath, and expression demands.
- Mock 7-day Boss Segment path generation.
- Local interactive path progression.
- Simulated challenge feedback.
- Clear product language that keeps AI behind the curtain.

## Non-Goals

- Full song lyrics.
- Real audio recording.
- Real singing score.
- User accounts.
- Song catalog.
- Payment.
- Creator dashboard beyond explanatory copy.

## Success Criteria

- A reviewer can understand the 6-line Boss Segment challenge in under one minute.
- Each daily node maps directly to one or more provided lyric lines.
- The codebase has clear seams for replacing mock AI with real services later.
- The MVP validates short-segment learning before catalog expansion.
