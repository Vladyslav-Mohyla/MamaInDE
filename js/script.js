const guideSection = document.querySelector("#guide");
const getGude = document.querySelector("#hero-btn-main");
const getGuide = document.querySelector("#guide-for-you-hero-btn");
const paySection = document.querySelector("#pay");
const btnPayFixed = document.querySelector("#btn-pay-fix");
const openBtn = document.querySelector("[data-mob-menu-open]") || null;
const closeBtn = document.querySelector("[data-mob-menu-close]") || null;
const mobMenu = document.querySelector("[data-mob-menu]") || null;
const modalLinks = document.querySelectorAll(".mob-header-menu a[href^='#']");
const toggleBtn = document.querySelector(".toggle-btn");
const answer = document.querySelector(".answer");
const faqQuestions = document.querySelectorAll(".faq-question");
const slides = document.querySelectorAll(".feedback-slide");
const btnNext = document.querySelector(".feedback-btn-next");
const btnPrev = document.querySelector(".feedback-btn-prev");

if (openBtn && mobMenu) {
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mobMenu.classList.add("is-open");
    document.body.classList.add("no-scroll");
  });
}

if (closeBtn && mobMenu) {
  closeBtn.addEventListener("click", () => {
    mobMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  });
}

if (mobMenu) {
  mobMenu.addEventListener("click", (e) => {
    if (e.target === mobMenu) {
      mobMenu.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    }
  });
}

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
