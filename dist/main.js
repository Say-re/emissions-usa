/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const categorizeStates = async () => {\n  const stateData = await fetch('./state-emissions.json')\n    .then((response) => response.json())\n    .then((data) => data)\n    .catch((error) => {\n      console.log(error);\n      return null;\n    });\n\n  if (!stateData) return null;\n  stateData.forEach((state) => {\n    const id = state.abbreviation;\n    const element = document.getElementsByClassName(id)[0];\n    if (state[2020] > 97) {\n      if (element) {\n        element.setAttribute('class', `${element.classList || ''} category1`);\n      }\n    } else if (state[2020] >= 81) {\n      if (element) {\n        element.setAttribute('class', `${element.classList || ''} category2`);\n      }\n    } else if (state[2020] >= 65) {\n      if (element) {\n        element.setAttribute('class', `${element.classList || ''} category3`);\n      }\n    } else if (state[2020] >= 32) {\n      if (element) {\n        element.setAttribute('class', `${element.classList || ''} category4`);\n      }\n    } else if (state[2020] >= 16) {\n      if (element) {\n        element.setAttribute('class', `${element.classList || ''} category5`);\n      }\n    } else if (element) {\n      element.setAttribute('class', `${element.classList || ''} category6`);\n    }\n  });\n  return null;\n};\n\ncategorizeStates();\n\n\n//# sourceURL=webpack://emissions-usa/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;