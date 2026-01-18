const accordion = document.querySelector("[data-accordion]");

accordion?.addEventListener("click", (e) => {
  const btn = e.target.closest(".accordion-btn");
  if (!btn) return;

  const item = btn.closest(".accordion-item");
  const panel = item.querySelector(".accordion-panel");

  const isOpen = btn.getAttribute("aria-expanded") === "true";

  // Lukk alle først (så blir berre ein open om gongen)
  accordion
    .querySelectorAll(".accordion-btn")
    .forEach((b) => b.setAttribute("aria-expanded", "false"));
  accordion
    .querySelectorAll(".accordion-panel")
    .forEach((p) => (p.hidden = true));
  accordion
    .querySelectorAll(".accordion-icon")
    .forEach((i) => (i.textContent = "+"));

  // Hvis den var open: den skal berre lukkast (ferdig)
  if (isOpen) return;

  // Åpne den du klikka
  btn.setAttribute("aria-expanded", "true");
  panel.hidden = false;
  item.querySelector(".accordion-icon").textContent = "–";
});
