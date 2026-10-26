# NURIMI implementation paths

Decision supplement, 27 October 2026. This expands the initial fast-launch research; it does not report new merchant or production tests.

## Decision to make

The original memo prioritised a first Saudi store with a small operating team. The founder also wants a reusable commerce product across independent retail brands. These objectives need separate delivery paths. Salla is one option, not a required foundation.

1. Managed store: supported Salla/Zid theme and checkout. Lowest custom engineering footprint; identity, product evidence, operations and exports remain our work.
2. Custom storefront: Next.js/TypeScript experience, an approved commerce API and managed hosted checkout. Own the frontend, adapter and deployment; continue depending on the vendor for commerce. Prove API entitlement, session/domain behaviour and checkout handoff before building broadly.
3. Owned commerce: Next.js/TypeScript, Medusa v2, PostgreSQL, production Redis modules and server/worker deployment. Contract a Saudi PSP; implement and test payment, invoice and fulfilment adapters. Own source and data while accepting backend reliability, updates, security and recovery responsibilities.

## Recommendation for the founder’s wider goal

Fund a bounded owned-commerce proof before committing to the whole platform. It is strategically relevant to the brand-factory goal, but not automatically the fastest first launch. Proceed only with an accountable technical owner, accepted providers and a funded maintenance plan. Keep hybrid as a practical fallback when custom UX matters more than control of the backend. Keep managed native as the speed-first alternative.

Use an established commerce engine rather than rebuilding catalogue, orders and inventory primitives. Payment processing stays with a contracted PSP; never collect raw card data in our application. No ready, audited Saudi Medusa connector has been established by this research.

## First vertical slice

One eligible merchant, one verified product, one stock location, Arabic/English product view and cart, one PSP sandbox, order status, invoice sample, stock reservation, cancellation/refund and daily reconciliation. Deliver company-owned source, reproducible deployment, event logs, failure evidence and restore evidence. Validate live acquiring, settlement, legally acceptable invoicing and warehouse performance separately before release.

## Build sequence

1. Prove the risky payment/order/stock/refund connection and actual access.
2. Establish company accounts, environments, schema, roles, secrets, deployment and backup/restore.
3. Build the responsive Arabic/English shopping journey, product education and accessibility.
4. Complete invoice/credit-note, warehouse, dispatch, returns, notifications and reconciliation operations.
5. Test repeated/out-of-order events, expired carts, final-unit races, payment failures, recovery and RTL.
6. Pilot a verified assortment, then deploy the SADA internal brand from the same release and prove isolation.

## Repetition and ownership

Share versioned UI, schemas, adapter interfaces, tests and infrastructure templates. For independent retailers, start with a separate backend/database, credentials, customer access and financial configuration per retailer, provisioned from the same code. Medusa’s Store Module does not provide native multi-tenancy; sales-channel scoping alone is insufficient isolation. Consolidating instances later needs explicit security architecture and tests.

The warehouse owns physical inventory truth. Each store sells its allocation. Reserve stock atomically and reconcile delayed/failed events. A unit cannot be independently promised by multiple stores.

## Estimation basis

All amounts in the interactive Build paths model are editable architecture judgement, not vendor quotations or a promised date. Route presets represent aggregate labour across design, engineering, QA and integration, not elapsed solo-developer time.

- Native first-store labour: 96 hours; repeat store 28 hours.
- Hybrid first-store labour: 240 hours; repeat store 48 hours.
- Owned first-store labour: 520 hours; repeat store 72 hours.
- Default blended rate: SAR200/hour; contingency: 20%; effective capacity: 60 team hours/week.
- Default owned setup: SAR124,800; monthly technical run: SAR3,530; first-year technical allowance: SAR167,160.
- Owned proof: 32 hours / SAR7,680 including contingency, already included in setup.

Setup hours = first-store hours + additional-store count × repeat hours. Setup budget = hours × rate × (1 + contingency). Monthly technical run = shared services + store count × per-store services + total maintenance hours × rate. Total maintenance hours = base maintenance + additional-store count × extra maintenance per store. The new planning assumptions add 1/2/3 monthly maintenance hours per additional native/hybrid/owned store; replace with a priced support plan. First-year technical allowance = setup + twelve months of run cost. Proof hours cannot exceed first-store hours. Phase one equals proof hours; remaining first-store effort is distributed across other phases.

The earliest calendar scenario takes the larger of engineering effort/capacity and external prerequisite lead time, assuming both start on day one. Sequential delays, reviews, defects and launch learning can extend it. Maintenance capacity must be revised as the portfolio grows.

Inventory, marketing, retail labour, variable PSP/carrier charges, legal/tax work, taxes and unentered licences are excluded. These estimates are separate from the older managed-store portfolio model; do not add both. Replace every assumption with provider quotes and measured proof effort before authorising the full build.

## Direct comparison and decision completeness

The comparison now shows managed and owned commerce simultaneously, with hybrid optional. All columns use the same store count, labour rate, productive capacity, contingency and external lead. Each route retains its own estimates. The horizon subtotal is setup plus monthly technical operation multiplied by the chosen months; it is not the business's total cost or required funding. No cheapest-route recommendation follows from this subtotal alone.

Compare control of storefront, checkout, admin/data, Saudi payment access, integrations, operations, security/recovery, brand isolation, dependency and exit work. Vendor selection and delivery-model selection must agree before a founder brief can be treated as a coherent decision. Matching them still does not prove account eligibility or release readiness.

Seven cash categories remain unpriced until entered: opening stock, warehouse deposits/setup, launch marketing, legal/product/tax work, retail-team runway, settlement/refund/shipping/loss buffers, and exit/licences outside technical inputs. Explicit zero differs from unknown. Priced allowances are shown separately and never silently added to technical totals. Peak working capital still needs supplier terms, inventory ageing, settlement/tax timing, returns and a cash-flow schedule.

Eight proposed evidence records cover merchant/bank/PSP, verified products, invoice/warehouse loop, security/recovery/access, exit/contracts, cash cycle, demand/unit economics and second-brand separation. Local record completeness requires status, accountable owner and evidence note. It is not external validation. Review date, rationale and reversal evidence belong in the decision record.

Exit proof includes re-import and reconciliation of core data, continued authorised order/refund/invoice access, consent and suppression records, domains/SEO/analytics continuity, payment-token transfer limits, contract termination and provider deletion confirmation where agreed. An export file alone does not prove recovery or migration.

## Official capability references

- Salla cart API scope: https://docs.salla.dev/checkout-apis/overview — cart operations; payment submission/full payment orchestration excluded from this collection.
- Hosted checkout handoff: https://docs.salla.dev/checkout-apis/key-concepts — checkout_url redirect, not evidence of merchant entitlement or a tested custom integration.
- Medusa deployment: https://docs.medusajs.com/learn/deployment/general — PostgreSQL, Redis, server/worker processes; storefront and infrastructure need production configuration.
- Store isolation: https://docs.medusajs.com/resources/commerce-modules/store — multiple stores require custom scoping; no native multi-tenancy.
- Payment provider extension: https://docs.medusajs.com/resources/commerce-modules/payment/payment-provider — provider lifecycle and custom extensions; not certification of a Saudi adapter.
- Moyasar events: https://docs.moyasar.com/api/other/webhooks/webhook-reference — payment/refund events and finite retries; durable ingestion, validation and reconciliation remain integration responsibilities.
- Next.js hosting: https://nextjs.org/docs/app/guides/self-hosting — hosting, caching and proxy responsibilities; not a Saudi compliance determination.

Architecture, labour, isolation defaults and proof criteria are our proposals. Official references support capabilities and constraints, not commercial acceptance or measured NURIMI results.
