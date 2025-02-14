function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!=_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _callSuper(t,e,o){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,o||[],_getPrototypeOf(t).constructor):e.apply(t,o))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var o="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,o){var n;return _isNativeReflectConstruct()?Reflect.construct.apply(null,arguments):((n=[null]).push.apply(n,e),e=new(t.bind.apply(t,n)),o&&_setPrototypeOf(e,o.prototype),e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("quantity-popover")||customElements.define("quantity-popover",(()=>{function e(){var t;return _classCallCheck(this,e),(t=_callSuper(this,e)).mql=window.matchMedia("(min-width: 990px)"),t.mqlTablet=window.matchMedia("(min-width: 750px)"),t.infoButtonDesktop=t.querySelector(".quantity-popover__info-button--icon-only"),t.infoButtonMobile=t.querySelector(".quantity-popover__info-button--icon-with-label"),t.popoverInfo=t.querySelector(".quantity-popover__info"),t.closeButton=t.querySelector(".button-close"),t.eventMouseEnterHappened=!1,t.closeButton&&t.closeButton.addEventListener("click",t.closePopover.bind(t)),t.popoverInfo&&t.infoButtonDesktop&&t.mqlTablet.matches&&t.popoverInfo.addEventListener("mouseleave",t.closePopover.bind(t)),t.infoButtonDesktop&&(t.infoButtonDesktop.addEventListener("click",t.togglePopover.bind(t)),t.infoButtonDesktop.addEventListener("focusout",t.closePopover.bind(t))),t.infoButtonMobile&&t.infoButtonMobile.addEventListener("click",t.togglePopover.bind(t)),t.infoButtonDesktop&&t.mqlTablet.matches&&(t.infoButtonDesktop.addEventListener("mouseenter",t.togglePopover.bind(t)),t.infoButtonDesktop.addEventListener("mouseleave",t.closePopover.bind(t))),t}return _inherits(e,_wrapNativeSuper(HTMLElement)),_createClass(e,[{key:"togglePopover",value:function(t){var e,o,n=this;t.preventDefault(),"mouseenter"===t.type&&(this.eventMouseEnterHappened=!0),"click"===t.type&&this.eventMouseEnterHappened||(o="true"===(e=this.infoButtonDesktop&&this.mql.matches?this.infoButtonDesktop:this.infoButtonMobile).getAttribute("aria-expanded"),(this.mql.matches&&!o||"click"===t.type)&&(e.setAttribute("aria-expanded",!o),this.popoverInfo.toggleAttribute("hidden"),e.classList.toggle("quantity-popover__info-button--open"),this.infoButtonDesktop.classList.add("quantity-popover__info-button--icon-only--animation")),"true"===e.getAttribute("aria-expanded")&&"mouseenter"!==t.type&&(e.focus(),e.addEventListener("keyup",function(t){"Escape"===t.key&&n.closePopover(t)})))}},{key:"closePopover",value:function(t){t.preventDefault();var e=this.infoButtonDesktop.contains(t.relatedTarget),t=this.popoverInfo.contains(t.relatedTarget),o=this.infoButtonDesktop&&this.mql.matches?this.infoButtonDesktop:this.infoButtonMobile;e||t||(o.setAttribute("aria-expanded","false"),o.classList.remove("quantity-popover__info-button--open"),this.popoverInfo.setAttribute("hidden",""),this.infoButtonDesktop.classList.remove("quantity-popover__info-button--icon-only--animation")),this.eventMouseEnterHappened=!1}}])})());