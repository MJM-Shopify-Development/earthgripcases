function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!=_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _callSuper(t,e,o){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,o||[],_getPrototypeOf(t).constructor):e.apply(t,o))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var o="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,o){var r;return _isNativeReflectConstruct()?Reflect.construct.apply(null,arguments):((r=[null]).push.apply(r,e),e=new(t.bind.apply(t,r)),o&&_setPrototypeOf(e,o.prototype),e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("product-form")||customElements.define("product-form",(()=>{function e(){var t;return _classCallCheck(this,e),(t=_callSuper(this,e)).form=t.querySelector("form"),t.variantIdInput.disabled=!1,t.form.addEventListener("submit",t.onSubmitHandler.bind(t)),t.cart=document.querySelector("cart-notification")||document.querySelector("cart-drawer"),t.submitButton=t.querySelector('[type="submit"]'),t.submitButtonText=t.submitButton.querySelector("span"),document.querySelector("cart-drawer")&&t.submitButton.setAttribute("aria-haspopup","dialog"),t.hideErrors="true"===t.dataset.hideErrors,t}return _inherits(e,_wrapNativeSuper(HTMLElement)),_createClass(e,[{key:"onSubmitHandler",value:function(t){var o,r=this;t.preventDefault(),"true"!==this.submitButton.getAttribute("aria-disabled")&&(this.handleErrorMessage(),this.submitButton.setAttribute("aria-disabled",!0),this.submitButton.classList.add("loading"),this.querySelector(".loading__spinner").classList.remove("hidden"),(t=fetchConfig("javascript")).headers["X-Requested-With"]="XMLHttpRequest",delete t.headers["Content-Type"],o=new FormData(this.form),this.cart&&(o.append("sections",this.cart.getSectionsToRender().map(function(t){return t.id})),o.append("sections_url",window.location.pathname),this.cart.setActiveElement(document.activeElement)),t.body=o,fetch("".concat(routes.cart_add_url),t).then(function(t){return t.json()}).then(function(t){var e;if(t.status)return publish(PUB_SUB_EVENTS.cartError,{source:"product-form",productVariantId:o.get("id"),errors:t.errors||t.description,message:t.message}),r.handleErrorMessage(t.description),(e=r.submitButton.querySelector(".sold-out-message"))?(r.submitButton.setAttribute("aria-disabled",!0),r.submitButtonText.classList.add("hidden"),e.classList.remove("hidden"),void(r.error=!0)):void 0;r.cart?(r.error||publish(PUB_SUB_EVENTS.cartUpdate,{source:"product-form",productVariantId:o.get("id"),cartData:t}),r.error=!1,(e=r.closest("quick-add-modal"))?(document.body.addEventListener("modalClosed",function(){setTimeout(function(){r.cart.renderContents(t)})},{once:!0}),e.hide(!0)):r.cart.renderContents(t)):window.location=window.routes.cart_url}).catch(function(t){console.error(t)}).finally(function(){r.submitButton.classList.remove("loading"),r.cart&&r.cart.classList.contains("is-empty")&&r.cart.classList.remove("is-empty"),r.error||r.submitButton.removeAttribute("aria-disabled"),r.querySelector(".loading__spinner").classList.add("hidden")}))}},{key:"handleErrorMessage",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];this.hideErrors||(this.errorMessageWrapper=this.errorMessageWrapper||this.querySelector(".product-form__error-message-wrapper"),this.errorMessageWrapper&&(this.errorMessage=this.errorMessage||this.errorMessageWrapper.querySelector(".product-form__error-message"),this.errorMessageWrapper.toggleAttribute("hidden",!t),t)&&(this.errorMessage.textContent=t))}},{key:"toggleSubmitButton",value:function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],e=1<arguments.length?arguments[1]:void 0;t?(this.submitButton.setAttribute("disabled","disabled"),e&&(this.submitButtonText.textContent=e)):(this.submitButton.removeAttribute("disabled"),this.submitButtonText.textContent=window.variantStrings.addToCart)}},{key:"variantIdInput",get:function(){return this.form.querySelector("[name=id]")}}])})());