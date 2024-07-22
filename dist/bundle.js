/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img sync \\.(png|jpe?g|svg|gif)$":
/*!**********************************************************!*\
  !*** ./src/img sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Entity Service.gif\": \"./src/img/Entity Service.gif\",\n\t\"./Solution Service.gif\": \"./src/img/Solution Service.gif\",\n\t\"./Uberblick Services.gif\": \"./src/img/Uberblick Services.gif\",\n\t\"./Vektor-Smartobjekt Kopie.png\": \"./src/img/Vektor-Smartobjekt Kopie.png\",\n\t\"./Vektor-Smartobjekt.png\": \"./src/img/Vektor-Smartobjekt.png\",\n\t\"./bbraun-bw.png\": \"./src/img/bbraun-bw.png\",\n\t\"./bg section2.png\": \"./src/img/bg section2.png\",\n\t\"./biltong-bw.png\": \"./src/img/biltong-bw.png\",\n\t\"./btn-chevron-left.png\": \"./src/img/btn-chevron-left.png\",\n\t\"./btn-chevron-right.png\": \"./src/img/btn-chevron-right.png\",\n\t\"./chevron - pfeil yellow.png\": \"./src/img/chevron - pfeil yellow.png\",\n\t\"./chevron - pfeil.png\": \"./src/img/chevron - pfeil.png\",\n\t\"./cube.png\": \"./src/img/cube.png\",\n\t\"./icon_02.01.svg\": \"./src/img/icon_02.01.svg\",\n\t\"./icon_02.02.svg\": \"./src/img/icon_02.02.svg\",\n\t\"./icon_02.03.svg\": \"./src/img/icon_02.03.svg\",\n\t\"./icon_03.01.svg\": \"./src/img/icon_03.01.svg\",\n\t\"./icon_03.02.svg\": \"./src/img/icon_03.02.svg\",\n\t\"./icon_03.03.svg\": \"./src/img/icon_03.03.svg\",\n\t\"./img.jpg\": \"./src/img/img.jpg\",\n\t\"./magicline-bw.png\": \"./src/img/magicline-bw.png\",\n\t\"./micromerce-logo.svg\": \"./src/img/micromerce-logo.svg\",\n\t\"./neusta-bw.png\": \"./src/img/neusta-bw.png\",\n\t\"./neusta-consulting.png\": \"./src/img/neusta-consulting.png\",\n\t\"./pilot-bw.png\": \"./src/img/pilot-bw.png\",\n\t\"./zoom up icon.png\": \"./src/img/zoom up icon.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./src/img_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./src/img/Entity Service.gif":
/*!************************************!*\
  !*** ./src/img/Entity Service.gif ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/Entity Service.gif\");\n\n//# sourceURL=webpack:///./src/img/Entity_Service.gif?");

/***/ }),

/***/ "./src/img/Solution Service.gif":
/*!**************************************!*\
  !*** ./src/img/Solution Service.gif ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/Solution Service.gif\");\n\n//# sourceURL=webpack:///./src/img/Solution_Service.gif?");

/***/ }),

/***/ "./src/img/Uberblick Services.gif":
/*!****************************************!*\
  !*** ./src/img/Uberblick Services.gif ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/Uberblick Services.gif\");\n\n//# sourceURL=webpack:///./src/img/Uberblick_Services.gif?");

/***/ }),

/***/ "./src/img/Vektor-Smartobjekt Kopie.png":
/*!**********************************************!*\
  !*** ./src/img/Vektor-Smartobjekt Kopie.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/Vektor-Smartobjekt Kopie.png\");\n\n//# sourceURL=webpack:///./src/img/Vektor-Smartobjekt_Kopie.png?");

/***/ }),

/***/ "./src/img/Vektor-Smartobjekt.png":
/*!****************************************!*\
  !*** ./src/img/Vektor-Smartobjekt.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/Vektor-Smartobjekt.png\");\n\n//# sourceURL=webpack:///./src/img/Vektor-Smartobjekt.png?");

/***/ }),

/***/ "./src/img/bbraun-bw.png":
/*!*******************************!*\
  !*** ./src/img/bbraun-bw.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/bbraun-bw.png\");\n\n//# sourceURL=webpack:///./src/img/bbraun-bw.png?");

/***/ }),

/***/ "./src/img/bg section2.png":
/*!*********************************!*\
  !*** ./src/img/bg section2.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/bg section2.png\");\n\n//# sourceURL=webpack:///./src/img/bg_section2.png?");

/***/ }),

/***/ "./src/img/biltong-bw.png":
/*!********************************!*\
  !*** ./src/img/biltong-bw.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/biltong-bw.png\");\n\n//# sourceURL=webpack:///./src/img/biltong-bw.png?");

/***/ }),

/***/ "./src/img/btn-chevron-left.png":
/*!**************************************!*\
  !*** ./src/img/btn-chevron-left.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/btn-chevron-left.png\");\n\n//# sourceURL=webpack:///./src/img/btn-chevron-left.png?");

/***/ }),

/***/ "./src/img/btn-chevron-right.png":
/*!***************************************!*\
  !*** ./src/img/btn-chevron-right.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/btn-chevron-right.png\");\n\n//# sourceURL=webpack:///./src/img/btn-chevron-right.png?");

/***/ }),

/***/ "./src/img/chevron - pfeil yellow.png":
/*!********************************************!*\
  !*** ./src/img/chevron - pfeil yellow.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/chevron - pfeil yellow.png\");\n\n//# sourceURL=webpack:///./src/img/chevron_-_pfeil_yellow.png?");

/***/ }),

/***/ "./src/img/chevron - pfeil.png":
/*!*************************************!*\
  !*** ./src/img/chevron - pfeil.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/chevron - pfeil.png\");\n\n//# sourceURL=webpack:///./src/img/chevron_-_pfeil.png?");

/***/ }),

/***/ "./src/img/cube.png":
/*!**************************!*\
  !*** ./src/img/cube.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/cube.png\");\n\n//# sourceURL=webpack:///./src/img/cube.png?");

/***/ }),

/***/ "./src/img/icon_02.01.svg":
/*!********************************!*\
  !*** ./src/img/icon_02.01.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/icon_02.01.svg\");\n\n//# sourceURL=webpack:///./src/img/icon_02.01.svg?");

/***/ }),

/***/ "./src/img/icon_02.02.svg":
/*!********************************!*\
  !*** ./src/img/icon_02.02.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/icon_02.02.svg\");\n\n//# sourceURL=webpack:///./src/img/icon_02.02.svg?");

/***/ }),

/***/ "./src/img/icon_02.03.svg":
/*!********************************!*\
  !*** ./src/img/icon_02.03.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/icon_02.03.svg\");\n\n//# sourceURL=webpack:///./src/img/icon_02.03.svg?");

/***/ }),

/***/ "./src/img/icon_03.01.svg":
/*!********************************!*\
  !*** ./src/img/icon_03.01.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/icon_03.01.svg\");\n\n//# sourceURL=webpack:///./src/img/icon_03.01.svg?");

/***/ }),

/***/ "./src/img/icon_03.02.svg":
/*!********************************!*\
  !*** ./src/img/icon_03.02.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/icon_03.02.svg\");\n\n//# sourceURL=webpack:///./src/img/icon_03.02.svg?");

/***/ }),

/***/ "./src/img/icon_03.03.svg":
/*!********************************!*\
  !*** ./src/img/icon_03.03.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/icon_03.03.svg\");\n\n//# sourceURL=webpack:///./src/img/icon_03.03.svg?");

/***/ }),

/***/ "./src/img/img.jpg":
/*!*************************!*\
  !*** ./src/img/img.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/img.jpg\");\n\n//# sourceURL=webpack:///./src/img/img.jpg?");

/***/ }),

/***/ "./src/img/magicline-bw.png":
/*!**********************************!*\
  !*** ./src/img/magicline-bw.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/magicline-bw.png\");\n\n//# sourceURL=webpack:///./src/img/magicline-bw.png?");

/***/ }),

/***/ "./src/img/micromerce-logo.svg":
/*!*************************************!*\
  !*** ./src/img/micromerce-logo.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/micromerce-logo.svg\");\n\n//# sourceURL=webpack:///./src/img/micromerce-logo.svg?");

/***/ }),

/***/ "./src/img/neusta-bw.png":
/*!*******************************!*\
  !*** ./src/img/neusta-bw.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/neusta-bw.png\");\n\n//# sourceURL=webpack:///./src/img/neusta-bw.png?");

/***/ }),

/***/ "./src/img/neusta-consulting.png":
/*!***************************************!*\
  !*** ./src/img/neusta-consulting.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/neusta-consulting.png\");\n\n//# sourceURL=webpack:///./src/img/neusta-consulting.png?");

/***/ }),

/***/ "./src/img/pilot-bw.png":
/*!******************************!*\
  !*** ./src/img/pilot-bw.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/pilot-bw.png\");\n\n//# sourceURL=webpack:///./src/img/pilot-bw.png?");

/***/ }),

/***/ "./src/img/zoom up icon.png":
/*!**********************************!*\
  !*** ./src/img/zoom up icon.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/zoom up icon.png\");\n\n//# sourceURL=webpack:///./src/img/zoom_up_icon.png?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// Import main.scss file style\n // Import all images\n\nfunction importAll(r) {\n  return r.keys().map(r);\n}\n\nvar images = importAll(__webpack_require__(\"./src/img sync \\\\.(png|jpe?g|svg|gif)$\"));\n/**\r\n * ***************************************** POPUP *******************************************\r\n */\n// Variables\n\nvar btnsOpenPopup = document.querySelectorAll(\".btn-demo\"); // Add overlow hidden to html document when opening the popup\n\nbtnsOpenPopup.forEach(function (btnOpenPopup) {\n  btnOpenPopup.addEventListener(\"click\", function () {\n    document.documentElement.classList.add(\"no-scroll\");\n  });\n}); // close popup when clicked outside of popup\n\nvar popups = document.querySelector(\".popup\");\nwindow.addEventListener(\"click\", function (event) {\n  var isInsidePopups = popups.contains(event.target);\n\n  if (window.location.hash == \"#overlay\" && !isInsidePopups) {\n    window.location.hash = \"\";\n    document.documentElement.classList.remove(\"no-scroll\");\n  }\n});\n/**\r\n * ***************************************** FAQ SECTION *******************************************\r\n */\n// Variables\n\nvar faqQuestions = document.querySelectorAll(\".faq_question\");\nfaqQuestions.forEach(function (faqQuestion, index) {\n  faqQuestion.addEventListener(\"click\", function (e) {\n    faqQuestion.classList.toggle(\"active\");\n    faqQuestion.nextElementSibling.classList.toggle(\"active\");\n    faqQuestion.classList.toggle(\"active-after\");\n  });\n});\n/**\r\n * ***************************************** Caroussel Section *******************************************\r\n */\n// Variables\n\nvar testimonialBtns = document.querySelectorAll(\".testimonial-btn\");\nvar testimonialImg = document.querySelectorAll(\".testimonial-img img\");\nvar testimonialTextPerso = document.querySelectorAll(\".testimonial-text_perso\");\nvar l = 0;\nvar T = 0;\ntestimonialBtns[1].addEventListener(\"click\", function () {\n  l++;\n  T++;\n\n  var _iterator = _createForOfIteratorHelper(testimonialImg),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _i = _step.value;\n\n      if (l == 0) {\n        _i.style.left = \"0px\";\n      }\n\n      if (l == 1) {\n        _i.style.left = \"-\".concat(testimonialImg[0].offsetWidth, \"px\");\n        testimonialBtns[0].classList.remove(\"disabled\");\n      }\n\n      if (l == 2) {\n        _i.style.left = \"-\".concat(testimonialImg[0].offsetWidth * 2, \"px\");\n      }\n\n      if (l > 3) {\n        l = 2;\n        console.log(\"disabled click\");\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var _iterator2 = _createForOfIteratorHelper(testimonialTextPerso),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var j = _step2.value;\n\n      if (T == 0) {\n        testimonialBtns[0].classList.remove(\"disabled\");\n        j.style.left = \"0px\";\n        console.log(i);\n      }\n\n      if (T == 1) {\n        j.style.left = \"-\".concat(testimonialTextPerso[0].offsetWidth, \"px\");\n        testimonialBtns[0].classList.add(\"active\");\n      }\n\n      if (T == 2) {\n        j.style.left = \"-\".concat(testimonialTextPerso[0].offsetWidth * 2, \"px\");\n        testimonialBtns[1].classList.remove(\"active\");\n        testimonialBtns[1].classList.add(\"disabled\");\n      }\n\n      if (T > 3) {\n        j = 2;\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n});\ntestimonialBtns[0].addEventListener(\"click\", function () {\n  l--;\n  T--;\n\n  var _iterator3 = _createForOfIteratorHelper(testimonialImg),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var _i2 = _step3.value;\n\n      if (l == 0) {\n        testimonialBtns[0].classList.add(\"disabled\");\n        _i2.style.left = \"0px\";\n        console.log(\"0\");\n        testimonialBtns[0].classList.remove(\"active\");\n      }\n\n      if (l == 1) {\n        _i2.style.left = \"-\".concat(testimonialTextPerso[0].offsetWidth, \"px\");\n        testimonialBtns[1].classList.add(\"active\");\n        testimonialBtns[1].classList.remove(\"disabled\");\n      }\n\n      if (l < 0) {\n        l = 0;\n      }\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  var _iterator4 = _createForOfIteratorHelper(testimonialTextPerso),\n      _step4;\n\n  try {\n    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n      var j = _step4.value;\n\n      if (T == 0) {\n        j.style.left = \"0px\";\n        console.log(\"0\");\n      }\n\n      if (T == 1) {\n        j.style.left = \"-\".concat(testimonialTextPerso[0].offsetWidth, \"px\");\n        console.log(\"-\".concat(testimonialTextPerso[0].offsetWidth, \"px\"));\n      }\n\n      if (T < 0) {\n        T = 0;\n      }\n    }\n  } catch (err) {\n    _iterator4.e(err);\n  } finally {\n    _iterator4.f();\n  }\n});\n/**\r\n * Test\r\n *\r\n */\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });