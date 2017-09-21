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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

var EventCenter = (function () {
  var events = {}
  function on(evt, handler) {
    events[evt] = events[evt] || []
    events[evt].push({
      handler: handler
    })
  }
  function fire(evt, args) {
    if (!events[evt]) {
      return
    }
    for (var i = 0; i < events[evt].length; i++) {
      events[evt][i].handler(args)
    }
  }

  return {
    on: on,
    fire: fire
  }
})()


module.exports = EventCenter;


// EventCenter.on('text-change',function(){
//   console.log(data)
// })

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// require('less/mobile.less')

var Event = __webpack_require__(1)
var Ispc = __webpack_require__(6).Ispc

// var fullp = new Fullpage($('#pageLayout'))
// new Isay($('.say'), $('.myself'))

// Ispc()



// ChangeHeight($('.static'), 80,'HTML+CSS')
// ChangeHeight($('.dynamic'), 75,'JAVASCRIPT')
// ChangeHeight($('.phone'), 70,'HTML5+CSS3')
// ChangeHeight($('.frame'), 70,'JQ,VUE,REACT')

/***/ }),

/***/ 6:
/***/ (function(module, exports) {


var Ispc = (function () {
  var uAgent = navigator.userAgent.toLowerCase()
  console.log(uAgent)

  var reg = /(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i

  if (reg.test(uAgent)) {
    console.log('这是手机')
    if(location.pathname == '/mobile') return 
    location.href = '/mobile'
  }else{
    if(location.pathname == '/') return     
    console.log('这是PC')
    location.href = '/'
  }
})()

module.exports.Ispc = Ispc;


/***/ })

/******/ });