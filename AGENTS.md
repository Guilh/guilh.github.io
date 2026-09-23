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
| `script.js` | Frosted nav on scroll, the "View all courses" toggle, and the Recent videos player. |
| `assets/` | `guil.jpg` (About portrait), `banner-bg.jpg` (studio photo: faded hero backdrop and footer background). |
| `og-image.jpg` | 1200×630 link-preview image (portrait, name, headline, learner count). |
| `192.png`, `512.png`, `manifest.webmanifest` | Icons and web manifest. |
| `llms.txt` | Plain-text summary of the site for AI assistants. Must mirror `index.html`. |
| `robots.txt`, `sitemap.xml` | Allow all crawlers, including AI crawlers; point them at the one page. |

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

### Recent videos (`#videos`)

The list holds about five YouTube videos. Each item is a real link, so it works without JavaScript and agents can read the URL; `script.js` turns clicks into play-in-place:

```html
<li><a href="https://www.youtube.com/watch?v=ID" target="_blank" rel="noopener" class="q" data-id="ID" data-title="Title" data-meta="Platform · Month YYYY" data-rt="H:MM:SS">
  <span class="q-thumb"><img src="https://i.ytimg.com/vi/ID/mqdefault.jpg" alt="" loading="lazy" /><span class="q-rt">H:MM:SS</span></span>
  <span class="q-text"><span class="q-t">Title</span><span class="q-m">Platform · Mon YYYY</span></span>
</a></li>
```

- The first item is the featured video. It carries `aria-current="true"`, and the player block above the list (`data-video`, poster, play link, title, meta, runtime, "Watch on YouTube") must describe the same video.
- The rest follow newest first.
- To start a video partway in, add `data-start="SECONDS"` and `&amp;t=SECONDSs` to its `href`.
- Get runtimes and upload dates from the video page, not from memory.

## Keep in sync

When you change content in `index.html`, check these too:

- `llms.txt`: every list entry (including Videos), the bio, and contact links.
- Stats: the About bio and portrait caption ("550,000+ learners · 150+ courses · 7+ platforms").
- `<meta name="description">` plus the Open Graph and Twitter tags in `<head>`.
- The JSON-LD block in `<head>`: the Person description and profile links, and the VideoObject, which must match the featured video.
- The date of any content change: `dateModified` in the JSON-LD and `<lastmod>` in `sitemap.xml`.
- `og-image.jpg` bakes in the headline and learner count. If those change, ask before regenerating it.
- The footer copyright year range.

## Design rules

The site is deliberately editorial and refined. Keep it that way.

- Use only the tokens in `style.css` `:root`: oat paper, espresso ink, olive accent, ochre. Don't introduce new colors ad hoc.
- Type: Fraunces (display, italic serif kickers) and Inter (body).
- Corners: the portrait and video player share `--radius` (10px). Everything else stays square or nearly square.
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
4. If you touched videos, click a list item and confirm it plays in place. Test on `localhost`: YouTube refuses embeds on pages opened from disk (`file://`).
5. Confirm `llms.txt` still matches the page, and that the JSON-LD still parses.

## Git

Short, lowercase commit messages that match the history, such as `add new course`, `update bio`, or `update links`.
