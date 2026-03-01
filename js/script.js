const guideSection = document.querySelector("#guide"),
  getGude = document.querySelector("#hero-btn-main"),
  getGuide = document.querySelector("#guide-for-you-hero-btn"),
  paySection = document.querySelector("#pay"),
  btnPayFixed = document.querySelector("#btn-pay-fix"),
  modalLinks = document.querySelectorAll(".mob-header-menu a[href^='#']"),
  toggleBtn = document.querySelector(".toggle-btn"),
  answer = document.querySelector(".answer"),
  faqQuestions = document.querySelectorAll(".faq-question");

function initTimer() {
  const daysElem = document.querySelector(".days");
  const hoursElem = document.querySelector(".hours");
  const minutesElem = document.querySelector(".minutes");
  if (!daysElem || !hoursElem || !minutesElem) return;

  const countdownKey = "countdownDeadline";
  let countdownDate;
  try {
    const savedDeadline = localStorage.getItem(countdownKey);
    if (savedDeadline) {
      countdownDate = new Date(savedDeadline);
    }
  } catch (e) {
    countdownDate = undefined;
  }

  // If deadline is missing/invalid/expired, start a new 7-day countdown.
  if (!(countdownDate instanceof Date) || Number.isNaN(countdownDate.getTime()) || countdownDate <= new Date()) {
    countdownDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    try {
      localStorage.setItem(countdownKey, countdownDate.toISOString());
    } catch (e) {}
  }

  let timerId;

  function updateTimer() {
    const now = new Date();
    let t = countdownDate - now;

    if (t <= 0) {
      countdownDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      try {
        localStorage.setItem(countdownKey, countdownDate.toISOString());
      } catch (e) {}
      t = countdownDate - now;
    }

    const totalSec = Math.floor(t / 1000);
    const days = String(Math.floor(totalSec / 86400)).padStart(2, "0");
    const hours = String(Math.floor((totalSec / 3600) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((totalSec / 60) % 60)).padStart(2, "0");

    daysElem.textContent = days;
    hoursElem.textContent = hours;
    minutesElem.textContent = minutes;
  }

  updateTimer();
  timerId = setInterval(updateTimer, 1000);
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
