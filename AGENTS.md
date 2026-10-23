# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Selected Watttrace direction
Use Mocha / Blueberry as the brand foundation: latte, espresso, pale and deep blueberry, restrained copper/orange and sage. Retain the original industrial imagery, editorial Instrument Serif and Manrope UI. Signature scroll scenes separate factory/data layers and progress from source to machinery to a named reviewer. Mobile and reduced-motion versions must preserve the story as stacked sections. Product material is always clearly synthetic. This local implementation does not authorise production integration, deployment or real-data capture.

## Requested visual refinements
Keep the closing CTA blueberry color and add industrial background imagery. Give each offer its own animated miniature diagram, retain these visuals on mobile/tablet, illustrate each pilot week, flip trust icons like coins on hover, and reveal the workbench on entry. Respect reduced motion and keep all demo provenance readable.

## Site-wide scroll entrances
Use GSAP ScrollTrigger for dramatic alternating left/right entrances with staggered text/content. Replay on downward and upward entry. Exclude factory-layer and evidence scenes from this additional reveal system. Retain native scrolling, reduced-motion support, keyboard visibility, and mobile-safe bounds.

Brand spelling: WattTrace, with uppercase W and T. Logo exploration boards are in ../watttrace-logo-options; no replacement symbol selected yet.

Logo correction: the user explicitly rejects letter-based symbols. Future logo symbols must be abstract and non-alphabetic, with no W/WT initials or monograms. The WattTrace wordmark is separate. Revised explorations are in ../watttrace-logo-options/abstract-symbols.
Logo symbolism must have an immediately understandable relationship to energy investigation, measured evidence, or human inspection. User rejected arbitrary organic shapes and post-hoc explanations. New meaning-led explorations remain unselected.

Selected logo: Measured Record (recording paper + stylus). User approved symbol; requested lighter non-bulky wordmark. Use outlined Manrope Regular lockups from public/assets/brand, exact WattTrace casing. Cream for footer; espresso for header. Use dedicated simplified favicon master for small sizes. Full deliverable set: ../watttrace-brand.

## Selected intro — The First Trace
The user chose the Measured Record cinematic opening above the existing hero. Preserve warm brass recorder photography, ivory paper, espresso shadows, large light outlined WattTrace wordmark, editorial tagline and restrained chapter navigation. The 12-second Remotion composition uses three gentle photo-motion shots; it does not depict a live integration. Accessible HTML text/controls remain separate. Plays once, holds final frame, supports pause/replay and chapter seeking; no entry gate. Reduced-motion/save-data starts with a still poster. Scrolling out of view and hidden documents suspend playback. Keep the existing industrial hero and scroll story below it.

## GitHub and Hostinger handoff
User authorized pushing the complete project and design deliverables to PrajaktaAdlytica/WattTrace-site. Repository root is the app root; design archives are in design/ and prior specifications in docs/planning/. Hostinger deployment instructions are in docs/HOSTINGER.md. Static output is dist/client. Domain connection and Hostinger deployment are not performed by the GitHub push.
