const accordion = document.querySelector("[data-accordion]");

accordion?.addEventListener("click", (e) => {
  const btn = e.target.closest(".accordion-btn");
  if (!btn) return;

  const item = btn.closest(".accordion-item");
  const panel = item.querySelector(".accordion-panel");

  const isOpen = btn.getAttribute("aria-expanded") === "true";

  accordion
    .querySelectorAll(".accordion-btn")
    .forEach((b) => b.setAttribute("aria-expanded", "false"));
  accordion
    .querySelectorAll(".accordion-panel")
    .forEach((p) => (p.hidden = true));
  accordion
    .querySelectorAll(".accordion-icon")
    .forEach((i) => (i.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'));

  if (isOpen) return;

  btn.setAttribute("aria-expanded", "true");
  panel.hidden = false;
  item.querySelector(".accordion-icon").innerHTML =
    '<i class="fa-solid fa-chevron-up"></i>';
});

//navbar toggle

const mobileNav = document.querySelector(".mobile-nav");
const toggleBtn = document.querySelector(".fa-solid.fa-bars.fa-lg");
const menu = document.querySelector("[data-nav-menu]");

if (mobileNav && toggleBtn && menu) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Lukk meny
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.setAttribute("aria-label", "Open menu");
    });
  });

  // Lukk ved klikk utanfor
  document.addEventListener("click", (e) => {
    const clickedInside = mobileNav.contains(e.target);
    if (!clickedInside) {
      mobileNav.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.setAttribute("aria-label", "Open menu");
    }
  });
}
