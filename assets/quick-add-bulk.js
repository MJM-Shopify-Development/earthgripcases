function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ownKeys(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _defineProperty(t,e,n){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"==_typeof(t)?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function _callSuper(t,e,n){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,n||[],_getPrototypeOf(t).constructor):e.apply(t,n))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}customElements.get("quick-add-bulk")||customElements.define("quick-add-bulk",(()=>{function n(){_classCallCheck(this,n),(e=_callSuper(this,n)).quantity=e.querySelector("quantity-input");var e,t=debounce(function(t){0===parseInt(t.target.value)?e.startQueue(t.target.dataset.index,parseInt(t.target.value)):e.validateQuantity(t)},ON_CHANGE_DEBOUNCE_TIMER),t=(e.addEventListener("change",t.bind(e)),e.listenForActiveInput(),e.listenForKeydown(),e.lastActiveInputId=null,new URLSearchParams(window.location.search));return window.pageNumber=decodeURIComponent(t.get("page")||""),e}return _inherits(n,BulkAdd),_createClass(n,[{key:"connectedCallback",value:function(){var e=this;this.cartUpdateUnsubscriber=subscribe(PUB_SUB_EVENTS.cartUpdate,function(t){"quick-add"===t.source||t.cartData.items&&!t.cartData.items.some(function(t){return t.id===parseInt(e.dataset.index)})||t.cartData.variant_id&&t.cartData.variant_id!==parseInt(e.dataset.index)||e.onCartUpdate().then(function(){e.listenForActiveInput(),e.listenForKeydown()})})}},{key:"disconnectedCallback",value:function(){this.cartUpdateUnsubscriber&&this.cartUpdateUnsubscriber()}},{key:"getInput",value:function(){return this.querySelector("quantity-input input")}},{key:"selectProgressBar",value:function(){return this.querySelector(".progress-bar-container")}},{key:"listenForActiveInput",value:function(){this.classList.contains("hidden")||this.getInput().addEventListener("focusin",function(t){return t.target.select()}),this.isEnterPressed=!1}},{key:"listenForKeydown",value:function(){var e=this;this.getInput().addEventListener("keydown",function(t){"Enter"===t.key&&(e.getInput().blur(),e.isEnterPressed=!0)})}},{key:"cleanErrorMessageOnType",value:function(t){t.target.addEventListener("keypress",function(){t.target.setCustomValidity("")},{once:!0})}},{key:"onCartUpdate",value:function(){var r=this;return new Promise(function(e,n){fetch("".concat(r.getSectionsUrl(),"?section_id=").concat(r.closest(".collection").dataset.id)).then(function(t){return t.text()}).then(function(t){t=(new DOMParser).parseFromString(t,"text/html").querySelector("#quick-add-bulk-".concat(r.dataset.id,"-").concat(r.closest(".collection").dataset.id));t&&(r.innerHTML=t.innerHTML),e()}).catch(function(t){console.error(t),n(t)})})}},{key:"updateMultipleQty",value:function(t){var e=this,n=(this.selectProgressBar().classList.remove("hidden"),Object.keys(t)),t=JSON.stringify({updates:t,sections:this.getSectionsToRender().map(function(t){return t.section}),sections_url:this.getSectionsUrl()});fetch("".concat(routes.cart_update_url),_objectSpread(_objectSpread({},fetchConfig()),{body:t})).then(function(t){return t.text()}).then(function(t){t=JSON.parse(t);e.renderSections(t,n),publish(PUB_SUB_EVENTS.cartUpdate,{source:"quick-add",cartData:t})}).catch(function(){}).finally(function(){e.selectProgressBar().classList.add("hidden"),e.requestStarted=!1})}},{key:"getSectionsToRender",value:function(){return[{id:"quick-add-bulk-".concat(this.dataset.id,"-").concat(this.closest(".collection-quick-add-bulk").dataset.id),section:this.closest(".collection-quick-add-bulk").dataset.id,selector:"#quick-add-bulk-".concat(this.dataset.id,"-").concat(this.closest(".collection-quick-add-bulk").dataset.id)},{id:"cart-icon-bubble",section:"cart-icon-bubble",selector:".shopify-section"},{id:"CartDrawer",selector:"#CartDrawer",section:"cart-drawer"}]}},{key:"renderSections",value:function(n,e){var r=this;0===this.queue.filter(function(t){return e.includes(t.id)}).length&&(this.getSectionsToRender().forEach(function(t){var e=document.getElementById(t.id),e=(e&&e.parentElement&&e.parentElement.classList.contains("drawer")&&(0<n.items.length?e.parentElement.classList.remove("is-empty"):e.parentElement.classList.add("is-empty"),setTimeout(function(){document.querySelector("#CartDrawer-Overlay").addEventListener("click",r.cart.close.bind(r.cart))})),e&&e.querySelector(t.selector)?e.querySelector(t.selector):e);e&&(e.innerHTML=r.getSectionInnerHTML(n.sections[t.section],t.selector))}),this.isEnterPressed&&this.querySelector("#Quantity-".concat(this.lastActiveInputId)).select(),this.listenForActiveInput(),this.listenForKeydown())}}])})());