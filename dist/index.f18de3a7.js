// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3T0ci":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c767fc22f18de3a7";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7SwCM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appJs = require("./app/app.js");
var _bindJs = require("./js/bind.js");
var _juicer = require("juicer");
var _juicerDefault = parcelHelpers.interopDefault(_juicer);
var _mainScss = require("./main.scss");
(function() {
    _juicerDefault.default.set({
        "tag::operationOpen": "{@",
        "tag::operationClose": "}",
        "tag::interpolateOpen": "${",
        "tag::interpolateClose": "}",
        "tag::noneencodeOpen": "$${",
        "tag::noneencodeClose": "}",
        "tag::commentOpen": "{#",
        "tag::commentClose": "}"
    });
    _bindJs.observeInit();
    const app = new _appJs.App("app");
    app.init();
    app.viewRender();
})();

},{"./app/app.js":"lBGMq","./js/bind.js":"e0Agw","juicer":"lkMaW","./main.scss":"aNzNG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lBGMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App
);
var _bind = require("../js/bind");
var _juicer = require("juicer");
var _juicerDefault = parcelHelpers.interopDefault(_juicer);
var _appScss = require("./app.scss");
var _footer = require("./views/footer/footer");
const compiledTpl = _juicerDefault.default(require("./app.shtml"));
class App {
    //
    components = [];
    componentFooter;
    data = {};
    containerId = "";
    constructor(id){
        this.data = new _bind.BindObject(this);
        this.containerId = id;
        _bind.observeInsert(this);
        const footer = new _footer.Footer("footer");
        this.componentFooter = footer;
        this.components = [
            footer
        ];
    }
    init() {
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
    viewRender() {
        if (!this.containerId) return;
        _bind.observeRender(this, this.containerId, compiledTpl, this.data.get());
    }
    showMenu(id) {
        this.hideMenu();
        document.getElementById(id).style.display = "block";
    }
    hideMenu() {
        const els = document.querySelectorAll(".menu-box");
        for (const item of els)item.style.display = "none";
    }
    setFormValue(formName, key, value) {
        // console.log(formName, key, value, arguments);
        const data = this.data.get();
        if (!data[formName]) data[formName] = {};
        data[formName][key] = value;
        console.log(formName, key, value, data);
        this.data.onlySet(data);
    }
    // open form panel
    onOpenAddForm(id) {
        this.data.onlyReset(id);
        this.hideFloatLayer();
        document.getElementById(id).style.display = "block";
    }
    hideFloatLayer() {
        const f1 = document.getElementById("form1");
        const f2 = document.getElementById("form2");
        f1.style.display = "none";
        f2.style.display = "none";
    }
    onAddSave(formName) {
        const data = this.data.get();
        console.log(data[formName]);
        this.hideFloatLayer();
    }
}

},{"../js/bind":"e0Agw","juicer":"lkMaW","./app.scss":"kO0m1","./views/footer/footer":"gue9o","./app.shtml":"h1n6Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0Agw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BindObject", ()=>BindObject
);
parcelHelpers.export(exports, "observeInit", ()=>observeInit
);
parcelHelpers.export(exports, "observeRun", ()=>observeRun
);
parcelHelpers.export(exports, "observeInsert", ()=>observeInsert
);
parcelHelpers.export(exports, "observeRender", ()=>observeRender
);
class BindObject {
    _val = {};
    _org = {};
    _me = null;
    _tmr = 0;
    constructor(me){
        this._me = me;
    }
    onlySet(data) {
        if (!data) return;
        for(var i in data)this._val[i] = data[i];
    }
    _render() {
        if (this._me && this._me.viewRender) {
            if (this._tmr) clearTimeout(this._tmr);
            this._tmr = setTimeout(()=>{
                this._me.viewRender();
            }, 10);
        }
    }
    _clone(v) {
        return JSON.parse(JSON.stringify(v));
    }
    init(data) {
        this.onlySet(data);
        this._org = this._clone(this._val);
        // children objects
        if (this._me && this._me.components && this._me.components.length > 0) {
            for (const item of this._me.components)if (item.init) item.init();
        }
    }
    set(data) {
        this.onlySet(data);
        this._render();
    }
    get() {
        return this._clone(this._val);
    }
    clear() {
        this._val = this._clone(this._org);
        this._render();
    }
    onlyReset(k) {
        if (!k || typeof this._org[k] == "undefined") return;
        this._val[k] = this._org[k];
    }
    reset(k) {
        tshi.onlyReset(k);
        this._render();
    }
}
var observeId = 1;
const observeInit = ()=>{
    window.observeObjects = [];
    window.observeRun = observeRun;
};
const observeRun = (id)=>{
    if (window.observeObjects[id]) return window.observeObjects[id];
    return {};
};
const observeInsert = (me)=>{
    if (!me) return;
    me.__objectId = observeId++;
    window.observeObjects[me.__objectId] = me;
};
const observeRender = (me, containerId, tpl, data)=>{
    if (!me || !me.__objectId) return;
    const c = tpl.render(data);
    const cc = c.replace(/this\.value/gi, "__THIS__VALUE").replace(/this\./gi, "window.observeRun(" + me.__objectId + ").").replace(/__THIS__VALUE/gi, "this.value");
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = cc;
    // children objects
    if (me.components && me.components.length > 0) {
        for (const item of me.components)if (item.viewRender) item.viewRender();
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lkMaW":[function(require,module,exports) {
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
*/ (function() {
    // This is the main function for not only compiling but also rendering.
    // there's at least two parameters need to be provided, one is the tpl, 
    // another is the data, the tpl can either be a string, or an id like #id.
    // if only tpl was given, it'll return the compiled reusable function.
    // if tpl and data were given at the same time, it'll return the rendered 
    // result immediately.
    var juicer = function() {
        var args = [].slice.call(arguments);
        args.push(juicer.options);
        if (args[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)) args[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm, function($, $id) {
            var _document = document;
            var elem = _document && _document.getElementById($id);
            args[0] = elem ? elem.value || elem.innerHTML : $;
        });
        if (juicer.documentHTML) {
            juicer.compile.call(juicer, juicer.documentHTML);
            juicer.documentHTML = '';
        }
        if (arguments.length == 1) return juicer.compile.apply(juicer, args);
        if (arguments.length >= 2) return juicer.to_html.apply(juicer, args);
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
        escapereplace: function(k) {
            return __escapehtml.escapehash[k];
        },
        escaping: function(str) {
            return typeof str !== 'string' ? str : str.replace(/[&<>"']/igm, this.escapereplace);
        },
        detection: function(data) {
            return typeof data === 'undefined' ? '' : data;
        }
    };
    var __throw = function(error) {
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
    var __creator = function(o, proto) {
        o = o !== Object(o) ? {} : o;
        if (o.__proto__) {
            o.__proto__ = proto;
            return o;
        }
        var empty = function() {};
        var n = Object.create ? Object.create(proto) : new (empty.prototype = proto, empty);
        for(var i in o)if (o.hasOwnProperty(i)) n[i] = o[i];
        return n;
    };
    var annotate = function(fn) {
        var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
        var FN_ARG_SPLIT = /,/;
        var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
        var FN_BODY = /^function[^{]+{([\s\S]*)}/m;
        var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
        var args = [], fnText, fnBody, argDecl;
        if (typeof fn === 'function') {
            if (fn.length) fnText = fn.toString();
        } else if (typeof fn === 'string') fnText = fn;
        fnText = fnText.trim();
        argDecl = fnText.match(FN_ARGS);
        fnBody = fnText.match(FN_BODY)[1].trim();
        for(var i = 0; i < argDecl[1].split(FN_ARG_SPLIT).length; i++){
            var arg = argDecl[1].split(FN_ARG_SPLIT)[i];
            arg.replace(FN_ARG, function(all, underscore, name) {
                args.push(name);
            });
        }
        return [
            args,
            fnBody
        ];
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
    juicer.tagInit = function() {
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
    juicer.tagInit();
    // Using this method to set the options by given conf-name and conf-value,
    // you can also provide more than one key-value pair wrapped by an object.
    // this interface also used to custom the template tag delimater, for this
    // situation, the conf-name must begin with tag::, for example: juicer.set
    // ('tag::operationOpen', '{@').
    juicer.set = function(conf1, value1) {
        var that = this;
        var escapePattern = function(v) {
            return v.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm, function($) {
                return '\\' + $;
            });
        };
        var set = function(conf, value) {
            var tag = conf.match(/^tag::(.*)$/i);
            if (tag) {
                that.tags[tag[1]] = escapePattern(value);
                that.tagInit();
                return;
            }
            that.options[conf] = value;
        };
        if (arguments.length === 2) {
            set(conf1, value1);
            return;
        }
        if (conf1 === Object(conf1)) {
            for(var i in conf1)if (conf1.hasOwnProperty(i)) set(i, conf1[i]);
        }
    };
    // Before you're using custom functions in your template like ${name | fnName},
    // you need to register this fn by juicer.register('fnName', fn).
    juicer.register = function(fname, fn) {
        var _method = this.options._method;
        if (_method.hasOwnProperty(fname)) return false;
        return _method[fname] = fn;
    };
    // remove the registered function in the memory by the provided function name.
    // for example: juicer.unregister('fnName').
    juicer.unregister = function(fname) {
        var _method = this.options._method;
        if (_method.hasOwnProperty(fname)) return delete _method[fname];
    };
    juicer.template = function(options1) {
        var that = this;
        this.options = options1;
        this.__interpolate = function(_name, _escape, options) {
            var _define = _name.split('|'), _fn = _define[0] || '', _cluster;
            if (_define.length > 1) {
                _name = _define.shift();
                _cluster = _define.shift().split(',');
                _fn = '_method.' + _cluster.shift() + '.call(this, ' + [
                    _name
                ].concat(_cluster) + ')';
            }
            return '<%= ' + (_escape ? '_method.__escapehtml.escaping' : '') + '(' + (!options || options.detection !== false ? '_method.__escapehtml.detection' : '') + '(' + _fn + ')' + ')' + ' %>';
        };
        this.__removeShell = function(tpl1, options) {
            var _counter = 0;
            tpl1 = tpl1// inline helper register
            .replace(juicer.settings.helperRegister, function($, helperName, fnText) {
                var anno = annotate(fnText);
                var fnArgs = anno[0];
                var fnBody = anno[1];
                var fn = new Function(fnArgs.join(','), fnBody);
                juicer.register(helperName, fn);
                return $;
            })// for expression
            .replace(juicer.settings.forstart, function($, _name, alias, key) {
                var alias = alias || 'value', key = key && key.substr(1);
                var _iterate = 'i' + _counter++;
                return "<% ~function() {for(var " + _iterate + ' in ' + _name + ') {' + 'if(' + _name + '.hasOwnProperty(' + _iterate + ')) {' + 'var ' + alias + '=' + _name + '[' + _iterate + '];' + (key ? 'var ' + key + '=' + _iterate + ';' : '') + ' %>';
            }).replace(juicer.settings.forend, '<% }}}(); %>')// if expression
            .replace(juicer.settings.ifstart, function($, condition) {
                return '<% if(' + condition + ') { %>';
            }).replace(juicer.settings.ifend, '<% } %>')// else expression
            .replace(juicer.settings.elsestart, function($) {
                return '<% } else { %>';
            })// else if expression
            .replace(juicer.settings.elseifstart, function($, condition) {
                return '<% } else if(' + condition + ') { %>';
            })// interpolate without escape
            .replace(juicer.settings.noneencode, function($, _name) {
                return that.__interpolate(_name, false, options);
            })// interpolate with escape
            .replace(juicer.settings.interpolate, function($, _name) {
                return that.__interpolate(_name, true, options);
            })// clean up comments
            .replace(juicer.settings.inlinecomment, '')// range expression
            .replace(juicer.settings.rangestart, function($, _name, start, end) {
                var _iterate = 'j' + _counter++;
                return "<% ~function() {for(var " + _iterate + '=' + start + ';' + _iterate + '<' + end + ';' + _iterate + '++) {{' + 'var ' + _name + '=' + _iterate + ';' + ' %>';
            })// include sub-template
            .replace(juicer.settings.include, function($, tpl, data) {
                // compatible for node.js
                if (tpl.match(/^file\:\/\//igm)) return $;
                return '<%= _method.__juicer(' + tpl + ', ' + data + '); %>';
            });
            // exception handling
            if (!options || options.errorhandling !== false) {
                tpl1 = '<% try { %>' + tpl1;
                tpl1 += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';
            }
            return tpl1;
        };
        this.__toNative = function(tpl, options) {
            return this.__convert(tpl, !options || options.strip);
        };
        this.__lexicalAnalyze = function(tpl) {
            var buffer = [];
            var method = [];
            var prefix = '';
            var reserved = [
                'if',
                'each',
                '_',
                '_method',
                'console',
                'break',
                'case',
                'catch',
                'continue',
                'debugger',
                'default',
                'delete',
                'do',
                'finally',
                'for',
                'function',
                'in',
                'instanceof',
                'new',
                'return',
                'switch',
                'this',
                'throw',
                'try',
                'typeof',
                'var',
                'void',
                'while',
                'with',
                'null',
                'typeof',
                'class',
                'enum',
                'export',
                'extends',
                'import',
                'super',
                'implements',
                'interface',
                'let',
                'package',
                'private',
                'protected',
                'public',
                'static',
                'yield',
                'const',
                'arguments',
                'true',
                'false',
                'undefined',
                'NaN'
            ];
            var indexOf = function(array, item) {
                if (Array.prototype.indexOf && array.indexOf === Array.prototype.indexOf) return array.indexOf(item);
                for(var i = 0; i < array.length; i++){
                    if (array[i] === item) return i;
                }
                return -1;
            };
            var variableAnalyze = function($, statement) {
                statement = statement.match(/\w+/igm)[0];
                if (indexOf(buffer, statement) === -1 && indexOf(reserved, statement) === -1 && indexOf(method, statement) === -1) {
                    // avoid re-declare native function, if not do this, template 
                    // `{@if encodeURIComponent(name)}` could be throw undefined.
                    if (typeof window !== 'undefined' && typeof window[statement] === 'function' && window[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) return $;
                    // compatible for node.js
                    if (typeof global !== 'undefined' && typeof global[statement] === 'function' && global[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) return $;
                    // avoid re-declare registered function, if not do this, template 
                    // `{@if registered_func(name)}` could be throw undefined.
                    if (typeof juicer.options._method[statement] === 'function' || juicer.options._method.hasOwnProperty(statement)) {
                        method.push(statement);
                        return $;
                    }
                    // avoid SyntaxError: Unexpected number
                    if (statement.match(/^\d+/igm)) return $;
                    buffer.push(statement); // fuck ie
                }
                return $;
            };
            tpl.replace(juicer.settings.forstart, variableAnalyze).replace(juicer.settings.interpolate, variableAnalyze).replace(juicer.settings.ifstart, variableAnalyze).replace(juicer.settings.elseifstart, variableAnalyze).replace(juicer.settings.include, variableAnalyze).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_0-9]+)/igm, variableAnalyze);
            for(var i1 = 0; i1 < buffer.length; i1++)prefix += 'var ' + buffer[i1] + '=_.' + buffer[i1] + ';';
            for(var i1 = 0; i1 < method.length; i1++)prefix += 'var ' + method[i1] + '=_method.' + method[i1] + ';';
            return '<% ' + prefix + ' %>';
        };
        this.__convert = function(tpl, strip) {
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
        this.parse = function(tpl, options) {
            var _that = this;
            if (!options || options.loose !== false) tpl = this.__lexicalAnalyze(tpl) + tpl;
            tpl = this.__removeShell(tpl, options);
            tpl = this.__toNative(tpl, options);
            this._render = new Function('_, _method', tpl);
            this.render = function(_, _method) {
                if (!_method || _method !== that.options._method) _method = __creator(_method, that.options._method);
                return _that._render.call(this, _, _method);
            };
            return this;
        };
    };
    juicer.compile = function(tpl2, options) {
        if (!options || options !== this.options) options = __creator(options, this.options);
        var that = this;
        var cacheStore = {
            get: function(tpl) {
                if (options.cachestore) return options.cachestore.get(tpl);
                return that.__cache[tpl];
            },
            set: function(tpl, val) {
                if (options.cachestore) return options.cachestore.set(tpl, val);
                return that.__cache[tpl] = val;
            }
        };
        try {
            var engine = cacheStore.get(tpl2) ? cacheStore.get(tpl2) : new this.template(this.options).parse(tpl2, options);
            if (!options || options.cache !== false) cacheStore.set(tpl2, engine);
            return engine;
        } catch (e) {
            __throw('Juicer Compile Exception: ' + e.message);
            return {
                render: function() {} // noop
            };
        }
    };
    juicer.to_html = function(tpl, data, options) {
        if (!options || options !== this.options) options = __creator(options, this.options);
        return this.compile(tpl, options).render(data, options._method);
    };
    // avoid memory leak for node.js
    if (typeof global !== 'undefined' && typeof window === 'undefined') juicer.set('cache', false);
    if (typeof document !== 'undefined' && document.body) juicer.documentHTML = document.body.innerHTML;
    typeof module !== 'undefined' && module.exports ? module.exports = juicer : this.juicer = juicer;
})();

},{}],"kO0m1":[function() {},{}],"gue9o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Footer", ()=>Footer
);
var _bind = require("../../../js/bind");
var _juicer = require("juicer");
var _juicerDefault = parcelHelpers.interopDefault(_juicer);
var _footerScss = require("./footer.scss");
const compiledTpl = _juicerDefault.default(require("./footer.shtml"));
class Footer {
    // 
    components = [];
    data = {};
    containerId = "";
    constructor(id){
        this.data = new _bind.BindObject(this);
        this.containerId = id;
        // 全局对象
        _bind.observeInsert(this);
    }
    init() {
        this.data.init({
            msg: "--",
            id: "856"
        });
        console.log("footer init");
    }
    viewRender() {
        if (!this.containerId) return;
        _bind.observeRender(this, this.containerId, compiledTpl, this.data.get());
    }
    printInfo(v) {
        console.log("v", v);
    }
}

},{"../../../js/bind":"e0Agw","juicer":"lkMaW","./footer.scss":"jLukM","./footer.shtml":"ehbZx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLukM":[function() {},{}],"ehbZx":[function(require,module,exports) {
module.exports = "<div class=\"view-footer\">\r\n  abc ABC\r\n\r\n  <span>${msg}</span>\r\n  {@each [1, 2] as item}\r\n  <i>${item},</i>\r\n  {@/each}\r\n  <button type=\"button\" onclick=\"this.printInfo('${id}')\">点击执行</button>\r\n</div>\r\n";

},{}],"h1n6Q":[function(require,module,exports) {
module.exports = "<div class=\"box\">\r\n  <!-- Left Bar -->\r\n  <div class=\"left\">\r\n    <div class=\"left__Favicon\">\r\n      <img src=\"assets/images/Favicon.png\" alt=\"\" />\r\n    </div>\r\n    <div class=\"left__box\">\r\n      <div\r\n        class=\"menu-item\"\r\n        onmouseover=\"this.showMenu('menuAdd')\"\r\n        onmouseleave=\"this.hideMenu()\"\r\n      >\r\n        <div class=\"menu-tag left__box-item Quickadd\">\r\n          <img src=\"assets/images/Quickadd.png\" alt=\"\" />\r\n        </div>\r\n        <div id=\"menuAdd\" class=\"menu-box menu-add\" style=\"display: none\">\r\n          <div class=\"li unpointer li-tl\">Quick Add</div>\r\n          <div class=\"li li-item\" onclick=\"this.onOpenAddForm('form1')\">\r\n            <span class=\"flex unpointer\"\r\n              ><i class=\"mt-icon reorder\"></i>Task</span\r\n            >\r\n          </div>\r\n          <div class=\"li li-item\" onclick=\"this.onOpenAddForm('form2')\">\r\n            <span class=\"flex unpointer\"\r\n              ><i class=\"mt-icon chrome_reader_mode\"></i>Reading</span\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"menu-item\"\r\n        onmouseover=\"this.showMenu('menuTimer')\"\r\n        onmouseleave=\"this.hideMenu()\"\r\n      >\r\n        <div class=\"menu-tag left__box-item Quicktimer\">\r\n          <img src=\"assets/images/Quicktimer.png\" alt=\"\" />\r\n        </div>\r\n        <div id=\"menuTimer\" class=\"menu-box menu-timer\" style=\"display: none\">\r\n          <div class=\"li unpointer li-tl\">Quick Timer</div>\r\n          <div class=\"li unpointer li-item\">\r\n            <span class=\"flex unpointer\"\r\n              ><i class=\"mt-icon timer\"></i>Stopwatch Timer</span\r\n            >\r\n          </div>\r\n          <div class=\"li unpointer li-item\">\r\n            <span class=\"flex unpointer\"\r\n              ><i class=\"mt-icon timelapse\"></i>Flow Time Tracker</span\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"left__user\">\r\n      <img src=\"assets/images/user.png\" alt=\"\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"right\">\r\n    <!-- Top Flow Time Tracker -->\r\n    <div class=\"right__header\">\r\n      <div class=\"right__header__title\">What are you working on?</div>\r\n      <div class=\"right__header__date\">00:22:33</div>\r\n      <div class=\"right__header__button\">\r\n        <img\r\n          class=\"right__header__button-InterrupSmall\"\r\n          src=\"assets/images/InterrupSmall.png\"\r\n          alt=\"\"\r\n        />\r\n        <img\r\n          class=\"right__header__button-Worktime\"\r\n          src=\"assets/images/Worktime.png\"\r\n          alt=\"\"\r\n        />\r\n        <img\r\n          class=\"right__header__button-BreaktimeSmall\"\r\n          src=\"assets/images/BreaktimeSmall.png\"\r\n          alt=\"\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"content__one\">\r\n        <!-- Reading——Reading List Creator -->\r\n        <div class=\"content__Reading\">\r\n          <div class=\"content__Reading__h\">\r\n            <div class=\"content__Reading__h__text\">Reading</div>\r\n            <img src=\"assets/images/Add.png\" class=\"content__Reading__h__Add\" />\r\n            <img\r\n              src=\"assets/images/Openlink.png\"\r\n              class=\"content__Reading__h__Openlink\"\r\n            />\r\n          </div>\r\n          <div class=\"content__Reading__c\">\r\n            <div class=\"content__Reading__c__h\">\r\n              <div class=\"content__Reading__c__h__text\">Group Name</div>\r\n              <img\r\n                src=\"assets/images/Add.png\"\r\n                class=\"content__Reading__c__h__Add\"\r\n              />\r\n              <img\r\n                src=\"assets/images/Openlink.png\"\r\n                class=\"content__Reading__c__h__Openlink\"\r\n              />\r\n            </div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n          </div>\r\n          <div class=\"content__Reading__c\">\r\n            <div class=\"content__Reading__c__h\">\r\n              <div class=\"content__Reading__c__h__text\">Group Name</div>\r\n              <img\r\n                src=\"assets/images/Add.png\"\r\n                class=\"content__Reading__c__h__Add\"\r\n              />\r\n              <img\r\n                src=\"assets/images/Openlink.png\"\r\n                class=\"content__Reading__c__h__Openlink\"\r\n              />\r\n            </div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n          </div>\r\n          <div class=\"content__Reading__c\">\r\n            <div class=\"content__Reading__c__h\">\r\n              <div class=\"content__Reading__c__h__text\">Group Name</div>\r\n              <img\r\n                src=\"assets/images/Add.png\"\r\n                class=\"content__Reading__c__h__Add\"\r\n              />\r\n              <img\r\n                src=\"assets/images/Openlink.png\"\r\n                class=\"content__Reading__c__h__Openlink\"\r\n              />\r\n            </div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n          </div>\r\n          <div class=\"content__Reading__c\">\r\n            <div class=\"content__Reading__c__h\">\r\n              <div class=\"content__Reading__c__h__text\">Group Name</div>\r\n              <img\r\n                src=\"assets/images/Add.png\"\r\n                class=\"content__Reading__c__h__Add\"\r\n              />\r\n              <img\r\n                src=\"assets/images/Openlink.png\"\r\n                class=\"content__Reading__c__h__Openlink\"\r\n              />\r\n            </div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n            <div class=\"content__Reading__c__box\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- To Do——Task List  -->\r\n        <div class=\"content__toDo\">\r\n          <div class=\"content__toDo__h\">\r\n            <div class=\"content__toDo__h__text\">To Do</div>\r\n            <img src=\"assets/images/Add.png\" class=\"content__toDo__h__Add\" />\r\n          </div>\r\n          <div class=\"content__toDo__box\">\r\n            <div class=\"content__toDo__box__one\">\r\n              Brainstorming\r\n              <img src=\"assets/images/High.png\" alt=\"\" />\r\n            </div>\r\n            <div class=\"content__toDo__box__two\">\r\n              <div class=\"content__toDo__box__two-item\">\r\n                <span class=\"content__toDo__box__two-item__title\"\r\n                  >Est. Time:</span\r\n                ><span>1h30m</span>\r\n              </div>\r\n              <div class=\"content__toDo__box__two-item\">\r\n                <span class=\"content__toDo__box__two-item__title\"\r\n                  >Due Date:</span\r\n                ><span>06/04/2022</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"content__toDo__box\">\r\n            <div class=\"content__toDo__box__one\">\r\n              Research\r\n              <img\r\n                class=\"content__two__boxs__title__lone\"\r\n                img\r\n                src=\"assets/images/Medium.png\"\r\n                alt=\"\"\r\n              />\r\n            </div>\r\n            <div class=\"content__toDo__box__two\">\r\n              <div class=\"content__toDo__box__two-item\">\r\n                <span class=\"content__toDo__box__two-item__title\"\r\n                  >Est. Time:</span\r\n                ><span>1h30m</span>\r\n              </div>\r\n              <div class=\"content__toDo__box__two-item\">\r\n                <span class=\"content__toDo__box__two-item__title\"\r\n                  >Due Date:</span\r\n                ><span>06/04/2022</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"content__toDo__box\">\r\n            <div class=\"content__toDo__box__one\">\r\n              Brainstorming\r\n              <img src=\"assets/images/Low.png\" alt=\"\" />\r\n            </div>\r\n            <div class=\"content__toDo__box__two\">\r\n              <div class=\"content__toDo__box__two-item\">\r\n                <span class=\"content__toDo__box__two-item__title\"\r\n                  >Est. Time:</span\r\n                ><span>1h30m</span>\r\n              </div>\r\n              <div class=\"content__toDo__box__two-item\">\r\n                <span class=\"content__toDo__box__two-item__title\"\r\n                  >Due Date:</span\r\n                ><span>06/04/2022</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"content__toDo__box\">\r\n            <div class=\"content__toDo__box__one\">\r\n              Brainstorming\r\n              <img src=\"assets/images/High.png\" alt=\"\" />\r\n            </div>\r\n            <div class=\"content__toDo__box__two\">\r\n              <div class=\"content__toDo__box__two-item\">\r\n                <span class=\"content__toDo__box__two-item__title\"\r\n                  >Est. Time:</span\r\n                ><span>1h30m</span>\r\n              </div>\r\n              <div class=\"content__toDo__box__two-item\">\r\n                <span class=\"content__toDo__box__two-item__title\"\r\n                  >Due Date:</span\r\n                ><span>06/04/2022</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- On Progress -->\r\n      <div class=\"content__two\">\r\n        <div class=\"content__two__h\">\r\n          <div class=\"content__two__h__text\">On Progress</div>\r\n        </div>\r\n        <div class=\"content__twos__box\">\r\n          <div class=\"content__two__box\">\r\n            <img\r\n              class=\"content__two__box__stop\"\r\n              src=\"assets/images/Stop.png\"\r\n              alt=\"\"\r\n            />\r\n            <div class=\"content__two__boxs__title\">\r\n              Research\r\n              <img\r\n                class=\"content__two__boxs__title__lone\"\r\n                src=\"assets/images/Medium.png\"\r\n                alt=\"\"\r\n              />\r\n            </div>\r\n            <div class=\"content__two__boxs\">\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Est. Time:</span\r\n                ><span>1h30m</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Due Date:</span\r\n                ><span>06/04/2022</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/Range.png\" alt=\"\" />\r\n                  17:55—18:40\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/WorktimeSmall.png\" alt=\"\" />\r\n                  45m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/BreaktimeSmall.png\" alt=\"\" />\r\n                  10m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/InterrupSmall.png\" alt=\"\" />\r\n                  <span class=\"content__two__boxs-items__yes\">yes</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"content__two__box\">\r\n            <img\r\n              class=\"content__two__box__stop\"\r\n              src=\"assets/images/Stop.png\"\r\n              alt=\"\"\r\n            />\r\n            <div class=\"content__two__boxs__title\">\r\n              Brainstorming\r\n              <img src=\"assets/images/Low.png\" alt=\"\" />\r\n            </div>\r\n            <div class=\"content__two__boxs\">\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Est. Time:</span\r\n                ><span>1h30m</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Due Date:</span\r\n                ><span>06/04/2022</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/Range.png\" alt=\"\" />\r\n                  17:55—18:40\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/WorktimeSmall.png\" alt=\"\" />\r\n                  45m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/BreaktimeSmall.png\" alt=\"\" />\r\n                  10m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/InterrupSmall.png\" alt=\"\" />\r\n                  <span class=\"content__two__boxs-items__yes\">yes</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"content__two__box\">\r\n            <img\r\n              class=\"content__two__box__stop\"\r\n              src=\"assets/images/Stop.png\"\r\n              alt=\"\"\r\n            />\r\n            <div class=\"content__two__boxs__title\">\r\n              Brainstorming\r\n              <img src=\"assets/images/High.png\" alt=\"\" />\r\n            </div>\r\n            <div class=\"content__two__boxs\">\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Est. Time:</span\r\n                ><span>1h30m</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Due Date:</span\r\n                ><span>06/04/2022</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/Range.png\" alt=\"\" />\r\n                  17:55—18:40\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/WorktimeSmall.png\" alt=\"\" />\r\n                  45m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/BreaktimeSmall.png\" alt=\"\" />\r\n                  10m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/InterrupSmall.png\" alt=\"\" />\r\n                  <span class=\"content__two__boxs-items__no\">no</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/Range.png\" alt=\"\" />\r\n                  17:55—18:40\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/WorktimeSmall.png\" alt=\"\" />\r\n                  45m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/BreaktimeSmall.png\" alt=\"\" />\r\n                  10m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/InterrupSmall.png\" alt=\"\" />\r\n                  <span class=\"content__two__boxs-items__yes\">yes</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Done-->\r\n      <div class=\"content__two content__three\">\r\n        <div class=\"content__three__h\">\r\n          <div class=\"content__three__h__text\">Done</div>\r\n        </div>\r\n        <div class=\"content__twos__box\">\r\n          <div class=\"content__two__box\">\r\n            <img\r\n              class=\"content__two__box__stop\"\r\n              src=\"assets/images/Stop.png\"\r\n              alt=\"\"\r\n            />\r\n            <div class=\"content__two__boxs__title\">\r\n              Brainstorming\r\n              <img src=\"assets/images/High.png\" alt=\"\" />\r\n            </div>\r\n            <div class=\"content__two__boxs\">\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Est. Time:</span\r\n                ><span>1h30m</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Due Date:</span\r\n                ><span>06/04/2022</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/Range.png\" alt=\"\" />\r\n                  17:55—18:40\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/WorktimeSmall.png\" alt=\"\" />\r\n                  45m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/BreaktimeSmall.png\" alt=\"\" />\r\n                  10m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/InterrupSmall.png\" alt=\"\" />\r\n                  <span class=\"content__two__boxs-items__no\">no</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/Range.png\" alt=\"\" />\r\n                  17:55—18:40\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/WorktimeSmall.png\" alt=\"\" />\r\n                  45m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/BreaktimeSmall.png\" alt=\"\" />\r\n                  10m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/InterrupSmall.png\" alt=\"\" />\r\n                  <span class=\"content__two__boxs-items__yes\">yes</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"content__two__box\">\r\n            <img\r\n              class=\"content__two__box__stop\"\r\n              src=\"assets/images/Stop.png\"\r\n              alt=\"\"\r\n            />\r\n            <div class=\"content__two__boxs__title\">\r\n              Research\r\n              <img\r\n                class=\"content__two__boxs__title__lone\"\r\n                src=\"assets/images/Medium.png\"\r\n                alt=\"\"\r\n              />\r\n            </div>\r\n            <div class=\"content__two__boxs\">\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Est. Time:</span\r\n                ><span>1h30m</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Due Date:</span\r\n                ><span>06/04/2022</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/Range.png\" alt=\"\" />\r\n                  17:55—18:40\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/WorktimeSmall.png\" alt=\"\" />\r\n                  45m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/BreaktimeSmall.png\" alt=\"\" />\r\n                  10m\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/InterrupSmall.png\" alt=\"\" />\r\n                  <span class=\"content__two__boxs-items__yes\">yes</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <!--  Stopwatch Timer > -->\r\n      <div class=\"footer__console\">\r\n        <div class=\"footer__console__time\">00:27:03</div>\r\n        <div class=\"footer__console__b\">\r\n          <img\r\n            class=\"footer__console__b__start\"\r\n            src=\"assets/images/Start.png\"\r\n            alt=\"\"\r\n          />\r\n          <img\r\n            class=\"footer__console__b__open\"\r\n            src=\"assets/images/Open.png\"\r\n            alt=\"\"\r\n          />\r\n          <img\r\n            class=\"footer__console__b__Return\"\r\n            src=\"assets/images/return.png\"\r\n            alt=\"\"\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Music Player > -->\r\n      <div class=\"footer__display\">\r\n        <img src=\"assets/images/Song.png\" class=\"footer__display__photo\" />\r\n        <div class=\"footer__display__info\">\r\n          <div class=\"footer__display__info__title\">Aferthought</div>\r\n          <div class=\"footer__display__info__singer\">Joji</div>\r\n        </div>\r\n        <div class=\"footer__display__center\">\r\n          <div class=\"footer__display__center__cons\">\r\n            <img src=\"assets/images/Last.png\" alt=\"\" />\r\n            <img src=\"assets/images/Play.png\" alt=\"\" />\r\n            <img src=\"assets/images/Next.png\" alt=\"\" />\r\n          </div>\r\n          <div class=\"footer__display__center__progressbar\">\r\n            <span>3:18</span>\r\n            <span class=\"lone\">\r\n              <span></span>\r\n            </span>\r\n            <span>4:09</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer__display__right\">\r\n          <img src=\"assets/images/Order.png\" alt=\"\" />\r\n          <img src=\"assets/images/Playlist.png\" alt=\"\" />\r\n          <img src=\"assets/images/Volume.png\" alt=\"\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"form1\" class=\"form-box wh100\" style=\"display: none\">\r\n  <div class=\"flex wh100\">\r\n    <div class=\"flex-1 h100\" onclick=\"this.hideFloatLayer()\"></div>\r\n    <div class=\"form-panel\">\r\n      <div class=\"form-title\">Add Task</div>\r\n      <div class=\"form-item\">\r\n        <label>Task name</label>\r\n        <input\r\n          value=\"${form1.name}\"\r\n          placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form1', 'name', this.value)\"\r\n        />\r\n      </div>\r\n      <div class=\"form-item\">\r\n        <label>Due date</label>\r\n        <input\r\n          value=\"${form1.dueDate}\"\r\n          placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form1', 'dueDate', this.value)\"\r\n        />\r\n      </div>\r\n      <div class=\"form-item\">\r\n        <label>Task priority</label>\r\n        <input\r\n          value=\"${form1.taskPriority}\"\r\n          placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form1', 'taskPriority', this.value)\"\r\n        />\r\n      </div>\r\n      <div class=\"form-item\">\r\n        <label>Eestimate time</label>\r\n        <input\r\n          value=\"${form1.estimateTime}\"\r\n          placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form1', 'estimateTime', this.value)\"\r\n        />\r\n      </div>\r\n      <div class=\"form-btns\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"outline me-4\"\r\n          onclick=\"this.hideFloatLayer()\"\r\n        >\r\n          Cancel\r\n        </button>\r\n        <button type=\"button\" onclick=\"this.onAddSave('form1')\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"form2\" class=\"form-box wh100 flex\" style=\"display: none\">\r\n  <div class=\"flex wh100\">\r\n    <div class=\"flex-1 h100\" onclick=\"this.hideFloatLayer()\"></div>\r\n    <div class=\"form-panel\">\r\n      <div class=\"form-title\">Add Reading</div>\r\n      <div class=\"form-item\">\r\n        <label>Name the reading</label>\r\n        <input\r\n          value=\"${form2.name}\"\r\n          placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form2', 'name', this.value)\"\r\n        />\r\n      </div>\r\n      <div class=\"form-item\">\r\n        <label>Read link</label>\r\n        <input\r\n          value=\"${form2.readLink}\"\r\n          placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form2', 'readLink', this.value)\"\r\n        />\r\n      </div>\r\n      <div class=\"form-item\">\r\n        <label>Project name</label>\r\n        <input\r\n          value=\"${form2.projectName}\"\r\n          placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form2', 'projectName', this.value)\"\r\n        />\r\n      </div>\r\n      <div class=\"form-btns\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"outline me-4\"\r\n          onclick=\"this.hideFloatLayer()\"\r\n        >\r\n          Cancel\r\n        </button>\r\n        <button type=\"button\" onclick=\"this.onAddSave('form2')\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

},{}],"aNzNG":[function() {},{}]},["3T0ci","7SwCM"], "7SwCM", "parcelRequire60da")

//# sourceMappingURL=index.f18de3a7.js.map
