(() => {
  const storageKey = "alagappanr.theme";
  const root = document.documentElement;

  function applyTheme(value) {
    const theme = value === "light" || value === "dark" ? value : "system";

    if (theme === "system") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }

    document.querySelectorAll(".theme-control button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.theme === theme));
    });
  }

  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch {
    // Browser privacy settings may disable storage. System mode still works.
  }
  applyTheme(savedTheme);

  document.addEventListener("DOMContentLoaded", () => {
    const control = document.querySelector(".theme-control");
    if (!control) return;

    applyTheme(root.getAttribute("data-theme"));
    control.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const theme = button.dataset.theme;
        applyTheme(theme);
        try {
          if (theme === "system") {
            localStorage.removeItem(storageKey);
          } else {
            localStorage.setItem(storageKey, theme);
          }
        } catch {
          // The choice still applies to this page when storage is unavailable.
        }
      });
    });
    control.hidden = false;
  });

  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) {
      applyTheme(event.newValue);
    }
  });
})();
