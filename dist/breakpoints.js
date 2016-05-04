(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Breakpoints"] = factory();
	else
		root["Breakpoints"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _classCallCheck2 = __webpack_require__(1);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(2);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Breakpoints = function () {\n\tfunction Breakpoints(target) {\n\t\tvar _this = this;\n\n\t\tvar options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\t\t(0, _classCallCheck3.default)(this, Breakpoints);\n\n\t\tthis.target = target instanceof jQuery === true ? target : $(target);\n\t\tthis.lastSize = 0;\n\t\tthis.options = $.extend({\n\t\t\tdistinct: true,\n\t\t\tbreakpoints: [320, 480, 768, 1024],\n\t\t\tinterval: 250\n\t\t}, options);\n\n\t\tthis.interval = setInterval(function () {\n\n\t\t\tvar w = _this.target.width();\n\t\t\tvar done = false;\n\n\t\t\t_this.options.breakpoints.sort(function (a, b) {\n\t\t\t\treturn b - a;\n\t\t\t}).forEach(function (breakpoint, index) {\n\n\t\t\t\t// fire onEnter when a browser expands into a new breakpoint\n\t\t\t\t// if in distinct mode, remove all other breakpoints first.\n\t\t\t\tif (!done && w >= breakpoint && _this.lastSize < breakpoint) {\n\t\t\t\t\tif (_this.options.distinct) {\n\t\t\t\t\t\tfor (var x in _this.options.breakpoints.sort(function (a, b) {\n\t\t\t\t\t\t\treturn b - a;\n\t\t\t\t\t\t})) {\n\t\t\t\t\t\t\tif (_this.target.hasClass('breakpoint-' + _this.options.breakpoints[x])) {\n\t\t\t\t\t\t\t\t_this.target.removeClass('breakpoint-' + _this.options.breakpoints[x]);\n\t\t\t\t\t\t\t\t_this.target.trigger('exitBreakpoint' + _this.options.breakpoints[x]);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdone = true;\n\t\t\t\t\t}\n\t\t\t\t\t_this.target.addClass('breakpoint-' + breakpoint);\n\t\t\t\t\t_this.target.trigger('enterBreakpoint' + breakpoint);\n\t\t\t\t}\n\n\t\t\t\t// fire onExit when browser contracts out of a larger breakpoint\n\t\t\t\tif (w < breakpoint && _this.lastSize >= breakpoint) {\n\t\t\t\t\t_this.target.removeClass('breakpoint-' + breakpoint);\n\t\t\t\t\t_this.target.trigger('exitBreakpoint' + breakpoint);\n\t\t\t\t}\n\n\t\t\t\t// if in distinct mode, fire onEnter when browser contracts into a smaller breakpoint\n\t\t\t\tif (_this.options.distinct && // only one breakpoint at a time\n\t\t\t\tw >= breakpoint && // and we are in this one\n\t\t\t\tw < _this.options.breakpoints[index - 1] && // and smaller than the bigger one\n\t\t\t\t_this.lastSize > w && // and we contracted\n\t\t\t\t_this.lastSize > 0 && // and this is not the first time\n\t\t\t\t!_this.target.hasClass('breakpoint-' + breakpoint) // and we aren't already in this breakpoint\n\t\t\t\t) {\n\t\t\t\t\t\t_this.target.addClass('breakpoint-' + breakpoint);\n\t\t\t\t\t\t_this.target.trigger('enterBreakpoint' + breakpoint);\n\t\t\t\t\t}\n\t\t\t});\n\n\t\t\t// set up for next call\n\t\t\tif (_this.lastSize !== w) {\n\t\t\t\t_this.lastSize = w;\n\t\t\t}\n\t\t}, this.options.interval);\n\n\t\tthis.target.data('breakpoints', this);\n\t}\n\n\t(0, _createClass3.default)(Breakpoints, [{\n\t\tkey: 'destroy',\n\t\tvalue: function destroy() {\n\t\t\tclearInterval(this.interval);\n\t\t\tthis.lastSize = 0;\n\t\t}\n\t}]);\n\treturn Breakpoints;\n}();\n\n// EXPORT ES6\n\n\nexports.default = Breakpoints;\n\n// EXPORT ES5\n\nmodule.exports = exports.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/classCallCheck.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/classCallCheck.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(3);\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/createClass.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/createClass.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(4), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/core-js/object/define-property.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/core-js/object/define-property.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("var $ = __webpack_require__(5);\nmodule.exports = function defineProperty(it, key, desc){\n  return $.setDesc(it, key, desc);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/fn/object/define-property.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/fn/object/define-property.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("var $Object = Object;\nmodule.exports = {\n  create:     $Object.create,\n  getProto:   $Object.getPrototypeOf,\n  isEnum:     {}.propertyIsEnumerable,\n  getDesc:    $Object.getOwnPropertyDescriptor,\n  setDesc:    $Object.defineProperty,\n  setDescs:   $Object.defineProperties,\n  getKeys:    $Object.keys,\n  getNames:   $Object.getOwnPropertyNames,\n  getSymbols: $Object.getOwnPropertySymbols,\n  each:       [].forEach\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.js?");

/***/ }
/******/ ])
});
;