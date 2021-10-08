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
  }
});

/**
 * ***************************************** FAQ SECTION *******************************************
 */
// Variables
const faqQuestions = document.querySelectorAll(".faq_question");

console.log(faqQuestions);

faqQuestions.forEach((faqQuestion, index) => {
  faqQuestion.addEventListener("click", (e) => {
    faqQuestion.classList.toggle("active");
    faqQuestion.nextElementSibling.classList.toggle("active");
  });
});
