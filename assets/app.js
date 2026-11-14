(function () {
  var cfg = window.APP_CONFIG || {};
  var name = cfg.name || "Trekonaut";
  var email = cfg.supportEmail || "support@trekonaut.com";
  var store = cfg.appStoreUrl || "#";

  document.querySelectorAll("[data-app-name]").forEach(function (el) {
    el.textContent = name;
  });

  document.querySelectorAll("[data-support-email]").forEach(function (el) {
    el.textContent = email;
    if (el.tagName === "A") {
      el.setAttribute("href", "mailto:" + email);
    }
  });

  document.querySelectorAll("[data-app-store]").forEach(function (el) {
    el.setAttribute("href", store);
  });

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
