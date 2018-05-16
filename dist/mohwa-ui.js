(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MohwaUI"] = factory();
	else
		root["MohwaUI"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(46);
var isBuffer = __webpack_require__(104);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(32)('wks');
var uid = __webpack_require__(33);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(9);
var hide = __webpack_require__(6);
var has = __webpack_require__(13);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(59);
var toPrimitive = __webpack_require__(60);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(12);
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
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(66);
var defined = __webpack_require__(16);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys');
var uid = __webpack_require__(33);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(16);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(12);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var normalizeHeaderName = __webpack_require__(106);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(48);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(48);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by mohwa on 2018. 4. 23..
 */

var COMPONENT_PREFIX_NAME = '-mohwa-ui-';

/**
 *
 * @type {{}}
 */
var BASE = {

  /**
   * 컴포넌트 클래명을 반환한다.
   */
  componentClassName: function componentClassName() {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


    return '' + COMPONENT_PREFIX_NAME + v;
  }
};

module.exports = BASE;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(58)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(30)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(61);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(11);
var $iterCreate = __webpack_require__(62);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(69);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(65);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(17) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(14);
var TAG = __webpack_require__(3)('toStringTag');
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(11);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(36);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(11);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(12);
var SPECIES = __webpack_require__(3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var invoke = __webpack_require__(77);
var html = __webpack_require__(35);
var cel = __webpack_require__(19);
var global = __webpack_require__(0);
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
  if (__webpack_require__(14)(process) == 'process') {
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
/* 42 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isObject = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(26);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by mohwa on 2018. 4. 21..
 */

/**
*
*/
var Type = {
    /**
     * 순수 오브젝트 타입 여부를 반환한다.
     */
    isPlainObject: function isPlainObject() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        return v && v.constructor === Object;
    },
    isFunction: function isFunction() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        return typeof v === 'function';
    },

    /**
     *
     */
    isNull: function isNull(v) {
        return v === null;
    },

    /**
     * 배열 타입 여부를 반환한다.
     */
    isArray: function isArray() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        return Array.isArray(v);
    },

    /**
     * 문자열 타입 여부를 반환한다.
     */
    isString: function isString() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        return typeof v === 'string';
    },

    /**
     * 빈값 여부를 반환한다.
     */
    isEmpty: function isEmpty() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        return v === undefined || v === null || v === false || v === 0 || v === '';
    }
};

module.exports = Type;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var settle = __webpack_require__(107);
var buildURL = __webpack_require__(109);
var parseHeaders = __webpack_require__(110);
var isURLSameOrigin = __webpack_require__(111);
var createError = __webpack_require__(49);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(112);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(113);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(108);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by mohwa on 2018. 4. 19..
 */

__webpack_require__(53);

module.exports = {
  Base: __webpack_require__(28),
  Suggest: __webpack_require__(54)
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(55);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(84);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(85);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mohwa on 2018. 4. 21..
 */

var BASE = __webpack_require__(28);
var Util = __webpack_require__(89);
var Type = __webpack_require__(45);

// 문자 조합/분리 모듈
var Ganada = __webpack_require__(99);

// ajax 라이브러리
var axios = __webpack_require__(102);

var Mousetrap = __webpack_require__(121);

var COMPONENT_CLASS_NAME = BASE.componentClassName('suggest');

// 전역 클래스 객체
var CLASS_NAME = {
    searchList: 'search-list',
    searchText: 'search-text',
    highlightWord: 'highlight-word'
};

/**
 * Suggest Class
 */

var Suggest = function () {
    function Suggest() {
        var _this = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$elem = _ref.elem,
            elem = _ref$elem === undefined ? null : _ref$elem,
            _ref$data = _ref.data,
            data = _ref$data === undefined ? [] : _ref$data,
            _ref$onEnter = _ref.onEnter,
            onEnter = _ref$onEnter === undefined ? null : _ref$onEnter,
            _ref$onSelected = _ref.onSelected,
            onSelected = _ref$onSelected === undefined ? function () {} : _ref$onSelected;

        (0, _classCallCheck3.default)(this, Suggest);


        this.opts = {
            elem: elem,
            data: data,
            onEnter: onEnter,
            onSelected: onSelected
        };

        // 데이터를 바인딩한다.
        this.data = _getSearchData.call(this).then(function (res) {

            _this.data = res.data;
            _this.init();
        }).catch(function (err) {
            console.error(err);
        });

        // 컴포넌트 엘리먼트
        this.component = null;

        // 임시 검색된 문자열
        this.searchedText = '';

        // 활성화된 아이템
        this.activedItem = null;
    }

    (0, _createClass3.default)(Suggest, [{
        key: 'init',
        value: function init() {

            var root = this.opts.elem;
            var component = this.component = _createElement();

            _setSearchListPosition.call(this);

            Util.after(root, component);

            _addEventListener.call(this);
        }
    }]);
    return Suggest;
}();

/**
 * 컴포넌트 엘리먼트 객체를 반환한다.
 *
 * @returns {*}
 * @private
 */


function _createElement() {

    var html = [];

    html.push('<div class="' + COMPONENT_CLASS_NAME + '">');
    html.push('<div class="' + CLASS_NAME.searchList + '">');
    html.push('<ul>');
    html.push('</ul>');
    html.push('</div>');
    html.push('</div>');

    return Util.el('div', { 'innerHTML': html.join('') }).firstChild;
}

/**
 *
 * 필요 이벤트들을 바인딩한다.
 *
 * @private
 */
function _addEventListener() {
    var _this2 = this;

    var root = this.opts.elem;
    var component = this.component;
    var onEnter = this.opts.onEnter;

    var ul = Util.sel('ul', component);

    Util.prop(root, 'addEventListener', ['keyup', function (e) {

        var elem = e.target;

        var val = elem.value;

        // 정의된 키코드들을 막는다.
        if (_isPreventKeyCode.call(_this2, e)) return;

        // 공백 처리
        if (Type.isEmpty(val)) {
            _hide.call(_this2);
            return;
        }

        _this2.searchedText = val;

        _clearSearchedList(ul);

        // 검색 리스트를 반환한다.
        var list = _createSearchList(val, _this2.data);

        if (list.length) {

            Util.prop(ul, 'innerHTML', list.join(''));

            _show.call(_this2);
        }
    }]);

    Util.prop(ul, 'addEventListener', ['click', function (e) {

        var elem = e.target;
        var nodeName = elem.nodeName.toLowerCase();
        var activeItem = _this2.activedItem;

        // ui 엘리먼트 내부에서 `enter` 키가 눌렸을 경우
        if (_this2.isEnterKeyDown) {
            _this2.isEnterKeyDown = false;
            return;
        }

        var li = nodeName === 'a' || nodeName === 'b' ? Util.parents(elem, 'li')[0] : elem;

        var text = _getElemText(li);

        _this2.opts.onSelected.call(_this2, text);

        if (activeItem) _addBlurClassName(activeItem);

        _addFocusClassName(li);

        Util.sel('a', li).focus();

        Util.prop(root, 'value', text);

        _this2.activedItem = li;
    }]);

    // 문서 엘리먼트를 클릭한 경우.
    Util.prop(document, 'addEventListener', ['click', function (e) {

        var elem = e.target;

        if (_isClose(elem)) _hide.call(_this2);
    }]);

    Mousetrap(root).bind('up', function (e) {
        _up.call(_this2, e);
    });
    Mousetrap(root).bind('down', function (e) {
        _down.call(_this2, e);
    });

    Mousetrap(ul).bind('up', function (e) {
        _up.call(_this2, e);
    });
    Mousetrap(ul).bind('down', function (e) {
        _down.call(_this2, e);
    });

    Mousetrap(root).bind('tab', function (e) {
        _hide.call(_this2);
    });
    Mousetrap(ul).bind('tab', function (e) {
        _hide.call(_this2);
    });

    Mousetrap(root).bind('enter', function (e) {
        enterKeyDown.call(_this2);
    });
    Mousetrap(ul).bind('enter', function (e) {
        _this2.isEnterKeyDown = true;
        enterKeyDown.call(_this2);
    });

    function enterKeyDown() {

        Type.isFunction(onEnter) && onEnter.call(this, root.value);
        _hide.call(this);
    }
}

/**
 *
 * 검색 리스트의 사이즈/위치를 설정한다.
 *
 * @private
 */
function _setSearchListPosition() {

    var root = this.opts.elem;
    var component = this.component;

    // root 엘리먼트의 절대 수치를 반환한다.
    var offset = Util.offset(root);

    var width = Util.outerWidth(root);
    var height = Util.outerHeight(root);

    var top = offset.top + height;

    Util.prop(component, {
        '@width': width + 'px',
        '@top': top + 'px',
        '@left': offset.left + 'px'
    });
}

/**
 *
 * component 엘리먼트를 show 시킨다.
 *
 * @private
 */
function _show() {
    Util.prop(this.component, '@display', 'block');
}

/**
 *
 * component 엘리먼트를 hide 시킨다.
 *
 * @private
 */
function _hide() {
    Util.prop(this.component, '@display', 'none');
}

/**
 *
 * 정의된 키코드를 막는다.
 *
 * @param e
 * @returns {boolean}
 * @private
 */
function _isPreventKeyCode() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    var keyCode = e.keyCode;

    return keyCode === 13 || keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40;
}

/**
 *
 * input cursor 를 이동시킨다.
 *
 * @private
 */
function _moveInputCursor() {

    var root = this.opts.elem;

    window.setTimeout(function () {

        // 커서의 위치를 이동시키기위해, start, end 위치를 동일하게 전달한다.
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
        root.setSelectionRange(root.value.length, root.value.length);
    });
}

/**
 *
 * 리스트 엘리먼트를 위로 이동시킨다.
 *
 * @private
 */
function _up() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    var root = this.opts.elem;

    if (Type.isEmpty(root.value)) return;

    _show.call(this);

    var searchedText = this.searchedText;

    var lastElem = _getLastListElement.call(this, 0);
    var activedItem = this.activedItem;

    var prevElem = Type.isNull(activedItem) ? lastElem : Util.prev(activedItem);

    if (!Type.isNull(activedItem)) {
        _addBlurClassName(activedItem);
    }

    if (prevElem) {

        var text = _getElemText(prevElem);

        _addFocusClassName(prevElem);
        Util.prop(root, 'value', text);

        //Util.sel('a', prevElem).focus();

        this.activedItem = prevElem;
    } else {

        Util.prop(root, 'value', searchedText);
        this.activedItem = null;
    }

    _moveInputCursor.call(this);
}

/**
 *
 * 리스트 엘리먼트를 아래로 이동시킨다.
 *
 * @private
 */
function _down() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    var root = this.opts.elem;

    if (Type.isEmpty(root.value)) return;

    _show.call(this);

    var firstElem = _getFirstListElement.call(this);
    var activedItem = this.activedItem;

    var nextElem = Type.isNull(activedItem) ? firstElem : Util.next(activedItem);

    var searchedText = this.searchedText;

    if (!Type.isNull(activedItem)) {
        _addBlurClassName(activedItem);
    }

    if (nextElem) {

        var text = _getElemText(nextElem);

        _addFocusClassName(nextElem);
        Util.prop(root, 'value', text);

        //Util.sel('a', nextElem).focus();

        this.activedItem = nextElem;
    } else {

        Util.prop(root, 'value', searchedText);
        this.activedItem = null;
    }

    _moveInputCursor.call(this);
}

/**
 *
 * 시작 리스트 엘리먼트를 반환한다.
 *
 * @returns {*}
 * @private
 */
function _getFirstListElement() {

    return Util.sels('li', this.component)[0];
}

/**
 *
 * 마지막 리스트 엘리먼트를 반환한다.
 *
 * @returns {*}
 * @private
 */
function _getLastListElement() {

    var elems = Util.sels('li', this.component);

    return elems[elems.length - 1];
}
/**
 *
 * 검색된 리스트를 삭제한다.
 *
 * @param ul
 */
function _clearSearchedList() {
    var ul = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    Util.prop(ul, 'innerHTML', '');
}

/**
 *
 * 바인딩할 데이터를 반환한다.
 *
 * @returns {Promise}
 */
function _getSearchData() {

    var data = this.opts.data;

    return new _promise2.default(function (resolve, reject) {

        if (Type.isPlainObject(data)) {

            var url = data.url;
            var method = data.method || 'get';

            axios({
                url: url,
                method: method,
                data: data
            }).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        } else {
            resolve({ data: data });
        }
    });
}

/**
 *
 * 리스트 엘리먼트 집합을 반환한다.
 *
 * @param val
 * @param data
 * @returns {Array}
 * @private
 */
function _createSearchList() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


    var ret = [];

    data.forEach(function (v) {

        var searchText = Ganada.search(v, val);

        if (searchText) {

            var ptn = new RegExp(searchText);

            v = v.replace(ptn, function (match) {

                return '<b>' + match + '</b>';
            });

            ret.push('<li><a href="#" tabindex="0" onclick="return false">' + v + '</a></li>');
        }
    });

    return ret;
}

/**
 *
 * 전달받은 엘리먼트에 blur 클래스를 할당한다.
 *
 * @param elem
 * @private
 */
function _addBlurClassName() {
    var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    Util.prop(elem, 'className', 'blur');
}

/**
 *
  * 전달받은 엘리먼트에 focus 클래스를 할당한다.
 *
 * @param elem
 * @private
 */
function _addFocusClassName() {
    var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    Util.prop(elem, 'className', 'focus');
}

/**
 *
 * 검색 리스트 닫기 유/무를 반환한다.
 *
 * @param elem
 * @returns {boolean}
 * @private
 */
function _isClose() {
    var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


    var className = '.' + COMPONENT_CLASS_NAME;

    // 전달받은 엘리먼트가 input 엘리먼트가 아니거나, searchList 엘리먼트가 아닌 경우 true 를 반환한다.
    return Util.next(elem) !== Util.sel(className) && !Util.parents(elem, className).length;
}

/**
 *
 * 전달받은 엘리먼트의 innerText 를 반환한다.
 *
 * @param elem
 * @returns {*}
 * @private
 */
function _getElemText() {
    var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    return Util.prop(elem, 'innerText');
}

module.exports = Suggest;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(29);
__webpack_require__(70);
__webpack_require__(74);
__webpack_require__(82);
__webpack_require__(83);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 57 */
/***/ (function(module, exports) {



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var defined = __webpack_require__(16);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(18)(function () {
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(63);
var descriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(64);
var enumBugKeys = __webpack_require__(34);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(19)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(35).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(31);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(21);
var arrayIndexOf = __webpack_require__(67)(false);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(14);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21);
var toLength = __webpack_require__(22);
var toAbsoluteIndex = __webpack_require__(68);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(25);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
var global = __webpack_require__(0);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(11);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(72);
var step = __webpack_require__(73);
var Iterators = __webpack_require__(11);
var toIObject = __webpack_require__(21);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(30)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var global = __webpack_require__(0);
var ctx = __webpack_require__(9);
var classof = __webpack_require__(36);
var $export = __webpack_require__(4);
var isObject = __webpack_require__(10);
var aFunction = __webpack_require__(12);
var anInstance = __webpack_require__(75);
var forOf = __webpack_require__(76);
var speciesConstructor = __webpack_require__(40);
var task = __webpack_require__(41).set;
var microtask = __webpack_require__(78)();
var newPromiseCapabilityModule = __webpack_require__(26);
var perform = __webpack_require__(42);
var userAgent = __webpack_require__(79);
var promiseResolve = __webpack_require__(43);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
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
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
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
  Internal.prototype = __webpack_require__(80)($Promise.prototype, {
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
__webpack_require__(24)($Promise, PROMISE);
__webpack_require__(81)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(44)(function (iter) {
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
/* 75 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var call = __webpack_require__(37);
var isArrayIter = __webpack_require__(38);
var anObject = __webpack_require__(5);
var toLength = __webpack_require__(22);
var getIterFn = __webpack_require__(39);
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
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(41).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(14)(process) == 'process';

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
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(6);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(4);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(40);
var promiseResolve = __webpack_require__(43);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(26);
var perform = __webpack_require__(42);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(86);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(90);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(94);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Type = __webpack_require__(45);

// 엘리먼트 타입
var ELEMENT_NODE = Node.ELEMENT_NODE;
/**
*
*/
var Util = {

    /**
     * querySelector 래퍼 함수.
     */
    sel: function sel() {
        var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

        return el.querySelector(selector);
    },

    /**
     * querySelectorAll 래퍼 함수
     */
    sels: function sels() {
        var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

        return el.querySelectorAll(selector);
    },

    /**
     * 엘리먼트를 생성한다.
     */
    el: function el() {
        var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


        var el = document.createElement(tagName);

        this.prop(el, prop);

        return el;
    },

    /**
     * 엘리먼트 어트리뷰트를 할당한다.
     */
    attr: function attr() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var _attr2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


        var ret = null;

        if (Type.isPlainObject(_attr2)) {

            this.map(_attr2, function (v, k) {
                _attr(target, k, v);
            });

            ret = target;
        } else if (Type.isString(_attr2) && Type.isNull(val)) {

            if (_isStyleMarked(_attr2)) ret = target.style[_attr2.substr(1)];else ret = target.getAttribute(_attr2);
        } else if (Type.isString(_attr2)) {
            ret = _attr(target, _attr2, val);
        }

        return ret;

        /**
         *
         * 어튜리브트값을 설정한다.
         *
         * @param target
         * @param k
         * @param v
         * @private
         */
        function _attr(target, k, v) {

            if (_isStyleMarked(k)) target.style[k.substr(1)] = v;else target.setAttribute(k, v);

            return target;
        }
    },

    /**
     * 엘리먼트 프로퍼티를 할당한다.
     */
    prop: function prop() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var _prop2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


        var ret = null;

        if (Type.isPlainObject(_prop2)) {

            this.map(_prop2, function (v, k) {
                _prop(target, k, v);
            });

            ret = target;
        } else if (Type.isString(_prop2) && Type.isNull(val)) {

            if (_isStyleMarked(_prop2)) {
                // 계산되어 정의된 스타일 정보를 가져온다.
                ret = window.getComputedStyle(target).getPropertyValue(_prop2.substr(1));
            } else {
                ret = target[_prop2];
            }
        } else if (Type.isString(_prop2)) {
            ret = _prop(target, _prop2, val);
        }

        return ret;

        /**
         *
         * 프로퍼티값을 설정한다.
         *
         * @param target
         * @param k
         * @param v
         * @private
         */
        function _prop(target, k, v) {

            if (_isStyleMarked(k)) {
                target.style[k.substr(1)] = v;
            } else {

                // 엘리먼트 속성이 함수인 경우, 네이티브 속성을 원형 그대로 사용한다.(꼭 이벤트만이 아니다)
                if (Type.isFunction(target[k])) target[k].apply(target, (0, _toConsumableArray3.default)(Type.isArray(v) ? v : [v]));else target[k] = v;
            }

            return target;
        }
    },

    /**
     * 부모 엘리먼트의 마지막 자식으로 새로운 엘리먼트를 추가한다.
     */
    append: function append() {
        var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


        el = Type.isArray(el) ? el : [el];

        el.forEach(function (v) {
            parent.appendChild(v);
        });

        return this;
    },

    /**
     * 부모 엘리먼트의 첫번째 자식으로 새로운 엘리먼트를 추가한다.
     */
    prepend: function prepend() {
        var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


        el = Type.isArray(el) ? el : [el];

        // 전달받은 배열 요소를 리버스시킨후, 할당시킨다(사용자에게 전달받은 요소 순서를 그대로 할당시키기위함이다)
        el.reverse().forEach(function (v) {
            parent.insertBefore(v, parent.firstChild);
        });

        return this;
    },

    /**
     * target 엘리먼트의 이전 형제로 새로운 엘리먼트를 추가한다.
     */
    before: function before() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


        el = Type.isArray(el) ? el : [el];

        el.reverse().forEach(function (v) {
            target.parentNode.insertBefore(v, target);
        });

        return this;
    },

    /**
     * target 엘리먼트의 다음 형제로 새로운 엘리먼트를 추가한다.
     */
    after: function after() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


        el = Type.isArray(el) ? el : [el];

        // 전달받은 target 엘리먼트의, 다음 형제 엘리먼트를 반환한다.
        var next = this.next(target);

        // 반환된 형제 엘리먼트가 있을 경우
        el = next ? el.reverse() : el;

        el.forEach(function (v) {

            // 다음 형제 엘리먼트가 있을 경우, 해당 형제 엘리먼트 이전 위치(target 엘리먼트 다음 위치)에 새로운 엘리먼트를 할당한다.
            if (next) target.parentNode.insertBefore(v, next);else target.parentNode.appendChild(v);
        });

        return this;
    },

    /**
     * 전달받은 엘리먼트의, 절대 좌표를 반환한다.
     */
    offset: function offset() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


        // getBoundingClientRect 메서드를 통해, 가져오는 좌표값의 기준은 부모 엘리먼트가 아닌, 절대 좌표가된다.
        return target.getBoundingClientRect();
    },

    /**
     * 전달받은 엘리먼트의 (부모 엘리먼트를 기준으로한)상대 좌표를 반환한다.
     */
    position: function position() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


        var left = 0;
        var top = 0;

        var x = 0;
        var y = 0;

        var parentNode = target.parentNode;

        // 부모 엘리먼트의 position 값이, `static` 이 아닌경우(absolute, relative, fixed 등), 자식 엘리먼트의 좌표는 그 부모 엘리먼트를 기준으로 정해지게된다.
        // 즉 자식 엘리먼트의 offsetTop, offsetLeft 값은 부모 엘리먼트의 상대적 위치를 기준으로 반환된다.

        // 즉 this.offset(target).top - this.offset(parentNode).top <-- 이 공식과 같다.
        if (parentNode === target.offsetParent) {
            x = left = target.offsetLeft;
            y = top = target.offsetTop;
        } else {

            var targetLeft = this.offset(target).left;
            var parentLeft = this.offset(parentNode).left;

            var targetTop = this.offset(target).top;
            var parentTop = this.offset(parentNode).top;

            if (targetLeft > parentLeft) {
                x = left = this.offset(target).left - this.offset(parentNode).left;
            }

            if (targetTop > parentTop) {
                y = top = this.offset(target).top - this.offset(parentNode).top;
            }
        }

        var width = this.outerWidth(target);
        var height = this.outerHeight(target);

        var right = left + width;
        var bottom = top + height;

        return {
            x: x,
            y: y,
            right: right,
            bottom: bottom,
            width: width,
            height: height,
            top: top,
            left: left
        };
    },

    /**
     * target 엘리먼트의 가로 사이즈를 반환한다(padding, border, margin 사이즈 제외)
     */
    width: function width() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


        var width = parseFloat(this.prop(target, '@width')) || 0;
        var padding = parseFloat(this.prop(target, '@padding-left')) * 2;
        var border = parseFloat(this.prop(target, '@border-width')) * 2;

        return width - (padding + border);
    },

    /**
     * target 엘리먼트의 가로 사이즈를 반환한다(padding, margin 사이즈 제외)
     */
    innerWidth: function innerWidth() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


        var width = parseFloat(this.prop(target, '@width')) || 0;
        var border = parseFloat(this.prop(target, '@border-width')) * 2;

        return width - border;
    },

    /**
     * target 엘리먼트의 가로 사이즈를 반환한다(margin 사이즈 제외)
     * 만약 두 번째 인자값이 true 일 경우, 적용된 margin 값을 포함한다.
     */
    outerWidth: function outerWidth() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var isMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


        var width = parseFloat(this.prop(target, '@width')) || 0;
        var margin = parseFloat(this.prop(target, '@margin-top')) * 2;

        var ret = width;

        if (isMargin) ret += margin;

        return ret;
    },

    /**
     * target 엘리먼트의 가로 사이즈를 반환한다(padding, border, margin 사이즈 제외)
     */
    height: function height() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


        var height = parseFloat(this.prop(target, '@height')) || 0;
        var padding = parseFloat(this.prop(target, '@padding-top')) * 2;
        var border = parseFloat(this.prop(target, '@border-width')) * 2;

        return height - (padding + border);
    },

    /**
     * target 엘리먼트의 가로 사이즈를 반환한다(padding, margin 사이즈 제외)
     */
    innerHeight: function innerHeight() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


        var height = parseFloat(this.prop(target, '@height')) || 0;
        var border = parseFloat(this.prop(target, '@border-width')) * 2;

        return height - border;
    },

    /**
     * target 엘리먼트의 가로 사이즈를 반환한다(margin 사이즈 제외)
     * 만약 두 번째 인자값이 true 일 경우, 적용된 margin 값을 포함한다.
     */
    outerHeight: function outerHeight() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var isMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


        var height = parseFloat(this.prop(target, '@height')) || 0;
        var margin = parseFloat(this.prop(target, '@margin-top')) * 2;

        var ret = height;

        if (isMargin) ret += margin;

        return ret;
    },

    /**
     * target 엘리먼트의 다음 형제 엘리먼트를 반환한다.
     * https://developer.mozilla.org/ko/docs/Web/API/Node/nodeType
     */
    next: function next() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


        var next = target && target.nextSibling ? target.nextSibling : null;

        // <p>, <div> 와 같은 `엘리먼트 노드` 타입이 탐색될 경우, 해당 엘리먼트를 반환한다.
        while (next && next.nodeType !== ELEMENT_NODE) {
            next = next.nextSibling;
        }

        return next;
    },

    /**
     * target 엘리먼트의 이전 형제 엘리먼트를 반환한다.
     */
    prev: function prev() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


        var prev = target && target.previousSibling ? target.previousSibling : null;

        // <p>, <div> 와 같은 `엘리먼트 노드` 타입이 탐색될 경우, 해당 엘리먼트를 반환한다.
        while (prev && prev.nodeType !== ELEMENT_NODE) {
            prev = prev.previousSibling;
        }

        return prev;
    },

    /**
     * target 엘리먼트의 모든 부모 엘리먼트를 가져온다.
     */
    parents: function parents() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


        var ret = [];
        var parent = target;

        // selector 값이 일을 경우, 필터할 엘리먼트 목록을 가져온다.
        var all = selector ? this.nodeListToArray(this.sels(selector)) : [];

        while (parent) {

            parent = parent.parentNode;

            // <p>, <div> 와 같은 엘리먼트가 탐색될 경우, 해당 엘리먼트를 반환한다.
            if (parent && parent.nodeType === ELEMENT_NODE) {

                if (selector) all.indexOf(parent) > -1 && ret.push(parent);else ret.push(parent);
            }
        }

        return ret;
    },

    /**
     * target 엘리먼트의 부모 엘리먼트를 가져온다.
     */
    parent: function parent() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


        var ret = [];
        var parent = target;

        // selector 값이 일을 경우, 필터할 엘리먼트 목록을 가져온다.
        var all = selector ? this.nodeListToArray(this.sels(selector)) : [];

        while (parent) {

            parent = parent.parentNode;

            // <p>, <div> 와 같은 엘리먼트가 탐색될 경우, 해당 엘리먼트를 반환한다.
            if (parent && parent.nodeType === ELEMENT_NODE) {

                if (selector) all.indexOf(parent) > -1 && ret.push(parent);else ret.push(parent);

                break;
            }
        }

        return ret;
    },

    /**
     * target 엘리먼트의 모든 자식 엘리먼트를 반환한다.
     */
    children: function children() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


        var ret = [];

        var child = null;
        var children = target && target.childNodes ? this.nodeListToArray(target.childNodes) : [];

        var all = selector ? this.nodeListToArray(this.sels(selector)) : [];

        // 자식 엘리먼트가 존재할때까지
        while (child = children.shift()) {

            // <p>, <div> 와 같은 엘리먼트가 탐색될 경우, 해당 엘리먼트를 반환한다.
            if (child.nodeType === ELEMENT_NODE) {

                if (selector) all.indexOf(child) > -1 && ret.push(child);else ret.push(child);
            }

            var length = child.childNodes ? child.childNodes.length : 0;

            for (var i = 0; i < length; i++) {
                children.push(child.childNodes[i]);
            }
        }

        return ret;
    },

    /**
     * map 유틸함수.
     */
    map: function map() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};


        if (v.constructor === Object) {
            (0, _keys2.default)(v).map(function (k) {
                return callback(v[k], k);
            });
        } else if (Type.isArray(v)) {

            v.map(function (v, index, array) {
                return callback(v, index, array);
            });
        }
    },

    /**
     * nodeList 객체를 배열로 변환한다.
     */
    nodeListToArray: function nodeListToArray() {
        var nodeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


        var ret = [];

        nodeList.forEach(function (v) {
            ret.push(v);
        });

        return ret;
    },

    /**
     * object 객체를 배열 객체로 변환 후, 반환한다.
     */
    objectToArray: function objectToArray() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


        var ret = [];

        (0, _keys2.default)(v).map(function (k) {
            ret.push(v[k]);
        });

        return ret;
    },

    /**
     * 전달받은 두 값이 동일한지 유/무를 반환한다.
     */
    equal: function equal() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var val2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        return val === val2;
    }
};

/**
 * 전달받은 키스타일 속성인지 여부를 반환한다.
 *
 * @param k
 * @returns {string|boolean}
 * @private
 */
function _isStyleMarked() {
    var k = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    // k 문자열의 0번째 문자가 `@`인 경우(style 속성)
    return k && k[0] === '@';
}

module.exports = Util;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(25);
var $keys = __webpack_require__(31);

__webpack_require__(93)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(2);
var fails = __webpack_require__(18);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(95);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(97);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(9);
var $export = __webpack_require__(4);
var toObject = __webpack_require__(25);
var call = __webpack_require__(37);
var isArrayIter = __webpack_require__(38);
var toLength = __webpack_require__(22);
var createProperty = __webpack_require__(98);
var getIterFn = __webpack_require__(39);

$export($export.S + $export.F * !__webpack_require__(44)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(20);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by mohwa on 2018. 2. 14..
 */

var Ganada = null;

try{ Ganada = __webpack_require__(100); }
catch(e){ Ganada = __webpack_require__(101); }

module.exports = Ganada;
  


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Ganada"] = factory();
	else
		root["Ganada"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 한글 음절: https://ko.wikipedia.org/wiki/%ED%95%9C%EA%B8%80_%EC%9D%8C%EC%A0%88

// 초성
var CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
// 중성
var JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', ['ㅗ', 'ㅏ'], ['ㅗ', 'ㅐ'], ['ㅗ', 'ㅣ'], 'ㅛ', 'ㅜ', ['ㅜ', 'ㅓ'], ['ㅜ', 'ㅔ'], ['ㅜ', 'ㅣ'], 'ㅠ', 'ㅡ', ['ㅡ', 'ㅣ'], 'ㅣ'];
// 종성
var JONG = ['', 'ㄱ', 'ㄲ', ['ㄱ', 'ㅅ'], 'ㄴ', ['ㄴ', 'ㅈ'], ['ㄴ', 'ㅎ'], 'ㄷ', 'ㄹ', ['ㄹ', 'ㄱ'], ['ㄹ', 'ㅁ'], ['ㄹ', 'ㅂ'], ['ㄹ', 'ㅅ'], ['ㄹ', 'ㅌ'], ['ㄹ', 'ㅍ'], ['ㄹ', 'ㅎ'], 'ㅁ', 'ㅂ', ['ㅂ', 'ㅅ'], 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 초성 원본
var CHO_ATOM = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
// 중성 원본
var JUNG_ATOM = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
// 종성 원본
var JONG_ATOM = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 서로 다른 두 개의 자음으로 구성된 복합 자음
var COMPLEX_CONSONANTS = [['ㄱ', 'ㅅ', 'ㄳ'], ['ㄴ', 'ㅈ', 'ㄵ'], ['ㄴ', 'ㅎ', 'ㄶ'], ['ㄹ', 'ㄱ', 'ㄺ'], ['ㄹ', 'ㅁ', 'ㄻ'], ['ㄹ', 'ㅂ', 'ㄼ'], ['ㄹ', 'ㅅ', 'ㄽ'], ['ㄹ', 'ㅌ', 'ㄾ'], ['ㄹ', 'ㅍ', 'ㄿ'], ['ㄹ', 'ㅎ', 'ㅀ'], ['ㅂ', 'ㅅ', 'ㅄ']];

// 서로 다른 두 개의 모음으로 구성된 복합 모음
var COMPLEX_VOWELS = [['ㅗ', 'ㅏ', 'ㅘ'], ['ㅗ', 'ㅐ', 'ㅙ'], ['ㅗ', 'ㅣ', 'ㅚ'], ['ㅜ', 'ㅓ', 'ㅝ'], ['ㅜ', 'ㅔ', 'ㅞ'], ['ㅜ', 'ㅣ', 'ㅟ'], ['ㅡ', 'ㅣ', 'ㅢ']];

var BASE_HASH_CODE = '0xAC00'; // `가` 문자에 대한, 해시코드

/**
 * Ganada 객체
 */

var Ganada = {
    isComplete: _isComplete,
    isCho: _isCho,
    isJung: _isJung,
    isJong: _isJong,
    disassemble: _disassemble,
    assemble: _assemble,
    search: _search
};

/**
 *
 * 전달받은 문자(열)이 완성된 문자인지 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isComplete(v) {

    if (typeof v !== 'string') return false;

    var ret = true;

    var startCharCode = parseInt(BASE_HASH_CODE, 16);
    var endCharCode = parseInt('0xD7A3', 16);

    v = v.split('');

    var length = v.length;
    for (var i = 0; i < length; i++) {

        var char = v[i];

        var charCode = char.charCodeAt(0);

        if (!(charCode >= startCharCode && charCode <= endCharCode)) {
            ret = false;
            break;
        }
    }

    return ret;
}

/**
 *
 * 전달받은 문자(열)의 초성 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isCho(v) {

    if (typeof v !== 'string') return false;

    var ret = true;

    v = v.split('');

    var length = v.length;
    for (var i = 0; i < length; i++) {

        var char = v[i];

        if (CHO_ATOM.indexOf(char) === -1) {
            ret = false;
            break;
        }
    }

    return ret;
}

/**
 *
 * 전달받은 문자(열)의 중성 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isJung(v) {

    if (typeof v !== 'string') return false;

    var ret = true;

    v = v.split('');

    var length = v.length;
    for (var i = 0; i < length; i++) {

        var char = v[i];

        if (JUNG_ATOM.indexOf(char) === -1) {
            ret = false;
            break;
        }
    }

    return ret;
}

/**
 *
 * 전달받은 문자(열)의 종성 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isJong(v) {

    if (typeof v !== 'string') return false;

    var ret = true;

    v = v.split('');

    var length = v.length;
    for (var i = 0; i < length; i++) {

        var char = v[i];

        if (JONG_ATOM.indexOf(char) === -1) {
            ret = false;
            break;
        }
    }

    return ret;
}

/**
 * 첫번째 문자열이 분해된 배열 순서가, 두번째 문자열의 배열 순서를 포함한 문자(열)를 반환한다.
 *
 * @param v
 * @param searchText
 * @returns {string}
 * @private
 */
function _search() {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var searchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


    var ret = '';

    var _v = _disassemble(v);
    var _searchText = _disassemble(searchText);

    var ptn = new RegExp(_searchText, 'g');

    searchText = _v.match(ptn);

    if (searchText) ret = _assemble(searchText[0]);

    return ret;
}

/**
 *
 * 전달받은 문자(열)들을 자음/모음으로 분해시킨다.
 *
 * @param v
 * @private
 */
function _disassemble() {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


    var ret = '';

    v = v.split('');

    v.forEach(function (vv) {

        if (_isComplete(vv)) {

            var jamo = _JAMODisassemble(vv);

            var cho = CHO[jamo.choIndex];
            var jung = _getComposedChar(JUNG, jamo.jungIndex);
            var jong = _getComposedChar(JONG, jamo.jongIndex);

            ret += '' + cho + jung + jong;
        } else {
            ret += vv;
        }
    });

    return ret;

    /**
     * 합성된 문자(자음/자음, 모음/모음)를 분리시켜 반환한다.
     *
     * @param o
     * @param idx
     * @returns {string}
     * @private
     */
    function _getComposedChar() {
        var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;


        var ret = '';

        if (o[idx] && o[idx].constructor === Array) {
            ret = '' + o[idx][0] + o[idx][1];
        } else {
            ret = o[idx] || '';
        }

        return ret;
    }
}

/**
 *
 * 전달받은 자음/모음 문자들을 조립한다.
 *
 * @param v
 * @param step
 * @param ret
 * @returns {*}
 * @private
 */
function _assemble() {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var ret = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';


    v = typeof v === 'string' ? v.split('') : v;

    // 분리자
    var separator = '';
    // 분리자 텍스트
    var separatorText = '__ᴥᴥ__';
    // 자음/모음 구분 패턴
    var jamoPTN = /[^ㄱ-ㅎㅏ-ㅣ]/g;

    if (v.length) {

        // 첫번째 문자
        var char1 = v[0];
        // 두번째 문자
        var char2 = v[1];
        // 세번째 문자
        var char3 = v[2];

        // 초성 분리
        if (step === 1) {

            // 합성된 자음
            var complexConsonants = '';

            // 다음 두 번째/세 번째 문자가 각각, 초/중성이 아닐 경우(자음 + 모음 조합이 아닐경우)만, 두개의 자음을 합성시킨다.
            if (!(_isCho(char2) && _isJung(char3))) {
                complexConsonants = _getComplexConsonants(char1, char2);
            }

            // 두개의 자음이 합성된 경우(ㄳ, ㄵ 등)
            if (complexConsonants) {

                v.shift();
                v.shift();

                ret += complexConsonants;
            } else {
                v.shift();
                ret += char1;
            }

            // 기존 배열에서, 이전 문자들이 삭제된 이후의 첫번째 문자 요소.
            char1 = v[0];

            // 자음 뒤에, 바로 자음 문자가 온 경우(ㄱㅇ, ㄱㅎ 등)
            if (_isCho(char1)) {

                separator = separatorText;
                step = 1;
            }

            // 자음 뒤에 모음 문자가 온 경우
            if (_isJung(char1)) {

                // 추가된 이전 (첫번째)문자
                //let prevChar = _prevFirstChar(ret);

                // 추가된 이전 문자가 합성 자음일 경우(ㄳ, ㄵ 등)
                //if (complexConsonants){
                //    console.log('da');
                //    separator = separatorText;
                //}

                step = 2;
            }

            // 다음 문자가 한글이 자음/모음이 아닌 경우
            if (jamoPTN.test(char1)) {
                separator = separatorText;
                step = 4;
            }

            ret += separator;

            return _assemble(v, step, ret);
        }

        // 중성 분리
        if (step === 2) {

            // 합성된 모음
            var complexVowel = _getComplexVowels(char1, char2);

            if (complexVowel) {

                v.shift();
                v.shift();

                ret += complexVowel;
            } else {
                v.shift();
                ret += char1;
            }

            // 기존 배열에서, 이전 문자들이 삭제된 이후의 첫번째 문자 요소.
            char1 = v[0];
            // 기존 배열에서, 이전 문자들이 삭제된 이후의 두번째 문자 요소.
            char2 = v[1];

            if (_isCho(char1)) {

                // 다음 다음 문자가 초성인 경우(ㄱ ㅅ)
                if (_isCho(char2)) {
                    step = 1;
                }

                // 다음 다음 문자가 모음인 경우(ㄱ ㅏ)
                if (_isJung(char2)) {
                    separator = separatorText;
                    step = 1;
                }
            }

            // 다음 문자가 모음인 경우(모음이 두번 연속 나온 경우)
            if (_isJung(char1)) {

                separator = separatorText;
                step = 2;
            }

            // 다음 문자가 한글이 자음/모음이 아닌 경우
            if (jamoPTN.test(char1)) {
                separator = separatorText;
                step = 4;
            }

            ret += separator;

            return _assemble(v, step, ret);
        }

        // 종성 분리
        if (step === 3) {

            // 합성된 자음
            var _complexConsonants = _getComplexConsonants(char1, char2);

            if (_complexConsonants) {

                v.shift();
                v.shift();

                ret += _complexConsonants;
            } else {

                v.shift();
                ret += char1;
            }

            // 기존 분리자
            separator = separatorText;

            // 기존 배열에서, 이전 문자들이 삭제된 이후의 첫번째 문자 요소.
            char1 = v[0];

            // 다음 문자가 자음인 경우
            if (_isCho(char1)) {
                step = 1;
            }

            // 다음 문자가 모음인 경우
            if (_isJung(char1)) {
                step = 2;
            }

            // 다음 문자가 한글이 자음/모음이 아닌 경우
            if (jamoPTN.test(char1)) {
                step = 4;
            }

            ret += separator;

            return _assemble(v, step, ret);
        }

        // 그외에 모든 문자(숫자, 영어, 특수문자 등)
        if (step === 4) {

            v.shift();
            ret += char1;

            // 분리자
            separator = separatorText;

            char1 = v[0];

            // 다음 문자가 자음인 경우
            if (_isCho(char1)) {
                step = 1;
            }

            // 다음 문자가 모음인 경우
            if (_isJung(char1)) {
                step = 2;
            }

            if (jamoPTN.test(char1)) {
                step = 4;
            }

            ret += separator;
            return _assemble(v, step, ret);
        }
    }

    return _join(ret);

    /**
     *
     * (그룹별로)정리된 모든 문자를 최종 조립한다.
     *
     * @param v
     * @returns {string}
     * @private
     */
    function _join() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


        var ret = [];

        v.split(separatorText).forEach(function (vv) {

            var cho = vv[0];
            var jung = vv[1];
            var jong = vv[2];

            // 초/중/종성이 모두 존재하는 경우
            if (cho && jung && jong) {
                ret.push(_JAMOAssemble(cho, jung, jong));
            } else if (cho && jung) {
                // 초/중성만 존재하는 경우
                ret.push(_JAMOAssemble(cho, jung));
            } else {
                // 조합 되지않은 모든 문자인 경우
                ret.push(cho);
            }
        });

        return ret.join('');
    }

    ///**
    // *
    // * @param v
    // * @returns {*}
    // * @private
    // */
    //function _prevFirstChar(v = ''){
    //
    //    let ret;
    //
    //    v = v.split('');
    //
    //    let length = v.length;
    //
    //    while (length--){
    //
    //        if (v[length] === separatorText) break;
    //
    //        ret = v[length];
    //    }
    //
    //    return ret;
    //}


    /**
     *
     * 합성된 자음을 반환한다.
     *
     * @param char1
     * @param char2
     * @returns {string}
     * @private
     */
    function _getComplexConsonants() {
        var char1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var char2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


        var ret = '';

        COMPLEX_CONSONANTS.forEach(function (v) {

            if (v[0] === char1 && v[1] === char2) {
                ret = v[2];
            }
        });

        return ret;
    }

    /**
     *
     * 합성된 모음을 반환한다.
     *
     * @param char1
     * @param char2
     * @returns {string}
     * @private
     */
    function _getComplexVowels() {
        var char1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var char2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


        var ret = '';

        COMPLEX_VOWELS.forEach(function (v) {

            if (v[0] === char1 && v[1] === char2) {
                ret = v[2];
            }
        });

        return ret;
    }
}

/**
 *
 * 초/중/종 문자를 조합시킨다.
 *
 * @param cho
 * @param jung
 * @param jong
 * @returns {string}
 * @private
 */
function _JAMOAssemble() {
    var cho = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var jung = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var jong = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';


    var ret = '';

    var choIndex = CHO_ATOM.indexOf(cho);
    var jungIndex = JUNG_ATOM.indexOf(jung);
    var jongIndex = JONG_ATOM.indexOf(jong);

    var charCode = void 0;

    if (choIndex > -1 && jungIndex > -1 && jongIndex > -1) {
        // 초/중/종 조합
        charCode = Number(BASE_HASH_CODE) + (choIndex * 21 + jungIndex) * 28 + jongIndex;
    }

    if (charCode) {
        // 16진수 코드값을 문자로 변환한다.
        ret = String.fromCharCode(charCode);
    }

    return ret;
}

/**
 *
 * 문자를 초/중/종 문자로 분해한다.
 *
 * @param v
 * @returns {{cho: (string|string), jung: (string|string), jong: (string|string), choIndex: Number, jungIndex: Number, jongIndex: Number}}
 * @constructor
 */
function _JAMODisassemble() {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


    /**
        초성 중성 종성 분리 하기
         유니코드 한글은 0xAC00 으로부터
        초성 19개, 중성 21개, 종성 28개로 이루어지고, 이들을 조합한 11,172개의 문자를 갖는다.
         한글코드의 값(가) = ((초성(0) * 21) + 중성(0)) * 28 + 종성(0) + 0xAC00(0xAC00은 'ㄱ'의 코드값)
         따라서 다음과 같은 계산 식이 구해진다. 유니코드 한글 문자 코드 값이 X일 때,
         초성 = ((X - 0xAC00) / 28) / 21
        중성 = ((X - 0xAC00) / 28) % 21
        종성 = (X - 0xAC00) % 28
         이 때 초성, 중성, 종성의 값은 각 소리 글자의 코드값이 아니라
        이들이 각각 몇 번째 문자인가를 나타내기 때문에 다음과 같이 다시 처리한다.
         초성문자코드 = 초성 + 0x1100 //('ㄱ') => 시작 메모리 주소값이, 위에서 구한 자리값을 더하면, 구하고자하는 메모리 주소값이 된다.
        중성문자코드 = 중성 + 0x1161 // ('ㅏ')
        종성문자코드 = 종성 + 0x11A8 - 1 // (종성이 없는 경우가 있으므로 1을 뺌)
    **/

    // `0xAC00` 16진수값은 유니코드 `가` 값이 가지는, 메모리 주소이다.(`0xAC01(각)`, `0xAC01(갂)`...)
    v = v.charCodeAt(0) - parseInt(BASE_HASH_CODE, 16);

    // 초성 요소의 자리 수
    var choIndex = parseInt(v / (21 * 28), 10);

    // 중성 요소의 자리 수
    var jungIndex = parseInt(v / 28 % 21, 10);

    // 종성 요소의 자리 수
    var jongIndex = parseInt(v % 28, 10);

    // `0x1100` 16진수값은 초성 `ㄱ` 이 가지는, 메모리 주소이다.(0x1100(ㄱ), 0x1101(ㄲ), 0x1102(ㄴ)...)
    var cho = String.fromCharCode(choIndex + parseInt('0x1100', 16));
    // `0x1161` 16진수값은 중성 `ㅏ` 가지는, 메모리 주소이다.(0x1161(ㅏ), 0x1162(ㅐ), 0x1162(ㅑ)...)
    var jung = String.fromCharCode(jungIndex + parseInt('0x1161', 16));
    // `0x11A8` 16진수값은 종성 `ㄱ` 이 가지는, 메모리 주소이다.(0x11A8(ㄱ), 0x11A9(ㄲ), 0x11AA(ㄳ)...)
    var jong = String.fromCharCode(jongIndex + parseInt('0x11A8', 16) - 1);

    return {
        cho: cho || '',
        jung: jung || '',
        jong: jong || '',
        choIndex: choIndex,
        jungIndex: jungIndex,
        jongIndex: jongIndex
    };
}

module.exports = Ganada;

/***/ })
/******/ ]);
});

/***/ }),
/* 101 */
/***/ (function(module, exports) {


// 한글 음절: https://ko.wikipedia.org/wiki/%ED%95%9C%EA%B8%80_%EC%9D%8C%EC%A0%88

// 초성
const CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
// 중성
const JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', ['ㅗ', 'ㅏ'], ['ㅗ', 'ㅐ'], ['ㅗ', 'ㅣ'], 'ㅛ', 'ㅜ', ['ㅜ', 'ㅓ'], ['ㅜ', 'ㅔ'], ['ㅜ', 'ㅣ'], 'ㅠ', 'ㅡ', ['ㅡ', 'ㅣ'], 'ㅣ'];
// 종성
const JONG = ['', 'ㄱ', 'ㄲ', ['ㄱ', 'ㅅ'], 'ㄴ', ['ㄴ', 'ㅈ'], ['ㄴ', 'ㅎ'], 'ㄷ', 'ㄹ', ['ㄹ', 'ㄱ'], ['ㄹ', 'ㅁ'], ['ㄹ', 'ㅂ'], ['ㄹ', 'ㅅ'], ['ㄹ', 'ㅌ'], ['ㄹ', 'ㅍ'], ['ㄹ', 'ㅎ'], 'ㅁ', 'ㅂ', ['ㅂ', 'ㅅ'], 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 초성 원본
const CHO_ATOM = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
// 중성 원본
const JUNG_ATOM = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
// 종성 원본
const JONG_ATOM = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 서로 다른 두 개의 자음으로 구성된 복합 자음
const COMPLEX_CONSONANTS = [
    ['ㄱ','ㅅ','ㄳ'],
    ['ㄴ','ㅈ','ㄵ'],
    ['ㄴ','ㅎ','ㄶ'],
    ['ㄹ','ㄱ','ㄺ'],
    ['ㄹ','ㅁ','ㄻ'],
    ['ㄹ','ㅂ','ㄼ'],
    ['ㄹ','ㅅ','ㄽ'],
    ['ㄹ','ㅌ','ㄾ'],
    ['ㄹ','ㅍ','ㄿ'],
    ['ㄹ','ㅎ','ㅀ'],
    ['ㅂ','ㅅ','ㅄ']
];

// 서로 다른 두 개의 모음으로 구성된 복합 모음
const COMPLEX_VOWELS = [
    ['ㅗ','ㅏ','ㅘ'],
    ['ㅗ','ㅐ','ㅙ'],
    ['ㅗ','ㅣ','ㅚ'],
    ['ㅜ','ㅓ','ㅝ'],
    ['ㅜ','ㅔ','ㅞ'],
    ['ㅜ','ㅣ','ㅟ'],
    ['ㅡ','ㅣ','ㅢ']
];

const BASE_HASH_CODE = '0xAC00'; // `가` 문자에 대한, 해시코드

/**
 * Ganada 객체
 */

const Ganada = {
    isComplete: _isComplete,
    isCho: _isCho,
    isJung: _isJung,
    isJong: _isJong,
    disassemble: _disassemble,
    assemble: _assemble,
    search: _search
};

/**
 *
 * 전달받은 문자(열)이 완성된 문자인지 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isComplete(v){

    if (typeof v !== 'string') return false;

    let ret = true;

    const startCharCode = parseInt(BASE_HASH_CODE, 16);
    const endCharCode = parseInt('0xD7A3', 16);

    v = v.split('');

    const length = v.length;
    for (let i = 0; i < length; i++){

        const char = v[i];

        const charCode = char.charCodeAt(0);

        if (!(charCode >= startCharCode && charCode <= endCharCode)){
            ret = false;
            break;
        }
    }

    return ret;
}


/**
 *
 * 전달받은 문자(열)의 초성 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isCho(v){

    if (typeof v !== 'string') return false;

    let ret = true;

    v = v.split('');

    const length = v.length;
    for (let i = 0; i < length; i++){

        const char = v[i];

        if (CHO_ATOM.indexOf(char) === -1){
            ret = false;
            break;
        }
    }

    return ret;
}

/**
 *
 * 전달받은 문자(열)의 중성 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isJung(v){

    if (typeof v !== 'string') return false;

    let ret = true;

    v = v.split('');

    const length = v.length;
    for (let i = 0; i < length; i++){

        const char = v[i];

        if (JUNG_ATOM.indexOf(char) === -1){
            ret = false;
            break;
        }
    }

    return ret;
}

/**
 *
 * 전달받은 문자(열)의 종성 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isJong(v){

    if (typeof v !== 'string') return false;

    let ret = true;

    v = v.split('');

    const length = v.length;
    for (let i = 0; i < length; i++){

        const char = v[i];

        if (JONG_ATOM.indexOf(char) === -1){
            ret = false;
            break;
        }
    }

    return ret;
}

/**
 * 첫번째 문자열이 분해된 배열 순서가, 두번째 문자열의 배열 순서를 포함한 문자(열)를 반환한다.
 *
 * @param v
 * @param searchText
 * @returns {string}
 * @private
 */
function _search(v = '', searchText = ''){

    let ret = '';

    const _v = _disassemble(v);
    const _searchText = _disassemble(searchText);

    const ptn = new RegExp(_searchText, 'g');

    searchText = _v.match(ptn);

    if (searchText) ret = _assemble(searchText[0]);

    return ret;
}


/**
 *
 * 전달받은 문자(열)들을 자음/모음으로 분해시킨다.
 *
 * @param v
 * @private
 */
function _disassemble(v = ''){

    let ret = '';

    v = v.split('');

    v.forEach(vv => {

        if (_isComplete(vv)){

            const jamo = _JAMODisassemble(vv);

            const cho = CHO[jamo.choIndex];
            const jung = _getComposedChar(JUNG, jamo.jungIndex);
            const jong = _getComposedChar(JONG, jamo.jongIndex);

            ret += `${cho}${jung}${jong}`;
        }
        else{
            ret += vv;
        }
    });

    return ret;


    /**
     * 합성된 문자(자음/자음, 모음/모음)를 분리시켜 반환한다.
     *
     * @param o
     * @param idx
     * @returns {string}
     * @private
     */
    function _getComposedChar(o = [], idx = -1){

        let ret = '';

        if (o[idx] && o[idx].constructor === Array){
            ret = `${o[idx][0]}${o[idx][1]}`;
        }
        else{
            ret = o[idx] || '';
        }

        return ret;
    }
}

/**
 *
 * 전달받은 자음/모음 문자들을 조립한다.
 *
 * @param v
 * @param step
 * @param ret
 * @returns {*}
 * @private
 */
function _assemble(v = '', step = 1, ret = ''){

    v = typeof v === 'string' ? v.split('') : v;

    // 분리자
    let separator = '';
    // 분리자 텍스트
    const separatorText = '__ᴥᴥ__';
    // 자음/모음 구분 패턴
    const jamoPTN = /[^ㄱ-ㅎㅏ-ㅣ]/g;

    if (v.length){

        // 첫번째 문자
        let char1 = v[0];
        // 두번째 문자
        let char2 = v[1];
        // 세번째 문자
        let char3 = v[2];

        // 초성 분리
        if (step === 1){

            // 합성된 자음
            let complexConsonants = '';

            // 다음 두 번째/세 번째 문자가 각각, 초/중성이 아닐 경우(자음 + 모음 조합이 아닐경우)만, 두개의 자음을 합성시킨다.
            if (!(_isCho(char2) && _isJung(char3))){
                complexConsonants = _getComplexConsonants(char1, char2);
            }

            // 두개의 자음이 합성된 경우(ㄳ, ㄵ 등)
            if (complexConsonants){

                v.shift();
                v.shift();

                ret += complexConsonants;
            }
            else{
                v.shift();
                ret += char1;
            }

            // 기존 배열에서, 이전 문자들이 삭제된 이후의 첫번째 문자 요소.
            char1 = v[0];

            // 자음 뒤에, 바로 자음 문자가 온 경우(ㄱㅇ, ㄱㅎ 등)
            if (_isCho(char1)){

                separator = separatorText;
                step = 1;
            }

            // 자음 뒤에 모음 문자가 온 경우
            if (_isJung(char1)){

                // 추가된 이전 (첫번째)문자
                //let prevChar = _prevFirstChar(ret);

                // 추가된 이전 문자가 합성 자음일 경우(ㄳ, ㄵ 등)
                //if (complexConsonants){
                //    console.log('da');
                //    separator = separatorText;
                //}

                step = 2;
            }

            // 다음 문자가 한글이 자음/모음이 아닌 경우
            if (jamoPTN.test(char1)){
                separator = separatorText;
                step = 4;
            }

            ret += separator;

            return _assemble(v, step, ret);
        }

        // 중성 분리
        if (step === 2){

            // 합성된 모음
            const complexVowel = _getComplexVowels(char1, char2);

            if (complexVowel){

                v.shift();
                v.shift();

                ret += complexVowel;
            }
            else{
                v.shift();
                ret += char1;
            }

            // 기존 배열에서, 이전 문자들이 삭제된 이후의 첫번째 문자 요소.
            char1 = v[0];
            // 기존 배열에서, 이전 문자들이 삭제된 이후의 두번째 문자 요소.
            char2 = v[1];

            if (_isCho(char1)){

                // 다음 다음 문자가 초성인 경우(ㄱ ㅅ)
                if (_isCho(char2)){
                    step = 1;
                }

                // 다음 다음 문자가 모음인 경우(ㄱ ㅏ)
                if (_isJung(char2)){
                    separator = separatorText;
                    step = 1;
                }
            }

            // 다음 문자가 모음인 경우(모음이 두번 연속 나온 경우)
            if (_isJung(char1)){

                separator = separatorText;
                step = 2;
            }

            // 다음 문자가 한글이 자음/모음이 아닌 경우
            if (jamoPTN.test(char1)){
                separator = separatorText;
                step = 4;
            }

            ret += separator;

            return _assemble(v, step, ret);
        }

        // 종성 분리
        if (step === 3){

            // 합성된 자음
            const complexConsonants = _getComplexConsonants(char1, char2);

            if (complexConsonants){

                v.shift();
                v.shift();

                ret += complexConsonants;
            }
            else{

                v.shift();
                ret += char1;
            }

            // 기존 분리자
            separator = separatorText;

            // 기존 배열에서, 이전 문자들이 삭제된 이후의 첫번째 문자 요소.
            char1 = v[0];

            // 다음 문자가 자음인 경우
            if (_isCho(char1)){
                step = 1;
            }

            // 다음 문자가 모음인 경우
            if (_isJung(char1)){
                step = 2;
            }

            // 다음 문자가 한글이 자음/모음이 아닌 경우
            if (jamoPTN.test(char1)){
                step = 4;
            }

            ret += separator;

            return _assemble(v, step, ret);
        }

        // 그외에 모든 문자(숫자, 영어, 특수문자 등)
        if (step === 4){

            v.shift();
            ret += char1;

            // 분리자
            separator = separatorText;

            char1 = v[0];

            // 다음 문자가 자음인 경우
            if (_isCho(char1)){
                step = 1;
            }

            // 다음 문자가 모음인 경우
            if (_isJung(char1)){
                step = 2;
            }

            if (jamoPTN.test(char1)){
                step = 4;
            }

            ret += separator;
            return _assemble(v, step, ret);
        }
    }

    return _join(ret);


    /**
     *
     * (그룹별로)정리된 모든 문자를 최종 조립한다.
     *
     * @param v
     * @returns {string}
     * @private
     */
    function _join(v = ''){

        const ret = [];

        v.split(separatorText).forEach(vv => {

            const cho = vv[0];
            const jung = vv[1];
            const jong = vv[2];

            // 초/중/종성이 모두 존재하는 경우
            if (cho && jung && jong){
                ret.push(_JAMOAssemble(cho, jung, jong));
            }
            else if (cho && jung){
                // 초/중성만 존재하는 경우
                ret.push(_JAMOAssemble(cho, jung));
            }
            else{
                // 조합 되지않은 모든 문자인 경우
                ret.push(cho);
            }
        });

        return ret.join('');
    }

    ///**
    // *
    // * @param v
    // * @returns {*}
    // * @private
    // */
    //function _prevFirstChar(v = ''){
    //
    //    let ret;
    //
    //    v = v.split('');
    //
    //    let length = v.length;
    //
    //    while (length--){
    //
    //        if (v[length] === separatorText) break;
    //
    //        ret = v[length];
    //    }
    //
    //    return ret;
    //}


    /**
     *
     * 합성된 자음을 반환한다.
     *
     * @param char1
     * @param char2
     * @returns {string}
     * @private
     */
    function _getComplexConsonants(char1 = '', char2 = ''){

        let ret = '';

        COMPLEX_CONSONANTS.forEach(v => {

            if (v[0] === char1 && v[1] === char2){
                ret = v[2];
            }
        });

        return ret;
    }


    /**
     *
     * 합성된 모음을 반환한다.
     *
     * @param char1
     * @param char2
     * @returns {string}
     * @private
     */
    function _getComplexVowels(char1 = '', char2 = ''){

        let ret = '';

        COMPLEX_VOWELS.forEach(v => {

            if (v[0] === char1 && v[1] === char2){
                ret = v[2];
            }
        });

        return ret;
    }
}

/**
 *
 * 초/중/종 문자를 조합시킨다.
 *
 * @param cho
 * @param jung
 * @param jong
 * @returns {string}
 * @private
 */
function _JAMOAssemble(cho = '', jung = '', jong = ''){

    let ret = '';

    const choIndex  = CHO_ATOM.indexOf(cho);
    const jungIndex = JUNG_ATOM.indexOf(jung);
    const jongIndex = JONG_ATOM.indexOf(jong);

    let charCode;

    if (choIndex > -1 && jungIndex > -1 && jongIndex > -1){
        // 초/중/종 조합
        charCode = Number(BASE_HASH_CODE) + (choIndex * 21 + jungIndex) * 28 + jongIndex;
    }

    if (charCode){
        // 16진수 코드값을 문자로 변환한다.
        ret = String.fromCharCode(charCode);
    }

    return ret;
}

/**
 *
 * 문자를 초/중/종 문자로 분해한다.
 *
 * @param v
 * @returns {{cho: (string|string), jung: (string|string), jong: (string|string), choIndex: Number, jungIndex: Number, jongIndex: Number}}
 * @constructor
 */
function _JAMODisassemble(v = ''){

    /**
        초성 중성 종성 분리 하기

        유니코드 한글은 0xAC00 으로부터
        초성 19개, 중성 21개, 종성 28개로 이루어지고, 이들을 조합한 11,172개의 문자를 갖는다.

        한글코드의 값(가) = ((초성(0) * 21) + 중성(0)) * 28 + 종성(0) + 0xAC00(0xAC00은 'ㄱ'의 코드값)

        따라서 다음과 같은 계산 식이 구해진다. 유니코드 한글 문자 코드 값이 X일 때,

        초성 = ((X - 0xAC00) / 28) / 21
        중성 = ((X - 0xAC00) / 28) % 21
        종성 = (X - 0xAC00) % 28

        이 때 초성, 중성, 종성의 값은 각 소리 글자의 코드값이 아니라
        이들이 각각 몇 번째 문자인가를 나타내기 때문에 다음과 같이 다시 처리한다.

        초성문자코드 = 초성 + 0x1100 //('ㄱ') => 시작 메모리 주소값이, 위에서 구한 자리값을 더하면, 구하고자하는 메모리 주소값이 된다.
        중성문자코드 = 중성 + 0x1161 // ('ㅏ')
        종성문자코드 = 종성 + 0x11A8 - 1 // (종성이 없는 경우가 있으므로 1을 뺌)
    **/

    // `0xAC00` 16진수값은 유니코드 `가` 값이 가지는, 메모리 주소이다.(`0xAC01(각)`, `0xAC01(갂)`...)
    v = v.charCodeAt(0) - parseInt(BASE_HASH_CODE, 16);

    // 초성 요소의 자리 수
    const choIndex = parseInt((v / (21 * 28)), 10);

    // 중성 요소의 자리 수
    const jungIndex = parseInt(((v / 28) % 21), 10);

    // 종성 요소의 자리 수
    const jongIndex = parseInt(v % 28, 10);


    // `0x1100` 16진수값은 초성 `ㄱ` 이 가지는, 메모리 주소이다.(0x1100(ㄱ), 0x1101(ㄲ), 0x1102(ㄴ)...)
    const cho = String.fromCharCode(choIndex + parseInt('0x1100', 16));
    // `0x1161` 16진수값은 중성 `ㅏ` 가지는, 메모리 주소이다.(0x1161(ㅏ), 0x1162(ㅐ), 0x1162(ㅑ)...)
    const jung = String.fromCharCode(jungIndex + parseInt('0x1161', 16));
    // `0x11A8` 16진수값은 종성 `ㄱ` 이 가지는, 메모리 주소이다.(0x11A8(ㄱ), 0x11A9(ㄲ), 0x11AA(ㄳ)...)
    const jong = String.fromCharCode(jongIndex + parseInt('0x11A8', 16) - 1);

    return {
        cho: cho || '',
        jung: jung || '',
        jong: jong || '',
        choIndex,
        jungIndex,
        jongIndex
    };
}

module.exports = Ganada;




/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var bind = __webpack_require__(46);
var Axios = __webpack_require__(105);
var defaults = __webpack_require__(27);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(51);
axios.CancelToken = __webpack_require__(119);
axios.isCancel = __webpack_require__(50);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(120);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(27);
var utils = __webpack_require__(1);
var InterceptorManager = __webpack_require__(114);
var dispatchRequest = __webpack_require__(115);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(49);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var transformData = __webpack_require__(116);
var isCancel = __webpack_require__(50);
var defaults = __webpack_require__(27);
var isAbsoluteURL = __webpack_require__(117);
var combineURLs = __webpack_require__(118);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(51);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.1
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ })
/******/ ]);
});