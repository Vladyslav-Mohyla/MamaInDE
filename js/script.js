const guideSection = document.querySelector("#guide"),
  getGude = document.querySelector("#hero-btn-main"),
  getGuide = document.querySelector("#guide-for-you-hero-btn"),
  paySection = document.querySelector("#pay"),
  btnPayFixed = document.querySelector("#btn-pay-fix"),
  modalLinks = document.querySelectorAll(".mob-header-menu a[href^='#']"),
  toggleBtn = document.querySelector(".toggle-btn"),
  answer = document.querySelector(".answer"),
  faqQuestions = document.querySelectorAll(".faq-question");

// Таймер на 23 минуты, сбрасывающийся при каждом обновлении страницы.
// При загрузке страницы создаём целевой момент на 23 минуты вперед.
// Никакого localStorage: каждый раз считается от текущего времени.

function initTimer() {
  const hoursElem = document.querySelector(".hours");
  const minutesElem = document.querySelector(".minutes");
  const secondsElem = document.querySelector(".seconds");
  if (!hoursElem || !minutesElem || !secondsElem) return;

  // создаём конец отсчёта через 23 минуты от текущего момента
  let countdownDate = new Date(Date.now() + 23 * 60 * 1000);

  function updateTimer() {
    const now = new Date();
    let t = countdownDate - now;

    // Если дедлайн прошёл, не запускаем заново (остановимся на нуле).
    if (t < 0) t = 0;

    const totalSec = Math.floor(t / 1000);
    const hours = String(Math.floor((totalSec / 3600) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((totalSec / 60) % 60)).padStart(2, "0");
    const seconds = String(totalSec % 60).padStart(2, "0");

    hoursElem.textContent = hours;
    minutesElem.textContent = minutes;
    secondsElem.textContent = seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

getGude?.addEventListener("click", function () {
  paySection.scrollIntoView({ behavior: "smooth", block: "center" });
});
getGuide?.addEventListener("click", function () {
  paySection.scrollIntoView({ behavior: "smooth", block: "center" });
});
btnPayFixed?.addEventListener("click", function () {
  paySection.scrollIntoView({ behavior: "smooth", block: "center" });
});

faqQuestions.forEach((e) => {
  let t = e.querySelector(".toggle-bth"),
    n = e.querySelector(".answer"),
    o = e.querySelector(".container-question");
  o?.addEventListener("click", () => {
    let e = n.classList.contains("active");
    e
      ? (n.classList.remove("active"), t.classList.remove("active"))
      : (n.classList.add("active"), t.classList.add("active"));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  initTimer();

  new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: { delay: 5000, disableOnInteraction: false },
  });
});
