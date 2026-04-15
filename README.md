# AI Policy & Governance Tracker

A static research dashboard tracking AI legislation, regulation, and governance across the EU, US, UK, and China.

**Live site:** `https://jacklchang.github.io/AI-Policy-Governance-Tracker/`

## Features

- **Governance Scorecard** — Eight dimensions rated across four jurisdictions, with hover tooltips explaining each rating
- **Major Bills** — Key AI legislation tracked with status, history, and filterable by jurisdiction
- **Latest Updates** — Curated policy developments tagged by type and significance

## Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## Deployment

Push to `main` — GitHub Actions builds and deploys automatically.

**First-time setup:**
1. Go to your repo → Settings → Pages
2. Under "Build and deployment", set Source to **GitHub Actions**
3. Push to `main` — the workflow handles the rest


## Keeping it up to date

All content lives in `src/data/`. You never need to touch the components.

| File | What to edit |
|---|---|
| `src/data/scorecard.js` | Jurisdiction scores and cell explanations |
| `src/data/bills.js` | Bill status, summaries, and latest actions |
| `src/data/updates.js` | New policy developments |
| `src/data/jurisdictions.js` | Add or remove countries |

### Adding a new bill

Open `src/data/bills.js` and add an entry to the `BILLS` array:

```js
{
  id: "unique-id",
  name: "Bill Name",
  jurisdiction: "US",          // EU | US | UK | China
  status: "committee",         // inforce | signed | passed | committee | pending | stalled
  introduced: "Jan 2026",
  lastAction: "Apr 2026 — description of latest development",
  summary: "What the bill does and why it matters.",
  highlight: true,             // true = "Key bill" badge + blue left border
  link: "https://...",         // official text URL, or empty string
},
```

### Adding a policy update

Open `src/data/updates.js` and prepend to the `UPDATES` array:

```js
{
  headline: "Short, specific headline",
  summary: "One or two sentences on what happened and why it matters.",
  type: "Legislation",         // Legislation | Regulation | International | Courts | Safety
  jurisdiction: "EU",          // EU | US | UK | China | Global
  date: "Apr 2026",
  source: "Publication name",
  significance: "High",        // High | Medium
  link: "",
},
```

### Updating a scorecard cell

Open `src/data/scorecard.js`, find the row by `id`, and edit the `notes` object for the relevant jurisdiction:

```js
us: { s: 2, note: "Updated explanation here." },
// s: 3=Strong, 2=Partial, 1=Weak, 0=None
```
