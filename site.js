(function () {
  const header = document.getElementById("site-header");
  const video = document.getElementById("hero-video");
  const form = document.getElementById("inquire-form");
  const formWrap = document.getElementById("inquire-form-wrap");
  const sent = document.getElementById("inquire-sent");
  const reset = document.getElementById("inquire-reset");

  function onScroll() {
    const on = window.scrollY > 20;
    header.classList.toggle("border-border", on);
    header.classList.toggle("bg-bg/85", on);
    header.classList.toggle("border-transparent", !on);
    header.classList.toggle("bg-transparent", !on);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (video) {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (media.matches) {
        video.pause();
        return;
      }
      const play = video.play();
      if (play) play.catch(function () {});
    };
    sync();
    media.addEventListener("change", sync);
  }

  if (form && formWrap && sent) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const company = String(data.get("company") || "").trim();
      const note = String(data.get("note") || "").trim();
      const subject = encodeURIComponent(
        company ? "Inquiry from " + name + " — " + company : "Inquiry from " + name
      );
      const body = encodeURIComponent(
        note + "\n\n—\n" + name + "\n" + email + (company ? "\n" + company : "")
      );
      window.location.href =
        "mailto:hello@venturepennycapital.com?subject=" + subject + "&body=" + body;
      formWrap.hidden = true;
      sent.hidden = false;
    });
  }

  if (reset && form && formWrap && sent) {
    reset.addEventListener("click", function () {
      sent.hidden = true;
      formWrap.hidden = false;
      form.reset();
    });
  }
})();
