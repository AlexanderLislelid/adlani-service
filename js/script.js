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
