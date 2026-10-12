# KeyFlow local editor — build handoff

Status as of 2026-10-11 (~07:15Z): **planning complete, implementation not started.** The workspace reached its credit deadline while the four-milestone execution plan was awaiting approval. This branch preserves the research and the build spec so the next session can start immediately. No product code exists beyond `main @ c4ddddcb`.

## What is done

- **Research (read-only) on `main @ c4ddddcb`** — `research-findings.md` in this directory. Stack: Next 14.2.24, React 18.3.1, TS 5.6 strict, Tailwind v4, framer-motion, react-icons, pnpm 10 / Node 24. App is a marketing lander with inert CTAs; Tauri shell has only the `greet` command. 12 baseline blockers, the load-bearing ones: `next.config.mjs` imports undeclared `@svgr/webpack` (build + lint die at config load); build quality gates disabled in that file; `tsconfig.json` includes nonexistent `src/components/page.jsx`; `tailwind.config.ts` inert against v4; Tauri `devUrl` points at :1420 while dev runs :3000 and `frontendDist` points at a nonexistent `dist`; no tests, no CI; only the `greet` Rust command.
- **Verified on the pristine tree:** `pnpm install --frozen-lockfile` passes (17.2s), `pnpm exec tsc --noEmit` passes (5.5s).
- **Full build spec** — `keyflow-build-spec.html` in this directory (self-contained; open in a browser). Covers: problem frame, evidence, four-layer architecture (pure document model / one `StorageAdapter` boundary with browser+desktop+fake implementations / three screens / Rust command core), autosave-ack-recovery and import-conflict and suggestion-review flows, a verification matrix with named failure modes, and locked decisions (browser-first local product; revisions = bounded full-text snapshots, newest-first, cap 50, monotonic `revCounter`; undo cap 100; consent invariant — formatting and suggestions 100% user-triggered, no text changes without explicit accept; zero network calls in product code).
- **Milestone plan** — M1 tooling unblock + tested document model → M2 library + editor with autosave acks/undo/recovery → M3 formatting + deterministic Local Clarity suggestions + truthful marketing → M4 settings + local-data control + Rust core + full QA evidence sweep.

## What is NOT done

- **All implementation.** No tooling fixes, no `src/lib/keyflow/`, no editor screens, no tests, no Rust work. The only commit on this branch is the planning-preservation commit.
- The execution plan was proposed in the Obvious workspace but never approved; M1–M4 are unstarted.
- Desktop packaging and `cargo test` were never attempted (no Rust toolchain on the sandbox); they are unrun arms, not failures.

## Exact next steps

1. **M1** — cut this branch from `origin/main` (already done here). Fix `next.config.mjs` (remove `@svgr/webpack` import + svg overrides, re-enable `eslint`/`typescript` gates), add `eslint` + `eslint-config-next` devDeps, delete inert `tailwind.config.ts`, remove `@plugin "tailwindcss-animate"` + duplicate HSL tokens from `globals.css`, fix `tsconfig.json` include, fix `src/app/layout.tsx` metadata, set Tauri `devUrl` → `http://localhost:3000` and `frontendDist` → `../out` with `output: 'export'` verified by a real `next build`, add explicit CSP. Then land `src/lib/keyflow/` (model.ts / storage.ts / reducer.ts / import-export codecs) with Vitest suites (schema roundtrip exact fixtures, reducer bounds, import safety).
2. **M2** — `/library` master-detail + editor: autosave with Saving…/Saved/Save failed chip driven by write acks, bounded undo (100), revisions drawer with non-destructive restore (creates a `restore` revision), crash recovery from a write-ahead buffer, mobile pane-swap. Playwright e2e against real IndexedDB: reload persistence byte-identical, crash/reopen recovery, scripted storage-failure retry.
3. **M3** — pure `applyFormat` (bold/italic/heading/bulleted/code/link, idempotent) + deterministic Local Clarity suggestions adapter (double-space, fixed weasel-word list, >40-word sentences, passive markers) with per-suggestion diff preview, accept = exactly one `range → replacement` ('suggestion' revision). Truthful marketing/README rewrite (remove Copilot/RAG/pricing/sync/"join thousands" claims; free + open-source positioning; hero CTA → `/library`).
4. **M4** — `/settings` (autosave cadence, storage usage, quarantine viewer, clear-all-local-data with type-to-confirm); Rust `keyflow_core.rs` + `commands.rs` (serde `StoredDocument` mirror, `validate_document`, `bound_revisions`, atomic tmp+rename writes) — attempt `rustup` + webkit/gtk deps, run `cargo test`; if the toolchain cannot install, record the exact failure as an unrun arm. Full QA sweep: axe zero serious/critical at 1440×900 and 390×844, keyboard-only pass, `prefers-reduced-motion` honored, screenshots under `docs/evidence/`.

Keep working on this branch, update the draft PR's Handoff at each milestone, conventional commit prefixes, author Sam Gu with the `obvious-autobuild[bot]` co-author trailer. **Open draft PRs only; never merge.**

## Verify commands (run per milestone; all must exit 0)

```bash
pnpm install --frozen-lockfile
pnpm exec tsc --noEmit
pnpm run build
pnpm run lint
pnpm test
# from M2 on:
pnpm exec playwright test
```

## Decisions already made (do not relitigate without new input)

- Single draft PR, branch `obv/products-l4-keyflow-local-editor-20261010` into `main`, two-to-four pushed milestones.
- Browser-first local product: IndexedDB behind one `StorageAdapter` interface; desktop is an adapter + Rust commands, never the primary path.
- Revisions: full-text snapshots, newest-first, cap 50; restore is non-destructive and undoable; `revCounter` monotonic.
- Consent invariant: no formatting or suggestion applies text without an explicit accept; analyze never mutates.
- Marketing claims map to shipped code or are labelled proposed; unrun arms (desktop packaging, possibly `cargo test`) are recorded honestly.
- Planning docs live at `planning/keyflow-local-editor/` (path chosen in the preservation commit; the Obvious-side spec artifact was `art_CPHoUy3Z`).
