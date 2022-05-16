// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/bind.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeRun = exports.observeRender = exports.observeInsert = exports.observeInit = exports.BindObject = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BindObject = /*#__PURE__*/function () {
  function BindObject(me) {
    _classCallCheck(this, BindObject);

    _defineProperty(this, "_val", {});

    _defineProperty(this, "_org", {});

    _defineProperty(this, "_me", null);

    _defineProperty(this, "_tmr", 0);

    this._me = me;
  }

  _createClass(BindObject, [{
    key: "onlySet",
    value: function onlySet(data) {
      if (!data) {
        return;
      }

      for (var i in data) {
        this._val[i] = data[i];
      }
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this = this;

      if (this._me && this._me.viewRender) {
        if (this._tmr) {
          clearTimeout(this._tmr);
        }

        this._tmr = setTimeout(function () {
          _this._me.viewRender();
        }, 10);
      }
    }
  }, {
    key: "_clone",
    value: function _clone(v) {
      return JSON.parse(JSON.stringify(v));
    }
  }, {
    key: "init",
    value: function init(data) {
      this.onlySet(data);
      this._org = this._clone(this._val); // children objects

      if (this._me && this._me.components && this._me.components.length > 0) {
        var _iterator = _createForOfIteratorHelper(this._me.components),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (item.init) {
              item.init();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "set",
    value: function set(data) {
      this.onlySet(data);

      this._render();
    }
  }, {
    key: "get",
    value: function get() {
      return this._clone(this._val);
    }
  }, {
    key: "clear",
    value: function clear() {
      this._val = this._clone(this._org);

      this._render();
    }
  }, {
    key: "onlyReset",
    value: function onlyReset(k) {
      if (!k || typeof this._org[k] == "undefined") {
        return;
      }

      this._val[k] = this._org[k];
    }
  }, {
    key: "reset",
    value: function reset(k) {
      tshi.onlyReset(k);

      this._render();
    }
  }]);

  return BindObject;
}();

exports.BindObject = BindObject;
var observeId = 1;

var observeInit = function observeInit() {
  window.observeObjects = [];
  window.observeRun = observeRun;
};

exports.observeInit = observeInit;

var observeRun = function observeRun(id) {
  if (window.observeObjects[id]) {
    return window.observeObjects[id];
  }

  return {};
};

exports.observeRun = observeRun;

var observeInsert = function observeInsert(me) {
  if (!me) {
    return;
  }

  me.__objectId = observeId++;
  window.observeObjects[me.__objectId] = me;
};

exports.observeInsert = observeInsert;

var observeRender = function observeRender(me, containerId, tpl, data) {
  if (!me || !me.__objectId) {
    return;
  }

  var c = tpl.render(data);
  var cc = c.replace(/this\.value/gi, "__THIS__VALUE").replace(/this\./gi, "window.observeRun(" + me.__objectId + ").").replace(/__THIS__VALUE/gi, "this.value");
  var el = document.getElementById(containerId);

  if (el) {
    el.innerHTML = cc;
  } // children objects


  if (me.components && me.components.length > 0) {
    var _iterator2 = _createForOfIteratorHelper(me.components),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;

        if (item.viewRender) {
          item.viewRender();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
};

exports.observeRender = observeRender;
},{}],"../node_modules/juicer/src/juicer.js":[function(require,module,exports) {
var global = arguments[3];
/*
    ********** Juicer **********
    ${A Fast template engine}
    Project Home: http://juicer.name

    Author: Guokai
    Gtalk: badkaikai@gmail.com
    Blog: http://benben.cc
    Licence: MIT License
    Version: 0.6.15
*/
(function () {
  // This is the main function for not only compiling but also rendering.
  // there's at least two parameters need to be provided, one is the tpl, 
  // another is the data, the tpl can either be a string, or an id like #id.
  // if only tpl was given, it'll return the compiled reusable function.
  // if tpl and data were given at the same time, it'll return the rendered 
  // result immediately.
  var juicer = function () {
    var args = [].slice.call(arguments);
    args.push(juicer.options);

    if (args[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)) {
      args[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm, function ($, $id) {
        var _document = document;

        var elem = _document && _document.getElementById($id);

        args[0] = elem ? elem.value || elem.innerHTML : $;
      });
    }

    if (juicer.documentHTML) {
      juicer.compile.call(juicer, juicer.documentHTML);
      juicer.documentHTML = '';
    }

    if (arguments.length == 1) {
      return juicer.compile.apply(juicer, args);
    }

    if (arguments.length >= 2) {
      return juicer.to_html.apply(juicer, args);
    }
  };

  var __escapehtml = {
    escapehash: {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2f;'
    },
    escapereplace: function (k) {
      return __escapehtml.escapehash[k];
    },
    escaping: function (str) {
      return typeof str !== 'string' ? str : str.replace(/[&<>"']/igm, this.escapereplace);
    },
    detection: function (data) {
      return typeof data === 'undefined' ? '' : data;
    }
  };

  var __throw = function (error) {
    if (typeof console !== 'undefined') {
      if (console.warn) {
        console.warn(error);
        return;
      }

      if (console.log) {
        console.log(error);
        return;
      }
    }

    throw error;
  };

  var __creator = function (o, proto) {
    o = o !== Object(o) ? {} : o;

    if (o.__proto__) {
      o.__proto__ = proto;
      return o;
    }

    var empty = function () {};

    var n = Object.create ? Object.create(proto) : new (empty.prototype = proto, empty)();

    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        n[i] = o[i];
      }
    }

    return n;
  };

  var annotate = function (fn) {
    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    var FN_ARG_SPLIT = /,/;
    var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
    var FN_BODY = /^function[^{]+{([\s\S]*)}/m;
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    var args = [],
        fnText,
        fnBody,
        argDecl;

    if (typeof fn === 'function') {
      if (fn.length) {
        fnText = fn.toString();
      }
    } else if (typeof fn === 'string') {
      fnText = fn;
    }

    fnText = fnText.trim();
    argDecl = fnText.match(FN_ARGS);
    fnBody = fnText.match(FN_BODY)[1].trim();

    for (var i = 0; i < argDecl[1].split(FN_ARG_SPLIT).length; i++) {
      var arg = argDecl[1].split(FN_ARG_SPLIT)[i];
      arg.replace(FN_ARG, function (all, underscore, name) {
        args.push(name);
      });
    }

    return [args, fnBody];
  };

  juicer.__cache = {};
  juicer.version = '0.6.15';
  juicer.settings = {};
  juicer.documentHTML = '';
  juicer.tags = {
    operationOpen: '{@',
    operationClose: '}',
    interpolateOpen: '\\${',
    interpolateClose: '}',
    noneencodeOpen: '\\$\\${',
    noneencodeClose: '}',
    commentOpen: '\\{#',
    commentClose: '\\}'
  };
  juicer.options = {
    cache: true,
    strip: true,
    errorhandling: true,
    detection: true,
    _method: __creator({
      __escapehtml: __escapehtml,
      __throw: __throw,
      __juicer: juicer
    }, {})
  };

  juicer.tagInit = function () {
    var forstart = juicer.tags.operationOpen + 'each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?' + juicer.tags.operationClose;
    var forend = juicer.tags.operationOpen + '\\/each' + juicer.tags.operationClose;
    var ifstart = juicer.tags.operationOpen + 'if\\s*([^}]*?)' + juicer.tags.operationClose;
    var ifend = juicer.tags.operationOpen + '\\/if' + juicer.tags.operationClose;
    var elsestart = juicer.tags.operationOpen + 'else' + juicer.tags.operationClose;
    var elseifstart = juicer.tags.operationOpen + 'else if\\s*([^}]*?)' + juicer.tags.operationClose;
    var interpolate = juicer.tags.interpolateOpen + '([\\s\\S]+?)' + juicer.tags.interpolateClose;
    var noneencode = juicer.tags.noneencodeOpen + '([\\s\\S]+?)' + juicer.tags.noneencodeClose;
    var inlinecomment = juicer.tags.commentOpen + '[^}]*?' + juicer.tags.commentClose;
    var rangestart = juicer.tags.operationOpen + 'each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)' + juicer.tags.operationClose;
    var include = juicer.tags.operationOpen + 'include\\s*([^}]*?)\\s*,\\s*([^}]*?)' + juicer.tags.operationClose;
    var helperRegisterStart = juicer.tags.operationOpen + 'helper\\s*([^}]*?)\\s*' + juicer.tags.operationClose;
    var helperRegisterBody = '([\\s\\S]*?)';
    var helperRegisterEnd = juicer.tags.operationOpen + '\\/helper' + juicer.tags.operationClose;
    juicer.settings.forstart = new RegExp(forstart, 'igm');
    juicer.settings.forend = new RegExp(forend, 'igm');
    juicer.settings.ifstart = new RegExp(ifstart, 'igm');
    juicer.settings.ifend = new RegExp(ifend, 'igm');
    juicer.settings.elsestart = new RegExp(elsestart, 'igm');
    juicer.settings.elseifstart = new RegExp(elseifstart, 'igm');
    juicer.settings.interpolate = new RegExp(interpolate, 'igm');
    juicer.settings.noneencode = new RegExp(noneencode, 'igm');
    juicer.settings.inlinecomment = new RegExp(inlinecomment, 'igm');
    juicer.settings.rangestart = new RegExp(rangestart, 'igm');
    juicer.settings.include = new RegExp(include, 'igm');
    juicer.settings.helperRegister = new RegExp(helperRegisterStart + helperRegisterBody + helperRegisterEnd, 'igm');
  };

  juicer.tagInit(); // Using this method to set the options by given conf-name and conf-value,
  // you can also provide more than one key-value pair wrapped by an object.
  // this interface also used to custom the template tag delimater, for this
  // situation, the conf-name must begin with tag::, for example: juicer.set
  // ('tag::operationOpen', '{@').

  juicer.set = function (conf, value) {
    var that = this;

    var escapePattern = function (v) {
      return v.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm, function ($) {
        return '\\' + $;
      });
    };

    var set = function (conf, value) {
      var tag = conf.match(/^tag::(.*)$/i);

      if (tag) {
        that.tags[tag[1]] = escapePattern(value);
        that.tagInit();
        return;
      }

      that.options[conf] = value;
    };

    if (arguments.length === 2) {
      set(conf, value);
      return;
    }

    if (conf === Object(conf)) {
      for (var i in conf) {
        if (conf.hasOwnProperty(i)) {
          set(i, conf[i]);
        }
      }
    }
  }; // Before you're using custom functions in your template like ${name | fnName},
  // you need to register this fn by juicer.register('fnName', fn).


  juicer.register = function (fname, fn) {
    var _method = this.options._method;

    if (_method.hasOwnProperty(fname)) {
      return false;
    }

    return _method[fname] = fn;
  }; // remove the registered function in the memory by the provided function name.
  // for example: juicer.unregister('fnName').


  juicer.unregister = function (fname) {
    var _method = this.options._method;

    if (_method.hasOwnProperty(fname)) {
      return delete _method[fname];
    }
  };

  juicer.template = function (options) {
    var that = this;
    this.options = options;

    this.__interpolate = function (_name, _escape, options) {
      var _define = _name.split('|'),
          _fn = _define[0] || '',
          _cluster;

      if (_define.length > 1) {
        _name = _define.shift();
        _cluster = _define.shift().split(',');
        _fn = '_method.' + _cluster.shift() + '.call(this, ' + [_name].concat(_cluster) + ')';
      }

      return '<%= ' + (_escape ? '_method.__escapehtml.escaping' : '') + '(' + (!options || options.detection !== false ? '_method.__escapehtml.detection' : '') + '(' + _fn + ')' + ')' + ' %>';
    };

    this.__removeShell = function (tpl, options) {
      var _counter = 0;
      tpl = tpl // inline helper register
      .replace(juicer.settings.helperRegister, function ($, helperName, fnText) {
        var anno = annotate(fnText);
        var fnArgs = anno[0];
        var fnBody = anno[1];
        var fn = new Function(fnArgs.join(','), fnBody);
        juicer.register(helperName, fn);
        return $;
      }) // for expression
      .replace(juicer.settings.forstart, function ($, _name, alias, key) {
        var alias = alias || 'value',
            key = key && key.substr(1);

        var _iterate = 'i' + _counter++;

        return '<% ~function() {' + 'for(var ' + _iterate + ' in ' + _name + ') {' + 'if(' + _name + '.hasOwnProperty(' + _iterate + ')) {' + 'var ' + alias + '=' + _name + '[' + _iterate + '];' + (key ? 'var ' + key + '=' + _iterate + ';' : '') + ' %>';
      }).replace(juicer.settings.forend, '<% }}}(); %>') // if expression
      .replace(juicer.settings.ifstart, function ($, condition) {
        return '<% if(' + condition + ') { %>';
      }).replace(juicer.settings.ifend, '<% } %>') // else expression
      .replace(juicer.settings.elsestart, function ($) {
        return '<% } else { %>';
      }) // else if expression
      .replace(juicer.settings.elseifstart, function ($, condition) {
        return '<% } else if(' + condition + ') { %>';
      }) // interpolate without escape
      .replace(juicer.settings.noneencode, function ($, _name) {
        return that.__interpolate(_name, false, options);
      }) // interpolate with escape
      .replace(juicer.settings.interpolate, function ($, _name) {
        return that.__interpolate(_name, true, options);
      }) // clean up comments
      .replace(juicer.settings.inlinecomment, '') // range expression
      .replace(juicer.settings.rangestart, function ($, _name, start, end) {
        var _iterate = 'j' + _counter++;

        return '<% ~function() {' + 'for(var ' + _iterate + '=' + start + ';' + _iterate + '<' + end + ';' + _iterate + '++) {{' + 'var ' + _name + '=' + _iterate + ';' + ' %>';
      }) // include sub-template
      .replace(juicer.settings.include, function ($, tpl, data) {
        // compatible for node.js
        if (tpl.match(/^file\:\/\//igm)) return $;
        return '<%= _method.__juicer(' + tpl + ', ' + data + '); %>';
      }); // exception handling

      if (!options || options.errorhandling !== false) {
        tpl = '<% try { %>' + tpl;
        tpl += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';
      }

      return tpl;
    };

    this.__toNative = function (tpl, options) {
      return this.__convert(tpl, !options || options.strip);
    };

    this.__lexicalAnalyze = function (tpl) {
      var buffer = [];
      var method = [];
      var prefix = '';
      var reserved = ['if', 'each', '_', '_method', 'console', 'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do', 'finally', 'for', 'function', 'in', 'instanceof', 'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'null', 'typeof', 'class', 'enum', 'export', 'extends', 'import', 'super', 'implements', 'interface', 'let', 'package', 'private', 'protected', 'public', 'static', 'yield', 'const', 'arguments', 'true', 'false', 'undefined', 'NaN'];

      var indexOf = function (array, item) {
        if (Array.prototype.indexOf && array.indexOf === Array.prototype.indexOf) {
          return array.indexOf(item);
        }

        for (var i = 0; i < array.length; i++) {
          if (array[i] === item) return i;
        }

        return -1;
      };

      var variableAnalyze = function ($, statement) {
        statement = statement.match(/\w+/igm)[0];

        if (indexOf(buffer, statement) === -1 && indexOf(reserved, statement) === -1 && indexOf(method, statement) === -1) {
          // avoid re-declare native function, if not do this, template 
          // `{@if encodeURIComponent(name)}` could be throw undefined.
          if (typeof window !== 'undefined' && typeof window[statement] === 'function' && window[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
            return $;
          } // compatible for node.js


          if (typeof global !== 'undefined' && typeof global[statement] === 'function' && global[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
            return $;
          } // avoid re-declare registered function, if not do this, template 
          // `{@if registered_func(name)}` could be throw undefined.


          if (typeof juicer.options._method[statement] === 'function' || juicer.options._method.hasOwnProperty(statement)) {
            method.push(statement);
            return $;
          } // avoid SyntaxError: Unexpected number


          if (statement.match(/^\d+/igm)) {
            return $;
          }

          buffer.push(statement); // fuck ie
        }

        return $;
      };

      tpl.replace(juicer.settings.forstart, variableAnalyze).replace(juicer.settings.interpolate, variableAnalyze).replace(juicer.settings.ifstart, variableAnalyze).replace(juicer.settings.elseifstart, variableAnalyze).replace(juicer.settings.include, variableAnalyze).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_0-9]+)/igm, variableAnalyze);

      for (var i = 0; i < buffer.length; i++) {
        prefix += 'var ' + buffer[i] + '=_.' + buffer[i] + ';';
      }

      for (var i = 0; i < method.length; i++) {
        prefix += 'var ' + method[i] + '=_method.' + method[i] + ';';
      }

      return '<% ' + prefix + ' %>';
    };

    this.__convert = function (tpl, strip) {
      var buffer = [].join('');
      buffer += "'use strict';"; // use strict mode

      buffer += "var _=_||{};";
      buffer += "var _out='';_out+='";

      if (strip !== false) {
        buffer += tpl.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;";
        return buffer;
      }

      buffer += tpl.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";
      return buffer;
    };

    this.parse = function (tpl, options) {
      var _that = this;

      if (!options || options.loose !== false) {
        tpl = this.__lexicalAnalyze(tpl) + tpl;
      }

      tpl = this.__removeShell(tpl, options);
      tpl = this.__toNative(tpl, options);
      this._render = new Function('_, _method', tpl);

      this.render = function (_, _method) {
        if (!_method || _method !== that.options._method) {
          _method = __creator(_method, that.options._method);
        }

        return _that._render.call(this, _, _method);
      };

      return this;
    };
  };

  juicer.compile = function (tpl, options) {
    if (!options || options !== this.options) {
      options = __creator(options, this.options);
    }

    var that = this;
    var cacheStore = {
      get: function (tpl) {
        if (options.cachestore) {
          return options.cachestore.get(tpl);
        }

        return that.__cache[tpl];
      },
      set: function (tpl, val) {
        if (options.cachestore) {
          return options.cachestore.set(tpl, val);
        }

        return that.__cache[tpl] = val;
      }
    };

    try {
      var engine = cacheStore.get(tpl) ? cacheStore.get(tpl) : new this.template(this.options).parse(tpl, options);

      if (!options || options.cache !== false) {
        cacheStore.set(tpl, engine);
      }

      return engine;
    } catch (e) {
      __throw('Juicer Compile Exception: ' + e.message);

      return {
        render: function () {} // noop

      };
    }
  };

  juicer.to_html = function (tpl, data, options) {
    if (!options || options !== this.options) {
      options = __creator(options, this.options);
    }

    return this.compile(tpl, options).render(data, options._method);
  }; // avoid memory leak for node.js


  if (typeof global !== 'undefined' && typeof window === 'undefined') {
    juicer.set('cache', false);
  }

  if (typeof document !== 'undefined' && document.body) {
    juicer.documentHTML = document.body.innerHTML;
  }

  typeof module !== 'undefined' && module.exports ? module.exports = juicer : this.juicer = juicer;
})();
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"app/app.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/views/footer/footer.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/views/footer/footer.shtml":[function(require,module,exports) {
module.exports = "/footer.6628054c.shtml";
},{}],"app/views/footer/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _bind = require("../../../js/bind");

var _juicer = _interopRequireDefault(require("juicer"));

require("./footer.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compiledTpl = (0, _juicer.default)(require("./footer.shtml"));

var Footer = /*#__PURE__*/function () {
  // 
  function Footer(id) {
    _classCallCheck(this, Footer);

    _defineProperty(this, "components", []);

    _defineProperty(this, "data", {});

    _defineProperty(this, "containerId", "");

    this.data = new _bind.BindObject(this);
    this.containerId = id; // 全局对象

    (0, _bind.observeInsert)(this);
  }

  _createClass(Footer, [{
    key: "init",
    value: function init() {
      this.data.init({
        msg: "--",
        id: "856"
      });
      console.log("footer init");
    }
  }, {
    key: "viewRender",
    value: function viewRender() {
      if (!this.containerId) {
        return;
      }

      (0, _bind.observeRender)(this, this.containerId, compiledTpl, this.data.get());
    }
  }, {
    key: "printInfo",
    value: function printInfo(v) {
      console.log("v", v);
    }
  }]);

  return Footer;
}();

exports.Footer = Footer;
},{"../../../js/bind":"js/bind.js","juicer":"../node_modules/juicer/src/juicer.js","./footer.scss":"app/views/footer/footer.scss","./footer.shtml":"app/views/footer/footer.shtml"}],"app/app.shtml":[function(require,module,exports) {
module.exports = "/app.eb13d110.shtml";
},{}],"app/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _bind = require("../js/bind");

var _juicer = _interopRequireDefault(require("juicer"));

require("./app.scss");

var _footer = require("./views/footer/footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compiledTpl = (0, _juicer.default)(require("./app.shtml"));

var App = /*#__PURE__*/function () {
  //
  function App(id) {
    _classCallCheck(this, App);

    _defineProperty(this, "components", []);

    _defineProperty(this, "componentFooter", void 0);

    _defineProperty(this, "data", {});

    _defineProperty(this, "containerId", "");

    this.data = new _bind.BindObject(this);
    this.containerId = id;
    (0, _bind.observeInsert)(this);
    var footer = new _footer.Footer("footer");
    this.componentFooter = footer;
    this.components = [footer];
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      this.data.init({
        form1: {
          name: "",
          dueDate: "",
          taskPriority: "",
          estimateTime: ""
        },
        form2: {
          name: "",
          readLink: "",
          projectName: ""
        }
      });
    }
  }, {
    key: "viewRender",
    value: function viewRender() {
      if (!this.containerId) {
        return;
      }

      (0, _bind.observeRender)(this, this.containerId, compiledTpl, this.data.get());
    }
  }, {
    key: "showMenu",
    value: function showMenu(id) {
      this.hideMenu();
      document.getElementById(id).style.display = "block";
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      var els = document.querySelectorAll(".menu-box");

      var _iterator = _createForOfIteratorHelper(els),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          item.style.display = "none";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "setFormValue",
    value: function setFormValue(formName, key, value) {
      // console.log(formName, key, value, arguments);
      var data = this.data.get();

      if (!data[formName]) {
        data[formName] = {};
      }

      data[formName][key] = value;
      console.log(formName, key, value, data);
      this.data.onlySet(data);
    } // open form panel

  }, {
    key: "onOpenAddForm",
    value: function onOpenAddForm(id) {
      this.data.onlyReset(id);
      this.hideFloatLayer();
      document.getElementById(id).style.display = "block";
    }
  }, {
    key: "hideFloatLayer",
    value: function hideFloatLayer() {
      var f1 = document.getElementById("form1");
      var f2 = document.getElementById("form2");
      f1.style.display = "none";
      f2.style.display = "none";
    }
  }, {
    key: "onAddSave",
    value: function onAddSave(formName) {
      var data = this.data.get();
      console.log(data[formName]);
      this.hideFloatLayer();
    }
  }]);

  return App;
}();

exports.App = App;
},{"../js/bind":"js/bind.js","juicer":"../node_modules/juicer/src/juicer.js","./app.scss":"app/app.scss","./views/footer/footer":"app/views/footer/footer.js","./app.shtml":"app/app.shtml"}],"main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./assets/MaterialIcons/MaterialIcons-Regular.woff":[["MaterialIcons-Regular.7ba8b408.woff","assets/MaterialIcons/MaterialIcons-Regular.woff"],"assets/MaterialIcons/MaterialIcons-Regular.woff"],"./assets/MaterialIcons/MaterialIcons-Regular.ttf":[["MaterialIcons-Regular.849fe429.ttf","assets/MaterialIcons/MaterialIcons-Regular.ttf"],"assets/MaterialIcons/MaterialIcons-Regular.ttf"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _app = require("./app/app.js");

var _bind = require("./js/bind.js");

var _juicer = _interopRequireDefault(require("juicer"));

require("./main.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  _juicer.default.set({
    "tag::operationOpen": "{@",
    // each/for/if
    "tag::operationClose": "}",
    "tag::interpolateOpen": "${",
    // 变量值
    "tag::interpolateClose": "}",
    "tag::noneencodeOpen": "$${",
    "tag::noneencodeClose": "}",
    "tag::commentOpen": "{#",
    // 
    "tag::commentClose": "}"
  });

  (0, _bind.observeInit)();
  var app = new _app.App("app");
  app.init();
  app.viewRender();
})();
},{"./app/app.js":"app/app.js","./js/bind.js":"js/bind.js","juicer":"../node_modules/juicer/src/juicer.js","./main.scss":"main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64546" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/public.e31bb0bc.js.map