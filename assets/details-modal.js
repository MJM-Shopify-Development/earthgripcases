function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"==_typeof(t)?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!=_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _callSuper(t,e,o){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,o||[],_getPrototypeOf(t).constructor):e.apply(t,o))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var o="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,o){var r;return _isNativeReflectConstruct()?Reflect.construct.apply(null,arguments):((r=[null]).push.apply(r,e),e=new(t.bind.apply(t,r)),o&&_setPrototypeOf(e,o.prototype),e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var DetailsModal=(()=>{function t(){var e;return _classCallCheck(this,t),(e=_callSuper(this,t)).detailsContainer=e.querySelector("details"),e.summaryToggle=e.querySelector("summary"),e.detailsContainer.addEventListener("keyup",function(t){return"ESCAPE"===t.code.toUpperCase()&&e.close()}),e.summaryToggle.addEventListener("click",e.onSummaryClick.bind(e)),e.querySelector('button[type="button"]').addEventListener("click",e.close.bind(e)),e.summaryToggle.setAttribute("role","button"),e}return _inherits(t,_wrapNativeSuper(HTMLElement)),_createClass(t,[{key:"isOpen",value:function(){return this.detailsContainer.hasAttribute("open")}},{key:"onSummaryClick",value:function(t){t.preventDefault(),t.target.closest("details").hasAttribute("open")?this.close():this.open(t)}},{key:"onBodyClick",value:function(t){this.contains(t.target)&&!t.target.classList.contains("modal-overlay")||this.close(!1)}},{key:"open",value:function(t){this.onBodyClickEvent=this.onBodyClickEvent||this.onBodyClick.bind(this),t.target.closest("details").setAttribute("open",!0),document.body.addEventListener("click",this.onBodyClickEvent),document.body.classList.add("overflow-hidden"),trapFocus(this.detailsContainer.querySelector('[tabindex="-1"]'),this.detailsContainer.querySelector('input:not([type="hidden"])'))}},{key:"close",value:function(){removeTrapFocus(!(0<arguments.length&&void 0!==arguments[0])||arguments[0]?this.summaryToggle:null),this.detailsContainer.removeAttribute("open"),document.body.removeEventListener("click",this.onBodyClickEvent),document.body.classList.remove("overflow-hidden")}}])})();customElements.define("details-modal",DetailsModal);