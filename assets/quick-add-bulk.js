function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function ownKeys(e,t){var o,n=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)),n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function _defineProperty(t,e,o){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!=_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _callSuper(t,e,o){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,o||[],_getPrototypeOf(t).constructor):e.apply(t,o))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}customElements.get("quick-add-bulk")||customElements.define("quick-add-bulk",(()=>{function o(){_classCallCheck(this,o),(e=_callSuper(this,o)).quantity=e.querySelector("quantity-input");var e,t=debounce(function(t){0===parseInt(t.target.value)?e.startQueue(t.target.dataset.index,parseInt(t.target.value)):e.validateQuantity(t)},ON_CHANGE_DEBOUNCE_TIMER),t=(e.addEventListener("change",t.bind(e)),e.listenForActiveInput(),e.listenForKeydown(),e.lastActiveInputId=null,new URLSearchParams(window.location.search));return window.pageNumber=decodeURIComponent(t.get("page")||""),e}return _inherits(o,BulkAdd),_createClass(o,[{key:"connectedCallback",value:function(){var e=this;this.cartUpdateUnsubscriber=subscribe(PUB_SUB_EVENTS.cartUpdate,function(t){"quick-add"===t.source||t.cartData.items&&!t.cartData.items.some(function(t){return t.id===parseInt(e.dataset.index)})||t.cartData.variant_id&&t.cartData.variant_id!==parseInt(e.dataset.index)||e.onCartUpdate().then(function(){e.listenForActiveInput(),e.listenForKeydown()})})}},{key:"disconnectedCallback",value:function(){this.cartUpdateUnsubscriber&&this.cartUpdateUnsubscriber()}},{key:"getInput",value:function(){return this.querySelector("quantity-input input")}},{key:"selectProgressBar",value:function(){return this.querySelector(".progress-bar-container")}},{key:"listenForActiveInput",value:function(){this.classList.contains("hidden")||this.getInput().addEventListener("focusin",function(t){return t.target.select()}),this.isEnterPressed=!1}},{key:"listenForKeydown",value:function(){var e=this;this.getInput().addEventListener("keydown",function(t){"Enter"===t.key&&(e.getInput().blur(),e.isEnterPressed=!0)})}},{key:"cleanErrorMessageOnType",value:function(t){t.target.addEventListener("keypress",function(){t.target.setCustomValidity("")},{once:!0})}},{key:"onCartUpdate",value:function(){var n=this;return new Promise(function(e,o){fetch("".concat(n.getSectionsUrl(),"?section_id=").concat(n.closest(".collection").dataset.id)).then(function(t){return t.text()}).then(function(t){(t=(new DOMParser).parseFromString(t,"text/html").querySelector("#quick-add-bulk-".concat(n.dataset.id,"-").concat(n.closest(".collection").dataset.id)))&&(n.innerHTML=t.innerHTML),e()}).catch(function(t){console.error(t),o(t)})})}},{key:"updateMultipleQty",value:function(t){var e=this,o=(this.selectProgressBar().classList.remove("hidden"),Object.keys(t)),t=JSON.stringify({updates:t,sections:this.getSectionsToRender().map(function(t){return t.section}),sections_url:this.getSectionsUrl()});fetch("".concat(routes.cart_update_url),_objectSpread(_objectSpread({},fetchConfig()),{body:t})).then(function(t){return t.text()}).then(function(t){t=JSON.parse(t),e.renderSections(t,o),publish(PUB_SUB_EVENTS.cartUpdate,{source:"quick-add",cartData:t})}).catch(function(){}).finally(function(){e.selectProgressBar().classList.add("hidden"),e.requestStarted=!1})}},{key:"getSectionsToRender",value:function(){return[{id:"quick-add-bulk-".concat(this.dataset.id,"-").concat(this.closest(".collection-quick-add-bulk").dataset.id),section:this.closest(".collection-quick-add-bulk").dataset.id,selector:"#quick-add-bulk-".concat(this.dataset.id,"-").concat(this.closest(".collection-quick-add-bulk").dataset.id)},{id:"cart-icon-bubble",section:"cart-icon-bubble",selector:".shopify-section"},{id:"CartDrawer",selector:"#CartDrawer",section:"cart-drawer"}]}},{key:"renderSections",value:function(o,e){var n=this;0===this.queue.filter(function(t){return e.includes(t.id)}).length&&(this.getSectionsToRender().forEach(function(t){var e=document.getElementById(t.id);e&&e.parentElement&&e.parentElement.classList.contains("drawer")&&(0<o.items.length?e.parentElement.classList.remove("is-empty"):e.parentElement.classList.add("is-empty"),setTimeout(function(){document.querySelector("#CartDrawer-Overlay").addEventListener("click",n.cart.close.bind(n.cart))})),(e=e&&e.querySelector(t.selector)?e.querySelector(t.selector):e)&&(e.innerHTML=n.getSectionInnerHTML(o.sections[t.section],t.selector))}),this.isEnterPressed&&this.querySelector("#Quantity-".concat(this.lastActiveInputId)).select(),this.listenForActiveInput(),this.listenForKeydown())}}])})());