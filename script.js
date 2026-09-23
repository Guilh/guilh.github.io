// Nav: firm up the frosted bar once the page scrolls under it.
const nav = document.querySelector('nav[aria-label="Main"]');

if (nav) {
  const update = () => nav.classList.toggle("is-scrolled", scrollY > 8);
  addEventListener("scroll", update, { passive: true });
  update();
}

// Courses: reveal the full list from the curated view.
const toggle = document.querySelector(".courses-toggle");
const extra = document.getElementById("courses-extra");

if (toggle && extra) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    extra.hidden = expanded;
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.querySelector(".label").textContent = expanded
      ? "View all courses"
      : "Show fewer courses";
  });
}

// Recent videos: every item is a plain YouTube link; with JS it plays in place instead.
// Pages opened straight from disk have no origin and YouTube refuses those embeds, so
// the links are left alone there.
const frame = document.querySelector(".player-frame");
const queue = [...document.querySelectorAll(".q")];

if (frame && queue.length && location.protocol !== "file:") {
  const poster = frame.querySelector(".player-poster");
  const play = frame.querySelector(".player-play");
  const title = document.querySelector(".player-title");
  const meta = document.querySelector(".pm-text");
  const runtime = document.querySelector(".player-meta .rt");
  const featured = document.querySelector(".featured");
  const yt = document.querySelector(".player-yt");

  const embed = () => {
    const { video, start } = frame.dataset;
    const params = new URLSearchParams({ autoplay: 1, rel: 0, playsinline: 1, origin: location.origin });
    if (start) params.set("start", start);

    const iframe = document.createElement("iframe");
    // YouTube rejects embeds that arrive without a referrer (error 153).
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.src = `https://www.youtube-nocookie.com/embed/${video}?${params}`;
    iframe.title = title.textContent;
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    frame.append(iframe);
    frame.classList.add("is-playing");
    iframe.focus();
  };

  const select = (item) => {
    const d = item.dataset;
    queue.forEach((q) => q.removeAttribute("aria-current"));
    item.setAttribute("aria-current", "true");

    frame.querySelector("iframe")?.remove();
    frame.classList.remove("is-playing");
    frame.dataset.video = d.id;
    if (d.start) frame.dataset.start = d.start;
    else delete frame.dataset.start;

    poster.src = `https://i.ytimg.com/vi/${d.id}/maxresdefault.jpg`;
    play.href = yt.href = item.href;
    play.setAttribute("aria-label", `Play ${d.title}`);
    title.textContent = d.title;
    meta.textContent = d.meta;
    runtime.textContent = d.rt;
    featured.hidden = item !== queue[0];

    const r = frame.getBoundingClientRect();
    if (r.top < 0 || r.bottom > innerHeight) {
      const smooth = matchMedia("(prefers-reduced-motion: no-preference)").matches;
      frame.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "center" });
    }
    embed();
  };

  // Let modified clicks (new tab, etc.) behave like normal links.
  const plainClick = (e) => !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0);

  frame.addEventListener("click", (e) => {
    if (frame.classList.contains("is-playing") || !plainClick(e)) return;
    e.preventDefault();
    embed();
  });
  queue.forEach((item) =>
    item.addEventListener("click", (e) => {
      if (!plainClick(e)) return;
      e.preventDefault();
      select(item);
    })
  );
}
