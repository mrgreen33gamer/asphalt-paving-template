# Asphalt Paving Template — Design Spec

## Context

Scott Apps sells a family of near-identical Next.js marketing-site templates, one per trade, each forked from `hvac-template` and re-skinned. This run reskins `asphalt-paving-template`, following `RESKIN_PLAYBOOK.md`.

Asphalt paving is **gallery-first**: keep and rebuild `/projects` (portfolio of paving jobs). Per-city SEO subpages (`waco-tx` / `temple-tx` / `killeen-tx`) are **deleted**.

Reference sibling: `concrete-driveway-template` (gallery-first structure).

## Business Identity (locked)

- **Business name:** Blackline Paving
- **Tagline:** Asphalt Paving · Sealcoating · Striping
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Founded:** 2003
- **Owner:** Vince Alvarez
- **Credential/license line:** Commercial Paving Contractor · Bonded & Insured
- **Guarantee:** 2-Year Workmanship on New Pavement
- **Social proof:** 4.9★, 800+ reviews, 5,500+ jobs
- **Brand accent:** amber `#f59e0b` (`$orange` + hardcoded hex loaders)
- **Chrome dark:** slate charcoal `#1e293b` (themeColor / obsidian)
- **Phone:** (254) 880-8080 / `tel:+12548808080`
- **Email:** hello@blacklinepaving.com
- **Domain:** blacklinepaving.com
- **Address:** 4200 Franklin Ave, Waco, TX 76710

## Services (6)

| Old HVAC slug | New slug | Title |
|---------------|----------|-------|
| ac-repair | asphalt-paving | Asphalt Paving |
| heating | sealcoating | Sealcoating |
| installation | parking-lots | Parking Lots |
| duct-cleaning | line-striping | Line Striping |
| indoor-air-quality | pothole-repair | Pothole Repair |
| maintenance | overlay-resurfacing | Overlay & Resurfacing |

## Industries (3)

| Old | New slug | Title |
|-----|----------|-------|
| automotive | retail-centers | Retail Centers |
| manufacturing | schools-municipal | Schools & Municipal |
| oil-gas | industrial-yards | Industrial Yards |

## Blogs (3)

1. `when-to-sealcoat-asphalt-texas`
2. `pothole-repair-vs-overlay`
3. `parking-lot-striping-compliance`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3), **Projects** (gallery index + `[slug]` case studies). No per-city SEO.

## Projects (KEEP + rebuild)

Gallery-first portfolio using `libs/local-db/projects.ts` + `ProjectCardGrid` / `BeforeAfter` / case-study routes. Categories align to the six services.

## Non-goals

- No marketplace catalog flip (separate pass on `scottapplications`).
- No new component primitives — sibling-clone of existing page shapes.
- Do not commit `.env` / Mapbox `pk.eyJ…` tokens.

## Success criteria

- `npm run typecheck` passes
- Grep clean of HVAC / Arctic Air / old phone / Mapbox pk tokens / vendor identity leaks
- Accent `#f59e0b` in SCSS tokens and hardcoded loaders; chrome `#1e293b`
- City SEO deleted; projects gallery live
