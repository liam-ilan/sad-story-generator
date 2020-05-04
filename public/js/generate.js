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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/generate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generate.js":
/*!*************************!*\
  !*** ./src/generate.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reqjson_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reqjson.js */ \"./src/reqjson.js\");\n\n\nconst button = document.getElementById('generate')\nconst outputBox = document.getElementById('output')\nconst [...options] = document.getElementsByClassName('option')\n\nlet currentMode = options[0].id\noptions[0].classList.add('active')\noptions[0].classList.remove('passive')\n\nfunction clearOptionColors () {\n  options.forEach((option) => {\n    option.classList.remove('active')\n    option.classList.add('passive')\n  })\n}\n\noptions.forEach((option) => {\n  option.addEventListener('click', (e) => {\n    clearOptionColors()\n    e.target.classList.add('active')\n    e.target.classList.remove('passive')\n\n    currentMode = e.target.id\n  })\n})\n\nbutton.addEventListener('click', async function () {\n  outputBox.innerText = (await Object(_reqjson_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`/api/generate/${currentMode}`)).story\n})\n\n\n//# sourceURL=webpack:///./src/generate.js?");

/***/ }),

/***/ "./src/reqjson.js":
/*!************************!*\
  !*** ./src/reqjson.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable no-unused-vars */\n\n// requests a json file, and returns\nasync function reqJson (url, method = 'GET', data = null) {\n  // set fetch options\n  const options = {\n    method: method,\n    headers: {\n      'Content-Type': 'application/json; charset=utf-8'\n    }\n  }\n\n  // add body if content exists\n  if (data) {\n    options.body = JSON.stringify(data)\n  }\n\n  // await the fetch from the url\n  const res = await fetch(url, options)\n\n  // await until the json promise is resolved\n  const json = await res.json()\n  return json\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reqJson);\n\n\n//# sourceURL=webpack:///./src/reqjson.js?");

/***/ })

/******/ });