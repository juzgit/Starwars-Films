"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/films/[id]",{

/***/ "./pages/films/[id].js":
/*!*****************************!*\
  !*** ./pages/films/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ filmDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api */ \"./api/api.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n//import the fetchSWfilms function from the api module.\n\n\nfunction filmDetails() {\n    _s();\n    //router object from Next.js using the useRouter hook\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //extracts the id parameter from the router query\n    const { id } = router.query;\n    //state variable to store the film details\n    const [film, setFilm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    //fetch the film details when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function details() {\n            //check if the id parameter is available\n            if (id) {\n                //fetch the film details using the fetchSWfilms function from the API\n                const data = await (0,_api_api__WEBPACK_IMPORTED_MODULE_4__.fetchSWfilms)(\"films/\".concat(id));\n                //update the film state variable with the fetched data\n                setFilm(data);\n            }\n        }\n        //call the details function\n        details();\n    }, []);\n    //if the film details are not available yet, display a loading message\n    if (!film) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\films\\\\[id].js\",\n            lineNumber: 32,\n            columnNumber: 16\n        }, this);\n    }\n    //render the film details\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            film ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-5fe4d725bd63791d\" + \" \" + \"film-details\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-5fe4d725bd63791d\",\n                        children: film.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\films\\\\[id].js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-5fe4d725bd63791d\",\n                        children: [\n                            \"Director: \",\n                            film.director\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\films\\\\[id].js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-5fe4d725bd63791d\",\n                        children: [\n                            \"Producer: \",\n                            film.producer\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\films\\\\[id].js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-5fe4d725bd63791d\",\n                        children: [\n                            \"Release: \",\n                            film.release_date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\films\\\\[id].js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\films\\\\[id].js\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-5fe4d725bd63791d\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\films\\\\[id].js\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"5fe4d725bd63791d\",\n                children: \".film-details.jsx-5fe4d725bd63791d{margin-top:20px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\films\\\\[id].js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(filmDetails, \"/VQAsTAy5ybTOhyElpN8zza/4HE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maWxtcy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDNUMsdURBQXVEO0FBQ1Y7QUFDQTtBQUU5QixTQUFTSzs7SUFDcEIscURBQXFEO0lBQ3JELE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixpREFBaUQ7SUFDakQsTUFBTSxFQUFFTyxFQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUMzQiwwQ0FBMEM7SUFDMUMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBRWpDLGtEQUFrRDtJQUNsREQsZ0RBQVNBLENBQUM7UUFDTixlQUFlVTtZQUNYLHdDQUF3QztZQUN4QyxJQUFHSixJQUFHO2dCQUNGLHFFQUFxRTtnQkFDckUsTUFBTUssT0FBTyxNQUFNVCxzREFBWUEsQ0FBQyxTQUFZLE9BQUhJO2dCQUN6QyxzREFBc0Q7Z0JBQ3RERyxRQUFRRTtZQUNaO1FBQ0o7UUFDQSwyQkFBMkI7UUFDM0JEO0lBQ0osR0FBRyxFQUFFO0lBRUwsc0VBQXNFO0lBQ3RFLElBQUcsQ0FBQ0YsTUFBSztRQUNMLHFCQUFPLDhEQUFDSTtzQkFBSTs7Ozs7O0lBQ2hCO0lBRUEseUJBQXlCO0lBQ3pCLHFCQUNJLDhEQUFDVCwwREFBTUE7O1lBQ0ZLLHFCQUNHLDhEQUFDSTswREFBYzs7a0NBQ1gsOERBQUNDOztrQ0FBSUwsS0FBS00sS0FBSzs7Ozs7O2tDQUNmLDhEQUFDQzs7OzRCQUFFOzRCQUFXUCxLQUFLUSxRQUFROzs7Ozs7O2tDQUMzQiw4REFBQ0Q7Ozs0QkFBRTs0QkFBV1AsS0FBS1MsUUFBUTs7Ozs7OztrQ0FDM0IsOERBQUNGOzs7NEJBQUU7NEJBQVVQLEtBQUtVLFlBQVk7Ozs7Ozs7Ozs7OztxQ0FHbEMsOERBQUNOOzswQkFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQVdyQjtHQWxEd0JSOztRQUVMTCxrREFBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsbXMvW2lkXS5qcz85MTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy9pbXBvcnQgdGhlIGZldGNoU1dmaWxtcyBmdW5jdGlvbiBmcm9tIHRoZSBhcGkgbW9kdWxlLlxyXG5pbXBvcnQgeyBmZXRjaFNXZmlsbXMgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWxtRGV0YWlscygpe1xyXG4gICAgLy9yb3V0ZXIgb2JqZWN0IGZyb20gTmV4dC5qcyB1c2luZyB0aGUgdXNlUm91dGVyIGhvb2tcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgLy9leHRyYWN0cyB0aGUgaWQgcGFyYW1ldGVyIGZyb20gdGhlIHJvdXRlciBxdWVyeVxyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgLy9zdGF0ZSB2YXJpYWJsZSB0byBzdG9yZSB0aGUgZmlsbSBkZXRhaWxzXHJcbiAgICBjb25zdCBbZmlsbSwgc2V0RmlsbV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvL2ZldGNoIHRoZSBmaWxtIGRldGFpbHMgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZXRhaWxzKCl7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdGhlIGlkIHBhcmFtZXRlciBpcyBhdmFpbGFibGVcclxuICAgICAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICAgICAgLy9mZXRjaCB0aGUgZmlsbSBkZXRhaWxzIHVzaW5nIHRoZSBmZXRjaFNXZmlsbXMgZnVuY3Rpb24gZnJvbSB0aGUgQVBJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hTV2ZpbG1zKGBmaWxtcy8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgdGhlIGZpbG0gc3RhdGUgdmFyaWFibGUgd2l0aCB0aGUgZmV0Y2hlZCBkYXRhXHJcbiAgICAgICAgICAgICAgICBzZXRGaWxtKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY2FsbCB0aGUgZGV0YWlscyBmdW5jdGlvblxyXG4gICAgICAgIGRldGFpbHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvL2lmIHRoZSBmaWxtIGRldGFpbHMgYXJlIG5vdCBhdmFpbGFibGUgeWV0LCBkaXNwbGF5IGEgbG9hZGluZyBtZXNzYWdlXHJcbiAgICBpZighZmlsbSl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIC8vcmVuZGVyIHRoZSBmaWxtIGRldGFpbHNcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0ID5cclxuICAgICAgICAgICAge2ZpbG0gPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsbS1kZXRhaWxzJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e2ZpbG0udGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5EaXJlY3Rvcjoge2ZpbG0uZGlyZWN0b3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlByb2R1Y2VyOiB7ZmlsbS5wcm9kdWNlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UmVsZWFzZToge2ZpbG0ucmVsZWFzZV9kYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmZpbG0tZGV0YWlscyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoU1dmaWxtcyIsIkxheW91dCIsImZpbG1EZXRhaWxzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImZpbG0iLCJzZXRGaWxtIiwiZGV0YWlscyIsImRhdGEiLCJkaXYiLCJoMSIsInRpdGxlIiwicCIsImRpcmVjdG9yIiwicHJvZHVjZXIiLCJyZWxlYXNlX2RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/films/[id].js\n"));

/***/ })

});