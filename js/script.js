const scrollBtn = document.querySelector("#scroll-btn");
const guideSection = document.querySelector("#guide");
const getGude = document.querySelector("#hero-btn-main");
const paySection = document.querySelector("#pay");
const openBtn = document.querySelector("[data-mob-menu-open]");
const closeBtn = document.querySelector("[data-mob-menu-close]");
const mobMenu = document.querySelector("[data-mob-menu]");
const modalLinks = document.querySelectorAll(".mob-header-menu a[href^='#']");
const toggleBtn = document.querySelector(".toggle-btn");
const answer = document.querySelector(".answer");
const faqQuestions = document.querySelectorAll(".faq-question");

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

getGude.addEventListener("click", function () {
  pay.scrollIntoView({ behavior: "smooth" });
});

modalLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      mobMenu.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    }
  });
});

faqQuestions.forEach((item) => {
  const toggleBtn = item.querySelector(".toggle-bth");
  const answer = item.querySelector(".answer");
  const container = item.querySelector(".container-question");

  container.addEventListener("click", () => {
    const isActive = answer.classList.contains("active");
    if (isActive) {
      answer.classList.remove("active");
      toggleBtn.classList.remove("active");
    } else {
      answer.classList.add("active");
      toggleBtn.classList.add("active");
    }
  });
});

let totalSeconds = 24 * 60 * 60;

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownElement.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (totalSeconds <= 0) {
    clearInterval(timerId);
    alert("Час вичерпано!");
  } else {
    totalSeconds--;
  }
}

updateCountdown(); // начальный вызов
const timerId = setInterval(updateCountdown, 1000);
