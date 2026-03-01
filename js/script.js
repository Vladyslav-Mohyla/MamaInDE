const guideSection = document.querySelector("#guide"),
  getGude = document.querySelector("#hero-btn-main"),
  getGuide = document.querySelector("#guide-for-you-hero-btn"),
  paySection = document.querySelector("#pay"),
  btnPayFixed = document.querySelector("#btn-pay-fix"),
  modalLinks = document.querySelectorAll(".mob-header-menu a[href^='#']"),
  toggleBtn = document.querySelector(".toggle-btn"),
  answer = document.querySelector(".answer"),
  faqQuestions = document.querySelectorAll(".faq-question"),
  daysElem = document.querySelector(".days"),
  hoursElem = document.querySelector(".hours"),
  minutesElem = document.querySelector(".minutes"),
  secondsElem = document.querySelector(".seconds");
(getGude.addEventListener("click", function () {
  pay.scrollIntoView({ behavior: "smooth", block: "center" });
}),
  getGuide.addEventListener("click", function () {
    pay.scrollIntoView({ behavior: "smooth", block: "center" });
  }),
  btnPayFixed.addEventListener("click", function () {
    pay.scrollIntoView({ behavior: "smooth", block: "center" });
  }),
  faqQuestions.forEach((e) => {
    let t = e.querySelector(".toggle-bth"),
      n = e.querySelector(".answer"),
      o = e.querySelector(".container-question");
    o.addEventListener("click", () => {
      let e = n.classList.contains("active");
      e
        ? (n.classList.remove("active"), t.classList.remove("active"))
        : (n.classList.add("active"), t.classList.add("active"));
    });
  }));
const countdownKey = "countdownDeadline";
let countdownDate = localStorage.getItem(countdownKey);
countdownDate
  ? (countdownDate = new Date(countdownDate))
  : ((countdownDate = new Date(Date.now() + 6048e5)),
    localStorage.setItem(countdownKey, countdownDate));
let timerId;
function updateTimer() {
  let e = new Date(),
    t = countdownDate - e;
  if (t <= 0) {
    ((daysElem.textContent = "00"),
      (hoursElem.textContent = "00"),
      (minutesElem.textContent = "00"),
      (secondsElem.textContent = "00"),
      clearInterval(timerId));
    return;
  }
  let n = Math.floor(t / 1e3);
  ((daysElem.textContent = String(Math.floor(n / 86400)).padStart(2, "0")),
    (hoursElem.textContent = String(Math.floor((n / 3600) % 24)).padStart(
      2,
      "0",
    )),
    (minutesElem.textContent = String(Math.floor((n / 60) % 60)).padStart(
      2,
      "0",
    )),
    (secondsElem.textContent = String(n % 60).padStart(2, "0")));
}
(document.addEventListener("DOMContentLoaded", () => {
  (updateTimer(), (timerId = setInterval(updateTimer, 1e3)));
}),
  document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".mySwiper", {
      loop: !0,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: { delay: 5e3, disableOnInteraction: !1 },
    });
  }));
