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
