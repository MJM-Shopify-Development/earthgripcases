function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!=_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _callSuper(t,e,o){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,o||[],_getPrototypeOf(t).constructor):e.apply(t,o))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var o="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,o){var r;return _isNativeReflectConstruct()?Reflect.construct.apply(null,arguments):((r=[null]).push.apply(r,e),e=new(t.bind.apply(t,r)),o&&_setPrototypeOf(e,o.prototype),e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("pickup-availability")||customElements.define("pickup-availability",(()=>{function e(){var t;return _classCallCheck(this,e),(t=_callSuper(this,e)).hasAttribute("available")?(t.errorHtml=t.querySelector("template").content.firstElementChild.cloneNode(!0),t.onClickRefreshList=t.onClickRefreshList.bind(t),t.fetchAvailability(t.dataset.variantId),t):_possibleConstructorReturn(t)}return _inherits(e,_wrapNativeSuper(HTMLElement)),_createClass(e,[{key:"fetchAvailability",value:function(t){var e,o=this;t&&((e=this.dataset.rootUrl).endsWith("/")||(e+="/"),e="".concat(e,"variants/").concat(t,"/?section_id=pickup-availability"),fetch(e).then(function(t){return t.text()}).then(function(t){t=(new DOMParser).parseFromString(t,"text/html").querySelector(".shopify-section"),o.renderPreview(t)}).catch(function(t){var e=o.querySelector("button");e&&e.removeEventListener("click",o.onClickRefreshList),o.renderError()}))}},{key:"onClickRefreshList",value:function(){this.fetchAvailability(this.dataset.variantId)}},{key:"update",value:function(t){null!=t&&t.available?this.fetchAvailability(t.id):(this.removeAttribute("available"),this.innerHTML="")}},{key:"renderError",value:function(){this.innerHTML="",this.appendChild(this.errorHtml),this.querySelector("button").addEventListener("click",this.onClickRefreshList)}},{key:"renderPreview",value:function(t){var e=document.querySelector("pickup-availability-drawer");e&&e.remove(),t.querySelector("pickup-availability-preview")?(this.innerHTML=t.querySelector("pickup-availability-preview").outerHTML,this.setAttribute("available",""),document.body.appendChild(t.querySelector("pickup-availability-drawer")),this.dataset.productPageColorScheme.split(" ").forEach(function(t){document.querySelector("pickup-availability-drawer").classList.add(t)}),(e=this.querySelector("button"))&&e.addEventListener("click",function(t){document.querySelector("pickup-availability-drawer").show(t.target)})):(this.innerHTML="",this.removeAttribute("available"))}}])})()),customElements.get("pickup-availability-drawer")||customElements.define("pickup-availability-drawer",(()=>{function t(){var e;return _classCallCheck(this,t),(e=_callSuper(this,t)).onBodyClick=e.handleBodyClick.bind(e),e.querySelector("button").addEventListener("click",function(){e.hide()}),e.addEventListener("keyup",function(t){"ESCAPE"===t.code.toUpperCase()&&e.hide()}),e}return _inherits(t,_wrapNativeSuper(HTMLElement)),_createClass(t,[{key:"handleBodyClick",value:function(t){(t=t.target)==this||t.closest("pickup-availability-drawer")||"ShowPickupAvailabilityDrawer"==t.id||this.hide()}},{key:"hide",value:function(){this.removeAttribute("open"),document.body.removeEventListener("click",this.onBodyClick),document.body.classList.remove("overflow-hidden"),removeTrapFocus(this.focusElement)}},{key:"show",value:function(t){this.focusElement=t,this.setAttribute("open",""),document.body.addEventListener("click",this.onBodyClick),document.body.classList.add("overflow-hidden"),trapFocus(this)}}])})());