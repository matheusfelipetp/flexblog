const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    return event.preventDefault;
  }

  const nav = document.getElementById("nav-mobile");
  nav.classList.toggle("active");

  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function scrollSmooth() {
  const links = document.querySelectorAll('.nav__menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
scrollSmooth();
