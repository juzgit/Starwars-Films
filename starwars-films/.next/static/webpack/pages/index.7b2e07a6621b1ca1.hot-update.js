"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ \"./api/api.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n//import the Link component from the next/link module and the useState hook from the react module.\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    //\n    const [films, setFilms] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    //fetch the Star Wars films from the API when the component mounts.\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        //makes an API call using the fetchSWfilms function and updates the films state variable with the fetched data.\n        async function fetchFilms() {\n            try {\n                const data = await (0,_api_api__WEBPACK_IMPORTED_MODULE_4__.fetchSWfilms)(\"films\");\n                //if the API response is valid and contains a results property, update the films state variable with the array of films. \n                //otherwise, we log an error message to the console.\n                if (data && data.results) {\n                    setFilms(data.results);\n                } else {\n                    console.error(\"Invaid API response:\", data);\n                }\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        //call the fetchFilms function inside the useEffect hook to fetch the films when the component mounts. \n        //the empty dependency array [] ensures that the effect runs only once.\n        fetchFilms();\n    }, []);\n    //check if the films array is empty or falsy. \n    //if it is, return a loading message to indicate that the films are being fetched.\n    if (!films || films.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\index.js\",\n            lineNumber: 36,\n            columnNumber: 16\n        }, undefined);\n    }\n    //render the list of films.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-e6acf5303566efcd\",\n                children: \"Star Wars Films\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"jsx-e6acf5303566efcd\" + \" \" + \"film-list\",\n                children: films.map((film, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-e6acf5303566efcd\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/films/\".concat(index + 1),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-e6acf5303566efcd\",\n                                children: film.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\index.js\",\n                                lineNumber: 48,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\index.js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"e6acf5303566efcd\",\n                children: \".film-list.jsx-e6acf5303566efcd{list-style:none;padding:0}.film-list.jsx-e6acf5303566efcd li.jsx-e6acf5303566efcd{margin:10px 0}.film-list.jsx-e6acf5303566efcd li.jsx-e6acf5303566efcd p.jsx-e6acf5303566efcd{color:#333;text-decoration:none;font-weight:bold}.film-list.jsx-e6acf5303566efcd li.jsx-e6acf5303566efcd p.jsx-e6acf5303566efcd:hover{color:#f60}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gadzi\\\\Dropbox\\\\RG23070008956\\\\3 - Full Stack Web Development\\\\L3T12\\\\starwars-project\\\\starwars-films\\\\pages\\\\index.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"sJ54zRQKqVLcqsxh0HiaQ26LN7M=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtHQUFrRzs7OztBQUNyRTtBQUNlO0FBQ0Y7QUFDQTtBQUUxQyxNQUFNSyxPQUFPOztJQUNULEVBQUU7SUFDRixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxtRUFBbUU7SUFDbkVDLGdEQUFTQSxDQUFDO1FBQ04sK0dBQStHO1FBQy9HLGVBQWVNO1lBQ1gsSUFBRztnQkFDQyxNQUFNQyxPQUFPLE1BQU1OLHNEQUFZQSxDQUFDO2dCQUNoQyx5SEFBeUg7Z0JBQ3pILG9EQUFvRDtnQkFDcEQsSUFBR00sUUFBUUEsS0FBS0MsT0FBTyxFQUFDO29CQUNwQkgsU0FBU0UsS0FBS0MsT0FBTztnQkFDekIsT0FBTztvQkFDSEMsUUFBUUMsS0FBSyxDQUFDLHdCQUF3Qkg7Z0JBQzFDO1lBQ0osRUFBRSxPQUFPRyxPQUFNO2dCQUNYRCxRQUFRQyxLQUFLLENBQUMsd0JBQXdCQTtZQUMxQztRQUNKO1FBQ0EsdUdBQXVHO1FBQ3ZHLHVFQUF1RTtRQUN2RUo7SUFDSixHQUFHLEVBQUU7SUFFTCw4Q0FBOEM7SUFDOUMsa0ZBQWtGO0lBQ2xGLElBQUcsQ0FBQ0YsU0FBU0EsTUFBTU8sTUFBTSxLQUFLLEdBQUU7UUFDNUIscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDaEI7SUFFQSwyQkFBMkI7SUFDM0IscUJBQ0ksOERBQUNWLDBEQUFNQTs7MEJBQ0gsOERBQUNXOzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswREFBYTswQkFDVFYsTUFBTVcsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNkLDhEQUFDQzs7a0NBRUcsNEVBQUNwQixrREFBSUE7NEJBQUNxQixNQUFNLFVBQW9CLE9BQVZGLFFBQVE7c0NBQzFCLDRFQUFDRzs7MENBQUdKLEtBQUtLLEtBQUs7Ozs7Ozs7Ozs7O3VCQUhiSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QjdCO0dBbEVNZDtLQUFBQTtBQW9FTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHRoZSBMaW5rIGNvbXBvbmVudCBmcm9tIHRoZSBuZXh0L2xpbmsgbW9kdWxlIGFuZCB0aGUgdXNlU3RhdGUgaG9vayBmcm9tIHRoZSByZWFjdCBtb2R1bGUuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGZldGNoU1dmaWxtcyB9IGZyb20gJy4uL2FwaS9hcGknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICAvL1xyXG4gICAgY29uc3QgW2ZpbG1zLCBzZXRGaWxtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy9mZXRjaCB0aGUgU3RhciBXYXJzIGZpbG1zIGZyb20gdGhlIEFQSSB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzLlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL21ha2VzIGFuIEFQSSBjYWxsIHVzaW5nIHRoZSBmZXRjaFNXZmlsbXMgZnVuY3Rpb24gYW5kIHVwZGF0ZXMgdGhlIGZpbG1zIHN0YXRlIHZhcmlhYmxlIHdpdGggdGhlIGZldGNoZWQgZGF0YS5cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEZpbG1zKCkge1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hTV2ZpbG1zKCdmaWxtcycpO1xyXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgQVBJIHJlc3BvbnNlIGlzIHZhbGlkIGFuZCBjb250YWlucyBhIHJlc3VsdHMgcHJvcGVydHksIHVwZGF0ZSB0aGUgZmlsbXMgc3RhdGUgdmFyaWFibGUgd2l0aCB0aGUgYXJyYXkgb2YgZmlsbXMuIFxyXG4gICAgICAgICAgICAgICAgLy9vdGhlcndpc2UsIHdlIGxvZyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLnJlc3VsdHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbG1zKGRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFpZCBBUEkgcmVzcG9uc2U6JywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY2FsbCB0aGUgZmV0Y2hGaWxtcyBmdW5jdGlvbiBpbnNpZGUgdGhlIHVzZUVmZmVjdCBob29rIHRvIGZldGNoIHRoZSBmaWxtcyB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzLiBcclxuICAgICAgICAvL3RoZSBlbXB0eSBkZXBlbmRlbmN5IGFycmF5IFtdIGVuc3VyZXMgdGhhdCB0aGUgZWZmZWN0IHJ1bnMgb25seSBvbmNlLlxyXG4gICAgICAgIGZldGNoRmlsbXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvL2NoZWNrIGlmIHRoZSBmaWxtcyBhcnJheSBpcyBlbXB0eSBvciBmYWxzeS4gXHJcbiAgICAvL2lmIGl0IGlzLCByZXR1cm4gYSBsb2FkaW5nIG1lc3NhZ2UgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZmlsbXMgYXJlIGJlaW5nIGZldGNoZWQuXHJcbiAgICBpZighZmlsbXMgfHwgZmlsbXMubGVuZ3RoID09PSAwKXtcclxuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZW5kZXIgdGhlIGxpc3Qgb2YgZmlsbXMuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGgxPlN0YXIgV2FycyBGaWxtczwvaDE+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZpbG0tbGlzdCc+XHJcbiAgICAgICAgICAgICAgICB7ZmlsbXMubWFwKChmaWxtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qKndpbGwgZ2VuZXJhdGUgYSBkeW5hbWljIHJvdXRlIGZvciBlYWNoIGZpbG0gYmFzZWQgb24gaXRzIGluZGV4LCBiYXNlZCBvbiB0aGUgaHJlZiBhdHRyaWJ1dGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZmlsbXMvJHtpbmRleCArIDF9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZmlsbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmZpbG0tbGlzdCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpbG0tbGlzdCBsaSB7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpbG0tbGlzdCBsaSBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWxtLWxpc3QgbGkgcDpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmNjYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFNXZmlsbXMiLCJMYXlvdXQiLCJIb21lIiwiZmlsbXMiLCJzZXRGaWxtcyIsImZldGNoRmlsbXMiLCJkYXRhIiwicmVzdWx0cyIsImNvbnNvbGUiLCJlcnJvciIsImxlbmd0aCIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJmaWxtIiwiaW5kZXgiLCJsaSIsImhyZWYiLCJwIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});