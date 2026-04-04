# Scope

## Metadata

- Date: 2026-04-04
- Owner: Codex
- Effort folder: `.work-plans/260404-vue3-spa-migration`

## Problem Statement And Why Now

The current portfolio site is built on an older Create React App stack with React 16, React Router 4, class components, and global CSS. The user wants a like-for-like migration into a Vue 3 SPA inside a subfolder to modernize the frontend stack while keeping migration complexity low and avoiding a broader redesign or platform change.

## Scope

### In Scope

- Create a new Vue 3 SPA in a subfolder within this repository.
- Use a modern Vue toolchain centered on Vite.
- Recreate the current site structure and routes with like-for-like behavior.
- Preserve the current content model, including project data and image-driven project pages.
- Preserve the legacy visual presentation as closely as practical by reusing and adapting the original CSS in the Vue app.
- Preserve the current main UX flows:
  - Home page
  - Featured and additional work listings
  - Project detail pages
  - Contact section
  - In-page scroll behavior for Work and Contact
- Archive the original React app into an `archived/` folder after the Vue migration is in place.
- Promote the Vue app from `apps/portfolio-vue/` to the repository root as the primary app.
- Move the existing installed `node_modules` directories into the archive/promoted layout as part of the requested filesystem reorganization.

### Out Of Scope

- Major visual redesign or content rewrite.
- Migration to Nuxt or SSR/SSG architecture.
- New backend services, CMS integration, or API changes.
- SEO expansion beyond what is reasonable for a plain SPA.
- Deleting the React app entirely.
- Significant schema redesign of `public/static/data/projects.json` beyond what is needed for Vue compatibility.
- A Tailwind-driven redesign or style reinterpretation.

## Requirements

### Functional

- The Vue app must run from a dedicated subfolder.
- The Vue app must provide a home route and project detail route equivalent to the current React app.
- The Vue app must render the existing project dataset and image assets correctly.
- The original React app files must be moved under `archived/`.
- The Vue app files must become the root application in this repository.
- The Vue app must use legacy CSS carryover/adaptation as the primary approach for visual parity.
- Navigation must support:
  - Returning home
  - Opening project detail pages
  - Scrolling to the Work section
  - Scrolling to the Contact section
- Project detail pages must preserve previous/next project navigation behavior.
- The migration should be like-for-like in behavior and information architecture.

### Non-Functional

- Use Vue 3 SPA architecture.
- Keep the implementation maintainable and modern, favoring Composition API and Vite-native patterns.
- Keep migration risk low by minimizing unnecessary feature or design changes.
- Preserve current static asset handling with a Vite-compatible approach.
- Keep the archive move deterministic and reversible at the filesystem level.
- Prefer porting the original CSS with minimal necessary Vue-specific adaptation over rewriting styles into utility classes.

## Acceptance Criteria

1. A new Vue 3 SPA exists under a subfolder in this repository and can be installed and run independently.
2. The Vue app reproduces the current route structure and key user flows with like-for-like behavior.
3. The project listing and project detail pages render using the existing portfolio content and media.
4. The user can navigate from home to a project and between adjacent projects.
5. The user can trigger in-page scrolling to Work and Contact from the navigation.
6. The Vue app visually matches the legacy app much more closely through ported/adapted legacy CSS.
7. The current React app is relocated under `archived/` instead of remaining in the root.
8. The Vue app becomes the root application and retains a working install/build flow after the move.

## Gherkin Scenarios

### Scenario: Home page loads

```gherkin
Given the Vue SPA is running
When a visitor opens the home route
Then the hero, work sections, and contact section are visible
```

### Scenario: Navigate to a featured project

```gherkin
Given a visitor is on the home route
When the visitor selects a featured work item
Then the app navigates to that project's detail route
And the project content is rendered from the portfolio dataset
```

### Scenario: Navigate to adjacent projects

```gherkin
Given a visitor is on a project detail route
When the visitor selects next project
Then the app navigates to the next project in project order
```

### Scenario: Scroll to work from navigation

```gherkin
Given a visitor is on the home route
When the visitor selects Work in the navigation
Then the page scrolls smoothly to the Work section
```

### Scenario: Return home and scroll to work from a project page

```gherkin
Given a visitor is on a project detail route
When the visitor selects Work in the navigation
Then the app navigates to the home route
And the page scrolls to the Work section
```

### Scenario: Scroll to contact

```gherkin
Given a visitor is on the home route
When the visitor selects Contact in the navigation
Then the page scrolls smoothly to the Contact section
```

### Scenario: Root app is Vue after reorganization

```gherkin
Given the repository reorganization is complete
When a developer runs the root application commands
Then they operate on the Vue 3 SPA at the repository root
And the previous React application exists under archived/
```

### Scenario: Legacy presentation is preserved

```gherkin
Given the Vue app is running
When a visitor compares the home page against the archived legacy app
Then typography, spacing, colors, and section layout remain substantially similar
And the migration does not rely on a Tailwind reinterpretation of the legacy CSS
```

## Open Questions And Assumptions

### Assumptions

- The new app will live in `apps/portfolio-vue/` unless a different subfolder is requested during implementation planning.
- The current JSON content source will be reused as-is first, with only migration-driven adaptation if needed.
- Like-for-like means preserving layout structure, route behavior, and content hierarchy, not pixel-perfect CSS parity.
- A simpler replacement is acceptable if the existing `svg-morpheus` logo effect is awkward or unstable in the Vue/Vite stack.
- The requested reorganization means the earlier "keep React app intact in place" assumption is superseded.
- The user has now indicated that the visual gap is too large, so the earlier Tailwind-first implementation direction is superseded by a CSS carryover approach.

### Open Questions

- Should the final deployment target switch to the Vue subfolder app after parity, or is this effort limited to local migration groundwork?
- Should the archived React app remain runnable from `archived/` after the move, or is filesystem preservation alone sufficient?

## User Review And Approval Status

- Status: Approved
- Approved by user on: 2026-04-04
- Notes: Original scope and archive/promote update were previously approved. The later styling-plan update to use legacy-CSS carryover was also approved before implementation resumed.
