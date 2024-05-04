// ======= toggle style ========
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
//  ======== Theme colors ===========

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

//  ======== Theme light and dark ===========
const dayNight = document.querySelector(".day-night");
// const currentTheme = localStorage.getItem("currentTheme");
// if (currentTheme) {
//   document.body.classList.add("dark");
//   if (currentTheme === "dark") {
//     dayNight.querySelector("i").classList.add("fa-sun");
//   } else {
//     dayNight.querySelector("i").classList.add("fa-moon");
//   }
// };
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("light");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("light")) {
    dayNight.querySelector("i").classList.add("fa-moon");
  } else {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
});
