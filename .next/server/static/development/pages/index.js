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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MyComponent.tsx":
/*!************************************!*\
  !*** ./components/MyComponent.tsx ***!
  \************************************/
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
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\P361947\\OneDrive - Dr. Ing. h.c. F. Porsche AG\\__Codetests__\\nextts-tailwind-start2\\with-tailwindcss-emotion\\components\\MyComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveConfig({});





const ErrorMsgComponent = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "e11qd5720",
  label: "ErrorMsgComponent"
})(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  "display": "inline",
  "float": "right"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "red-500"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "xs"), {
  "fontStyle": "italic"
}), ";" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxcY29tcG9uZW50c1xcTXlDb21wb25lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdvQyIsImZpbGUiOiJDOlxcVXNlcnNcXFAzNjE5NDdcXE9uZURyaXZlIC0gRHIuIEluZy4gaC5jLiBGLiBQb3JzY2hlIEFHXFxfX0NvZGV0ZXN0c19fXFxuZXh0dHMtdGFpbHdpbmQtc3RhcnQyXFx3aXRoLXRhaWx3aW5kY3NzLWVtb3Rpb25cXGNvbXBvbmVudHNcXE15Q29tcG9uZW50LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgdHcgZnJvbSBcInRhaWx3aW5kLm1hY3JvXCI7XHJcblxyXG50eXBlIE15Q29tcG9uZW50UHJvcHMgPSB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgcGFyYWdyYXBoPzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgRXJyb3JNc2dDb21wb25lbnQgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgaW5saW5lIGZsb2F0LXJpZ2h0IHRleHQtcmVkLTUwMCB0ZXh0LXhzIGl0YWxpY2B9O1xyXG5gO1xyXG5cclxuY29uc3QgTXlDb21wb25lbnQ6IEZ1bmN0aW9uQ29tcG9uZW50PE15Q29tcG9uZW50UHJvcHM+ID0gKHtcclxuICB0aXRsZSA9IFwiVGhlIGRlZmF1bHQgdGl0bGVcIixcclxuICBwYXJhZ3JhcGggPSBcIlRoZSBkZWZhdWx0IHBhcmFncmFwaFwiLFxyXG4gIGNoaWxkcmVuXHJcbn0pID0+IHtcclxuICAvLyBDb21wb25lbnQgc3RhdGVcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJpbml0YWxWYWx1ZVwiKTtcclxuXHJcbiAgLy8gU2lkZWVmZmVjdHMgbGlrZSBvbkxvYWQgYW5kIHN0dWZmXHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICBkb2N1bWVudC50aXRsZSA9IGBIZWxsbyAke25hbWV9YFxyXG4gIC8vICAgfSwgW25hbWVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAke3R3YG14LWF1dG9gfVxyXG4gICAgICBgfVxyXG4gICAgPlxyXG4gICAgICB7dGl0bGV9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuTXlDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBhcmFncmFwaDogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlDb21wb25lbnQ7XHJcbiJdfQ== */"));

const MyComponent = ({
  title = "The default title",
  paragraph = "The default paragraph",
  children
}) => {
  // Component state
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("initalValue"); // Sideeffects like onLoad and stuff
  //   useEffect(() => {
  //     document.title = `Hello ${name}`
  //   }, [name])

  return __jsx("div", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])({
      "marginLeft": _tailwindConfig.theme.margin["auto"],
      "marginRight": _tailwindConfig.theme.margin["auto"]
    }, ";label:MyComponent;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxcY29tcG9uZW50c1xcTXlDb21wb25lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCYyIsImZpbGUiOiJDOlxcVXNlcnNcXFAzNjE5NDdcXE9uZURyaXZlIC0gRHIuIEluZy4gaC5jLiBGLiBQb3JzY2hlIEFHXFxfX0NvZGV0ZXN0c19fXFxuZXh0dHMtdGFpbHdpbmQtc3RhcnQyXFx3aXRoLXRhaWx3aW5kY3NzLWVtb3Rpb25cXGNvbXBvbmVudHNcXE15Q29tcG9uZW50LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgdHcgZnJvbSBcInRhaWx3aW5kLm1hY3JvXCI7XHJcblxyXG50eXBlIE15Q29tcG9uZW50UHJvcHMgPSB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgcGFyYWdyYXBoPzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgRXJyb3JNc2dDb21wb25lbnQgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgaW5saW5lIGZsb2F0LXJpZ2h0IHRleHQtcmVkLTUwMCB0ZXh0LXhzIGl0YWxpY2B9O1xyXG5gO1xyXG5cclxuY29uc3QgTXlDb21wb25lbnQ6IEZ1bmN0aW9uQ29tcG9uZW50PE15Q29tcG9uZW50UHJvcHM+ID0gKHtcclxuICB0aXRsZSA9IFwiVGhlIGRlZmF1bHQgdGl0bGVcIixcclxuICBwYXJhZ3JhcGggPSBcIlRoZSBkZWZhdWx0IHBhcmFncmFwaFwiLFxyXG4gIGNoaWxkcmVuXHJcbn0pID0+IHtcclxuICAvLyBDb21wb25lbnQgc3RhdGVcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJpbml0YWxWYWx1ZVwiKTtcclxuXHJcbiAgLy8gU2lkZWVmZmVjdHMgbGlrZSBvbkxvYWQgYW5kIHN0dWZmXHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICBkb2N1bWVudC50aXRsZSA9IGBIZWxsbyAke25hbWV9YFxyXG4gIC8vICAgfSwgW25hbWVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAke3R3YG14LWF1dG9gfVxyXG4gICAgICBgfVxyXG4gICAgPlxyXG4gICAgICB7dGl0bGV9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuTXlDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBhcmFncmFwaDogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlDb21wb25lbnQ7XHJcbiJdfQ== */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, title);
};

MyComponent.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  paragraph: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (MyComponent);

/***/ }),

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
/* harmony import */ var _components_MyComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyComponent */ "./components/MyComponent.tsx");


var _jsxFileName = "C:\\Users\\P361947\\OneDrive - Dr. Ing. h.c. F. Porsche AG\\__Codetests__\\nextts-tailwind-start2\\with-tailwindcss-emotion\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_2___default.a.resolveConfig({});




/**
 * We can use macros in `styled`.
 */

const Header = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "e1m0fzfi0",
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
}), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTeUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxQMzYxOTQ3XFxPbmVEcml2ZSAtIERyLiBJbmcuIGguYy4gRi4gUG9yc2NoZSBBR1xcX19Db2RldGVzdHNfX1xcbmV4dHRzLXRhaWx3aW5kLXN0YXJ0Mlxcd2l0aC10YWlsd2luZGNzcy1lbW90aW9uXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0YWlsd2luZC5tYWNyb1wiO1xuaW1wb3J0IE15Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL015Q29tcG9uZW50XCI7XG5cbi8qKlxuICogV2UgY2FuIHVzZSBtYWNyb3MgaW4gYHN0eWxlZGAuXG4gKi9cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gICR7dHdgZm9udC1tb25vIHRleHQtc20gdGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LXJlZC01MDBgfVxuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHt0d2BiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbW9ubyBweC00IHB5LTIgcm91bmRlZGB9IDpob3ZlciB7XG4gICAgJHt0d2BiZy1ibHVlLTcwMGB9XG4gIH1cbmA7XG5cbi8qKlxuICogQWxzbywgd2UgY2FuIHVzZSBgY3NzYC5cbiAqL1xuY29uc3QgQ2FyZFN0eWxlID0gY3NzYFxuICAke3R3YHAtNCBib3JkZXItc29saWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCAgcm91bmRlZCBwLTQgc2hhZG93LXhsYH1cbmA7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICAke0NhcmRTdHlsZX1cbmA7XG5cbmNvbnN0IEV4YW1wbGUgPSAoKSA9PiAoXG4gIDxDYXJkPlxuICAgIDxIZWFkZXI+SGVsbG88L0hlYWRlcj5cbiAgICA8QnV0dG9uPkVtb3Rpb24uanM8L0J1dHRvbj5cbiAgICA8TXlDb21wb25lbnQgLz5cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcbiJdfQ== */");

const Button = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("button", {
  target: "e1m0fzfi1",
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
}], "blue-700")), "}" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxQMzYxOTQ3XFxPbmVEcml2ZSAtIERyLiBJbmcuIGguYy4gRi4gUG9yc2NoZSBBR1xcX19Db2RldGVzdHNfX1xcbmV4dHRzLXRhaWx3aW5kLXN0YXJ0Mlxcd2l0aC10YWlsd2luZGNzcy1lbW90aW9uXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0YWlsd2luZC5tYWNyb1wiO1xuaW1wb3J0IE15Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL015Q29tcG9uZW50XCI7XG5cbi8qKlxuICogV2UgY2FuIHVzZSBtYWNyb3MgaW4gYHN0eWxlZGAuXG4gKi9cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gICR7dHdgZm9udC1tb25vIHRleHQtc20gdGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LXJlZC01MDBgfVxuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHt0d2BiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbW9ubyBweC00IHB5LTIgcm91bmRlZGB9IDpob3ZlciB7XG4gICAgJHt0d2BiZy1ibHVlLTcwMGB9XG4gIH1cbmA7XG5cbi8qKlxuICogQWxzbywgd2UgY2FuIHVzZSBgY3NzYC5cbiAqL1xuY29uc3QgQ2FyZFN0eWxlID0gY3NzYFxuICAke3R3YHAtNCBib3JkZXItc29saWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCAgcm91bmRlZCBwLTQgc2hhZG93LXhsYH1cbmA7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICAke0NhcmRTdHlsZX1cbmA7XG5cbmNvbnN0IEV4YW1wbGUgPSAoKSA9PiAoXG4gIDxDYXJkPlxuICAgIDxIZWFkZXI+SGVsbG88L0hlYWRlcj5cbiAgICA8QnV0dG9uPkVtb3Rpb24uanM8L0J1dHRvbj5cbiAgICA8TXlDb21wb25lbnQgLz5cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcbiJdfQ== */"));
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
}), ";label:CardStyle;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB0dyBmcm9tIFwidGFpbHdpbmQubWFjcm9cIjtcbmltcG9ydCBNeUNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUNvbXBvbmVudFwiO1xuXG4vKipcbiAqIFdlIGNhbiB1c2UgbWFjcm9zIGluIGBzdHlsZWRgLlxuICovXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICAke3R3YGZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1yZWQtNTAwYH1cbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7dHdgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1vbm8gcHgtNCBweS0yIHJvdW5kZWRgfSA6aG92ZXIge1xuICAgICR7dHdgYmctYmx1ZS03MDBgfVxuICB9XG5gO1xuXG4vKipcbiAqIEFsc28sIHdlIGNhbiB1c2UgYGNzc2AuXG4gKi9cbmNvbnN0IENhcmRTdHlsZSA9IGNzc2BcbiAgJHt0d2BwLTQgYm9yZGVyLXNvbGlkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgIHJvdW5kZWQgcC00IHNoYWRvdy14bGB9XG5gO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgJHtDYXJkU3R5bGV9XG5gO1xuXG5jb25zdCBFeGFtcGxlID0gKCkgPT4gKFxuICA8Q2FyZD5cbiAgICA8SGVhZGVyPkhlbGxvPC9IZWFkZXI+XG4gICAgPEJ1dHRvbj5FbW90aW9uLmpzPC9CdXR0b24+XG4gICAgPE15Q29tcG9uZW50IC8+XG4gIDwvQ2FyZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG4iXX0= */"));

const Card = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "e1m0fzfi2",
  label: "Card"
})(CardStyle, false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnVCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUDM2MTk0N1xcT25lRHJpdmUgLSBEci4gSW5nLiBoLmMuIEYuIFBvcnNjaGUgQUdcXF9fQ29kZXRlc3RzX19cXG5leHR0cy10YWlsd2luZC1zdGFydDJcXHdpdGgtdGFpbHdpbmRjc3MtZW1vdGlvblxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB0dyBmcm9tIFwidGFpbHdpbmQubWFjcm9cIjtcbmltcG9ydCBNeUNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUNvbXBvbmVudFwiO1xuXG4vKipcbiAqIFdlIGNhbiB1c2UgbWFjcm9zIGluIGBzdHlsZWRgLlxuICovXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICAke3R3YGZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1yZWQtNTAwYH1cbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7dHdgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1vbm8gcHgtNCBweS0yIHJvdW5kZWRgfSA6aG92ZXIge1xuICAgICR7dHdgYmctYmx1ZS03MDBgfVxuICB9XG5gO1xuXG4vKipcbiAqIEFsc28sIHdlIGNhbiB1c2UgYGNzc2AuXG4gKi9cbmNvbnN0IENhcmRTdHlsZSA9IGNzc2BcbiAgJHt0d2BwLTQgYm9yZGVyLXNvbGlkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgIHJvdW5kZWQgcC00IHNoYWRvdy14bGB9XG5gO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgJHtDYXJkU3R5bGV9XG5gO1xuXG5jb25zdCBFeGFtcGxlID0gKCkgPT4gKFxuICA8Q2FyZD5cbiAgICA8SGVhZGVyPkhlbGxvPC9IZWFkZXI+XG4gICAgPEJ1dHRvbj5FbW90aW9uLmpzPC9CdXR0b24+XG4gICAgPE15Q29tcG9uZW50IC8+XG4gIDwvQ2FyZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG4iXX0= */");

const Example = () => __jsx(Card, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(Header, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Hello"), __jsx(Button, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Emotion.js"), __jsx(_components_MyComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ }),

/***/ 3:
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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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