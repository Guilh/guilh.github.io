# AGENTS.md

Personal site for Guil Hernandez, served at https://guilhernandez.com by GitHub Pages.

**Pushing to `master` deploys to production right away.** There is no staging, so treat every push as a release. Only commit or push when asked.

## Stack and constraints

- Plain HTML, CSS, and vanilla JS. No build step, no `package.json`, no framework.
- Don't add tooling, dependencies, or new pages without asking.
- Never edit `CNAME` (custom domain) or the Google Analytics id (`G-Z2BVVNG3G6`) in `index.html`.

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | All page content. Content lives in HTML for SEO; nothing is rendered by JS. |
| `style.css` | Design system. Tokens live in `:root`. |
| `script.js` | Only the "View all courses" toggle. |
| `assets/` | `guil.jpg` (avatar), `banner-bg.jpg` (footer background). |
| `192.png`, `512.png`, `manifest.webmanifest` | Icons, OG image, web manifest. |
| `llms.txt` | Plain-text summary of the site for AI assistants. Must mirror `index.html`. |
| `robots.txt` | Allows all crawlers, including AI crawlers. |

`mockups/` and `original-design-backup/` may exist locally. They are gitignored reference copies: never edit them, link to them, or treat them as the live site.

## Run locally

```bash
npx -y serve -l 4599 .
```

Then open http://localhost:4599.

## Content model

Courses, Speaking, and Writing are lists of links. Every entry uses this exact markup:

```html
<a href="URL" target="_blank" rel="noopener"><span class="t">Title</span><span class="m">Platform or venue</span></a>
```

- Newest entries go first.
- `#courses` has two lists: the curated `.list` shown by default (keep it at 8 items), and `#courses-extra`, hidden until "View all courses" is clicked.
- `#speaking` and `#writing` sit side by side in the `.twoup` section.
- Escape `&` as `&amp;` in titles and platforms.

## Keep in sync

When you change content in `index.html`, check these too:

- `llms.txt`: every list entry, the bio, and contact links.
- Stats: the About paragraph ("550,000+ learners") and the `.stats` block.
- `<meta name="description">` plus the Open Graph and Twitter tags in `<head>`.
- The footer copyright year range.

## Design rules

The site is deliberately editorial and refined. Keep it that way.

- Use only the tokens in `style.css` `:root`: oat paper, espresso ink, olive accent, ochre. Don't introduce new colors ad hoc.
- Type: Fraunces (display, italic serif kickers) and Inter (body).
- No em dashes in copy.
- No monospace, code, or terminal motifs. No pulsing or decorative dots. No background grids or line patterns. No generic "AI startup" look (terracotta on cream, mono uppercase eyebrows, cursor glows).
- No stats that reveal age, such as years of experience.
- Respect `prefers-reduced-motion`.
- Keep the accessibility patterns: `aria-label` on icon-only links, `aria-expanded`/`aria-controls` on the toggle, visible focus styles, meaningful `alt` text.
- Layout must work down to ~375px wide with no horizontal scroll.

## Before you finish

1. Serve locally and load the page. The console should show no errors.
2. Check a ~375px mobile width.
3. If you touched the courses lists or `script.js`, click "View all courses" and back.
4. Confirm `llms.txt` still matches the page.

## Git

Short, lowercase commit messages that match the history, such as `add new course`, `update bio`, or `update links`.
