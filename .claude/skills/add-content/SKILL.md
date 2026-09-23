---
name: add-content
description: Add a course, talk, podcast, livestream, article, or YouTube video to guilhernandez.com. Use when asked to add, list, or feature a new link or video on the site.
---

# Add content to the site

Read `AGENTS.md` first. It defines the markup, list rules, and copy rules this skill relies on.

## 1. Gather details

You need a URL, a title, a platform or venue, and a section:

- **Courses** (`#courses`): courses, tutorials, video series.
- **Speaking** (`#speaking`): conference talks, podcasts, panels, webinars.
- **Writing** (`#writing`): articles, livestreams, standalone videos.
- **Recent videos** (`#videos`): YouTube videos for the player. Only when asked to add or feature a video there.

Fetch the URL to confirm it resolves and to get the real title. Shorten long titles the way the existing entries do. If the section is unclear, ask.

## 2. Check for duplicates

Search `index.html` for the URL and the title. If it's already there, say so instead of adding it again.

## 3. Insert the entry

Add it at the **top** of the right list, using the exact markup from `AGENTS.md`.

For courses, add it to the curated list (the first `.list` in `#courses`), then move the last curated item to the top of `#courses-extra`, so the curated list stays at 8 items.

For Recent videos, use the video markup from `AGENTS.md`. Get the runtime and upload date from the video page.
- **Featuring it:** make it the first item with `aria-current="true"`, update the player block to match, and update the JSON-LD VideoObject (name, description, thumbnail, upload date, ISO 8601 duration such as `PT1H39M18S`, URLs).
- **Otherwise:** insert it after the featured item, newest first.
- Keep the list at about five items: drop the oldest non-featured video, and ask first if unsure.

## 4. Update `llms.txt`

Add a matching line to the same section in `llms.txt`, in the same position: `- [Title](URL): Platform` (videos also list month, year, and runtime). Courses in `#courses-extra` go under `## Optional`, so the item you moved out of the curated list moves there too.

## 5. Don't touch counts silently

If the addition might change a stat (learners, courses shipped, platforms), ask before editing the stats, the meta description, or the OG and Twitter tags.

## 6. Dates

Set `dateModified` in the JSON-LD and `<lastmod>` in `sitemap.xml` to today's date.

## 7. Copy rules

No em dashes. Escape `&` as `&amp;` in HTML (but not in `llms.txt`).

## 8. Verify

Follow "Before you finish" in `AGENTS.md`. Don't commit unless asked, because pushing to `master` deploys to production.
