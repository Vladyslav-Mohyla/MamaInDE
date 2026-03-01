const guideSection = document.querySelector("#guide");
const getGude = document.querySelector("#hero-btn-main");
const getGuide = document.querySelector("#guide-for-you-hero-btn");
const paySection = document.querySelector("#pay");
const btnPayFixed = document.querySelector("#btn-pay-fix");
const modalLinks = document.querySelectorAll(".mob-header-menu a[href^='#']");
const toggleBtn = document.querySelector(".toggle-btn");
const answer = document.querySelector(".answer");
const faqQuestions = document.querySelectorAll(".faq-question");
const slides = document.querySelectorAll(".feedback-slide");
const btnNext = document.querySelector(".feedback-btn-next");
const btnPrev = document.querySelector(".feedback-btn-prev");
const daysElem = document.querySelector(".days");
const hoursElem = document.querySelector(".hours");
const minutesElem = document.querySelector(".minutes");
const secondsElem = document.querySelector(".seconds");

getGude.addEventListener("click", function () {
  pay.scrollIntoView({ behavior: "smooth", block: "center" });
});

getGuide.addEventListener("click", function () {
  pay.scrollIntoView({ behavior: "smooth", block: "center" });
});

btnPayFixed.addEventListener("click", function () {
  pay.scrollIntoView({ behavior: "smooth", block: "center" });
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

// Feedback slider script
(function () {
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  btnNext.addEventListener("click", nextSlide);
  btnPrev.addEventListener("click", prevSlide);

  // Show first slide initially
  showSlide(currentIndex);
})();

// Ключ хранения даты окончания в localStorage
const countdownKey = "countdownDeadline";

// Получаем или устанавливаем дату окончания (7 дней от первой загрузки)
let countdownDate = localStorage.getItem(countdownKey);
if (!countdownDate) {
  countdownDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  localStorage.setItem(countdownKey, countdownDate);
} else {
  countdownDate = new Date(countdownDate);
}

function updateTimer() {
  const now = new Date();
  const diff = countdownDate - now;

  if (diff <= 0) {
    daysElem.textContent = "00";
    hoursElem.textContent = "00";
    minutesElem.textContent = "00";
    secondsElem.textContent = "00";
    clearInterval(timerId);
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  daysElem.textContent = String(days).padStart(2, "0");
  hoursElem.textContent = String(hours).padStart(2, "0");
  minutesElem.textContent = String(minutes).padStart(2, "0");
  secondsElem.textContent = String(seconds).padStart(2, "0");
}

const preventZoom = (e) => e.preventDefault();

btnNext.addEventListener("dblclick", preventZoom);
btnPrev.addEventListener("dblclick", preventZoom);

btnNext.addEventListener(
  "touchstart",
  function (e) {
    if (e.touches.length > 1) e.preventDefault();
  },
  { passive: false },
);
btnPrev.addEventListener(
  "touchstart",
  function (e) {
    if (e.touches.length > 1) e.preventDefault();
  },
  { passive: false },
);

// Дополнительно предотвратить двойной тап для зума
let lastTouchTime = 0;

[btnNext, btnPrev].forEach((btn) => {
  btn.addEventListener(
    "touchend",
    (e) => {
      const now = Date.now();
      if (now - lastTouchTime <= 300) {
        e.preventDefault();
      }
      lastTouchTime = now;
    },
    { passive: false },
  );
});
