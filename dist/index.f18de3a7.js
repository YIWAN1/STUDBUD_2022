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
                    console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
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
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
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
                return '<div>???? ' + hint + '</div>';
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
var _kvdbJs = require("./js/kvdb.js");
var _juicer = require("juicer");
var _juicerDefault = parcelHelpers.interopDefault(_juicer);
var _mainScss = require("./main.scss");
var _flowTimeJs = require("./js/flowTime.js");
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
    _juicerDefault.default.register("json", (v)=>JSON.stringify(v, null, " ")
    );
    _juicerDefault.default.register("flowDueDate", _flowTimeJs.flowDueDate);
    _juicerDefault.default.register("flowEstTime", _flowTimeJs.flowEstTime);
    _juicerDefault.default.register("flowDucation", _flowTimeJs.flowDucation);
    _juicerDefault.default.register("flowItemRestTime", _flowTimeJs.flowItemRestTime);
    _juicerDefault.default.register("flowItemWorkTime", _flowTimeJs.flowItemWorkTime);
    _juicerDefault.default.register("trackItemState", _flowTimeJs.trackItemState);
    _kvdbJs.kvdb.init();
    _bindJs.observeInit();
    const app = new _appJs.App("app");
    app.init();
    app.viewRender();
})();

},{"./app/app.js":"lBGMq","./js/bind.js":"e0Agw","./js/kvdb.js":"815IK","juicer":"lkMaW","./main.scss":"aNzNG","./js/flowTime.js":"79PXr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lBGMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App
);
var _bind = require("../js/bind");
var _juicer = require("juicer");
var _juicerDefault = parcelHelpers.interopDefault(_juicer);
var _appScss = require("./app.scss");
var _footer = require("./views/footer/footer");
var _kvdb = require("../js/kvdb");
var _utils = require("../js/utils");
var _define = require("../js/define");
const compiledTpl = _juicerDefault.default(require("./app.shtml"));
var _isBindEvent = false;
var _dragMaster = null;
// global
function sysDragMove(e) {
    if (_dragMaster) _dragMaster.dragMove(e);
}
function sysDragUp(e) {
    if (_dragMaster) _dragMaster.dragUp(e);
}
class App {
    playUrl = [];
    //
    components = [];
    componentFooter;
    prev = 0;
    data = {};
    trackerItem = null;
    containerId = "";
    dEle = null;
    timeCount = 0;
    trackerTimer = 0;
    playIndex = 0;
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
    // Page initialisation
    init() {
        this.data.init({
            readList: [],
            progressList: [],
            doneList: [],
            taskList: [],
            editTimeTracker: false,
            selectTrackerItem: null,
            form1: {
                id: "",
                name: "",
                dueDate: "",
                taskPriority: "",
                estimateTime: ""
            },
            form2: {
                id: "",
                name: "",
                readLink: "",
                projectName: ""
            },
            playUrl: [
                {
                    url: "../assets/mp3/Joji-BENEE-Afterthought(1).mp3",
                    name: "Afterthought",
                    imgUrl: "../assets/mp3/Cover.png",
                    singer: "Joji"
                },
                {
                    url: "../assets/mp3/Harry Styles - As It Was.mp3",
                    name: "As It Was",
                    imgUrl: "../assets/mp3/Cover1.JPG",
                    singer: "Harry Styles"
                },
                {
                    url: "../assets/mp3/??ZI???9M88 - B.O..mp3",
                    name: "B.O.",
                    imgUrl: "../assets/mp3/Cover2.JPG",
                    singer: "??ZI???9M88"
                }, 
            ]
        });
        this.getData();
    }
    // Get the basic data after initialisation
    async getData() {
        const taskList = await _kvdb.kvdb.get("taskList", []);
        const readList = await _kvdb.kvdb.get("readList", []);
        const progressList = await _kvdb.kvdb.get("progressList", []);
        const doneList = await _kvdb.kvdb.get("doneList", []);
        const selectTrackerItem = await _kvdb.kvdb.get("selectTrackerItem", null);
        const data = this.data.get();
        data["taskList"] = taskList ? taskList : [];
        data["readList"] = readList ? readList : [];
        data["progressList"] = progressList ? progressList : [];
        data["doneList"] = doneList ? doneList : [];
        data["selectTrackerItem"] = selectTrackerItem ? selectTrackerItem : null;
        this.data.set(data);
        this.updateSelectTrackerStatus();
    }
    // Redraw the page
    viewRender() {
        if (!this.containerId) return;
        _bind.observeRender(this, this.containerId, compiledTpl, this.data.get());
    }
    // Show Navigation secondary menu
    showMenu(id) {
        this.hideMenu();
        document.getElementById(id).style.display = "block";
    }
    // Hide Navigation secondary menu
    hideMenu() {
        const els = document.querySelectorAll(".menu-box");
        for (const item of els)item.style.display = "none";
    }
    // Fill Add Task data
    setFormValue(formName, key, value) {
        const data = this.data.get();
        if (!data[formName]) data[formName] = {};
        data[formName][key] = value;
        this.data.onlySet(data);
    }
    // open form panel
    onOpenAddForm(id) {
        this.hideFloatLayer();
        document.getElementById(id).style.display = "block";
    }
    hideFloatLayer() {
        const f1 = document.getElementById("form1");
        const f2 = document.getElementById("form2");
        f1.style.display = "none";
        f2.style.display = "none";
    }
    // Cancel form panel
    onCancel() {
        this.hideFloatLayer();
        this.data.onlyReset("form1");
        this.data.onlyReset("form2");
        this.viewRender();
    }
    // Add reading , task data
    onAddSave(formName) {
        const data = this.data.get();
        const formData = data[formName];
        if (formName == "form1" && formData.name == "") {
            alert("please input Task name");
            return;
        }
        var isAdd = false;
        if (!formData.id) {
            isAdd = true;
            formData.id = _utils.randId(); // set data id
            formData.trackers = []; // set data id
        }
        this.hideFloatLayer();
        if (formName == "form1") {
            if (!formData.form) formData.form = "taskList";
            this.editListItem(formData.form, formData, isAdd);
        } else if (formName == "form2") this.editListItem("readList", formData, isAdd);
        this.data.onlyReset("form1");
        this.data.onlyReset("form2");
        this.viewRender();
    }
    // save item data to list
    editListItem(listName, formData, isAdd, isDel) {
        if (!formData) return;
        if (isDel) isAdd = false;
        if (formData.id) isAdd = false;
        const data = this.data.get();
        var list = data[listName];
        if (!list) list = [];
        if (isAdd) {
            list.unshift(formData);
            if (list.length > 4) list.pop();
        } else if (isDel) {
            const arr = [];
            for(const k in list)if (list[k].id && list[k].id != formData.id) arr.push(list[k]);
            list = arr;
        } else {
            var hv = false;
            for(const k in list)if (list[k].id == formData.id) {
                list[k] = formData;
                hv = true;
            }
            if (!hv) list.unshift(formData);
        }
        data[listName] = list;
        this.data.onlySet(data);
        _kvdb.kvdb.set(listName, list);
    }
    // Start Timer
    startTimer() {
        this.timeCount = 0;
        document.getElementById("right__header__title").innerHTML = "What are you working on?";
        document.getElementById("footer__console__b__stop").style.display = "inline-block";
        document.getElementById("footer__console__b__open").style.display = "none";
        document.getElementById("footer__console__b__open").style.display = "none";
        this.timeCountRun();
    }
    // Zero timing
    timeCountRun() {
        if (this.timeCountId) {
            clearTimeout(this.timeCountId);
            this.timeCountId = 0;
        }
        document.getElementById("footer__console__time").innerHTML = _utils.formatTime(this.timeCount);
        this.timeCount++;
        this.timeCountId = setTimeout(()=>{
            this.timeCountRun();
        }, 1000);
    }
    //
    timeCountPause() {
        if (this.timeCountId) {
            clearTimeout(this.timeCountId);
            this.timeCountId = 0;
        }
    }
    // Reset timer data
    resetTimer() {
        console.log("resetTimer");
        this.timeCount = 0;
    }
    // Stop the timer
    stopTimer(istit) {
        if (this.timeCountId) {
            clearTimeout(this.timeCountId);
            this.timeCountId = 0;
        }
        this.timeCount = 0;
        document.getElementById("footer__console__time").innerHTML = _utils.formatTime(this.timeCount);
        document.getElementById("footer__console__b__stop").style.display = "none";
        document.getElementById("footer__console__b__open").style.display = "inline-block";
        if (istit) document.getElementById("right__header__title").innerHTML = "Write down what are you going there.";
    }
    // play music
    play() {
        const myaudio = document.getElementById("myaudio");
        const playUrl = this.data.get()["playUrl"];
        let musicName = document.getElementById("musicName");
        let musicImg = document.getElementById("musicImg");
        let singer = document.getElementById("singer");
        musicName.innerHTML = playUrl[this.playIndex].name;
        singer.innerHTML = playUrl[this.playIndex].singer;
        myaudio.setAttribute("src", playUrl[this.playIndex].url);
        musicImg.setAttribute("src", playUrl[this.playIndex].imgUrl);
        myaudio.play();
        document.getElementById("play").style.display = "none";
        document.getElementById("stop").style.display = "inline-block";
    }
    // stop music
    closePlay() {
        const myaudio = document.getElementById("myaudio");
        myaudio.pause();
        document.getElementById("stop").style.display = "none";
        document.getElementById("play").style.display = "inline-block";
    }
    // Previous song  Next song
    playNext(type) {
        const playUrl = this.data.get()["playUrl"];
        if (type == "+") {
            if (this.playIndex < playUrl.length - 1) this.playIndex++;
            else this.playIndex = 0;
        } else if (this.playIndex > 0) this.playIndex--;
        else this.playIndex = playUrl.length - 1;
        this.play();
    }
    // Show delete when right-click button
    onRightMenus(id, type) {
        const acac = this;
        event.preventDefault();
        const oM = document.getElementById("menus");
        const oEvt = event;
        oM.style.display = "block";
        oM.style.left = oEvt.clientX + "px";
        oM.style.top = oEvt.clientY + "px";
        const m = document.getElementById("menusDelete");
        m.setAttribute("data-id", id);
        m.setAttribute("data-type", type);
    }
    // Show delete when right-click
    onMenusDelete(e) {
        // console.log(type, id);
        e = e || window.event;
        const id = e.target.getAttribute("data-id");
        const type = e.target.getAttribute("data-type");
        const oM = document.getElementById("menus");
        oM.style.display = "none";
        this.editListItem(type, {
            id: id
        }, false, true);
        if (type == "progressList" || type == "doneList") {
            const selectTrackerItem = this.data.get("selectTrackerItem", null);
            if (selectTrackerItem && selectTrackerItem.id == id) this.cancelSelectTracker(window.event);
        }
        this.viewRender();
    }
    // Hide delete button
    hideRightMenuLayer() {
        document.getElementById("menus").style.display = "none";
    }
    // show Edite When double-clicking on a page card
    dblclick(type, listName, e, el, id, domId) {
        var now = new Date().getTime();
        _utils.stopEvent(e);
        if (!e.target) return;
        if (e.target.classList.contains("out-pointer")) return;
        var x = now - this.prev;
        var tmr;
        this.prev = now;
        if (x < 500) tmr = setTimeout(()=>{
            this.change(type, listName, id);
        }, 1);
        else {
            clearTimeout(tmr);
            this.dragDown(e, el, id, domId);
        }
    }
    // Edit data
    change(type, listName, id) {
        const data = this.data.get();
        const list = data[listName];
        let items = null;
        list.forEach((v, i)=>{
            if (v.id === id) items = v;
        });
        items.form = listName;
        console.log(items);
        if (!items) return;
        data[type] = items;
        this.data.onlySet(data);
        this.viewRender();
        console.log(type, items);
        console.log(this.data.get());
        this.onOpenAddForm(type);
    }
    // Page header input
    addFlowTimeTracker() {
        console.log(123);
        this.data.onlySet({
            editTimeTracker: true
        });
        this.cancelSelectTracker(window.event);
    }
    // Used in tandem with the previous method
    saveAddFlowTimeTracker() {
        const el = document.getElementById("timeTrackerName");
        const name = el ? el.value : "";
        if (!name || name.length <= 2) {
            alert("Please input valid name (length > 2)");
            return;
        }
        const data = new _define.FlowTimeTracker();
        data.id = _utils.randId();
        data.name = name;
        data.start = _utils.getUnixSeconds();
        this.editListItem("progressList", data, true);
        this.viewRender();
    }
    // Used in tandem with the previous method
    findOneTrackerItem(id) {
        if (!id) return null;
        var data = this.data.get();
        for(var i = 0; i < data.progressList.length; i++){
            var item = data.progressList[i];
            if (item.id == id) return item;
        }
        for(var i = 0; i < data.doneList.length; i++){
            var item = data.doneList[i];
            if (item.id == id) return item;
        }
        for(var i = 0; i < data.taskList.length; i++){
            var item = data.taskList[i];
            if (item.id == id) return item;
        }
        return null;
    }
    // Stop Card Timer
    startTrackerItem(e, id) {
        _utils.stopEvent(e);
        const selectItem = this.findOneTrackerItem(id);
        if (!selectItem) return;
        _kvdb.kvdb.set("selectTrackerItem", selectItem);
        this.data.onlySet({
            selectTrackerItem: selectItem
        });
        this.editFlowTimeTracker("new");
        this.viewRender();
        this.updateSelectTrackerStatus();
    }
    // with the next 3 methods forming the drag and drop
    getSelectTrackerLast() {
        const tracker = this.data.get("selectTrackerItem", null);
        if (!tracker || !tracker.trackers || tracker.trackers.length < 1) {
            if (this.trackerTimer) clearTimeout(this.trackerTimer);
            return null;
        }
        return tracker.trackers[tracker.trackers.length - 1];
    }
    updateSelectTrackerStatus() {
        const lastItem = this.getSelectTrackerLast();
        if (!lastItem) return;
        const rest = typeof lastItem.rest != "undefined" ? lastItem.rest : 0;
        const end = typeof lastItem.end != "undefined" ? lastItem.end : 0;
        if (end > 0) {
            if (this.trackerTimer) clearTimeout(this.trackerTimer);
            const el = document.getElementById("trackerTimer");
            if (el) el.innerHTML = _utils.formatTime(0);
            return;
        }
        if (rest > 0) this.doUpdateTrackerIme(rest, lastItem.end);
        else this.doUpdateTrackerIme(lastItem.start, rest);
    }
    doUpdateTrackerIme(start, end) {
        var over = end;
        if (end < 1) over = _utils.getUnixSeconds();
        const s = over - start;
        document.getElementById("trackerTimer").innerHTML = _utils.formatTime(s);
        if (this.trackerTimer) clearTimeout(this.trackerTimer);
        this.trackerTimer = setTimeout(()=>{
            this.doUpdateTrackerIme(start, end);
        }, 300);
    }
    cancelSelectTracker(e) {
        _utils.stopEvent(e);
        this.data.onlySet({
            selectTrackerItem: null
        });
        _kvdb.kvdb.del("selectTrackerItem");
        this.viewRender();
        this.editFlowTimeTracker("stop");
        this.updateSelectTrackerStatus();
    }
    // Events for the three buttons in the header
    editFlowTimeTracker(type) {
        const tracker = this.data.get("selectTrackerItem", null);
        if (!tracker) {
            if (this.trackerTimer) clearTimeout(this.trackerTimer);
            return null;
        }
        let lastItem;
        if (!tracker.trackers || tracker.trackers.length < 1) {
            tracker.trackers = [];
            lastItem = new _define.FlowTimeTrackerItem();
            lastItem.start = 1;
            lastItem.rest = lastItem.start;
            lastItem.end = lastItem.rest;
        } else lastItem = tracker.trackers[tracker.trackers.length - 1];
        const rest = lastItem.rest ? lastItem.rest : 0;
        if (rest > 0) {
            if (type == "rest") return;
            else if (type == "new") {
                if (lastItem.end < 1) lastItem.end = _utils.getUnixSeconds();
                const item = new _define.FlowTimeTrackerItem();
                item.start = _utils.getUnixSeconds();
                tracker.trackers.push(item);
            } else if (type == "break" || type == "stop") {
                if (lastItem.end < 1) {
                    lastItem.end = _utils.getUnixSeconds();
                    lastItem.break = type == "break" ? true : false;
                }
            }
        } else {
            if (type == "rest") lastItem.rest = _utils.getUnixSeconds();
            else if (type == "break" || type == "new") {
                if (lastItem.end < 1) {
                    lastItem.rest = _utils.getUnixSeconds();
                    lastItem.end = lastItem.rest;
                    lastItem.break = type == "break" ? true : false;
                }
                if (type == "new") {
                    const item = new _define.FlowTimeTrackerItem();
                    item.start = _utils.getUnixSeconds();
                    tracker.trackers.push(item);
                }
            } else if (type == "stop") {
                if (lastItem.end < 1) {
                    lastItem.rest = _utils.getUnixSeconds();
                    lastItem.end = lastItem.rest;
                }
            }
        }
        _kvdb.kvdb.set("selectTrackerItem", tracker);
        this.data.onlySet({
            selectTrackerItem: tracker
        });
        this.editListItem("progressList", tracker, false);
        if (type == "break") {
            this.cancelSelectTracker(window.event);
            return;
        }
        this.viewRender();
        this.updateSelectTrackerStatus();
    }
    setFlowTrackerDone(id, domId) {
        const tracker = this.findOneTrackerItem(id);
        if (!tracker) return;
        if (domId == "doneListArae") {
            tracker.end = _utils.getUnixSeconds();
            for(var i = 0; i < tracker.trackers.length; i++){
                const item = tracker.trackers[i];
                if (item.end > 0) {
                    if (item.rest < 1) item.rest = item.end;
                } else {
                    item.end = tracker.end;
                    if (item.rest < 1) item.rest = item.end;
                }
            }
            this.editListItem("progressList", tracker, false, true);
            this.editListItem("doneList", tracker, true);
            const selectTrackerItem = this.data.get("selectTrackerItem", null);
            if (selectTrackerItem && selectTrackerItem.id == tracker.id) this.cancelSelectTracker(window.event);
            else this.viewRender();
        } else {
            this.editListItem("taskList", tracker, false, true);
            this.editListItem("progressList", tracker, true);
            this.viewRender();
        }
    }
    /***************************************************** */ /******************* Drage layer ********************* */ /***************************************************** */ dragDown(e, el, id, domId) {
        e = e || window.event;
        _dragMaster = this;
        if (!_isBindEvent) {
            document.body.addEventListener("mousemove", sysDragMove);
            document.body.addEventListener("mouseup", sysDragUp);
            _isBindEvent = true;
        }
        // this.dEle = el;
        const w = el.width;
        const h = el.height;
        //const mm = new HTMLAnchorElement();
        //mm.classList.add(draging)
        const cel = el.cloneNode(true);
        cel.classList.add("draging");
        cel.style.opacity = "0.6";
        cel.style.position = "fixed";
        cel.style.left = e.clientX - e.layerX + "px";
        cel.style.top = e.clientY - e.layerY + "px";
        cel.style.width = el.width + "px";
        cel.style.height = el.height + "px";
        cel.style.zIndex = "100";
        cel.setAttribute("data-layer-x", e.layerX);
        cel.setAttribute("data-layer-y", e.layerY);
        cel.setAttribute("data-id", id);
        cel.setAttribute("dom-id", domId);
        this.dEle = cel;
        document.body.appendChild(this.dEle);
    }
    dragMove(e) {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        e = e || window.event;
        const aimBox = document.getElementById(this.dEle.getAttribute("dom-id"));
        const inArea = this.dragInArea(e, aimBox);
        if (inArea) aimBox.classList.add("drag-status-in");
        if (this.dEle) {
            const lx = this.dEle.getAttribute("data-layer-x");
            const ly = this.dEle.getAttribute("data-layer-y");
            this.dEle.style.left = e.clientX - lx + "px";
            this.dEle.style.top = e.clientY - ly + "px";
        }
    }
    dragUp(e) {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        const aimBox = document.getElementById(this.dEle.getAttribute("dom-id"));
        const inArea = this.dragInArea(e, aimBox);
        aimBox.classList.remove("drag-status-in");
        console.log("dragUp", inArea);
        document.body.removeEventListener("mousemove", sysDragMove);
        document.body.removeEventListener("mouseup", sysDragUp);
        _isBindEvent = false;
        _dragMaster = null;
        if (this.dEle) {
            const id = this.dEle.getAttribute("data-id");
            document.body.removeChild(this.dEle);
            let domId = this.dEle.getAttribute("dom-id");
            this.dEle = null;
            if (inArea) this.setFlowTrackerDone(id, domId);
        }
    }
    dragInArea(e, aimBox) {
        if (!e || !aimBox) return;
        const ex = e.clientX;
        const ey = e.clientY;
        if (ex >= aimBox.offsetLeft && ex <= aimBox.offsetLeft + aimBox.offsetWidth && ey >= aimBox.offsetTop && ey <= aimBox.offsetTop + aimBox.offsetHeight) return true;
        return false;
    }
    // Music player progress
    updateProgress(ap) {
        const el = document.getElementById("audioCur");
        const tmel1 = document.getElementById("audioCurTime");
        const tmel2 = document.getElementById("audioTotalTime");
        const pos = ap.currentTime / ap.duration;
        const p = parseInt(Math.round(pos * 1000.0) / 10.0) % 100;
        el.style.display = "inline-block";
        el.style.width = p + "%";
        tmel1.innerHTML = _utils.formatTime2(ap.currentTime);
        tmel2.innerHTML = _utils.formatTime2(ap.duration);
    }
    //  Open all reading links
    openlink() {
        var els = document.querySelectorAll("#readList a");
        console.log(els);
        for(let i = 0; i < els.length; i++){
            // v.onclick()
            let url = els[i].href;
            setTimeout(()=>{
                window.open(url, "_blank");
            }, 500);
        }
    }
}

},{"../js/bind":"e0Agw","juicer":"lkMaW","./app.scss":"kO0m1","./views/footer/footer":"gue9o","../js/kvdb":"815IK","../js/utils":"e8TO1","../js/define":"g467j","./app.shtml":"h1n6Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0Agw":[function(require,module,exports) {
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
    /*
   * function (key?: string, defaultValue?: any)
   */ get() {
        if (arguments.length > 0 && arguments[0]) {
            if (arguments.length > 1) {
                if (typeof this._val[arguments[0]] == "undefined") return arguments[1];
                return this._clone(this._val[arguments[0]]);
            }
            return this._clone(this._val[arguments[0]]);
        }
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
    // console.log('c', c, tpl, data);
    if (!c) {
        console.log("template parse error in .shtml file");
        return;
    }
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
        // Global objects
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
module.exports = "<div class=\"view-footer\">\n  abc ABC\n\n  <span>${msg}</span>\n  {@each [1, 2] as item}\n  <i>${item},</i>\n  {@/each}\n  <button type=\"button\" onclick=\"this.printInfo('${id}')\">Click to execute</button>\n</div>\n";

},{}],"815IK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "kvdb", ()=>kvdb
);
var _localforage = require("localforage");
class KVDB {
    name = "com.default.app";
    version = "v0..1.0";
    constructor(){}
    /********** Storage *********** */ init(name) {
        if (!name) name = this.name;
        _localforage.config({
            name: name,
            storeName: (name + "_" + this.version).replace(/[^a-zA-Z0-9]+/, "_")
        });
    }
    async remove(key, fn) {
        if (!this.canStorage()) {
            if (fn) fn(false);
            return;
        }
        await _localforage.removeItem(key);
        if (fn) fn(true);
    }
    canStorage() {
        return !!_localforage;
    }
    async set(key, pval) {
        if (!this.canStorage()) return new Promise((resolve)=>{
            resolve(null);
        });
        return new Promise((resolve)=>{
            const now = parseInt("" + Math.floor(new Date().getTime() / 1000), 10);
            _localforage.setItem(key, {
                __AUTO_TIME_TAG: now,
                val: pval
            }).then((data)=>{
                if (data) resolve(data.val);
                else resolve(null);
            }).catch(()=>{
                resolve(null);
            });
        });
    }
    async get(key, def) {
        if (!this.canStorage()) return Promise.resolve(def ? def : null);
        return new Promise((resolve)=>{
            _localforage.getItem(key).then((data)=>{
                if (data) resolve(data.val);
                else resolve(def ? def : null);
            }).catch(()=>{
                resolve(def ? def : null);
            });
        });
    }
    async del(key) {
        if (!this.canStorage()) return new Promise((resolve)=>{
            resolve(null);
        });
        return new Promise((resolve)=>{
            _localforage.removeItem(key).then((data)=>{
                resolve(null);
            }).catch(()=>{
                resolve(null);
            });
        });
    }
    clearAll() {
        if (_localforage) _localforage.clear();
    }
    async getWithTimeoutStrict(key, timeoutSecond, def) {
        if (!this.canStorage()) return new Promise((resolve)=>{
            resolve({
                isTimeout: true,
                data: def ? def : null
            });
        });
        return new Promise((resolve)=>{
            _localforage.getItem(key).then((data)=>{
                const now = parseInt("" + Math.floor(new Date().getTime() / 1000), 10);
                if (!data || !data.__AUTO_TIME_TAG || data.__AUTO_TIME_TAG > now || now - data.__AUTO_TIME_TAG > timeoutSecond) {
                    resolve({
                        isTimeout: true,
                        data: def ? def : null
                    });
                    return;
                }
                resolve({
                    isTimeout: false,
                    data: data.val
                });
            }).catch(()=>{
                resolve({
                    isTimeout: true,
                    data: def ? def : null
                });
            });
        });
    }
    async getWithTimeout(key, timeoutSecond, def) {
        const val = await this.getWithTimeoutStrict(key, timeoutSecond, def);
        return Promise.resolve(val.data);
    }
}
const kvdb = new KVDB();

},{"localforage":"cTE28","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTE28":[function(require,module,exports) {
var global = arguments[3];
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/ (function(f) {
    var g;
    module.exports = f();
})(function() {
    var define, module1, exports;
    return (function e1(t, n1, r) {
        function s(o, u) {
            if (!n1[o]) {
                if (!t[o]) {
                    var a = undefined;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f;
                }
                var l = n1[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e);
                }, l, l.exports, e1, t, n1, r);
            }
            return n1[o].exports;
        }
        var i = undefined;
        for(var o1 = 0; o1 < r.length; o1++)s(r[o1]);
        return s;
    })({
        1: [
            function(_dereq_, module, exports) {
                (function(global1) {
                    var Mutation = global1.MutationObserver || global1.WebKitMutationObserver;
                    var scheduleDrain;
                    if (Mutation) {
                        var called = 0;
                        var observer = new Mutation(nextTick);
                        var element = global1.document.createTextNode('');
                        observer.observe(element, {
                            characterData: true
                        });
                        scheduleDrain = function() {
                            element.data = called = ++called % 2;
                        };
                    } else if (!global1.setImmediate && typeof global1.MessageChannel !== 'undefined') {
                        var channel = new global1.MessageChannel();
                        channel.port1.onmessage = nextTick;
                        scheduleDrain = function() {
                            channel.port2.postMessage(0);
                        };
                    } else if ('document' in global1 && 'onreadystatechange' in global1.document.createElement('script')) scheduleDrain = function() {
                        // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                        // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                        var scriptEl = global1.document.createElement('script');
                        scriptEl.onreadystatechange = function() {
                            nextTick();
                            scriptEl.onreadystatechange = null;
                            scriptEl.parentNode.removeChild(scriptEl);
                            scriptEl = null;
                        };
                        global1.document.documentElement.appendChild(scriptEl);
                    };
                    else scheduleDrain = function() {
                        setTimeout(nextTick, 0);
                    };
                    var draining;
                    var queue = [];
                    //named nextTick for less confusing stack traces
                    function nextTick() {
                        draining = true;
                        var i, oldQueue;
                        var len = queue.length;
                        while(len){
                            oldQueue = queue;
                            queue = [];
                            i = -1;
                            while(++i < len)oldQueue[i]();
                            len = queue.length;
                        }
                        draining = false;
                    }
                    module.exports = immediate;
                    function immediate(task) {
                        if (queue.push(task) === 1 && !draining) scheduleDrain();
                    }
                }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
            },
            {}
        ],
        2: [
            function(_dereq_, module, exports) {
                'use strict';
                var immediate = _dereq_(1);
                /* istanbul ignore next */ function INTERNAL() {}
                var handlers = {};
                var REJECTED = [
                    'REJECTED'
                ];
                var FULFILLED = [
                    'FULFILLED'
                ];
                var PENDING = [
                    'PENDING'
                ];
                module.exports = Promise;
                function Promise(resolver) {
                    if (typeof resolver !== 'function') throw new TypeError('resolver must be a function');
                    this.state = PENDING;
                    this.queue = [];
                    this.outcome = void 0;
                    if (resolver !== INTERNAL) safelyResolveThenable(this, resolver);
                }
                Promise.prototype["catch"] = function(onRejected) {
                    return this.then(null, onRejected);
                };
                Promise.prototype.then = function(onFulfilled, onRejected) {
                    if (typeof onFulfilled !== 'function' && this.state === FULFILLED || typeof onRejected !== 'function' && this.state === REJECTED) return this;
                    var promise = new this.constructor(INTERNAL);
                    if (this.state !== PENDING) {
                        var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
                        unwrap(promise, resolver, this.outcome);
                    } else this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
                    return promise;
                };
                function QueueItem(promise, onFulfilled, onRejected) {
                    this.promise = promise;
                    if (typeof onFulfilled === 'function') {
                        this.onFulfilled = onFulfilled;
                        this.callFulfilled = this.otherCallFulfilled;
                    }
                    if (typeof onRejected === 'function') {
                        this.onRejected = onRejected;
                        this.callRejected = this.otherCallRejected;
                    }
                }
                QueueItem.prototype.callFulfilled = function(value) {
                    handlers.resolve(this.promise, value);
                };
                QueueItem.prototype.otherCallFulfilled = function(value) {
                    unwrap(this.promise, this.onFulfilled, value);
                };
                QueueItem.prototype.callRejected = function(value) {
                    handlers.reject(this.promise, value);
                };
                QueueItem.prototype.otherCallRejected = function(value) {
                    unwrap(this.promise, this.onRejected, value);
                };
                function unwrap(promise, func, value) {
                    immediate(function() {
                        var returnValue;
                        try {
                            returnValue = func(value);
                        } catch (e) {
                            return handlers.reject(promise, e);
                        }
                        if (returnValue === promise) handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
                        else handlers.resolve(promise, returnValue);
                    });
                }
                handlers.resolve = function(self, value) {
                    var result = tryCatch(getThen, value);
                    if (result.status === 'error') return handlers.reject(self, result.value);
                    var thenable = result.value;
                    if (thenable) safelyResolveThenable(self, thenable);
                    else {
                        self.state = FULFILLED;
                        self.outcome = value;
                        var i = -1;
                        var len = self.queue.length;
                        while(++i < len)self.queue[i].callFulfilled(value);
                    }
                    return self;
                };
                handlers.reject = function(self, error) {
                    self.state = REJECTED;
                    self.outcome = error;
                    var i = -1;
                    var len = self.queue.length;
                    while(++i < len)self.queue[i].callRejected(error);
                    return self;
                };
                function getThen(obj) {
                    // Make sure we only access the accessor once as required by the spec
                    var then = obj && obj.then;
                    if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') return function appyThen() {
                        then.apply(obj, arguments);
                    };
                }
                function safelyResolveThenable(self, thenable) {
                    // Either fulfill, reject or reject with error
                    var called = false;
                    function onError(value) {
                        if (called) return;
                        called = true;
                        handlers.reject(self, value);
                    }
                    function onSuccess(value) {
                        if (called) return;
                        called = true;
                        handlers.resolve(self, value);
                    }
                    function tryToUnwrap() {
                        thenable(onSuccess, onError);
                    }
                    var result = tryCatch(tryToUnwrap);
                    if (result.status === 'error') onError(result.value);
                }
                function tryCatch(func, value) {
                    var out = {};
                    try {
                        out.value = func(value);
                        out.status = 'success';
                    } catch (e) {
                        out.status = 'error';
                        out.value = e;
                    }
                    return out;
                }
                Promise.resolve = resolve;
                function resolve(value) {
                    if (value instanceof this) return value;
                    return handlers.resolve(new this(INTERNAL), value);
                }
                Promise.reject = reject;
                function reject(reason) {
                    var promise = new this(INTERNAL);
                    return handlers.reject(promise, reason);
                }
                Promise.all = all;
                function all(iterable) {
                    var self = this;
                    if (Object.prototype.toString.call(iterable) !== '[object Array]') return this.reject(new TypeError('must be an array'));
                    var len = iterable.length;
                    var called = false;
                    if (!len) return this.resolve([]);
                    var values = new Array(len);
                    var resolved = 0;
                    var i1 = -1;
                    var promise = new this(INTERNAL);
                    while(++i1 < len)allResolver(iterable[i1], i1);
                    return promise;
                    function allResolver(value, i) {
                        self.resolve(value).then(resolveFromAll, function(error) {
                            if (!called) {
                                called = true;
                                handlers.reject(promise, error);
                            }
                        });
                        function resolveFromAll(outValue) {
                            values[i] = outValue;
                            if (++resolved === len && !called) {
                                called = true;
                                handlers.resolve(promise, values);
                            }
                        }
                    }
                }
                Promise.race = race;
                function race(iterable) {
                    var self = this;
                    if (Object.prototype.toString.call(iterable) !== '[object Array]') return this.reject(new TypeError('must be an array'));
                    var len = iterable.length;
                    var called = false;
                    if (!len) return this.resolve([]);
                    var i = -1;
                    var promise = new this(INTERNAL);
                    while(++i < len)resolver(iterable[i]);
                    return promise;
                    function resolver(value) {
                        self.resolve(value).then(function(response) {
                            if (!called) {
                                called = true;
                                handlers.resolve(promise, response);
                            }
                        }, function(error) {
                            if (!called) {
                                called = true;
                                handlers.reject(promise, error);
                            }
                        });
                    }
                }
            },
            {
                "1": 1
            }
        ],
        3: [
            function(_dereq_, module, exports) {
                (function(global2) {
                    if (typeof global2.Promise !== 'function') global2.Promise = _dereq_(2);
                }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
            },
            {
                "2": 2
            }
        ],
        4: [
            function(_dereq_, module, exports) {
                'use strict';
                var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function getIDB() {
                    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */ try {
                        if (typeof indexedDB !== 'undefined') return indexedDB;
                        if (typeof webkitIndexedDB !== 'undefined') return webkitIndexedDB;
                        if (typeof mozIndexedDB !== 'undefined') return mozIndexedDB;
                        if (typeof OIndexedDB !== 'undefined') return OIndexedDB;
                        if (typeof msIndexedDB !== 'undefined') return msIndexedDB;
                    } catch (e) {
                        return;
                    }
                }
                var idb1 = getIDB();
                function isIndexedDBValid() {
                    try {
                        // Initialize IndexedDB; fall back to vendor-prefixed versions
                        // if needed.
                        if (!idb1 || !idb1.open) return false;
                        // We mimic PouchDB here;
                        //
                        // We test for openDatabase because IE Mobile identifies itself
                        // as Safari. Oh the lulz...
                        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
                        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;
                        // Safari <10.1 does not meet our requirements for IDB support
                        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
                        // Safari 10.1 shipped with fetch, we can use that to detect it.
                        // Note: this creates issues with `window.fetch` polyfills and
                        // overrides; see:
                        // https://github.com/localForage/localForage/issues/856
                        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' && // some outdated implementations of IDB that appear on Samsung
                        // and HTC Android devices <4.4 are missing IDBKeyRange
                        // See: https://github.com/mozilla/localForage/issues/128
                        // See: https://github.com/mozilla/localForage/issues/272
                        typeof IDBKeyRange !== 'undefined';
                    } catch (e) {
                        return false;
                    }
                }
                // Abstracts constructing a Blob object, so it also works in older
                // browsers that don't support the native Blob constructor. (i.e.
                // old QtWebKit versions, at least).
                // Abstracts constructing a Blob object, so it also works in older
                // browsers that don't support the native Blob constructor. (i.e.
                // old QtWebKit versions, at least).
                function createBlob(parts, properties) {
                    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */ parts = parts || [];
                    properties = properties || {};
                    try {
                        return new Blob(parts, properties);
                    } catch (e) {
                        if (e.name !== 'TypeError') throw e;
                        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
                        var builder = new Builder();
                        for(var i = 0; i < parts.length; i += 1)builder.append(parts[i]);
                        return builder.getBlob(properties.type);
                    }
                }
                // This is CommonJS because lie is an external dependency, so Rollup
                // can just ignore it.
                if (typeof Promise === 'undefined') // In the "nopromises" build this will just throw if you don't have
                // a global promise object, but it would throw anyway later.
                _dereq_(3);
                var Promise$1 = Promise;
                function executeCallback(promise, callback) {
                    if (callback) promise.then(function(result) {
                        callback(null, result);
                    }, function(error) {
                        callback(error);
                    });
                }
                function executeTwoCallbacks(promise, callback, errorCallback) {
                    if (typeof callback === 'function') promise.then(callback);
                    if (typeof errorCallback === 'function') promise["catch"](errorCallback);
                }
                function normalizeKey(key) {
                    // Cast the key to a string, as that's all we can set as a key.
                    if (typeof key !== 'string') {
                        console.warn(key + ' used as a key, but it is not a string.');
                        key = String(key);
                    }
                    return key;
                }
                function getCallback() {
                    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') return arguments[arguments.length - 1];
                }
                // Some code originally from async_storage.js in
                // [Gaia](https://github.com/mozilla-b2g/gaia).
                var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
                var supportsBlobs = void 0;
                var dbContexts = {};
                var toString = Object.prototype.toString;
                // Transaction Modes
                var READ_ONLY = 'readonly';
                var READ_WRITE = 'readwrite';
                // Transform a binary string to an array buffer, because otherwise
                // weird stuff happens when you try to work with the binary string directly.
                // It is known.
                // From http://stackoverflow.com/questions/14967647/ (continues on next line)
                // encode-decode-image-with-base64-breaks-image (2013-04-21)
                function _binStringToArrayBuffer(bin) {
                    var length = bin.length;
                    var buf = new ArrayBuffer(length);
                    var arr = new Uint8Array(buf);
                    for(var i = 0; i < length; i++)arr[i] = bin.charCodeAt(i);
                    return buf;
                }
                //
                // Blobs are not supported in all versions of IndexedDB, notably
                // Chrome <37 and Android <5. In those versions, storing a blob will throw.
                //
                // Various other blob bugs exist in Chrome v37-42 (inclusive).
                // Detecting them is expensive and confusing to users, and Chrome 37-42
                // is at very low usage worldwide, so we do a hacky userAgent check instead.
                //
                // content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
                // 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
                // FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
                //
                // Code borrowed from PouchDB. See:
                // https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
                //
                function _checkBlobSupportWithoutCaching(idb) {
                    return new Promise$1(function(resolve) {
                        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
                        var blob = createBlob([
                            ''
                        ]);
                        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');
                        txn.onabort = function(e) {
                            // If the transaction aborts now its due to not being able to
                            // write to the database, likely due to the disk being full
                            e.preventDefault();
                            e.stopPropagation();
                            resolve(false);
                        };
                        txn.oncomplete = function() {
                            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
                            var matchedEdge = navigator.userAgent.match(/Edge\//);
                            // MS Edge pretends to be Chrome 42:
                            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
                            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
                        };
                    })["catch"](function() {
                        return false; // error, so assume unsupported
                    });
                }
                function _checkBlobSupport(idb) {
                    if (typeof supportsBlobs === 'boolean') return Promise$1.resolve(supportsBlobs);
                    return _checkBlobSupportWithoutCaching(idb).then(function(value) {
                        supportsBlobs = value;
                        return supportsBlobs;
                    });
                }
                function _deferReadiness(dbInfo) {
                    var dbContext = dbContexts[dbInfo.name];
                    // Create a deferred object representing the current database operation.
                    var deferredOperation = {};
                    deferredOperation.promise = new Promise$1(function(resolve, reject) {
                        deferredOperation.resolve = resolve;
                        deferredOperation.reject = reject;
                    });
                    // Enqueue the deferred operation.
                    dbContext.deferredOperations.push(deferredOperation);
                    // Chain its promise to the database readiness.
                    if (!dbContext.dbReady) dbContext.dbReady = deferredOperation.promise;
                    else dbContext.dbReady = dbContext.dbReady.then(function() {
                        return deferredOperation.promise;
                    });
                }
                function _advanceReadiness(dbInfo) {
                    var dbContext = dbContexts[dbInfo.name];
                    // Dequeue a deferred operation.
                    var deferredOperation = dbContext.deferredOperations.pop();
                    // Resolve its promise (which is part of the database readiness
                    // chain of promises).
                    if (deferredOperation) {
                        deferredOperation.resolve();
                        return deferredOperation.promise;
                    }
                }
                function _rejectReadiness(dbInfo, err) {
                    var dbContext = dbContexts[dbInfo.name];
                    // Dequeue a deferred operation.
                    var deferredOperation = dbContext.deferredOperations.pop();
                    // Reject its promise (which is part of the database readiness
                    // chain of promises).
                    if (deferredOperation) {
                        deferredOperation.reject(err);
                        return deferredOperation.promise;
                    }
                }
                function _getConnection(dbInfo, upgradeNeeded) {
                    return new Promise$1(function(resolve, reject) {
                        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
                        if (dbInfo.db) {
                            if (upgradeNeeded) {
                                _deferReadiness(dbInfo);
                                dbInfo.db.close();
                            } else return resolve(dbInfo.db);
                        }
                        var dbArgs = [
                            dbInfo.name
                        ];
                        if (upgradeNeeded) dbArgs.push(dbInfo.version);
                        var openreq = idb1.open.apply(idb1, dbArgs);
                        if (upgradeNeeded) openreq.onupgradeneeded = function(e) {
                            var db = openreq.result;
                            try {
                                db.createObjectStore(dbInfo.storeName);
                                if (e.oldVersion <= 1) // Added when support for blob shims was added
                                db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                            } catch (ex) {
                                if (ex.name === 'ConstraintError') console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                                else throw ex;
                            }
                        };
                        openreq.onerror = function(e) {
                            e.preventDefault();
                            reject(openreq.error);
                        };
                        openreq.onsuccess = function() {
                            var db = openreq.result;
                            db.onversionchange = function(e) {
                                // Triggered when the database is modified (e.g. adding an objectStore) or
                                // deleted (even when initiated by other sessions in different tabs).
                                // Closing the connection here prevents those operations from being blocked.
                                // If the database is accessed again later by this instance, the connection
                                // will be reopened or the database recreated as needed.
                                e.target.close();
                            };
                            resolve(db);
                            _advanceReadiness(dbInfo);
                        };
                    });
                }
                function _getOriginalConnection(dbInfo) {
                    return _getConnection(dbInfo, false);
                }
                function _getUpgradedConnection(dbInfo) {
                    return _getConnection(dbInfo, true);
                }
                function _isUpgradeNeeded(dbInfo, defaultVersion) {
                    if (!dbInfo.db) return true;
                    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
                    var isDowngrade = dbInfo.version < dbInfo.db.version;
                    var isUpgrade = dbInfo.version > dbInfo.db.version;
                    if (isDowngrade) {
                        // If the version is not the default one
                        // then warn for impossible downgrade.
                        if (dbInfo.version !== defaultVersion) console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
                        // Align the versions to prevent errors.
                        dbInfo.version = dbInfo.db.version;
                    }
                    if (isUpgrade || isNewStore) {
                        // If the store is new then increment the version (if needed).
                        // This will trigger an "upgradeneeded" event which is required
                        // for creating a store.
                        if (isNewStore) {
                            var incVersion = dbInfo.db.version + 1;
                            if (incVersion > dbInfo.version) dbInfo.version = incVersion;
                        }
                        return true;
                    }
                    return false;
                }
                // encode a blob for indexeddb engines that don't support blobs
                function _encodeBlob(blob) {
                    return new Promise$1(function(resolve, reject) {
                        var reader = new FileReader();
                        reader.onerror = reject;
                        reader.onloadend = function(e) {
                            var base64 = btoa(e.target.result || '');
                            resolve({
                                __local_forage_encoded_blob: true,
                                data: base64,
                                type: blob.type
                            });
                        };
                        reader.readAsBinaryString(blob);
                    });
                }
                // decode an encoded blob
                function _decodeBlob(encodedBlob) {
                    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
                    return createBlob([
                        arrayBuff
                    ], {
                        type: encodedBlob.type
                    });
                }
                // is this one of our fancy encoded blobs?
                function _isEncodedBlob(value) {
                    return value && value.__local_forage_encoded_blob;
                }
                // Specialize the default `ready()` function by making it dependent
                // on the current database operations. Thus, the driver will be actually
                // ready when it's been initialized (default) *and* there are no pending
                // operations on the database (initiated by some other instances).
                function _fullyReady(callback) {
                    var self = this;
                    var promise = self._initReady().then(function() {
                        var dbContext = dbContexts[self._dbInfo.name];
                        if (dbContext && dbContext.dbReady) return dbContext.dbReady;
                    });
                    executeTwoCallbacks(promise, callback, callback);
                    return promise;
                }
                // Try to establish a new db connection to replace the
                // current one which is broken (i.e. experiencing
                // InvalidStateError while creating a transaction).
                function _tryReconnect(dbInfo) {
                    _deferReadiness(dbInfo);
                    var dbContext = dbContexts[dbInfo.name];
                    var forages = dbContext.forages;
                    for(var i2 = 0; i2 < forages.length; i2++){
                        var forage = forages[i2];
                        if (forage._dbInfo.db) {
                            forage._dbInfo.db.close();
                            forage._dbInfo.db = null;
                        }
                    }
                    dbInfo.db = null;
                    return _getOriginalConnection(dbInfo).then(function(db) {
                        dbInfo.db = db;
                        if (_isUpgradeNeeded(dbInfo)) // Reopen the database for upgrading.
                        return _getUpgradedConnection(dbInfo);
                        return db;
                    }).then(function(db) {
                        // store the latest db reference
                        // in case the db was upgraded
                        dbInfo.db = dbContext.db = db;
                        for(var i = 0; i < forages.length; i++)forages[i]._dbInfo.db = db;
                    })["catch"](function(err) {
                        _rejectReadiness(dbInfo, err);
                        throw err;
                    });
                }
                // FF doesn't like Promises (micro-tasks) and IDDB store operations,
                // so we have to do it with callbacks
                function createTransaction(dbInfo, mode, callback, retries) {
                    if (retries === undefined) retries = 1;
                    try {
                        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
                        callback(null, tx);
                    } catch (err) {
                        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) return Promise$1.resolve().then(function() {
                            if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                                // increase the db version, to create the new ObjectStore
                                if (dbInfo.db) dbInfo.version = dbInfo.db.version + 1;
                                // Reopen the database for upgrading.
                                return _getUpgradedConnection(dbInfo);
                            }
                        }).then(function() {
                            return _tryReconnect(dbInfo).then(function() {
                                createTransaction(dbInfo, mode, callback, retries - 1);
                            });
                        })["catch"](callback);
                        callback(err);
                    }
                }
                function createDbContext() {
                    return {
                        // Running localForages sharing a database.
                        forages: [],
                        // Shared database.
                        db: null,
                        // Database readiness (promise).
                        dbReady: null,
                        // Deferred operations on the database.
                        deferredOperations: []
                    };
                }
                // Open the IndexedDB database (automatically creates one if one didn't
                // previously exist), using any options set in the config.
                function _initStorage(options) {
                    var self = this;
                    var dbInfo = {
                        db: null
                    };
                    if (options) for(var i in options)dbInfo[i] = options[i];
                    // Get the current context of the database;
                    var dbContext = dbContexts[dbInfo.name];
                    // ...or create a new context.
                    if (!dbContext) {
                        dbContext = createDbContext();
                        // Register the new context in the global container.
                        dbContexts[dbInfo.name] = dbContext;
                    }
                    // Register itself as a running localForage in the current context.
                    dbContext.forages.push(self);
                    // Replace the default `ready()` function with the specialized one.
                    if (!self._initReady) {
                        self._initReady = self.ready;
                        self.ready = _fullyReady;
                    }
                    // Create an array of initialization states of the related localForages.
                    var initPromises = [];
                    function ignoreErrors() {
                        // Don't handle errors here,
                        // just makes sure related localForages aren't pending.
                        return Promise$1.resolve();
                    }
                    for(var j = 0; j < dbContext.forages.length; j++){
                        var forage = dbContext.forages[j];
                        if (forage !== self) // Don't wait for itself...
                        initPromises.push(forage._initReady()["catch"](ignoreErrors));
                    }
                    // Take a snapshot of the related localForages.
                    var forages = dbContext.forages.slice(0);
                    // Initialize the connection process only when
                    // all the related localForages aren't pending.
                    return Promise$1.all(initPromises).then(function() {
                        dbInfo.db = dbContext.db;
                        // Get the connection or open a new one without upgrade.
                        return _getOriginalConnection(dbInfo);
                    }).then(function(db) {
                        dbInfo.db = db;
                        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) // Reopen the database for upgrading.
                        return _getUpgradedConnection(dbInfo);
                        return db;
                    }).then(function(db) {
                        dbInfo.db = dbContext.db = db;
                        self._dbInfo = dbInfo;
                        // Share the final connection amongst related localForages.
                        for(var k = 0; k < forages.length; k++){
                            var forage = forages[k];
                            if (forage !== self) {
                                // Self is already up-to-date.
                                forage._dbInfo.db = dbInfo.db;
                                forage._dbInfo.version = dbInfo.version;
                            }
                        }
                    });
                }
                function getItem(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                if (err) return reject(err);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var req = store.get(key);
                                    req.onsuccess = function() {
                                        var value = req.result;
                                        if (value === undefined) value = null;
                                        if (_isEncodedBlob(value)) value = _decodeBlob(value);
                                        resolve(value);
                                    };
                                    req.onerror = function() {
                                        reject(req.error);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Iterate over all items stored in database.
                function iterate(iterator, callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                if (err) return reject(err);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var req = store.openCursor();
                                    var iterationNumber = 1;
                                    req.onsuccess = function() {
                                        var cursor = req.result;
                                        if (cursor) {
                                            var value = cursor.value;
                                            if (_isEncodedBlob(value)) value = _decodeBlob(value);
                                            var result = iterator(value, cursor.key, iterationNumber++);
                                            // when the iterator callback returns any
                                            // (non-`undefined`) value, then we stop
                                            // the iteration immediately
                                            if (result !== void 0) resolve(result);
                                            else cursor["continue"]();
                                        } else resolve();
                                    };
                                    req.onerror = function() {
                                        reject(req.error);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function setItem(key, value1, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        var dbInfo;
                        self.ready().then(function() {
                            dbInfo = self._dbInfo;
                            if (toString.call(value1) === '[object Blob]') return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                                if (blobSupport) return value1;
                                return _encodeBlob(value1);
                            });
                            return value1;
                        }).then(function(value) {
                            createTransaction(self._dbInfo, READ_WRITE, function(err1, transaction) {
                                if (err1) return reject(err1);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    // The reason we don't _save_ null is because IE 10 does
                                    // not support saving the `null` type in IndexedDB. How
                                    // ironic, given the bug below!
                                    // See: https://github.com/mozilla/localForage/issues/161
                                    if (value === null) value = undefined;
                                    var req = store.put(value, key);
                                    transaction.oncomplete = function() {
                                        // Cast to undefined so the value passed to
                                        // callback/promise is the same as what one would get out
                                        // of `getItem()` later. This leads to some weirdness
                                        // (setItem('foo', undefined) will return `null`), but
                                        // it's not my fault localStorage is our baseline and that
                                        // it's weird.
                                        if (value === undefined) value = null;
                                        resolve(value);
                                    };
                                    transaction.onabort = transaction.onerror = function() {
                                        var err = req.error ? req.error : req.transaction.error;
                                        reject(err);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function removeItem(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_WRITE, function(err2, transaction) {
                                if (err2) return reject(err2);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    // We use a Grunt task to make this safe for IE and some
                                    // versions of Android (including those used by Cordova).
                                    // Normally IE won't like `.delete()` and will insist on
                                    // using `['delete']()`, but we have a build step that
                                    // fixes this for us now.
                                    var req = store["delete"](key);
                                    transaction.oncomplete = function() {
                                        resolve();
                                    };
                                    transaction.onerror = function() {
                                        reject(req.error);
                                    };
                                    // The request will be also be aborted if we've exceeded our storage
                                    // space.
                                    transaction.onabort = function() {
                                        var err = req.error ? req.error : req.transaction.error;
                                        reject(err);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function clear(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_WRITE, function(err3, transaction) {
                                if (err3) return reject(err3);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var req = store.clear();
                                    transaction.oncomplete = function() {
                                        resolve();
                                    };
                                    transaction.onabort = transaction.onerror = function() {
                                        var err = req.error ? req.error : req.transaction.error;
                                        reject(err);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function length1(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                if (err) return reject(err);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var req = store.count();
                                    req.onsuccess = function() {
                                        resolve(req.result);
                                    };
                                    req.onerror = function() {
                                        reject(req.error);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function key1(n, callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        if (n < 0) {
                            resolve(null);
                            return;
                        }
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                if (err) return reject(err);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var advanced = false;
                                    var req = store.openKeyCursor();
                                    req.onsuccess = function() {
                                        var cursor = req.result;
                                        if (!cursor) {
                                            // this means there weren't enough keys
                                            resolve(null);
                                            return;
                                        }
                                        if (n === 0) // We have the first key, return it if that's what they
                                        // wanted.
                                        resolve(cursor.key);
                                        else if (!advanced) {
                                            // Otherwise, ask the cursor to skip ahead n
                                            // records.
                                            advanced = true;
                                            cursor.advance(n);
                                        } else // When we get here, we've got the nth key.
                                        resolve(cursor.key);
                                    };
                                    req.onerror = function() {
                                        reject(req.error);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function keys1(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                if (err) return reject(err);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var req = store.openKeyCursor();
                                    var keys = [];
                                    req.onsuccess = function() {
                                        var cursor = req.result;
                                        if (!cursor) {
                                            resolve(keys);
                                            return;
                                        }
                                        keys.push(cursor.key);
                                        cursor["continue"]();
                                    };
                                    req.onerror = function() {
                                        reject(req.error);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function dropInstance(options, callback) {
                    callback = getCallback.apply(this, arguments);
                    var currentConfig = this.config();
                    options = typeof options !== 'function' && options || {};
                    if (!options.name) {
                        options.name = options.name || currentConfig.name;
                        options.storeName = options.storeName || currentConfig.storeName;
                    }
                    var self = this;
                    var promise;
                    if (!options.name) promise = Promise$1.reject('Invalid arguments');
                    else {
                        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;
                        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
                            var dbContext = dbContexts[options.name];
                            var forages = dbContext.forages;
                            dbContext.db = db;
                            for(var i = 0; i < forages.length; i++)forages[i]._dbInfo.db = db;
                            return db;
                        });
                        if (!options.storeName) promise = dbPromise.then(function(db1) {
                            _deferReadiness(options);
                            var dbContext = dbContexts[options.name];
                            var forages = dbContext.forages;
                            db1.close();
                            for(var i3 = 0; i3 < forages.length; i3++){
                                var forage = forages[i3];
                                forage._dbInfo.db = null;
                            }
                            var dropDBPromise = new Promise$1(function(resolve, reject) {
                                var req = idb1.deleteDatabase(options.name);
                                req.onerror = function() {
                                    var db = req.result;
                                    if (db) db.close();
                                    reject(req.error);
                                };
                                req.onblocked = function() {
                                    // Closing all open connections in onversionchange handler should prevent this situation, but if
                                    // we do get here, it just means the request remains pending - eventually it will succeed or error
                                    console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                                };
                                req.onsuccess = function() {
                                    var db = req.result;
                                    if (db) db.close();
                                    resolve(db);
                                };
                            });
                            return dropDBPromise.then(function(db) {
                                dbContext.db = db;
                                for(var i = 0; i < forages.length; i++){
                                    var _forage = forages[i];
                                    _advanceReadiness(_forage._dbInfo);
                                }
                            })["catch"](function(err) {
                                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {});
                                throw err;
                            });
                        });
                        else promise = dbPromise.then(function(db2) {
                            if (!db2.objectStoreNames.contains(options.storeName)) return;
                            var newVersion = db2.version + 1;
                            _deferReadiness(options);
                            var dbContext = dbContexts[options.name];
                            var forages = dbContext.forages;
                            db2.close();
                            for(var i = 0; i < forages.length; i++){
                                var forage = forages[i];
                                forage._dbInfo.db = null;
                                forage._dbInfo.version = newVersion;
                            }
                            var dropObjectPromise = new Promise$1(function(resolve, reject) {
                                var req = idb1.open(options.name, newVersion);
                                req.onerror = function(err) {
                                    var db = req.result;
                                    db.close();
                                    reject(err);
                                };
                                req.onupgradeneeded = function() {
                                    var db = req.result;
                                    db.deleteObjectStore(options.storeName);
                                };
                                req.onsuccess = function() {
                                    var db = req.result;
                                    db.close();
                                    resolve(db);
                                };
                            });
                            return dropObjectPromise.then(function(db) {
                                dbContext.db = db;
                                for(var j = 0; j < forages.length; j++){
                                    var _forage2 = forages[j];
                                    _forage2._dbInfo.db = db;
                                    _advanceReadiness(_forage2._dbInfo);
                                }
                            })["catch"](function(err) {
                                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {});
                                throw err;
                            });
                        });
                    }
                    executeCallback(promise, callback);
                    return promise;
                }
                var asyncStorage = {
                    _driver: 'asyncStorage',
                    _initStorage: _initStorage,
                    _support: isIndexedDBValid(),
                    iterate: iterate,
                    getItem: getItem,
                    setItem: setItem,
                    removeItem: removeItem,
                    clear: clear,
                    length: length1,
                    key: key1,
                    keys: keys1,
                    dropInstance: dropInstance
                };
                function isWebSQLValid() {
                    return typeof openDatabase === 'function';
                }
                // Sadly, the best way to save binary data in WebSQL/localStorage is serializing
                // it to Base64, so this is how we store it to prevent very strange errors with less
                // verbose ways of binary <-> string data storage.
                var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var BLOB_TYPE_PREFIX = '~~local_forage_type~';
                var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
                var SERIALIZED_MARKER = '__lfsc__:';
                var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
                // OMG the serializations!
                var TYPE_ARRAYBUFFER = 'arbf';
                var TYPE_BLOB = 'blob';
                var TYPE_INT8ARRAY = 'si08';
                var TYPE_UINT8ARRAY = 'ui08';
                var TYPE_UINT8CLAMPEDARRAY = 'uic8';
                var TYPE_INT16ARRAY = 'si16';
                var TYPE_INT32ARRAY = 'si32';
                var TYPE_UINT16ARRAY = 'ur16';
                var TYPE_UINT32ARRAY = 'ui32';
                var TYPE_FLOAT32ARRAY = 'fl32';
                var TYPE_FLOAT64ARRAY = 'fl64';
                var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
                var toString$1 = Object.prototype.toString;
                function stringToBuffer(serializedString) {
                    // Fill the string into a ArrayBuffer.
                    var bufferLength = serializedString.length * 0.75;
                    var len = serializedString.length;
                    var i;
                    var p = 0;
                    var encoded1, encoded2, encoded3, encoded4;
                    if (serializedString[serializedString.length - 1] === '=') {
                        bufferLength--;
                        if (serializedString[serializedString.length - 2] === '=') bufferLength--;
                    }
                    var buffer = new ArrayBuffer(bufferLength);
                    var bytes = new Uint8Array(buffer);
                    for(i = 0; i < len; i += 4){
                        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
                        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
                        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
                        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
                        /*jslint bitwise: true */ bytes[p++] = encoded1 << 2 | encoded2 >> 4;
                        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
                        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
                    }
                    return buffer;
                }
                // Converts a buffer to a string to store, serialized, in the backend
                // storage library.
                function bufferToString(buffer) {
                    // base64-arraybuffer
                    var bytes = new Uint8Array(buffer);
                    var base64String = '';
                    var i;
                    for(i = 0; i < bytes.length; i += 3){
                        /*jslint bitwise: true */ base64String += BASE_CHARS[bytes[i] >> 2];
                        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
                        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
                        base64String += BASE_CHARS[bytes[i + 2] & 63];
                    }
                    if (bytes.length % 3 === 2) base64String = base64String.substring(0, base64String.length - 1) + '=';
                    else if (bytes.length % 3 === 1) base64String = base64String.substring(0, base64String.length - 2) + '==';
                    return base64String;
                }
                // Serialize a value, afterwards executing a callback (which usually
                // instructs the `setItem()` callback/promise to be executed). This is how
                // we store binary data with localStorage.
                function serialize(value, callback) {
                    var valueType = '';
                    if (value) valueType = toString$1.call(value);
                    // Cannot use `value instanceof ArrayBuffer` or such here, as these
                    // checks fail when running the tests using casper.js...
                    //
                    // TODO: See why those tests fail and use a better solution.
                    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
                        // Convert binary arrays to a string and prefix the string with
                        // a special marker.
                        var buffer;
                        var marker = SERIALIZED_MARKER;
                        if (value instanceof ArrayBuffer) {
                            buffer = value;
                            marker += TYPE_ARRAYBUFFER;
                        } else {
                            buffer = value.buffer;
                            if (valueType === '[object Int8Array]') marker += TYPE_INT8ARRAY;
                            else if (valueType === '[object Uint8Array]') marker += TYPE_UINT8ARRAY;
                            else if (valueType === '[object Uint8ClampedArray]') marker += TYPE_UINT8CLAMPEDARRAY;
                            else if (valueType === '[object Int16Array]') marker += TYPE_INT16ARRAY;
                            else if (valueType === '[object Uint16Array]') marker += TYPE_UINT16ARRAY;
                            else if (valueType === '[object Int32Array]') marker += TYPE_INT32ARRAY;
                            else if (valueType === '[object Uint32Array]') marker += TYPE_UINT32ARRAY;
                            else if (valueType === '[object Float32Array]') marker += TYPE_FLOAT32ARRAY;
                            else if (valueType === '[object Float64Array]') marker += TYPE_FLOAT64ARRAY;
                            else callback(new Error('Failed to get type for BinaryArray'));
                        }
                        callback(marker + bufferToString(buffer));
                    } else if (valueType === '[object Blob]') {
                        // Conver the blob to a binaryArray and then to a string.
                        var fileReader = new FileReader();
                        fileReader.onload = function() {
                            // Backwards-compatible prefix for the blob type.
                            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);
                            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
                        };
                        fileReader.readAsArrayBuffer(value);
                    } else try {
                        callback(JSON.stringify(value));
                    } catch (e) {
                        console.error("Couldn't convert value into a JSON string: ", value);
                        callback(null, e);
                    }
                }
                // Deserialize data we've inserted into a value column/field. We place
                // special markers into our strings to mark them as encoded; this isn't
                // as nice as a meta field, but it's the only sane thing we can do whilst
                // keeping localStorage support intact.
                //
                // Oftentimes this will just deserialize JSON content, but if we have a
                // special marker (SERIALIZED_MARKER, defined above), we will extract
                // some kind of arraybuffer/binary data/typed array out of the string.
                function deserialize(value) {
                    // If we haven't marked this string as being specially serialized (i.e.
                    // something other than serialized JSON), we can just return it and be
                    // done with it.
                    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) return JSON.parse(value);
                    // The following code deals with deserializing some kind of Blob or
                    // TypedArray. First we separate out the type of data we're dealing
                    // with from the data itself.
                    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
                    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
                    var blobType;
                    // Backwards-compatible blob type serialization strategy.
                    // DBs created with older versions of localForage will simply not have the blob type.
                    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
                        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
                        blobType = matcher[1];
                        serializedString = serializedString.substring(matcher[0].length);
                    }
                    var buffer = stringToBuffer(serializedString);
                    // Return the right type based on the code/type set during
                    // serialization.
                    switch(type){
                        case TYPE_ARRAYBUFFER:
                            return buffer;
                        case TYPE_BLOB:
                            return createBlob([
                                buffer
                            ], {
                                type: blobType
                            });
                        case TYPE_INT8ARRAY:
                            return new Int8Array(buffer);
                        case TYPE_UINT8ARRAY:
                            return new Uint8Array(buffer);
                        case TYPE_UINT8CLAMPEDARRAY:
                            return new Uint8ClampedArray(buffer);
                        case TYPE_INT16ARRAY:
                            return new Int16Array(buffer);
                        case TYPE_UINT16ARRAY:
                            return new Uint16Array(buffer);
                        case TYPE_INT32ARRAY:
                            return new Int32Array(buffer);
                        case TYPE_UINT32ARRAY:
                            return new Uint32Array(buffer);
                        case TYPE_FLOAT32ARRAY:
                            return new Float32Array(buffer);
                        case TYPE_FLOAT64ARRAY:
                            return new Float64Array(buffer);
                        default:
                            throw new Error('Unkown type: ' + type);
                    }
                }
                var localforageSerializer = {
                    serialize: serialize,
                    deserialize: deserialize,
                    stringToBuffer: stringToBuffer,
                    bufferToString: bufferToString
                };
                /*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */ function createDbTable(t, dbInfo, callback, errorCallback) {
                    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
                }
                // Open the WebSQL database (automatically creates one if one didn't
                // previously exist), using any options set in the config.
                function _initStorage$1(options) {
                    var self = this;
                    var dbInfo = {
                        db: null
                    };
                    if (options) for(var i in options)dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
                    var dbInfoPromise = new Promise$1(function(resolve, reject) {
                        // Open the database; the openDatabase API will automatically
                        // create it for us if it doesn't exist.
                        try {
                            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
                        } catch (e) {
                            return reject(e);
                        }
                        // Create our key/value table if it doesn't exist.
                        dbInfo.db.transaction(function(t) {
                            createDbTable(t, dbInfo, function() {
                                self._dbInfo = dbInfo;
                                resolve();
                            }, function(t, error) {
                                reject(error);
                            });
                        }, reject);
                    });
                    dbInfo.serializer = localforageSerializer;
                    return dbInfoPromise;
                }
                function tryExecuteSql(t1, dbInfo, sqlStatement, args, callback, errorCallback) {
                    t1.executeSql(sqlStatement, args, callback, function(t2, error) {
                        if (error.code === error.SYNTAX_ERR) t2.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [
                            dbInfo.storeName
                        ], function(t, results) {
                            if (!results.rows.length) // if the table is missing (was deleted)
                            // re-create it table and retry
                            createDbTable(t, dbInfo, function() {
                                t.executeSql(sqlStatement, args, callback, errorCallback);
                            }, errorCallback);
                            else errorCallback(t, error);
                        }, errorCallback);
                        else errorCallback(t2, error);
                    }, errorCallback);
                }
                function getItem$1(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [
                                    key
                                ], function(t, results) {
                                    var result = results.rows.length ? results.rows.item(0).value : null;
                                    // Check to see if this is serialized content we need to
                                    // unpack.
                                    if (result) result = dbInfo.serializer.deserialize(result);
                                    resolve(result);
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function iterate$1(iterator, callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function(t, results) {
                                    var rows = results.rows;
                                    var length = rows.length;
                                    for(var i = 0; i < length; i++){
                                        var item = rows.item(i);
                                        var result = item.value;
                                        // Check to see if this is serialized content
                                        // we need to unpack.
                                        if (result) result = dbInfo.serializer.deserialize(result);
                                        result = iterator(result, item.key, i + 1);
                                        // void(0) prevents problems with redefinition
                                        // of `undefined`.
                                        if (result !== void 0) {
                                            resolve(result);
                                            return;
                                        }
                                    }
                                    resolve();
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function _setItem(key, value2, callback, retriesLeft) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            // The localStorage API doesn't return undefined values in an
                            // "expected" way, so undefined is always cast to null in all
                            // drivers. See: https://github.com/mozilla/localForage/pull/42
                            if (value2 === undefined) value2 = null;
                            // Save the original value to pass to the callback.
                            var originalValue = value2;
                            var dbInfo = self._dbInfo;
                            dbInfo.serializer.serialize(value2, function(value, error1) {
                                if (error1) reject(error1);
                                else dbInfo.db.transaction(function(t) {
                                    tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [
                                        key,
                                        value
                                    ], function() {
                                        resolve(originalValue);
                                    }, function(t, error) {
                                        reject(error);
                                    });
                                }, function(sqlError) {
                                    // The transaction failed; check
                                    // to see if it's a quota error.
                                    if (sqlError.code === sqlError.QUOTA_ERR) {
                                        // We reject the callback outright for now, but
                                        // it's worth trying to re-run the transaction.
                                        // Even if the user accepts the prompt to use
                                        // more storage on Safari, this error will
                                        // be called.
                                        //
                                        // Try to re-run the transaction.
                                        if (retriesLeft > 0) {
                                            resolve(_setItem.apply(self, [
                                                key,
                                                originalValue,
                                                callback,
                                                retriesLeft - 1
                                            ]));
                                            return;
                                        }
                                        reject(sqlError);
                                    }
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function setItem$1(key, value, callback) {
                    return _setItem.apply(this, [
                        key,
                        value,
                        callback,
                        1
                    ]);
                }
                function removeItem$1(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [
                                    key
                                ], function() {
                                    resolve();
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Deletes every item in the table.
                // TODO: Find out if this resets the AUTO_INCREMENT number.
                function clear$1(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function() {
                                    resolve();
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Does a simple `COUNT(key)` to get the number of items stored in
                // localForage.
                function length$1(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                // Ahhh, SQL makes this one soooooo easy.
                                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function(t, results) {
                                    var result = results.rows.item(0).c;
                                    resolve(result);
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Return the key located at key index X; essentially gets the key from a
                // `WHERE id = ?`. This is the most efficient way I can think to implement
                // this rarely-used (in my experience) part of the API, but it can seem
                // inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
                // the ID of each key will change every time it's updated. Perhaps a stored
                // procedure for the `setItem()` SQL would solve this problem?
                // TODO: Don't change ID on `setItem()`.
                function key$1(n, callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [
                                    n + 1
                                ], function(t, results) {
                                    var result = results.rows.length ? results.rows.item(0).key : null;
                                    resolve(result);
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function keys$1(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function(t, results) {
                                    var keys = [];
                                    for(var i = 0; i < results.rows.length; i++)keys.push(results.rows.item(i).key);
                                    resolve(keys);
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // https://www.w3.org/TR/webdatabase/#databases
                // > There is no way to enumerate or delete the databases available for an origin from this API.
                function getAllStoreNames(db) {
                    return new Promise$1(function(resolve, reject) {
                        db.transaction(function(t) {
                            t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t, results) {
                                var storeNames = [];
                                for(var i = 0; i < results.rows.length; i++)storeNames.push(results.rows.item(i).name);
                                resolve({
                                    db: db,
                                    storeNames: storeNames
                                });
                            }, function(t, error) {
                                reject(error);
                            });
                        }, function(sqlError) {
                            reject(sqlError);
                        });
                    });
                }
                function dropInstance$1(options, callback) {
                    callback = getCallback.apply(this, arguments);
                    var currentConfig = this.config();
                    options = typeof options !== 'function' && options || {};
                    if (!options.name) {
                        options.name = options.name || currentConfig.name;
                        options.storeName = options.storeName || currentConfig.storeName;
                    }
                    var self = this;
                    var promise;
                    if (!options.name) promise = Promise$1.reject('Invalid arguments');
                    else promise = new Promise$1(function(resolve) {
                        var db;
                        if (options.name === currentConfig.name) // use the db reference of the current instance
                        db = self._dbInfo.db;
                        else db = openDatabase(options.name, '', '', 0);
                        if (!options.storeName) // drop all database tables
                        resolve(getAllStoreNames(db));
                        else resolve({
                            db: db,
                            storeNames: [
                                options.storeName
                            ]
                        });
                    }).then(function(operationInfo) {
                        return new Promise$1(function(resolve1, reject1) {
                            operationInfo.db.transaction(function(t) {
                                function dropTable(storeName) {
                                    return new Promise$1(function(resolve, reject) {
                                        t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function() {
                                            resolve();
                                        }, function(t, error) {
                                            reject(error);
                                        });
                                    });
                                }
                                var operations = [];
                                for(var i = 0, len = operationInfo.storeNames.length; i < len; i++)operations.push(dropTable(operationInfo.storeNames[i]));
                                Promise$1.all(operations).then(function() {
                                    resolve1();
                                })["catch"](function(e) {
                                    reject1(e);
                                });
                            }, function(sqlError) {
                                reject1(sqlError);
                            });
                        });
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                var webSQLStorage = {
                    _driver: 'webSQLStorage',
                    _initStorage: _initStorage$1,
                    _support: isWebSQLValid(),
                    iterate: iterate$1,
                    getItem: getItem$1,
                    setItem: setItem$1,
                    removeItem: removeItem$1,
                    clear: clear$1,
                    length: length$1,
                    key: key$1,
                    keys: keys$1,
                    dropInstance: dropInstance$1
                };
                function isLocalStorageValid() {
                    try {
                        return typeof localStorage !== 'undefined' && 'setItem' in localStorage && // in IE8 typeof localStorage.setItem === 'object'
                        !!localStorage.setItem;
                    } catch (e) {
                        return false;
                    }
                }
                function _getKeyPrefix(options, defaultConfig) {
                    var keyPrefix = options.name + '/';
                    if (options.storeName !== defaultConfig.storeName) keyPrefix += options.storeName + '/';
                    return keyPrefix;
                }
                // Check if localStorage throws when saving an item
                function checkIfLocalStorageThrows() {
                    var localStorageTestKey = '_localforage_support_test';
                    try {
                        localStorage.setItem(localStorageTestKey, true);
                        localStorage.removeItem(localStorageTestKey);
                        return false;
                    } catch (e) {
                        return true;
                    }
                }
                // Check if localStorage is usable and allows to save an item
                // This method checks if localStorage is usable in Safari Private Browsing
                // mode, or in any other case where the available quota for localStorage
                // is 0 and there wasn't any saved items yet.
                function _isLocalStorageUsable() {
                    return !checkIfLocalStorageThrows() || localStorage.length > 0;
                }
                // Config the localStorage backend, using options set in the config.
                function _initStorage$2(options) {
                    var self = this;
                    var dbInfo = {};
                    if (options) for(var i in options)dbInfo[i] = options[i];
                    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);
                    if (!_isLocalStorageUsable()) return Promise$1.reject();
                    self._dbInfo = dbInfo;
                    dbInfo.serializer = localforageSerializer;
                    return Promise$1.resolve();
                }
                // Remove all keys from the datastore, effectively destroying all data in
                // the app's key/value store!
                function clear$2(callback) {
                    var self = this;
                    var promise = self.ready().then(function() {
                        var keyPrefix = self._dbInfo.keyPrefix;
                        for(var i = localStorage.length - 1; i >= 0; i--){
                            var key = localStorage.key(i);
                            if (key.indexOf(keyPrefix) === 0) localStorage.removeItem(key);
                        }
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Retrieve an item from the store. Unlike the original async_storage
                // library in Gaia, we don't modify return values at all. If a key's value
                // is `undefined`, we pass that value to the callback function.
                function getItem$2(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = self.ready().then(function() {
                        var dbInfo = self._dbInfo;
                        var result = localStorage.getItem(dbInfo.keyPrefix + key);
                        // If a result was found, parse it from the serialized
                        // string into a JS object. If result isn't truthy, the key
                        // is likely undefined and we'll pass it straight to the
                        // callback.
                        if (result) result = dbInfo.serializer.deserialize(result);
                        return result;
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Iterate over all items in the store.
                function iterate$2(iterator, callback) {
                    var self = this;
                    var promise = self.ready().then(function() {
                        var dbInfo = self._dbInfo;
                        var keyPrefix = dbInfo.keyPrefix;
                        var keyPrefixLength = keyPrefix.length;
                        var length = localStorage.length;
                        // We use a dedicated iterator instead of the `i` variable below
                        // so other keys we fetch in localStorage aren't counted in
                        // the `iterationNumber` argument passed to the `iterate()`
                        // callback.
                        //
                        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
                        var iterationNumber = 1;
                        for(var i = 0; i < length; i++){
                            var key = localStorage.key(i);
                            if (key.indexOf(keyPrefix) !== 0) continue;
                            var value = localStorage.getItem(key);
                            // If a result was found, parse it from the serialized
                            // string into a JS object. If result isn't truthy, the
                            // key is likely undefined and we'll pass it straight
                            // to the iterator.
                            if (value) value = dbInfo.serializer.deserialize(value);
                            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);
                            if (value !== void 0) return value;
                        }
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Same as localStorage's key() method, except takes a callback.
                function key$2(n, callback) {
                    var self = this;
                    var promise = self.ready().then(function() {
                        var dbInfo = self._dbInfo;
                        var result;
                        try {
                            result = localStorage.key(n);
                        } catch (error) {
                            result = null;
                        }
                        // Remove the prefix from the key, if a key is found.
                        if (result) result = result.substring(dbInfo.keyPrefix.length);
                        return result;
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function keys$2(callback) {
                    var self = this;
                    var promise = self.ready().then(function() {
                        var dbInfo = self._dbInfo;
                        var length = localStorage.length;
                        var keys = [];
                        for(var i = 0; i < length; i++){
                            var itemKey = localStorage.key(i);
                            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) keys.push(itemKey.substring(dbInfo.keyPrefix.length));
                        }
                        return keys;
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Supply the number of keys in the datastore to the callback function.
                function length$2(callback) {
                    var self = this;
                    var promise = self.keys().then(function(keys) {
                        return keys.length;
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Remove an item from the store, nice and simple.
                function removeItem$2(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = self.ready().then(function() {
                        var dbInfo = self._dbInfo;
                        localStorage.removeItem(dbInfo.keyPrefix + key);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Set a key's value and run an optional callback once the value is set.
                // Unlike Gaia's implementation, the callback function is passed the value,
                // in case you want to operate on that value only after you're sure it
                // saved, or something like that.
                function setItem$2(key, value3, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = self.ready().then(function() {
                        // Convert undefined values to null.
                        // https://github.com/mozilla/localForage/pull/42
                        if (value3 === undefined) value3 = null;
                        // Save the original value to pass to the callback.
                        var originalValue = value3;
                        return new Promise$1(function(resolve, reject) {
                            var dbInfo = self._dbInfo;
                            dbInfo.serializer.serialize(value3, function(value, error) {
                                if (error) reject(error);
                                else try {
                                    localStorage.setItem(dbInfo.keyPrefix + key, value);
                                    resolve(originalValue);
                                } catch (e) {
                                    // localStorage capacity exceeded.
                                    // TODO: Make this a specific error/event.
                                    if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') reject(e);
                                    reject(e);
                                }
                            });
                        });
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function dropInstance$2(options, callback) {
                    callback = getCallback.apply(this, arguments);
                    options = typeof options !== 'function' && options || {};
                    if (!options.name) {
                        var currentConfig = this.config();
                        options.name = options.name || currentConfig.name;
                        options.storeName = options.storeName || currentConfig.storeName;
                    }
                    var self = this;
                    var promise;
                    if (!options.name) promise = Promise$1.reject('Invalid arguments');
                    else promise = new Promise$1(function(resolve) {
                        if (!options.storeName) resolve(options.name + '/');
                        else resolve(_getKeyPrefix(options, self._defaultConfig));
                    }).then(function(keyPrefix) {
                        for(var i = localStorage.length - 1; i >= 0; i--){
                            var key = localStorage.key(i);
                            if (key.indexOf(keyPrefix) === 0) localStorage.removeItem(key);
                        }
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                var localStorageWrapper = {
                    _driver: 'localStorageWrapper',
                    _initStorage: _initStorage$2,
                    _support: isLocalStorageValid(),
                    iterate: iterate$2,
                    getItem: getItem$2,
                    setItem: setItem$2,
                    removeItem: removeItem$2,
                    clear: clear$2,
                    length: length$2,
                    key: key$2,
                    keys: keys$2,
                    dropInstance: dropInstance$2
                };
                var sameValue = function sameValue(x, y) {
                    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
                };
                var includes = function includes(array, searchElement) {
                    var len = array.length;
                    var i = 0;
                    while(i < len){
                        if (sameValue(array[i], searchElement)) return true;
                        i++;
                    }
                    return false;
                };
                var isArray = Array.isArray || function(arg) {
                    return Object.prototype.toString.call(arg) === '[object Array]';
                };
                // Drivers are stored here when `defineDriver()` is called.
                // They are shared across all instances of localForage.
                var DefinedDrivers = {};
                var DriverSupport = {};
                var DefaultDrivers = {
                    INDEXEDDB: asyncStorage,
                    WEBSQL: webSQLStorage,
                    LOCALSTORAGE: localStorageWrapper
                };
                var DefaultDriverOrder = [
                    DefaultDrivers.INDEXEDDB._driver,
                    DefaultDrivers.WEBSQL._driver,
                    DefaultDrivers.LOCALSTORAGE._driver
                ];
                var OptionalDriverMethods = [
                    'dropInstance'
                ];
                var LibraryMethods = [
                    'clear',
                    'getItem',
                    'iterate',
                    'key',
                    'keys',
                    'length',
                    'removeItem',
                    'setItem'
                ].concat(OptionalDriverMethods);
                var DefaultConfig = {
                    description: '',
                    driver: DefaultDriverOrder.slice(),
                    name: 'localforage',
                    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
                    // we can use without a prompt.
                    size: 4980736,
                    storeName: 'keyvaluepairs',
                    version: 1.0
                };
                function callWhenReady(localForageInstance, libraryMethod) {
                    localForageInstance[libraryMethod] = function() {
                        var _args = arguments;
                        return localForageInstance.ready().then(function() {
                            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
                        });
                    };
                }
                function extend() {
                    for(var i = 1; i < arguments.length; i++){
                        var arg = arguments[i];
                        if (arg) {
                            for(var _key in arg)if (arg.hasOwnProperty(_key)) {
                                if (isArray(arg[_key])) arguments[0][_key] = arg[_key].slice();
                                else arguments[0][_key] = arg[_key];
                            }
                        }
                    }
                    return arguments[0];
                }
                var LocalForage1 = function() {
                    function LocalForage(options) {
                        _classCallCheck(this, LocalForage);
                        for(var driverTypeKey in DefaultDrivers)if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                            var driver = DefaultDrivers[driverTypeKey];
                            var driverName = driver._driver;
                            this[driverTypeKey] = driverName;
                            if (!DefinedDrivers[driverName]) // we don't need to wait for the promise,
                            // since the default drivers can be defined
                            // in a blocking manner
                            this.defineDriver(driver);
                        }
                        this._defaultConfig = extend({}, DefaultConfig);
                        this._config = extend({}, this._defaultConfig, options);
                        this._driverSet = null;
                        this._initDriver = null;
                        this._ready = false;
                        this._dbInfo = null;
                        this._wrapLibraryMethodsWithReady();
                        this.setDriver(this._config.driver)["catch"](function() {});
                    }
                    // Set any config values for localForage; can be called anytime before
                    // the first API call (e.g. `getItem`, `setItem`).
                    // We loop through options so we don't overwrite existing config
                    // values.
                    LocalForage.prototype.config = function config(options) {
                        // If the options argument is an object, we use it to set values.
                        // Otherwise, we return either a specified config value or all
                        // config values.
                        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
                            // If localforage is ready and fully initialized, we can't set
                            // any new configuration values. Instead, we return an error.
                            if (this._ready) return new Error("Can't call config() after localforage has been used.");
                            for(var i in options){
                                if (i === 'storeName') options[i] = options[i].replace(/\W/g, '_');
                                if (i === 'version' && typeof options[i] !== 'number') return new Error('Database version must be a number.');
                                this._config[i] = options[i];
                            }
                            // after all config options are set and
                            // the driver option is used, try setting it
                            if ('driver' in options && options.driver) return this.setDriver(this._config.driver);
                            return true;
                        } else if (typeof options === 'string') return this._config[options];
                        else return this._config;
                    };
                    // Used to define a custom driver, shared across all instances of
                    // localForage.
                    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
                        var promise1 = new Promise$1(function(resolve, reject) {
                            try {
                                var driverName = driverObject._driver;
                                var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                // A driver name should be defined and not overlap with the
                                // library-defined, default drivers.
                                if (!driverObject._driver) {
                                    reject(complianceError);
                                    return;
                                }
                                var driverMethods = LibraryMethods.concat('_initStorage');
                                for(var i = 0, len = driverMethods.length; i < len; i++){
                                    var driverMethodName = driverMethods[i];
                                    // when the property is there,
                                    // it should be a method even when optional
                                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                                        reject(complianceError);
                                        return;
                                    }
                                }
                                var configureMissingMethods = function configureMissingMethods() {
                                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                                        return function() {
                                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                                            var promise = Promise$1.reject(error);
                                            executeCallback(promise, arguments[arguments.length - 1]);
                                            return promise;
                                        };
                                    };
                                    for(var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++){
                                        var optionalDriverMethod = OptionalDriverMethods[_i];
                                        if (!driverObject[optionalDriverMethod]) driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                                    }
                                };
                                configureMissingMethods();
                                var setDriverSupport = function setDriverSupport(support) {
                                    if (DefinedDrivers[driverName]) console.info('Redefining LocalForage driver: ' + driverName);
                                    DefinedDrivers[driverName] = driverObject;
                                    DriverSupport[driverName] = support;
                                    // don't use a then, so that we can define
                                    // drivers that have simple _support methods
                                    // in a blocking manner
                                    resolve();
                                };
                                if ('_support' in driverObject) {
                                    if (driverObject._support && typeof driverObject._support === 'function') driverObject._support().then(setDriverSupport, reject);
                                    else setDriverSupport(!!driverObject._support);
                                } else setDriverSupport(true);
                            } catch (e) {
                                reject(e);
                            }
                        });
                        executeTwoCallbacks(promise1, callback, errorCallback);
                        return promise1;
                    };
                    LocalForage.prototype.driver = function driver() {
                        return this._driver || null;
                    };
                    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
                        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));
                        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
                        return getDriverPromise;
                    };
                    LocalForage.prototype.getSerializer = function getSerializer(callback) {
                        var serializerPromise = Promise$1.resolve(localforageSerializer);
                        executeTwoCallbacks(serializerPromise, callback);
                        return serializerPromise;
                    };
                    LocalForage.prototype.ready = function ready(callback) {
                        var self = this;
                        var promise = self._driverSet.then(function() {
                            if (self._ready === null) self._ready = self._initDriver();
                            return self._ready;
                        });
                        executeTwoCallbacks(promise, callback, callback);
                        return promise;
                    };
                    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
                        var self = this;
                        if (!isArray(drivers)) drivers = [
                            drivers
                        ];
                        var supportedDrivers1 = this._getSupportedDrivers(drivers);
                        function setDriverToConfig() {
                            self._config.driver = self.driver();
                        }
                        function extendSelfWithDriver(driver) {
                            self._extend(driver);
                            setDriverToConfig();
                            self._ready = self._initStorage(self._config);
                            return self._ready;
                        }
                        function initDriver(supportedDrivers) {
                            return function() {
                                var currentDriverIndex = 0;
                                function driverPromiseLoop() {
                                    while(currentDriverIndex < supportedDrivers.length){
                                        var driverName = supportedDrivers[currentDriverIndex];
                                        currentDriverIndex++;
                                        self._dbInfo = null;
                                        self._ready = null;
                                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                                    }
                                    setDriverToConfig();
                                    var error = new Error('No available storage method found.');
                                    self._driverSet = Promise$1.reject(error);
                                    return self._driverSet;
                                }
                                return driverPromiseLoop();
                            };
                        }
                        // There might be a driver initialization in progress
                        // so wait for it to finish in order to avoid a possible
                        // race condition to set _dbInfo
                        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
                            return Promise$1.resolve();
                        }) : Promise$1.resolve();
                        this._driverSet = oldDriverSetDone.then(function() {
                            var driverName = supportedDrivers1[0];
                            self._dbInfo = null;
                            self._ready = null;
                            return self.getDriver(driverName).then(function(driver) {
                                self._driver = driver._driver;
                                setDriverToConfig();
                                self._wrapLibraryMethodsWithReady();
                                self._initDriver = initDriver(supportedDrivers1);
                            });
                        })["catch"](function() {
                            setDriverToConfig();
                            var error = new Error('No available storage method found.');
                            self._driverSet = Promise$1.reject(error);
                            return self._driverSet;
                        });
                        executeTwoCallbacks(this._driverSet, callback, errorCallback);
                        return this._driverSet;
                    };
                    LocalForage.prototype.supports = function supports(driverName) {
                        return !!DriverSupport[driverName];
                    };
                    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
                        extend(this, libraryMethodsAndProperties);
                    };
                    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
                        var supportedDrivers = [];
                        for(var i = 0, len = drivers.length; i < len; i++){
                            var driverName = drivers[i];
                            if (this.supports(driverName)) supportedDrivers.push(driverName);
                        }
                        return supportedDrivers;
                    };
                    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
                        // Add a stub for each driver API method that delays the call to the
                        // corresponding driver method until localForage is ready. These stubs
                        // will be replaced by the driver methods as soon as the driver is
                        // loaded, so there is no performance impact.
                        for(var i = 0, len = LibraryMethods.length; i < len; i++)callWhenReady(this, LibraryMethods[i]);
                    };
                    LocalForage.prototype.createInstance = function createInstance(options) {
                        return new LocalForage(options);
                    };
                    return LocalForage;
                }();
                // The actual localForage object that we expose as a module or via a
                // global. It's extended by pulling in one of our other libraries.
                var localforage_js = new LocalForage1();
                module.exports = localforage_js;
            },
            {
                "3": 3
            }
        ]
    }, {}, [
        4
    ])(4);
});

},{}],"e8TO1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatTime", ()=>formatTime
);
parcelHelpers.export(exports, "formatTime2", ()=>formatTime2
);
parcelHelpers.export(exports, "randId", ()=>randId
);
parcelHelpers.export(exports, "getUnixSeconds", ()=>getUnixSeconds
);
parcelHelpers.export(exports, "secondToHMS", ()=>secondToHMS
);
parcelHelpers.export(exports, "formatDate", ()=>formatDate
);
parcelHelpers.export(exports, "stopEvent", ()=>stopEvent
);
const formatTime = (c)=>{
    const d = c % 86400;
    const h = Math.floor(d / 3600);
    const m = Math.floor((d - h * 3600) / 60);
    const s = d % 60;
    return "" + (h > 9 ? h : "0" + h) + ":" + (m > 9 ? m : "0" + m) + ":" + (s > 9 ? s : "0" + s);
};
const formatTime2 = (c)=>{
    const n = Math.round(c);
    var s = formatTime(n);
    if (s.indexOf("00:") == 0) s = s.substr(3);
    return s;
};
const randId = ()=>{
    const c = "ID" + formatDate(new Date(), "yyMMddhhmmss") + Math.random();
    return c.replace(/[^0-1a-zA-Z]+/gi, "");
};
const getUnixSeconds = ()=>{
    return Math.round(new Date().getTime() / 1000);
};
const secondToHMS = (v)=>{
    if (!v) return "0s";
    var res = "";
    var h = Math.floor(v / 3600);
    if (h > 0) res += h + "h";
    var m = Math.floor(v % 3600 / 60);
    if (m > 0) {
        res += m + "m";
        return res;
    }
    var s = v % 60;
    if (s > 0) res += s + "s";
    return res;
};
function newDate(v) {
    // return;
    if (v instanceof Date) return v;
    if (!v) return new Date();
    v = "" + v;
    v = v.replace(/\.[0-9]+/g, "");
    v = v.replace(/-/g, "/");
    return new Date(Date.parse(v));
}
const formatDate = (date, fmt)=>{
    // author: meizz
    if (!date) return "";
    if (!fmt) return "" + date;
    if (typeof date !== "object") date = newDate(date);
    const o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (const k of Object.keys(o))if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return fmt;
};
const stopEvent = (e)=>{
    e = e || window.event; //
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g467j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FlowTimeTracker", ()=>FlowTimeTracker
);
parcelHelpers.export(exports, "FlowTimeTrackerItem", ()=>FlowTimeTrackerItem
);
class FlowTimeTracker {
    id = '';
    start = 0;
    end = 0;
    name = '--';
    trackers = [];
}
class FlowTimeTrackerItem {
    start = 0;
    end = 0;
    break = false;
    rest = 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1n6Q":[function(require,module,exports) {
module.exports = "<div class=\"box\" onclick=\"this.hideRightMenuLayer()\">\r\n  <!-- Left Bar -->\r\n  <div class=\"left\">\r\n    <div class=\"left__Favicon\">\r\n      <img src=\"assets/images/Favicon.png\" alt=\"\" />\r\n    </div>\r\n    <div class=\"left__box\">\r\n      <div class=\"menu-item\" onmouseover=\"this.showMenu('menuAdd')\" onmouseleave=\"this.hideMenu()\">\r\n        <div class=\"menu-tag left__box-item Quickadd\">\r\n          <img src=\"assets/images/Quickadd.png\" alt=\"\" />\r\n        </div>\r\n        <div id=\"menuAdd\" class=\"menu-box menu-add\" style=\"display: none\">\r\n          <div class=\"li unpointer li-tl\">Quick Add</div>\r\n          <div class=\"li li-item\" onclick=\"this.onOpenAddForm('form1')\">\r\n            <span class=\"flex unpointer\"><i class=\"mt-icon reorder\"></i>Task</span>\r\n          </div>\r\n          <div class=\"li li-item\" onclick=\"this.onOpenAddForm('form2')\">\r\n            <span class=\"flex unpointer\"><i class=\"mt-icon chrome_reader_mode\"></i>Reading</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"menu-item\" onmouseover=\"this.showMenu('menuTimer')\" onmouseleave=\"this.hideMenu()\">\r\n        <div class=\"menu-tag left__box-item Quicktimer\">\r\n          <img src=\"assets/images/Quicktimer.png\" alt=\"\" />\r\n        </div>\r\n        <div id=\"menuTimer\" class=\"menu-box menu-timer\" style=\"display: none\">\r\n          <div class=\"li unpointer li-tl\">Quick Timer</div>\r\n          <div class=\"li li-item\" onclick=\"this.startTimer()\">\r\n            <span class=\"flex unpointer\"><i class=\"mt-icon timer\"></i>Stopwatch Timer</span>\r\n          </div>\r\n          <div class=\"li li-item\" onclick=\"this.addFlowTimeTracker()\">\r\n            <span class=\"flex unpointer\"><i class=\"mt-icon timelapse\"></i>Flow Time Tracker</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"left__user\">\r\n      <img src=\"assets/images/user.png\" alt=\"\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"right\">\r\n    <!-- Top Flow Time Tracker -->\r\n    <div class=\"right__header\">\r\n      <div id=\"right__header__title\" class=\"right__header__title\">\r\n        {@if editTimeTracker}\r\n        <input id=\"timeTrackerName\" type=\"text\" class=\"flow-time-name\"\r\n          placeholder=\"Please input the task name you want to track time\" />\r\n        {@else} {@if !!selectTrackerItem}\r\n        <span>${selectTrackerItem.name}</span>\r\n        {@else}\r\n        <span onclick=\"this.addFlowTimeTracker()\">What are you working on?</span> {@/if} {@/if}\r\n      </div>\r\n      <!-- <div id=\"Tracker\" style=\"display: none;\" class=\"right__header__title\">Write down what are you going there.</div> -->\r\n      <div id=\"trackerTimer\" class=\"right__header__date\">00:00:00</div>\r\n      {@if !selectTrackerItem}\r\n      <div class=\"right__header__button\">\r\n        <img class=\"right__header__button-img\" src=\"assets/images/InterrupSmall.png\" alt=\"\" />\r\n        {@if editTimeTracker}\r\n        <img class=\"right__header__button-img selected\" src=\"assets/images/Worktime.png\" alt=\"\"\r\n          onclick=\"this.saveAddFlowTimeTracker()\" />\r\n        {@else}\r\n        <img class=\"right__header__button-img\"  src=\"assets/images/Worktime.png\" alt=\"\" />\r\n        {@/if}\r\n        <img class=\"right__header__button-img\" id=\"rest\" src=\"assets/images/BreaktimeSmall.png\" alt=\"\" />\r\n      </div>\r\n      {@else}\r\n      <div class=\"right__header__button\">\r\n        <img class=\"right__header__button-img ${selectTrackerItem|trackItemState,'break'}\" src=\"assets/images/InterrupSmall.png\" alt=\"\"\r\n          onclick=\"this.editFlowTimeTracker('break')\" />\r\n        <img class=\"right__header__button-img ${selectTrackerItem|trackItemState,'work'}\" src=\"assets/images/Worktime.png\" alt=\"\"\r\n           />\r\n        <img class=\"right__header__button-img ${selectTrackerItem|trackItemState,'rest'}\" src=\"assets/images/BreaktimeSmall.png\" alt=\"\"\r\n          onclick=\"this.editFlowTimeTracker('rest')\" />\r\n      </div>\r\n      {@/if}\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"content__one\">\r\n        <!-- Reading??????Reading List Creator -->\r\n        <div id=\"readList\" class=\"content__Reading\">\r\n          <div class=\"content__Reading__h\">\r\n            <div class=\"content__Reading__h__text\">Reading</div>\r\n            <img src=\"assets/images/Add.png\" onclick=\"this.onOpenAddForm('form2')\" class=\"content__Reading__h__Add\" />\r\n            <img src=\"assets/images/Openlink.png\" onclick=\"this.openlink()\" class=\"content__Reading__h__Openlink\" />\r\n          </div>\r\n          {@each readList as item}\r\n          <div ondblclick=\"this.change('form2','readList','${item.id}')\"\r\n            oncontextmenu=\"this.onRightMenus('${item.id}','readList')\" class=\"content__Reading__c\">\r\n            <!-- <div class=\"content__Reading__c__h\">\r\n              <div class=\"content__Reading__c__h__text\">${item.projectName}</div>\r\n              <img onclick=\"this.onOpenAddForm('form2')\" src=\"assets/images/Add.png\"\r\n                class=\"content__Reading__c__h__Add\" />\r\n              <a href='${item.readLink}' target=\"_blank\">\r\n                <img src=\"assets/images/Openlink.png\" class=\"content__Reading__c__h__Openlink\" />\r\n              </a>\r\n\r\n            </div> -->\r\n            <!-- <div class=\"content__Reading__c__box\">${item.name}</div> -->\r\n            <div class=\"content__Reading__c__box\"><a target=\"_blank\" href=\"${item.readLink}\">${item.name}</a></div>\r\n            <!-- <div class=\"content__Reading__c__box\">${item.projectName}</div> -->\r\n          </div>\r\n          {@/each}\r\n        </div>\r\n\r\n        <!-- To Do??????Task List  -->\r\n        <div class=\"content__toDo\">\r\n          <div class=\"content__toDo__h\">\r\n            <div class=\"content__toDo__h__text\">To Do</div>\r\n            <img src=\"assets/images/Add.png\" onclick=\"this.onOpenAddForm('form1')\" class=\"content__toDo__h__Add\" />\r\n          </div>\r\n          {@each taskList as item}\r\n          <div oncontextmenu=\"this.onRightMenus('${item.id}','taskList')\"\r\n            onmousedown=\"this.dblclick('form1','taskList',event, this, '${item.id}','ProgressListArae')\"\r\n            class=\"content__toDo__box\">\r\n            <div class=\"content__toDo__box__one\">\r\n              ${item.name}\r\n              {@if item.taskPriority === 'High'}<div class=\"task-state mt-icon arrow_upward\" style=\"color: #8E0306;\">\r\n              </div>{@/if}\r\n              {@if item.taskPriority === 'Medium'}<div class=\"task-state task-priority\" style=\"color: #D78822;\">\r\n                <span></span></div>{@/if}\r\n              {@if item.taskPriority === 'Low'}<div class=\"task-state mt-icon arrow_downward\" style=\"color: #81E26F;\">\r\n              </div>{@/if}\r\n            </div>\r\n            <div class=\"content__toDo__box__two\">\r\n              <div class=\"content__toDo__box__two-item\">\r\n                <span class=\"content__toDo__box__two-item__title\">Est. Time:</span><span>${item.estimateTime}</span>\r\n              </div>\r\n              <div class=\"content__toDo__box__two-item\">\r\n                <span class=\"content__toDo__box__two-item__title\">Due Date:</span><span>${item.dueDate}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          {@/each}\r\n        </div>\r\n      </div>\r\n\r\n      <!-- On Progress -->\r\n      <div id=\"ProgressListArae\" class=\"content__two\">\r\n        <div class=\"content__two__h\">\r\n          <div class=\"content__two__h__text\">On Progress</div>\r\n        </div>\r\n        <div class=\"content__twos__box\">\r\n          {@each progressList as item}\r\n          <div id=\"card${item.id}\" class=\"content__two__box\"\r\n            onmousedown=\"this.dblclick('form1','progressList',event, this, '${item.id}','doneListArae')\"\r\n            oncontextmenu=\"this.onRightMenus('${item.id}','progressList')\">\r\n            {@if selectTrackerItem && item.id == selectTrackerItem.id}\r\n            <img class=\"content__two__box__stop out-pointer\" src=\"assets/images/Open.png\" alt=\"\"\r\n              onclick=\"this.cancelSelectTracker(event)\" />\r\n            {@else}\r\n            <img class=\"content__two__box__stop out-pointer\" src=\"assets/images/Stop.png\" alt=\"\"\r\n              onclick=\"this.startTrackerItem(event, '${item.id}')\" />\r\n            {@/if}\r\n            <div class=\"content__two__boxs__title\">\r\n              ${item.name}\r\n              {@if item.taskPriority === 'High'}<div class=\"task-state mt-icon arrow_upward\" style=\"color: #8E0306;\">\r\n              </div>{@/if}\r\n              {@if item.taskPriority === 'Medium'}<div class=\"task-state task-priority\" style=\"color: #D78822;\">\r\n                <span></span></div>{@/if}\r\n              {@if item.taskPriority === 'Low'}<div class=\"task-state mt-icon arrow_downward\" style=\"color: #81E26F;\">\r\n              </div>{@/if}\r\n            </div>\r\n            <div class=\"content__two__boxs\">\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Est. Time:</span><span\r\n                  class=\"content__two__boxs-item__value\">${item|flowEstTime}</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Due Date:</span><span\r\n                  class=\"content__two__boxs-item__value\">${item|flowDueDate}</span>\r\n              </div>\r\n              {@each item.trackers as tracker}\r\n              <div class=\"content__two__boxs-item\">\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/Range.png\" alt=\"\" />\r\n                  ${tracker|flowDucation}\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/WorktimeSmall.png\" alt=\"\" />\r\n                  ${tracker|flowItemWorkTime}\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/BreaktimeSmall.png\" alt=\"\" />\r\n                  ${tracker|flowItemRestTime}\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/InterrupSmall.png\" alt=\"\" />\r\n                  <span class=\"content__two__boxs-items__yes\">\r\n                    {@if tracker.break} yes {@else} <span class=\"content__two__boxs-items__no\">no </span>{@/if}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              {@/each}\r\n            </div>\r\n          </div>\r\n          {@/each}\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Done-->\r\n      <div id=\"doneListArae\" class=\"content__two content__three\">\r\n        <div class=\"content__three__h\">\r\n          <div class=\"content__three__h__text\">Done</div>\r\n        </div>\r\n        <div class=\"content__twos__box\">\r\n          {@each doneList as item}\r\n          <div class=\"content__two__box\" oncontextmenu=\"this.onRightMenus('${item.id}','doneList')\">\r\n            {@if selectTrackerItem && item.id == selectTrackerItem.id}\r\n            <img class=\"content__two__box__stop out-pointer\" src=\"assets/images/Open.png\" alt=\"\"\r\n              onclick=\"this.cancelSelectTracker(event)\" />\r\n            {@else}\r\n            <img class=\"content__two__box__stop out-pointer\" src=\"assets/images/Stop.png\" alt=\"\"\r\n              onclick=\"this.startTrackerItem(event, '${item.id}')\" />\r\n            {@/if}\r\n            <div class=\"content__two__boxs__title\">\r\n              ${item.name}\r\n              {@if item.taskPriority === 'High'}<div class=\"task-state mt-icon arrow_upward\" style=\"color: #8E0306;\">\r\n              </div>{@/if}\r\n              {@if item.taskPriority === 'Medium'}<div class=\"task-state task-priority\" style=\"color: #D78822;\">\r\n                <span></span></div>{@/if}\r\n              {@if item.taskPriority === 'Low'}<div class=\"task-state mt-icon arrow_downward\" style=\"color: #81E26F;\">\r\n              </div>{@/if}\r\n            </div>\r\n            <div class=\"content__two__boxs\">\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Est. Time:</span><span\r\n                  class=\"content__two__boxs-item__value\">${item|flowEstTime}</span>\r\n              </div>\r\n              <div class=\"content__two__boxs-item\">\r\n                <span class=\"content__two__boxs-item__title\">Due Date:</span><span\r\n                  class=\"content__two__boxs-item__value\">${item|flowDueDate}</span>\r\n              </div>\r\n              {@each item.trackers as tracker}\r\n              <div class=\"content__two__boxs-item\">\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/Range.png\" alt=\"\" />\r\n                  ${tracker|flowDucation}\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/WorktimeSmall.png\" alt=\"\" />\r\n                  ${tracker|flowItemWorkTime}\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/BreaktimeSmall.png\" alt=\"\" />\r\n                  ${tracker|flowItemRestTime}\r\n                </div>\r\n                <div class=\"content__two__boxs-items\">\r\n                  <img src=\"assets/images/InterrupSmall.png\" alt=\"\" />\r\n                  <span class=\"content__two__boxs-items__yes\">yes</span>\r\n                </div>\r\n              </div>\r\n              {@/each}\r\n            </div>\r\n          </div>\r\n          {@/each}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <!--  Stopwatch Timer > -->\r\n      <div class=\"footer__console\">\r\n        <div id=\"footer__console__time\" class=\"footer__console__time\">\r\n          00:00:00\r\n        </div>\r\n        <div class=\"footer__console__b\">\r\n          <img class=\"footer__console__b__start\" id=\"timeCountPause\" src=\"assets/images/Start.png\" alt=\"\"\r\n            onclick=\"this.timeCountPause()\" />\r\n          <img id=\"footer__console__b__stop\" class=\"footer__console__b__open\" style=\"display: none\"\r\n            src=\"assets/images/Open.png\" alt=\"\" onclick=\"this.stopTimer()\" />\r\n          <img id=\"footer__console__b__open\" class=\"footer__console__b__open\" src=\"assets/images/Stop.png\" alt=\"\"\r\n            onclick=\"this.startTimer()\" />\r\n          <img class=\"footer__console__b__Return\" src=\"assets/images/return.png\" alt=\"\" onclick=\"this.resetTimer()\" />\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Music Player > -->\r\n      <div style=\"display: none\">\r\n        <audio id=\"myaudio\" controls=\"\" ontimeupdate=\"this.updateProgress(this)\"></audio>\r\n      </div>\r\n      <div class=\"footer__display\">\r\n        <img src=\"${playUrl[0].imgUrl}\" id=\"musicImg\" class=\"footer__display__photo\" />\r\n        <div class=\"footer__display__info\">\r\n          <div class=\"footer__display__info__title\" id=\"musicName\">${playUrl[0].name}</div>\r\n          <div class=\"footer__display__info__singer\" id=\"singer\">${playUrl[0].singer}</div>\r\n        </div>\r\n        <div class=\"footer__display__center\">\r\n          <div class=\"footer__display__center__cons\">\r\n            <img src=\"assets/images/Last.png\" id=\"previous\" onclick=\"this.playNext('-')\" alt=\"\" />\r\n            <img src=\"assets/images/Play.png\" id=\"stop\" style=\"display: none\" onclick=\"this.closePlay()\" alt=\"\" />\r\n            <img src=\"assets/images/Stop.png\" id=\"play\" onclick=\"this.play()\" alt=\"\" />\r\n            <img src=\"assets/images/Next.png\" id=\"playNext\" onclick=\"this.playNext('+')\" alt=\"\" onclick=\"this.play()\" />\r\n          </div>\r\n          <div class=\"footer__display__center__progressbar\">\r\n            <span id=\"audioCurTime\">00:00</span>\r\n            <span class=\"lone\">\r\n              <span class=\"cur\" id=\"audioCur\"></span>\r\n            </span>\r\n            <span id=\"audioTotalTime\">00:00</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer__display__right\">\r\n          <!-- <img src=\"assets/images/Order.png\" alt=\"\" />\r\n          <img src=\"assets/images/Playlist.png\" alt=\"\" />\r\n          <img src=\"assets/images/Volume.png\" alt=\"\" /> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"form1\" class=\"form-box wh100\" style=\"display: none\">\r\n  <div class=\"flex wh100\">\r\n    <div class=\"flex-1 h100\" onclick=\"this.onCancel()\"></div>\r\n    <div class=\"form-panel\">\r\n      <div class=\"form-title flex\"><span>Add Task</span> <span class=\"close\" onclick=\"this.onCancel()\">x</span></div>\r\n      <div class=\"form-item\">\r\n        <label>Task name</label>\r\n        <input value=\"${form1.name}\" placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form1', 'name', this.value)\" />\r\n      </div>\r\n      <div class=\"form-item\">\r\n        <label>Due date</label>\r\n        <input value=\"${form1.dueDate}\" placeholder=\"Please input\" type=\"date\"\r\n          oninput=\"this.setFormValue('form1', 'dueDate', this.value)\" />\r\n      </div>\r\n      <div class=\"flex\">\r\n        <div class=\"form-item flex-2\">\r\n          <label>Task priority</label>\r\n          <select onchange=\"this.setFormValue('form1', 'taskPriority', this.value)\" name=\"\" id=\"\">\r\n\r\n            <option disabled selected hidden></option>\r\n            {@if form1.taskPriority == 'Low' }\r\n            <option selected style=\"background-color: #81E26F; color: #fff; font-weight: bold;\" value=\"Low\">\r\n              Low\r\n            </option>\r\n            {@else} <option style=\"background-color: #81E26F; color: #fff;\" value=\"Low\">\r\n              Low\r\n            </option> {@/if}\r\n            {@if form1.taskPriority == 'Medium'} <option selected\r\n              style=\"background-color: #D78822; color: #fff; font-weight: bold;\" value=\"Medium\">\r\n              Medium\r\n            </option> {@else} <option style=\"background-color: #D78822; color: #fff;\" value=\"Medium\">\r\n              Medium\r\n            </option> {@/if} {@if form1.taskPriority == 'High'}\r\n            <option selected style=\"background-color: #8E0306; color: #fff; font-weight: bold;\" value=\"High\">\r\n              High\r\n            </option> {@else}\r\n            <option style=\"background-color: #8E0306; color: #fff;\" value=\"High\">\r\n              High\r\n            </option> {@/if}\r\n          </select>\r\n        </div>\r\n        <div class=\"form-item flex-3\">\r\n          <label>Estimated time(in mins)</label>\r\n          <input type=\"number\" min=\"0\" value=\"${form1.estimateTime}\" placeholder=\"Estimated time(in mins)\"\r\n            type=\"datetime\" oninput=\"this.setFormValue('form1', 'estimateTime', this.value)\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-btns\">\r\n        <!-- <button type=\"button\" class=\"outline me-4\" onclick=\"this.onCancel()\">\r\n          Cancel\r\n        </button>\r\n        <button type=\"button\" onclick=\"this.onAddSave('form1')\">Save</button> -->\r\n        <div onclick=\"this.onAddSave('form1')\" class=\"Save\">Save</div>\r\n        <div onclick=\"this.onCancel()\" class=\"outline\"> Cancel</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"form2\" class=\"form-box wh100 flex\" style=\"display: none\">\r\n  <div class=\"flex wh100\">\r\n    <div class=\"flex-1 h100\" onclick=\"this.onCancel()\"></div>\r\n    <div class=\"form-panel\">\r\n      <div class=\"form-title flex\">\r\n        <span>Add Reading</span> <span class=\"close\" onclick=\"this.onCancel()\">x</span>\r\n      </div>\r\n      <div class=\"form-item\">\r\n        <label>Name the reading</label>\r\n        <input value=\"${form2.name}\" placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form2', 'name', this.value)\" />\r\n      </div>\r\n      <div class=\"form-item\">\r\n        <label>Reading link</label>\r\n        <input value=\"${form2.readLink}\" placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form2', 'readLink', this.value)\" />\r\n      </div>\r\n      <!-- <div class=\"form-item\">\r\n        <label>Project name</label>\r\n        <input value=\"${form2.projectName}\" placeholder=\"Please input\"\r\n          oninput=\"this.setFormValue('form2', 'projectName', this.value)\" />\r\n      </div> -->\r\n      <div class=\"form-btns\">\r\n        <div onclick=\"this.onAddSave('form2')\" class=\"Save\">Save</div>\r\n        <div onclick=\"this.onCancel()\" class=\"outline\"> Cancel</div>\r\n        <!-- <button type=\"button\" class=\"outline me-4\" onclick=\"this.onCancel()\">\r\n          Cancel\r\n        </button>\r\n        <button type=\"button\" onclick=\"this.onAddSave('form2')\">Save</button> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ul id=\"menus\">\r\n  <li id=\"menusDelete\" onclick=\"this.onMenusDelete(event)\">Delete</li>\r\n</ul>";

},{}],"aNzNG":[function() {},{}],"79PXr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "flowEstTime", ()=>flowEstTime
);
parcelHelpers.export(exports, "flowItemRestTime", ()=>flowItemRestTime
);
parcelHelpers.export(exports, "flowItemWorkTime", ()=>flowItemWorkTime
);
parcelHelpers.export(exports, "flowDueDate", ()=>flowDueDate
);
parcelHelpers.export(exports, "flowDucation", ()=>flowDucation
);
parcelHelpers.export(exports, "trackItemState", ()=>trackItemState
);
var _utils = require("./utils");
const flowEstTime = (v)=>{
    if (!v || !v.start) return "-";
    var end = v.end ? v.end : 0;
    if (end < 1) end = _utils.getUnixSeconds();
    var ducation = end - v.start;
    return _utils.secondToHMS(ducation);
};
const flowItemRestTime = (v)=>{
    if (!v) return "-";
    var now = _utils.getUnixSeconds();
    var rest = v.rest ? v.rest : 0;
    if (rest < 1) rest = now;
    var end = v.end;
    if (end < 1) end = now;
    var ducation = end - rest;
    return _utils.secondToHMS(ducation);
};
const flowItemWorkTime = (v)=>{
    if (!v || !v.start) return "-";
    var rest = v.rest ? v.rest : 0;
    if (rest < 1) rest = _utils.getUnixSeconds();
    var ducation = rest - v.start;
    return _utils.secondToHMS(ducation);
};
const flowDueDate = (v)=>{
    if (!v) return "-";
    var start = v.start ? v.start : 0;
    return _utils.formatDate(new Date(start * 1000), "MM/dd/yyyy");
};
const flowDucation = (v)=>{
    if (!v || !v.start) return "-";
    var end = v.end ? v.end : 0;
    if (end < 1) end = _utils.getUnixSeconds();
    var s = new Date(v.start * 1000);
    var e = new Date(end * 1000);
    return _utils.formatDate(s, "hh:mm") + " ~ " + _utils.formatDate(s, "hh:mm");
};
const trackItemState = (item, type)=>{
    if (!item || !item.trackers || item.trackers.length < 1) return "";
    const lastItem = item.trackers[item.trackers.length - 1];
    if (!lastItem.rest) lastItem.rest = 0;
    if (type == "rest") {
        if (lastItem.rest > 0 && !lastItem.break) return "selected";
    } else if (type == "break") {
        if (lastItem.end > 0 && lastItem.break) return "selected";
    } else if (type == "work") {
        if (lastItem.rest < 1) return "selected";
    }
    return "";
};

},{"./utils":"e8TO1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3T0ci","7SwCM"], "7SwCM", "parcelRequire60da")

//# sourceMappingURL=index.f18de3a7.js.map
