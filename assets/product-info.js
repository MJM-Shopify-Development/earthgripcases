function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var n;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(n="Object"===(n={}.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function _iterableToArrayLimit(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=i.call(n)).done)&&(u.push(o.value),u.length!==e);l=!0);}catch(t){c=!0,r=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return u}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _callSuper(t,e,n){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,n||[],_getPrototypeOf(t).constructor):e.apply(t,n))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,n){var o;return _isNativeReflectConstruct()?Reflect.construct.apply(null,arguments):((o=[null]).push.apply(o,e),e=new(t.bind.apply(t,o)),n&&_setPrototypeOf(e,n.prototype),e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperty(t,e,n){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);if("object"!=_typeof(n=n.call(t,e||"default")))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}customElements.get("product-info")||customElements.define("product-info",(()=>{function e(){var t;return _classCallCheck(this,e),_defineProperty(t=_callSuper(this,e),"quantityInput",void 0),_defineProperty(t,"quantityForm",void 0),_defineProperty(t,"onVariantChangeUnsubscriber",void 0),_defineProperty(t,"cartUpdateUnsubscriber",void 0),_defineProperty(t,"abortController",void 0),_defineProperty(t,"pendingRequestUrl",null),_defineProperty(t,"preProcessHtmlCallbacks",[]),_defineProperty(t,"postProcessHtmlCallbacks",[]),t.quantityInput=t.querySelector(".quantity__input"),t}return _inherits(e,_wrapNativeSuper(HTMLElement)),_createClass(e,[{key:"connectedCallback",value:function(){this.initializeProductSwapUtility(),this.onVariantChangeUnsubscriber=subscribe(PUB_SUB_EVENTS.optionValueSelectionChange,this.handleOptionValueChange.bind(this)),this.initQuantityHandlers(),this.dispatchEvent(new CustomEvent("product-info:loaded",{bubbles:!0}))}},{key:"addPreProcessCallback",value:function(t){this.preProcessHtmlCallbacks.push(t)}},{key:"initQuantityHandlers",value:function(){this.quantityInput&&(this.quantityForm=this.querySelector(".product-form__quantity"),this.quantityForm)&&(this.setQuantityBoundries(),this.dataset.originalSection||(this.cartUpdateUnsubscriber=subscribe(PUB_SUB_EVENTS.cartUpdate,this.fetchQuantityRules.bind(this))))}},{key:"disconnectedCallback",value:function(){var t;this.onVariantChangeUnsubscriber(),null!=(t=this.cartUpdateUnsubscriber)&&t.call(this)}},{key:"initializeProductSwapUtility",value:function(){this.preProcessHtmlCallbacks.push(function(t){return t.querySelectorAll(".scroll-trigger").forEach(function(t){return t.classList.add("scroll-trigger--cancel")})}),this.postProcessHtmlCallbacks.push(function(t){var e;null!=(e=window)&&null!=(e=e.Shopify)&&null!=(e=e.PaymentButton)&&e.init(),null!=(e=window)&&null!=(e=e.ProductModel)&&e.loadShopifyXR()})}},{key:"handleOptionValueChange",value:function(t){var e,n,o=(t=t.data).event,r=t.target,t=t.selectedOptionValues;this.contains(o.target)&&(this.resetProductFormState(),o=r.dataset.productUrl||this.pendingRequestUrl||this.dataset.url,this.pendingRequestUrl=o,e=this.dataset.url!==o,n="true"===this.dataset.updateUrl&&e,this.renderProductInfo({requestUrl:this.buildRequestUrlWithParams(o,t,n),targetId:r.id,callback:e?this.handleSwapProduct(o,n):this.handleUpdateProductInfo(o)}))}},{key:"resetProductFormState",value:function(){var t=this.productForm;null!=t&&t.toggleSubmitButton(!0),null!=t&&t.handleErrorMessage()}},{key:"handleSwapProduct",value:function(n,o){var r=this;return function(t){null!=(e=r.productModal)&&e.remove();var e=r.getSelectedVariant(t.querySelector(o?"product-info[id^='MainProduct']":"product-info"));r.updateURL(n,null==e?void 0:e.id),o?(document.querySelector("head title").innerHTML=t.querySelector("head title").innerHTML,HTMLUpdateUtility.viewTransition(document.querySelector("main"),t.querySelector("main"),r.preProcessHtmlCallbacks,r.postProcessHtmlCallbacks)):HTMLUpdateUtility.viewTransition(r,t.querySelector("product-info"),r.preProcessHtmlCallbacks,r.postProcessHtmlCallbacks)}}},{key:"renderProductInfo",value:function(t){var e=this,n=t.requestUrl,o=t.targetId,r=t.callback;null!=(t=this.abortController)&&t.abort(),this.abortController=new AbortController,fetch(n,{signal:this.abortController.signal}).then(function(t){return t.text()}).then(function(t){e.pendingRequestUrl=null,t=(new DOMParser).parseFromString(t,"text/html"),r(t)}).then(function(){var t;null!=(t=document.querySelector("#".concat(o)))&&t.focus()}).catch(function(t){"AbortError"===t.name?console.log("Fetch aborted by user"):console.error(t)})}},{key:"getSelectedVariant",value:function(t){return(t=null==(t=t.querySelector("variant-selects [data-selected-variant]"))?void 0:t.innerHTML)?JSON.parse(t):null}},{key:"buildRequestUrlWithParams",value:function(t,e){var n=[];return 2<arguments.length&&void 0!==arguments[2]&&arguments[2]||n.push("section_id=".concat(this.sectionId)),e.length&&n.push("option_values=".concat(e.join(","))),"".concat(t,"?").concat(n.join("&"))}},{key:"updateOptionValues",value:function(t){(t=t.querySelector("variant-selects"))&&HTMLUpdateUtility.viewTransition(this.variantSelectors,t,this.preProcessHtmlCallbacks)}},{key:"handleUpdateProductInfo",value:function(n){var r=this;return function(o){var t,e=r.getSelectedVariant(o);null!=(t=r.pickupAvailability)&&t.update(e),r.updateOptionValues(o),r.updateURL(n,null==e?void 0:e.id),r.updateVariantInputs(null==e?void 0:e.id),e?(r.updateMedia(o,null==e||null==(t=e.featured_media)?void 0:t.id),(t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(t){return!1},n=o.getElementById("".concat(t,"-").concat(r.sectionId)),t=r.querySelector("#".concat(t,"-").concat(r.dataset.section));n&&t&&(t.innerHTML=n.innerHTML,t.classList.toggle("hidden",e(n)))})("price"),t("Sku",function(t){return t.classList.contains("hidden")}),t("Inventory",function(t){return""===t.innerText}),t("Volume"),t("Price-Per-Item",function(t){return t.classList.contains("hidden")}),r.updateQuantityRules(r.sectionId,o),null!=(t=r.querySelector("#Quantity-Rules-".concat(r.dataset.section)))&&t.classList.remove("hidden"),null!=(t=r.querySelector("#Volume-Note-".concat(r.dataset.section)))&&t.classList.remove("hidden"),null!=(t=r.productForm)&&t.toggleSubmitButton(null==(t=null==(t=o.getElementById("ProductSubmitButton-".concat(r.sectionId)))?void 0:t.hasAttribute("disabled"))||t,window.variantStrings.soldOut),publish(PUB_SUB_EVENTS.variantChange,{data:{sectionId:r.sectionId,html:o,variant:e}})):r.setUnavailable()}}},{key:"updateVariantInputs",value:function(e){this.querySelectorAll("#product-form-".concat(this.dataset.section,", #product-form-installment-").concat(this.dataset.section)).forEach(function(t){(t=t.querySelector('input[name="id"]')).value=null!=e?e:"",t.dispatchEvent(new Event("change",{bubbles:!0}))})}},{key:"updateURL",value:function(t,e){var n;null!=(n=this.querySelector("share-button"))&&n.updateUrl("".concat(window.shopUrl).concat(t).concat(e?"?variant=".concat(e):"")),"false"!==this.dataset.updateUrl&&window.history.replaceState({},"","".concat(t).concat(e?"?variant=".concat(e):""))}},{key:"setUnavailable",value:function(){var e=this,t=(null!=(t=this.productForm)&&t.toggleSubmitButton(!0,window.variantStrings.unavailable),["price","Inventory","Sku","Price-Per-Item","Volume-Note","Volume","Quantity-Rules"].map(function(t){return"#".concat(t,"-").concat(e.dataset.section)}).join(", "));document.querySelectorAll(t).forEach(function(t){return t.classList.add("hidden")})}},{key:"updateMedia",value:function(t,e){var o=this;if(e){var r=this.querySelector("media-gallery ul"),n=t.querySelector("media-gallery ul"),i=function(){o.hasAttribute("data-zoom-on-hover")&&enableZoomOnHover(2);var t=Array.from(r.querySelectorAll("li[data-media-id]")),e=new Set(t.map(function(t){return t.dataset.mediaId})),n=new Map(t.map(function(t,e){return[t.dataset.mediaId,{item:t,index:e}]}));return[t,e,n]};if(r&&n){for(var a=_slicedToArray(i(),3),u=a[0],l=a[1],c=a[2],s=Array.from(n.querySelectorAll("li[data-media-id]")),y=new Set(s.map(function(t){return t.dataset.mediaId})),f=!1,p=s.length-1;0<=p;p--)l.has(s[p].dataset.mediaId)||(r.prepend(s[p]),f=!0);for(var d=0;d<u.length;d++)y.has(u[d].dataset.mediaId)||(u[d].remove(),f=!0);f&&(a=_slicedToArray(i(),3),u=a[0],l=a[1],c=a[2]),s.forEach(function(t,e){(t=c.get(t.dataset.mediaId))&&t.index!==e&&(r.insertBefore(t.item,r.querySelector("li:nth-of-type(".concat(e+1,")"))),t=_slicedToArray(i(),3),u=t[0],l=t[1],c=t[2])})}null!=(n=this.querySelector("media-gallery"))&&null!=(a=n.setActiveMedia)&&a.call(n,"".concat(this.dataset.section,"-").concat(e),!0),n=null==(a=this.productModal)?void 0:a.querySelector(".product-media-modal__content"),e=t.querySelector("product-modal .product-media-modal__content"),n&&e&&(n.innerHTML=e.innerHTML)}}},{key:"setQuantityBoundries",value:function(){var t={cartQuantity:this.quantityInput.dataset.cartQuantity?parseInt(this.quantityInput.dataset.cartQuantity):0,min:this.quantityInput.dataset.min?parseInt(this.quantityInput.dataset.min):1,max:this.quantityInput.dataset.max?parseInt(this.quantityInput.dataset.max):null,step:this.quantityInput.step?parseInt(this.quantityInput.step):1},e=t.min,n=null===t.max?t.max:t.max-t.cartQuantity;null!==n&&(e=Math.min(e,n)),t.min<=t.cartQuantity&&(e=Math.min(e,t.step)),this.quantityInput.min=e,n?this.quantityInput.max=n:this.quantityInput.removeAttribute("max"),this.quantityInput.value=e,publish(PUB_SUB_EVENTS.quantityUpdate,void 0)}},{key:"fetchQuantityRules",value:function(){var e=this,t=null==(t=this.productForm)||null==(t=t.variantIdInput)?void 0:t.value;t&&(this.querySelector(".quantity__rules-cart .loading__spinner").classList.remove("hidden"),fetch("".concat(this.dataset.url,"?variant=").concat(t,"&section_id=").concat(this.dataset.section)).then(function(t){return t.text()}).then(function(t){t=(new DOMParser).parseFromString(t,"text/html"),e.updateQuantityRules(e.dataset.section,t)}).catch(function(t){return console.error(t)}).finally(function(){return e.querySelector(".quantity__rules-cart .loading__spinner").classList.add("hidden")}))}},{key:"updateQuantityRules",value:function(t,e){if(this.quantityInput){this.setQuantityBoundries();for(var n=e.getElementById("Quantity-Form-".concat(t)),o=0,r=[".quantity__input",".quantity__rules",".quantity__label"];o<r.length;o++){var i=r[o],a=this.quantityForm.querySelector(i),u=n.querySelector(i);if(a&&u)if(".quantity__input"===i)for(var l=0,c=["data-cart-quantity","data-min","data-max","step"];l<c.length;l++){var s=c[l],y=u.getAttribute(s);null!==y?a.setAttribute(s,y):a.removeAttribute(s)}else a.innerHTML=u.innerHTML}}}},{key:"productForm",get:function(){return this.querySelector("product-form")}},{key:"productModal",get:function(){return document.querySelector("#ProductModal-".concat(this.dataset.section))}},{key:"pickupAvailability",get:function(){return this.querySelector("pickup-availability")}},{key:"variantSelectors",get:function(){return this.querySelector("variant-selects")}},{key:"relatedProducts",get:function(){var t=SectionId.getIdForSection(SectionId.parseId(this.sectionId),"related-products");return document.querySelector('product-recommendations[data-section-id^="'.concat(t,'"]'))}},{key:"quickOrderList",get:function(){var t=SectionId.getIdForSection(SectionId.parseId(this.sectionId),"quick_order_list");return document.querySelector('quick-order-list[data-id^="'.concat(t,'"]'))}},{key:"sectionId",get:function(){return this.dataset.originalSection||this.dataset.section}}])})());