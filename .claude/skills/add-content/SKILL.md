---
name: add-content
description: Add a course, talk, podcast, livestream, or article to guilhernandez.com. Use when asked to add, list, or feature a new link on the site.
---

# Add content to the site

Read `AGENTS.md` first. It defines the markup, list rules, and copy rules this skill relies on.

## 1. Gather details

You need a URL, a title, a platform or venue, and a section:

- **Courses** (`#courses`): courses, tutorials, video series.
- **Speaking** (`#speaking`): conference talks, podcasts, panels, webinars.
- **Writing** (`#writing`): articles, livestreams, standalone videos.

Fetch the URL to confirm it resolves and to get the real title. Shorten long titles the way the existing entries do. If the section is unclear, ask.

## 2. Check for duplicates

Search `index.html` for the URL and the title. If it's already there, say so instead of adding it again.

## 3. Insert the entry

Add it at the **top** of the right list, using the exact markup from `AGENTS.md`.

For courses, add it to the curated list (the first `.list` in `#courses`), then move the last curated item to the top of `#courses-extra`, so the curated list stays at 8 items.

## 4. Update `llms.txt`

Add a matching line to the same section in `llms.txt`, in the same position: `- [Title](URL): Platform`. Courses in `#courses-extra` go under `## Optional`, so the item you moved out of the curated list moves there too.

## 5. Don't touch counts silently

If the addition might change a stat (learners, courses shipped, platforms), ask before editing the stats, the meta description, or the OG and Twitter tags.

## 6. Copy rules

No em dashes. Escape `&` as `&amp;` in HTML (but not in `llms.txt`).

## 7. Verify

Follow "Before you finish" in `AGENTS.md`. Don't commit unless asked, because pushing to `master` deploys to production.
