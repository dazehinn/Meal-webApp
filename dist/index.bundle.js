"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmeal_webapp"] = self["webpackChunkmeal_webapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\nnav {\\n  display: flex;\\n  top: 0;\\n  margin: 25px 5px;\\n  border-bottom: 1px solid rgba(191, 211, 202, 0.562);\\n  position: sticky;\\n}\\n\\n.logo {\\n  width: 55px;\\n  margin-left: 32px;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nnav ul {\\n  list-style-type: none;\\n  display: flex;\\n  width: 50%;\\n  justify-content: space-around;\\n  align-items: center;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nfooter {\\n  display: flex;\\n  padding: 1rem 3rem;\\n  border-top: 2px solid rgb(77, 15, 15);\\n  font-size: 1.5rem;\\n  font-weight: 700;\\n  width: 100%;\\n  height: 50px;\\n  bottom: 0;\\n}\\n\\nfooter p {\\n  font-size: 16px;\\n  color: #050000;\\n  font-weight: 700;\\n  margin-left: 100px;\\n}\\n\\n.github {\\n  color: rgb(255, 0, 234);\\n}\\n\\n.fa-regular {\\n  color: rgb(255, 0, 234);\\n}\\n\\n#meals_list {\\n  width: 90%;\\n  margin-top: 80px;\\n  padding-top: 1rem;\\n  padding-bottom: 10rem;\\n}\\n\\n.card {\\n  margin-top: 1rem;\\n  margin-bottom: 2rem;\\n}\\n\\n.card a {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n.comments_button {\\n  border-radius: 1.2rem;\\n  margin-top: 15px;\\n}\\n\\n.display_none {\\n  display: none;\\n}\\n\\n.display__block {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.block_scroll {\\n  overflow: hidden;\\n}\\n\\n.image_section {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.thumb {\\n  width: 300px;\\n  height: auto;\\n  margin: 20px 0;\\n}\\n\\n#popup_section {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  backdrop-filter: blur(5px);\\n  z-index: 1000;\\n  overflow: scroll;\\n}\\n\\n#popup_container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background-color: #fff;\\n  overflow-y: scroll;\\n  padding: 1rem;\\n}\\n\\n#popup_close {\\n  width: 20px;\\n  position: absolute;\\n  top: 10px;\\n  right: 10px;\\n  cursor: pointer;\\n}\\n\\n#prev_comments {\\n  display: flex;\\n  padding-bottom: 30px;\\n}\\n\\n.load_comments {\\n  max-width: 400px;\\n  min-width: 375px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 20px;\\n}\\n\\n.comment_container {\\n  border: 1px solid gray;\\n  border-radius: 10px;\\n  padding: 10px 10px;\\n  margin-bottom: 20px;\\n  min-width: 320px;\\n}\\n\\n.dateOf_text {\\n  align-self: flex-end;\\n}\\n\\n.information {\\n  padding: 20px;\\n}\\n\\n.instructions {\\n  text-align: justify;\\n  text-justify: inter-word;\\n}\\n\\n@media (min-width: 600px) {\\n  .comment_section {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: baseline;\\n    justify-content: space-around;\\n  }\\n}\\n\\n.add_comment {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 10px 20px;\\n  padding-bottom: 60px;\\n}\\n\\n#name {\\n  margin-bottom: 10px;\\n}\\n\\n#comment {\\n  margin-top: 10px;\\n  margin-bottom: 10px;\\n}\\n\\n::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n#comments_List {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://meal-webapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://meal-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://meal-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://meal-webapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://meal-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://meal-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://meal-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://meal-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://meal-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://meal-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_meals_loadAPIMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/meals/loadAPIMeals.js */ \"./src/modules/meals/loadAPIMeals.js\");\n/* harmony import */ var _modules_comments_createPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments/createPopup.js */ \"./src/modules/comments/createPopup.js\");\n/* harmony import */ var _modules_logo_getLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/logo/getLogo */ \"./src/modules/logo/getLogo.js\");\n\n\n\n\n\n\nwindow.onload = () => {\n  (0,_modules_logo_getLogo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_meals_loadAPIMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_comments_createPopup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\n\n//# sourceURL=webpack://meal-webapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments/closePopup.js":
/*!********************************************!*\
  !*** ./src/modules/comments/closePopup.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst closePopup = () => {\n  const popupSection = document.getElementById('popup_section');\n  const body = document.querySelector('body');\n  const nav = document.querySelector('nav');\n  const footer = document.querySelector('footer');\n  popupSection.classList.add('display_none');\n  popupSection.classList.remove('display_block');\n  body.classList.remove('block_scroll');\n  nav.classList.remove('display_none');\n  footer.classList.remove('display_none');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closePopup);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/comments/closePopup.js?");

/***/ }),

/***/ "./src/modules/comments/createPopup.js":
/*!*********************************************!*\
  !*** ./src/modules/comments/createPopup.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _closePopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closePopup.js */ \"./src/modules/comments/closePopup.js\");\n\n\nconst createPopup = () => {\n  const popupSection = document.getElementById('popup_section');\n  const popupContainer = document.createElement('section');\n  popupContainer.setAttribute('id', 'popup_container');\n  popupContainer.innerHTML = `    \n  <div class='image_section'>\n   <img class='thumb' src=\"\" alt='meal image'/>  \n   <h2 class=\"mealName\"></h2>\n  </div>    \n  <section class='information'>\n    <h4 class='category'></h4>\n    <h4 class='area'></h4>\n    <p class='instructions'></p>\n  </section>\n  <section class='comment_section'>\n  <section class='load_comments'>\n    <h2 id='comments_title'>Comments</h2>\n    <div id='prev_comments'>          \n      <ul id=\"comments_list\"></ul>\n    </div>\n    <h5 id='error_message'></h5>\n  </section>\n  <i id='popup_close' class='fa-solid fa-xmark fa-2x'></i> \n    `;\n  popupSection.appendChild(popupContainer);\n  const closeIcon = document.getElementById('popup_close');\n  closeIcon.addEventListener('click', () => {\n    (0,_closePopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopup);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/comments/createPopup.js?");

/***/ }),

/***/ "./src/modules/comments/displayAPIComments.js":
/*!****************************************************!*\
  !*** ./src/modules/comments/displayAPIComments.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchAPIComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPIComments.js */ \"./src/modules/comments/fetchAPIComments.js\");\n\n\nconst displayAPIComments = async (idMeals) => {\n  const comments = await (0,_fetchAPIComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idMeals);\n  const commentCntr = document.getElementById('comments_list');\n  const container = document.getElementById('error_message');\n  container.textContent = '';\n  let prevComments = '';\n  if (comments) {\n    comments.forEach((e) => {\n      prevComments += `\n        <li class='comment_container'>\n          <h5><b>@${e.username}</b></h5>\n          <h5>${e.comment}</h5>\n          <h6 class=\"dateOf_text text-end\">${e.creation_date}</h6>\n        </li>\n      `;\n    });\n    commentCntr.innerHTML = prevComments;\n  } else {\n    container.textContent = 'There are no comments yet for this meal.';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAPIComments);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/comments/displayAPIComments.js?");

/***/ }),

/***/ "./src/modules/comments/displayComments.js":
/*!*************************************************!*\
  !*** ./src/modules/comments/displayComments.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayComments = () => {\n  const commentsSection = document.getElementById('popup_section');\n  const body = document.querySelector('body');\n  const nav = document.querySelector('nav');\n  const footer = document.querySelector('footer');\n\n  body.classList.add('block_scroll');\n  footer.classList.add('display_none');\n  nav.classList.add('display_none');\n  commentsSection.classList.remove('display_none');\n  commentsSection.classList.add('display_block');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/comments/displayComments.js?");

/***/ }),

/***/ "./src/modules/comments/fetchAPIComments.js":
/*!**************************************************!*\
  !*** ./src/modules/comments/fetchAPIComments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/comments?item_id=';\n\nconst fetchAPIComments = async (idMeal) => {\n  let comments = [];\n  const response = await fetch(commentUrl + idMeal);\n  if (response.status >= 400 && response.status < 600) {\n    return false;\n  }\n  comments = await response.json();\n  return comments;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAPIComments);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/comments/fetchAPIComments.js?");

/***/ }),

/***/ "./src/modules/comments/fetchAPIMealDetails.js":
/*!*****************************************************!*\
  !*** ./src/modules/comments/fetchAPIMealDetails.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchAPIMealDetails = async (idMeal) => {\n  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\n  const response = await fetch(apiUrl + idMeal);\n  const comments = await response.json();\n  return comments;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAPIMealDetails);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/comments/fetchAPIMealDetails.js?");

/***/ }),

/***/ "./src/modules/comments/loadAPIComments.js":
/*!*************************************************!*\
  !*** ./src/modules/comments/loadAPIComments.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayAPIComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayAPIComments.js */ \"./src/modules/comments/displayAPIComments.js\");\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ \"./src/modules/comments/displayComments.js\");\n/* harmony import */ var _fetchAPIMealDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchAPIMealDetails.js */ \"./src/modules/comments/fetchAPIMealDetails.js\");\n\n\n\n\nconst loadAPIComments = async (idMeal) => {\n  const comments = await (0,_fetchAPIMealDetails_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(idMeal);\n  const category = document.querySelector('.category');\n  category.setAttribute('id', idMeal);\n  const area = document.querySelector('.area');\n  const instructions = document.querySelector('.instructions');\n  const mealName = document.querySelector('.mealName');\n  const mealImage = document.querySelector('.thumb');\n  const commentArray = comments.meals[0];\n  category.innerHTML = `Category: ${commentArray.strCategory}`;\n  area.innerHTML = `Area: ${commentArray.strArea}`;\n  instructions.innerHTML = `<b>Instructions: </b>${commentArray.strInstructions}`;\n  mealName.innerHTML = commentArray.strMeal;\n  mealImage.src = commentArray.strMealThumb;\n  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_displayAPIComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idMeal);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAPIComments);\n\n\n//# sourceURL=webpack://meal-webapp/./src/modules/comments/loadAPIComments.js?");

/***/ }),

/***/ "./src/modules/likes/addLikes.js":
/*!***************************************!*\
  !*** ./src/modules/likes/addLikes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addLikes = async (idMeal) => {\n  const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/likes';\n  const newLike = {\n    item_id: idMeal,\n  };\n  await fetch(likeUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(newLike),\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLikes);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/likes/addLikes.js?");

/***/ }),

/***/ "./src/modules/likes/fetchAPILikes.js":
/*!********************************************!*\
  !*** ./src/modules/likes/fetchAPILikes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAllLikes\": () => (/* binding */ fetchAllLikes),\n/* harmony export */   \"fetchMealLikes\": () => (/* binding */ fetchMealLikes)\n/* harmony export */ });\nconst likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/likes';\n\nconst fetchAllLikes = async () => {\n  const response = await fetch(likeUrl);\n  if (response.status >= 400 && response.status < 600) {\n    return false;\n  }\n  const like = await response.json();\n  return like;\n};\n\nconst fetchMealLikes = async (mealId) => {\n  const allLikes = await fetchAllLikes();\n  const mealLikes = [];\n  allLikes.forEach((like) => {\n    if (mealId === like.item_id) {\n      mealLikes.push(like.likes);\n    }\n  });\n  return mealLikes[0];\n};\n\n\n\n\n//# sourceURL=webpack://meal-webapp/./src/modules/likes/fetchAPILikes.js?");

/***/ }),

/***/ "./src/modules/likes/updateLikes.js":
/*!******************************************!*\
  !*** ./src/modules/likes/updateLikes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchAPILikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPILikes.js */ \"./src/modules/likes/fetchAPILikes.js\");\n/* harmony import */ var _addLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addLikes.js */ \"./src/modules/likes/addLikes.js\");\n\n\n\nconst updateLikes = async (mealID) => {\n  const likeNode = document.querySelector(`#likes_${mealID}`);\n  await (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealID);\n  const newLike = await (0,_fetchAPILikes_js__WEBPACK_IMPORTED_MODULE_0__.fetchMealLikes)(mealID);\n  likeNode.textContent = `${newLike} likes`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikes);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/likes/updateLikes.js?");

/***/ }),

/***/ "./src/modules/logo/getLogo.js":
/*!*************************************!*\
  !*** ./src/modules/logo/getLogo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_vintage_restaurant_menu_23_2147491098_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/vintage-restaurant-menu_23-2147491098.avif */ \"./src/images/vintage-restaurant-menu_23-2147491098.avif\");\n\r\n\r\nconst getLogo = () => {\r\n  const logo = document.querySelector('.logo');\r\n  logo.src = _images_vintage_restaurant_menu_23_2147491098_avif__WEBPACK_IMPORTED_MODULE_0__;\r\n  logo.alt = 'logo';\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLogo);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/logo/getLogo.js?");

/***/ }),

/***/ "./src/modules/meals/countMeals.js":
/*!*****************************************!*\
  !*** ./src/modules/meals/countMeals.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countMeals = () => {\n  const totalMeals = document.querySelector('.total-meals');\n  const tot = document.querySelector('#meals_list').childElementCount;\n  totalMeals.innerHTML = `(${tot}) meals`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countMeals);\n\n\n//# sourceURL=webpack://meal-webapp/./src/modules/meals/countMeals.js?");

/***/ }),

/***/ "./src/modules/meals/displayMeal.js":
/*!******************************************!*\
  !*** ./src/modules/meals/displayMeal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comments_displayAPIComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../comments/displayAPIComments.js */ \"./src/modules/comments/displayAPIComments.js\");\n/* harmony import */ var _comments_loadAPIComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comments/loadAPIComments.js */ \"./src/modules/comments/loadAPIComments.js\");\n/* harmony import */ var _likes_updateLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../likes/updateLikes.js */ \"./src/modules/likes/updateLikes.js\");\n\n\n\n\nconst displayMeal = (mealCard, meal) => {\n  const mealsList = document.getElementById('meals_list');\n  mealsList.appendChild(mealCard);\n\n  const commentsBtn = document.getElementById(`comments_${meal.idMeal}`);\n  commentsBtn.addEventListener('click', () => {\n    (0,_comments_loadAPIComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meal.idMeal);\n    (0,_comments_displayAPIComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(meal.idMeal);\n  });\n  const likeBtn = document.querySelector(`#like_${meal.idMeal}`);\n  likeBtn.addEventListener('click', async () => {\n    await (0,_likes_updateLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meal.idMeal);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeal);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/meals/displayMeal.js?");

/***/ }),

/***/ "./src/modules/meals/fetchAPIMeals.js":
/*!********************************************!*\
  !*** ./src/modules/meals/fetchAPIMeals.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';\n\nconst fetchAPIMeals = async () => {\n  const request = await fetch(apiUrl);\n  const { meals } = await request.json();\n  return meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAPIMeals);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/meals/fetchAPIMeals.js?");

/***/ }),

/***/ "./src/modules/meals/loadAPIMeals.js":
/*!*******************************************!*\
  !*** ./src/modules/meals/loadAPIMeals.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayMeal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayMeal.js */ \"./src/modules/meals/displayMeal.js\");\n/* harmony import */ var _mealCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mealCard.js */ \"./src/modules/meals/mealCard.js\");\n/* harmony import */ var _fetchAPIMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchAPIMeals.js */ \"./src/modules/meals/fetchAPIMeals.js\");\n/* harmony import */ var _likes_fetchAPILikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../likes/fetchAPILikes.js */ \"./src/modules/likes/fetchAPILikes.js\");\n/* harmony import */ var _countMeals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countMeals.js */ \"./src/modules/meals/countMeals.js\");\n\n\n\n\n\n\nconst loadAPIMeals = async () => {\n  const meals = await (0,_fetchAPIMeals_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  meals.forEach(async (meal) => {\n    const like = await (0,_likes_fetchAPILikes_js__WEBPACK_IMPORTED_MODULE_3__.fetchMealLikes)(meal.idMeal);\n    const containerElement = (0,_mealCard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meal, like);\n    (0,_displayMeal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(containerElement, meal);\n    (0,_countMeals_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAPIMeals);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/meals/loadAPIMeals.js?");

/***/ }),

/***/ "./src/modules/meals/mealCard.js":
/*!***************************************!*\
  !*** ./src/modules/meals/mealCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealCard = (meal, likes) => {\n  const mealElement = document.createElement('li');\n  mealElement.classList.add('col-md-6');\n  mealElement.classList.add('col-lg-4');\n  mealElement.classList.add('col-xxl-3');\n  mealElement.innerHTML = `\n  <article id=${meal.idMeal}>\n    <div class='card h-95'>\n      <img src=${meal.strMealThumb} class=\"card-img-top\" alt=${meal.strMeal}>\n      <div class=\"card-body\">\n        <header class='row'>\n          <div class=\"col\">\n            <span class='fs-5'>${meal.strMeal}</span><br> \n            <span class=\"fs-6\">${meal.strArea}</span>\n          </div>\n          <div class=\"col d-flex justify-content-end\">\n            <a href=\"#\" id=\"like_${meal.idMeal}\" flex-column align-items-center class=\"d-flex justify-content-center\">\n              <i class=\"fa-regular fa-heart fa-2x\"></i>\n              <small id=\"likes_${meal.idMeal}\">${likes} likes</small>\n            </a>\n          </div>\n        </header>\n        <div class=\"row mt-3\">\n          <div class=\"col\">\n            <small>${meal.strCategory}</small>\n          </div>\n          <div class=\"col text-end\">\n            <button id=\"comments_${meal.idMeal}\" class='btn comments_button btn-outline-primary'>Comments</button>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </article>  \n  `;\n  return mealElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCard);\n\n//# sourceURL=webpack://meal-webapp/./src/modules/meals/mealCard.js?");

/***/ }),

/***/ "./src/images/vintage-restaurant-menu_23-2147491098.avif":
/*!***************************************************************!*\
  !*** ./src/images/vintage-restaurant-menu_23-2147491098.avif ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aefdd792e9e14b1bd09c.avif\";\n\n//# sourceURL=webpack://meal-webapp/./src/images/vintage-restaurant-menu_23-2147491098.avif?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);