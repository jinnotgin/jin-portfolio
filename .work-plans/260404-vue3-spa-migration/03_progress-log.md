# Progress Log

## 2026-04-04

### 18:36:19 +08

- Created effort folder `.work-plans/260404-vue3-spa-migration`.
- Started documentation workflow required by repository instructions.
- Observed that `.work-plans/` templates were not present in the repository at discovery time.

### 18:36:19 +08

- Completed discovery pass on current application structure.
- Touched files for analysis:
  - `package.json`
  - `README.md`
  - `src/index.js`
  - `src/App.js`
  - `src/nav/Nav.js`
  - `src/hero/Hero.js`
  - `src/work/Work.js`
  - `src/project/Project.js`
  - `src/contact/Contact.js`
  - `src/index.css`
  - `src/App.css`
  - `src/nav/Nav.css`
  - `src/work/Work.css`
  - `src/project/Project.css`
  - `public/static/data/projects.json`
- Key findings:
  - Current app is a small Create React App portfolio using React 16 and React Router 4.
  - Routing and content model are simple enough for a like-for-like Vue migration.
  - Project detail pages are JSON-driven.
  - Image loading uses CRA-specific `require.context`, which will need a Vite-native replacement.

### 18:36:19 +08

- Gathered requirements from user feedback.
- User-directed decisions recorded:
  - Perform a like-for-like migration to reduce complexity.
  - Use a plain Vue 3 SPA.
  - Do not use Nuxt.

### 18:36:19 +08

- Ran command outcome:
  - `npm run build`
  - Result: failed because `react-scripts` is not installed in the current workspace environment.
- Impact:
  - Analysis relied on source inspection instead of a validated local React build.

### 18:36:19 +08

- Drafted `01_scope.md`.
- Created a blocked placeholder `02_implementation-plan.md` pending scope approval.
- No application code changes made.

### 18:38:00 +08

- User approved `01_scope.md`.
- Updated scope approval status to approved.
- Drafted the full `02_implementation-plan.md`.
- Implementation remains blocked pending user approval of the implementation plan.

### 18:40:29 +08

- User approved `02_implementation-plan.md`.
- Began implementation work for the Vue migration.
- Verified local toolchain availability:
  - `node -v` -> `v24.8.0`
  - `npm -v` -> `11.6.0`

### 18:40:52 +08

- Scaffolded a new Vue app in `apps/portfolio-vue/` using Vite's Vue template.
- Installed base dependencies with `npm install`.
- Installed migration dependencies:
  - `vue-router@4.5.1`
  - `tailwindcss`
  - `@tailwindcss/vite`
  - `@fontsource/barlow`
- Noted and corrected an early dependency issue where `vue-router` initially resolved to major version 5 before being pinned to 4.5.1.

### 18:46:02 +08

- Ported static project content into the Vue app:
  - Copied `public/static/data/projects.json` to `apps/portfolio-vue/src/content/projects.json`
  - Copied image assets from `src/images/` to `apps/portfolio-vue/src/assets/images/`
- Removed default Vite starter image assets not needed for the migration.

### 18:46:02 +08

- Replaced the default scaffold app with the migrated Vue structure.
- Added and updated major files:
  - `apps/portfolio-vue/src/router/index.js`
  - `apps/portfolio-vue/src/content/work.js`
  - `apps/portfolio-vue/src/content/projects.js`
  - `apps/portfolio-vue/src/content/imageMap.js`
  - `apps/portfolio-vue/src/pages/HomePage.vue`
  - `apps/portfolio-vue/src/pages/ProjectPage.vue`
  - `apps/portfolio-vue/src/components/SiteNav.vue`
  - `apps/portfolio-vue/src/components/HeroSection.vue`
  - `apps/portfolio-vue/src/components/FeaturedWorkSection.vue`
  - `apps/portfolio-vue/src/components/AdditionalWorkSection.vue`
  - `apps/portfolio-vue/src/components/ContactSection.vue`
  - `apps/portfolio-vue/src/components/project/ProjectRenderer.vue`
  - `apps/portfolio-vue/src/App.vue`
  - `apps/portfolio-vue/src/main.js`
  - `apps/portfolio-vue/src/style.css`
  - `apps/portfolio-vue/vite.config.js`
- Behavior migrated:
  - Home and project routes
  - Featured and additional work listings
  - JSON-driven project detail rendering
  - Previous/next project navigation
  - Home/work/contact navigation flows
  - Document title updates

### 18:51:08 +08

- Ran production validation with `npm run build` in `apps/portfolio-vue/`.
- Result: success.
- Observed build outcome:
  - Vite production build completed successfully
  - Output emitted to `apps/portfolio-vue/dist/`

### 18:51:08 +08

- Performed a post-build cleanup pass for Tailwind utility correctness.
- Replaced a few silent-invalid utility usages with explicit arbitrary values:
  - `opacity-65` -> `opacity-[0.65]`
  - `xl:pt-22` / `xl:pb-22` -> `xl:pt-[5.5rem]` / `xl:pb-[5.5rem]`
- Re-ran `npm run build`.
- Result: success.

### 18:51:08 +08

- Ran a dev-server smoke check.
- First command:
  - `npm run dev -- --host 127.0.0.1 --strictPort`
  - Result: failed because port `5173` was already in use in the environment
- Second command:
  - `npm run dev -- --host 127.0.0.1 --port 4173 --strictPort`
  - Result: success; Vite served locally at `http://127.0.0.1:4173/`
- Stopped the dev server after confirming startup.

### 19:44:49 +08

- Received a new user request to reorganize the repository layout:
  - Move the original React app into `archived/`
  - Include existing `node_modules` directories in the move
  - Promote the Vue app to the repository root
- Inspected current filesystem state before any reorganization.
- Observed:
  - Root `node_modules/` is present
  - `apps/portfolio-vue/node_modules/` is present
- No filesystem move executed yet.
- Updated `01_scope.md` and `02_implementation-plan.md` to reflect the new requested rollout.
- Reorganization is blocked pending renewed approval of the updated scope and plan.

### 20:30:58 +08

- User approved the updated scope and implementation plan for archive/promote reorganization.
- Created `archived/` as the target folder for the legacy root application.
- Moved the legacy React root app into `archived/`, including:
  - `.gitignore`
  - `README.md`
  - `package.json`
  - `package-lock.json`
  - `public/`
  - `src/`
  - `node_modules/`

### 20:31:40 +08

- Promoted the Vue app from `apps/portfolio-vue/` to repository root, including:
  - `.gitignore`
  - `README.md`
  - `index.html`
  - `package.json`
  - `package-lock.json`
  - `public/`
  - `src/`
  - `vite.config.js`
  - `node_modules/`
- Removed the now-obsolete `apps/` scaffold directory after promotion.
- Updated package metadata:
  - Root package renamed to `jin-portfolio`
  - Archived package renamed to `jin-portfolio-archived-react`
- Replaced the generic Vue scaffold README with a repo-specific root README.

### 20:31:40 +08

- Validation after reorganization:
  - Ran `npm run build` at repository root
  - Result: success
- Outcome:
  - Root application is now the Vue 3 portfolio app
  - Legacy React application is preserved under `archived/`

### 20:31:40 +08

- User reported that the Vue version looks very different from the legacy app, mainly due to CSS/layout drift.
- User requested a change in approach:
  - Stop relying on Tailwind CSS as the main styling strategy
  - Transfer/adapt the relevant legacy CSS into the Vue version instead
- Updated `01_scope.md` and `02_implementation-plan.md` to reflect the styling strategy change.
- Further code edits are blocked pending renewed approval of the updated scope and plan.

### 21:00:50 +08

- User approved the updated styling correction plan.
- Ported legacy CSS into the active Vue app under:
  - `src/styles/index.css`
  - `src/styles/App.css`
  - `src/styles/nav/Nav.css`
  - `src/styles/hero/Hero.css`
  - `src/styles/work/Work.css`
  - `src/styles/project/Project.css`
  - `src/styles/contact/Contact.css`
- Replaced Tailwind-led component markup with legacy class structure across the main Vue components:
  - `src/App.vue`
  - `src/components/SiteNav.vue`
  - `src/components/HeroSection.vue`
  - `src/components/FeaturedWorkSection.vue`
  - `src/components/AdditionalWorkSection.vue`
  - `src/components/ContactSection.vue`
  - `src/components/project/ProjectRenderer.vue`
  - `src/pages/HomePage.vue`
  - `src/pages/ProjectPage.vue`

### 21:00:50 +08

- Removed Tailwind from the active root application:
  - Deleted Tailwind imports/usage from `src/style.css`
  - Removed the Tailwind Vite plugin from `vite.config.js`
  - Ran `npm uninstall tailwindcss @tailwindcss/vite`
- Root package dependencies now rely on Vue, Vue Router, Vite, and the Barlow font package only.

### 21:00:50 +08

- Validation after CSS carryover:
  - Ran `npm run build` at repository root
  - Result: success
- Updated root `README.md` to reflect the CSS carryover approach instead of Tailwind.

### 21:00:50 +08

- Addressed follow-up parity/interaction issues requested by the user:
  - Switched the main logo animation to a GSAP-driven timeline in `src/components/SiteNav.vue`
  - Adjusted header bar item alignment so Home, Work, and Contact sit more evenly
  - Removed global smooth-scroll behavior so project navigation returns to the top instantly
- Added `gsap` to the root Vue app dependencies.

### 21:00:50 +08

- Validation after follow-up interaction fixes:
  - Ran `npm run build` at repository root
  - Result: success

### 21:13:51 +08

- User requested two follow-up corrections:
  - Restore center alignment for `Home`, `Work`, and `Contact`
  - Replace the previous GSAP timeline approximation with GSAP `MorphSVGPlugin`
- Verified that `node_modules/gsap/MorphSVGPlugin.js` is present in the installed `gsap` package for this environment.
- Updated `src/components/SiteNav.vue` to:
  - Use `MorphSVGPlugin` on a single compound logo path
  - Normalize nav item layout through list entries plus explicit spacing overrides
- Validation:
  - Ran `npm run build` at repository root
  - Result: success
