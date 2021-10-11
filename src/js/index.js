// Import main.scss file style
import "../scss/main.scss";

// Import all images
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("../img", false, /\.(png|jpe?g|svg|gif)$/)
);

/**
 * ***************************************** POPUP *******************************************
 */
// Variables
const btnsOpenPopup = document.querySelectorAll(".btn-demo");

// Add overlow hidden to html document when opening the popup
btnsOpenPopup.forEach((btnOpenPopup) => {
  btnOpenPopup.addEventListener("click", () => {
    document.documentElement.classList.add("no-scroll");
  });
});

// close popup when clicked outside of popup
const popups = document.querySelector(".popup");

window.addEventListener("click", (event) => {
  var isInsidePopups = popups.contains(event.target);
  if (window.location.hash == "#overlay" && !isInsidePopups) {
    window.location.hash = "";
    document.documentElement.classList.remove("no-scroll");
  }
});

/**
 * ***************************************** FAQ SECTION *******************************************
 */
// Variables
const faqQuestions = document.querySelectorAll(".faq_question");

faqQuestions.forEach((faqQuestion, index) => {
  faqQuestion.addEventListener("click", (e) => {
    faqQuestion.classList.toggle("active");
    faqQuestion.nextElementSibling.classList.toggle("active");
    faqQuestion.classList.toggle("active-after");
  });
});

/**
 * ***************************************** Caroussel Section *******************************************
 */
// Variables
const testimonialBtns = document.querySelectorAll(".testimonial-btn");
const testimonialImg = document.querySelectorAll(".testimonial-img img");
const testimonialTextPerso = document.querySelectorAll(
  ".testimonial-text_perso"
);

let l = 0;
let T = 0;
testimonialBtns[1].addEventListener("click", () => {
  l++;
  T++;
  for (let i of testimonialImg) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = `-${testimonialImg[0].offsetWidth}px`;
      testimonialBtns[0].classList.remove("disabled");
    }
    if (l == 2) {
      i.style.left = `-${testimonialImg[0].offsetWidth * 2}px`;
    }
    if (l > 3) {
      l = 2;
      console.log("disabled click");
    }
  }
  for (let j of testimonialTextPerso) {
    if (T == 0) {
      testimonialBtns[0].classList.remove("disabled");
      j.style.left = "0px";
      console.log(i);
    }
    if (T == 1) {
      j.style.left = `-${testimonialTextPerso[0].offsetWidth}px`;
      testimonialBtns[0].classList.add("active");
    }
    if (T == 2) {
      j.style.left = `-${testimonialTextPerso[0].offsetWidth * 2}px`;
      testimonialBtns[1].classList.remove("active");
      testimonialBtns[1].classList.add("disabled");
    }
    if (T > 3) {
      j = 2;
    }
  }
});
testimonialBtns[0].addEventListener("click", () => {
  l--;
  T--;
  for (let i of testimonialImg) {
    if (l == 0) {
      testimonialBtns[0].classList.add("disabled");
      i.style.left = "0px";
      console.log("0");
      testimonialBtns[0].classList.remove("active");
    }
    if (l == 1) {
      i.style.left = `-${testimonialTextPerso[0].offsetWidth}px`;
      testimonialBtns[1].classList.add("active");
      testimonialBtns[1].classList.remove("disabled");
    }
    if (l < 0) {
      l = 0;
    }
  }
  for (let j of testimonialTextPerso) {
    if (T == 0) {
      j.style.left = "0px";
      console.log("0");
    }
    if (T == 1) {
      j.style.left = `-${testimonialTextPerso[0].offsetWidth}px`;
      console.log(`-${testimonialTextPerso[0].offsetWidth}px`);
    }
    if (T < 0) {
      T = 0;
    }
  }
});
/**
 * Test
 *
 */