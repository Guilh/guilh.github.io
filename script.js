// ── DATA ──────────────────────────────────────
const courses = [
  {
    title: "Build Your First Agent in TypeScript",
    platform: "Mastra",
    url: "https://mastra.ai/learn/what-is-an-agent",
  },
  {
    title: "Extend Copilot's Agent Mode with MCP",
    platform: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/hands-on-mcp-extend-agent-mode-with-vs-code",
  },
  {
    title: "Node and OpenAI's Assistants API",
    platform: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api",
  },
  {
    title: "Chat Tool with OpenAI and Pinecone",
    platform: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/creating-a-chat-tool-using-openai-models-and-pinecone",
  },
  {
    title: "DALL·E and GPT-4 Vision",
    platform: "Scrimba",
    url: "https://scrimba.com/learn/dalle",
  },
  {
    title: "Deploying AI Apps with Cloudflare",
    platform: "Coursera",
    url: "https://www.coursera.org/learn/deploy-ai-app-with-cloudflare",
  },
  {
    title: "AI Embeddings and Vector Databases",
    platform: "Scrimba",
    url: "https://scrimba.com/playlist/p7zP5gdHJ",
  },
  {
    title: "Learn OpenAI's Assistants API",
    platform: "Scrimba",
    url: "https://scrimba.com/learn/openaiassistants",
  },
  {
    title: "Learn to Code with AI",
    platform: "freeCodeCamp & Scrimba",
    url: "https://youtu.be/dJhlMn2otxA",
  },
  {
    title: "AI Coding for Non-Coders",
    platform: "Scrimba",
    url: "https://scrimba.com/learn/aicoding",
  },
  {
    title: "JavaScript on the Go: Objects",
    platform: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/javascript-on-the-go-objects/uncovering-javascript-objects",
  },
  {
    title: "React Router v6",
    platform: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6",
  },
  {
    title: "JavaScript and the DOM",
    platform: "Treehouse",
    url: "https://teamtreehouse.com/library/javascript-and-the-dom-3",
  },
  {
    title: "React Hooks",
    platform: "Treehouse",
    url: "https://teamtreehouse.com/library/react-hooks",
  },
  {
    title: "Asynchronous Programming with JavaScript",
    platform: "Treehouse",
    url: "https://teamtreehouse.com/library/asynchronous-programming-with-javascript",
  },
  {
    title: "Beginner's Guide to JavaScript",
    platform: "YouTube",
    url: "https://youtu.be/UOeofWla8mE",
  },
  {
    title: "JavaScript Basics",
    platform: "YouTube",
    url: "https://youtu.be/ekYNA10oe2I",
  },
  {
    title: "React Authentication",
    platform: "Treehouse",
    url: "https://teamtreehouse.com/library/react-authentication",
  },
];

const speaking = [
  {
    title: "How to Make AI Work for You",
    venue: "Podcast",
    url: "https://youtu.be/wS9Pq2zss68",
  },
  {
    title: "Be a Librarian, Not an Encyclopedia of Code",
    venue: "Scrimba Podcast · 2022",
    url: "https://scrimba.com/podcast/be-a-librarian-not-an-encyclopedia-of-code-how-to-learn-and-teach-better-with-guil-hernandez",
  },
  {
    title: "Treehouse Festival — Emcee",
    venue: "2021",
    url: "https://teamtreehouse.com/library/treehouse-festival-june-2021",
  },
  {
    title: "#100DaysOfCode — Tackling Imposter Syndrome",
    venue: "Podcast",
    url: "https://podcasts.apple.com/ca/podcast/week-9-day-46-100-tackling-imposter-syndrome-guil-hernandez/id1506070060?i=1000476408134",
  },
  {
    title: "Thunder Nerds Podcast",
    venue: "2019",
    url: "https://www.thundernerds.io/2019/04/guil-hernandez-front-end-design-conference-2019/",
  },
  {
    title: "Front-End Design Conference",
    venue: "St. Petersburg, FL",
    url: "http://frontenddesignconference.com/speakers.php",
  },
  {
    title: "CSSconf EU",
    venue: "Berlin · 2017",
    url: "https://www.youtube.com/watch?v=UMwunYQGvhs",
  },
  {
    title: "Treehouse Festival",
    venue: "2020",
    url: "https://www.youtube.com/watch?v=WvAz833OkFg",
  },
];

const writing = [
  {
    title: "Agents Hour Podcast",
    kind: "Livestream",
    url: "https://youtu.be/i_gtfrxNHgE?si=xfi5X420HpVo_cBO",
  },
  {
    title: "Scrimba's new AI Engineer Path — AMA",
    kind: "Livestream",
    url: "https://www.youtube.com/live/5nisJWiG6vs",
  },
  {
    title: "How to Learn Web Development",
    kind: "Video",
    url: "https://youtu.be/negHxxfwAmc",
  },
  {
    title: "The Importance of Code Reviews",
    kind: "Article",
    url: "https://scrimba.com/articles/the-importance-of-code-reviews/",
  },
  {
    title: "Treehouse Coding Livestreams",
    kind: "Playlist",
    url: "https://youtube.com/playlist?list=PLuC2HflhhpLHMBPwoNhilQaBlaZpzo5_I",
  },
  {
    title: "Panel Discussion — Onramp",
    kind: "Video",
    url: "https://youtu.be/lNgtLwescaY",
  },
  {
    title: "Treehouse Blog Articles",
    kind: "Archive",
    url: "https://blog.teamtreehouse.com/author/guillermohernandez",
  },
];

// ── RENDER ────────────────────────────────────
const arrowSVG = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 13 L13 3"/><path d="M5 3 L13 3 L13 11"/></svg>`;

const courseGrid = document.getElementById("course-grid");
courseGrid.innerHTML = courses
  .map(
    (c) => `
      <a href="${c.url}" target="_blank" rel="noopener" class="course-card">
        <div class="course-card-top">
          <span class="course-platform"><span class="course-dot"></span>${c.platform}</span>
          <span class="course-signal" aria-hidden="true"><span></span><span></span><span></span></span>
        </div>
        <h3 class="course-title">${c.title}</h3>
        <div class="course-card-bottom">
          <span class="course-card-arrow">${arrowSVG}</span>
        </div>
      </a>
    `,
  )
  .join("");

// Cursor-tracking radial glow on each course card
courseGrid.addEventListener("pointermove", (e) => {
  const card = e.target.closest(".course-card");
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty("--mx", `${x}%`);
  card.style.setProperty("--my", `${y}%`);
});

document.getElementById("speaking-grid").innerHTML = speaking
  .map(
    (s) => `
      <a href="${s.url}" target="_blank" rel="noopener" class="speak-item">
        <span class="speak-venue">${s.venue}</span>
        <span class="speak-title">${s.title}</span>
        <span class="speak-arrow">View ${arrowSVG}</span>
      </a>
    `,
  )
  .join("");

document.getElementById("writing-grid").innerHTML = writing
  .map(
    (w) => `
      <a href="${w.url}" target="_blank" rel="noopener" class="writing-card">
        <span class="writing-kind">${w.kind}</span>
        <span class="writing-title">${w.title}</span>
        <span class="writing-cta">Open ${arrowSVG}</span>
      </a>
    `,
  )
  .join("");

// ── TWEAKS ────────────────────────────────────
const ACCENTS = {
  terracotta: "#C84B2F",
  blue: "#2A5C8F",
  olive: "#5A7A3A",
  plum: "#7A3060",
  teal: "#206060",
};
const BGS = {
  cream: "#F0E9D8",
  paper: "#FAF7F0",
  white: "#FFFFFF",
};

window.addEventListener("message", (e) => {
  if (e.data?.type === "__activate_edit_mode") {
    document.getElementById("tweaks-panel").classList.add("visible");
  }
  if (e.data?.type === "__deactivate_edit_mode") {
    document.getElementById("tweaks-panel").classList.remove("visible");
  }
});
window.parent.postMessage({ type: "__edit_mode_available" }, "*");

document.querySelectorAll(".tw-swatch[data-accent]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tw-swatch")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const c = ACCENTS[btn.dataset.accent];
    document.documentElement.style.setProperty("--accent", c);
    window.parent.postMessage(
      { type: "__edit_mode_set_keys", edits: { accent: btn.dataset.accent } },
      "*",
    );
  });
});

document.querySelectorAll(".tw-chip[data-bg]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tw-chip[data-bg]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.documentElement.style.setProperty("--cream", BGS[btn.dataset.bg]);
    window.parent.postMessage(
      { type: "__edit_mode_set_keys", edits: { bg: btn.dataset.bg } },
      "*",
    );
  });
});

document.querySelectorAll(".tw-chip[data-font]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tw-chip[data-font]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f =
      btn.dataset.font === "inter"
        ? "'Inter Tight','Inter',sans-serif"
        : "'Instrument Serif',Georgia,serif";
    document
      .querySelectorAll(
        ".hero-title, .section-title, .course-title, .speak-title, .writing-title, .footer-big",
      )
      .forEach((el) => {
        el.style.fontFamily = f;
      });
    window.parent.postMessage(
      { type: "__edit_mode_set_keys", edits: { font: btn.dataset.font } },
      "*",
    );
  });
});
