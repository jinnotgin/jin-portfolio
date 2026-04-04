# Project Instructions for Codex

This file defines the default workflow for agentic work in this repository.

## Norms

- `MUST`: required.
- `SHOULD`: strong default unless user directs otherwise.
- `MAY`: optional.

## Effort Folder and Required Docs

- `MUST` create one effort folder under `.work-plans/` named `YYMMDD-short-effort-name`.
- `MUST` maintain:
  - `01_scope.md`
  - `02_implementation-plan.md`
  - `03_progress-log.md`
- `SHOULD` add `04_release-notes.md` when preparing to ship.
- `MAY` add extra run notes/docs as needed.

Initialize new efforts from:

- `.work-plans/_templates/01_scope.md`
- `.work-plans/_templates/02_implementation-plan.md`
- `.work-plans/_templates/03_progress-log.md`
- `.work-plans/_templates/04_release-notes.md`

If an existing effort uses non-numbered docs (for example `TODO.md` or `todo.md`), keep them unless the user requests renaming.

## Required Workflow (Gated)

For all coding efforts (including small ones), complete this order:

1. Discovery pass: read relevant files/config/history.
2. Requirements gathering: ask focused clarifications for missing context.
3. Draft `01_scope.md` and `02_implementation-plan.md` together.
4. Get user review/approval on both documents together; incorporate feedback.
5. Begin implementation.

Rules:

- `MUST NOT` start code edits before scope + implementation plan are review-complete.
- If an agent believes a request is simple and wants to code immediately, the agent `MUST` ask for explicit user approval first.

## Doc Content Minimums

`01_scope.md` `MUST` include:

1. Metadata (date, owner, effort folder)
2. Problem statement and why now
3. Scope (in/out)
4. Requirements (functional/non-functional)
5. Acceptance criteria
6. Gherkin scenarios aligned to acceptance criteria
7. Open questions and assumptions
8. Explicit user review/approval status

`02_implementation-plan.md` `MUST` include:

1. Metadata (date, owner, effort folder)
2. Summary and current state
3. Scope alignment with `01_scope.md`
4. Risks and mitigations
5. Phased execution strategy with exit criteria
6. Target files, validation plan, assumptions/defaults
7. Explicit user review/approval status

`03_progress-log.md` `MUST` include:

1. Date sections with timestamped entries
2. What changed, touched files, and command outcomes
3. Scope/decision changes driven by user feedback

## Execution Expectations

- `MUST` keep scope tight; avoid unrelated refactors.
- `MUST` keep `01_scope.md` and `02_implementation-plan.md` current before editing code (unless user approves an immediate coding fast path).
- `MUST` append `03_progress-log.md` at meaningful checkpoints.
- `MUST` run build checks frequently and record outcomes.
- `MUST` fix regressions first, then update docs.

## Documentation Style

- `SHOULD` be concise and concrete.
- `SHOULD` use repo-relative paths.
- `SHOULD` prefer timestamped logs for traceability.
- `SHOULD` prefer short sections/checklists over long prose.

## Release Output

When preparing to ship, update `.work-plans/<YYMMDD-short-effort-name>/04_release-notes.md`.

### Commit Message

Title format:

`<type>(<scope>): <what changed>`

Rules:

1. Keep title outcome-focused and about <=72 chars.
2. Avoid vague phrasing (for example, "update stuff").
3. Pick best type:
   - `feat`: user-facing behavior/capability
   - `fix`: bug/regression correction
   - `refactor`: internal change with no behavior change
   - `chore`: tooling, dependency, or docs-only maintenance

Body `SHOULD` cover:

1. Why the change was needed.
2. What changed (key points).
3. Risk/impact notes, if relevant.

Example:

`fix(costing): align Claude Opus 4.6 pricing with backend`
`Corrects frontend token pricing constants so estimate and breakdown match backend billing behavior.`
`Updates model cost map and related validation paths; no UI flow changes expected.`

### Changelog Item

- `MUST` be user-facing (not engineering-internal).
- `MUST` be 1-2 short sentences.
- `MUST` describe user-visible improvement and caveats/impact when relevant.
- `SHOULD` avoid file paths, package names, and implementation detail unless user-visible behavior depends on it.

Good pattern:

`Updated Claude Opus pricing calculations so token cost estimates are now more accurate and consistent across generation flows. No action is required from users.`
