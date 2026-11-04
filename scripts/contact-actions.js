document.addEventListener("click", async (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("[data-copy-contact]");
  if (button) {
    const feedback = button.closest(".contact-card").querySelector(".contact-feedback");
    try {
      await navigator.clipboard.writeText(button.getAttribute("data-copy-contact"));
      feedback.textContent = "已复制";
    } catch {
      feedback.textContent = "请选中上方号码手动复制";
    }
  }
  if (!event.target.closest(".contact-links")) {
    document.querySelectorAll(".contact-item[open]").forEach((item) => item.removeAttribute("open"));
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".contact-item[open]").forEach((item) => {
    item.removeAttribute("open");
    item.querySelector("summary").focus();
  });
});
