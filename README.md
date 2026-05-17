# UAE Bank History — تاريخ المصارف الإماراتية

An independent bilingual (English / Arabic) archive tracing the mergers, acquisitions, and evolution of banks across the United Arab Emirates.

**[uaebankhistory.ae](https://uaebankhistory.ae)** *(coming soon)*

---

## Structure

```
index.html          — Homepage
style.css           — Shared stylesheet
lang.js             — EN/AR language switcher
diagram.html        — Merger diagram (in progress)
banks/
  emirates-nbd.html — Emirates NBD history page
```

## Adding a new bank page

1. Copy `banks/emirates-nbd.html` as a starting point.
2. Update the `<title>`, page header, prose, and timeline entries.
3. Add `data-en="..."` and `data-ar="..."` attributes to every translatable element.
4. Link the new page from `index.html` (remove the `fb-coming-soon` class from the relevant card).
5. Add related entry links on connected bank pages.

## Bilingual support

Language is toggled via the EN / عربي buttons in the navigation. The preference is persisted in `localStorage`. Switching to Arabic:
- Sets `html[dir="rtl"]` for full right-to-left layout
- Swaps all `data-en` content for `data-ar` equivalents

All translatable strings are stored as `data-en` / `data-ar` attributes directly on their HTML elements, so translations stay close to the content they describe.

## Development

No build step — plain HTML, CSS, and JavaScript. Open any `.html` file directly in a browser, or serve locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

© Tariq Albastaki 2026. An independent archival project.
