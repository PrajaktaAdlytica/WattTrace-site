# Plant Load — simulated product, pilot, and measurement specification

Concept 32 · 23 October 2026 · Companion to the website architecture

**Status:** All organizations, people, records, dates, readings, prices and outcomes below are synthetic examples or explicitly identified proposals. No real customer, plant access, pilot commitment, savings, pipeline, or functioning product is represented. This is a specification, not a built demo.

## 1. The product record and responsibility model

The principal product object is an **energy investigation case**. The case ties a selected time window to input evidence, baseline version, data exceptions, alternative explanations, candidate intervention, reviewer decision, owner and dated next action. CRM-like account context supports the case; it does not replace the workbench or turn the five offers into tabs.

**Fictional account:** DEMO Aster Forge Manufacturing, Plant 01, Process L01, product family A, shift A. This depicts one process inside a fictional multi-line plant; the dataset does not represent the rest of that plant. Every account and record visibly includes DEMO/SIMULATED.

| Fictional person | Role | Responsibility |
|---|---|---|
| DEMO Mira Vale | Energy manager; budget/accountability owner | Own diagnostic scope and evidence review |
| DEMO Ivo Reed | Named day-to-day operator | Explain shift, downtime, product and equipment context |
| DEMO Nila Soren | Data/integration owner | Validate tags, timestamps, meter quality and permissible exports |
| DEMO Tomas Wren | Operations sponsor | Review operational constraints and plant change-control route |
| DEMO Lena Quill | Finance sponsor; second-site decision owner | Agree comparator, commercial test and conditional expansion decision |
| DEMO Arun Flint | Plant engineer; independent evaluator | Accept, reject or challenge technical interpretations |
| DEMO Cora Venn | Plant manager | Sponsor the diagnostic and participate in the paid go/no-go |

Procurement and legal authorization is a separate prerequisite, not implied by any fictional role. Do not use personal photos or generate believable customer testimonials from these names.

## 2. Demo routes and screen hierarchy

| Screen | Information hierarchy and behavior |
|---|---|
| `/demo` | Persistent CONCEPT PREVIEW and DEMO — SYNTHETIC DATA badges; short task introduction; “Open example case” and “View case queue”; disclosure that changes are local and resettable |
| `/demo/cases` | Account/process selector fixed to bundled fictional account; 10 cases; filters Pending/Blocked/Completed/Rejected; source/owner/next-action columns; label on each row; clear filtered-empty state |
| `/demo/cases/DEMO-C001` | Header: case, owner, status, next action. Main: source coverage, four aligned time-series tracks, exceptions/alternatives, intervention ledger. Right pane: source filename/row/time, baseline version, reviewer and notes. Bottom: explicit local reviewer action |
| `/demo/report/DEMO-C001` | Evidence packet cover, method, source manifest, exclusions, interpretation, reviewer history, next step and export. Watermarks persist on every page and exported object |
| `/demo/pilot` | Fictional account, buyer/operator/data owner, read-only export permission pending, baseline-method meeting pending, paid SOW not signed, conditional second-site decision. Stage is “Simulated qualification,” never “Closed won.” Amount uncommitted, not recognized revenue |

Navigation labels: Cases, Evidence packet, Pilot context, Reset demo. Within a case: Evidence, Context, Review. These are workspace views, not the five saleable modules.

### Storyboard

1. Open the bundled synthetic meter, production, tariff and downtime fixtures. Present 12 expected 15-minute slots, 11 meter readings, one missing slot, and one full downtime slot.
2. Select 09:00–09:30 on the trend. The example has two positive residuals against a deliberately simple model.
3. Open linked sources. Confirm counts, product family, shift and illustrative operator annotation. State “Possible compressed-air load; unverified” rather than diagnosing a leak from line-level kWh.
4. Compare alternative explanations: equipment loading, product mix, meter calibration, alignment error, production counting lag and normal idle use. Tariff change affects cost, not the measured physical energy residual.
5. Propose a manual engineering check. The operator must confirm context; no plant instruction is executed.
6. Reviewer chooses “Mark for investigation,” “Request more evidence,” or “Reject interpretation,” adding a note. The action updates only local demo state and a simulated activity entry.
7. Export an illustrative packet, with case ID, source versions, method and visible synthetic labels. Reset restores the original fixture. No external notification, control command, integration, data upload or payment occurs.

### State transitions

Pending → marked for investigation (displayed within Pending), Blocked, or Rejected. “Completed” means the local documentation/review task is complete, never that a physical intervention was executed. Blocked can return to Pending only via an explicit simulated evidence-resolution control. Require a reason for rejection or blocking. An approved-for-investigation status must never be styled as “Savings verified.”

Scroll, hover and autoplay never approve a case. The demo does not edit seed fixtures; local state is isolated and reversible. A storage failure shows an understandable local-state warning; it does not imply server persistence. No real passwords, credentials, arbitrary file imports, or production telemetry are accepted.

## 3. Deterministic interval example and arithmetic

**Synthetic time window:** 5 October 2026, 08:00–11:00 UTC. Intervals are start-inclusive/end-exclusive. UTC is a deliberate fixture timezone, not an assumption about the user's locale or a real plant. Product family A and shift A remain constant. A real pilot must account for production mix and other relevant variables.

**Toy baseline, version DEMO-BL-01:** `expected_kwh = 10 + 0.8 × units_produced` per 15-minute slot. This hand-authored illustrative formula is not fitted, calibrated, validated, or a DOE-prescribed model. It only demonstrates documented calculations. No fit statistics, statistical confidence bands or actual savings should be invented. Downtime and missing-meter slots are excluded from eligible comparisons.

| Interval start UTC | Units | Meter kWh | Toy expected kWh | Downtime min | Tariff band | Comparison |
|---|---:|---:|---:|---:|---|---|
| 08:00 | 100 | 90 | 90 | 0 | Off-peak | Eligible; residual 0 |
| 08:15 | 120 | 106 | 106 | 0 | Off-peak | Eligible; residual 0 |
| 08:30 | 110 | 98 | 98 | 0 | Off-peak | Eligible; residual 0 |
| 08:45 | 0 | 18 | 10 | 15 | Off-peak | Excluded: downtime, kWh/unit undefined |
| 09:00 | 90 | 100 | 82 | 0 | Peak | Eligible; residual +18 |
| 09:15 | 100 | 106 | 90 | 0 | Peak | Eligible; residual +16 |
| 09:30 | 100 | Missing | 90 | 0 | Peak | Excluded: missing meter; do not interpolate |
| 09:45 | 80 | 74 | 74 | 0 | Peak | Eligible; residual 0 |
| 10:00 | 100 | 90 | 90 | 0 | Peak | Eligible; residual 0 |
| 10:15 | 120 | 106 | 106 | 0 | Peak | Eligible; residual 0 |
| 10:30 | 110 | 98 | 98 | 0 | Peak | Eligible; residual 0 |
| 10:45 | 100 | 90 | 90 | 0 | Peak | Eligible; residual 0 |

Expected display values:

- Meter interval completeness: **11/12 = 91.7%**, one missing interval at 09:30. Production completeness: 12/12. Distinguish meter inventory coverage, interval completeness, and analysis eligibility.
- Fixture meter inventory: **1 of 1 expected meters in this synthetic process boundary**. This is not 100% plant energy coverage. Calibration status: not verified.
- Eligible paired comparisons: **10/12 = 83.3%**. Missing and downtime exclusions each account for one slot.
- Eligible output: **1,030 units**; observed eligible energy: **958 kWh**; toy expected eligible energy: **924 kWh**; total residual **+34 kWh**, or **+3.68% of expected eligible energy**.
- All valid meter readings total **976 kWh**, including the excluded 18 kWh downtime reading. This is a partial-window sum, not a complete total for the 3-hour period. Do not divide it by all 1,130 production units across the missing period.
- Selected anomaly window 09:00–09:30: observed **206 kWh**, modeled **172 kWh**, residual **+34 kWh**. This is the same residual, not an additional opportunity.
- Actual kWh/unit: 09:00 = 100/90 = **1.111**; modeled 82/90 = **0.911**. At 09:15 actual = **1.060**, modeled = **0.900**. Show three decimals; keep full precision internally.
- At zero production show **N/A — zero output**, never 0 kWh/unit. At missing meter show **Missing**, not zero. No line bridges the missing observation.

Synthetic tariff rates, if needed in the fixture, are USD 0.10/kWh off-peak and USD 0.18/kWh peak. They exist only to illustrate bands and permissions, not a real tariff, cost estimate, peak demand charge, or savings forecast. Do not show a dollar-savings result from this dataset.

**Uncertainty caption:** “Illustrative model; statistical uncertainty not estimated. Meter calibration, product context and attribution are unverified. The observed residual cannot establish the cause or realizable savings.”

**Counterfactual caption:** “Modeled energy is a synthetic comparison, not measured energy after an intervention. No intervention or realized savings is represented.”

## 4. Data dictionary and provenance

All records include `demo_label = DEMO/SIMULATED`, stable IDs, source version and time semantics. Numeric missing values use null, not zero or a string that can be coerced into zero. Join on process, interval start, interval duration and validated timezone; reject duplicate keys rather than silently double-counting.

| Dataset / field | Type / unit | Meaning and validation |
|---|---|---|
| All: `record_id`, `source_id`, `source_row`, `source_version` | String / integer | Stable reference from UI to specific fixture row; source row means parsed data row, explicitly excluding CSV header |
| All: `is_synthetic`, `demo_label` | Boolean / string | Required true and DEMO/SIMULATED in every dataset and export |
| All: `source_generated_at`, `imported_at` | ISO 8601 UTC | Fixture provenance timestamps, separate from operational observation time; clearly simulated |
| Meter: `site_id`, `process_id`, `meter_id`, `historian_tag` | String | DEMO-only identifiers; source mapping must be explicit |
| Meter: `interval_start`, `interval_minutes` | Timestamp / minutes | Start-inclusive interval, 15 minutes in example; reject unsupported duration or overlaps |
| Meter: `energy_kwh` | Decimal, nullable | Interval energy, not power; missing reading remains null; unit conversion documented |
| Meter: `quality`, `calibration_status` | Enum | Valid/missing/suspect; calibration unverified in fixture |
| Production: `units_produced`, `output_unit` | Integer / string | Nonnegative comparable units; distinguish good units from gross units before real analysis |
| Production: `product_family`, `shift_id` | String | Both fixed in toy example; mixed products require explicit mapping/normalization |
| Tariff: `effective_start`, `effective_end` | Timestamps | No overlapping bands; coverage must match analysis period |
| Tariff: `band`, `currency`, `rate_per_kwh` | String / decimal | Purely synthetic rates; currency explicit; exclude demand charges unless separately modeled |
| Downtime: `start`, `end`, `reason`, `operator_ref` | Timestamps / string | Scheduled idle event 08:45–09:00, 15 minutes; overlap calculation documented |
| Baseline: `baseline_id`, `version`, `formula`, `eligibility_rules` | String / structured | DEMO-BL-01, toy coefficients, exclusions, boundary and method type |
| Baseline: `training_period`, `fit_metrics` | Nullable | Null for hand-authored toy model; never present fitted accuracy |
| Derived: `expected_kwh`, `residual_kwh` | Decimal, nullable | Residual = observed minus expected only for eligible comparisons |
| Derived: `actual_kwh_per_unit`, `expected_kwh_per_unit` | Decimal, nullable | Defined only for positive output and eligible data; downtime suppression explicit |
| Derived: `coverage_expected`, `coverage_received`, `eligible_count` | Integer | Recalculate after filters; do not leave window-level coverage attached to a different time window |
| Case: `case_id`, `account_id`, `window_start/end`, `offer_id` | String/timestamp | One decision and its evidence scope; links to one or more relevant offers without collapsing them |
| Case: `observation`, `hypothesis`, `alternatives`, `limitations` | Text/list | Keep measured/synthetic observation distinct from interpretation |
| Case: `status`, `owner_id`, `reviewer_id`, `next_action`, `due_at` | Enum/string/time | Explicit ownership and next action; no live action semantics |
| Evidence: `evidence_id`, `source_refs`, `annotation`, `created_at` | Structured | Row/interval links, author role and chronology; original observation preserved |
| Intervention ledger: `intervention_id`, `proposed_action`, `approval_state`, `control_boundary` | Structured | Proposed only; no executed-at field populated in synthetic case |
| Review: `decision`, `reason`, `reviewer`, `decided_at` | Structured | Local action and user-feedback state; display “simulated review” |
| Pilot: `buyer`, `operator`, `integration_owner`, `permissions`, `baseline_meeting`, `sow_status`, `expansion_owner` | Structured | Qualification context; no signed revenue or authorization claims |

Planned bundled files: `DEMO-meter.csv`, `DEMO-production.csv`, `DEMO-tariff.csv`, `DEMO-downtime.csv`, `DEMO-sources.json`, `DEMO-cases.json`, `DEMO-baseline.json`. The present document specifies these artifacts; it does not pretend they are a deployed ingestion system. Public loading uses bundled fixtures, not arbitrary real-file upload.

Source timestamps in the proposed fixture: meter generated 2026-10-05T11:05:00Z; production 11:06; downtime annotation 11:08; synthetic tariff file 2026-10-01T00:00:00Z; demo import 2026-10-05T11:10:00Z. Baseline authored 2026-10-05T11:15:00Z. These dates form a fictional chronology, not observed customer events.

## 5. Ten fictional case records

Every table row, source item, timeline entry and export retains DEMO/SIMULATED. Dates below are UTC on 5 October 2026 unless a different date is shown. DEMO prefix applies to every displayed owner name.

| Case | Created | Observation/task | Initial state | Owner → reviewer | Linked evidence | Next action / due |
|---|---|---|---|---|---|---|
| DEMO-C001 | 11:20 | Possible compressed-air-related residual, 09:00–09:30 | Pending | Mira Vale → Arun Flint | Meter rows 5–6; production rows 5–6; BL-01 | Review alternative explanations, Oct 6 09:00 |
| DEMO-C002 | 11:22 | Missing 09:30 meter interval | Blocked | Nila Soren → Mira Vale | Meter row 7 | Resolve coverage gap before whole-window conclusion, Oct 6 08:30 |
| DEMO-C003 | 11:25 | 08:45 idle load initially flagged | Rejected at 11:40 | Ivo Reed → Arun Flint | Meter row 4; downtime row 1 | Retain rejection rationale; no intervention, reviewed Oct 5 11:40 |
| DEMO-C004 | 11:27 | Synthetic tag-to-process mapping check | Completed at 11:45 | Nila Soren → Mira Vale | Source manifest; DEMO tag L01.E.KWH | Include mapping note in packet, Oct 6 10:00 |
| DEMO-C005 | 11:30 | Real tariff export authorization unavailable | Blocked | Nila Soren → Lena Quill | Permission-status note; synthetic tariff only | Seek appropriate permission outside public demo, Oct 6 10:30 |
| DEMO-C006 | 11:32 | Confirm product-family comparability | Pending | Ivo Reed → Arun Flint | Production rows 1–12; family A | Confirm output definition in baseline meeting, Oct 6 09:00 |
| DEMO-C007 | 11:35 | Suggested shift move conflicts with production | Rejected at 12:00 | Tomas Wren → Ivo Reed | DEMO scenario constraint note | Keep scenario unapproved; document constraint, reviewed Oct 5 12:00 |
| DEMO-C008 | 11:38 | Source timestamp audit | Completed at 11:50 | Nila Soren → Mira Vale | Four source timestamps and UTC mapping | Attach audit note, Oct 6 10:00 |
| DEMO-C009 | 11:42 | Baseline-method meeting and evaluator confirmation | Pending | Mira Vale → Arun Flint | BL-01 toy-method note; proposed pilot protocol | Agree real method before analysis, Oct 6 09:00 |
| DEMO-C010 | 11:46 | Evidence packet management review | Pending | Mira Vale → Lena Quill | DEMO-EP-001 draft | Review exclusions and conditional next step, Oct 7 14:00 |

Initial queue counters: **10 total / 4 Pending / 2 Blocked / 2 Completed / 2 Rejected**. Counts derive from records. Selecting a filter changes visible count and accessible summary. A reviewer action changes the appropriate counter, not a hardcoded KPI.

The synthetic account's **real-export permission stays pending** even though bundled synthetic rows are available. This avoids implying that a completed tag-mapping task establishes permission or a live connection.

## 6. Sample evidence packet — DEMO-EP-001

**Cover:** DEMO · SIMULATED DATA · CONCEPT PREVIEW. Aster Forge Manufacturing / Plant 01 / L01. Case DEMO-C001. Draft v0.1. Prepared 5 October 2026 12:10 UTC. Reviewer: DEMO Arun Flint. Review pending. No plant-control capability.

**Question:** Does the observed synthetic deviation during 09:00–09:30 justify an engineering investigation after accounting for output and operating context?

**Source manifest:** DEMO-meter.csv data rows 5–6; DEMO-production.csv rows 5–6; DEMO-tariff.csv peak band; DEMO-downtime.csv row 1 for prior idle context; DEMO-BL-01 toy method; source timestamps and local fixture versions. No real historian access.

**Data quality:** Window-wide meter completeness 11/12; missing 09:30 interval; one downtime exclusion; eligible comparisons 10/12; calibration unverified. Selected anomaly window has 2/2 meter and production rows, but neighboring missingness limits broader conclusions. No plant-wide coverage claim.

**Method:** Document the hand-authored formula and its limitations. Observed selected-window energy 206 kWh; toy comparison 172 kWh; residual +34 kWh. These are illustrative values. They are neither avoidable energy nor measured savings.

**Alternative explanations:** Compressor loading or setpoint context; normal process duty changes; product definition/mix issues; production-count latency; meter quality/timestamp errors; residual baseline misspecification. An increase in tariff rate is a cost-context change, not a physical explanation for extra kWh.

**Intervention ledger entry DEMO-I001:** Proposed next step: ask the engineer and operator to assess context and determine whether a plant-approved compressed-air investigation is warranted. Owner DEMO Mira Vale. Operator DEMO Ivo Reed. Reviewer DEMO Arun Flint. Status Pending. No executed intervention. Any physical inspection or process change follows plant procedures; this packet gives no operating instructions.

**Review decision:** Pending. Buttons in the future demo can record local “Mark for investigation,” “Request more evidence,” or “Reject interpretation.” Record a rationale and simulated timestamp. Never call this regulatory approval or operational permission.

**Next action:** Baseline and context review on 6 October 2026 at 09:00 UTC, fictional. Proposed second site remains conditional on engineer review and a named finance decision owner.

**Conclusion:** An illustrative residual is visible. Cause, incremental opportunity and realizable savings remain undetermined. Missing data prevents a complete-window claim.

**Export specification:** Human-readable HTML/print PDF plus structured JSON and source CSV manifest. All retain labels, timestamps, exclusions and method version. JSON export includes synthetic flag on every record. User can re-open the local packet without vendor lock-in; no live writeback or external delivery. Later implementation must verify exports are faithful, reversible and free of real records.

## 7. Paid-pilot ask and entry gates

**Copy-ready ask:**

> Request a paid four-week diagnostic for one process. Bring an energy manager and plant manager sponsor, a named day-to-day operator, a data/integration owner, and an operations/finance sponsor. Before any real records are shared, agree authorized read-only interval meter, production and tariff exports, relevant downtime/context, a baseline method and retrospective comparator, an independent engineer review, and the finance sponsor’s decision criteria. Select one separately quoted module for the first pilot. Expansion to a second site is conditional on the findings surviving engineer review.

Entry gates: identifiable budget owner; named operator; data owner; procurement/legal permission for real records; authorized dataset boundary; plant safety/change-control requirements identified; acceptable historical comparator; agreed scope/price; plant manager and energy manager paid diagnostic SOW; evaluator and finance/second-site decision owner. Do not count a waitlist email as any of these commitments.

Sequence: **offer → example → qualification → manually reviewed discovery → permissioned retrospective comparison → paid pilot SOW → four-week diagnostic → go/no-go**. Any pre-SOW comparison uses only explicitly permitted data under an agreed handling process; the public form and demo are not that process. If no retrospective data can be safely authorized, pause rather than improvising access.

| Period | Planned work | Review artifact |
|---|---|---|
| Before start | Scope selected; permissions, baseline/comparator, evaluator and thresholds agreed | Conditional paid SOW and approved data-handling route |
| Week 1 | Audit supplied records, tags, timestamps, accuracy context, coverage, output and tariffs | Data-quality report and eligible-period decision |
| Week 2 | Fit/establish the agreed real baseline method, document exclusions and alternatives | Versioned method, comparison and engineer challenge |
| Week 3 | Evaluate the selected opportunity/scenario scope with operator constraints | Accepted/rejected/blocked list and rationale |
| Week 4 | Prepare evidence packet; engineer and finance review; explicit next step | Go, revise or stop; second-site decision conditional |

This is a manually assisted evaluation; selected scope controls what is sold. The timeline is not a claim that all five deliverables are included at one module's test price.

## 8. Pilot scorecard and precommitment

No site data exist to justify a universal numerical success threshold. The SOW must fill and sign the threshold fields before the evaluation window; leaving them blank blocks pilot start. The metrics and comparators are concrete now, while thresholds remain site-specific proposals to agree.

| Dimension | Measure and comparison | Precommitted decision rule | Actual result now |
|---|---|---|---|
| Data sufficiency | Eligible interval count / expected; meter inventory boundary; calibration/context; gap locations | Define minimum coverage, max contiguous gap and prohibited gaps in candidate windows. Fail when missing-meter periods invalidate conclusions; never interpolate to manufacture a pass. | Not evaluated |
| Baseline quality | Residual `actual − expected`; holdout MAE in kWh or normalized MAE `sum(abs(residual))/sum(actual)` on comparable eligible holdout intervals | Agree method, holdout window and engineer comparator; accept only below signed error threshold and with credible technical context. No fitting/evaluation leakage. | Not evaluated |
| Opportunity validity | Count analyst-proposed opportunities independently accepted by plant engineer / all reviewed proposals; rejected and unresolved counted separately | Predefine acceptance rubric, minimum evidence and minimum acceptable acceptance rate; retain negative findings. | Not evaluated |
| Incremental insight | Compare accepted opportunities with plant engineer's existing list and existing historian/BMS/manual workflow | Require signed definition of an additional useful insight; do not relabel already-known issues as new value. | Not evaluated |
| Attribution | Adjusted comparison with explicit boundary, interventions, operating changes and uncertainty | No attributed savings if confounded or insufficiently observed; report indeterminate if necessary. | Not evaluated |
| Integration repeatability | Staff hours, mappings and site-specific handling effort per selected module | Pre-agreed effort/cost cap; excess effort triggers revised scope or stop. | Not evaluated |
| Commercial commitment | Distinct qualified budget owners → conditional paid proposals → signed/paid commitments | Track actual willingness to pay and authorized evidence separately; a traffic/waitlist increase does not pass. | Not evaluated |
| Expansion | Engineer review outcome plus second-site decision by named owner | Proceed only if agreed technical and commercial gates pass and the second site has its own permissions. | Not evaluated |

Required registration fields: baseline method/version; energy and process boundary; output definition; eligible/excluded intervals; historical comparator; independent evaluator; observation and holdout windows; thresholds/failure criteria; attribution adjustments; integration cost cap; finance decision owner; plant safety owner; data permission; date and sign-off. No after-the-fact threshold selection.

**Build decision:** Proceed beyond the isolated demo only after the plant manager and energy manager sign the paid four-week diagnostic with approved read-only exports, accepted baseline protocol, and second-site decision owner. Pause if permission, safety sign-off, or a valid historical comparator is unavailable. Never substitute autonomous control to make the business case appear stronger.

## 9. Lead capture, consent, privacy and honest states

### Paid evaluation form

Required: contact name; work email; organization; role; selected offer; process/system of interest; current workflow; pilot timeframe; whether the respondent is the budget owner or can involve one; operator/data-owner readiness; read-only export permission status; willingness to discuss the labeled test price; consent to respond to this inquiry. Optional: sector/site count, operations/finance sponsor availability and a short nonsensitive goal.

Collect readiness and roles initially; recruit named operator and integration owner in manually reviewed discovery. Do not require another person's private contact information in a public form. Ask “Available / Can nominate / Not yet known” for role readiness. Price willingness is “Discuss this hypothesis / Need a different scope / No budget identified,” not payment authorization.

No file upload, credentials, raw telemetry, exact confidential tariff schedules or plant network details. Helper text warns against these in free text. Rate limiting, spam protection and validation must be selected and implemented before launch; they are not existing capabilities.

**Consent copy:** “You may contact me about this evaluation request. I understand that this form is not a channel for operational records.” Separate optional unchecked marketing checkbox: “Send me occasional Plant Load research and product updates.” No bundled or preselected marketing consent.

**Unconnected prototype submit:** “Preview only. Your entries were checked locally and were not sent. Lead delivery is not connected.” Do not write “Request received” or create a fake meeting.

**Connected future success:** Only after confirmed endpoint acceptance: “Your inquiry has been received for manual review. No plant data or access has been authorized by this form.” Avoid unsupported response-time promises.

**Failure:** Keep nonsensitive values available for retry, state no successful submission occurred, link to a verified contact path if one exists. Double submission should be idempotent. Place field errors by fields and provide a focusable summary.

### Optional waitlist

Work email, role, organization, sector/site count, current workflow, pilot timeframe, explicit permission to follow up; separate optional marketing consent. Clear withdrawal/deletion route and no implied pilot acceptance. Demo exploration requires no signup.

### Draft privacy content

Explain inquiry purpose, data categories, service providers actually used, retention period to be approved, consent choices, deletion/withdrawal route, analytics behavior, and contact/controller identity to be verified. State synthetic demo records and local-state behavior separately from real lead records. Do not publish placeholder legal identity, a fabricated DPA or a generic claim of compliance. Human security/legal review defines any subsequent operational-data transfer and permission scope.

## 10. Analytics event plan

Analytics are a future configuration, not installed or successful in this workstream. Nonessential analytics respect the approved consent model and applicable jurisdictional review. A denied-consent visitor retains a usable site; no session replay or operational free text is captured.

Allowed common properties: event schema version, route family, offer ID, campaign/source from sanitized allowlists, concept/demo context, device class and consent state. Do not put email, name, organization, plant ID, meter IDs, raw source rows, tariff values, free-text goals or full query strings in analytics. Handle contact deduplication inside the restricted lead workflow, not by uploading email hashes to marketing analytics.

| Event | Exact trigger | Measurement rule |
|---|---|---|
| `page_view` | Page route meaningfully rendered, after relevant consent | Once per route navigation; not every scroll frame |
| `offer_card_view` | At least 50% of a module panel visible for 1 second | Once per offer per page visit; configurable proposal |
| `demo_open` | Visitor deliberately enters separate synthetic demo | Include source route and offer if known; not a hero image impression |
| `pilot_cta` | Explicit paid-evaluation CTA click | Include selected offer and CTA location |
| `form_start` | First actual form interaction | Do not infer from scroll or auto-focus |
| `form_submit` | Configured lead service confirms successful receipt | Never fire as success for local prototype validation or failed requests |
| `meeting_booked` | Real scheduling confirmation or verified manual booking | Do not fire on calendar link click; separate test mode |

Later restricted CRM milestones: distinct budget owner qualified; named operator confirmed; data owner confirmed; authorized dataset confirmed; conditional proposal issued; paid commitment confirmed; engineer review complete; second-site decision. Count these separately and dedupe the same plant/process/budget owner. Partners, sponsors and adjacent sectors are not additional buyer demand merely because they interacted.

Funnel reports: qualified buyer → consented diagnostic inquiry → authorized dataset → proposal → paid commitment → technical acceptance → conditional expansion. Report denominators, cohort and dates. Raw signups, impressions and CTR are supporting diagnostics only.

## 11. Acquisition and advertising: proposed tests only

Primary channels: Better Plants-adjacent industrial networks, regional manufacturing extension partners, energy auditors, controls integrators and compressor/HVAC service firms. Ask for plant-manager introductions with an energy-manager owner; do not target broad sustainability interest and count it as plant buying intent. No endorsement or partnership is implied.

Publish a worked synthetic kWh-per-unit example on LinkedIn only after explicit publication authorization. Link to `/resources/normalized-baseline-example` or the energy-manager page with a clear paid-diagnostic next step.

**Ad A — buyer job**

Headline: **Before changing a process, explain the deviation.**

Body: Raw meter totals can hide the effects of product mix, downtime and tariffs. Explore a synthetic, read-only workflow for plant energy managers—and discuss a paid four-week diagnostic with an agreed baseline and engineer review.

CTA: **Review the example** → energy-manager solution page → baseline artifact → paid evaluation.

**Ad B — evidence packet**

Headline: **Bring the evidence to the engineering review.**

Body: See how one simulated process links meter readings, production context, missing intervals and a proposed next step in a reviewer packet. Plant Load is a research-stage concept. No live control or demonstrated savings.

CTA: **Explore the simulated packet** → evidence-packet resource → module selection → paid evaluation.

**LinkedIn worked-example post draft**

> In this synthetic example, a production line uses 206 kWh across two intervals against a toy comparison of 172 kWh. The 34 kWh difference is not a savings claim. It is a question for the operator and engineer: what else changed, what evidence is missing, and does the baseline fit the process? Our Plant Load concept links those questions to source rows and a reviewer decision. Explore the labeled example and the proposed four-week diagnostic protocol.

Campaign design: same defined energy-manager audience, comparable creative format and landing-page journey; compare job language against packet language. Operations/finance are sponsors in the same buying group, not pooled adjacent markets. Record targeting, dates, spend cap, spend, impressions, clicks, qualified conversations, authorized inquiries, consented follow-up and paid proposals. Retain negative results.

Before launch, the human owner sets a total cap, per-variant cap, duration, minimum observation volume, stop condition and definition of a qualified meeting. No budget is assumed or spent in this specification. Pause spend when a preset cap or agreed failure condition is reached; do not invent CPC, qualified meetings, conversion rates or campaign success.

Prohibited claims: unverified savings, accuracy, safety, regulatory certification, customers, partner badges, live integration, revenue or product availability. Source references do not validate local net savings.

## 12. Responsive screenshot and asset brief

These are **future capture requirements**, not screenshots produced by this planning work. The source brief mentions `screenshots/32-website-preview.png`, but that file was not supplied here. The eight supplied screenshots show ActClarity, not a built Plant Load demo. Do not reuse either as implementation evidence.

Produce real browser captures from the implemented isolated prototype at **1440px width** (suggested 1000px viewport height) and **390px width** (suggested 844px height). Capture one full-screen desktop frame and a separate mobile frame, plus additional views needed to show the following:

1. Queue: 10 labeled records, counts 4/2/2/2, owners, dates, and at least one blocked and rejected state.
2. Open case: 09:00–09:30 anomaly, observed/expected kWh-per-unit trend, output track, tariff bands, downtime, coverage and missing interval, source pane and local reviewer action.
3. Detail/report: method, source manifest, uncertainty, decision status and counterfactual caveat; no-control boundary visible.
4. Feedback state: reviewer note accepted locally, blocked action reason or clear error; not just a polished empty dashboard.

Desktop composition: compact header and badges; left queue/list; broad chart and decision area; readable evidence pane on right. Do not squeeze table text below legible size merely to fit everything in one frame. Use a separate report frame when needed.

Mobile order: badges → case/status/owner → coverage summary → selected-window trend → output/tariff/downtime context → source details → review action → intervention ledger. No critical disclosure disappears inside a clipped desktop screenshot. Provide a “View data table” alternative; horizontal table scrolling, if needed, is labeled and separate from page scroll.

**Required labels:** DEMO — SYNTHETIC DATA; CONCEPT PREVIEW; illustrative chart/report watermark; source times with timezone; baseline version; uncertainty; reviewer; “No production connection or control.” Every record and export retains synthetic status.

**Suggested alt text:** “Plant Load concept demo showing a synthetic process energy comparison, 11 of 12 meter intervals present, a missing 09:30 interval, and a pending engineer review of a possible compressed-air-related exception. No plant control is available.”

Check at 100% zoom: consistent counts and arithmetic, readable units/timestamps, no proprietary marks/customer identifiers, no live status or invented ROI, keyboard labels and mobile provenance. Project owner verifies the captured screenshot before public marketing use.

## 13. Disclaimers and source treatment

**Short persistent disclosure:** “Concept preview · DEMO — SYNTHETIC DATA.”

**Product disclosure:** “Plant Load is a research-stage concept, not an operating product. This isolated preview uses simulated records and local interactions. Production connectors are future work subject to permissions. Human reviewers own consequential decisions.”

**Commercial disclosure:** “Proposed modules and indicative pilot prices are test hypotheses, subject to integration cost and a conditional SOW. No demand, accepted pricing, real customers, signed revenue or realized savings has been demonstrated.”

**Control disclosure:** “No PLC actuation, demand-response dispatch, live writeback or external integrations. Data access requires appropriate permission. Physical changes remain subject to plant safety and change-control procedures and relevant utility agreements.”

**Research attribution:** “DOE Better Plants and Energiency are references and alternatives, not endorsements of Plant Load or substantiation of local net savings.” Use links and original paraphrases, not regulator/vendor logos, copied marketing copy or screenshots.

**Brand/domain disclosure:** “Plant Load and its module names are working names. The supplied brief reported plantload.com as unpurchased; current ownership and availability have not been verified in this project. The earlier reported RDAP 404 does not establish current availability, ownership or trademark clearance. Registrar and legal review remain with the project owner.”

## 14. Expansion, sizing and parent-managed tracking

Expansion hypothesis: land one process, prove repeatable data handling and useful incremental insight, then consider additional plants, process-specific analyses and verification services. Revenue depends on tested value and integration/service economics, not total factory energy expenditure. No million-dollar revenue or TAM has been established.

Later bottom-up sizing: verified distinct buyer count × tested annual contract value × reachable share. Model services/integration costs separately when estimating contribution or profit; do not call net contribution “revenue.” Never turn sector spend, energy loss volume or equipment capex into a software TAM by assumption.

Future **parent-managed** Notion tracking schema, preserved for handoff only: idea number; working title; buyer/budget owner; operator; hypothesis; five offer IDs; price hypotheses; source links; contact consent; interview date; permissioned dataset status; baseline/evaluator/threshold; paid SOW status; integration owner; safety boundary; regulatory review; demo URL; screenshot verification; name/domain verification; traffic cohort/spend; qualified meetings; decision; next action. No Notion access or update is part of this workstream.

Parent/project owner separately verifies branding, domain, screenshot use, real-data permissions, procurement/legal review, destinations for leads and analytics, and tracking. These responsibilities do not change the spec’s completeness; they are implementation and pilot gates.
