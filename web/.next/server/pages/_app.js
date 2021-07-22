(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");

var _jsxFileName = "/mnt/c/Users/12508/Documents/GitHub/reddit-clone/web/src/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const client = (0,urql__WEBPACK_IMPORTED_MODULE_2__.createClient)({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include"
  }
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(urql__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    value: client,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
      resetCSS: true,
      theme: _theme__WEBPACK_IMPORTED_MODULE_3__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeProvider, {
        options: {
          useSystemColorMode: true
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/mnt/c/Users/12508/Documents/GitHub/reddit-clone/web/src/theme.tsx";


const fonts = {
  mono: `'Menlo', monospace`
};
const breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__.createBreakpoints)({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em"
});
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({
  colors: {
    black: "#16161D"
  },
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        width: "3000",
        height: "3163",
        viewBox: "0 0 3000 3163",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
          width: "3000",
          height: "3162.95",
          fill: "none"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z",
          fill: "currentColor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined),
      viewBox: "0 0 3000 3163"
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/theme-tools");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("urql");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVycWxcIiJdLCJuYW1lcyI6WyJjbGllbnQiLCJjcmVhdGVDbGllbnQiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJmb250cyIsIm1vbm8iLCJicmVha3BvaW50cyIsImNyZWF0ZUJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwieGwiLCJleHRlbmRUaGVtZSIsImNvbG9ycyIsImJsYWNrIiwiaWNvbnMiLCJsb2dvIiwicGF0aCIsInZpZXdCb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0Msa0RBQVksQ0FBQztBQUMxQkMsS0FBRyxFQUFFLCtCQURxQjtBQUUxQkMsY0FBWSxFQUFFO0FBQ1pDLGVBQVcsRUFBRTtBQUREO0FBRlksQ0FBRCxDQUEzQjs7QUFPQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UsOERBQUMsMENBQUQ7QUFBVSxTQUFLLEVBQUVQLE1BQWpCO0FBQUEsMkJBQ0UsOERBQUMsNERBQUQ7QUFBZ0IsY0FBUSxNQUF4QjtBQUF5QixXQUFLLEVBQUVRLDJDQUFoQztBQUFBLDZCQUNFLDhEQUFDLCtEQUFEO0FBQ0UsZUFBTyxFQUFFO0FBQ1BDLDRCQUFrQixFQUFFO0FBRGIsU0FEWDtBQUFBLCtCQUtFLDhEQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUVBLE1BQU1LLEtBQUssR0FBRztBQUFFQyxNQUFJLEVBQUc7QUFBVCxDQUFkO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyx5RUFBaUIsQ0FBQztBQUNwQ0MsSUFBRSxFQUFFLE1BRGdDO0FBRXBDQyxJQUFFLEVBQUUsTUFGZ0M7QUFHcENDLElBQUUsRUFBRSxNQUhnQztBQUlwQ0MsSUFBRSxFQUFFO0FBSmdDLENBQUQsQ0FBckM7QUFPQSxNQUFNVCxLQUFLLEdBQUdVLDZEQUFXLENBQUM7QUFDeEJDLFFBQU0sRUFBRTtBQUNOQyxTQUFLLEVBQUU7QUFERCxHQURnQjtBQUl4QlYsT0FKd0I7QUFLeEJFLGFBTHdCO0FBTXhCUyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFO0FBQ0pDLFVBQUksZUFDRjtBQUNFLGFBQUssRUFBQyxNQURSO0FBRUUsY0FBTSxFQUFDLE1BRlQ7QUFHRSxlQUFPLEVBQUMsZUFIVjtBQUlFLFlBQUksRUFBQyxNQUpQO0FBS0UsYUFBSyxFQUFDLDRCQUxSO0FBQUEsZ0NBT0U7QUFBTSxlQUFLLEVBQUMsTUFBWjtBQUFtQixnQkFBTSxFQUFDLFNBQTFCO0FBQW9DLGNBQUksRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBUUU7QUFDRSxXQUFDLEVBQUMsaUlBREo7QUFFRSxjQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRTtBQWdCSkMsYUFBTyxFQUFFO0FBaEJMO0FBREQ7QUFOaUIsQ0FBRCxDQUF6QjtBQTRCQSwrREFBZWhCLEtBQWYsRTs7Ozs7Ozs7Ozs7QUN4Q0EsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBDb2xvck1vZGVQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBQcm92aWRlciwgY3JlYXRlQ2xpZW50IH0gZnJvbSBcInVycWxcIjtcblxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcbiAgZmV0Y2hPcHRpb25zOiB7XG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciB2YWx1ZT17Y2xpZW50fT5cbiAgICAgIDxDaGFrcmFQcm92aWRlciByZXNldENTUyB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29sb3JNb2RlUHJvdmlkZXJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVCcmVha3BvaW50cyB9IGZyb20gXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCI7XG5cbmNvbnN0IGZvbnRzID0geyBtb25vOiBgJ01lbmxvJywgbW9ub3NwYWNlYCB9O1xuXG5jb25zdCBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKHtcbiAgc206IFwiNDBlbVwiLFxuICBtZDogXCI1MmVtXCIsXG4gIGxnOiBcIjY0ZW1cIixcbiAgeGw6IFwiODBlbVwiLFxufSk7XG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICBibGFjazogXCIjMTYxNjFEXCIsXG4gIH0sXG4gIGZvbnRzLFxuICBicmVha3BvaW50cyxcbiAgaWNvbnM6IHtcbiAgICBsb2dvOiB7XG4gICAgICBwYXRoOiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD1cIjMwMDBcIlxuICAgICAgICAgIGhlaWdodD1cIjMxNjNcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAwMCAzMTYzXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjMwMDBcIiBoZWlnaHQ9XCIzMTYyLjk1XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE0NzAuODkgMTQ0OC44MUwyMTcwIDI0ODguMTlIODIwVjcwNi4zOTJIMjE3MEwxNDcwLjg5IDE0NDguODFaTTE0MDguMjEgMTUxNS4zN0w5MDkuMTk2IDIwNDUuM1YyMzkzLjQ2SDE5OTguODRMMTQwOC4yMSAxNTE1LjM3WlwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICksXG4gICAgICB2aWV3Qm94OiBcIjAgMCAzMDAwIDMxNjNcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cnFsXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9