function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!=_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _callSuper(t,e,o){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,o||[],_getPrototypeOf(t).constructor):e.apply(t,o))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _superPropGet(t,e,o,r){var n=_get(_getPrototypeOf(1&r?t.prototype:t),e,o);return 2&r&&"function"==typeof n?function(t){return n.apply(o,t)}:n}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,o){var r=_superPropBase(t,e);if(r)return(r=Object.getOwnPropertyDescriptor(r,e)).get?r.get.call(arguments.length<3?t:o):r.value}).apply(null,arguments)}function _superPropBase(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}customElements.get("quick-add-modal")||customElements.define("quick-add-modal",(()=>{function r(){var e;return _classCallCheck(this,r),(e=_callSuper(this,r)).modalContent=e.querySelector('[id^="QuickAddInfo-"]'),e.addEventListener("product-info:loaded",function(t){t.target.addPreProcessCallback(e.preprocessHTML.bind(e))}),e}return _inherits(r,ModalDialog),_createClass(r,[{key:"hide",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=document.querySelector("cart-notification")||document.querySelector("cart-drawer");e&&e.setActiveElement(this.openedBy),this.modalContent.innerHTML="",t&&(this.openedBy=null),_superPropGet(r,"hide",this,3)([])}},{key:"show",value:function(e){var o=this;e.setAttribute("aria-disabled",!0),e.classList.add("loading"),e.querySelector(".loading__spinner").classList.remove("hidden"),fetch(e.getAttribute("data-product-url")).then(function(t){return t.text()}).then(function(t){t=(new DOMParser).parseFromString(t,"text/html").querySelector("product-info"),o.preprocessHTML(t),HTMLUpdateUtility.setInnerHTML(o.modalContent,t.outerHTML),window.Shopify&&Shopify.PaymentButton&&Shopify.PaymentButton.init(),window.ProductModel&&window.ProductModel.loadShopifyXR(),_superPropGet(r,"show",o,3)([e])}).finally(function(){e.removeAttribute("aria-disabled"),e.classList.remove("loading"),e.querySelector(".loading__spinner").classList.add("hidden")})}},{key:"preprocessHTML",value:function(t){var e=this;t.classList.forEach(function(t){!t.startsWith("color-")&&"gradient"!==t||e.modalContent.classList.add(t)}),this.preventDuplicatedIDs(t),this.removeDOMElements(t),this.removeGalleryListSemantic(t),this.updateImageSizes(t),this.preventVariantURLSwitching(t)}},{key:"preventVariantURLSwitching",value:function(t){t.setAttribute("data-update-url","false")}},{key:"removeDOMElements",value:function(t){var e=t.querySelector("pickup-availability");e&&e.remove(),(e=t.querySelector("product-modal"))&&e.remove(),(e=t.querySelectorAll("modal-dialog"))&&e.forEach(function(t){return t.remove()})}},{key:"preventDuplicatedIDs",value:function(e){var t=e.dataset.section,o=t,r="quickadd-".concat(t);e.innerHTML=e.innerHTML.replaceAll(o,r),Array.from(e.attributes).forEach(function(t){t.value.includes(o)&&e.setAttribute(t.name,t.value.replace(o,r))}),e.dataset.originalSection=t}},{key:"removeGalleryListSemantic",value:function(t){(t=t.querySelector('[id^="Slider-Gallery"]'))&&(t.setAttribute("role","presentation"),t.querySelectorAll('[id^="Slide-"]').forEach(function(t){return t.setAttribute("role","presentation")}))}},{key:"updateImageSizes",value:function(t){var e,o;null!=(t=t.querySelector(".product"))&&t.classList.contains("product--columns")&&(e=t.querySelectorAll(".product__media img")).length&&(o="(min-width: 1000px) 715px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)",t.classList.contains("product--medium")?o=o.replace("715px","605px"):t.classList.contains("product--small")&&(o=o.replace("715px","495px")),e.forEach(function(t){return t.setAttribute("sizes",o)}))}}])})());