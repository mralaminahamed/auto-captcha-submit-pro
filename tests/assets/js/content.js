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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webextension-polyfill-ts/lib/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/webextension-polyfill-ts/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

// if not in a browser, assume we're in a test, return a dummy
if (typeof window === "undefined") exports.browser = {};
else exports.browser = __webpack_require__(/*! webextension-polyfill */ "../node_modules/webextension-polyfill/dist/browser-polyfill.js");


/***/ }),

/***/ "../node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!**********************************************************************!*\
  !*** ../node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.6.0 - Mon Dec 23 2019 12:32:53 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ "./assets/ts/app.ts":
/*!**************************!*\
  !*** ./assets/ts/app.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./assets/ts/db.ts");
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill-ts */ "../node_modules/webextension-polyfill-ts/lib/index.js");
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _messanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messanger */ "./assets/ts/messanger.ts");
/* harmony import */ var _lib_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib-assets */ "./assets/ts/lib-assets.ts");
/* harmony import */ var _lib_functions_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib-functions-common */ "./assets/ts/lib-functions-common.ts");
/* harmony import */ var _lib_assets_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib-assets-app */ "./assets/ts/lib-assets-app.ts");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib-functions */ "./assets/ts/lib-functions.ts");
/**
 * Auto captcha submit
 * Developer: Mr Abir Ahamed
 * Website: https://www.mishusoft.com
 * Official Link: https://download.mishusoft.com/addons/autocapsubmitpro/
 * Git:https://www.github.com/mrabirahamed/auto-captcha-submit
 * */








/*communication channel*/
_messanger__WEBPACK_IMPORTED_MODULE_2__["acsComPortFront"].onMessage.addListener(contentResponder);
/*communication channel*/
/*payment confirm agent*/
Object(_messanger__WEBPACK_IMPORTED_MODULE_2__["webMessageReceiver"])('mishusoft-payment-confirm', function (payload) {
    webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_1__["browser"].storage.local.remove("appsetting");
    _messanger__WEBPACK_IMPORTED_MODULE_2__["acsComPortFront"].postMessage({ 'command': 'setLicence', 'licence': payload.licence });
});
/*payment confirm agent*/
if (window.location.origin.indexOf(_db__WEBPACK_IMPORTED_MODULE_0__["app"].domain.commonText) !== -1) {
    _db__WEBPACK_IMPORTED_MODULE_0__["app"].domain.extension.forEach(function (ext) {
        _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.extAbility = (_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.extPos = _db__WEBPACK_IMPORTED_MODULE_0__["app"].domain.name.indexOf(ext)) !== -1;
        if (_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.extAbility) {
            _messanger__WEBPACK_IMPORTED_MODULE_2__["acsComPortFront"].postMessage({ 'command': "checkSettings" });
            _messanger__WEBPACK_IMPORTED_MODULE_2__["acsComPortFront"].onDisconnect.addListener(function (e) {
                console.error('ERROR: Using port (' + e.name + ') are disconnected!!');
            });
            console.info('current domain in rage!!');
            _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.commonText = _db__WEBPACK_IMPORTED_MODULE_0__["app"].domain.name.substr(_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.extPos - _db__WEBPACK_IMPORTED_MODULE_0__["app"].domain.commonText.length, _db__WEBPACK_IMPORTED_MODULE_0__["app"].domain.commonText.length);
            if ((_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPageNameLastPos = _db__WEBPACK_IMPORTED_MODULE_0__["app"].baseURI.indexOf(_db__WEBPACK_IMPORTED_MODULE_0__["app"].page.ext)) !== -1) {
                _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.scannableFullLength = ((_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPageNameLastPos + _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.ext.length) - _db__WEBPACK_IMPORTED_MODULE_0__["app"].domain.origin.length);
                _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage = _db__WEBPACK_IMPORTED_MODULE_0__["app"].baseURI.substr(_db__WEBPACK_IMPORTED_MODULE_0__["app"].domain.origin.length, _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.scannableFullLength);
            }
            if (_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.commonText === _db__WEBPACK_IMPORTED_MODULE_0__["app"].domain.commonText) {
                console.info('current domain matched!!');
                console.log('app loader window creating!!');
                let loaderWindow = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{
                        'div': {
                            'id': 'app-loader',
                            'class': 'app-window'
                        }
                    }]);
                console.log('app loader window created!!');
                /*detect loaderWindow content*/
                console.log('app loader creating!!');
                let loader = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{
                        'img': {
                            'alt': 'Loading...',
                            'class': 'app-loader-box app-loader',
                            'src': _db__WEBPACK_IMPORTED_MODULE_0__["app"].body.content.images.appLoader
                        }
                    }]);
                console.log('app loader created!!');
                /*detect loader content*/
                loaderWindow.appendChild(loader);
                /*detect web page content*/
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('outer').setAttribute('style', 'display:none !important;');
                console.log(Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('outer'));
                if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-loader') === undefined) {
                    document.body.insertBefore(loaderWindow, document.body.lastElementChild);
                }
                console.log('app loader window attached!!');
                /*setting app assets*/
                Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["setupApplicationContentAssets"])();
                console.log('app required files attached!!');
                /*add setting window*/
                Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["addAppWindow"])();
                console.log('app setting window attached!!');
                Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["modifyFixedWebContent"])();
                console.log('web page modification finished!!');
                if (_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.showadv) {
                    Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["assembleAppContent"])();
                    _db__WEBPACK_IMPORTED_MODULE_0__["app"].document.body.setAttribute('style', 'margin-top: 10%;');
                }
                if (_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === undefined || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.home || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.support || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.fastpay) {
                    _db__WEBPACK_IMPORTED_MODULE_0__["app"].document.body.setAttribute('style', 'margin-top: 0;');
                }
                if (_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.login || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.registration || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.help || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.support || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.fastpay) {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('sidebar').remove();
                }
                if (_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.support || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.fastpay || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.help) {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('main').setAttribute('style', 'float:none !important; width: 100% !important;');
                }
                if (_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.user_area) {
                    _db__WEBPACK_IMPORTED_MODULE_0__["app"].document.body.setAttribute('style', 'margin-top: 3%;');
                }
                if (_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.help) {
                    _db__WEBPACK_IMPORTED_MODULE_0__["app"].document.body.setAttribute('style', 'margin-top: 12%;');
                }
                if (_db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.login || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.restorepass || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.registration || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.checkpay || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.updmoney || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.payout || _db__WEBPACK_IMPORTED_MODULE_0__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_0__["app"].page.aboutus) {
                    _db__WEBPACK_IMPORTED_MODULE_0__["app"].document.body.setAttribute('style', 'margin-top: 15%;');
                }
                Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["trackSimilarWebsite"])();
            }
            else {
                console.info('domain not matched');
            }
        }
        else {
            console.log(ext);
        }
    });
}
function contentResponder(request) {
    var _a;
    if (typeof request === 'object' && request.constructor === Object && Object.keys(request).length !== 0) {
        console.log('Request Ok');
        console.log(request);
        if (request.command !== undefined) {
            console.log('A command found and Ok');
            console.log(request.command);
            if (request.command === 'setUserDetails') {
                console.info('checking welcome window');
                /*if (captureElementById('app-priceList-window') !== null || captureElementById('app-priceList-window') !== undefined &&
                 captureElementById('app-priceList-window').style.display === 'block'){
                    captureElementById('app-setting-window').style.display = 'none';
                }
                else {
                    captureElementById('acs-app-window').style.display = 'block';
                    captureElementById('app-setting-window').style.display = 'block';
                }*/
                if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-welcome-window') === undefined) {
                    Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["addWelcomeWindow"])();
                }
            }
            if (request.command === 'getLicence') {
                /*console.log(request.command);*/
                clearInterval(_db__WEBPACK_IMPORTED_MODULE_0__["app"].body.dataEntry.count);
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('auto-data-entry-start-btn').setAttribute('disabled', 'disabled');
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('data-entry-options').setAttribute('disabled', 'disabled');
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('auto-data-entry-reset-btn').setAttribute('disabled', 'disabled');
                /*console.log(captureElementById('app-welcome-window'));*/
                /*if (!captureElementById('app-welcome-window')){
                    console.info('SIMPLE:: welcome window not found')
                } else {
                    console.log(captureElementById('app-welcome-window'))
                }
                if (captureElementById('app-welcome-window')===undefined){
                    console.info('UNDEFINED:: welcome window not found')
                } else {
                    console.log(captureElementById('app-welcome-window'))
                }

                if (captureElementById('app-welcome-window')===null){
                    console.info('NULL:: welcome window not found')
                } else {
                    console.log(captureElementById('app-welcome-window'))
                }
                console.log(captureElementById('app-priceList-window'));
                if (!captureElementById('app-priceList-window')){
                    console.info('SIMPLE:: app-priceList-window not found')
                } else {
                    console.log(captureElementById('app-priceList-window'))
                }
                if (captureElementById('app-priceList-window')===undefined){
                    console.info('UNDEFINED:: app-priceList-window not found')
                } else {
                    console.log(captureElementById('app-priceList-window'))
                }

                if (captureElementById('app-priceList-window')===null){
                    console.info('NULL:: app-priceList-window not found')
                } else {
                    console.log(captureElementById('app-priceList-window'))
                }
*/
                if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-welcome-window') === null || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-welcome-window') === undefined && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-priceList-window') === undefined) {
                    if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window') !== null || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window') !== undefined && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window').style.display === 'block') {
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window').style.display = 'none';
                    }
                    /*console.info('PL:: showing request')*/
                    Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["addPriceListWindow"])();
                }
            }
            if (request.command === 'licenceValid') {
                if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('auto-data-entry-start-btn').textContent !== 'Earning') {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('auto-data-entry-start-btn').removeAttribute('disabled');
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('data-entry-options').removeAttribute('disabled');
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('auto-data-entry-reset-btn').removeAttribute('disabled');
                }
                /*console.log(captureElementById('app-priceList-window'))*/
                if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-priceList-window') !== undefined) {
                    webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_1__["browser"].storage.local.get().then(function (setting) {
                        if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
                            if (setting.appsetting !== "running") {
                                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-priceList-window').remove();
                                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('acs-app-window').setAttribute('style', 'display:none;');
                            }
                        }
                    });
                }
                if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-waitForNextDay-window') !== undefined) {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-waitForNextDay-window').remove();
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('acs-app-window').setAttribute('style', 'display:none;');
                }
                /*console.log(request);*/
            }
            if (request.command === 'waitForNextDay') {
                if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-welcome-window') === null || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-welcome-window') === undefined && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-waitForNextDay-window') === undefined) {
                    if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window') !== null || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window') !== undefined && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window').style.display === 'block') {
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window').style.display = 'none';
                    }
                    Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["addWaitForNextDayWindow"])();
                    let display = document.querySelector('#countdown-time');
                    Object(_lib_functions__WEBPACK_IMPORTED_MODULE_6__["startTimer"])(Object(_lib_functions__WEBPACK_IMPORTED_MODULE_6__["retrieveTimeByDate"])(request.data.nextUpdate) / 1000, display);
                }
            }
        }
        else if (typeof request.clientVerification === 'object' && request.clientVerification.constructor === Object && Object.keys(request.clientVerification).length !== 0) {
            /*console.log(request.clientVerification);*/
            if (request.clientVerification.type === 'success') {
                /*console.log(request.clientVerification.paymentUrl);
                console.log(request.clientVerification.appId);
                console.log(request.clientVerification.userEmail);
                console.log(request.clientVerification.amount);*/
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('payment-link-button').removeAttribute('disabled');
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('payment-link-button').textContent = 'Pay';
                //https://host/payment/payNow/appid/email/plantype/plan/amount
                let link = request.clientVerification.paymentUrl + 'payNow/' + request.clientVerification.appId + '/' +
                    request.clientVerification.userEmail + '/' + request.clientVerification.paymentPlanTypeEncrypt + '/' +
                    request.clientVerification.paymentPlanEncrypt + '/' + request.clientVerification.amount + '/';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('payment-link-button').setAttribute('data-url', link);
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('payment-link-button').setAttribute('style', 'cursor:pointer');
            }
        }
        else if (request.message !== undefined) {
            /*console.log('Message found & Ok');
            console.log(request.message)

            console.info('checking message panel');
            console.log(captureElementById('messagePanel'));
            console.info('text is return with previous statement is true');*/
            /*if (captureElementById('messagePanel') !== undefined) {
                console.log(captureElementById('messagePanel'));
            }*/
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').style.display === 'none') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').textContent = '';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').style.display = 'block';
            }
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').classList.add('ev_' + request.message);
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-register-button').value === 'Processing...') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-register-button').value = 'Register';
            }
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-login-button').value === 'Processing...') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-login-button').value = 'Log In';
            }
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-recover-password-button').value === 'Processing...') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-recover-password-button').value = 'Password Recovery';
            }
            if (request.registration !== undefined) {
                /*console.log(request);*/
                if (request.message === 'error') {
                    /*console.log(request.message);*/
                    if (request.registration === 'already_register') {
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').textContent = 'Your are already registered with this ' + request.way + ' address. Login to continue.[Tips: Click on <*already member*> button and enter your email and login. ]';
                        /*console.log(request.way);*/
                        if (request.way !== undefined && request.way === 'ip') {
                            /*console.log(request.way);*/
                            let u = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{ 'u': { 'style': 'color: white;' } }]);
                            let ip_message = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{ 'strong': {} }]);
                            ip_message.textContent = 'If you have forgotten your email or password or have not set it at all, click Reset Account.';
                            u.appendChild(ip_message);
                            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').appendChild(u);
                            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-reset-button').removeAttribute('style');
                            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('user-ip-address').removeAttribute('style');
                            _messanger__WEBPACK_IMPORTED_MODULE_2__["acsComPortFront"].postMessage({ 'command': 'sendClientIpData' });
                        }
                    }
                    else {
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').innerHTML += 'Registration failed. Some data empty.<br/>';
                    }
                }
                if (request.message === 'success' && request.registration === 'new_register') {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').innerHTML += 'You have been successfully registered. From now on you can use the trial version of the software. You can earn limited $ 20 on trial. If you want to earn unlimited income from at least $ 1000 daily, buy one of our licenses.<br/>';
                    _messanger__WEBPACK_IMPORTED_MODULE_2__["acsComPortFront"].postMessage({ 'command': 'sendEarnLimit' });
                    let infoTable = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{ 'table': { 'style': 'width:100%;' } }]);
                    let infoTableTbody = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{ 'tbody': {} }]);
                    infoTable.appendChild(infoTableTbody);
                    let infoTableTbodyTr1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{ 'tr': {} }]);
                    infoTableTbody.appendChild(infoTableTbodyTr1);
                    let infoTableTbodyTr1Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{ 'td': { 'style': 'width:95px;' } }]);
                    infoTableTbodyTr1Td1.textContent = 'Earning Limit:';
                    infoTableTbodyTr1.appendChild(infoTableTbodyTr1Td1);
                    let infoTableTbodyTr1Td2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{ 'td': { 'id': 'earn-limit' } }]);
                    infoTableTbodyTr1.appendChild(infoTableTbodyTr1Td2);
                    let infoTableTbodyTr2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{ 'tr': {} }]);
                    infoTableTbody.appendChild(infoTableTbodyTr2);
                    let infoTableTbodyTr2Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{ 'td': { 'style': 'width:95px;' } }]);
                    infoTableTbodyTr2Td1.textContent = 'Earned:';
                    infoTableTbodyTr2.appendChild(infoTableTbodyTr2Td1);
                    let infoTableTbodyTr2Td2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{ 'td': { 'id': 'earn' } }]);
                    infoTableTbodyTr2.appendChild(infoTableTbodyTr2Td2);
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('first-name').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('last-name').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('email-address').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('acs-password').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('user-ip-address').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('let-login-button').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-register-button').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-reset-button').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('let-earn-button').removeAttribute('style');
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').classList.add('ev_info');
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').appendChild(infoTable);
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').removeAttribute('style');
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').style.display = 'block';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('let-earn-button').addEventListener('click', function () {
                        _messanger__WEBPACK_IMPORTED_MODULE_2__["acsComPortFront"].postMessage({ 'command': "checkSettings" });
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-welcome-window').remove();
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-registration-window').remove();
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-choose-plan-window').remove();
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('acs-app-window').style.display = 'none';
                    });
                }
            }
            if (request.login !== undefined) {
                /*console.log(request);*/
                if (request.message === 'error') {
                    if (request.login === 'not_exist') {
                        if (request.way === 'email') {
                            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').innerHTML += 'Your account does not exist. Open a new account.<br/>';
                        }
                        if (request.way === 'password') {
                            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').innerHTML += 'Your account does not have a password. Add a password to your account for your security.<br/>';
                        }
                    }
                    if (request.login === 'incorrect') {
                        if (request.way === 'password') {
                            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').innerHTML += 'Your password is incorrect. Try to log in again with the correct password.<br/>';
                            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-recover-password-button').removeAttribute('style');
                        }
                    }
                    if (request.login === 'failed') {
                        if (request.way === 'email_password') {
                            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').innerHTML += 'Log in failed.Try to login again.<br/>';
                        }
                    }
                }
                if (request.message === 'success' && request.login === 'passed' && request.log_status === 'success') {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('let-earn-button').removeAttribute('style');
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-login-button').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('let-connect').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').innerHTML += 'You have been successfully logged in. Let\'s start money earning...<br/>';
                    if (request.licence.length === 0) {
                        let errorPanel = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["createElement"])([{
                                'div': {
                                    'id': 'errorPanel',
                                    'class': 'messagePanel ev_error',
                                    'style': 'display: block;'
                                }
                            }]);
                        errorPanel.textContent = 'Your license has expired.';
                        (_a = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(errorPanel, Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel'));
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').classList.add('ev_info');
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').innerHTML = 'Need to purchase a new license right now. Click <*Get a licence*> and select the plan of your choice and pay the fixed price. <span style="text-decoration:underline;">Remember, if your IP, browser changes, the purchased license will automatically become invalid.</span>';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').removeAttribute('style');
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').style.display = 'block';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('let-get-a-licence-button').removeAttribute('style');
                        document.getElementsByClassName('acsAppTitleText')[1].textContent = 'Licence Expired';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('email-address').style.display = 'none';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('acs-password').style.display = 'none';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('let-earn-button').style.display = 'none';
                    }
                    else {
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').classList.add('ev_info');
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').innerHTML = 'Your license is still valid.';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').removeAttribute('style');
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('infoPanel').style.display = 'block';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('email-address').style.display = 'none';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('acs-password').style.display = 'none';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-registration-window-close-button').style.display = 'none';
                    }
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('let-earn-button').addEventListener('click', function () {
                        _messanger__WEBPACK_IMPORTED_MODULE_2__["acsComPortFront"].postMessage({ 'command': "checkSettings" });
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-welcome-window').remove();
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-registration-window').remove();
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-choose-plan-window').remove();
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('acs-app-window').style.display = 'none';
                    });
                }
            }
            if (request.passwordRecovery !== undefined) {
                /*console.log(request.recoverUserPassword)*/
                if (request.message === 'error') {
                    if (request.login === 'not_exist') {
                        if (request.way === 'password') {
                            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').innerHTML += 'Your account does not have a password. Add a password to your account for your security.<br/>';
                        }
                    }
                }
                /*console.log(request)
                console.log(request.message)
                console.log(request.passwordRecovery)
                console.log(request.password)*/
                if (request.message === 'success' && request.passwordRecovery === 'exist' && request.password !== undefined) {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('do-recover-password-button').style.display = 'none';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('messagePanel').innerHTML += 'Your account password has been successfully restored. Your account password [' + request.password + ']. Save it carefully. Now login by clicking on the login button.<br/>';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('acs-password').value = request.password;
                }
            }
        }
        else if (request.clientIpData !== undefined) {
            /*console.log(request.clientIpData);*/
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('user-ip-address').value = request.clientIpData.ip;
            //user-ip-address
        }
        else if (request.userdata !== undefined) {
            console.log(request.userdata);
            console.log(Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('acs-app-window'));
            console.log(Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window'));
            if (request.command !== undefined && request.command === 'getLicence' || request.command === 'setUserDetails' && request.userdata.user.email !== '' || request.userdata.user.email === undefined) {
                if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-priceList-window') !== null || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-priceList-window') !== undefined && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-priceList-window').style.display === 'block') {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window').style.display = 'none';
                }
            }
            else {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('acs-app-window').style.display = 'block';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('app-setting-window').style.display = 'block';
            }
            if (request.userdata.licence.key !== '' || request.userdata.licence.key !== undefined) {
                if (request.userdata.licence.key === 'trial' || request.userdata.licence.key === undefined) {
                    if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol') !== undefined) {
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol').textContent = 'UNPAID';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol').classList.add('unpaid');
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol').classList.remove('paid');
                    }
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-licence').textContent = '';
                }
                else {
                    if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol') !== undefined) {
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol').textContent = 'PAID';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol').classList.remove('unpaid');
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol').classList.add('paid');
                    }
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-licence').textContent = 'Licence key : ' + request.userdata.licence.key;
                }
                if (request.userdata.licence.type !== undefined) {
                    if (request.userdata.licence.type === 'trial') {
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-type').textContent = 'Licence Type : Trial [Only $ 20]';
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('registered-user-name-plan').textContent = 'Registered By ' + request.userdata.user.first_name + ' ' + request.userdata.user.last_name + ' [Trial (Only $ 20)]';
                    }
                    else if (request.userdata.licence.type.indexOf('Plan') !== -1) {
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-type').textContent = 'Licence Type : ' + (request.userdata.licence.type).toUpperCase();
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('registered-user-name-plan').textContent = 'Registered By ' + request.userdata.user.first_name + ' ' + request.userdata.user.last_name + ' [' + (request.userdata.licence.type).toUpperCase() + ']';
                    }
                    else {
                        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-type').textContent = 'Licence is corrupted';
                    }
                }
                else {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('registered-user-name-plan').textContent = 'Unregistered copy';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-type').textContent = 'Unregistered copy';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-date').textContent = '';
                }
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-date').textContent = 'Issue on : ' + Object(_lib_functions__WEBPACK_IMPORTED_MODULE_6__["retrieveDate"])(request.userdata.licence.issue);
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-lastUpdate').textContent = 'Last Update : ' + Object(_lib_functions__WEBPACK_IMPORTED_MODULE_6__["retrieveDate"])(request.userdata.licence.update);
            }
            else {
                if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol') !== undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol') !== null) {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol').textContent = 'UNPAID';
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol').classList.add('unpaid');
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-pay-symbol').classList.remove('paid');
                }
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('registered-user-name-plan').textContent = 'Unregistered copy';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-type').textContent = 'Unregistered copy';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-payment-date').textContent = '';
            }
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-id').textContent = 'Id : ' + request.userdata.app.id;
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-install-date').textContent = 'Install on : ' + Object(_lib_functions__WEBPACK_IMPORTED_MODULE_6__["retrieveDate"])(request.userdata.install.date);
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-name').textContent = 'User: ' + request.userdata.user.first_name + ' ' + request.userdata.user.last_name;
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-email').textContent = 'Email: ' + request.userdata.user.email;
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('setting-app-user-location').textContent = 'Address: ' + request.userdata.client.city + ', ' + request.userdata.client.country;
        }
        else if (request.licence !== undefined) {
            /*console.log((request.licence as Object));*/
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('earn-limit').textContent = '$ ' + (request.licence.limit / 100);
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('earn').textContent = '$ ' + (request.licence.earn / 100);
        } /*else {
            console.log("In content script, received message from background script: ");
            console.log(request);
        }*/
    }
}
function executeApplication() {
    var _a;
    _db__WEBPACK_IMPORTED_MODULE_0__["app"].body.validNum = '';
    if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('captcha-img-zone') !== null || true) {
        (_a = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('captcha-img-zone')) === null || _a === void 0 ? void 0 : _a.childNodes.forEach(function (element) {
            var _a, _b, _c, _d, _e;
            if (element.nodeName === 'TD') {
                if (((_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.firstElementChild) !== null || ((_b = element.firstElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild) !== undefined && ((_d = (_c = element.firstElementChild) === null || _c === void 0 ? void 0 : _c.firstElementChild) === null || _d === void 0 ? void 0 : _d.nodeName) === 'IMG') {
                    let img_src_txt = ((_e = element.firstElementChild) === null || _e === void 0 ? void 0 : _e.firstElementChild).src;
                    let img_ext_pos = img_src_txt.search('.png');
                    _db__WEBPACK_IMPORTED_MODULE_0__["app"].body.validNum = _db__WEBPACK_IMPORTED_MODULE_0__["app"].body.validNum.concat(img_src_txt.substr(img_ext_pos - 1, 1));
                }
            }
        });
        /*console.log(app.body.validNum)*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('data-entry-box').value = _db__WEBPACK_IMPORTED_MODULE_0__["app"].body.validNum;
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])('auto-data-entry-btn').click();
    }
    return Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["getLoggedInUsername"])(), _messanger__WEBPACK_IMPORTED_MODULE_2__["acsComPortFront"].postMessage({
        'command': "decrease",
        "data": {
            "username": _db__WEBPACK_IMPORTED_MODULE_0__["coll"].user.username,
            "workWebsite": window.location.origin,
            "actual_earn": Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["getLoggedInUsersEarned"])(),
            "referrals": Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["getLoggedInUsersReferralsAttracted"])(),
            "referrals_earn": Object(_lib_assets_app__WEBPACK_IMPORTED_MODULE_5__["getLoggedInUsersEarnedByReferrals"])()
        },
        "target": "earn_limit",
        "amount": _db__WEBPACK_IMPORTED_MODULE_0__["app"].extras.sitePrice
    });
}
Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("auto-data-entry-start-btn").addEventListener("click", function () {
    _messanger__WEBPACK_IMPORTED_MODULE_2__["acsComPortFront"].postMessage({ 'command': "checkSettings" });
    if (this.textContent === 'Start') {
        /*console.log('request to start earning!!')*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("data-submit-zone").appendChild(_lib_assets__WEBPACK_IMPORTED_MODULE_3__["dataEntryButton"]);
        /*console.log('data entry button added!!')*/
        if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("data-entry-options").value === 'auto') {
            this.textContent = 'Earning';
            this.setAttribute("disabled", "disabled");
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("data-entry-options").setAttribute("disabled", "disabled");
            _db__WEBPACK_IMPORTED_MODULE_0__["app"].body.dataEntry.count = setInterval(executeApplication, 1000);
        }
        if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("data-entry-options").value === 'bulk') {
            for (let i = 0; i < (_db__WEBPACK_IMPORTED_MODULE_0__["app"].body.dataEntry.options.config.bulk); i++) {
                executeApplication();
            }
        }
        if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("data-entry-options").value === 'manually') {
            executeApplication();
            /*console.log('earning!!')*/
        }
    }
});
Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("auto-data-entry-reset-btn").addEventListener("click", function () {
    if (this.textContent === 'Reset' && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("auto-data-entry-start-btn").disabled && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("data-entry-options").disabled) {
        clearInterval(_db__WEBPACK_IMPORTED_MODULE_0__["app"].body.dataEntry.count);
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("auto-data-entry-start-btn").textContent = 'Start';
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("auto-data-entry-start-btn").removeAttribute("disabled");
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("data-entry-options").removeAttribute("disabled");
        if (_lib_assets__WEBPACK_IMPORTED_MODULE_3__["dataEntryButton"] !== null || true) {
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_4__["captureElementById"])("data-submit-zone").removeChild(_lib_assets__WEBPACK_IMPORTED_MODULE_3__["dataEntryButton"]);
        }
    }
});


/***/ }),

/***/ "./assets/ts/db.ts":
/*!*************************!*\
  !*** ./assets/ts/db.ts ***!
  \*************************/
/*! exports provided: today, app, coll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "today", function() { return today; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coll", function() { return coll; });
const today = new Date();
const app = {
    "about": {
        "name": "AutoCaptchaSubmitPro",
        "guid": "autocaptchasubmit-pro@developer.mishusoft.com",
        "short_name": "ACS Pro",
        "name_spaced": "Auto Captcha Submit Pro",
        "total_users": "20,000",
        "version": "7.2.9",
    },
    "author": {
        "account": {
            "bitcoin": "34dSy7ez12kyiaDX2JoDGDB4PKFid8FT54"
        },
        /*"firefox":{
          "apiKey": "user:15632566:214",
          "apiSecret": "0e1ed4f9cdf43719f8d9dc73d0efb2199dee192b074af2a105479a4cecb2319b",
        },*/
        "refLink": "https://jubmoney.xyz/582121058832854/"
    },
    "date": {
        "toDay": new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds(), today.getMilliseconds()),
        "nextDay": new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, today.getHours(), today.getMinutes(), today.getSeconds(), today.getMilliseconds()),
        "nextMonth": new Date(today.getFullYear(), today.getMonth() + 1, today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds(), today.getMilliseconds())
    },
    "extras": {
        "digit": "123456789",
        "sitePrice": 20,
        "bulkEarn": 10,
        "OnlineBanks": ["meine.deutsche-bank.de", "www.dkb.de"]
    },
    "website": {
        "home": "https://www.mishusoft.com/",
        "donate": "https://www.mishusoft.com/payment/donate",
        "IpInfo": "https://api.ipdata.co/?api-key=2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "temporary": {
            "home": "http://localhost/",
            "monitorURL": "http://localhost/monitor/browser/",
            "paymentURL": "http://localhost/payment/"
        },
        "publish": {
            "home": "https://www.mishusoft.com/",
            "monitorURL": "https://www.mishusoft.com/monitor/browser/",
            "paymentURL": "https://www.mishusoft.com/payment/"
        }
    },
    "baseURI": document.URL,
    "domain": {
        "name": document.domain,
        "origin": document.location.origin + '/',
        "extension": [
            ".xyz", ".icu", ".club", ".space", ".host"
        ],
        "commonText": "money"
    },
    "document": document,
    "body": {
        "dataEntry": {
            "count": 0,
            "decrease": "",
            "options": {
                "tag": "",
                "config": {
                    "auto": 1,
                    "bulk": 50,
                    "manually": 1
                }
            }
        },
        "validNum": "",
        "button": {
            "start": "",
            "reset": "",
            "dataSubmit": ""
        },
        "textBox": {
            "dataEntry": ""
        },
        "zone": {
            "captchaImg": "",
            "dataSubmit": ""
        },
        "content": {
            "images": {
                "appLoader": "data:image/gif;base64,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",
                "appLogo": "data:image/png;base64,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Y29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6NTY0YTk0OTAtMzU0My00YTQ1LTkzNGItMDhiN2UyN2YzNjE3IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0NmFhYzUwLWYyMTUtNGJhMC05NDk0LWUwZjRkZjFkYWUxZSIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjVkOWVkZGFlLTI0M2UtNGI3My04OTYxLWUwYzVhOWI4MTk4NiIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTGludXgiCiAgIEdJTVA6VGltZVN0YW1wPSIxNTgwNjM0Nzg1MDk2NjU4IgogICBHSU1QOlZlcnNpb249IjIuMTAuMTIiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+CiAgIDxpcHRjRXh0OkxvY2F0aW9uQ3JlYXRlZD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkxvY2F0aW9uQ3JlYXRlZD4KICAgPGlwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgIDxpcHRjRXh0OkFydHdvcmtPck9iamVjdD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkFydHdvcmtPck9iamVjdD4KICAgPGlwdGNFeHQ6UmVnaXN0cnlJZD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjk4NGVhZWI5LTEzYmEtNDkyZi1hMjQxLThlODc0ZmJiOTczOSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IiswNjowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDxwbHVzOkltYWdlU3VwcGxpZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZVN1cHBsaWVyPgogICA8cGx1czpJbWFnZUNyZWF0b3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZUNyZWF0b3I+CiAgIDxwbHVzOkNvcHlyaWdodE93bmVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6Q29weXJpZ2h0T3duZXI+CiAgIDxwbHVzOkxpY2Vuc29yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6TGljZW5zb3I+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5GQMHWAAAABGdBTUEAALGPC/xhBQAAAYRpQ0NQSUNDIHByb2ZpbGUAACiRfZE9SMNAGIbfpopFKg52EBHJUJ0siH84ahWKUCHUCq06mFz6B00a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DodTU1OnT58eGRnZg4uxergyjhCiUCimTp06ffr0kpKSXbt2FRcX0zQNu6xCXRAEi8UyatSokSNHShTv2aVwvaU0URTF+Pj4+Ph4qes3bNiQm5vbsQPdW/KMY2Njr776ask1AJ16dHB/EEBTTgAApk+fPn36dIRQOBzmeb68vPzEiRMFBQWhUIhhGKlC/Yz9a6VuxRhLPZuSkpKamjpkyBCKoqRwRLpybztKrdcJ4Iw+ZRiGYZi0tLS0tDTJvjeuDzjDTJEm6wPO6OXenMPo1QJolh/9bPWyvEpSFoAsABmyAGQByJAFcGGit7ihGGOv1yu5mBqN5uxJeUKIw+EQBEGr1RoMBin75vP5tFothFAQBJ/PJ6XhpJy+2+2WIjWMsU6nYxjG4XCIoqjRaPR6Pcdx4XBYq9UCAMLhMCFECtYaGhrUanXrWev+yQC32/2PZ54xmUwY4yW33HL06NH6+vpnn3vuhRdfdDgcObm5i2++2WAwxMXFnThxYvWHH0IIN/76681Llnz8yScMw5w8efLpZ56JsVo1Gs0NixfX19fbbLZfN2368aefrFarKIoLb7gBUZTVai0rK/vPW2+dOHHiq6++kpKpeXl5W7duRQgdO3789eXLH3r44Qs1ECPk119//fa77x6477709PQJkyfPmTULIfT+Bx8kJCSkDhyo1+tDodC4ceMmTZqUe/ToI48+evmsWStWroyPi4uPj693ue7+858VCsXTTz1ltVp/C4YJQQidPHlywrhxUWaziPGwYcNGjRq1d+9ed0NDVVUVxriurg5CKIrin++9d9rUqeWVlT/88MOcOXNgt2xZ0VsEQFFUcnLytGnTJk2a9N+33zabzf99882f1q0rLi7+45IlEyZM2Llz59KHH9ZptRjjm2+66dNPP925datWqyWE/PPZZydPnjxyxIilDz7I8zwAQKrDiIiICCoUgiBkZmbygvDEU09JIrz7rrtUKlV8XJzNZhNF0e12B4PB/65Ysfy117Kysnie/9+773q93rakx88fvW6lfP9D6xMyshcku6GyAGTIApAFIKNXRcIIIYZhIIRyB3VCF9N0+9xQ0OTEERmdAkEQWpoWbV44fJcti5UhjwGyAGTIAug9kE/QkBkgC0CGLABZADJkAcgCkNEDODMVgRDavn07z/MIybLpjP6l6f379y9durSlNc9nCkCq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",
                "settingButton": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAACuCAIAAAANnI4DAAABfGlDQ1BpY2MAACiRfZE9SMNAGIbfpopFKg52EBHJUJ0siH84ahWKUCHUCq06mFz6B00akhQXR8G14ODPYtXBxVlXB1dBEPwBcXJ0UnSREr9LCi1ivOO4h/e+9+XuO0Col5lmdYwBmm6bqURczGRXxa5XCDRDmMKQzCxjTpKS8B1f9wjw/S7Gs/zr/hw9as5iQEAknmWGaRNvEE9v2gbnfeIIK8oq8TnxqEkXJH7kuuLxG+eCywLPjJjp1DxxhFgstLHSxqxoasSTxFFV0ylfyHisct7irJWrrHlP/sJwTl9Z5jqtQSSwiCVIEKGgihLKsBGjXSfFQorO4z7+AdcvkUshVwmMHAuoQIPs+sH/4HdvrfzEuJcUjgOdL47zMQx07QKNmuN8HztO4wQIPgNXestfqQMzn6TXWlr0COjdBi6uW5qyB1zuAP1PhmzKrhSkJeTzwPsZfVMW6LsFute8vjXPcfoApKlXyRvg4BAYKVD2us+7Q+19+7em2b8fVyhynAcPeGkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+QGAgYSD4iO3+8AAAHAelRYdFJhdyBwcm9maWxlIHR5cGUgaWNjAAA4jaVTW44cIQz85xQ5gvGzOU4PNFLuf4EYDPPa2UibWGq1KGO7bBfpd63p1zA1TDAMT9CqpM0ImCakTS9jQ0E2RgQ5pMiJAHbxiFjfAUACkK+kWcnIgLOAAFf4B+tedTDKG2iE7c7sh5Z+eL8pqxhpFMq4YIbkjYGhcTh0OUjNfEKw8XIEntn5Hj6OhZ9rFFiTj3OOMRztEfCCX/WO2xO+CTk+ErFvJqhi5lUBPOAz/s39NKgaaoszbQf7LFwAqwVn94Lzxm23xsnhaqLvW9qbrCp6iQjtgOX2BD5C4OKfk5CxtdGoDqW5sNQd6pfGkLGt8xV3hiQEVwJ8J5D+ziCfDwYCqxhGsVmEogizJ9I+HoR/+cEAHk/iyYaC4U3AriklInwWZIbKESnt6sMIZZ6tTIa9FZj47czz31YlanUmqs7iEwPt0RkdPRJS+cgUufRg1I+5jZtW/pgQi02/HfOfj+aAZpfNvc2RaE8e1W3mxdNiCFJmIIXM4JTbi+7CaCeCk9oMFA6Bca3zYinlXBUicZf6ne72sN/WDvvNfRHefyR6FWL6A7yMICPZdqPzAAAAg3RFWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMACmlwdGMKICAgICAgNDYKMzg0MjQ5NGQwNDA0MDAwMDAwMDAwMDIyMWMwMjM3MDAwYTMyMzAzMjMwMmQzMDMyMmQzMDMyMWMwMjNjMDAwZTMxMzUzYTMxCjMzM2EzMDMyMmQzMTM1M2EzMTMzChGhkL8AACs+SURBVHja7X1ZcFxXet5/lrv2vqDR3dh3igS4icOhJFtjjTT2jGfxjMtx7HLKeypxxYkrqXI5U3lI8pDyi1OVh1SlnIqdKjuJ7diJ7ZkknoyjGc2MNoraSAqkSALEDjQavS+373pOHo6IgURxAdAboP4eVE0IuPfcc7/+9/8/qFKpQA89NBW40wvo4Riix6oemo8eq3poPo4PqxAA6vQaehA4PqwC6NGqW3AcWCW4tGk4GcNRKJYJxj16dRS00wtoAhAC4LBWswum6zqeT6G6RDSCOQDnnHd6eZ9AHA9ZhQCgbLl/vl757bc2/2a1vF53GHAA6FGqIzgOskpQJ6SQAZX816JBVkvrFXMqrM71+QcDSoBij3GvJ7PaCPL1r3+902s4NBBwAECIO961nfr3Dff7dWfVcCOcI849xmVhbPWM+XbhWMgqDgCQ9slTAUVCCCg6Q5BjOr+3UBjbrD7d5/vZ0fBoUCU9UrULx4FVAgpBPpkkNCnRcBgHDsAAlkwXsjXbsMdD6nhU+1TCH1ao7TGP9TRiC3F8WIUAZIJH/PK24zVsT8EoTpDHYc10v1d3xsvWlw0Hu2w4pPoVGlIoRdDjVotwHHxAAc45JXgsoKQkUucAABwAIwhgdEbCusu+nan9wrXt338/d63QqFiuxznr9JqPK46PrGL8A1mVkPA259EP2+YIAXAuMbicN0oN+42A8lQycLbfH6QYAbg9odVUHCdWcV3Cs2FtXq7YHv/Ik2EAGaEEwJbtvWa5UHP+qeNZtpsMKP0+OaZKFIGwxhAAQgghBADivx8APcTa57uRMX7vM+ec8U9oFPY4sQp0iseCSlIlD/m1EEFnAHHO/3ir9l+2619I+L6SDn464dckTBHCCDzGGWeCDfxeJJU/KqS6y797HxDGCN9j5ycNx4dVAhy4qkoJnwyuxzg8KCGIAOIEOQA3io163X5zszLbHzgd0wZUlClV13YKW/mi67rVulGp1jDGjXq9Xq4ghO6PeXHGqCwHIxHAWKIkGg5JEg3q+lAinopFIgGfQilCwBjnnHuMfRKk17FiFefAOUR1+fmAPF9suMDlB0c+VYQUgIrD/ofpQd35BZcXa41B7GyuLd9dW1vI5iwGG1XjeqkGGEOpAlsF+NhIqsvAp8BAHxAsS/TpWFiXpYRfn+qPD8bC0aBf1zRFVVRV9et6IhL0a6rHPpCHjB1PhwEdp7p1jBDj/Fqh8d2Nyp+vluqM+x+veoEDGBzuOi6rV+HuTdheg0YdHFsDpmIMABRj8mBdxgEcxjgHBrzKOOMcGAfHA8sGWYJk3xeGkrODqRMDyU9Nj6XjEY9xTDAlhBICAHDsxNexYhVCwDlkTPfKZuV3b+zkGU88dkDdA3A5dxnDzAOj5uazxu1rbmEbYYIIQY8qruH3LC8GIOhlcTA4BwCNkj5JiipSVJX7NCUaDsWTiROjw7NjQ9NDKYKw63nHTDMeKw0o7Om4Sgd1iSEoACQe+08JAEFIoRRhhUuyJyuy7nPy2/bOppPLMMsEKiHyQD/gA59RBAARACAFIAjAATzGskZjtVoDx4NKAxRZH+n/6c3trc2t1aF0IBiIRyODiZgiUeDc9Y4DvY6VrBLQJHJrp/bP3tq81nD7AA5YwYcxItSrlqytVWtr1SnnuWVy1wHggA4eOkYAjPO6x2qWDS4HXfv8qcmvPHnq2bkTQZ+uKrIiyxghOOJa8RiySqF4uWT+p4XC6zu1TdN9TNPqYyA8N+Zx17F3MubKLWtzhTk2lhU4XLyAc3CBuxwYQlGZ9ityKqD3D6Sef3LuufOnfaqCADzPO7q0OlYaECNEMHaZV7esUrVqOB49zOvnHDDGhIAky30prGpyeszeXrM3l5njAEYIk4NdGCGQAEkIGOfbhrlSqMCiDZt5yzSNSiWZSAymEsOJuESICEZ0el/3/4DHRlYRjFyPVU27ZNrzmfJ/uJNbB0kjEm5GQSjCGAAx17F3Ns3VO24x5xk17jqHFFp7YXle0bDAgxeePPnTn5p7ZnYmFgrqqipLhPMjphCPD6tUiW6Van99Y+XNnHnHxiaVvCa+8z1glmmtLzbWFu3sBsKkiTcRCW+NkJCqTCXjX3z6wsVTM1Pp/iMnsY68BsQIMMIu51fubr22Xni57P7AxHnAc4cxqh9yO1kBzt16zatXAeHm8pYghAF2LHu9aswXq8D5dnbn1MTok09MxcMhzpiIhXU/jrCsQgAIgcfBcFm2Zv/xO3d/b7UyHIsEMaIt8qEQAs7cSqny5vfs7CaSpNY9msv4TqUOknRxZvRffOX52YmxUMCvSFR4kS3d2Cas/wizCgECKNhsPlf/z7fz83WLMy61MpuLMHEKWXP1TmPltmfUEW2tpOcAjHOFkAqlv/PcpZ989qnhRFSTJdfrdm14VDWgQrDhsbsV82qm9vp27ZWaRThEEeYtbNZCgMCtV8yNu8yxEWl5waO4QcVxK+X6Ny6/YzYaF8+eOjk+MhiPuq7XzZbW0WMVQoARKtvuasV6ebv6zfXKi2VrVqEUQQsphRAw5lWrbjHnlPJYUlpjtn0IHAAhpBMUCGiXVzKXFzd+tWY0LBtmJuKhkESJ63mtXsMBd+vIaUARen4lU/nL1fKbO0aVMbX1NUwIE2abxu3r5vqCUy6IQEP7nz1j2c8Mpz934fQvvfAjqXjMdpz2r+FxcMRklUpx2XJf2ap+b7P6SsGoeUxFgFreo4y453qNmrWz6ZTyCJP2UwoBCIX3ysY2gms6wc9fOD03Meq4rtd9ZtaRYRVCQBAqmO77eeMv1iovFRvgeDGKW08p4AhVa9Wl9RXY2IB8AXQf7CkoBoKBYEAABEsYywipGFGEmytARelzWpULtvvy6ubLFePfIuRT1VQsIknUdbtLFR4ZDYgRcICX1it/tFK6U2yYjCvtmvyCCHU3lpz5N3CjhjyP7+ELAvAAPM45gMe5yznnohimtVTPWPZEX+wr50/95pdfSCfijuO2Zysed8eOBKuE4ntpo/rdzcq3Cw2FcQTQhl5kQY0G5l8ixiW/NzOYUmX5hwWcCDBC2VJ1q1i2HHd1J39zK5urGf93MwtrWWiYoFDQlbBMFYybW8Buel6Jw/m+6Ncunfv8p8+dmRpzHLd7vMJu14BC8eVN9/288Vfr5e+VTMn1aOu9egBAAGsen6HoF1L+s5HoZEhNxaMypeyHfYQIIYjXG+la3fXYVLV6vlK1bOeX6katVitVaqv54nwm992NHajUAbisySFKSDPopRHiuu7b2fzb372sy5Jf+2BtXeIVdjurAMBj/N1c/c9WyvPFhsa43hZKAQADKHA+qkqfG42NhjUZIdd1XfejukYhuD8cBIDBeFi0d2GMHNfLV2q3NzJDi8vJW3fXM9lKrV5ymel5HgeMDmvtcwA/pT6A7WLxj15+s2DZv/bjn0nGI+3ZmUeiq2fCSBiZHp8vmT/YKP/Vdo1yEM1VbQAHqDN+0a/8SCpwMeEPKpQ92FLa07YFYkINQqBIUjwYODmcfu7ME8+fnz09MZJrmG9uF41cuU6xhtHhhRYCoBivVOrEMOKRUMCnRfy+bsjmdK+sQgA2h52G8/JG+ZWcseOyIMW4LYPOEIALsOjxvxdSnk4GdInAQ/tFd//X3rZBgnFQVzHWEcJx1w0GAz5d+5kLc2tb23/xzs0ry1tgWaGgrpEDFmkJaBSXHPfNzWz/q28GFDni96sSRQh1tnKmS1klvvN5071ZaPzlauV12zsrYd6u2XkeAAZIy2Q2rD4R0Qlwj+37zpxz1+NwL5iUCAeTkVnG+er2jkXlIb++upXdtBzTYxT4geMQnENKlW3O/+zbr0/Ewsm++ES6X1fkzk6B61INiBBiHF3ZLP/BYnHH8cIYDlXVCQD3Qj6Pg7zHExT/3FDwyf5ASpegOWxGQqb5VGV2dPDpuRMzQ+nL69urO8W66/oleuDHEy38dVVazpfBqM9NjPh9vv3KKgRAMKYEU0IwxuhwwZFuZJWEkemx67n6dzYqf5hr9GOkHJRSIkY677IdxqMIHlMk3OFwTqc/PxEdD2ty8+w48ZYoIX5d8+t6OOB/ciAxFQvatnNzPVsDHpLpwd4kAghRsl6oblbr49FQOOCLBgMPpwVGiBBCCKaEYoIZQKFaX8vmVra2d0oVx/V8mkowPth6ulEDMoBCw/nvK6W/yTeewHAYW8rmAAi+oEsyhorHyy4z+cOmK3EAi/FzKpmLaFMhNaZQ021yEIgxZjOGAJKxcDoejUSjmu6LYngnk99w3H56wDCcBxD1K4Zp/so3v/tnqpKMRe//Ct3rLgMAcBlzbcdjDDh3Pa9h2Xc2tt64s/zuysaliZFnZmcS4RAiCA4ksbqLVQgAI5RpuNcLjcViY8f2Rg8T6+Rww2N+gv/1VExT6A+2a2/n6osNN/Bg8cMBbrnsn/f7nh8MSQS7+zenHntp4HnMA3ZiMJUMBy9Mj/+3v/nOH3zzFXckJh9UQkiEeJzDRub6wvJAKnliKKUrsijGElNuxDQRhBAheC2bn19eX8vmtnZyuVyhWqkUasbdWuN9w/77n7l4ZmLkMGXN3cUqMTd2tdT4zlZ12/aiB43rcACPwzznvx7TvjQQPJMMmBy2Gu7dUqPI+INYJQwvTZVmwtpMRJMJPoCRvo9Fcg4AskRj4aAkSb/8xedPDCZ/+1svQ8NMKhTwvsNyHwh1BN+/sRAMBob7ogFdx5hjjAzLLlZqpVq9XKnW63Vm2+s7hfmNzGKueDlbLOwUoVIHw+ob6//NT59N9sUUWbJs+8CWVRexCiNwGVQc93bB+PfZ+iyC0EFtGpuDjNHfDSifHwx9ZjSqEVS03DG/HCO4yGH4AX9VYzxK8K/FtYmIFlOoy1grSfUBXM9DCIV82vlTM+FgYKNc/dv3bs/ny/3Svv1CDoARSvq07y+sSwQ/Mzsj5BMwlq9UlzK5W5uZd5bW/+T2MtzdAM+DoAaU+CjpUyjpD2fKxrOjA1946slYJOI47mGcyC5iFUGo5nmvbtfeLJoJxvFBdZ/H+Q5Csxr9jan4qT4fAe4yrlM8GVTiEoYHMAUB3PX4mAQ/PRyajGoua191OOecc444H+iP/+bPfDHs0+a/8X2PMgIHHX+lSeuF8h//v1f6omHOvNXVjVyxbNhO1XHLttPnuEZfQIyJw6JeTSi7gH98KH12cjQc8HuHy/x0EasAIctlb2/XXq1YkUPovvc4/MOo+rXRyHRU80nEY4xxoBgFZBLWJVAo/0BRfAgNxj+l0QtxfSigBCXSDjH10aVzmdK+SPgrP3op4vf91l++CJaVVinb/04kKCla9v+Zv+1XFI+xWxtZMEyQKUgEURql2L9nGAkCKHrMrDX+8eee/rEnT/tUFSN0yGxit7AKI6jY3lrFulFszFvuGbpvqwIB1DkHQL8YUX98IHQxFZQw8u6xAwFQhCK6/BmflK/Z8OGSBw5wi/F/FFSeTgWDMiX3SuTaCQ7AGcMIzYwNSRL9nULpW+/cuLqdT+rqfmvICEIMoFCurrEyAohrMvUpD/plj3MbIfBpF5+YnJ0YBQSHT1F3xQxjUYp+q2D86Wo557LJA5lTHOAuA8DoVyZinxkOEwR7p6uIuHxMk2Y0ygC8D78m8Y8zIeViwq/SFrp+j34KzpnHBvv7/sHXvvCl0zOQrx9sKxCAn5KELPXJEn3ofpZdb0BTPj83PZzuT4QCuBnZnq5gFQAwQLma9R93ajXGtX0aE+K3r9reT/ukfzkTH4to2n0byTkggIQujeuSzbmzZ9+qjFOA30j6J6J6QMKiPLCzUCTaH4186bln/s2vfqXusS37gPXpjzyJEwFYZeNMPPxPfuLZ8YFUs7KHnWeVcP22DXurZtsNl/F9l+N5AB6HKYVe7NMvDQRDKr3fe+PAAUHKJ4/7ZQfA+uHPoQyQUMjz6cBoREPQmXO6hLOGMSYYA4Blu5W64fMHBlL9EiEHC0U+EhzAYgxC/pmRgdOTY9FQoFnlWZ23qwhCNdd7Zbv6RsUaoJjuX1SYjEsIfS3lP5sM9qmUIHS//yZkVUqXRnyyQnDJY0JNuJzHJDIZUs/F9AFdtjvXWcDv5Zccz8uWKrfWNhc2szeWVmO6ioBzzps+DtllvOC4X56dPjE1IUtSE6/eBazCCDi/mW+8UbND+z8Xi3OoYzSg0hf6/adjOn5oVyAGkCl+wi/fqduexwhCNxz262HtuVTAL9O2iSkhljBGCCGCSd2y1nYKO8VyoVypVKrVSjlfqqwVK5lKLVOpWbYjAfBmUwoB5BkDw/3ahbnnL5xWJMqa943qMKsQQMPjedNZrVo3Le/0/mNUKx572ie9kApMRbSoQhoPTdsxDpTiyaBSMN11hwUIRGUyF1bnYrpEUKuNdEEkxrntukbdaJiW4zqI8VK1dmNt687W9vxG9pvr27CyBTUDghrIEpVpjJJWTG3P2O6QppyeHjsxOjTYFzNMq4kBuk6ySmT9Nuv2OwUzb3l+zg8QpSozfj4gf3E0ElIl61HfNs65QslkQLlbbPzA4E9S/IWINh3TB3WZA2+158cYA4Rs190pV2+sbFxbXlvc3F5Y31rOFfm9yXpJAIj5IeZv7VIAuGnNDPT97GcuxWJRy7abW+XXUVmFACHYMZwreaPsscQ+AwriPTwTUkejep9KZYwe+W1jHIIKORPR3tuqgMsUlXwt7Z+OaNBi5UcJKdXqb96+u7axVSoU6w1zvVheLFSWq/WNSh0sBwgCgn0Yaxi14zByzoFI6WTi0ycmktFw09OdHZZVBKOqab9YbGDO9X2KeYNzitBPJXxzcZ/8eEkzxrlOyaBfClEMEjkVVKcjWp8mtady0mP82vr277/8DtzZBD+FiE9S5Dgh1K+24e4CCKDBWKlu/tyTJ3/8wulENKxIUtM76zvJKlFZYJruexXrCZnI+yEVBzARJCl+Kq4/EdU5f6yTlTmAhCBASUCmn4+oF5P+iEolBE6LSeUx5lPVp05OyZToivxa4uZysSKKFtrcWi/OKwCX/cSTs8+eP40xdtzmd6h2jFUYIdtjS1XzruEA3veAFYfxuERmQqpfpQpG9mMP/OUACEEqrP6dkPoj/QEfJW2YFcw5Rwg0WX5yamwilfipT5/57rs3fvfyVXtpA2Sa0BW8/7qXg6HiuH2aMn7uiYFkfzTgY605PaCDrAKX84WKtdRwE3jfU9FvMf6zCvnJlD+sSvvaF8Y5AjQX02WM+30SbuPoOowh5PcFfXo0FFRVdbQ/fnNx5dWFlZfXs+BZPokGKWnpUhCAUbfO9kV++Uc/NZxOEox5a86a6xirEIDH+GbdXjXdwP49Z8b4hE4v9fvDKt1XKRDjgBDMhFXxuZ3gHIS60WTp7OTYxGBqcnQ4Fo/5r93c2N7ZaVg257SVR795nAPBJ9KJZ08/keyLua7bog3oHKsQ4hy2atYd01X2aVEBAMgkrEpRhcoYHaStCjqTmfng7py7jCmUnhhMTib7Xjg/+51rN/70B1feeus2xAMRVdIIaboEdTnPmfYLpybPzp30+zSCUbMr8n+IjrGKATgeyxnOTds7vZ+yR48DAvhiUEkGlP3XS36Ajs9rZYwhBLqiSH6qqgpQMtkXu3Xu5MsLK//r9kqxWA6EfDrBGKGmrBQDVBmHuv252cnPnDmpynJLo3OdYRUCsD1edVjVdMFlSN5H/64DHAAuhJShkCoOBDyi4Bw8zjzLphifGExPDaRmJkYD8RtxTbm6uLrjeHXXxYxLzYheGR4LUBIbTZ2bHDs5MmjZdksHyHSIVQiqtrdl2A3O9zuy3OAAHE4FldGAAghY5+tWDgvOOQNAAKlo+GvPXHju9Mz1heV/9+2XX7u1DKYZD/nooT3EUq3x1FDil7/0wuBA2mmZObWLDrBK9NqWLfduzTYYj+1nxziACxCguF+lUZXCcTj2DGC334ZSVZZ9uqbIyr/y+xbWNt+6vfSHb78PNQNkklSVAw4W5BwA98UiF2Ym+qPhNpxF2DENWHe85bpjcAjsR1YxDn6MRlTql6mKkdm5os1WwGPMYwwjSMUi6Xh0bHgo2d+nqfKd9cxqobRgWBoCDe1vOCTjPGu7Z8ZSn35iarAv6tcU66A1gI+PzlnrnNucM76/ukGL8z6JzARVSvHxYtQPwTl4zANAfUH/j52dferk1JXbd7/1xtX3//a1KmeuJoclCo8ntBCAwTjkKr/41ec//+wlWZactkwQ7ZisslyWMV2b832d2uFw0AmKKoS2ayhoRyAmFkkEE1nSNeXs5FgiGHju5MTrt5a+8d6dhfdXIKglNOWRaWjTYxol6hNjY8ODA4kYFnUTrUcnWIUAEHJctmG5Dod9DUOpAQ9glNSoRPAxMakeDMY5c10A6AsF+0LByeHBUCwWCwXmo/75bPFqrUFcL4zxQ5zEouXMBfSvPn1uKNWvUOp6Xns2rZNRUAmh/ZqfOQZxiUwGFF06thrwfohycpmSizMTsyODmxfP/s8fvHH11Xe9bK6kyn34wS+xYQ+HAl+9dH50MNU2SkEn41WO+17djnJO9pm2lxHoEiHHWgN+LDBCkiRJlEqS9POffebpE5PzS6t/cvna1TtrIKGArgQI2VVvjEPWdp6YGDg/dyIRDeuy3IrahAehY7LKddlWww3IRNsXPThXMQpJRMKolQchdSM450Jo6Yp0YnQonehLJOJBn351qH9ha/v17cKm5YQoUQnGAC5waNiff2LiR8+eUhWlzdZCJ7PLcICCYg5hggd0SWvlGKAuB2PctGyZ4JnB1Mmh9LPnd15894b10msv31qx/arCOQfkAQCVLs2MP31yepeObUPne2w+ZtcQYoAI5x/bxIUQEAz7N8mOGxACigklJN0X+4kLp58cG7yxtPa/r97867duwN1sem7ot7762fHRYYmQNgTTP4KuYxUHpHgO5szEkocwQoA/LL15F+SGuwGcA+fMZkymdKQ/PpiIx2JRXyBwJhF5e2HF79N/7Mm5dCLuuG77zz7tLlZxQAyhmFnWnHpWjxtUZehQg6M/CWDsgyDUYCySvHTuqVNTF5bX13PF6cFUxKd35LSILmIVBwTAJMdOG/lEZWOsur2jRdd9sW01xDCROWDeLee0dCcQRjKm0WDg/NTYyZEBv6Z1KqTXRaxyEdY9d6i+E63vhBp53ihQuyq7Zsy1CrK/RBWbyIAYguYezH58wBgH4ATjaMCPEHK9jp2i20WschAEPHustOIziw5VOSCf0/CVlrzyylZwcCk4UNCiot29Z1c9BO33+O5Hx1jFAYAJkiAOwBGK2PVYfUdz6pR5DFMQs2c5p9ztr20H7XpVCdakaNWRMzZPEpDQo9tKe+gIOsYqSrBfoxIXthJyASXNcrK6SZm7e1A2F93NAKrTUBxDNUtPywbKoaVVSR/oi/t13LIukR4Og86wigPIMrnkl/M122KcIi4xN9Eox2vbgCm7rzvQwwQAZM5GjU2ynL9V24rx89rwkKy0r5Ouh8dH5zQgB5cDF0Y6c1K1bZ9ZwI8ayIkx5q5bzWVfe/WVlaXUyMjI8PBwMBgEgBY1TPZwAHSCVRyAc0pwv4zrBjQ4T3jOYDXjN8v8UT3M4heYY6+vrRXy+VqtVqvV+vv7w+FwIBCQJMlrY2a+hwehYxpQlfCAJq1VLGLbEbsWb+Rlx/CI/Dh/jjD2+/2c86WlpTt37qTT6dOnT4+Pjwuh1co+zR4eCx2ur2KITDWKw+VlzFyO97cYhBDGmFJaKBTeeuutu3fvDg8Pj42NxWIxWZZd1+0JrU6hY7LKJ5Fhnfq4EzFKESOLOLB9j/AAhBAhxPO8nZ2dXC5XqVQMw0gmk/F4PBKJUEqhXTW1PexFB1jFATjnIUWa9Etpu0wbJcVzPEwPPHUHY6woCgDs7OxkMploNHrixImTJ08Gg0FJknpOYvvRIVnFIahII7o0VV3LVbeZdHBK7QUhBGNsGMb169eXl5fHx8fHx8fT6TSllHPeE1ptQ4cqjDG2G4ZRyKpGUWUWR80ZNicOv2OMVavVUqnkOE6tVsvlcolEIhqN+nw+wa2evdVqoEql0u5bIoQxXl9fe+/6e7dv364bdUr31b71uPA8z3EcWZZnZ2enp6fT6bRQiCIi3+an/kShE3YV54yxXC5/4+ZNz/MIadUahEIEgFu3bmUymWQyOTU1lUqlgsEg2y1K6qEFaDerMMau62YymY2NjXq9rihKS8NL4uKmaVqWVa/XDcPY2dlJpVKJRELXdYxxTyG2Au3WgISQer1++fLl27dvl0olQtpX6skYM03T7/cPDw+fOnVKEKvnJLYCbZVVCCHXdWu12srKys7Ojqq2byI0AGCMNU1jjK2trW1vbyeTybGxsYmJiUAg0M5lfBLQPlYhhCilmUzmxo0b5XK5/XkVUTPjum6j0Wg0GqVSyTAMABgZGYlGo3Bv3E8Ph0f7WMU5t217a2vr2rVrwjVrz033FmBJkqTruqIomqYpiqLruvAT27YJnxC0iVUYY8dxstns1tZWrVaTJKkNsmqXTOIYNFmWY7FYPB6Px+MDAwPhcFhE5FEzTu/sYS/axCpCiOM4i4uLy8vLrbOOGWOe5zHGXNdljAWDwUgkEg6Hw+FwNBqNRCKSJFFKZVnWNE2W5d1S0q5lFfrgzDfMOT9CRT7tYBVCyLbtYrG4vLzcOiMdIaQoiqqqiqIIHRcMBoPBYCAQCAaDogAL7hX3iZiZ1+mugUc+ked59XrdNE1Kqc/nE/ny7udWO1iFMd7e3p6fn69UKq0LJSCEQqHQ0NCQUHPRaHRXGglta9t2Gx62icAYVyqVO3fu3L59u6+v7+zZs+FwWJL2dxZGR9AmWVUul+/cuWNZVutYZRjG8PDw9PR0KBRSVXWv6SZeQ/e/jL07xjl3HCefz1+/fj2XyxWLxXq9Liqq+/v7haLv2idqLaswxp7n5XK5TCaTz+dbGnLknDcajVqtFo/HNU0TplVLn651EKzKZDILCwsbGxsY41KplM/ny+WyZVmu6waDQUVRurbFqLWxdUKIaZpXrlx5//338/m8OGq4dbdzXVfTtC9/+cujo6Otu0urIShlmuZLL7309ttv7zVDGWOU0r6+vosXLw4MDOi63unFfjzI17/+9dbtjud5pVLp6tWrGxsbhJCHU8pjjHseAo7utQHuFyLIaRgGISQejx/F2gRR3VooFK5cuXL37t2P2AzCEzRNM5/PVyoVznkoFFIUpdukcgs1ICGkXC6vrKzk83nXdSXpQ+Uuu47Ybj2d3++XZKVqOeA5lIvjavZ9R8754uIixlhV1XQ6rWlalzt6eyG+ddlsdmFh4fr165ZlfWTThP3guu7S0pLIDXiel0gk/H4/pVTUlnX6IQBaqgEJIXfu3HnppZcqlYrruvdbVCIYs9vUkEomVX9grVyv5Xe8ShEd1AJjjGGMo9HoZz/72cHBwaOSPBacME3z8uXL7777rvgyPES6CwIpijI7Ozs7OxsOh2VZ7hLZ3BJWiQ0ql8vz8/OvvvqqeK9CJokokW3bgUAgkUjsdi4Eg0FFkRlHpYb1zrvvvvnGG2FNOZgNJqQgpTSVSs3NzZ08eZIQ0s0eE9xTfLlc7sqVK0tLS+Vy+ZE26K6drmlaIpGYnp4eGxuLx+Pd4Ka0RAOKvpfl5eWlpaVGoyGyJaqq+v1+XdcDgUA4HNZ1XdO0QCAQCATEZ1Ht5A+yzfSgntqCcpYzD+F9RyLEy3BdV8TxCSHpdDoQCHSnxyS+crZtb25uLi4u3rx50zTNx3FrRDk157xcLpfLZdd1LcsaGhqKRqMiE9VBtERWiSKqb33rWwsLC6qqYox9Pl8oFBJpk3g8nkqlJEnaDXPDvWASQggjtLCdf/vW4vrVN+x6lRyi+FiEfFRVfe6558bGxvx+f3dqQ8uy8vn85cuX5+fnNU07mJssEvYDAwOXLl1KJpNK2+cW70XzWYUxrlarm5ub77//PgCk0+lUKiWyDSKlRQgRIcq92d8fLggBA5TZyX3j2y/mNtdVYAc2sOCDwx2Rruujo6PT09MjIyO6rjuO0w0SSxRAZzKZu3fv3rp1K5fLOY5z4CixcA81TRseHj5z5sz4+HgHBXPzNSDnnBASDAZnZ2cppSINJ8uyoNFe1+8Bfw6KRBLh0DNPnntPIssLt+VDyHOh9XK5nG3bjuMYhpFOp6PRqEiodcQ9FN4J57xWq2Wz2ZWVlaWlpfX1dUrpRzy+/V5WmK3CJWz/c31oMS2y1gXgvgqnx78C5/za1auvvf56vV4Xbt1hliQS/rqunzp1am5uzu/3S5IkQmht+0KLDRElFaZpbm1tXb58OZvN3h92OdgDyrI8PDz83HPPRaPRzhrsLbHWBY12WXWwiyCExsbHAaEXX3zRsixN0w6zpF2jeH5+fnV1NZlMCqdJhLja4CEKAxwhVKlU5ufn19fX8/m8aZoAIATnYcA5r9frMzMzFy5c6LiggpZGQQ/zngQpA4HA4ODgyZMnFxcXy+XyYVybXYrXarVyuVytVi3LqlQqPp9vt/QK7oU/msKwXYEtkqGivadWq+Xz+YWFhWw2a9u2cGUOeSMRC5yampqcnEwkEqJR+/DrP9Szt7/L9PFBCLEsSxQl37x5UzCjKZlEoYZETm16enp8fNzn84nktzCi997lMV/SRxa2G5zzPM+yrJ2dnRs3bqytrVWrVeG4NOVBxNcgFApdvHhxfHw8HA53Q/Skq1kF94zQ27dvv/vuu+vr657nHV5fCAhxKML6qqqKqGw6nU4mk2Lsx27I42N91b0r3P2wy3vGWKPRyOfzW1tbGxsbpVKpXq87jiPmHzUxxW7bdiQSmZqaunDhQjgc7nj8U6CLJmM/cImUDg8PI4Qcx9ne3hYy5vCXFXa6MJzL5XKxWCyXy4VCYX19XURrVVWVZVmWZZ/PJ2IigUBA2GG7VwCARqNhGAbG2DRNwzDEBcUPxWXz+bxhGIwxUUXYLEoJTe33+2dmZmZnZwOBQPeMg+t2VokwTCgUIoTUajVCyNbW1m7I9JAXF9JFdPuIILVIhBNC/H5/PB73+XziA6WUENLX1yfL8l55IAoSRbusIKVpmoVCoVgsWpYlBCEhpOnBbrEDfr9/cnJyeno6lUoJVdvmt/PAje1yDfjDhSLEGJufn3/nnXey2SxjrEVlpbsaatdr2xUwH3vHXet+d3bDbs6gdcLDcZxAIDA2NvbUU091PI5wP7pdVu2FJEkTExOyLF+5ciWTyTiOc/gwz/3Y9RaFDbRbqPMg91AoR7gX3oQ9tRit2AQRePP7/SdPnpydnQ2FQt2j+HZxZFglXrNQhY1GQ5bljY0N13V3beTmokWXPSQ8z8MYB4PBiYmJmZmZblN8uzgyrBKwbVtRlDNnzogs7MrKSutUYRfC87xwODw1NXX+/PlIJNK1XddHjFUChJCRkRFN02Kx2M2bN7PZbFd5QK2AZVmMsZmZmenp6eHh4S6fOHL0WCW8QpHIo5RSShcXF/P5vNAOx49b4nmDwWA6nT5x4sTQ0JCIS3Wh4tvFkfEBP2bpCHHODcNYXV195ZVXSqUSHLsR/sKRRAjNzs6eO3fuqHSZHmFWwT1iiSj2e++9d+vWrXq9LgRYp5d2WIjmLUmS+vv7z507NzQ0FAwGex3x7YD4KotQOOfc5/NtbW1ls9l6vS4c/qMoukTcSxRGJ5PJgYGBycnJYDB4hKZ3HG1ZtReEEMMwNjY2bty4sby83CUFnwd+lmAwODc3Jxoc4CjIp704PqwSzRSWZRmGIVrqRNOcLMuPbHDtBjDGRKRgeHh4YmJiZGQkGAyKgRHdUIawLxxtDbgXokRd0zTRsaOqajKZzGQy6+vrpVLJ8zxR6NJV9NodKskY03U9nU4PDg729fUlEond3utuy8Y8Do6PrPrQU93raspms1evXl1dXa1UKiKT2G1fekF0Sml/f//MzMyJEydEKvookmkXx5NVsKcrsNFo2Lady+UWFhZWV1eLxaLo1xAt5O1fmBA/IsmoKEo6nR4bGxsdHRXydXcAfbexf184PhrwIxBvRZIk8dUXanFkZKRYLOZyuUKhICrpCCG7xZ8tyv3tpqgFmQghoVAoEomI6W1izGQ8HheVW0fI0XsIjq2s+uhzIiS6zuv1+ubm5sbGxtbWVqFQEDaNCFXvNYoPT6/dS+EPw+fzJRKJgYGBdDqdSCR2O646vUPNxCeFVbDnRC7HccSsOsdxMplMNpstFApinp2o6rxfej1SjO3SYrdsxvM8UbYaCoVisVgsFotGo+l0OhQKAYBQwbvR2mMgn/bi2GrA+7FbSSem1IlIhCzL0Wi00WiIsmBRGVytVkUTovghxlhM8ftYYolJIWKOgxBFovgzEAj4fL5dh1TTNE3TdsdNHe8z5T5Bsurjn38PxDkDlUpF1LCLdisRpq/VasKLvJ9YjDFJkqLRqBByIq+iaVo0Gg2FQpqm7aZZunwKdzN39RPOqg92Yc9cWnYPsKfB5uFs2Mu2veWgu2p09+KdftA24ROkAR+CvUb63qDDXsn0yGlS93/45Ainj6DHqg/hyM3Q7k504zynHo46eqzqofnosaqH5qPHqh6ajx6remg+eqzqofnosaqH5qPHqh6ajx6remg+eqzqofnosaqH5qPHqh6ajx6remg+eqzqofnosaqH5qPHqh6ajx6remg+eqzqofnosaqH5qPHqh6ajx6remg+eqzqofnosaqH5qPHqh6ajx6remg+eqzqofnosaqH5qPHqh6aj/8Pxya9s6sOnN4AABZ6ZVhJZklJKgAIAAAACAAAAQQAAQAAAAABAAABAQQAAQAAAAoBAAACAQMAAwAAAG4AAAAaAQUAAQAAAHQAAAAbAQUAAQAAAHwAAAAoAQMAAQAAAAIAAAAxAQIACgAAAIQAAAAyAQIAFAAAAI4AAACiAAAACAAIAAgALAEAAAEAAAAsAQAAAQAAAGV6Z2lmLmNvbQAyMDIwOjAyOjAyIDE1OjEzOjAyAAgAAAEEAAEAAAD2AAAAAQEEAAEAAAAAAQAAAgEDAAMAAAAIAQAAAwEDAAEAAAAGAAAABgEDAAEAAAAGAAAAFQEDAAEAAAADAAAAAQIEAAEAAAAOAQAAAgIEAAEAAABsFQAAAAAAAAgACAAIAP/Y/+AAEEpGSUYAAQEAAAEAAQAA/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBAAD2AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9mooqtd3ZtfKCwvM8r7FVSOtAFmiqf2q9/6BU/8A32tH2q9/6BU//fa0AXKKp/ar3/oFT/8Afa0far3/AKBU/wD32tAFyiqf2q9/6BU//fa0far3/oFT/wDfa0AXKKp/ar3/AKBU/wD32tH2q9/6BU//AH2tAFyiqf2q9/6BU/8A32tH2q9/6BU//fa0AXKKp/ar3/oFT/8Afa0far3/AKBU/wD32tAFyiqf2q9/6BU//fa0far3/oFT/wDfa0AXKKp/ar3/AKBU/wD32tH2q9/6BU//AH2tAFyiqf2q9/6BU/8A32tH2q9/6BU//fa0AXKKp/ar3/oFT/8Afa0far3/AKBU/wD32tAFyiqf2q9/6BU//fa0far3/oFT/wDfa0AXKKp/ar3/AKBU/wD32tH2q9/6BU//AH2tAFyiqf2q9/6BU/8A32tH2q9/6BU//fa0AXKKpw3ryXn2aa1kgcpvG4g5GcdquUAFFFFABVK8/wCP/Tf+u/8A7Kau1SvP+P8A03/rv/7KaANmiiigAooooAKKKKACiiigAoopAQRkHNAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAGRc/8AIxRf9erf+hCrdVLn/kYov+vVv/QhVugAooooAKpXn/H/AKb/ANd//ZTV2qV5/wAf+m/9d/8A2U0AbNFFFABRRRQAUUUUAFFFFABXB6vqt9oHiCQQuXgfDeW54Pr9K7yuN8e2mYLe7A+6dh/GunC29pyy2Zw5gpKjzwdnHU1dJ8U2OpgIzeTP/cbv9K3eoyK8UBIOQSCO4rf03xbqGnx+W+LhAOA55/OuirgutM4sNmy+Gt956ZRXjmqfEvxLaSHZbQRxno2NwrM/4Wx4m/vWv/fquR0Jrc9KOLpSV0z3aivE7f4u60jA3FvDKvcKNua6PTfjBpszAahaS23unz1LpTXQqOJpvqek0VnaXr2l61FvsLyKbjJVWGV+taNZ2sbJp7BRRRQMKKKKACiiigAooooAyLn/AJGKL/r1b/0IVbqpc/8AIxRf9erf+hCrdABRRRQAVSvP+P8A03/rv/7Kau1SvP8Aj/03/rv/AOymgDZooooAKKKKACiiigAooqtfX0GnWj3E7BUUfnTSbdkKUlFXY+5uobSFpp5AiDqTXnfiHxPJq+62iQJahsgn7zVS1rW7jWLks5Kwg/JH2/GsuvUw+FUPelufO43MXVvCnpH8wooortPKEZVdSrKGU9Qa4/WobWC98u2GDjLgdAa7uw0261Wc29oB5m3O49BSS/B3VJHaRtXtyzcn92f8a5cRVhH3XuejgcPUnecVoeZ0V2178LfENsCYVjuAO4O2uTvtMvtNkKXtrLCQcZdcA/Q1zKSezO6VOUd0QwXE1rMs1vNJFIpyGRsc16V4W+Ks8Lx2mujzYycC5HUf73/1q8xoolFS3HCpKDvE+qLW6gvbdZ7eVZImGQynNTV88+D/ABpd+GLxVZmlsGOHiJztHqK980/ULbVLGK8tJBJDIMgiuSdNwZ6VGsqi8y1RRRWZsFFFFABRRRQBkXP/ACMUX/Xq3/oQq3VS5/5GKL/r1b/0IVboAKKKKACqV5/x/wCm/wDXf/2U1dqlef8AH/pv/Xf/ANlNAGzRRRQAUUUUAFFFFACMwRCzHCgZJrzDxJrb6vfMiHFtEcIB/F711XjPVDZ6aLWJsSz8H1C+tedV6WCo6e0fyPCzXEu/sY/MKVVZ2CopZicADqaSvQPCnh1bSJb67QG4blAR9wf4111qqpRuzzcLhpYifLH5nGahpV1pawm6UKZRkDuPY1S+gyfSvQ/HNp52kJcAZMD5/Piub8KaQdS1ISyL+4hO4+5rOnXTpe0kbV8G44n2MOp1nhTSP7O00SyD9/N8zewroKAMDA6UV5M5ucnJn0tKlGlBQjsgqre6dZ6jC0V3bxyoRj5hVqioNDx/xd8LXtUkvdBBeMDc1sTyP92vMiCrFWBDA4IIwRX1VLLHCm6V1RfVjgV418TdO0Lz/wC0dNuovtjH99FGQQ/vx3rppVG9GcGIoJLmiec12/w68XvoWprYXT5sLhscn/Vt6/T/ABriKOhyOoraUVJWZywm4S5kfU897a2sPmz3EcceM7mbiuZ1L4keG9OLL9s+0MB/ywG4V4HNdXNwQZrmaTAwNzmtnwf4dfxHr8NttP2eMh5mxkY9D9ax9ikrtnX9alJ2ij3zQNWfW9MS/a2a3jkJ8tW+8R6n61qUyGGO3gjhiULHGoVQOwFPrnZ2q9tQooopDMi5/wCRii/69W/9CFW6qXP/ACMUX/Xq3/oQq3QAUUUUAFUrz/j/ANN/67/+ymrtUrz/AI/9N/67/wDspoA2aKKKACiiigAooqK5k8m1lk/uqTQtRN2VzzPxTem81yXBykfyr7etYtSXDmW5lkP8Tk/rUde/CPLFRPjK03UqOb6s3fCul/2jqys65ih+Zvr2r04AAADoK5jwRaiHSGnI+eRjz7V09eTi6nNUa7H0uW0VToJ9XqVdStRe6dPbkZLqQPr2qDRNLTSdNjtwBvxl29TWjRWHO+Xl6HZ7OPPz212CiiipLCs/WLbULqxZNNvBbXHZmXcDWhRQDVz568VW3ivT7lxq9xdNET99HPln8OgrlQAOQBz3r6pubWC8hMNxEksZ6qwzXmvib4Twzl7nRJBDJ1MD/dP0rphWWzOCrhZbx1PIaKtahpl7pNy1vfW0kEg7MOD+NVa6DjatoxVUswVQSxOAB3r6A+H/AIaXw/oKNIv+l3A3yH09q83+Gfhn+2Na+3Tpm1tTkZ/ibtXuoAAwBgCuatP7KO7CUtOdhRRRXOdoUUUUAZFz/wAjFF/16t/6EKt1Uuf+Rii/69W/9CFW6ACiiigAqlef8f8Apv8A13/9lNXapXn/AB/6b/13/wDZTQBs0UUUAFFFFABVTVDjSroj/nk1W6q6ku/TLlfWMinH4kTP4WeOg5AJo7UknyZTuOKjBI6V6tXFqnU5bXR85h8slWo897Poeu+HUCaBZ47xgmtSuL8NeLLVLSGxuz5TINquehrskkSRA6MGU9CDXlzd5Nn0VOPLBR7DqKKKksKKKKACiiigAooooAz9W0TTtbtTb6haxzIehI5X3FeU+IPhNeWspl0aXz7dj/q5D8yD6969moq4zlHYyqUYT3RkeGdDi8PaHBYxgblGZG/vN3Na9FFS3fU0SSVkFFFFIYUUUUAZFz/yMUX/AF6t/wChCrdVLn/kYov+vVv/AEIVboAKKKKACqV5/wAf+m/9d/8A2U1dqlef8f8Apv8A13/9lNAGzRRRQAUUUUAFVdRuYrSwmmmI2KpyD39qtV59441rz7gadC37uPmTHc+lAHIzOJZ5HAwGYkD0FMooobvqxJJKyCtXSvEN/pLjypS8XeNuRWVWtpvhvUtUjWW3iXyj/GzYoGd7o/iyx1QLG7CC4P8AAx4P0rf61w1n8PiCHu7w/wC7GMEfjXY2VmljbLAkkjqvQyNk0AWKKKKACiiigAooqve31vp9uZ7qQRxg4yaALFFRwXEVzEJYZFdD0KmpKACiiigAooooAKKKKAMi5/5GKL/r1b/0IVbqpc/8jFF/16t/6EKt0AFFFFABVK8/4/8ATf8Arv8A+ymrtUrz/j/03/rv/wCymgDZooooAKKKKAM3XdS/svTJJlBaVvljUdSa80g0PV9TmaRbaQs5yWfj+detPDHIQXRWI6ZHSn9OlAHnKeAr77O8kk8YcLkIBzXKujRyNG6lXU4YHsa9wri/GPhvz1Oo2cf7wD96ij7w9aAOBrf8N+I5NGn8qUl7Rz8y/wB33FYFFAHtltdQXkCzW8iyRsMgg1NXjul61e6RLutpSFPVDyDXb6d46sbgBLtGgk9eq/nQB1dFVINUsLkZhu4n+jVa3qBncuPrQAtFUp9X0+2BM13EmOxaud1Lx3aQqyWMbTSdNx4AoA6e9vrfT7dp7mRURRnnvXl3iHX5tbuu62yH5E/qap6jqt5qs3mXUpb0UdB+FUqANLSdcvdIlDQSEx942PB/wr0fRPElnrKBVPl3GOYz1/CvJgCSAAST0Ar0bwh4c+wRfbrpf9IkHyqf4BQB1lFFFABRRRQAUUUUAZFz/wAjFF/16t/6EKt1Uuf+Rii/69W/9CFW6ACiiigAqlef8f8Apv8A13/9lNXapXn/AB/6b/13/wDZTQBs0UUUAFFFFABRRRQAUdetFFAHE+JfB/ms97pqgOeXi9fpXCujRuUdSrA4II5Fe4Vj6t4bsNWBaSPy5e0icGgDyWiui1LwbqVjlolFxGO6dRWBJDLCcSxuh/2higBoJHRiPoaXzJP+ekn/AH0abRQApJPUk/U0lFSRW805AiieQn+6uaAI6fFFJPKscSF3bgKoyTXRab4K1C8KvcYt4jzz1IrudK0Cx0hP3EYaTvI3JNAGJ4Z8IizK3l+A0/VI+oWuvoooAKKKKACiiigAooooAyLn/kYov+vVv/QhVuqlz/yMUX/Xq3/oQq3QAUUUUAFUrz/j/wBN/wCu/wD7Kau1SvP+P/Tf+u//ALKaANmiiigAooooAKKKKACiiigAooooAKgnsrW5z50Eb5/vLmp6KAMWXwpo82d1rjP904qD/hCdD/593/77NdDRQBjQ+FdHgIK2oOP7xzWnDaW9v/qYI4/91cVNRQAUUUUAFFFFABRRRQAUUUUAFFFFAGRc/wDIxRf9erf+hCrdVLn/AJGKL/r1b/0IVboAKKKKACqV5/x/6b/13/8AZTV2qV5/x/6b/wBd/wD2U0AbNFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAGRc/wDIxRf9erf+hCrdVLn/AJGKL/r1b/0IVboAKKKKACqV5/x/6b/13/8AZTV2qV5/x/6b/wBd/wD2U0AbNFFFABRRRQAUUUUAFFFFAEc8hht5JAMlFLYripvGOr2mnW+qzafA1hLMIztkAcZOM4NdndqWsp1UZJQgD8K87PhWRND0+/aGeeS3uPMmtHkO1l3enqOD+FAHZ3PifSLSZIp7ra7AEgKSFz03EdPxqrqOt30mpLp2iQRTTiPzJJJT8iKen1NcrfaVPFq+qmWG7ki1Bw0IgjUjaRjac9Mf1rYgtrnwzqaXf2ae5tpoBG23lkI9aANrS9WvHguhq9obWW25aReY3Hqpqn4b8UnXbK9lktjBNbsxVG/iQdG/HFVNUvdW1zSJrWKxe2jupBDG7fe2HqxHaqyaJqWhatDcG4e8hnt2tpAqAbQASvT3NAFmHxNrJ01dVksIGsN5DbXw4XOM1Nquu61Y3dssNrbPBdyBIWLYPPrVPw/4REumwvqFzdECRmNqWwnXitXxFayzXmjmGMssVypbH8IoAhvNb1qO6ttKtrKGTU5EMsjFv3cSg45pG8Q6pZWV2NS08R3NuAyunMUgPoex9qdqgutJ8UJq8dtJcWs0HkTCP7yc5BxVfVLy/wBc0W/jXTpIrbaFj3/fc9+OwoA2NV1lbDSFvIzHI5aMbM/3iB/WqPiPxQdDNmsduZ3mHmSAfwRggFvwJFUNY8J2EWixSWdtL9pWSEj987Y+YZ4JqBtC1LXtV1C7NzJZReSLVIygO5cfMeemSB+VAHcI6yRq6kFWGQRTqxfC32tNCit71Cs1uTCSf4gO/wCNbVABRRRQAUUUUAZFz/yMUX/Xq3/oQq3VS5/5GKL/AK9W/wDQhVugAooooAKpXn/H/pv/AF3/APZTV2qV5/x/6b/13/8AZTQBs0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAZFz/yMUX/Xq3/oQq3VS5/5GKL/AK9W/wDQhVugAooooAKpXn/H/pv/AF3/APZTV2qt5ayXBheKbypIX3q23PbFAGtRWPs1T/oIp/35FGzVP+gin/fkUAbFFY+zVP8AoIp/35FGzVP+gin/AH5FAGxRWPs1T/oIp/35FGzVP+gin/fkUAbFFY+zVP8AoIp/35FGzVP+gin/AH5FAGxRWPs1T/oIp/35FGzVP+gin/fkUAbFFY+zVP8AoIp/35FGzVP+gin/AH5FAGxRWPs1T/oIp/35FGzVP+gin/fkUAbFFY+zVP8AoIp/35FGzVP+gin/AH5FAGxRWPs1T/oIp/35FGzVP+gin/fkUAbFFY+zVP8AoIp/35FGzVP+gin/AH5FAGxRWPs1T/oIp/35FGzVP+gin/fkUAbFFY+zVP8AoIp/35FGzVP+gin/AH5FAGxRWPs1T/oIp/35FGzVP+gin/fkUALc/wDIxRf9erf+hCrdUobS4F99quboTMIzGoCbcDOau0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2bivyn0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDYtMDJUMDY6MTc6NDIrMDA6MDCGgkw1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA2LTAyVDA2OjE3OjQyKzAwOjAw99/0iQAAABp0RVh0ZXhpZjpCaXRzUGVyU2FtcGxlADgsIDgsIDgS7T4nAAAAIXRFWHRleGlmOkRhdGVUaW1lADIwMjA6MDI6MDIgMTU6MTM6MDKm6w8lAAAAFHRFWHRleGlmOkltYWdlTGVuZ3RoADI2NsDmle8AAAATdEVYdGV4aWY6SW1hZ2VXaWR0aAAyNTY4t9ahAAAAGnRFWHRleGlmOlNvZnR3YXJlAEdJTVAgMi4xMC4xMsMztC0AAAAbdEVYdGljYzpjb3B5cmlnaHQAUHVibGljIERvbWFpbraRMVsAAAAidEVYdGljYzpkZXNjcmlwdGlvbgBHSU1QIGJ1aWx0LWluIHNSR0JMZ0ETAAAAFXRFWHRpY2M6bWFudWZhY3R1cmVyAEdJTVBMnpDKAAAADnRFWHRpY2M6bW9kZWwAc1JHQltgSUMAAAAodEVYdENvbW1lbnQAQ3JvcHBlZCB3aXRoIGV6Z2lmLmNvbSBHSUYgbWFrZXJZkEXNAAAAEnRFWHRTb2Z0d2FyZQBlemdpZi5jb22gw7NYAAAAAElFTkSuQmCC"
            },
        }
    },
    "page": {
        "home": "index.php",
        "aboutus": "aboutus.php",
        "login": "login.php",
        "dologin": "dologin.php",
        "restorepass": "restorepass.php",
        "registration": "register.php",
        "user_area": "userarea.php",
        "showadv": "showadv.php",
        "support": "support.php",
        "help": "help.php",
        "updmoney": "updmoney.php",
        "payout": "payout.php",
        "checkpay": "checkpay.php",
        "fastpay": "fastpay.php",
        "refreshbalance": "refreshbalance.php",
        "birga": "birga.php",
        "buyref": "buyref.php",
        "ext": ".php"
    }
};
const coll = {
    dom: {
        extAbility: false,
        extPos: 0,
        commonText: '',
        currentPageNameLastPos: 0, scannableFullLength: 0,
        currentPage: ''
    }, user: {
        username: ''
    }
};


/***/ }),

/***/ "./assets/ts/lib-assets-app.ts":
/*!*************************************!*\
  !*** ./assets/ts/lib-assets-app.ts ***!
  \*************************************/
/*! exports provided: setupApplicationContentAssets, modifyFixedWebContent, addAppWindow, addWelcomeWindow, addMemberWindow, addPriceListWindow, addWaitForNextDayWindow, assembleAppContent, globalEventControllers, trackSimilarWebsite, getLoggedInUsername, getLoggedInUsersEarned, getLoggedInUsersReferralsAttracted, getLoggedInUsersEarnedByReferrals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupApplicationContentAssets", function() { return setupApplicationContentAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyFixedWebContent", function() { return modifyFixedWebContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAppWindow", function() { return addAppWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWelcomeWindow", function() { return addWelcomeWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMemberWindow", function() { return addMemberWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPriceListWindow", function() { return addPriceListWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWaitForNextDayWindow", function() { return addWaitForNextDayWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assembleAppContent", function() { return assembleAppContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalEventControllers", function() { return globalEventControllers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackSimilarWebsite", function() { return trackSimilarWebsite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedInUsername", function() { return getLoggedInUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedInUsersEarned", function() { return getLoggedInUsersEarned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedInUsersReferralsAttracted", function() { return getLoggedInUsersReferralsAttracted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedInUsersEarnedByReferrals", function() { return getLoggedInUsersEarnedByReferrals; });
/* harmony import */ var _lib_functions_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib-functions-common */ "./assets/ts/lib-functions-common.ts");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./assets/ts/db.ts");
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webextension-polyfill-ts */ "../node_modules/webextension-polyfill-ts/lib/index.js");
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib-functions */ "./assets/ts/lib-functions.ts");
/* harmony import */ var _messanger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messanger */ "./assets/ts/messanger.ts");
/* harmony import */ var _lib_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib-assets */ "./assets/ts/lib-assets.ts");






function setupApplicationContentAssets() {
    /*let ContentSecurityPolicy: any = createElement([{
        'meta': {
            'id': 'Content-Security-Policy',
            'http-equiv': 'Content-Security-Policy',
            'content': 'upgrade-insecure-requests'
        }
    }]);
    if (captureElementById('Content-Security-Policy') === null || captureElementById('Content-Security-Policy') === undefined) {
        document.head.insertBefore(ContentSecurityPolicy, document.head.firstElementChild);
    }*/
    /*let appCSS: any = createElement([{
        'script': {
            'id': 'acs-css-file',
            'href': app.body.content.css.app,
            'type': 'text/css'
        }
    }]);
    if (captureElementById('acs-css-file') === null || captureElementById('acs-css-file') === undefined) {
        document.head.appendChild(appCSS);
    }*/
    /*let overrideJS: any = createElement([{
        'script': {
            'id': 'acs-js-override-file',
            'src': app.body.content.js.override,
            'type': 'application/javascript'
        }
    }]);
    if (captureElementById('acs-js-override-file') === null || captureElementById('acs-js-override-file') === undefined) {
        document.head.appendChild(overrideJS);
    }*/
    let setting = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'img': {
                'id': 'app-setting-button',
                'alt': 'Setting',
                'class': 'app-setting-button',
                'accessKey': 'Ctrl+Alt+Q',
                'src': _db__WEBPACK_IMPORTED_MODULE_1__["app"].body.content.images.settingButton,
                'title': 'Click here for view your Name, E-mail Address, Licence Info and so on.'
            }
        }]);
    if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-setting-button') === null || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-setting-button') === undefined) {
        document.body.insertBefore(setting, document.body.firstElementChild);
    }
}
function modifyFixedWebContent() {
    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-loader').setAttribute('style', 'display:none !important;');
    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('outer').setAttribute('style', 'display:block !important;');
    if (document.querySelector('body').className !== undefined) {
        document.body.classList.add('app');
    }
    else {
        document.body.className = 'app';
    }
    /*crawling web page*/
    if (document.childNodes.length >= 0) {
        /*console.log('crawling whole element');*/
        document.childNodes.forEach(function (element) {
            if (element.nodeName === 'HTML') {
                element.childNodes.forEach(function (element) {
                    if (element.nodeName === '#comment') {
                        element.remove();
                    }
                    if (element.nodeName === 'HEAD') {
                        element.childNodes.forEach(function (element) {
                            var _a;
                            if (element.nodeName === 'SCRIPT') {
                                if (((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.indexOf('function checkpay')) !== -1) {
                                    element.remove();
                                }
                            }
                        });
                    }
                    if (element.nodeName === 'BODY') {
                        /*console.log('crawling body element');*/
                        if (element.childNodes.length >= 0) {
                            element.childNodes.forEach(function (element) {
                                if (element.nodeName === '#comment') {
                                    element.remove();
                                }
                                if (element.nodeName === 'DIV' && element.id === 'outer') {
                                    element.setAttribute('style', 'padding: 10px;border-radius: 10px;');
                                    element.childNodes.forEach(function (element) {
                                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                        if (element.nodeName === '#comment') {
                                            element.remove();
                                        }
                                        if (element.nodeName === 'H1') {
                                            element.setAttribute('style', 'text-align: center;position: relative;width: 97%;');
                                            element.childNodes.forEach(function (element) {
                                                if (element.nodeName === 'A') {
                                                    element.setAttribute('style', 'text-align: center;position: relative;display: block;top: 10px;left: 265px;');
                                                }
                                            });
                                            /*element.remove();*/
                                        }
                                        if (element.nodeName === 'P') {
                                            element.remove();
                                        }
                                        if (element.nodeName === 'DIV' && element.id === 'main' && ((_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.nodeName) === 'H2') {
                                            /*console.log('crawling main element');*/
                                            element.childNodes.forEach(function (element) {
                                                if (element.nodeName === '#comment') {
                                                    element.remove();
                                                }
                                            });
                                            if (element.getAttribute('align') === 'center') {
                                                element.childNodes.forEach(function (element) {
                                                    if (element.nodeName === 'HR') {
                                                        element.remove();
                                                    }
                                                });
                                                /*crawling elements on specific page is Viewing adwertisiment*/
                                                if (((_c = (_b = element.firstElementChild) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.indexOf('Viewing adwertisiment')) !== -1) {
                                                    /*console.log('crawling elements on specific page is Viewing adwertisiment');*/
                                                    element.childNodes.forEach(function (element) {
                                                        if (element.nodeName === 'DIV') {
                                                            element.remove();
                                                        }
                                                    });
                                                }
                                                /*crawling elements on specific page is Pay waiting*/
                                                if (((_e = (_d = element.firstElementChild) === null || _d === void 0 ? void 0 : _d.textContent) === null || _e === void 0 ? void 0 : _e.indexOf('Withdrawal of earned funds')) !== -1) {
                                                    /*console.log('crawling elements on specific page is Pay waiting');*/
                                                    element.childNodes.forEach(function (element) {
                                                        if (element.nodeName === 'FORM') {
                                                            element.remove();
                                                        }
                                                    });
                                                    document.body.appendChild(_lib_assets__WEBPACK_IMPORTED_MODULE_5__["bottomNotification"]);
                                                    /*console.log('set event for bottom-notification action');*/
                                                    (_f = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('bottom-notification')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
                                                        addPriceListWindow();
                                                        /*console.log('request to open licence window!!');*/
                                                    });
                                                }
                                                /*crawling elements on specific page is Pay waiting*/
                                                if (((_h = (_g = element.firstElementChild) === null || _g === void 0 ? void 0 : _g.textContent) === null || _h === void 0 ? void 0 : _h.indexOf('Express verification procedure')) !== -1) {
                                                    /*console.log('crawling elements on specific page is Express verification procedure');*/
                                                    element.childNodes.forEach(function (element) {
                                                        if (element.nodeName === 'FORM') {
                                                            element.remove();
                                                        }
                                                        element.childNodes.forEach(function (element) {
                                                            if (element.nodeName === 'HR') {
                                                                element.remove();
                                                            }
                                                            if (element.nodeName === 'H2') {
                                                                element.childNodes.forEach(function (element) {
                                                                    var _a;
                                                                    if (element.nodeName === 'INPUT' && element.type === 'text') {
                                                                        element.value = _db__WEBPACK_IMPORTED_MODULE_1__["app"].author.account.bitcoin;
                                                                    }
                                                                    if (element.nodeName === 'DIV' && element.id === 'wait') {
                                                                        (_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute('onclick', 'javascript:checkPayModified()');
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    });
                                                }
                                            }
                                            else {
                                                /*crawling elements on specific page is Pay list*/
                                                if (((_k = (_j = element.firstElementChild) === null || _j === void 0 ? void 0 : _j.textContent) === null || _k === void 0 ? void 0 : _k.indexOf('Withdrawal of earned funds')) !== -1) {
                                                    /*console.log('crawling elements on specific page is Pay list');*/
                                                    document.body.appendChild(_lib_assets__WEBPACK_IMPORTED_MODULE_5__["bottomNotification"]);
                                                    /*console.log('set event for bottom-notification action');*/
                                                    (_l = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('bottom-notification')) === null || _l === void 0 ? void 0 : _l.addEventListener('click', function () {
                                                        addPriceListWindow();
                                                        /*console.log('request to open licence window!!');*/
                                                    });
                                                }
                                            }
                                        }
                                        if (element.nodeName === 'DIV' && element.id === 'sidebar') {
                                            element.childNodes.forEach(function (element) {
                                                var _a;
                                                if (element.nodeName === 'DIV' && element.className === 'login headbar') {
                                                    element.childNodes.forEach(function (element) {
                                                        if (element.nodeName === 'FORM' && element.id === 'memberlogin' && element.name === 'loginf' && element.className === 'loginform') {
                                                            element.childNodes.forEach(function (element) {
                                                                if (element.nodeName === 'DIV' && element.className === 'joinnow headbar headjoin') {
                                                                    element.remove();
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                                if (element.nodeName === 'DIV' && element.className === 'categories headbar') {
                                                    (_a = element.previousElementSibling) === null || _a === void 0 ? void 0 : _a.remove();
                                                    element.remove();
                                                }
                                            });
                                        }
                                        if (element.nodeName === 'DIV' && element.id === 'footer') {
                                            element.textContent = '';
                                            element.setAttribute('style', 'clear: both;background:none;width: 0;height: 0;line-height:0;');
                                        }
                                    });
                                }
                            });
                        }
                    }
                });
            }
        });
    }
}
function addAppWindow() {
    let acsAppWindow = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'acs-app-window',
                'class': 'app-window',
                'style': 'display:none;'
            }
        }]);
    let acsAppBody = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'app-setting-window',
                'class': 'row app-window-body animate'
            }
        }]);
    acsAppWindow.appendChild(acsAppBody);
    let acsAppTitleBar = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'class': 'acsAppTitleBar' } }]);
    let acsAppTitleText = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'class': 'acsAppTitleText' } }]);
    acsAppTitleText.textContent = _db__WEBPACK_IMPORTED_MODULE_1__["app"].about.name_spaced;
    acsAppTitleBar.appendChild(acsAppTitleText);
    let acsAppTitleSymbol = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'id': 'acs-app-close-button', 'class': 'acsAppTitleSymbol' } }]);
    acsAppTitleSymbol.textContent = 'x';
    acsAppTitleBar.appendChild(acsAppTitleSymbol);
    acsAppBody.appendChild(acsAppTitleBar);
    /*navigators*/
    let acsAppNav = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'class': 'setting-app-body' } }]);
    acsAppBody.appendChild(acsAppNav);
    let acsAppNavUL = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'ul': { 'class': 'acsAppNavUL' } }]);
    acsAppNav.appendChild(acsAppNavUL);
    let navItem1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'li': { 'id': 'nav-overview' } }]);
    navItem1.textContent = 'Overview';
    acsAppNavUL.appendChild(navItem1);
    let navItem2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'li': { 'id': 'nav-application' } }]);
    navItem2.textContent = 'Application';
    acsAppNavUL.appendChild(navItem2);
    let navItem3 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'li': { 'id': 'nav-user' } }]);
    navItem3.textContent = 'User';
    acsAppNavUL.appendChild(navItem3);
    let navItem4 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'li': { 'id': 'nav-payment' } }]);
    navItem4.textContent = 'Licence';
    acsAppNavUL.appendChild(navItem4);
    let navItem5 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'li': { 'id': 'nav-help' } }]);
    navItem5.textContent = 'Help';
    acsAppNavUL.appendChild(navItem5);
    /*navigators*/
    /*navigators content*/
    /*navigators overview content*/
    let acsAppContent = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'class': 'setting-app-body-content' } }]);
    acsAppNav.appendChild(acsAppContent);
    let acsAppContentOverview = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'id': 'setting-app-content-overview' } }]);
    acsAppContent.appendChild(acsAppContentOverview);
    let appOverviewTable = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'table': { 'style': 'width:100%;margin-top: 5px;' } }]);
    acsAppContentOverview.appendChild(appOverviewTable);
    let appOverviewTableTr1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appOverviewTable.appendChild(appOverviewTableTr1);
    let appOverviewTableTr1Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'td': { 'style': 'width:37.5%' } }]);
    appOverviewTableTr1.appendChild(appOverviewTableTr1Td1);
    let appOverviewTableTr1Td2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'td': { 'style': 'width:20%' } }]);
    let appLogo = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'img': {
                'alt': _db__WEBPACK_IMPORTED_MODULE_1__["app"].about.name_spaced,
                'src': _db__WEBPACK_IMPORTED_MODULE_1__["app"].body.content.images.appLogo,
                'style': 'width:110px;height:120px;float: left;'
            }
        }]);
    appOverviewTableTr1Td2.appendChild(appLogo);
    let paySymbol = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'span': {
                'id': 'setting-app-pay-symbol',
                'class': 'setting-app-pay-symbol'
            }
        }]);
    paySymbol.textContent = 'N/N';
    appOverviewTableTr1Td2.appendChild(paySymbol);
    appOverviewTableTr1.appendChild(appOverviewTableTr1Td2);
    let appOverviewTableTr1Td3 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'td': { 'style': 'width:33.5%' } }]);
    appOverviewTableTr1.appendChild(appOverviewTableTr1Td3);
    let appOverviewTableTr2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appOverviewTable.appendChild(appOverviewTableTr2);
    let appOverviewTableTr2Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'registered-user-name-plan',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appOverviewTableTr2Td1.textContent = 'N/N';
    appOverviewTableTr2.appendChild(appOverviewTableTr2Td1);
    /*navigators overview content*/
    /*navigators application content*/
    let acsAppContentApplication = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'setting-app-content-application',
                'style': 'margin-top: 55px;display:none;'
            }
        }]);
    acsAppContent.appendChild(acsAppContentApplication);
    let appApplicationTable = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'table': { 'style': 'width:100%;margin-top: 5px;' } }]);
    acsAppContentApplication.appendChild(appApplicationTable);
    let appApplicationTableTr1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appApplicationTable.appendChild(appApplicationTableTr1);
    let appApplicationTableTr1Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'setting-app-id',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appApplicationTableTr1Td1.textContent = 'N/N';
    appApplicationTableTr1.appendChild(appApplicationTableTr1Td1);
    let appApplicationTableTr2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appApplicationTable.appendChild(appApplicationTableTr2);
    let appApplicationTableTr2Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'setting-app-version',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appApplicationTableTr2Td1.textContent = 'Version : ' + _db__WEBPACK_IMPORTED_MODULE_1__["app"].about.version;
    appApplicationTableTr2.appendChild(appApplicationTableTr2Td1);
    let appApplicationTableTr3 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appApplicationTable.appendChild(appApplicationTableTr3);
    let appApplicationTableTr3Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'setting-app-install-date',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appApplicationTableTr3Td1.textContent = 'N/N';
    appApplicationTableTr3.appendChild(appApplicationTableTr3Td1);
    /*navigators application content*/
    /*navigators user content*/
    let acsAppContentUser = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'setting-app-content-user',
                'style': 'margin-top: 55px;display:none'
            }
        }]);
    acsAppContent.appendChild(acsAppContentUser);
    let appUserTable = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'table': { 'style': 'width:100%;margin-top: 5px;' } }]);
    acsAppContentUser.appendChild(appUserTable);
    let appUserTableTr1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appUserTable.appendChild(appUserTableTr1);
    let appUserTableTr1Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'setting-app-user-name',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appUserTableTr1Td1.textContent = 'N/N';
    appUserTableTr1.appendChild(appUserTableTr1Td1);
    let appUserTableTr2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appUserTable.appendChild(appUserTableTr2);
    let appUserTableTr2Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'setting-app-user-email',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appUserTableTr2Td1.textContent = 'N/N';
    appUserTableTr2.appendChild(appUserTableTr2Td1);
    let appUserTableTr3 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appUserTable.appendChild(appUserTableTr3);
    let appUserTableTr3Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'setting-app-user-location',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appUserTableTr3Td1.textContent = 'N/N';
    appUserTableTr3.appendChild(appUserTableTr3Td1);
    /*navigators user content*/
    /*navigators payment content*/
    let acsAppContentPayment = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'setting-app-content-payment',
                'style': 'margin-top: 55px;display:none;'
            }
        }]);
    acsAppContent.appendChild(acsAppContentPayment);
    let getLicenceButton = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'button': {
                'id': 'setting-get-a-licence',
                'class': 'app-button app-button-outline-primary',
                'style': 'position: relative;left: 350px;top: -50px;'
            }
        }]);
    getLicenceButton.textContent = 'Get a licence';
    acsAppContentPayment.appendChild(getLicenceButton);
    let appPaymentTable = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'table': { 'style': 'width:100%;margin-top: -25px;' } }]);
    acsAppContentPayment.appendChild(appPaymentTable);
    let appPaymentTableTr1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appPaymentTable.appendChild(appPaymentTableTr1);
    let appPaymentTableTr1Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'setting-app-user-payment-type',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appPaymentTableTr1Td1.textContent = 'N/N';
    appPaymentTableTr1.appendChild(appPaymentTableTr1Td1);
    let appPaymentTableTr2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appPaymentTable.appendChild(appPaymentTableTr2);
    let appPaymentTableTr2Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'setting-app-user-payment-licence',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 14px;line-height: 2;'
            }
        }]);
    appPaymentTableTr2Td1.textContent = 'N/N';
    appPaymentTableTr2.appendChild(appPaymentTableTr2Td1);
    let appPaymentTableTr3 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appPaymentTable.appendChild(appPaymentTableTr3);
    let appPaymentTableTr3Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'setting-app-user-payment-date',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appPaymentTableTr3Td1.textContent = 'N/N';
    appPaymentTableTr3.appendChild(appPaymentTableTr3Td1);
    let appPaymentTableTr4 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    appPaymentTable.appendChild(appPaymentTableTr4);
    let appPaymentTableTr4Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'td': {
                'id': 'setting-app-user-payment-lastUpdate',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appPaymentTableTr4Td1.textContent = 'N/N';
    appPaymentTableTr4.appendChild(appPaymentTableTr4Td1);
    /*navigators payment content*/
    /*navigators Help  content*/
    let acsAppContentHelp = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'setting-app-content-help',
                'style': 'display:none;'
            }
        }]);
    acsAppContentHelp.innerHTML =
        'Do you want to make easy money by filling in the captcha code online? Then you have come to the right place. The best solution for you is our Auto Captcha Submit Pro. There are many websites to make money by filling in the captcha code online. All you have to do now. <br><br>' +
            '<h3>Instructions</h3>[1] Install our add-on in your Firefox browser<br>' +
            '[2] Click the Action button. Then a new tab will open a best and trusted earning website for you.<br><br>' +
            '[3] If you are not a listed customer, a welcome window will appear in front of you.<br>' +
            '[A] First go to the next step by clicking "Let\'s Connect".<br>' +
            '[B] You must register with first name, last name, mail address and complex password<br>' +
            '[C] If you are a registrar, login with your mail address and complex password by clicking "Already Member" on the next left side button.<br>' +
            '[D] If you register for the first time, you can earn $ 20 in a few seconds with my add-on from that website as a trial.<br><br>' +
            '[4] Go to the Registrar tab and open an account. The journey to bring the diameter began.<br>' +
            '[5] Click on the User menu.<br>' +
            '[6] Then click on the START WATCHING PAYED ADS button.<br>' +
            '[7] When the new page comes, you will see three buttons of our add-on. [If you have purchased a license, the buttons will remain active. Otherwise it will be disabled.]<br>' +
            '[8] If the buttons are active, click on the Start button, showing <!--Auto, Bulk or--> Manual in the options.<br>' +
            '<!--[6] If you continue to work with the Auto option, the system will continue to work automatically until you close it or the browser reloads or the Internet connection is disconnected. This way you will continue to earn at the rate of 10 cents per second (that means 1 captcha will be filled for you per second). You can earn unlimited income from at least 1000 USD per day.<br>[9] If you want to turn it off while the add-on is working in the auto option, just click the reset button on the far right.<br>[8] If you continue to work in the bulk option, the add-on can earn 5 USD per click, which means 50 captcha per second. This option will only click on the start button, will not run automatically like the auto option.<br>-->' +
            '[9] If you continue to work with the manual option, you will need to complete the captcha one by one by clicking the Start button. This way you can earn 10 cents per click.<br>' +
            '[10] You can find out your name, email, details about Addon and the license you used by clicking on the Auto Captcha Submit Pro icon button in the top right corner.<br>' +
            '[11] If your license limit expires, you will see a price list of four plans.<br>' +
            '[12] Whenever you want to get a license, go to Settings and click on the License tab, then click on the "License at the gate" button on the right. Then a price list of four plans will appear in front of you.<br>' +
            '[13] Then click on the plan as per your requirement, a payment link will be created for you and a green button will say "Pay". Click on it. Then a new window will open in front of you<br>' +
            '[14] In the new payment window, click on the "Pay Now" button with your debit or credit card number, validity date, CVC and postal code. The message will come if the payment is successful. If payment fails, try again. If the payment is successful, the license will be added to your account.<br>' +
            '[15] If the price list does not automatically leave after the payment is successful, close it and reload the page.<br><br>Now you keep earning. You will earn, we will help you. Follow our web site in case of any need.<br><br>' +
            '<h3>Support Center</h3> Email: <a href="mailto:support@mishusoft.com">support@mishusoft.com</a>,<br>website: https://www.mishusoft.com';
    acsAppContent.appendChild(acsAppContentHelp);
    /*navigators Help content*/
    /*navigators content*/
    if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window') === null || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window') === undefined) {
        /*console.info('setting window added')*/
        document.body.insertBefore(acsAppWindow, document.body.lastElementChild);
    }
    return globalEventControllers('app-setting-window');
}
/*app welcome window*/
function addWelcomeWindow() {
    var _a;
    let acsAppWindow = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window');
    acsAppWindow.style.display = 'block';
    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-setting-window').style.display = 'none';
    let acsAppWelcome = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'app-welcome-window',
                'class': 'row app-window-body animate' /*,
                'style': 'width: 600px;'*/
            }
        }]);
    acsAppWindow.appendChild(acsAppWelcome);
    let acsAppWelcomeTitleBar = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'style': 'width: 100%;padding: 10px 0;display: inline-block;' } }]);
    let acsAppWelcomeTitleSymbol = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'app-welcome-window-close-button',
                'class': 'acsAppTitleSymbol'
            }
        }]);
    acsAppWelcomeTitleSymbol.textContent = 'x';
    acsAppWelcomeTitleBar.appendChild(acsAppWelcomeTitleSymbol);
    acsAppWelcome.appendChild(acsAppWelcomeTitleBar);
    let acsAppWelcomeBody = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'class': 'setting-app-body' } }]);
    acsAppWelcome.appendChild(acsAppWelcomeBody);
    let acsAppWelcomeBodyContent = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'style': 'float: left;text-align: left !important;margin: 0;color: black;' } }]);
    acsAppWelcomeBody.appendChild(acsAppWelcomeBodyContent);
    let welcomeTable = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'table': { 'style': 'width:100%;' } }]);
    acsAppWelcomeBodyContent.appendChild(welcomeTable);
    let welcomeTableBody = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tbody': {} }]);
    welcomeTable.appendChild(welcomeTableBody);
    let welcomeTableBodyTr1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    welcomeTableBody.appendChild(welcomeTableBodyTr1);
    let welcomeTableBodyTr1Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'td': { 'style': 'width:100%;text-align: center;position: relative;color: black;font-size: 28px;font-weight: bold;padding-bottom: 15px;user-select: none;-webkit-user-select: none;-ms-user-select:none ;' } }]);
    welcomeTableBodyTr1Td1.textContent = 'Welcome to ' + _db__WEBPACK_IMPORTED_MODULE_1__["app"].about.name_spaced;
    welcomeTableBodyTr1.appendChild(welcomeTableBodyTr1Td1);
    let welcomeTableBodyTr2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    welcomeTableBody.appendChild(welcomeTableBodyTr2);
    let welcomeTableBodyTr2Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'td': { 'style': 'width:100%;font-size: 14px;line-height: 1.5;text-align: justify;padding: 7px 15px;user-select: none;-webkit-user-select: none;-ms-user-select:none ;' } }]);
    let welcomeTextP1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'p': {} }]);
    welcomeTextP1.textContent = 'Thank you very much for accepting one of our services. We are developing and distributing this software like any other software with adequate security. At present our service has been able to successfully reach more than ' + _db__WEBPACK_IMPORTED_MODULE_1__["app"].about.total_users + ' customers.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP1);
    welcomeTableBodyTr2Td1.appendChild(Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'br': {} }]));
    let welcomeTextP2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'p': {} }]);
    welcomeTextP2.textContent = 'You need to register with name and e-mail number to receive this service. Which is very important for subsequent service license purchase and any type of support. We hope you enjoy the service by registering like other esteemed customers.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP2);
    welcomeTableBodyTr2Td1.appendChild(Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'br': {} }]));
    let welcomeTextP3 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'p': {} }]);
    welcomeTextP3.textContent = 'If you need referrals to withdraw your account balance, please contact us. We are able to give you any amount of referrals as per your requirement. For every 40 referrals we have to pay $ 10.00. ' +
        'Important Notice: To receive referrals to your account, you must have our add-on installed on your browser and register with our add-on. ' +
        'You have to be on trial for that or you have not purchased any of our packages. Remember, your decision is to accept the money earned.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP3);
    /*welcomeTableBodyTr2Td1.appendChild(createElement([{'br': {}}]));
    let welcomeTextP4: any = createElement([{'p': {}}]);
    welcomeTextP4.textContent = 'Special Note: I am preparing to make the addon more powerful. For so long some websites have been able to analyze captcha code. From the next stable release, the add-on will be able to analyze Google\'s Recaptcha, H Captcha, 2Captcha\'s all Captcha.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP4);

    welcomeTableBodyTr2Td1.appendChild(createElement([{'br': {}}]));
    let welcomeTextP5: any = createElement([{'p': {}}]);
    welcomeTextP5.textContent = 'Therefore, this project requires a large amount of finances. You can contribute to our project by donating any amount.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP5);*/
    welcomeTableBodyTr2.appendChild(welcomeTableBodyTr2Td1);
    let welcomeTableBodyTr3 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    welcomeTableBody.appendChild(welcomeTableBodyTr3);
    let welcomeTableBodyTr3Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'td': { 'style': 'text-align:center;width:100%;font-size: 15px;line-height: 2;' } }]);
    let letStartRegistration = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'button': {
                'id': 'let-start-registration',
                'class': 'app-button app-button-outline-primary'
            }
        }]);
    letStartRegistration.textContent = 'Let\'s connect';
    welcomeTableBodyTr3Td1.appendChild(letStartRegistration);
    /*let letDonate: any = createElement([{
        'button': {
            'id': 'let-donate',
            'class': 'app-button app-button-outline-success'
        }
    }]);
    letDonate.textContent = 'Let\'s connect';
    welcomeTableBodyTr3Td1.appendChild(letDonate);*/
    welcomeTableBodyTr3.appendChild(welcomeTableBodyTr3Td1);
    (_a = acsAppWindow.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
        if (element.id === 'app-welcome-window' && element.style.display === 'none') {
            element.style.display = 'block';
        }
        /*console.log(element);*/
    });
    return globalEventControllers('app-welcome-window');
}
/*app registration window*/
function addMemberWindow() {
    let acsAppWindow = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window');
    let acsAppRegistrationBody = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'app-user-window',
                'class': 'row app-window-body animate',
                'style': 'width: 600px;display:none;'
            }
        }]);
    acsAppWindow.appendChild(acsAppRegistrationBody);
    let acsAppTitleBar = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'style': 'width: 100%;color: black;font-size: 28px;font-weight: bold;padding: 10px 0;display: inline-block;' } }]);
    let acsAppTitleText = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'class': 'acsAppTitleText',
                'style': 'left: 200px !important;'
            }
        }]);
    acsAppTitleText.textContent = 'Connect with us';
    acsAppTitleBar.appendChild(acsAppTitleText);
    let acsAppTitleSymbol = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'app-user-window-close-button',
                'class': 'acsAppTitleSymbol'
            }
        }]);
    acsAppTitleSymbol.textContent = 'x';
    acsAppTitleBar.appendChild(acsAppTitleSymbol);
    acsAppRegistrationBody.appendChild(acsAppTitleBar);
    let acsAppBody = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'app-user-body',
                'style': 'text-align: center !important;margin-top: 10px;color: black;'
            }
        }]);
    acsAppRegistrationBody.appendChild(acsAppBody);
    let infoPanel = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'id': 'infoPanel', 'class': 'messagePanel' } }]);
    acsAppBody.appendChild(infoPanel);
    let acsAppBodyInput0 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'user-ip-address',
                'type': 'text',
                'class': 'form-input',
                'placeholder': 'Your IP here..',
                'disabled': 'disabled',
                'style': 'display:none;'
            }
        }]);
    acsAppBody.appendChild(acsAppBodyInput0);
    let acsAppBodyInput1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'first-name',
                'type': 'text',
                'class': 'form-input',
                'placeholder': 'Your first name here..',
                'required': 'required'
            }
        }]);
    acsAppBody.appendChild(acsAppBodyInput1);
    let acsAppBodyInput2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'last-name',
                'type': 'text',
                'class': 'form-input',
                'placeholder': 'Your last name here..',
                'required': 'required'
            }
        }]);
    acsAppBody.appendChild(acsAppBodyInput2);
    let acsAppBodyInput3 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'email-address',
                'type': 'email',
                'class': 'form-input',
                'placeholder': 'Your email address here..',
                'required': 'required'
            }
        }]);
    acsAppBody.appendChild(acsAppBodyInput3);
    let acsAppBodyInput4 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'acs-password',
                'type': 'password',
                'class': 'form-input',
                'placeholder': 'Your password here..',
                'required': 'required'
            }
        }]);
    acsAppBody.appendChild(acsAppBodyInput4);
    let buttonZone = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'style': 'margin: 10px 0 5px 0;' } }]);
    acsAppBody.appendChild(buttonZone);
    let button1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'button': {
                'id': 'let-connect',
                'class': 'app-button app-button-outline-primary',
                'type': 'button',
                'style': 'display:none;'
            }
        }]);
    button1.textContent = 'Let\'s Connect';
    buttonZone.appendChild(button1);
    let button2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'let-login-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Already member'
            }
        }]);
    buttonZone.appendChild(button2);
    let button3 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'do-login-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Log In',
                'style': 'display:none;'
            }
        }]);
    buttonZone.appendChild(button3);
    let button4 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'do-register-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Register'
            }
        }]);
    buttonZone.appendChild(button4);
    let button5 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'let-get-a-licence-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Get a licence',
                'style': 'display:none;'
            }
        }]);
    buttonZone.appendChild(button5);
    let button6 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'let-earn-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Start Earning now',
                'style': 'display:none;'
            }
        }]);
    buttonZone.appendChild(button6);
    let button7 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'do-reset-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Reset Account',
                'style': 'display:none;'
            }
        }]);
    buttonZone.appendChild(button7);
    let button8 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'do-recover-password-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Password Recovery',
                'style': 'display:none;'
            }
        }]);
    buttonZone.appendChild(button8);
    acsAppWindow.childNodes.forEach(function (element) {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
        if (element.id === 'app-user-window' && element.style.display === 'none') {
            element.style.display = 'block';
        }
    });
    return globalEventControllers('app-user-window');
}
/*app PriceList window*/
function addPriceListWindow() {
    let acsAppWindow = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window');
    let acsAppChoosePlan = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'app-priceList-window',
                'class': 'row app-window-body animate',
                'style': 'width: 600px;display:none;'
            }
        }]);
    acsAppWindow.appendChild(acsAppChoosePlan);
    let acsAppChoosePlanTitleBar = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'style': 'width: 100%;color: black;font-size: 28px;font-weight: bold;padding: 10px 0;display: inline-block;' } }]);
    let acsAppChoosePlanTitleText = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'choose-plan-title',
                'class': 'acsAppTitleText',
                'style': 'left: 220px !important;'
            }
        }]);
    acsAppChoosePlanTitleText.textContent = 'Choose Plan';
    acsAppChoosePlanTitleBar.appendChild(acsAppChoosePlanTitleText);
    let acsAppChoosePlanTitleSymbol = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'app-priceList-window-close-button',
                'class': 'acsAppTitleSymbol'
            }
        }]);
    acsAppChoosePlanTitleSymbol.textContent = 'x';
    acsAppChoosePlanTitleBar.appendChild(acsAppChoosePlanTitleSymbol);
    acsAppChoosePlan.appendChild(acsAppChoosePlanTitleBar);
    let acsAppChoosePlanBody = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'class': 'setting-app-body' } }]);
    /*let messagePanel2 = createElement([{
        'div': {
            'id': 'messagePanel2',
            'class': 'messagePanel'
        }
    }]);
    acsAppChoosePlanBody.appendChild(messagePanel2);*/
    acsAppChoosePlan.appendChild(acsAppChoosePlanBody);
    let acsAppChoosePlanBodyContent = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'style': 'text-align:center !important;width: 100%;' } }]);
    acsAppChoosePlanBody.appendChild(acsAppChoosePlanBodyContent);
    let priceList = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'id': 'priceList', 'class': 'priceList' } }]);
    acsAppChoosePlanBodyContent.appendChild(priceList);
    /*let planItem1: any = createElement([{'div': {'class': 'priceItem', 'id': 'plan1'}}]);
    planItem1.innerHTML = 'Plan 01<br>Daily Limit '+currencyFormat(5)+' <br>validity 1 month <br>price only $ 5 <br>';
    priceList.appendChild(planItem1);
    let planItem2: any = createElement([{'div': {'class': 'priceItem', 'id': 'plan2'}}]);
    planItem2.innerHTML = 'Plan 02<br>Daily Limit '+currencyFormat(10000)+' <br>validity 1 month <br>price only $ 10 <br>';
    priceList.appendChild(planItem2);
    let planItem3: any = createElement([{'div': {'class': 'priceItem', 'id': 'plan3'}}]);
    planItem3.innerHTML = 'Plan 03<br>Daily Limit '+currencyFormat(20000)+' <br>validity 1 month <br>price only $ 20 <br>';
    priceList.appendChild(planItem3);*/
    let planItem4 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'class': 'priceItem', 'id': 'plan4' } }]);
    planItem4.innerHTML = 'Plan 01<br>Daily Unlimited <br>validity 1 month <br>price only $ 15 <br>';
    priceList.appendChild(planItem4);
    let planItem5 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'class': 'priceItem', 'id': 'plan5' } }]);
    planItem5.innerHTML = 'Plan 02<br>Referrals 40 <br>validity 1 time <br>price only ' + Object(_lib_functions__WEBPACK_IMPORTED_MODULE_3__["currencyFormat"])(10) + ' <br>';
    priceList.appendChild(planItem5);
    /*app payment window*/
    let paymentPanel = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'paymentPanel',
                'style': 'display: none; margin-top: 10px; /*width: 578px !important;*/'
            }
        }]);
    acsAppChoosePlanBodyContent.appendChild(paymentPanel);
    let buttonPayment = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'button': {
                'id': 'payment-link-button',
                'type': 'button',
                'class': 'app-button app-button-outline-success',
                'data-url': '',
                'style': '/*margin-left: 180px;*/'
            }
        }]);
    buttonPayment.textContent = 'Wait for payment';
    paymentPanel.appendChild(buttonPayment);
    let button8 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'input': {
                'id': 'go-back-to-priceList-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Back to Licence Price List',
                'style': 'display:none;margin-left: 180px;'
            }
        }]);
    acsAppChoosePlanBody.appendChild(button8);
    acsAppWindow.childNodes.forEach(function (element) {
        if (element.style.display === 'block' || element.style.display !== 'block') {
            element.style.display = 'none';
        }
        if (element.id === 'app-priceList-window' && element.style.display === 'none') {
            element.style.display = 'block';
        }
        /*console.log(element)*/
    });
    if (acsAppWindow.style.display === 'none') {
        acsAppWindow.style.display = 'block';
    }
    return globalEventControllers('app-priceList-window');
}
/*app waitForNextDay window*/
function addWaitForNextDayWindow() {
    var _a;
    let acsAppWindow = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window');
    acsAppWindow.style.display = 'block';
    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-setting-window').style.display = 'none';
    let acsAppWelcome = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
            'div': {
                'id': 'app-waitForNextDay-window',
                'class': 'row app-window-body animate' /*,
                'style': 'width: 600px;'*/
            }
        }]);
    acsAppWindow.appendChild(acsAppWelcome);
    let acsAppWelcomeBody = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'class': 'setting-app-body' } }]);
    acsAppWelcome.appendChild(acsAppWelcomeBody);
    let acsAppWelcomeBodyContent = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'div': { 'style': 'float: left;text-align: left !important;margin: 0;padding: 20px 30px;color: black;' } }]);
    acsAppWelcomeBody.appendChild(acsAppWelcomeBodyContent);
    let welcomeTable = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'table': { 'style': 'width:100%;' } }]);
    acsAppWelcomeBodyContent.appendChild(welcomeTable);
    let welcomeTableBody = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tbody': {} }]);
    welcomeTable.appendChild(welcomeTableBody);
    let welcomeTableBodyTr1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    welcomeTableBody.appendChild(welcomeTableBodyTr1);
    let welcomeTableBodyTr1Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'td': { 'style': 'width:100%;color: red;line-height: 1.25;text-align: center;position: relative;font-size: 26px;font-weight: bold;padding-bottom: 15px;user-select: none;-webkit-user-select: none;-ms-user-select:none ;' } }]);
    welcomeTableBodyTr1Td1.textContent = 'You have exceeded today\'s earnings limit. The add-on has been deactivated for now.';
    welcomeTableBodyTr1.appendChild(welcomeTableBodyTr1Td1);
    let welcomeTableBodyTr2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'tr': {} }]);
    welcomeTableBody.appendChild(welcomeTableBodyTr2);
    let welcomeTableBodyTr2Td1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'td': { 'style': 'width:100%;color:green;font-size: 25px;text-align: center;padding: 7px 15px 0 15px;user-select: none;-webkit-user-select: none;-ms-user-select:none ;font-weight: bold;' } }]);
    let welcomeTextP1 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'p': {} }]);
    welcomeTextP1.textContent = 'Will automatically reactivate after';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP1);
    let welcomeTextP2 = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'p': { 'id': 'countdown-time' } }]);
    welcomeTextP2.textContent = '00 Hours 00 Minutes 00 Seconds.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP2);
    welcomeTableBodyTr2.appendChild(welcomeTableBodyTr2Td1);
    (_a = acsAppWindow.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
        if (element.id === 'app-waitForNextDay-window' && element.style.display === 'none') {
            element.style.display = 'block';
        }
        /*console.log(element);*/
    });
    return globalEventControllers('app-welcome-window');
}
function assembleAppContent() {
    if (document.body.childNodes.length >= 0) {
        Object(_lib_assets__WEBPACK_IMPORTED_MODULE_5__["pushExecuteScript"])(document.body);
        document.body.childNodes.forEach(function (element) {
            Object(_lib_functions__WEBPACK_IMPORTED_MODULE_3__["reFormatScriptTag"])(element);
            if (element.nodeName === 'DIV' && element.id === 'outer') {
                element.childNodes.forEach(function (element) {
                    if (element.nodeName === 'DIV' && element.id === 'main' && element.getAttribute('align') === 'center') {
                        let a = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
                                div: {
                                    id: "app-company-declaimer",
                                    class: "app-company-declaimer"
                                }
                            }]);
                        a.innerHTML = '<strong>Announcement:</strong>' + ' Mishusoft Systems Inc has just created this add-on to help you make money online. We are not affiliated with any of these web sites. By using this add-on, you are acknowledging that making and withdrawing money is entirely at your own risk.';
                        if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-company-declaimer') === undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-company-declaimer') === null) {
                            element.appendChild(a);
                        }
                        let o = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
                                a: {
                                    id: "app-company-text",
                                    class: "app-company-text",
                                    href: _db__WEBPACK_IMPORTED_MODULE_1__["app"].website.home,
                                    title: "Visit our website for more earning app and add-ons."
                                }
                            }]);
                        o.textContent = "This add-on powered by Mishusoft Systems Inc.";
                        if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-company-text') === undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-company-text') === null) {
                            element.appendChild(o);
                        }
                        element.childNodes.forEach(function (element) {
                            var _a;
                            if (element.nodeName === 'FORM' && element.name === 'mainf' && ((_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.nodeName) === 'DIV') {
                                element.childNodes.forEach(function (element) {
                                    var _a, _b, _c;
                                    /*console.log(element)
                                    console.log((element as HTMLDivElement).textContent)*/
                                    if (element.nodeName === 'DIV' && element.getAttribute('align') === 'center') {
                                        if (element.firstElementChild !== null && element.firstElementChild.nodeName === 'INPUT' && element.firstElementChild.type === 'text') {
                                            if (element.firstElementChild.style.display !== 'none') {
                                                element.firstElementChild.style.display = 'none';
                                            }
                                            element.firstElementChild.id = 'data-entry-box';
                                        }
                                        if (element.firstElementChild !== null && element.firstElementChild.nodeName === 'TABLE') {
                                            if (element.firstElementChild.firstElementChild.nodeName === 'TBODY') {
                                                element.firstElementChild.firstElementChild.firstElementChild.id = 'captcha-img-zone';
                                            }
                                        }
                                        if (element.firstElementChild !== null && element.firstElementChild.nodeName === 'INPUT' && element.firstElementChild.type === 'button') {
                                            if (element.style.display !== 'none' && element.textContent !== '' && element.firstElementChild.id !== 'auto-data-entry-start-btn') {
                                                element.id = 'data-submit-zone';
                                                element.innerHTML = '<button id="auto-data-entry-start-btn" type="button" class="app-button app-button-outline-primary" title="If you have a licence, then it will be active" disabled="disabled">Start</button>&nbsp;&nbsp;' +
                                                    '<select class="app-select" id="data-entry-options" title="If you have a licence, then it will be active" disabled="disabled">' +
                                                    '<option value="auto">Auto</option><option value="bulk">Bulk</option>'
                                                    + '<option value="manually">Manually</option></select>&nbsp;' +
                                                    '<button id="auto-data-entry-reset-btn" type="button" class="app-button app-button-outline-danger" title="If you have a licence, then it will be active" disabled="disabled">Reset</button>';
                                            }
                                        }
                                        if (element.firstElementChild !== null && element.nodeName === 'DIV' && element.getAttribute('align') === 'center' && element.firstElementChild.nodeName === 'BR' &&
                                            ((_b = (_a = element) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.indexOf('To get ' + _db__WEBPACK_IMPORTED_MODULE_1__["app"].extras.sitePrice + ' cents, enter the symbols')) !== -1) {
                                            console.log(element);
                                            console.info('note board found!!');
                                            element.id = 'app-company-note';
                                            element.setAttribute('style', 'font-size: 13px;line-height: 1.35;text-align: justify;');
                                            element.innerHTML = '<strong>Note:</strong> If you fill in the picture numbers shown above correctly, <u>you will get ' + _db__WEBPACK_IMPORTED_MODULE_1__["app"].extras.sitePrice + ' cents each time</u>. By using our add-on with any method you can definitely earn dollars by filling in the captcha correctly. Method 1 [default] of our add-on is ' +
                                                '[auto], <u> it is enough to turn it on once. As long as the internet browser is open on your device and the internet connection is connected uninterrupted.</u> This way you can earn thousands of dollars every day. Method 2 is the bulk method. It allows you to earn $ ' + _db__WEBPACK_IMPORTED_MODULE_1__["app"].extras.bulkEarn + ' per second per click and the latest method 3 is '
                                                + 'the manual method. With this you can earn ' + _db__WEBPACK_IMPORTED_MODULE_1__["app"].extras.sitePrice + ' cents every time.';
                                            (_c = element.nextElementSibling) === null || _c === void 0 ? void 0 : _c.remove();
                                        }
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}
/*event controllers*/
async function globalEventControllers(component) {
    var _a, _b;
    if (component == 'app-welcome-window') {
        /*console.log('set event for welcome window close button action');*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])("app-welcome-window-close-button").addEventListener("click", function () {
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-welcome-window').remove();
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window').style.display = 'none';
        });
        /*console.log('set event for let-start-registration button action');*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('let-start-registration').addEventListener('click', function () {
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-welcome-window').remove();
            addMemberWindow();
        });
        /*console.log('set event for let-start-registration button action');*/
        /*captureElementById('let-donate').addEventListener('click', function () {
            captureElementById('app-welcome-window').remove();
            addMemberWindow();
        });*/
    }
    if (component == 'app-user-window') {
        /*console.log('append message panel');*/
        /*-------------------------------*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-user-body').insertBefore(Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
                'div': {
                    'id': 'messagePanel',
                    'class': 'messagePanel'
                }
            }]), Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-user-body').firstElementChild);
        /*-------------------------------*/
        /*console.log('set event for app-user-window-close-button action');*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])("app-user-window-close-button").addEventListener("click", function () {
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-user-window').remove();
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window').style.display = 'none';
        });
        /*console.log('set let login event window');*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('let-login-button').addEventListener('click', function () {
            this.style.display = 'none';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').textContent = '';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'none';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('first-name').style.display = 'none';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('last-name').style.display = 'none';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('let-connect').removeAttribute('style');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('do-login-button').removeAttribute('style');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('do-register-button').style.display = 'none';
        });
        /*console.log('set let password recovery event window');*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('do-recover-password-button').addEventListener('click', function () {
            this.value = 'Processing...';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').textContent = '';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'none';
            let emailAddressCheck;
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address') === undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value === '') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'block';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter your email address (valid for more than 14 characters).<br/>';
                this.value = 'Password Recovery';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value.indexOf('@') === -1 || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value.indexOf('.') === -1 || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value.length <= 14) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'block';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter valid email address.<br/>';
                this.value = 'Password Recovery';
            }
            else {
                emailAddressCheck = 'OK';
            }
            /*problem*/
            if (emailAddressCheck === 'OK') {
                (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display === 'block') ? Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'none' : '';
                _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({
                    'command': 'recoverUserPassword',
                    'data': {
                        'emailAddress': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value
                    }
                });
                /*alert('start password recovery!!')*/
            }
        });
        /*console.log('set let connect event window');*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('let-connect').addEventListener('click', function () {
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').textContent = '';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'none';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('do-login-button').style.display = 'none';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('first-name').removeAttribute('style');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('last-name').removeAttribute('style');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('let-login-button').removeAttribute('style');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('do-register-button').removeAttribute('style');
            this.style.display = 'none';
        });
        /*console.log('set registration event window');*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('do-register-button').addEventListener('click', function () {
            this.value = 'Processing...';
            let firstNameCheck;
            let lastNameCheck;
            let emailAddressCheck;
            let passwordCheck;
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').textContent = '';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'block';
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('first-name') === undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('first-name').value === '') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter your first name (more than 4 characters).<br/>';
                this.value = 'Register';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["checkDuplicate"])(Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('first-name').value)) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'A character has been used more than twice in your first name.<br/>';
                this.value = 'Register';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('first-name').value.length <= 3) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter your first name more than 4 characters.<br/>';
                this.value = 'Register';
            }
            else {
                firstNameCheck = 'OK';
            }
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('last-name') === undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('last-name').value === '') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter your last name (more than 4 characters).<br/>';
                this.value = 'Register';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["checkDuplicate"])(Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('last-name').value)) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'A character has been used more than twice in your last name.<br/>';
                this.value = 'Register';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('last-name').value.length <= 3) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter your last name more than 4 letter.<br/>';
                this.value = 'Register';
            }
            else {
                lastNameCheck = 'OK';
            }
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address') === undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value === '') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter your email address (valid for more than 14 characters).<br/>';
                this.value = 'Register';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value.indexOf('@') === -1 || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value.indexOf('.') === -1 || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value.length <= 14) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter valid email address.<br/>';
                this.value = 'Register';
            }
            else {
                emailAddressCheck = 'OK';
            }
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password') === undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value === '') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter your password (with @_ character and more than 6 character).<br/>';
                this.value = 'Register';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value !== '' && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value.indexOf('@') === -1) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter password with (@) character.<br/>';
                this.value = 'Register';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value !== '' && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value.indexOf('_') === -1) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter password with (_) character.<br/>';
                this.value = 'Register';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["checkDuplicate"])(Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value)) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'A character has been used more than twice in your password.<br/>';
                this.value = 'Register';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value !== '' && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value.length <= 6) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter password more than 6 character.<br/>';
                this.value = 'Register';
            }
            else {
                passwordCheck = 'OK';
            }
            if (firstNameCheck === 'OK' && lastNameCheck === 'OK' && emailAddressCheck === 'OK' && passwordCheck === 'OK') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'none';
                _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({
                    'command': 'saveUserSettingData',
                    'data': {
                        'firstName': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('first-name').value,
                        'lastName': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('last-name').value,
                        'emailAddress': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value,
                        'password': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value
                    }
                });
            }
        });
        /*console.log('set reset event window');*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('do-reset-button').addEventListener('click', function () {
            this.value = 'Processing...';
            let IpAddressCheck;
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').textContent = '';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'block';
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('user-ip-address') === undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('user-ip-address').value === '') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter your ip address.<br/>';
                this.value = 'Reset Account';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('user-ip-address').value.length >= 16) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Invalid ip address.<br/>';
                this.value = 'Reset Account';
            }
            else {
                IpAddressCheck = 'OK';
            }
            if (IpAddressCheck === 'OK') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'none';
                _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({
                    'command': 'resetUserIpData',
                    'data': {
                        'ipAddress': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('user-ip-address').value,
                        'firstName': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('first-name').value,
                        'lastName': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('last-name').value,
                        'emailAddress': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value,
                        'password': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value
                    }
                });
            }
        });
        /*console.log('set login event window');*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('do-login-button').addEventListener('click', function () {
            this.value = 'Processing...';
            let emailAddressCheck;
            let passwordCheck;
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').textContent = '';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'block';
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address') === undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value === '') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter your email address (valid for more than 14 characters).<br/>';
                this.value = 'Log In';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value.indexOf('@') === -1 || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value.length <= 14) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter valid email address.<br/>';
                this.value = 'Log In';
            }
            else {
                emailAddressCheck = 'OK';
            }
            if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password') === undefined || Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value === '') {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter your password (with @_ character and more than 6 character).<br/>';
                this.value = 'Log In';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value !== '' && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value.indexOf('@') === -1) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter password with (@) character.<br/>';
                this.value = 'Log In';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value !== '' && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value.indexOf('_') === -1) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter password with (_) character.<br/>';
                this.value = 'Log In';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["checkDuplicate"])(Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value)) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'A character has been used more than twice in your password.<br/>';
                this.value = 'Log In';
            }
            else if (Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value !== '' && Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value.length <= 6) {
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').classList = 'messagePanel ev_error';
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').innerHTML += 'Enter password more than 6 character.<br/>';
                this.value = 'Log In';
            }
            else {
                passwordCheck = 'OK';
            }
            if (emailAddressCheck === 'OK' && passwordCheck === 'OK') {
                /*console.log(captureElementById('email-address').value);
                console.log(captureElementById('acs-password').value);*/
                Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('messagePanel').style.display = 'none';
                _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({
                    'command': 'doUserLoginData',
                    'data': {
                        'emailAddress': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email-address').value,
                        'password': Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-password').value
                    }
                });
            }
        });
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('let-earn-button').addEventListener('click', function () {
            _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({ 'command': "checkSettings" });
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-user-window').remove();
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window').style.display = 'none';
            /*console.log('request to close user window!!');*/
        });
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('let-get-a-licence-button').addEventListener('click', function () {
            addPriceListWindow();
            /*console.log('request to open licence window!!');*/
        });
    }
    if (component === 'app-priceList-window') {
        (_a = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-priceList-window-close-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-priceList-window').remove();
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window').style.display = 'none';
        });
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('go-back-to-priceList-button').addEventListener('click', function () {
            this.style.display = 'none';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('priceList').style.display = 'block';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('paymentPanel').style.display = 'none';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('payment-link-button').textContent = 'Wait for payment!';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('payment-link-button').setAttribute('data-url', '');
        });
        /*captureElementById('plan1').addEventListener('click', function () {
            captureElementById('choose-plan-title').textContent = 'Make Payment';
            captureElementById('payment-link-button').textContent = 'Generating Payment Link...';
            captureElementById('payment-link-button').setAttribute('disabled', 'disabled');
            captureElementById('payment-link-button').setAttribute('style', 'cursor:progress');
            captureElementById('choose-plan-title').setAttribute('style', 'left: 200px !important;');
            captureElementById('priceList').style.display = 'none';
            captureElementById('go-back-to-priceList-button').style.display = 'block';
            captureElementById('paymentPanel').style.display = 'block';

            acsComPortFront.postMessage({
                'command': 'verifyClient',
                'data': {security_code: 1, amount: 5}
            });
        });
        captureElementById('plan2').addEventListener('click', function () {
            captureElementById('choose-plan-title').textContent = 'Make Payment';
            captureElementById('payment-link-button').textContent = 'Generating Payment Link...';
            captureElementById('payment-link-button').setAttribute('disabled', 'disabled');
            captureElementById('payment-link-button').setAttribute('style', 'cursor:progress');
            captureElementById('choose-plan-title').setAttribute('style', 'left: 200px !important;');
            captureElementById('priceList').style.display = 'none';
            captureElementById('go-back-to-priceList-button').style.display = 'block';
            captureElementById('paymentPanel').style.display = 'block';

            acsComPortFront.postMessage({
                'command': 'verifyClient',
                'data': {security_code: 1, amount: 10}
            });
        });
        captureElementById('plan3').addEventListener('click', function () {
            captureElementById('choose-plan-title').textContent = 'Make Payment';
            captureElementById('payment-link-button').textContent = 'Generating Payment Link...';
            captureElementById('payment-link-button').setAttribute('disabled', 'disabled');
            captureElementById('payment-link-button').setAttribute('style', 'cursor:progress');
            captureElementById('choose-plan-title').setAttribute('style', 'left: 200px !important;');
            captureElementById('priceList').style.display = 'none';
            captureElementById('go-back-to-priceList-button').style.display = 'block';
            captureElementById('paymentPanel').style.display = 'block';

            acsComPortFront.postMessage({
                'command': 'verifyClient',
                'data': {security_code: 1, amount: 20}
            });
        });*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('plan4').addEventListener('click', function () {
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('choose-plan-title').textContent = 'Make Payment';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('payment-link-button').textContent = 'Generating Payment Link...';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('payment-link-button').setAttribute('disabled', 'disabled');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('payment-link-button').setAttribute('style', 'cursor:progress');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('choose-plan-title').setAttribute('style', 'left: 200px !important;');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('priceList').style.display = 'none';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('go-back-to-priceList-button').style.display = 'block';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('paymentPanel').style.display = 'block';
            _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({
                'command': 'verifyClient',
                'data': { security_code: 1, amount: 15, plan: 'Plan 04', planType: 'earning' }
            });
        });
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('plan5').addEventListener('click', function () {
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('choose-plan-title').textContent = 'Make Payment';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('payment-link-button').textContent = 'Generating Payment Link...';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('payment-link-button').setAttribute('disabled', 'disabled');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('payment-link-button').setAttribute('style', 'cursor:progress');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('choose-plan-title').setAttribute('style', 'left: 200px !important;');
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('priceList').style.display = 'none';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('go-back-to-priceList-button').style.display = 'block';
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('paymentPanel').style.display = 'block';
            _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({
                'command': 'verifyClient',
                'data': { security_code: 1, amount: 10, plan: 'Plan 05', planType: 'referrals40' }
            });
        });
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('payment-link-button').addEventListener('click', function () {
            var _a;
            (_a = window.open(this.getAttribute('data-url'), "winName", "location=0,width=650,height=750")) === null || _a === void 0 ? void 0 : _a.focus();
            /*browser.browserSettings.allowPopupsForUserEvents.get({}).then(function(current){
                if(current.value !== true){
                    browser.browserSettings.allowPopupsForUserEvents.set({value: true});
                    window.open(this.getAttribute('data-url'), "winName", "location=0,width=650,height=750")?.focus();
                } else {
                    window.open(this.getAttribute('data-url'), "winName", "location=0,width=650,height=750")?.focus();
                }
            });*/
        });
    }
    if (component == 'app-setting-window') {
        /*console.log('set event for app-setting-button action');*/
        /*console.log('set event for app-setting-opener action');
        console.log(document.querySelector('#app-setting-button'));*/
        (_b = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('app-setting-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            /*console.info('preparing to send data request');*/
            _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({ 'command': "checkSettings" });
            _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({ 'command': 'sendUserData' });
            /*console.info('send data request');*/
        });
        /*console.log('set event for acs-app-close-button action');
        console.log(captureElementById('acs-app-close-button'));*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-close-button').addEventListener('click', function () {
            Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('acs-app-window').style.display = 'none';
        });
        /*console.log('set event for setting-get-a-licence action');
        console.log(captureElementById('setting-get-a-licence'));*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('setting-get-a-licence').addEventListener('click', function () {
            webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_2__["browser"].storage.local.set({ "appsetting": "running" });
            addPriceListWindow();
            /*console.log('request to open licence window!!');*/
        });
        /*console.log('set event for nav action');*/
        /*console.log(captureElementByClassName('acsAppNavUL'));*/
        Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementByClassName"])('acsAppNavUL').childNodes.forEach(function (element) {
            const content = (element.id).substr(((element.id).indexOf('nav-') + "nav-".length), (element.id).length);
            element.addEventListener('click', function () {
                /*const parentNavigatorId = element.id;
                console.log(element.id)
                console.log(content)*/
                if (content) {
                    Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementByClassName"])('setting-app-body-content').childNodes.forEach(function (element) {
                        /*console.log(element)*/
                        if (element.id !== 'setting-app-content-' + content) {
                            /*captureElementById(parentNavigatorId).removeAttribute('style');*/
                            element.style.display = 'none';
                            /*console.log(element)
                            console.log(captureElementById(parentNavigatorId))*/
                        }
                        else {
                            if (element.style.display === 'none') {
                                element.style.display = 'block';
                                /*captureElementById(parentNavigatorId).setAttribute('style','background-color: #9932CC;cursor: pointer;');
                                console.log(element)
                                console.log(captureElementById(parentNavigatorId))*/
                            }
                        }
                    });
                }
            });
        });
        /*console.log(captureElementById('app-setting-window'));*/
        /*console.log('completed');*/
    }
}
/*event controllers*/
/*monitor*/
function trackSimilarWebsite() {
    var _a, _b;
    (_a = document.querySelector('.logsub')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        if (_messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"] !== undefined) {
            _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({
                'command': "saveLoginData",
                data: {
                    username: Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('username').value,
                    password: Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('password').value,
                    workWebsite: window.location.origin
                }
            });
        }
        /*else {
              console.error('Error: Communication error.')
          }*/
    });
    document.querySelectorAll('a').forEach(function (el) {
        if (el.href.indexOf('logout') !== -1) {
            el.addEventListener('click', function () {
                getLoggedInUsername();
                _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({
                    command: "saveLogoutData",
                    data: {
                        username: _db__WEBPACK_IMPORTED_MODULE_1__["coll"].user.username,
                        workWebsite: window.location.origin
                    }
                });
            });
        }
    });
    if (_db__WEBPACK_IMPORTED_MODULE_1__["coll"].dom.currentPage === _db__WEBPACK_IMPORTED_MODULE_1__["app"].page.registration) {
        document.querySelectorAll('img').forEach(function (element) {
            var _a, _b;
            if (element.src.indexOf('sendmess.png') !== -1 && ((_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.nodeName) === 'A') {
                (_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.setAttribute('id', 'register-btn');
            }
        });
        (_b = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('register-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            /*console.log(captureElementById('username').value)
            console.log(captureElementById('password1').value)
            console.log(captureElementById('email').value)*/
            _messanger__WEBPACK_IMPORTED_MODULE_4__["acsComPortFront"].postMessage({
                'command': "saveRegistrationData",
                data: {
                    username: Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('username').value,
                    password: Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('password1').value,
                    email: Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('email').value,
                    workWebsite: window.location.origin
                }
            });
        });
    }
}
/*monitor*/
function getLoggedInUsername() {
    document.querySelectorAll('td').forEach(function (element) {
        var _a, _b, _c, _d;
        if (((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.indexOf('Welcome')) !== -1) {
            _db__WEBPACK_IMPORTED_MODULE_1__["coll"].user.username = (_d = (_c = (_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.nextElementSibling) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.replace(/\s/g, '');
            return _db__WEBPACK_IMPORTED_MODULE_1__["coll"].user.username;
        }
    });
}
function getLoggedInUsersEarned() {
    var _a;
    return (_a = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('moneycount').textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s\$/g, '').replace(/\./, '');
}
function getLoggedInUsersReferralsAttracted() {
    var _a;
    return (_a = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('refcount').textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '');
}
function getLoggedInUsersEarnedByReferrals() {
    var _a;
    return (_a = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["captureElementById"])('refmoney').textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s\$/g, '').replace(/\./, '');
}


/***/ }),

/***/ "./assets/ts/lib-assets.ts":
/*!*********************************!*\
  !*** ./assets/ts/lib-assets.ts ***!
  \*********************************/
/*! exports provided: dataEntryButton, bottomNotification, pushExecuteScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataEntryButton", function() { return dataEntryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottomNotification", function() { return bottomNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushExecuteScript", function() { return pushExecuteScript; });
/* harmony import */ var _lib_functions_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib-functions-common */ "./assets/ts/lib-functions-common.ts");
/*required html elements*/

const dataEntryButton = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
        'button': {
            'id': 'auto-data-entry-btn',
            'type': 'submit',
            'style': 'display: none;'
        }
    }]);
const bottomNotification = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{
        'div': {
            'id': 'bottom-notification',
            'class': 'bottom-notification'
        }
    }]);
bottomNotification.textContent = 'If you need referrals to withdraw your account balance, please contact us or click on this message bobble. We are able to give you any amount of referrals as per your requirement. ' +
    'For every 40 referrals we have to pay $ 10.00. Important Notice: To receive referrals to your account, you must have our add-on installed on your browser and register with our add-on. ' +
    'You have to be on trial for that or you have not purchased any of our packages. Remember, your decision is to accept the money earned.';
/*required html elements*/
function pushExecuteScript(element) {
    let script = Object(_lib_functions_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])([{ 'script': {} }]);
    script.innerHTML = 'function dosub(){let captcha =document.querySelector(\'#data-entry-box\').value;if (captcha === null || captcha === undefined) {getCaptcha();return false;}moneycount = moneycount + siteprice;setCookie("moneycount", moneycount, "Mon, 01-Jan-2025 00:00:00 GMT", "/");smoneycount = moneycount / 100;document.getElementById(\'moneycount\').textContent = smoneycount + " $";getcapcha();}';
    return element.insertBefore(script, element.lastElementChild);
}


/***/ }),

/***/ "./assets/ts/lib-functions-common.ts":
/*!*******************************************!*\
  !*** ./assets/ts/lib-functions-common.ts ***!
  \*******************************************/
/*! exports provided: checkDuplicate, IsJsonString, captureElementById, captureElementByClassName, captureElementByTagName, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDuplicate", function() { return checkDuplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsJsonString", function() { return IsJsonString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureElementById", function() { return captureElementById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureElementByClassName", function() { return captureElementByClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureElementByTagName", function() { return captureElementByTagName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
function checkDuplicate(str) {
    for (let i = 0; i < str.length; i++) {
        let re = new RegExp("[^" + str[i] + "]", "g");
        if (str.replace(re, "").length >= 2) {
            return true;
        }
    }
    return false;
}
function IsJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function captureElementById(elementId) {
    if (document.querySelector('#' + elementId) !== null) {
        return document.querySelector('#' + elementId);
    }
}
function captureElementByClassName(ClassName) {
    if (document.querySelector('.' + ClassName) !== null) {
        return document.querySelector('.' + ClassName);
    }
}
function captureElementByTagName(TagName) {
    if (document.querySelector(TagName) !== null) {
        return document.querySelector(TagName);
    }
}
function createElement(node_data) {
    let element, i, j, k;
    for (i in node_data) {
        let data = node_data[i];
        for (j in data) {
            let elementName = j;
            let elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                let element_attribute = k;
                let element_attribute_value = elementData[k];
                element.setAttribute(element_attribute, element_attribute_value);
            }
        }
    }
    return element;
}


/***/ }),

/***/ "./assets/ts/lib-functions.ts":
/*!************************************!*\
  !*** ./assets/ts/lib-functions.ts ***!
  \************************************/
/*! exports provided: retrieveDate, reFormatScriptTag, currencyFormat, numberFormat, retrieveTimeByDate, startTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveDate", function() { return retrieveDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reFormatScriptTag", function() { return reFormatScriptTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyFormat", function() { return currencyFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormat", function() { return numberFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveTimeByDate", function() { return retrieveTimeByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTimer", function() { return startTimer; });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./assets/ts/db.ts");

function retrieveDate(presetDate) {
    let d, hours, format;
    if (presetDate) {
        d = new Date(presetDate);
    }
    else {
        d = new Date();
    }
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (d.getHours() === 0) {
        hours = '12';
    }
    else { // @ts-ignore
        if (d.getHours() >= '12') {
            hours = d.getHours() - 12;
        }
        else {
            hours = d.getHours();
        }
    }
    // @ts-ignore
    if (d.getHours() >= '12') {
        format = 'PM';
    }
    else {
        format = 'AM';
    }
    return (days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ', ' + hours + ':' + d.getMinutes() + ' ' + format);
}
function reFormatScriptTag(element) {
    var _a;
    (_a = element.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
        if (element.nodeName === 'SCRIPT') {
            _db__WEBPACK_IMPORTED_MODULE_0__["app"].document.body.insertBefore(element, _db__WEBPACK_IMPORTED_MODULE_0__["app"].document.body.lastElementChild);
        }
        else {
            reFormatScriptTag(element);
        }
    });
}
function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function numberFormat(num) {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function retrieveTimeByDate(nextUpdate) {
    let ld = new Date(nextUpdate);
    let duration = ld.getTime() - _db__WEBPACK_IMPORTED_MODULE_0__["today"].getTime();
    let drtime = new Date(duration);
    return drtime.getTime();
}
function startTimer(duration, display) {
    var timer = duration, /*hours,*/ minutes, seconds;
    /*let seconds:any = parseInt(String(duration), 10);*/
    setInterval(function () {
        /*let days: any = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        let hours: any = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        let minutes: any = Math.floor(seconds / 60);
        seconds -= minutes * 60;*/
        /*hours = parseInt(String(timer / 3600), 10);*/
        minutes = parseInt(String(timer / 60), 10);
        seconds = parseInt(String(timer % 60), 10);
        /*hours = hours < 10 ? "0" + hours : hours;*/
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = /*days + " Days, " + hours + " Hours, " +*/ minutes + " Minutes, " + seconds + " Seconds";
        if (--timer < 0) {
            /*alert(timer)*/
            timer = duration;
        }
    }, 1000);
}


/***/ }),

/***/ "./assets/ts/messanger.ts":
/*!********************************!*\
  !*** ./assets/ts/messanger.ts ***!
  \********************************/
/*! exports provided: acsComPortFront, webMessageReceiver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acsComPortFront", function() { return acsComPortFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webMessageReceiver", function() { return webMessageReceiver; });
/*communication channel*/
// @ts-ignore
let acsComPortFront = browser.runtime.connect({ name: 'acs-messaging-port' });
/*communication channel*/
function webMessageReceiver(type, callback) {
    window.addEventListener("message", function (event) {
        /*console.log(event);*/
        if (event && event.source === window && event.data && event.data.type) {
            if (event.data.type && event.data.type === type) {
                /*alert(event.data);*/
                if (callback) {
                    callback(event.data.payload);
                }
                /*else {
                    console.log(event.data.licence);
                }*/
            }
            /*else {
                console.error('No resolver for event type!!')
            }*/
        }
        /*else {
            console.error('Unknown web message!!')
        }*/
    });
}


/***/ }),

/***/ "./manifest.json.src":
/*!***************************!*\
  !*** ./manifest.json.src ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "manifest.json");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./assets/ts/app.ts ./manifest.json.src ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/ts/app.ts */"./assets/ts/app.ts");
module.exports = __webpack_require__(/*! ./manifest.json.src */"./manifest.json.src");


/***/ })

/******/ });
//# sourceMappingURL=content.js.map