# Watttrace design QA

**final result: passed**

Scope: local concept website and isolated synthetic demo. This is a design/interaction handoff, not a production-security, legal, methodology or launch certification.

## Source and browser evidence

- Source visual truth: `reference/selected-unified.png`, 850 × 1851. This is the selected Mocha / Blueberry hybrid art-direction image.
- Actual browser implementation: `http://127.0.0.1:4173/` and `/demo`.
- Desktop: 1440 × 900 CSS pixels, devicePixelRatio 1. Supporting full-page capture at 1440 × 720 viewport is 1440 × 9004 pixels and uses the intentional short-screen stacked evidence story.
- Mobile: 390 × 844 CSS pixels, devicePixelRatio 1.
- Source and implementation were opened, captured and compared in the same image input: `qa/source-implementation-comparison.jpg` (focused hero/data/machinery regions) and `qa/full-view-comparison.jpg` (complete source plus built homepage).
- Source crops were scaled proportionally to a common 710px column; browser captures were scaled proportionally without distortion. Source is a composition board, not a known browser viewport: comparisons assess composition, palette, typographic hierarchy and asset identity rather than claiming pixel-identical geometry.
- `qa/desktop-hero-final.png`, `qa/desktop-layers-final.png`, `qa/desktop-source-final.png`, `qa/desktop-review-scene.png`, `qa/desktop-demo-full-final.png`, `qa/desktop-demo-review-final.png`, `qa/desktop-report.png`, `qa/mobile-hero-final.png`, `qa/mobile-sources.png`, `qa/mobile-demo-full.png`, `qa/mobile-form-success-final.png` are real browser captures.

## Comparison history and resolved findings

1. **[P1] Mobile hero art intersected controls and disclosure.** Initial 390px capture put machinery behind the secondary CTA and synthetic notice. Moved mobile art below the copy/control region, adjusted hero height and protected disclosure backgrounds. Post-fix: `mobile-hero-final.png`; no horizontal overflow, readable CTAs and notice.
2. **[P2] Compact chart Y-axis clipped leading digits.** Negative chart left margins cut 120 to 20 and 1.2 to .2. Changed chart left margin to 0. Post-fix: `desktop-layers-final.png` visibly retains full ticks.
3. **[P2] Evidence metadata was too small.** Increased essential source timestamps, coverage, case copy and reviewer annotations to 11–12px; added a persistent concept/synthetic/no-control bar. Post-fix: `mobile-sources.png`, `desktop-demo-review-final.png`.
4. **[P2] Trailing slash caused an article lookup failure.** The evidence-packet URL could render the 404 page. Normalised paths before article lookup. Rechecked `/resources/evidence-packet/` at 1440 and 390px; it now renders “Make the decision reconstructable.” The original route-check JSON retains the initial finding; mobile-route-checks records the passing retest.
5. **[P2] Successful local form validation could leave confirmation above the viewport.** Added scroll-to-confirmation on success and changed the reset action to “Start another draft.” Post-fix: `mobile-form-success-final.png`, showing the complete NOT SENT confirmation and next actions.
6. **[P2] Same-route logo navigation did not return to the top.** Added explicit instant top scroll to the brand link and manual scroll restoration for page changes. Retested: homepage scrollY 0; hero copy bottom 705px and bottom-strip top 754px, leaving controls clear.
7. **[P2] Editorial body text appeared undersized beside the source mock.** Increased desktop hero copy, section descriptions, evidence explanations and trust/pilot copy while retaining compact metadata. Final hero and full-page comparison preserve readable hierarchy and sufficient whitespace.

## Required fidelity surfaces

- **Typography:** locally hosted Instrument Serif regular/italic and Manrope. Large serif editorial hierarchy, copper emphasis, restrained sans-serif controls. Exact brief headline retained. Mobile wraps deliberately without truncation. Source wordmark typography is interpreted as the original approved Watttrace mark plus a clean sans-serif wordmark; it is not a copied competitor logo.
- **Spacing/layout:** balanced left-copy/right-factory hero; full-width pale-blueberry layers; espresso evidence chapter; five aligned offer rows; deep-blueberry trust section. Additional role, workbench, protocol, FAQ, CTA and footer content intentionally extends the shorter visual board to cover the full brief. No overflow in the tested page families.
- **Colors/tokens:** latte #F0E6DB, espresso #44312E, pale blueberry #D7D6EC, deep blueberry #353455, copper/orange and restrained sage. Clear focus rings and textual states accompany colour.
- **Images:** original generated factory, factory elevation, exploded compressor and transparent mark. WebP delivery versions retain detail; real DOM controls/text/charts overlay the illustrations. No screenshot is used as a functional UI. The decorative art is labelled illustrative. Recharts renders deterministic source data, not invented performance results.
- **Copy/content:** five offers and price hypotheses preserved; exact buyer, paid four-week ask, explicit data/control boundaries, pilot scorecard, references, failure conditions and privacy/consent covered. Demo/source/exports carry synthetic labels. Source-board dates and decorative graph values are intentionally replaced by the consistent 05 Oct 2026 fixture.

## Primary interactions checked

- Desktop native scroll → data separation → pinned horizontal story; Next moves track to -1440px and step 02, then to human review/step 03; Previous and skip navigation work.
- Small-screen full stacked story; mobile menu expands, Escape dismisses.
- Product menu opens and selects a real module page.
- Demo search empty state, Rejected filter (exactly C003 and C007), local reviewer decision and reason, status update and feedback, source tab, reset to 4/2/2/2 initial counts.
- JSON export downloaded through the browser; inspected file has 10 cases, 12 intervals, all synthetic flags and retained no-control caveat.
- Required form fields block empty submit (6 invalid controls). Fictional completed form with follow-up consent produces “DRAFT VALIDATED · NOT SENT”; marketing consent remains optional.
- 31 supporting desktop route checks and six mobile page-family checks. No broken images or horizontal overflow in tested routes; trailing-slash defect fixed and retested.
- Browser console inspection returned no errors or warnings in tested states.
- Seven automated checks pass: three fixture/export tests and four static-serving/packaging tests. Production build succeeds.

## Intentional differences and limits

The static direction board compresses the evidence story into one composition. The implementation distributes source, investigation and review across three readable scroll scenes. On short screens they stack. The source's decorative planes/curves become actual accessible data charts; missing and zero-output intervals remain gaps. No exact source-board telemetry, fake metrics or generated product UI is reused.

Reduced-motion CSS and GSAP media conditions are implemented; a separate operating-system reduced-motion toggle and broad assistive-technology suite were not exercised. Native browser printing is provided, but no platform-specific PDF print dialog was automated. External service delivery, deployment, live authentication and analytics are intentionally absent and clearly disclosed.

## Remaining follow-up polish (P3)

- Optional additional device/browser matrix and screen-reader testing before launch.
- Optional route-level bundle splitting; Vite reports a large bundle advisory, not a build failure.
- Replace generated logo raster with a professionally refined vector master after brand/legal verification.

No actionable P0/P1/P2 findings remain in the assessed local-preview scope.

## Bidirectional scroll reveals
Added a route-aware GSAP ScrollTrigger entrance system with alternating horizontal directions and sequential child text/content entrances. Native scroll stays intact. Factory layers and the existing evidence scenes are excluded. Reduced-motion users bypass the entire system; focus reveals controls immediately; print clears hidden states. Verified 44 home reveal groups, zero targets within excluded scenes, offscreen reset (opacity 0) and upward replay (opacity 1), product navigation cleanup, mobile width 390/390, and no browser console errors. Screenshot: qa/scroll-reveals.png. Production build and seven existing tests pass.

## The First Trace — intro QA
Selected reference: `../watttrace-intro-directions/01-the-first-trace.png`. Compared the reference with actual desktop and mobile captures. Retained full-bleed brass recorder imagery, espresso shadows, large light wordmark, chapter selector, cream navigation and editorial tagline. Adapted the mock's simplified navigation to the site's complete navigation. Expanded timing to 12 seconds for three gentle shots. Uses two photographic plates with three crops/pans and cross-dissolves; it does not simulate physically drawing a new trace.

Verified at 1440×900 and 390×844: all art loads, no horizontal overflow, wordmark/copy/controls remain readable, mobile stylus stays in frame. Chapter 2 seeks correctly; pause held image scale unchanged across subsequent observations; playback reaches chapter 3 and Replay. Explore WattTrace reaches the existing hero, pauses the intro and restores the light navigation. Mobile menu opens/closes. No browser or Studio errors. Remotion's development license reminder remains visible in console. Existing seven fixture/package tests pass; production build succeeds with the pre-existing large-bundle advisory. Player is split into a separate lazy-loaded chunk.

Reduced-motion/save-data fallback and preference-change cleanup reviewed in source; OS preference switching was not exercised. No MP4 exported or site deployed. Captures: `qa/first-trace-desktop.png`, `qa/first-trace-mobile.png`, `qa/first-trace-hero-transition.png`. Pass for this local introduction scope.
