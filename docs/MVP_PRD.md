# MVP PRD

## Goal

Build a maintainable MVP that demonstrates the GL-CantoSong loop:

Boss Song -> Song DNA -> playable path -> daily challenge -> final boss attempt.

## Primary User

A Cantonese song learner who has one song they strongly want to sing, but does not know which Cantonese pronunciation, listening, breath, or performance skills are blocking them.

## Core Screens

- Home: combined overview of Boss Song, Song DNA, active daily challenge, and path.
- Boss: song goal and Song DNA detail.
- Path: 14 daily knowledge nodes with clear/active/locked states.
- Challenge: daily drill with simulated feedback, XP, and Boss difficulty reduction.
- Final Boss: placeholder final chorus attempt.

## MVP Features

- Typed Boss Song and path data.
- Mock Song DNA analysis with at least 18 demands for the default Boss Song.
- Mock 14-day Boss Path generation.
- Local interactive path progression.
- Simulated challenge feedback.
- Clear product language that keeps AI behind the curtain.

## Non-Goals

- Real audio recording.
- Real singing score.
- User accounts.
- Song catalog.
- Payment.
- Creator dashboard beyond explanatory copy.

## Success Criteria

- A reviewer can understand the product loop in under one minute.
- The codebase has clear seams for replacing mock AI with real services.
- Future songs can be added through typed data without rewriting components.
