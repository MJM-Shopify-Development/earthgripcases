function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(r="Object"===(r={}.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function ownKeys(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){var n;return _isNativeReflectConstruct()?Reflect.construct.apply(null,arguments):((n=[null]).push.apply(n,e),e=new(t.bind.apply(t,n)),r&&_setPrototypeOf(e,r.prototype),e)}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);if("object"!=_typeof(r=r.call(t,e||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _callSuper(t,e,r){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,r||[],_getPrototypeOf(t).constructor):e.apply(t,r))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}customElements.get("quick-order-list-remove-button")||customElements.define("quick-order-list-remove-button",(()=>{function t(){var e;return _classCallCheck(this,t),(e=_callSuper(this,t)).addEventListener("click",function(t){t.preventDefault(),e.startQueue(e.dataset.index,0)}),e}return _inherits(t,BulkAdd),_createClass(t)})()),customElements.get("quick-order-list-remove-all-button")||customElements.define("quick-order-list-remove-all-button",(()=>{function i(){_classCallCheck(this,i),(e=_callSuper(this,i)).quickOrderList=e.closest("quick-order-list");var e,t=e.quickOrderList.querySelectorAll("[data-quantity-variant-id]"),r={},n=!1;return t.forEach(function(t){0<parseInt(t.dataset.cartQuantity)&&(n=!0,r[parseInt(t.dataset.quantityVariantId)]=0)}),n||e.classList.add("hidden"),e.actions={confirm:"confirm",remove:"remove",cancel:"cancel"},e.addEventListener("click",function(t){t.preventDefault(),e.dataset.action===e.actions.confirm?e.toggleConfirmation(!1,!0):e.dataset.action===e.actions.remove?(e.quickOrderList.updateMultipleQty(r),e.toggleConfirmation(!0,!1)):e.dataset.action===e.actions.cancel&&e.toggleConfirmation(!0,!1)}),e}return _inherits(i,_wrapNativeSuper(HTMLElement)),_createClass(i,[{key:"toggleConfirmation",value:function(t,e){this.quickOrderList.querySelector(".quick-order-list-total__confirmation").classList.toggle("hidden",t),this.quickOrderList.querySelector(".quick-order-list-total__info").classList.toggle("hidden",e)}}])})()),customElements.get("quick-order-list")||customElements.define("quick-order-list",(()=>{function n(){_classCallCheck(this,n),_defineProperty(t=_callSuper(this,n),"cartUpdateUnsubscriber",void 0),t.cart=document.querySelector("cart-drawer"),t.quickOrderListId="".concat(t.dataset.section,"-").concat(t.dataset.productId),t.defineInputsAndQuickOrderTable(),t.variantItemStatusElement=document.getElementById("shopping-cart-variant-item-status");var t,e=t.querySelector("form"),r=(t.inputFieldHeight=t.querySelector(".variant-item__quantity-wrapper").offsetHeight,t.isListInsideModal=document.querySelector(".quick-add-bulk"),t.stickyHeaderElement=document.querySelector("sticky-header"),t.getTableHead(),t.getTotalBar(),t.stickyHeaderElement&&(t.stickyHeader={height:t.stickyHeaderElement.offsetHeight,type:"".concat(t.stickyHeaderElement.getAttribute("data-sticky-type"))}),t.getTotalBar()&&(t.totalBarPosition=window.innerHeight-t.getTotalBar().offsetHeight,window.addEventListener("resize",function(){t.totalBarPosition=window.innerHeight-t.getTotalBar().offsetHeight,t.stickyHeader.height=t.stickyHeaderElement?t.stickyHeaderElement.offsetHeight:0})),new URLSearchParams(window.location.search));return window.pageNumber=decodeURIComponent(r.get("page")||""),e.addEventListener("submit",t.onSubmit.bind(t)),t.addMultipleDebounce(),t}return _inherits(n,BulkAdd),_createClass(n,[{key:"onSubmit",value:function(t){t.preventDefault()}},{key:"connectedCallback",value:function(){var r=this;this.cartUpdateUnsubscriber=subscribe(PUB_SUB_EVENTS.cartUpdate,function(t){var e=[];r.querySelectorAll(".variant-item").forEach(function(t){e.push(parseInt(t.dataset.variantId))}),t.source!==r.quickOrderListId&&null!=(t=t.cartData.items)&&t.some(function(t){return e.includes(t.variant_id)})&&r.refresh().then(function(){r.defineInputsAndQuickOrderTable(),r.addMultipleDebounce()})}),this.sectionId=this.dataset.section}},{key:"disconnectedCallback",value:function(){var t;null!=(t=this.cartUpdateUnsubscriber)&&t.call(this)}},{key:"defineInputsAndQuickOrderTable",value:function(){this.allInputsArray=Array.from(this.querySelectorAll('input[type="number"]')),this.quickOrderListTable=this.querySelector(".quick-order-list__table"),this.quickOrderListTable.addEventListener("focusin",this.switchVariants.bind(this))}},{key:"onChange",value:function(t){var e=parseInt(t.target.value);this.cleanErrorMessageOnType(t),0==e?this.startQueue(t.target.dataset.index,e):this.validateQuantity(t)}},{key:"cleanErrorMessageOnType",value:function(t){t.target.addEventListener("keydown",function(){t.target.setCustomValidity(" "),t.target.reportValidity()})}},{key:"validateInput",value:function(t){return t.max?0==parseInt(t.value)||parseInt(t.value)>=parseInt(t.dataset.min)&&parseInt(t.value)<=parseInt(t.max)&&parseInt(t.value)%parseInt(t.step)==0:0==parseInt(t.value)||parseInt(t.value)>=parseInt(t.dataset.min)&&parseInt(t.value)%parseInt(t.step)==0}},{key:"refresh",value:function(){var n=this;return new Promise(function(e,r){fetch("".concat(n.getSectionsUrl(),"?section_id=").concat(n.sectionId)).then(function(t){return t.text()}).then(function(t){(t=(new DOMParser).parseFromString(t,"text/html").querySelector("#".concat(n.quickOrderListId)))&&(n.innerHTML=t.innerHTML),e()}).catch(function(t){console.error(t),r(t)})})}},{key:"getSectionsToRender",value:function(){return[{id:this.quickOrderListId,section:document.getElementById(this.quickOrderListId).dataset.section,selector:"#".concat(this.quickOrderListId," .js-contents")},{id:"cart-icon-bubble",section:"cart-icon-bubble",selector:".shopify-section"},{id:"quick-order-list-live-region-text-".concat(this.dataset.productId),section:"cart-live-region-text",selector:".shopify-section"},{id:"quick-order-list-total-".concat(this.dataset.productId,"-").concat(this.dataset.section),section:document.getElementById(this.quickOrderListId).dataset.section,selector:"#".concat(this.quickOrderListId," .quick-order-list__total")},{id:"CartDrawer",selector:"#CartDrawer",section:"cart-drawer"}]}},{key:"addMultipleDebounce",value:function(){var r=this;this.querySelectorAll("quantity-input").forEach(function(t){var e=debounce(function(t){r.onChange(t)},100);t.addEventListener("change",e.bind(r))})}},{key:"renderSections",value:function(n,e){var i=this;this.ids.push(e),0===this.queue.filter(function(t){return e.includes(t.id)}).length&&(this.getSectionsToRender().forEach(function(e){var t=document.getElementById(e.id),r=(t&&t.parentElement&&t.parentElement.classList.contains("drawer")&&(0<n.items.length?t.parentElement.classList.remove("is-empty"):t.parentElement.classList.add("is-empty"),setTimeout(function(){document.querySelector("#CartDrawer-Overlay").addEventListener("click",i.cart.close.bind(i.cart))})),t&&t.querySelector(e.selector)?t.querySelector(e.selector):t);r&&(e.selector==="#".concat(i.quickOrderListId," .js-contents")&&0<i.ids.length?i.ids.flat().forEach(function(t){r.querySelector("#Variant-".concat(t)).innerHTML=i.getSectionInnerHTML(n.sections[e.section],"#Variant-".concat(t))}):r.innerHTML=i.getSectionInnerHTML(n.sections[e.section],e.selector))}),this.defineInputsAndQuickOrderTable(),this.addMultipleDebounce(),this.ids=[])}},{key:"getTableHead",value:function(){return document.querySelector(".quick-order-list__table thead")}},{key:"getTotalBar",value:function(){return this.querySelector(".quick-order-list__total")}},{key:"scrollQuickOrderListTable",value:function(){var t,e,r,n=this.variantListInput.getBoundingClientRect().top,i=this.variantListInput.getBoundingClientRect().bottom;this.isListInsideModal?(t=i>this.getTotalBar().getBoundingClientRect().top,e=n<this.getTableHead().getBoundingClientRect().bottom,(t||e)&&this.scrollToCenter()):(t=this.stickyHeaderElement&&this.stickyHeaderElement.getBoundingClientRect().bottom,e=i>this.totalBarPosition,i=i<this.inputFieldHeight,r=this.stickyHeaderElement&&"on-scroll-up"!==this.stickyHeader.type&&this.stickyHeader.height>n,n=this.stickyHeaderElement&&"on-scroll-up"===this.stickyHeader.type&&this.stickyHeader.height>n&&0<t,(e||i||r||n)&&this.scrollToCenter())}},{key:"scrollToCenter",value:function(){this.variantListInput.scrollIntoView({block:"center",behavior:"smooth"})}},{key:"switchVariants",value:function(t){var r=this;"INPUT"===t.target.tagName&&(this.variantListInput=t.target,this.variantListInput.select(),1!==this.allInputsArray.length?(this.variantListInput.addEventListener("keydown",function(t){var e;"Enter"===t.key&&(t.preventDefault(),t.target.blur(),r.validateInput(t.target))&&(e=r.allInputsArray.indexOf(t.target),r.lastKey=t.shiftKey,(t.shiftKey?(t=r.allInputsArray[e-1]||r.allInputsArray[r.allInputsArray.length-1],r.lastElement=t.dataset.index,t):r.allInputsArray[e+1]||r.allInputsArray[0]).select())}),this.scrollQuickOrderListTable()):this.variantListInput.addEventListener("keydown",function(t){"Enter"===t.key&&(t.preventDefault(),t.target.blur())}))}},{key:"updateMultipleQty",value:function(t){var e=this,r=(null!=(n=this.querySelector(".variant-remove-total .loading__spinner"))&&n.classList.remove("hidden"),Object.keys(t)),n=JSON.stringify({updates:t,sections:this.getSectionsToRender().map(function(t){return t.section}),sections_url:this.dataset.url});this.updateMessage(),this.setErrorMessage(),fetch("".concat(routes.cart_update_url),_objectSpread(_objectSpread({},fetchConfig()),{body:n})).then(function(t){return t.text()}).then(function(t){t=JSON.parse(t),e.renderSections(t,r),publish(PUB_SUB_EVENTS.cartUpdate,{source:e.quickOrderListId,cartData:t})}).catch(function(){e.setErrorMessage(window.cartStrings.error)}).finally(function(){var t;null!=(t=e.querySelector(".variant-remove-total .loading__spinner"))&&t.classList.add("hidden"),e.requestStarted=!1})}},{key:"setErrorMessage",value:function(){var t,r=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;this.errorMessageTemplate=null!=(t=this.errorMessageTemplate)?t:document.getElementById("QuickOrderListErrorTemplate-".concat(this.dataset.productId)).cloneNode(!0),document.querySelectorAll(".quick-order-list-error").forEach(function(t){var e;t.innerHTML="",n&&((e=r.errorMessageTemplate.cloneNode(!0)).content.querySelector(".quick-order-list-error-message").innerText=n,t.appendChild(e.content))})}},{key:"updateMessage",value:function(){var t,e,r,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,i=this.querySelectorAll(".quick-order-list__message-text"),o=this.querySelectorAll(".quick-order-list__message-icon");null===n||isNaN(n)?(i.forEach(function(t){return t.innerHTML=""}),o.forEach(function(t){return t.classList.add("hidden")})):(t=n<0,e=Math.abs(n),r=t?1===e?window.quickOrderListStrings.itemRemoved:window.quickOrderListStrings.itemsRemoved:1===n?window.quickOrderListStrings.itemAdded:window.quickOrderListStrings.itemsAdded,i.forEach(function(t){return t.innerHTML=r.replace("[quantity]",e)}),t||o.forEach(function(t){return t.classList.remove("hidden")}))}},{key:"updateError",value:function(t,e){t=void 0===t?window.cartStrings.error:window.cartStrings.quantityError.replace("[quantity]",t),this.updateLiveRegions(e,t)}},{key:"cleanErrors",value:function(t){}},{key:"updateLiveRegions",value:function(t,e){var r=document.getElementById("Quick-order-list-item-error-desktop-".concat(t)),t=document.getElementById("Quick-order-list-item-error-mobile-".concat(t)),n=(r&&(r.querySelector(".variant-item__error-text").innerHTML=e,r.closest("tr").classList.remove("hidden")),t&&(t.querySelector(".variant-item__error-text").innerHTML=e),this.variantItemStatusElement.setAttribute("aria-hidden",!0),document.getElementById("quick-order-list-live-region-text"));n.setAttribute("aria-hidden",!1),setTimeout(function(){n.setAttribute("aria-hidden",!0)},1e3)}},{key:"toggleLoading",value:function(t,e){var r=this.querySelectorAll("#Variant-".concat(t," .loading__spinner")),t=this.querySelector("#Variant-".concat(t));e?(t.classList.add("quick-order-list__container--disabled"),_toConsumableArray(r).forEach(function(t){return t.classList.remove("hidden")}),this.variantItemStatusElement.setAttribute("aria-hidden",!1)):(t.classList.remove("quick-order-list__container--disabled"),r.forEach(function(t){return t.classList.add("hidden")}))}}])})());