# Implementation Plan

## Metadata

- Date: 2026-04-04
- Owner: Codex
- Effort folder: `.work-plans/260404-vue3-spa-migration`

## Summary And Current State

Discovery is complete and scope is approved. The current application is a small Create React App portfolio with:

- Legacy React and CRA tooling
- Two core route surfaces: home and project detail
- Global CSS styling
- Static images plus JSON-driven project content
- A small enough footprint to support a clean parallel Vue migration inside a subfolder

The current code concentrates most behavior in a small number of files:

- `src/App.js` for routing, data fetch, home composition, and project route composition
- `src/nav/Nav.js` for global navigation and logo animation
- `src/project/Project.js` for project rendering helpers and CRA-specific image loading
- `public/static/data/projects.json` for project content and ordering

The React app is currently not runnable in this workspace because `npm run build` fails without installed `react-scripts`, so migration validation will focus on the new Vue app once scaffolded.

## Scope Alignment With Approved `01_scope.md`

- Implementation target:
  - Archive original root React app into `archived/`
  - Promote `apps/portfolio-vue/` contents into the repository root
- Architectural target: plain Vue 3 SPA using Vite
- Styling target: port and adapt the legacy CSS into the Vue app as the primary styling layer
- Migration style: like-for-like behavior and structure, avoiding redesign and avoiding broad schema changes
- Preservation goals:
  - Preserve route structure intent
  - Preserve project ordering and content
  - Preserve home, work, project, and contact flows
  - Preserve the current React app as an archived reference after migration
  - Preserve the legacy look much more closely than the current Tailwind-based implementation does

## Risks And Mitigations

- Risk: The current Tailwind-based Vue implementation already diverged visually from the legacy app.
  - Mitigation: Remove Tailwind dependence from component styling and port the original CSS files/class structure into Vue components wherever practical.
- Risk: `svg-morpheus` may not integrate cleanly with Vue 3 + Vite.
  - Mitigation: Attempt compatibility first; if unstable, replace with a simpler non-library SVG animation while preserving the overall nav feel.
- Risk: CRA-specific image loading via `require.context` does not transfer directly.
  - Mitigation: Replace it with `import.meta.glob` or direct static imports in the Vue app.
- Risk: Existing route behavior mixes hash scrolling and route navigation.
  - Mitigation: Centralize route and scroll handling with Vue Router plus explicit section-anchor logic.
- Risk: Keeping both apps in one repo can create confusion around install/build commands.
  - Mitigation: Isolate the Vue app under `apps/portfolio-vue/` with its own `package.json` and explicit README notes if needed.
- Risk: Moving the root app and `node_modules` directories can create an inconsistent working tree if done in the wrong order.
  - Mitigation: Move the legacy root app into `archived/` first, then promote Vue files to root, then validate root install/build commands.
- Risk: Archived dependencies may be large and unnecessary for version control.
  - Mitigation: Honor the user request to move them, but preserve `.gitignore` behavior and avoid adding unrelated cleanup unless requested.

## Phased Execution Strategy With Exit Criteria

### Phase 0: Scaffold the Vue app

- Exit criteria:
  - `apps/portfolio-vue/` exists with Vue 3, Vite, and Tailwind configured
  - The app starts successfully
  - Base folder structure for routes, components, assets, and content is in place

### Phase 1: Port content and shared foundations

- Exit criteria:
  - Project data is available in the Vue app
  - Static image asset access works in Vite
  - Base app shell and legacy global CSS foundations are in place

### Phase 2: Rebuild primary routes

- Exit criteria:
  - Home route is implemented with hero, featured work, additional work, and contact sections
  - Project detail route is implemented and renders content blocks from the existing data model
  - Previous/next project navigation works

### Phase 3: Restore behavior parity

- Exit criteria:
  - Work and Contact navigation scrolling works
  - Project-page-to-home Work navigation works
  - Document titles are set appropriately
  - Error/fallback project state is handled

### Phase 4: Validation and cleanup

- Exit criteria:
  - Root Vue app production build passes
  - Basic tests or smoke checks are added and passing
  - Old app is present under `archived/`
  - Effort docs and progress log are up to date

### Phase 4A: Styling parity correction

- Exit criteria:
  - Tailwind-first visual drift is removed
  - Legacy CSS files or their direct adaptations are applied in the Vue app
  - Home page presentation is substantially closer to the archived React version
  - Section-level regressions from the Tailwind rewrite are corrected before further cleanup

### Phase 5: Repository reorganization

- Exit criteria:
  - Original React app files are moved under `archived/`
  - Vue app files are promoted to repository root
  - Root `package.json` and lockfile correspond to the Vue app
  - Root application build succeeds after the move

## Target Files, Validation Plan, Assumptions, Defaults

### Target Files

- New Vue app root:
  - `package.json`
  - `vite.config.*`
  - `index.html`
- Vue app source:
  - `src/main.ts` or `main.js`
  - `src/App.vue`
  - `src/router/index.ts` or `index.js`
  - `src/pages/HomePage.vue`
  - `src/pages/ProjectPage.vue`
  - `src/components/*`
  - `src/assets/*`
  - `src/content/*` or `public/*`
- Supporting config:
  - `tailwind.config.*` only if still retained for non-primary use
  - `postcss.config.*` only if still required
- Archive target:
  - `archived/package.json`
  - `archived/package-lock.json`
  - `archived/src/*`
  - `archived/public/*`
  - `archived/node_modules/*` if present at root before the move
  - `archived/legacy-app/*` only if a nested container is needed during execution
- Effort docs:
  - `.work-plans/260404-vue3-spa-migration/03_progress-log.md`
  - `.work-plans/260404-vue3-spa-migration/04_release-notes.md` if preparing to ship

### File Mapping Defaults

- Legacy React root files will be moved under `archived/`
- Vue files currently under `apps/portfolio-vue/` will be promoted to root
- `public/static/data/projects.json` remains part of the Vue app content path after final promotion
- Original CSS files in the archived React app are the primary styling source for parity correction

### Validation Plan

- Install and run the Vue app locally
- Run the root Vue production build
- Verify route behavior manually:
  - `/`
  - `/project/:slug` or equivalent route shape chosen during implementation
- Verify content parity manually against the existing React source
- Verify image rendering and project order
- Verify Work and Contact scroll behavior
- Verify the archive folder contains the former React app contents
- Compare the Vue home page visually against the archived legacy app and correct typography/spacing/color regressions
- If practical, add a lightweight test covering route rendering or critical content rendering

### Assumptions And Defaults

- Default archive target is `archived/`
- Default language choice is TypeScript if the Vue scaffold supports it cleanly; otherwise JavaScript is acceptable to keep parity work moving
- Vue Composition API with `<script setup>` is the default component style
- Vue Router route shape may be modernized to `/project/:slug` while preserving visible behavior
- Existing content text may remain unchanged except for migration-driven fixes
- Existing React source will be archived rather than deleted
- Existing `node_modules` directories will be moved only as explicitly requested by the user
- Tailwind may be removed or reduced if it continues to impede visual parity

## User Review And Approval Status

- Status: Approved
- Approved by user on: 2026-04-04
- Notes: Original implementation plan and archive/promote update were previously approved. The later styling correction update to use legacy-CSS carryover was also approved before implementation resumed.
