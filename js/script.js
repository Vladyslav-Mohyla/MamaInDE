const scrollBtn = document.querySelector("#scroll-btn");
const guideSection = document.querySelector("#guide");
const openBtn = document.querySelector("[data-mob-menu-open]");
const closeBtn = document.querySelector("[data-mob-menu-close]");
const mobMenu = document.querySelector("[data-mob-menu]");
const modalLinks = document.querySelectorAll(".mob-header-menu a[href^='#']");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobMenu.classList.add("is-open");
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  mobMenu.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
});

mobMenu.addEventListener("click", (e) => {
  if (e.target === mobMenu) {
    mobMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
});

scrollBtn.addEventListener("click", function () {
  guideSection.scrollIntoView({ behavior: "smooth" });
});

modalLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      mobMenu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });
});