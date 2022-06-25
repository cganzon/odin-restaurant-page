/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\r\n  const header = document.createElement(\"header\");\r\n  const restaurantName = document.createElement(\"h1\");\r\n  const tabsList = document.createElement(\"ul\");\r\n  const homeTab = document.createElement(\"li\");\r\n  const menuTab = document.createElement(\"li\");\r\n\r\n  restaurantName.textContent = \"Caesarino's\";\r\n\r\n  homeTab.textContent = \"Home\";\r\n  homeTab.classList.add(\"tab\");\r\n  homeTab.setAttribute(\"id\", \"home\");\r\n  menuTab.textContent = \"Menu\";\r\n  menuTab.classList.add(\"tab\");\r\n  menuTab.setAttribute(\"id\", \"menu\");\r\n\r\n  tabsList.append(homeTab, menuTab);\r\n\r\n  header.append(restaurantName, tabsList);\r\n\r\n  return header;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/helpers/tabSwitcher.js":
/*!************************************!*\
  !*** ./src/helpers/tabSwitcher.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/menu */ \"./src/pages/menu.js\");\n\r\n\r\n\r\n\r\nconst tabSwitcher = () => {\r\n  const tabs = document.querySelectorAll(\".tab\");\r\n  tabs.forEach((tab) => {\r\n    tab.addEventListener(\"click\", (e) => {\r\n      const selectedTab = e.target.id;\r\n      selectedTab === \"home\" && (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n      selectedTab === \"menu\" && (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabSwitcher);\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/helpers/tabSwitcher.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\r\n\r\n\r\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _helpers_tabSwitcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/tabSwitcher */ \"./src/helpers/tabSwitcher.js\");\n\r\n\r\n\r\nconst pageLoad = (page) => {\r\n  const contentDiv = document.querySelector(\"#content\");\r\n  contentDiv.textContent = \"\";\r\n  contentDiv.append((0,_components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), page());\r\n  (0,_helpers_tabSwitcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\r\n  const hero = document.createElement(\"section\");\r\n  const heroImage = document.createElement(\"img\");\r\n  const heroHeading = document.createElement(\"h2\");\r\n  const heroLead = document.createElement(\"p\");\r\n  const heroMenuLink = document.createElement(\"a\");\r\n\r\n  hero.classList.add(\"hero\");\r\n  heroImage.setAttribute(\r\n    \"src\",\r\n    \"https://images.unsplash.com/photo-1616299915952-04c803388e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80\"\r\n  );\r\n  heroImage.setAttribute(\"alt\", \"\");\r\n  heroHeading.textContent =\r\n    \"Enjoy a variety of freshly made pasta to satisfy your craving\";\r\n  heroLead.textContent =\r\n    \"Caesarino's is the best place for authentic italian pasta. Our staff is top notch and the atmosphere makes you feel right at home. If you're ever in the mood for pasta, Caesarino's is the place to be!\";\r\n  heroMenuLink.textContent = \"Our Menu\";\r\n  heroMenuLink.classList.add(\"menu\")\r\n  heroMenuLink.setAttribute(\"href\", \"\");\r\n\r\n  hero.append(heroImage, heroHeading, heroLead, heroMenuLink);\r\n\r\n  return hero;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const h2 = document.createElement(\"h2\");\r\n  h2.textContent = \"This is the menu page\";\r\n\r\n  return h2;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;