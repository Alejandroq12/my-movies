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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --black: #000;\\r\\n  --white-gray: #f5f5f5;\\r\\n  --light-gray: lightgray;\\r\\n  --aqua: #0ff;\\r\\n  --light-blue: #007bff;\\r\\n  --dark-blue: #0056b3;\\r\\n  --gray: #6c757d;\\r\\n  --white: #fff;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Heebo', sans-serif;\\r\\n  font-size: 16px;\\r\\n  background: transparent;\\r\\n}\\r\\n\\r\\n/* Navbar */\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1rem 2rem;\\r\\n  border: 1px solid var(--black);\\r\\n}\\r\\n\\r\\n.logo-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-left: 2rem;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: bold;\\r\\n  transition: all 0.8s;\\r\\n}\\r\\n\\r\\n.logo-container:hover {\\r\\n  scale: 1.1;\\r\\n  text-decoration: underline;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#search {\\r\\n  font-size: 1.3rem;\\r\\n  height: 3rem;\\r\\n  margin-right: 0.5rem;\\r\\n  width: 40rem;\\r\\n  padding: 0 10px;\\r\\n  border: 1px solid var(--gray);\\r\\n}\\r\\n\\r\\n#search-btn {\\r\\n  background-color: #07c;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  font-size: 1.3rem;\\r\\n  cursor: pointer;\\r\\n  height: 3rem;\\r\\n  transition: all 0.8s;\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\n#search-btn:hover {\\r\\n  background-color: rgba(4, 144, 29, 0.9);\\r\\n}\\r\\n\\r\\nnav {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.nav-links {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.nav-links li {\\r\\n  display: inline;\\r\\n  margin: 0 0.5rem;\\r\\n}\\r\\n\\r\\n.nav-links a {\\r\\n  color: var(--black);\\r\\n  text-decoration: none;\\r\\n  margin-left: 2rem;\\r\\n  transition: all 0.8s;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.nav-links a:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.movie-count {\\r\\n  color: var(--light-blue);\\r\\n}\\r\\n\\r\\n/* Home page */\\r\\n.container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-gap: 1rem;\\r\\n  padding: 1rem;\\r\\n  border: 1px solid var(--black);\\r\\n}\\r\\n\\r\\n.container_card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\r\\n  padding: 1rem;\\r\\n  border-radius: 8px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.card-img {\\r\\n  width: 100%;\\r\\n  height: 30rem;\\r\\n  object-fit: contain;\\r\\n  border-radius: 4px;\\r\\n  margin-bottom: 1rem;\\r\\n  transition: all 0.8s;\\r\\n}\\r\\n\\r\\n.container_card:hover > .card-img {\\r\\n  scale: 1.04;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.card-content {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.card-text {\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n.card-likes {\\r\\n  display: block;\\r\\n  margin: 0.5rem auto;\\r\\n}\\r\\n\\r\\n#heart {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.card-comment {\\r\\n  background-color: #07c;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  padding: 0.5rem 1rem;\\r\\n  font-size: 1.5rem;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.8s;\\r\\n  height: 3rem;\\r\\n}\\r\\n\\r\\n.card-comment:hover {\\r\\n  background-color: rgba(4, 144, 29, 0.9);\\r\\n}\\r\\n\\r\\n/* popup section */\\r\\n#commentPopup {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 2rem;\\r\\n  width: 90%;\\r\\n  height: 90%;\\r\\n  border: 1px solid #dfe1e6;\\r\\n  border-radius: 16px;\\r\\n  overflow: auto;\\r\\n  padding: 1rem;\\r\\n  background-color: white;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.imgContainer {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\n.commentImg {\\r\\n  height: 100%;\\r\\n  width: 50%;\\r\\n  border: 1px solid var(--black);\\r\\n  border-radius: 2rem;\\r\\n}\\r\\n\\r\\n#commentTitle {\\r\\n  font-size: 3rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#commentDetails {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  justify-items: center;\\r\\n  gap: 1rem;\\r\\n  padding: 0 4rem;\\r\\n}\\r\\n\\r\\n#commentDetails p {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n#commentSection {\\r\\n  width: 100%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.comment-text {\\r\\n  text-align: center;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n#commentCounter {\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  position: absolute;\\r\\n  top: 10px;\\r\\n  right: 20px;\\r\\n  font-size: 2rem;\\r\\n  font-weight: 900;\\r\\n}\\r\\n\\r\\n.close-btn:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.seePopup {\\r\\n  display: none;\\r\\n  transition: all 0.5s ease;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  z-index: 99;\\r\\n  backdrop-filter: blur(5px);\\r\\n  -webkit-backdrop-filter: blur(5px);\\r\\n}\\r\\n\\r\\n.act {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.no-scroll {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n#addForm {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 20rem;\\r\\n  gap: 1rem;\\r\\n  margin: 2rem auto;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  font-size: 1.3rem;\\r\\n  border: 1px solid var(--gray);\\r\\n}\\r\\n\\r\\n#comment {\\r\\n  font-size: 1.3rem;\\r\\n  height: 5rem;\\r\\n  border: 1px solid var(--gray);\\r\\n}\\r\\n\\r\\n#commentCount {\\r\\n  color: #07c;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  background-color: #07c;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  padding: 0.5rem 1rem;\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.8s;\\r\\n}\\r\\n\\r\\n.comment-btn:hover {\\r\\n  background-color: rgba(4, 144, 29, 0.9);\\r\\n}\\r\\n\\r\\n.notification {\\r\\n  position: fixed;\\r\\n  top: 30px;\\r\\n  right: 20px;\\r\\n  padding: 15px 25px;\\r\\n  background-color: var(--light-blue);\\r\\n  color: var(--white);\\r\\n  border-radius: 5px;\\r\\n  font-size: 18px;\\r\\n  font-weight: bold;\\r\\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\\r\\n  opacity: 0;\\r\\n  transform: translateY(-50%);\\r\\n  transition: all 0.3s ease-in-out;\\r\\n  z-index: 1000;\\r\\n}\\r\\n\\r\\n.notification.show {\\r\\n  opacity: 0.9;\\r\\n  transform: translateY(0);\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  height: 6vh;\\r\\n  border: 1px solid var(--black);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.footerP {\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  .container {\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 480px) {\\r\\n  .container {\\r\\n    grid-template-columns: 1fr;\\r\\n  }\\r\\n\\r\\n  header {\\r\\n    flex-direction: column;\\r\\n    gap: 0.5rem;\\r\\n  }\\r\\n\\r\\n  #commentTitle {\\r\\n    font-size: 2.1rem;\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  #commentDetails {\\r\\n    grid-template-columns: 1fr;\\r\\n    padding: 0;\\r\\n  }\\r\\n\\r\\n  .comment-text {\\r\\n    text-align: center;\\r\\n    font-size: 1rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-installation/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-installation/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-installation/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-installation/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-installation/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-installation/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-installation/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-installation/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-installation/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-installation/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_fetchAndUpdateCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fetchAndUpdateCard.js */ \"./src/modules/fetchAndUpdateCard.js\");\n/* harmony import */ var _modules_fetchLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/fetchLikes.js */ \"./src/modules/fetchLikes.js\");\n/* harmony import */ var _modules_updateLikesCount_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/updateLikesCount.js */ \"./src/modules/updateLikesCount.js\");\n/* harmony import */ var _modules_attachLikeButtonListener_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/attachLikeButtonListener.js */ \"./src/modules/attachLikeButtonListener.js\");\n/* harmony import */ var _modules_updateMovieCount_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/updateMovieCount.js */ \"./src/modules/updateMovieCount.js\");\n/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/search.js */ \"./src/modules/search.js\");\n\n\n\n\n\n\n\n\n\nconst shows = [];\n\nasync function main() {\n  const appId = 'p01X0Mr4syDGinD4IhgC';\n\n  const showIds = Array.from({ length: 100 }, (_, index) => index + 1);\n  const cardIndices = Array.from({ length: 100 }, (_, index) => `card${index + 1}`);\n\n  await Promise.all(\n    showIds.map(async (showId, index) => {\n      const cardIndex = cardIndices[index];\n      await (0,_modules_fetchAndUpdateCard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(showId, cardIndex, shows);\n    }),\n  );\n\n  const likesData = await (0,_modules_fetchLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appId);\n  (0,_modules_updateLikesCount_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(likesData);\n  (0,_modules_attachLikeButtonListener_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shows);\n  (0,_modules_updateMovieCount_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  (0,_modules_search_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(shows);\n}\n\nmain();\n\n\n//# sourceURL=webpack://webpack-installation/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComment.js */ \"./src/modules/displayComment.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\nconst addComment = async (showId, name, comment) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p01X0Mr4syDGinD4IhgC/comments', {\n    method: 'POST',\n    body: JSON.stringify({ item_id: showId, username: name, comment }),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  const textResponse = await response.text();\n  let data;\n  try {\n    data = JSON.parse(textResponse);\n  } catch (error) {\n    data = { message: textResponse };\n  }\n  return data;\n};\n\nfunction createCommentForm(showId) {\n  const form = document.createElement('form');\n  form.setAttribute('id', 'addForm');\n  form.innerHTML = `\n      <h3 class=\"comment-text\">Add Comment</h3>\n        <input type=\"text\" id=\"name\" name=\"name\" placeholder= \"Your Name\" required>\n        <textarea id=\"comment\" name=\"comment\" placeholder= \"Your Insights\" required></textarea>\n      <div>\n        <button type=\"submit\" class=\"comment-btn\">Comment</button>\n      </div>\n    `;\n\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n\n    const name = event.target.elements.name.value;\n    const comment = event.target.elements.comment.value;\n\n    try {\n      await addComment(showId, name, comment);\n      event.target.reset();\n      (0,_displayComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(showId);\n\n      // Update the comment count after adding a new comment and fetching comments\n      const commentCountElem = document.getElementById('commentCount');\n      const commentCount = await _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCommentCount(showId); // Add await here\n      commentCountElem.innerHTML = commentCount > 0 ? commentCount : '0';\n    } catch (error) {\n      const errorMessage = 'There was an error while counting comments.';\n      // Display error message to the user instead of logging to console\n      const errorContainer = document.createElement('div');\n      errorContainer.classList.add('error-message');\n      errorContainer.textContent = errorMessage;\n      const commentSection = document.getElementById('commentSection');\n      commentSection.appendChild(errorContainer);\n      return 0; // Return a default value if there's an error\n    }\n    return 0;\n  });\n\n  return form;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ addComment, createCommentForm });\n\n//# sourceURL=webpack://webpack-installation/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/attachLikeButtonListener.js":
/*!*************************************************!*\
  !*** ./src/modules/attachLikeButtonListener.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showNotification_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showNotification.js */ \"./src/modules/showNotification.js\");\n\r\n\r\nconst involvementApiBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\r\n\r\nconst attachLikeButtonListener = () => {\r\n  const appId = 'p01X0Mr4syDGinD4IhgC';\r\n  const likeButtons = document.querySelectorAll('.card-likes');\r\n\r\n  likeButtons.forEach((likeButton) => {\r\n    likeButton.addEventListener('click', async (event) => {\r\n      const card = event.target.closest('.container_card');\r\n      const itemId = card.id;\r\n\r\n      const response = await fetch(`${involvementApiBaseURL}/apps/${appId}/likes`, {\r\n        method: 'POST',\r\n        headers: {\r\n          'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify({\r\n          item_id: itemId,\r\n        }),\r\n      });\r\n\r\n      if (response.ok) {\r\n        // Update the likes count on the screen\r\n        const likesSpan = card.querySelector('.likes-container span');\r\n        const currentLikes = parseInt(likesSpan.textContent.split(' ')[0], 10);\r\n        likesSpan.textContent = `${currentLikes + 1} Likes`;\r\n\r\n        // Change the heart icon color to red and show the notification\r\n        event.target.style.stroke = 'red';\r\n        (0,_showNotification_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Like added!');\r\n\r\n        // Revert the heart icon color back to the original after 2 seconds\r\n        setTimeout(() => {\r\n          event.target.style.stroke = 'currentColor';\r\n        }, 2000);\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attachLikeButtonListener);\r\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/attachLikeButtonListener.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = {\r\n  getCommentCount: async (showId) => {\r\n    try {\r\n      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p01X0Mr4syDGinD4IhgC/comments?item_id=${showId}`);\r\n      const data = await response.json();\r\n      return data.length;\r\n    } catch (error) {\r\n      // console.error(error);\r\n    }\r\n    return 0;\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://webpack-installation/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/counterMovies.js":
/*!**************************************!*\
  !*** ./src/modules/counterMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countMovies() {\r\n  const movieCards = document.querySelectorAll('.container_card');\r\n  return movieCards.length;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countMovies);\n\n//# sourceURL=webpack://webpack-installation/./src/modules/counterMovies.js?");

/***/ }),

/***/ "./src/modules/createCardComponent.js":
/*!********************************************!*\
  !*** ./src/modules/createCardComponent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createCardComponent = (id, imgSrc = '', text = '', likes = 0) => `\n    <div class=\"container_card movie\" id=\"${id}\">\n          <img src=\"${imgSrc}\" alt=\"Image of the movie\" class=\"card-img\" />\n          <div class=\"card-content\">\n            <p class=\"card-text\">${text}</p>\n            <div class=\"likes-container\">\n            <svg id=\"heart\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"40\"\n                height=\"40\"\n                viewBox=\"0 0 24 24\"\n                class=\"card-likes\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"2\"\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n              >\n                <path\n                  d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"\n                ></path>\n              </svg>\n              <span>${likes} Likes</span>\n            </div>\n          </div>\n          <button\n            class=\"card-comment\"\n            aria-label=\"Comment on this movie\"\n            type=\"button\"\n          >\n            Comment\n          </button>\n        </div>\n      `;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardComponent);\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/createCardComponent.js?");

/***/ }),

/***/ "./src/modules/displayComment.js":
/*!***************************************!*\
  !*** ./src/modules/displayComment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentDataAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p01X0Mr4syDGinD4IhgC/comments';\n\nasync function fetchComments(showId) {\n  try {\n    const response = await fetch(`${commentDataAPI}?item_id=${showId}`);\n    const comments = await response.json();\n    const commentText = document.querySelector('.comments');\n    commentText.innerHTML = comments.length > 0 ? comments.map((comment) => `<p>${comment.creation_date} - ${comment.username}: ${comment.comment}</p>`).join('') : 'No comments yet.';\n  } catch (err) {\n    const errorText = document.createElement('p');\n    errorText.innerText = 'Error fetching comments. Please try again later.';\n    const commentText = document.querySelector('.comments');\n    commentText.appendChild(errorText);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/displayComment.js?");

/***/ }),

/***/ "./src/modules/fetchAndUpdateCard.js":
/*!*******************************************!*\
  !*** ./src/modules/fetchAndUpdateCard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchTVShow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchTVShow.js */ \"./src/modules/fetchTVShow.js\");\n/* harmony import */ var _createCardComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCardComponent.js */ \"./src/modules/createCardComponent.js\");\n\n\n\nconst fetchAndUpdateCard = async (showId, cardIndex, shows) => {\n  const fetchValidShowData = async (currentShowId) => {\n    const show = await (0,_fetchTVShow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentShowId);\n    if (show && show.name && show.image && show.image.original) {\n      return show;\n    }\n    return fetchValidShowData(currentShowId + 1);\n  };\n\n  const showData = await fetchValidShowData(showId);\n\n  shows.push(showData);\n\n  const cardContainer = document.querySelector('.container');\n  const cardComponent = (0,_createCardComponent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cardIndex, showData.image.original, showData.name);\n  cardContainer.insertAdjacentHTML('beforeend', cardComponent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAndUpdateCard);\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/fetchAndUpdateCard.js?");

/***/ }),

/***/ "./src/modules/fetchLikes.js":
/*!***********************************!*\
  !*** ./src/modules/fetchLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementApiBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\r\n\r\nconst fetchLikes = async (appId) => {\r\n  try {\r\n    const response = await fetch(`${involvementApiBaseURL}/apps/${appId}/likes`);\r\n    const likesData = await response.json();\r\n    return likesData;\r\n  } catch (error) {\r\n    return [];\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\r\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/fetchLikes.js?");

/***/ }),

/***/ "./src/modules/fetchTVShow.js":
/*!************************************!*\
  !*** ./src/modules/fetchTVShow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchTVShow = async (showId) => {\n  try {\n    const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);\n    const showData = await response.json();\n    return showData;\n  } catch (error) {\n    return null;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchTVShow);\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/fetchTVShow.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializePopupListeners)\n/* harmony export */ });\n/* harmony import */ var _displayComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComment.js */ \"./src/modules/displayComment.js\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\n\nfunction initializePopupListeners(shows) {\n  const commentBtn = document.querySelectorAll('.card-comment');\n  const popMenu = document.querySelector('.seePopup');\n\n  commentBtn.forEach((btn, index) => {\n    btn.addEventListener('click', () => {\n      document.body.classList.toggle('no-scroll');\n      popMenu.classList.add('act');\n      const showData = shows[index];\n      popMenu.innerHTML = `\n        <div id=\"commentPopup\">\n          <div class=\"imgContainer\">\n            <img class=\"commentImg\" src=\"${showData.image.original}\" alt=\"Comment Image\"><span class=\"close-btn\">&#x2715;</span>\n          </div>\n          <h3 id=\"commentTitle\">${showData.name}</h3>\n          <div id=\"commentDetails\">\n            <p>Language: ${showData.language}</p>\n            <p>Runtime: ${showData.runtime}</p>\n            <p>Type: ${showData.type}</p>\n            <p>Status: ${showData.status}</p>\n            \n          </div>\n          <div id=\"commentSection\">\n            <div id=\"comments\" class=\"comment-text\"><p id=\"commentCounter\">Comments: (<span id=\"commentCount\"></span>)</p></div>\n            <p class=\"comment-text comments\"></p>\n          </div>\n        </div>`;\n      const popClose = document.querySelector('.close-btn');\n      popClose.addEventListener('click', () => {\n        popMenu.classList.remove('act');\n        document.body.classList.remove('no-scroll');\n      });\n\n      // create the comment form and add it to the popup\n      const commentForm = _addComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createCommentForm(showData.id);\n      const commentSection = document.getElementById('commentSection');\n      commentSection.appendChild(commentForm);\n\n      // fetch and display the existing comments for the show\n      (0,_displayComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(showData.id);\n\n      // get the comment count for the show and display it in the popup\n      const commentCountElem = document.getElementById('commentCount');\n      const commentCount = _commentCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCommentCount(showData.id);\n      commentCount.then((commentCount) => {\n        commentCountElem.innerHTML = commentCount > 0 ? commentCount : '0';\n      });\n    });\n  });\n}\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchMovie)\n/* harmony export */ });\nfunction searchMovie(movies) {\n  const searchBar = document.getElementById('searchBar');\n\n  searchBar.addEventListener('submit', (event) => {\n    event.preventDefault();\n\n    const query = document.getElementById('search').value.trim().toLowerCase();\n    if (query === '') {\n      return;\n    }\n\n    let movieFound = false;\n    movies.forEach((\n      {\n        name, image, language, runtime, type, status,\n      },\n    ) => {\n      const title = name.toLowerCase();\n      if (title.includes(query)) {\n        const popMenu = document.querySelector('.seePopup');\n        popMenu.classList.add('act');\n        document.body.classList.toggle('no-scroll');\n        popMenu.innerHTML = `\n          <div id=\"commentPopup\">\n            <div class=\"imgContainer\">\n              <img class=\"commentImg\" src=\"${image.original}\" alt=\"Comment Image\">\n              <span class=\"close-btn\">&#x2715;</span>\n            </div>\n            <h3 id=\"commentTitle\">${name}</h3>\n            <div id=\"commentDetails\">\n              <p>Language: ${language}</p>\n              <p>Runtime: ${runtime}</p>\n              <p>Type: ${type}</p>\n              <p>Status: ${status}</p>\n            </div>\n          </div>\n        `;\n        const popClose = document.querySelector('.close-btn');\n        popClose.addEventListener('click', () => {\n          popMenu.classList.remove('act');\n          document.body.classList.remove('no-scroll');\n        });\n        movieFound = true;\n      }\n    });\n\n    if (!movieFound) {\n      const popMenu = document.querySelector('.seePopup');\n      popMenu.classList.add('act');\n      document.body.classList.toggle('no-scroll');\n      popMenu.innerHTML = `\n        <div id=\"commentPopup\">\n          <h3 id=\"commentTitle\">No matching movies found</h3>\n          <span class=\"close-btn\">&#x2715;</span>\n        </div>\n      `;\n      const popClose = document.querySelector('.close-btn');\n      popClose.addEventListener('click', () => {\n        popMenu.classList.remove('act');\n        document.body.classList.remove('no-scroll');\n      });\n    }\n    document.getElementById('search').value = '';\n  });\n}\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/search.js?");

/***/ }),

/***/ "./src/modules/showNotification.js":
/*!*****************************************!*\
  !*** ./src/modules/showNotification.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showNotification = (message) => {\r\n  const notification = document.createElement('div');\r\n  notification.classList.add('notification');\r\n  notification.textContent = message;\r\n  document.body.appendChild(notification);\r\n  setTimeout(() => {\r\n    notification.classList.add('show');\r\n  }, 50);\r\n  setTimeout(() => {\r\n    notification.classList.remove('show');\r\n    setTimeout(() => {\r\n      notification.remove();\r\n    }, 300);\r\n  }, 2000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNotification);\r\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/showNotification.js?");

/***/ }),

/***/ "./src/modules/updateLikesCount.js":
/*!*****************************************!*\
  !*** ./src/modules/updateLikesCount.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateLikesCount = (likesData) => {\r\n  const likeElements = document.querySelectorAll('.likes-container span');\r\n\r\n  likeElements.forEach((likeElement) => {\r\n    const itemId = likeElement.parentElement.parentElement.parentElement.id;\r\n\r\n    const foundItem = likesData.find((item) => item.item_id === itemId);\r\n\r\n    if (foundItem) {\r\n      likeElement.textContent = `${foundItem.likes} Likes`;\r\n    } else {\r\n      likeElement.textContent = '0 Likes';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikesCount);\r\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/updateLikesCount.js?");

/***/ }),

/***/ "./src/modules/updateMovieCount.js":
/*!*****************************************!*\
  !*** ./src/modules/updateMovieCount.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _counterMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counterMovies.js */ \"./src/modules/counterMovies.js\");\n\r\n\r\nconst updateMovieCount = () => {\r\n  const movieCountElement = document.querySelector('.movie-count');\r\n  const movieCount = (0,_counterMovies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  movieCountElement.textContent = `(${movieCount})`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateMovieCount);\r\n\n\n//# sourceURL=webpack://webpack-installation/./src/modules/updateMovieCount.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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