function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],s=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);s=!0);}catch(e){u=!0,o=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(r="Object"===(r={}.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _callSuper(e,t,r){return t=_getPrototypeOf(t),_possibleConstructorReturn(e,_isNativeReflectConstruct()?Reflect.construct(t,r||[],_getPrototypeOf(e).constructor):t.apply(e,r))}function _possibleConstructorReturn(e,t){if(t&&("object"==_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _wrapNativeSuper(e){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(e){if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(t,e)})(e)}function _construct(e,t,r){var n;return _isNativeReflectConstruct()?Reflect.construct.apply(null,arguments):((n=[null]).push.apply(n,t),t=new(e.bind.apply(e,n)),r&&_setPrototypeOf(t,r.prototype),t)}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){return"symbol"==_typeof(e=_toPrimitive(e,"string"))?e:e+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!=_typeof(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}customElements.get("recipient-form")||customElements.define("recipient-form",(()=>{function r(){var e,t;return _classCallCheck(this,r),_defineProperty(t=_callSuper(this,r),"cartUpdateUnsubscriber",void 0),_defineProperty(t,"variantChangeUnsubscriber",void 0),_defineProperty(t,"cartErrorUnsubscriber",void 0),t.recipientFieldsLiveRegion=t.querySelector("#Recipient-fields-live-region-".concat(t.dataset.sectionId)),t.checkboxInput=t.querySelector("#Recipient-checkbox-".concat(t.dataset.sectionId)),t.checkboxInput.disabled=!1,t.hiddenControlField=t.querySelector("#Recipient-control-".concat(t.dataset.sectionId)),t.hiddenControlField.disabled=!0,t.emailInput=t.querySelector("#Recipient-email-".concat(t.dataset.sectionId)),t.nameInput=t.querySelector("#Recipient-name-".concat(t.dataset.sectionId)),t.messageInput=t.querySelector("#Recipient-message-".concat(t.dataset.sectionId)),t.sendonInput=t.querySelector("#Recipient-send-on-".concat(t.dataset.sectionId)),t.offsetProperty=t.querySelector("#Recipient-timezone-offset-".concat(t.dataset.sectionId)),t.offsetProperty&&(t.offsetProperty.value=(new Date).getTimezoneOffset().toString()),t.errorMessageWrapper=t.querySelector(".product-form__recipient-error-message-wrapper"),t.errorMessageList=null==(e=t.errorMessageWrapper)?void 0:e.querySelector("ul"),t.errorMessage=null==(e=t.errorMessageWrapper)?void 0:e.querySelector(".error-message"),t.defaultErrorHeader=null==(e=t.errorMessage)?void 0:e.innerText,t.currentProductVariantId=t.dataset.productVariantId,t.addEventListener("change",t.onChange.bind(t)),t.onChange(),t}return _inherits(r,_wrapNativeSuper(HTMLElement)),_createClass(r,[{key:"connectedCallback",value:function(){var t=this;this.cartUpdateUnsubscriber=subscribe(PUB_SUB_EVENTS.cartUpdate,function(e){"product-form"===e.source&&e.productVariantId.toString()===t.currentProductVariantId&&t.resetRecipientForm()}),this.variantChangeUnsubscriber=subscribe(PUB_SUB_EVENTS.variantChange,function(e){e.data.sectionId===t.dataset.sectionId&&(t.currentProductVariantId=e.data.variant.id.toString())}),this.cartUpdateUnsubscriber=subscribe(PUB_SUB_EVENTS.cartError,function(e){"product-form"===e.source&&e.productVariantId.toString()===t.currentProductVariantId&&t.displayErrorMessage(e.message,e.errors)})}},{key:"disconnectedCallback",value:function(){this.cartUpdateUnsubscriber&&this.cartUpdateUnsubscriber(),this.variantChangeUnsubscriber&&this.variantChangeUnsubscriber(),this.cartErrorUnsubscriber&&this.cartErrorUnsubscriber()}},{key:"onChange",value:function(){this.checkboxInput.checked?(this.enableInputFields(),this.recipientFieldsLiveRegion.innerText=window.accessibilityStrings.recipientFormExpanded):(this.clearInputFields(),this.disableInputFields(),this.clearErrorMessage(),this.recipientFieldsLiveRegion.innerText=window.accessibilityStrings.recipientFormCollapsed)}},{key:"inputFields",value:function(){return[this.emailInput,this.nameInput,this.messageInput,this.sendonInput]}},{key:"disableableFields",value:function(){return[].concat(_toConsumableArray(this.inputFields()),[this.offsetProperty])}},{key:"clearInputFields",value:function(){this.inputFields().forEach(function(e){return e.value=""})}},{key:"enableInputFields",value:function(){this.disableableFields().forEach(function(e){return e.disabled=!1})}},{key:"disableInputFields",value:function(){this.disableableFields().forEach(function(e){return e.disabled=!0})}},{key:"displayErrorMessage",value:function(e,t){var a=this;if(this.clearErrorMessage(),this.errorMessageWrapper.hidden=!1,"object"===_typeof(t))return this.errorMessage.innerText=this.defaultErrorHeader,Object.entries(t).forEach(function(e){var t=(e=_slicedToArray(e,2))[0],e=e[1],r="RecipientForm-".concat(t,"-error-").concat(a.dataset.sectionId),n="#Recipient-".concat(t,"-").concat(a.dataset.sectionId),e="".concat(e.join(", ")),o=a.querySelector("#".concat(r)),i=null==o?void 0:o.querySelector(".error-message");i&&(a.errorMessageList&&a.errorMessageList.appendChild(a.createErrorListItem(n,e)),i.innerText="".concat(e,"."),o.classList.remove("hidden"),n=a["".concat(t,"Input")])&&(n.setAttribute("aria-invalid",!0),n.setAttribute("aria-describedby",r))});this.errorMessage.innerText=t}},{key:"createErrorListItem",value:function(e,t){var r=document.createElement("li"),n=document.createElement("a");return n.setAttribute("href",e),n.innerText=t,r.appendChild(n),r.className="error-message",r}},{key:"clearErrorMessage",value:function(){this.errorMessageWrapper.hidden=!0,this.errorMessageList&&(this.errorMessageList.innerHTML=""),this.querySelectorAll(".recipient-fields .form__message").forEach(function(e){e.classList.add("hidden"),(e=e.querySelector(".error-message"))&&(e.innerText="")}),[this.emailInput,this.messageInput,this.nameInput,this.sendonInput].forEach(function(e){e.setAttribute("aria-invalid",!1),e.removeAttribute("aria-describedby")})}},{key:"resetRecipientForm",value:function(){this.checkboxInput.checked&&(this.checkboxInput.checked=!1,this.clearInputFields(),this.clearErrorMessage())}}])})());