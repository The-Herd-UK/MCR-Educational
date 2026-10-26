# MCR Educational: Handover Brief

_Last updated 26 October 2026 by Hadi Vahidi. Read this first if you're picking the project up._

## Background

**Client:** MCR HQ CIC, a Manchester community interest company ("Dance. Educate. Support.").

**This site** is their educational arm. It offers alternative provision for young people in Greater Manchester who are disengaged from mainstream school, at risk of exclusion, or have SEND/SEMH needs. It combines dance and performing arts with academic support and wellbeing.

**Who it's for:**

1. Schools and local authorities. This is the primary audience; the main conversion is a referral.
2. Parents and carers.
3. Young people.
4. Funders and partners.

**The key journey** is the school referral wizard at `/for-schools/referral`.

All the original planning is in [`docs/`](docs/):

- [STRATEGY.md](docs/STRATEGY.md): competitors, sitemap, design system, phases, SEO, accessibility
- [WIREFRAMES.md](docs/WIREFRAMES.md)
- [USER-FLOWS.md](docs/USER-FLOWS.md)

## Where we are

**Current phase: Phase 4 (Polish & Launch). Nothing in it has started yet.**

| Phase                 | Scope                                                                   | Status                                    |
| --------------------- | ----------------------------------------------------------------------- | ----------------------------------------- |
| 1. Foundation         | Setup, design system, Home, About, Contact, Payload CMS, nav and footer | Done (Mar 2026, PRs #35–#42)              |
| 2. Core pages         | For Schools and referral wizard, Parents, Students, Programmes, Team    | Done (Mar 2026, PRs #43–#48)              |
| 3. Content & features | News, Events and term dates, Testimonials, Gallery, Policies, emails    | Done (Mar 2026, PRs #49–#54)              |
| Redesign (unplanned)  | New animated Home, About and Contact pages                              | **In review: [PR #55][pr55]**             |
| 4. Polish & launch    | SEO, performance, accessibility, analytics, E2E tests, content, launch  | **Not started.** Issues #29–#34 are open. |
| 5. Post-launch        | Student portal, referral tracking, parent portal, MIS integration       | Ideas only (see STRATEGY.md §9)           |

[pr55]: https://github.com/The-Herd-UK/MCR-Educational/pull/55

Project timeline:

- **2 March 2026:** work started.
- **May 2026:** the last production deploy, then a redesign was started locally and paused.
- **26 October 2026:**
  - Tidied the repo: removed merged branches and fixed the broken lint tooling.
  - Pushed the redesign as PR #55.
  - Moved the repo to The-Herd-UK.

The milestone due dates on GitHub (March to May 2026) are out of date. Phase 4 needs re-planning with the client.

## Next steps, in order

1. **Sort out access.**
   - An org owner should give the developers write access to this repo.
   - Get the Vercel project moved into the agency's Vercel team, or have people added to it (see [Deploys](#deploys)).
2. **Review and merge [PR #55][pr55].**
   - Check it on its Vercel preview. You need Vercel access to open it.
   - Some images are Pexels placeholders. Replace them with real MCR photos, or get the client to approve them.
   - Merging deploys it to production.
3. **Re-plan Phase 4 with the client**, then work through its issues:
   - #29 SEO and structured data
   - #30 Performance and Core Web Vitals
   - #31 Accessibility audit (WCAG 2.1 AA)
   - #32 Plausible analytics and Sentry
   - #33 Playwright E2E tests
   - #34 Content population and launch
4. **Decide how content should be managed** (see [Content and the CMS](#content-and-the-cms)) before #34.
5. **Pay down the tech debt** listed below, then switch CI on.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4, shadcn/ui, framer-motion
- Payload CMS v3 on PostgreSQL; the admin is at `/admin`
- Resend and React Email for the contact and referral emails
- pnpm, Node 20 or later

## Running it locally

```bash
pnpm install
cp .env.example .env.local   # variable names only; ask Hadi for the values
pnpm dev                     # http://localhost:3000
```

The public pages run without any services configured, because their content is static (see below). The contact and referral forms also work without email or a database: they log submissions to the console instead of sending or saving them.

| Command                       | What it does                                        |
| ----------------------------- | --------------------------------------------------- |
| `pnpm dev` / `pnpm build`     | Dev server / production build                       |
| `pnpm type-check`             | TypeScript check                                    |
| `pnpm lint` / `pnpm lint:fix` | ESLint (currently fails on old code; see tech debt) |
| `pnpm format`                 | Prettier                                            |
| `pnpm payload:seed`           | Seed the CMS with sample content                    |
| `pnpm payload:generate-types` | Regenerate Payload types after changing collections |
| `pnpm payload:migrate`        | Run database migrations                             |

## How the code is organised

```
src/
├── app/                  Routes: /, /about, /contact, /for-schools (+ /referral), /for-parents,
│                         /for-students, /programmes/[slug], /team, /news/[slug], /events/[slug],
│                         /testimonials, /gallery, /policies/[slug], /dev/styleguide
│   ├── (payload)/        Payload admin UI and REST API
│   └── api/              contact and referral form endpoints (zod, rate limiting, Resend)
├── components/<page>/    Sections for each page; ui/ = shadcn primitives; layout/ = Navbar, Footer
├── lib/*-data.ts         Page content (programmes, events, blog, team, testimonials, …)
├── payload/              payload.config.ts, collections/, seed.ts
└── emails/               React Email templates
```

`/dev/styleguide` shows the brand tokens and components.

## Content and the CMS

The pages read their content from the static files in `src/lib/*-data.ts`, **not from Payload**.

The Payload collections already exist: Posts, Events, Programmes, TeamMembers, Testimonials, Policies, Pages, Media, Referrals and Users. However, the only thing that uses Payload is the referral form, which saves to `Referrals`.

On the live site, `/admin` currently returns a 500 error, so the CMS isn't usable in production yet. Its database connection on Vercel needs checking.

Before content population (#34), decide with the client between two options:

- **Wire the pages to Payload** so the client can edit content themselves.
- **Keep the content static** in the repo.

## Deploys

Vercel deploys the site using its own GitHub integration; GitHub Actions doesn't deploy anything.

- A push to `master` deploys to production at **https://mcr-educational.vercel.app**.
- Every other branch and PR gets a preview URL.

Deploys kept working after the repo moved to The-Herd-UK; this was checked on 26 October 2026. However, the Vercel project (`mcr-educational`) is still in Hadi's personal Vercel account, which causes two problems:

- Preview URLs redirect to a Vercel login, so only people with access to that account can open them.
- Build logs and environment settings are visible only to Hadi.

The fix is to transfer the project into the agency's Vercel team, so it doesn't depend on one person.

The files in `.github/workflows/` target `main` and `develop`, and neither branch exists. As a result:

- CI never runs.
- `deploy.yml` would duplicate Vercel's own deploys, so it can probably be deleted.
- `ci.yml` can be pointed at `master` once lint and tests pass.

## Working on it

- **Branches:** `master` is the only long-lived branch; there is no `develop`. Create `feature/<issue>-<name>`, open a PR into `master`, and squash-merge. The branch strategy in `docs/CONTRIBUTING.md` (main/develop) is out of date.
- **Commits:** use Conventional Commits (`feat:`, `fix:`, `chore:` …).
- **Pre-commit hook:** husky and lint-staged run ESLint and Prettier on staged files. Fix what they report rather than bypassing the hook.
- **pnpm 11:** `pnpm-workspace.yaml` already approves the build scripts it needs. CI uses pnpm 9, which also works.
- **Tracking:** GitHub milestones (Phase 1–4), labels and issues moved over with the repo and are the source of truth. The old GitHub Project board is on Hadi's personal account and did not move.

## Tech debt and known issues

- **ESLint:** 33 errors and 5 warnings in code written before the redesign. Lint had silently crashed since the Next 16 upgrade and was only fixed on 26 October 2026, so these problems weren't caught. The main ones:
  - redundant `role="list"` (18)
  - `<a>` used instead of `<Link>` (6)
  - setState inside effects (5)
- **No tests:** Vitest is installed but there are no test files, so `pnpm test` fails. The `test:e2e` script refers to Playwright, which isn't installed yet (#33).
- **Production CMS:** `/admin` returns 500 on the live site (see above).
- **Unconfirmed content:** the content in `src/lib/*-data.ts`, the stats on the page sections (e.g. "40+ partner schools", "6+ years") and the images haven't been signed off by the client. Some events are dated 2025. All of it needs checking or replacing during #34.
