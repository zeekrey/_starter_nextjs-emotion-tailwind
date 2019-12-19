module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\P361947\\OneDrive - Dr. Ing. h.c. F. Porsche AG\\__Codetests__\\nextts-tailwind-start2\\with-tailwindcss-emotion\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveConfig({});




/**
 * We can use macros in `styled`.
 */
const Header = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "e1ppop3y0",
  label: "Header"
})(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "mono"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "sm"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "gray-800"), {
  ":hover": _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
    "prop": "color",
    "config": "textColor"
  }, {
    "prop": "fontSize",
    "config": "fontSize"
  }], "red-500"))
}), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFReUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxQMzYxOTQ3XFxPbmVEcml2ZSAtIERyLiBJbmcuIGguYy4gRi4gUG9yc2NoZSBBR1xcX19Db2RldGVzdHNfX1xcbmV4dHRzLXRhaWx3aW5kLXN0YXJ0Mlxcd2l0aC10YWlsd2luZGNzcy1lbW90aW9uXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHR3IGZyb20gJ3RhaWx3aW5kLm1hY3JvJ1xuXG4vKipcbiAqIFdlIGNhbiB1c2UgbWFjcm9zIGluIGBzdHlsZWRgLlxuICovXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICAke3R3YGZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1yZWQtNTAwYH1cbmBcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHt0d2BiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbW9ubyBweC00IHB5LTIgcm91bmRlZGB9IDpob3ZlciB7XG4gICAgJHt0d2BiZy1ibHVlLTcwMGB9XG4gIH1cbmBcblxuLyoqXG4gKiBBbHNvLCB3ZSBjYW4gdXNlIGBjc3NgLlxuICovXG5jb25zdCBDYXJkU3R5bGUgPSBjc3NgXG4gICR7dHdgcC00IGJvcmRlci1zb2xpZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwICByb3VuZGVkIHAtNCBzaGFkb3cteGxgfVxuYFxuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgJHtDYXJkU3R5bGV9XG5gXG5cbmNvbnN0IEV4YW1wbGUgPSAoKSA9PiAoXG4gIDxDYXJkPlxuICAgIDxIZWFkZXI+SGVsbG88L0hlYWRlcj5cbiAgICA8QnV0dG9uPkVtb3Rpb24uanM8L0J1dHRvbj5cbiAgPC9DYXJkPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlXG4iXX0= */");

const Button = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("button", {
  target: "e1ppop3y1",
  label: "Button"
})(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "blue-500"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "white"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "mono"), {
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "paddingTop": _tailwindConfig.theme.padding["2"],
  "paddingBottom": _tailwindConfig.theme.padding["2"],
  "borderRadius": _tailwindConfig.theme.borderRadius["default"]
}), ":hover{", _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "blue-700")), "}" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxQMzYxOTQ3XFxPbmVEcml2ZSAtIERyLiBJbmcuIGguYy4gRi4gUG9yc2NoZSBBR1xcX19Db2RldGVzdHNfX1xcbmV4dHRzLXRhaWx3aW5kLXN0YXJ0Mlxcd2l0aC10YWlsd2luZGNzcy1lbW90aW9uXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHR3IGZyb20gJ3RhaWx3aW5kLm1hY3JvJ1xuXG4vKipcbiAqIFdlIGNhbiB1c2UgbWFjcm9zIGluIGBzdHlsZWRgLlxuICovXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICAke3R3YGZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1yZWQtNTAwYH1cbmBcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHt0d2BiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbW9ubyBweC00IHB5LTIgcm91bmRlZGB9IDpob3ZlciB7XG4gICAgJHt0d2BiZy1ibHVlLTcwMGB9XG4gIH1cbmBcblxuLyoqXG4gKiBBbHNvLCB3ZSBjYW4gdXNlIGBjc3NgLlxuICovXG5jb25zdCBDYXJkU3R5bGUgPSBjc3NgXG4gICR7dHdgcC00IGJvcmRlci1zb2xpZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwICByb3VuZGVkIHAtNCBzaGFkb3cteGxgfVxuYFxuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgJHtDYXJkU3R5bGV9XG5gXG5cbmNvbnN0IEV4YW1wbGUgPSAoKSA9PiAoXG4gIDxDYXJkPlxuICAgIDxIZWFkZXI+SGVsbG88L0hlYWRlcj5cbiAgICA8QnV0dG9uPkVtb3Rpb24uanM8L0J1dHRvbj5cbiAgPC9DYXJkPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlXG4iXX0= */"));
/**
 * Also, we can use `css`.
 */


const CardStyle =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"])(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  "padding": _tailwindConfig.theme.padding["4"],
  "borderStyle": "solid"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "borderWidth",
  "config": "borderWidth"
}, {
  "prop": "borderColor",
  "config": "borderColor"
}], "default"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "borderWidth",
  "config": "borderWidth"
}, {
  "prop": "borderColor",
  "config": "borderColor"
}], "gray-300"), {
  "borderRadius": _tailwindConfig.theme.borderRadius["default"],
  "boxShadow": _tailwindConfig.theme.boxShadow["xl"]
}), ";label:CardStyle;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB0dyBmcm9tICd0YWlsd2luZC5tYWNybydcblxuLyoqXG4gKiBXZSBjYW4gdXNlIG1hY3JvcyBpbiBgc3R5bGVkYC5cbiAqL1xuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgJHt0d2Bmb250LW1vbm8gdGV4dC1zbSB0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtcmVkLTUwMGB9XG5gXG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7dHdgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1vbm8gcHgtNCBweS0yIHJvdW5kZWRgfSA6aG92ZXIge1xuICAgICR7dHdgYmctYmx1ZS03MDBgfVxuICB9XG5gXG5cbi8qKlxuICogQWxzbywgd2UgY2FuIHVzZSBgY3NzYC5cbiAqL1xuY29uc3QgQ2FyZFN0eWxlID0gY3NzYFxuICAke3R3YHAtNCBib3JkZXItc29saWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCAgcm91bmRlZCBwLTQgc2hhZG93LXhsYH1cbmBcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gICR7Q2FyZFN0eWxlfVxuYFxuXG5jb25zdCBFeGFtcGxlID0gKCkgPT4gKFxuICA8Q2FyZD5cbiAgICA8SGVhZGVyPkhlbGxvPC9IZWFkZXI+XG4gICAgPEJ1dHRvbj5FbW90aW9uLmpzPC9CdXR0b24+XG4gIDwvQ2FyZD5cbilcblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZVxuIl19 */"));

const Card = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "e1ppop3y2",
  label: "Card"
})(CardStyle, false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnVCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB0dyBmcm9tICd0YWlsd2luZC5tYWNybydcblxuLyoqXG4gKiBXZSBjYW4gdXNlIG1hY3JvcyBpbiBgc3R5bGVkYC5cbiAqL1xuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgJHt0d2Bmb250LW1vbm8gdGV4dC1zbSB0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtcmVkLTUwMGB9XG5gXG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7dHdgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1vbm8gcHgtNCBweS0yIHJvdW5kZWRgfSA6aG92ZXIge1xuICAgICR7dHdgYmctYmx1ZS03MDBgfVxuICB9XG5gXG5cbi8qKlxuICogQWxzbywgd2UgY2FuIHVzZSBgY3NzYC5cbiAqL1xuY29uc3QgQ2FyZFN0eWxlID0gY3NzYFxuICAke3R3YHAtNCBib3JkZXItc29saWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCAgcm91bmRlZCBwLTQgc2hhZG93LXhsYH1cbmBcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gICR7Q2FyZFN0eWxlfVxuYFxuXG5jb25zdCBFeGFtcGxlID0gKCkgPT4gKFxuICA8Q2FyZD5cbiAgICA8SGVhZGVyPkhlbGxvPC9IZWFkZXI+XG4gICAgPEJ1dHRvbj5FbW90aW9uLmpzPC9CdXR0b24+XG4gIDwvQ2FyZD5cbilcblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZVxuIl19 */");

const Example = () => __jsx(Card, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx(Header, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Hello"), __jsx(Button, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Emotion.js"));

/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\P361947\OneDrive - Dr. Ing. h.c. F. Porsche AG\__Codetests__\nextts-tailwind-start2\with-tailwindcss-emotion\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled-base":
/*!***************************************!*\
  !*** external "@emotion/styled-base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "tailwind.macro/utils.umd.js":
/*!**********************************************!*\
  !*** external "tailwind.macro/utils.umd.js" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tailwind.macro/utils.umd.js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map