// Import main.scss file style
import "../scss/main.scss";

// Import all images
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("../img", false, /\.(png|jpe?g|svg)$/)
);

/**
 * ***************************************** NAVIGATION *******************************************
 */

// CHANCGE VIEWBOX SIZE
// const LogoSVG = document.querySelector("#micromerce-logo");
// LogoSVG.setAttribute("viewBox", "0 0 500 300");
// console.log(LogoSVG);
