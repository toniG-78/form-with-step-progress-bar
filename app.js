//TODO: disabled browser form validation

// DOM ---------------------------------
const slidePage = document.querySelector(".slide-page");
// buttons ----
const firstNextBtn = document.querySelector(".nextBtn");
const prev1Btn = document.querySelector(".prev-1");
const next1Btn = document.querySelector(".next-1");
const prev2Btn = document.querySelector(".prev-2");
const next2Btn = document.querySelector(".next-2");
const prev3Btn = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
//progressbar
const step_p = document.querySelectorAll(".step p");
const bullets = document.querySelectorAll(".step .bullet");
const bullet_span = document.querySelectorAll(".step .bullet span");
const bulletChecks = document.querySelectorAll(".step .bullet .check");

// VARIABLES
let max = 4;
let current = 1;

// LISTENERS ------------------------------
// slide anim 1st Page----
firstNextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  slidePage.style.marginLeft = "-25%";
  //progress forward---
  bullets[current - 1].classList.add("active");
  step_p[current - 1].classList.add("active");
  current++;
});
// slide anim "2nd Page----
prev1Btn.addEventListener("click", function (e) {
  e.preventDefault();
  slidePage.style.marginLeft = "0%";
  //progress back---
  current--;
  bullets[current - 1].classList.remove("active");
  step_p[current - 1].classList.remove("active");
});
next1Btn.addEventListener("click", function (e) {
  e.preventDefault();
  slidePage.style.marginLeft = "-50%";
  //progress forward---
  bullets[current - 1].classList.add("active");
  step_p[current - 1].classList.add("active");
  current++;
});
// slide anim "3rt Page----
prev2Btn.addEventListener("click", function (e) {
  e.preventDefault();
  slidePage.style.marginLeft = "-25%";
  //progress back---
  current--;
  bullets[current - 1].classList.remove("active");
  step_p[current - 1].classList.remove("active");
});
next2Btn.addEventListener("click", function (e) {
  e.preventDefault();
  slidePage.style.marginLeft = "-75%";
  //progress forward---
  bullets[current - 1].classList.add("active");
  step_p[current - 1].classList.add("active");
  current++;
});
// slide anim "4rt Page----
prev3Btn.addEventListener("click", function (e) {
  e.preventDefault();
  slidePage.style.marginLeft = "-50%";
  //progress back---
  current--;
  bullets[current - 1].classList.remove("active");
  step_p[current - 1].classList.remove("active");
});
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //progress submit---
  bullets[current - 1].classList.add("active");
  step_p[current - 1].classList.add("active");
  current++;

  setTimeout(() => {
    alert("Form Submitted, thanks");
    location.reload();
  }, 1000);
});
