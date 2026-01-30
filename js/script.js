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

// Navbar toggle
const mobileNav = document.querySelector(".mobile-nav");
const toggleBtn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
const icon = toggleBtn?.querySelector("i");

if (mobileNav && toggleBtn && menu && icon) {
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = mobileNav.classList.toggle("is-open");

    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

    // Byt ikon
    icon.classList.toggle("fa-bars", !isOpen);
    icon.classList.toggle("fa-xmark", isOpen);
  });

  // Lukk meny ved klikk på lenke
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMenu());
  });

  // Lukk ved klikk utanfor
  document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target)) {
      closeMenu();
    }
  });
}

function closeMenu() {
  mobileNav.classList.remove("is-open");
  toggleBtn.setAttribute("aria-expanded", "false");
  toggleBtn.setAttribute("aria-label", "Open menu");

  const icon = toggleBtn.querySelector("i");
  icon.classList.remove("fa-xmark");
  icon.classList.add("fa-bars");
}
