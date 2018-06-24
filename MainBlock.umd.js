(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MainBlock"] = factory(require("vue"));
	else
		root["MainBlock"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_lRwf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/whu":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NHnr");


/***/ }),

/***/ "2p1q":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("lDLk");
var createDesc = __webpack_require__("fU25");
module.exports = __webpack_require__("bUqO") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "7O1s":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("DIVP");
var aFunction = __webpack_require__("XSOZ");
var SPECIES = __webpack_require__("kkCw")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "7gX0":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "9D4m":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9GpA":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "9vb1":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("bN1p");
var ITERATOR = __webpack_require__("kkCw")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "A16L":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("R3AP");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "BbyF":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("oeih");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "CEne":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("OzIq");
var dP = __webpack_require__("lDLk");
var DESCRIPTORS = __webpack_require__("bUqO");
var SPECIES = __webpack_require__("kkCw")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "DIVP":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "Ds5P":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var core = __webpack_require__("7gX0");
var hide = __webpack_require__("2p1q");
var redefine = __webpack_require__("R3AP");
var ctx = __webpack_require__("rFzY");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "EuXz":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("lDLk").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("bUqO") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external___commonjs___vue___commonjs2___vue___root___Vue__ = __webpack_require__("lRwf");
var external___commonjs___vue___commonjs2___vue___root___Vue___default = /*#__PURE__*/__webpack_require__.n(external___commonjs___vue___commonjs2___vue___root___Vue__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("EuXz");
var es6_function_name_default = /*#__PURE__*/__webpack_require__.n(es6_function_name);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("y9m4");
var es6_promise_default = /*#__PURE__*/__webpack_require__.n(es6_promise);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("qwQ3");
var es6_regexp_search_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_search);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("mJx5");
var es6_regexp_split_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_split);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/travis/build/app4site/front/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/CoolInput.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CoolInput = ({
  props: {
    value: String,
    error: String,
    placeholder: String,
    autofocus: Boolean,
    alwaysFocus: Boolean,
    spinner: Boolean,
    readonly: Boolean,
    maxLen: Number
  },
  methods: {
    blur: function blur(event) {
      if (this.alwaysFocus) event.target.focus();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-75fc04b2","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug&optionsId=1!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/CoolInput.vue
var CoolInput_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cool-input",class:{spinner: _vm.spinner}},[_c('input',{class:{error: _vm.error},attrs:{"placeholder":" ","autofocus":_vm.alwaysFocus || _vm.autofocus,"readonly":_vm.readonly},domProps:{"value":_vm.value},on:{"input":function($event){_vm.$emit('input', $event.target.value.slice(0, _vm.maxLen || Infinity))},"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }!_vm.readonly && _vm.$emit('submit')},"blur":_vm.blur}}),_c('label',[_vm._v(_vm._s(_vm.error || _vm.placeholder))]),_c('span',{staticClass:"border"})])}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/CoolInput.vue
function injectStyle (context) {
  __webpack_require__("9D4m")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-75fc04b2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  CoolInput,
  CoolInput_render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_CoolInput = (Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/travis/build/app4site/front/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MyPhone.vue
//
//
//
//
//
//
/* harmony default export */ var MyPhone = ({});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-489466d0","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug&optionsId=1!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MyPhone.vue
var MyPhone_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"device"},[_c('div',{staticClass:"wrapper"},[_vm._t("default")],2)])}
var MyPhone_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/MyPhone.vue
function MyPhone_injectStyle (context) {
  __webpack_require__("vouH")
}
/* script */


/* template */

/* template functional */
var MyPhone___vue_template_functional__ = false
/* styles */
var MyPhone___vue_styles__ = MyPhone_injectStyle
/* scopeId */
var MyPhone___vue_scopeId__ = "data-v-489466d0"
/* moduleIdentifier (server only) */
var MyPhone___vue_module_identifier__ = null

var MyPhone_Component = normalizeComponent(
  MyPhone,
  MyPhone_render,
  MyPhone_staticRenderFns,
  MyPhone___vue_template_functional__,
  MyPhone___vue_styles__,
  MyPhone___vue_scopeId__,
  MyPhone___vue_module_identifier__
)

/* harmony default export */ var components_MyPhone = (MyPhone_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/travis/build/app4site/front/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MyButton.vue
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MyButton = ({
  props: {
    file: Boolean,
    primary: Boolean,
    name: String
  },
  data: function data() {
    return {};
  },
  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-afe69326","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug&optionsId=1!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MyButton.vue
var MyButton_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.file)?_c('label',{staticClass:"my-button",class:{primary: _vm.primary}},[_c('input',_vm._g({attrs:{"type":"file","name":_vm.name}},_vm.$listeners)),_c('span',[_vm._t("default")],2)]):_c('button',_vm._g({staticClass:"my-button",class:{primary: _vm.primary}},_vm.$listeners),[_vm._t("default")],2)}
var MyButton_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/MyButton.vue
function MyButton_injectStyle (context) {
  __webpack_require__("PVk6")
}
/* script */


/* template */

/* template functional */
var MyButton___vue_template_functional__ = false
/* styles */
var MyButton___vue_styles__ = MyButton_injectStyle
/* scopeId */
var MyButton___vue_scopeId__ = "data-v-afe69326"
/* moduleIdentifier (server only) */
var MyButton___vue_module_identifier__ = null

var MyButton_Component = normalizeComponent(
  MyButton,
  MyButton_render,
  MyButton_staticRenderFns,
  MyButton___vue_template_functional__,
  MyButton___vue_styles__,
  MyButton___vue_scopeId__,
  MyButton___vue_module_identifier__
)

/* harmony default export */ var components_MyButton = (MyButton_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/travis/build/app4site/front/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MApp.vue
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MApp = ({
  props: {
    blur: Boolean,
    appName: String,
    icon: String
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-06f30c64","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug&optionsId=1!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MApp.vue
var MApp_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-app",class:{blur: _vm.blur}},[_c('div',{staticClass:"icon"},[_c('div',{staticClass:"image",class:{placeholder: !_vm.icon},style:({backgroundImage: _vm.icon && ("url(" + _vm.icon + ")")})})]),_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.appName || 'Cool App!'))])])}
var MApp_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/MApp.vue
function MApp_injectStyle (context) {
  __webpack_require__("fCNt")
}
/* script */


/* template */

/* template functional */
var MApp___vue_template_functional__ = false
/* styles */
var MApp___vue_styles__ = MApp_injectStyle
/* scopeId */
var MApp___vue_scopeId__ = "data-v-06f30c64"
/* moduleIdentifier (server only) */
var MApp___vue_module_identifier__ = null

var MApp_Component = normalizeComponent(
  MApp,
  MApp_render,
  MApp_staticRenderFns,
  MApp___vue_template_functional__,
  MApp___vue_styles__,
  MApp___vue_scopeId__,
  MApp___vue_module_identifier__
)

/* harmony default export */ var components_MApp = (MApp_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/travis/build/app4site/front/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MainBlock.vue




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





function findGetParameter(parameterName) {
  var items = location.search.substr(1).split("&");

  for (var index = 0; index < items.length; index++) {
    var tmp = items[index].split("=");
    if (tmp[0] === parameterName) return decodeURIComponent(tmp[1]);
  }
}

/* harmony default export */ var MainBlock = ({
  props: {
    backUrl: String
  },
  data: function data() {
    return {
      site: '',
      error: '',
      appName: '',
      appPk: null,
      icon: '',
      apkUrl: '',
      state: 'start'
    };
  },
  components: {
    CoolInput: components_CoolInput,
    MyPhone: components_MyPhone,
    MyButton: components_MyButton,
    MApp: components_MApp
  },
  created: function created() {
    var id = findGetParameter('id');
    if (id) this.pregen(id);
  },
  watch: {
    site: function site() {
      this.error = '';

      if (this.state === 'done') {
        var el = document.activeElement;
        this.state = 'start';
        setTimeout(function () {
          return el.focus();
        }, 100);
      }
    }
  },
  methods: {
    reach: function reach(id) {
      if (!window.yaCounter48187421) return;
      window.yaCounter48187421.reachGoal(id);
    },
    download: function download() {
      this.reach('download');
    },
    createApp: function createApp() {
      var _this = this;

      this.reach('create');
      this.state = 'wait2';
      var form = new FormData();
      form.append('name', this.appName);
      form.append('final_url', this.site);
      fetch("".concat(this.backUrl, "/api/app/").concat(this.appPk), {
        method: 'POST',
        body: form
      }).then(function () {
        return _this.check();
      }).catch(function () {
        _this.state = 'pregen';
        _this.error = 'Неверные данные!';
      }).then(function (url) {
        _this.state = 'done';
        _this.apkUrl = new URL(url, _this.backUrl).toString();
      });
    },
    check: function check() {
      var _this2 = this;

      return new Promise(function (resolve) {
        setTimeout(function () {
          fetch("".concat(_this2.backUrl, "/api/app/").concat(_this2.appPk)).then(function (t) {
            return t.json();
          }).then(function (json) {
            if (json.app === 200) resolve(json.file_url);else resolve(_this2.check());
          });
        }, 2000);
      });
    },
    onFileChange: function onFileChange(e) {
      var _this3 = this;

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      var icon = files[0];
      var form = new FormData();
      form.append('icon', icon);
      fetch("".concat(this.backUrl, "/api/app/").concat(this.appPk, "/icon"), {
        method: 'POST',
        body: form
      }).then(function (t) {
        return t.json();
      }).then(function (json) {
        if (json.error) _this3.error = "Неправильная иконка!";else _this3.error = '';
        _this3.icon = new URL(json.icon, _this3.backUrl).toString();
      });
    },
    pregen: function pregen() {
      var _this4 = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!id) this.reach('pregen');
      this.state = 'wait1';
      var p = id ? fetch("".concat(this.backUrl, "/api/app/").concat(id), {
        method: 'GET'
      }) : fetch("".concat(this.backUrl, "/api/scrape"), {
        method: 'POST',
        body: this.site
      });
      p.then(function (t) {
        return t.json();
      }).then(function (json) {
        _this4.site = json.url;
        _this4.error = json.error;
        _this4.appPk = json.id;
        _this4.appName = json.name;
        _this4.icon = new URL(json.icon, _this4.backUrl).toString();
        document.activeElement.blur();
      }).then(function () {
        return _this4.state = 'pregen';
      }).catch(function () {
        _this4.error = 'Нет такого сайта!';
        _this4.state = 'start';
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-93774b2c","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug&optionsId=1!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MainBlock.vue
var MainBlock_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root",class:{mobile: _vm.mobile}},[_c('div',{staticClass:"desc"},[_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.mobile && (_vm.state === 'pregen' || _vm.state === 'wait1'))?_c('m-app',{staticClass:"app",attrs:{"blur":_vm.state === 'wait1',"icon":_vm.icon,"app-name":_vm.appName}}):_vm._e()],1),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.state === 'done')?_c('h1',{staticClass:"app"},[_vm._v("Готово!")]):(_vm.mobile && (_vm.state === 'pregen' || _vm.state === 'wait1'))?_c('div',{staticClass:"app"}):(_vm.state === 'wait2')?_c('div',{staticClass:"app"},[_c('h1',[_vm._v("Приложение создается...")]),_c('span',[_vm._v("Это займет пару минут")])]):_c('h1',{staticClass:"app"},[_vm._v("Создание приложения")])]),_c('cool-input',{staticClass:"inp",attrs:{"placeholder":"Адрес сайта","autofocus":!_vm.mobile,"error":_vm.error,"readonly":_vm.state.startsWith('wait'),"spinner":_vm.state.startsWith('wait')},on:{"submit":function($event){_vm.pregen()}},model:{value:(_vm.site),callback:function ($$v) {_vm.site=$$v},expression:"site"}}),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.state === 'start')?_c('div',{staticClass:"button prime",style:({visibility: _vm.site ? 'visible' : 'hidden'})},[_c('my-button',{attrs:{"primary":""},on:{"click":function($event){_vm.pregen()}}},[_vm._v("Продолжить")])],1):_vm._e()]),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.state === 'pregen')?_c('div',{staticClass:"edit"},[_c('cool-input',{staticClass:"inp",attrs:{"placeholder":"Название приложения","max-len":30},model:{value:(_vm.appName),callback:function ($$v) {_vm.appName=$$v},expression:"appName"}}),_c('my-button',{staticClass:"button",attrs:{"file":"","name":"icon"},on:{"change":_vm.onFileChange}},[_vm._v("Загрузить другую иконку")]),_c('my-button',{staticClass:"button prime",attrs:{"primary":""},on:{"click":_vm.createApp}},[_vm._v("Создать приложение!")])],1):_vm._e()]),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.state === 'done')?_c('div',{staticClass:"button prime"},[_c('a',{attrs:{"download":"","href":_vm.apkUrl}},[_c('my-button',{attrs:{"primary":""},on:{"click":_vm.download}},[_vm._v("Скачать приложение")])],1)]):_vm._e()])],1),(!_vm.mobile)?_c('my-phone',{staticClass:"preview"},[_c('m-app',{attrs:{"blur":_vm.state === 'start' || _vm.state === 'wait1',"icon":_vm.icon,"app-name":_vm.appName}})],1):_vm._e()],1)}
var MainBlock_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/MainBlock.vue
function MainBlock_injectStyle (context) {
  __webpack_require__("YiDN")
}
/* script */


/* template */

/* template functional */
var MainBlock___vue_template_functional__ = false
/* styles */
var MainBlock___vue_styles__ = MainBlock_injectStyle
/* scopeId */
var MainBlock___vue_scopeId__ = "data-v-93774b2c"
/* moduleIdentifier (server only) */
var MainBlock___vue_module_identifier__ = null

var MainBlock_Component = normalizeComponent(
  MainBlock,
  MainBlock_render,
  MainBlock_staticRenderFns,
  MainBlock___vue_template_functional__,
  MainBlock___vue_styles__,
  MainBlock___vue_scopeId__,
  MainBlock___vue_module_identifier__
)

/* harmony default export */ var components_MainBlock = (MainBlock_Component.exports);

// CONCATENATED MODULE: ./src/main.js


external___commonjs___vue___commonjs2___vue___root___Vue___default.a.config.productionTip = false;

function detectMobile() {
  return typeof window.isMobile === 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : window.isMobile;
}

external___commonjs___vue___commonjs2___vue___root___Vue___default.a.mixin({
  data: function data() {
    return {
      mobile: detectMobile()
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('resize', function () {
      return _this.mobile = detectMobile();
    });
  }
});
var app = new external___commonjs___vue___commonjs2___vue___root___Vue___default.a({
  render: function render(h) {
    return h(components_MainBlock, {
      props: {
        backUrl: 'https://api.app4.site' //backUrl: 'http://localhost:8000'

      }
    });
  }
});
if (false) window.MainBlock = app;
/* harmony default export */ var main = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "OzIq":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "PHCx":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "PVk6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "R3AP":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var hide = __webpack_require__("2p1q");
var has = __webpack_require__("WBcL");
var SRC = __webpack_require__("ulTY")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("7gX0").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "SDXa":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "SHe9":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("wC1N");
var ITERATOR = __webpack_require__("kkCw")('iterator');
var Iterators = __webpack_require__("bN1p");
module.exports = __webpack_require__("7gX0").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "Sejc":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("rFzY");
var invoke = __webpack_require__("PHCx");
var html = __webpack_require__("d075");
var cel = __webpack_require__("jhxf");
var global = __webpack_require__("OzIq");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("ydD5")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "UKM+":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "V3l/":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "VWgF":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "Vg1y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("2p1q");
var redefine = __webpack_require__("R3AP");
var fails = __webpack_require__("zgIt");
var defined = __webpack_require__("/whu");
var wks = __webpack_require__("kkCw");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "WBcL":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "XSOZ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "XvUs":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("DIVP");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "YiDN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bN1p":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "bUqO":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("zgIt")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "d075":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("OzIq").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fCNt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fU25":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "g36u":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var macrotask = __webpack_require__("Sejc").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("ydD5")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "jhxf":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
var document = __webpack_require__("OzIq").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "kkCw":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("VWgF")('wks');
var uid = __webpack_require__("ulTY");
var Symbol = __webpack_require__("OzIq").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "lDLk":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("DIVP");
var IE8_DOM_DEFINE = __webpack_require__("xZa+");
var toPrimitive = __webpack_require__("s4j0");
var dP = Object.defineProperty;

exports.f = __webpack_require__("bUqO") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lRwf__;

/***/ }),

/***/ "mJx5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("Vg1y")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("u0PK");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "nphH":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("DIVP");
var isObject = __webpack_require__("UKM+");
var newPromiseCapability = __webpack_require__("w6Dh");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "oeih":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "qkyc":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("kkCw")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "qwQ3":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("Vg1y")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "rFzY":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("XSOZ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "s4j0":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("UKM+");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "u0PK":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("UKM+");
var cof = __webpack_require__("ydD5");
var MATCH = __webpack_require__("kkCw")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ulTY":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "vmSO":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("rFzY");
var call = __webpack_require__("XvUs");
var isArrayIter = __webpack_require__("9vb1");
var anObject = __webpack_require__("DIVP");
var toLength = __webpack_require__("BbyF");
var getIterFn = __webpack_require__("SHe9");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "vouH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "w6Dh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("XSOZ");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "wC1N":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("ydD5");
var TAG = __webpack_require__("kkCw")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "xZa+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("bUqO") && !__webpack_require__("zgIt")(function () {
  return Object.defineProperty(__webpack_require__("jhxf")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "y9m4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("V3l/");
var global = __webpack_require__("OzIq");
var ctx = __webpack_require__("rFzY");
var classof = __webpack_require__("wC1N");
var $export = __webpack_require__("Ds5P");
var isObject = __webpack_require__("UKM+");
var aFunction = __webpack_require__("XSOZ");
var anInstance = __webpack_require__("9GpA");
var forOf = __webpack_require__("vmSO");
var speciesConstructor = __webpack_require__("7O1s");
var task = __webpack_require__("Sejc").set;
var microtask = __webpack_require__("g36u")();
var newPromiseCapabilityModule = __webpack_require__("w6Dh");
var perform = __webpack_require__("SDXa");
var promiseResolve = __webpack_require__("nphH");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("kkCw")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("A16L")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("yYvK")($Promise, PROMISE);
__webpack_require__("CEne")(PROMISE);
Wrapper = __webpack_require__("7gX0")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("qkyc")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "yYvK":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("lDLk").f;
var has = __webpack_require__("WBcL");
var TAG = __webpack_require__("kkCw")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "ydD5":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "zgIt":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=MainBlock.umd.js.map