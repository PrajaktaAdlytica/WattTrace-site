# WattTrace website

Complete React/Vite website, synthetic demo, Measured Record identity and Remotion introduction.

**Deployment:** [Hostinger setup guide](docs/HOSTINGER.md). Use ordinary PHP/HTML hosting with the built `hostinger` branch; no Node.js Web App slot is required. Source lives on `main`; GitHub Actions rebuilds `hostinger` after source pushes. Build with Node 22 and `npm run build`; publish **`dist/client`**. Run `npm test` for the data and hosting checks.

**Design archive:** `design/` contains the full brand set and visual/logo/intro directions. `docs/planning/` preserves the earlier architecture, pilot specification and coverage matrix. Historical documents retain the original working name and earlier scope.

# Watttrace — Mocha / Blueberry prototype

A complete local, responsive website and isolated synthetic energy-evidence workbench. Brand selection: Mocha / Blueberry, with separating factory/data layers and a source → machinery → reviewer scroll journey.

## Preview

Local server: http://127.0.0.1:4173/

- Homepage: `/`
- Workbench: `/demo`
- Sample evidence packet: `/demo/report/DEMO-C001`
- Five offers: `/products`
- Pilot enquiry: `/request-pilot`

The server is started for this handoff. To restart after a machine/session restart, use `npm install` then `npm run dev -- --host 127.0.0.1 --port 4173` from this folder. `npm run build` creates the static client and retains the starter's Sites packaging; it does not publish anything.

## Implemented

- Original generated Watttrace mark, favicon, industrial hero, factory elevation and exploded compressor; locally hosted Instrument Serif and Manrope fonts.
- Latte / pale blueberry / espresso / deep blueberry chapters, deliberate hover and focus states, native-scroll GSAP layer separation and a three-scene horizontal evidence journey.
- The horizontal journey runs on screens at least 1100px wide and 760px tall. Smaller screens and reduced-motion preferences get the complete stacked story. No wheel interception.
- Five separately scoped and priced proposed modules, dedicated product pages, platform/data-readiness pages, three buyer-role pages, evaluation/pricing, research resources, company/contact, preview sign-in, privacy/terms/accessibility and a 404 screen.
- Synthetic workbench: 10 cases with pending/blocked/completed/rejected states; search, filters, selected record, four evidence tabs, human reviewer note/action, local history, reset, pilot-account view and management report.
- Downloadable synthetic source CSVs, a JSON evidence packet, and browser print/save-to-PDF styling. Download preserves explicit synthetic labels.
- Locally validated request, guided-demo, contact and waitlist forms. Required fields and follow-up consent are separate from optional marketing consent.

## Honest operating boundary

This is not production software or a deployed service. Forms validate locally and display **NOT SENT**; there is no inbox, CRM, waitlist persistence, booking, payment, production authentication or external analytics. Demo review state is in memory and resets on reload. No arbitrary uploads, real records, credentials, plant connections, PLC actions, dispatch or writeback are accepted.

All example names, accounts, IDs, events, timestamps and tariffs are invented. Price figures remain test hypotheses. No actual savings, customers, revenue, certifications, partnerships, domain ownership or trademark clearance is claimed. The original research concept was Plant Load; the selected website identity is Watttrace. No domain has been purchased or connected.

## Data check

Twelve 15-minute intervals on 05 Oct 2026, 08:00–11:00 UTC. Eleven meter readings present. One zero-output downtime interval and one missing-meter interval are excluded. Ten eligible intervals: 1,030 units, 958 kWh observed, 924 kWh toy baseline. Selected 09:00–09:30 window: 206 versus 172 kWh. The +34 kWh is a modelled residual, not realised savings. The formula `10 + 0.8 × units` is illustrative, not fitted. Missing values remain null; zero-output ratios remain undefined.

## Validation

- `node --test tests/demo-data.test.mjs`: 3 data/export tests.
- `npm run test:sites`: 4 static-serving/package tests.
- `npm run build`: production bundle generated.
- Browser checks: 1440×900 desktop, 390×844 mobile, 31 supporting route checks, mobile page-family overflow checks, source/interval tabs, case filter/empty state, local review feedback, reset, JSON download, form validation and consent, desktop menu, mobile menu/Escape, horizontal Next/Previous and skip controls.
- No browser console errors/warnings observed in tested states.
- `qa/` contains actual browser captures and source comparisons; `design-qa.md` records fixes and limitations.

## Remaining launch work

Identify/verify the real company and domain, finalise lawful privacy/contact details, connect the chosen backend and consented lead handling, implement real authentication/security if required, validate operational methodology, obtain real pilot permissions and contractual sign-offs, run broader device/assistive-technology/security QA, then separately authorise deployment. No GitHub push, Vercel deployment or Notion action has been performed.

## File map

- `src/App.jsx`: page components, navigation, motion, local demo interactions.
- `src/styles.css`: brand, responsive, print and reduced-motion styles.
- `src/data.js`: offers, fictional cases, source provenance and deterministic interval fixture.
- `src/articles.js`: supporting public content and research/validation protocols.
- `public/data/`: synthetic CSVs and example JSON packet.
- `public/assets/`: original generated art and WebP delivery versions.
- `reference/selected-unified.png`: selected hybrid art-direction mock, not a product screenshot.

## Parent-managed research handoff

Preserve these future tracking fields outside the public demo: idea number (32), working title, buyer/budget owner, operator, hypothesis, five offer IDs, price hypotheses, source links, contact consent, interview date, permissioned dataset status, baseline/evaluator/threshold, paid SOW status, integration owner, safety boundary, regulatory review, demo URL, screenshot verification, name/domain verification, traffic cohort/spend, qualified meetings, decision and next action. No Notion access has been made.

The earlier architecture, demo/pilot specification and 78-item coverage matrix remain in the parent outputs folder as historical planning deliverables. Their old Plant Load naming and “spec only” status describe that earlier stage, not the current implementation.

## The First Trace intro
The selected introduction is implemented above the homepage hero as a 12-second, 30fps Remotion Player composition, using original generated recorder photographs with gentle pans and cross-dissolves. It is a photographic motion composition, not footage of operating equipment. No MP4 export was made.

- `src/remotion/FirstTrace.jsx`: three named, editable sequences (paper, trace, record).
- `src/remotion/index.jsx`: Studio registration; `npm run studio` opens the editing server.
- `src/IntroFilm.jsx`: accessible chapter, pause/replay and direct-entry controls; preference and visibility handling.
- `src/IntroPlayer.jsx`: lazy-loaded Player and playback events.
- `src/intro.css`: full-height desktop composition and mobile framing.
- `public/assets/intro/`: original PNG masters and small WebP delivery images.

Reduced-motion and save-data preferences default to a static poster, with deliberate playback available. The film stops at its final frame and can be replayed. Playback suspends outside the viewport and when the document is hidden. Review Remotion's applicable license before a commercial deployment; its development notice is retained.
