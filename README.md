# Seaborne International website

Redesigned marketing site for Seaborne International (Marine & Offshore Solutions), built with Next.js 15 and React 19.

## Pages

| Route | Content |
|---|---|
| `/` | Who we are, mission & vision, why Seaborne, what leads us, management principles, governance, products, contact |
| `/sales-services` | Competencies, competitive edge, shipowner benefits, sale & purchase |
| `/project-management` | Drydocking, market research, commercial & project control |
| `/engineering-technical` | Design partnerships, shipbuilding specifications, shipyard selection, green financing |
| `/design-preview.html` | Standalone de-branded preview of the design (fictional "Halyard Marine") |

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing

- All page copy lives in `lib/content.js`.
- Theme colours and styles are in `app/globals.css` (colour tokens at the top).
- The contact forms are demo-only and need connecting to an email service or CRM before going live.
