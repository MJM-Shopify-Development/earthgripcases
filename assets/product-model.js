function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,o,e){return o&&_defineProperties(t.prototype,o),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:t+""}function _toPrimitive(t,o){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0===e)return("string"===o?String:Number)(t);if("object"!=_typeof(e=e.call(t,o||"default")))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _possibleConstructorReturn(t,o){if(o&&("object"==_typeof(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _superPropGet(t,o,e,n){var r=_get(_getPrototypeOf(1&n?t.prototype:t),o,e);return 2&n&&"function"==typeof r?function(t){return r.apply(e,t)}:r}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,o,e){var n=_superPropBase(t,o);if(n)return(n=Object.getOwnPropertyDescriptor(n,o)).get?n.get.call(arguments.length<3?t:e):n.value}).apply(null,arguments)}function _superPropBase(t,o){for(;!{}.hasOwnProperty.call(t,o)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),o&&_setPrototypeOf(t,o)}function _setPrototypeOf(t,o){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t})(t,o)}customElements.get("product-model")||customElements.define("product-model",(()=>{function t(){return _classCallCheck(this,t),_callSuper(this,t)}return _inherits(t,DeferredMedia),_createClass(t,[{key:"loadContent",value:function(){_superPropGet(t,"loadContent",this,3)([]),Shopify.loadFeatures([{name:"model-viewer-ui",version:"1.0",onLoad:this.setupModelViewerUI.bind(this)}])}},{key:"setupModelViewerUI",value:function(t){t||(this.modelViewerUI=new Shopify.ModelViewerUI(this.querySelector("model-viewer")))}}])})()),window.ProductModel={loadShopifyXR:function(){Shopify.loadFeatures([{name:"shopify-xr",version:"1.0",onLoad:this.setupShopifyXR.bind(this)}])},setupShopifyXR:function(t){var o=this;t||(window.ShopifyXR?(document.querySelectorAll('[id^="ProductJSON-"]').forEach(function(t){window.ShopifyXR.addModels(JSON.parse(t.textContent)),t.remove()}),window.ShopifyXR.setupXRElements()):document.addEventListener("shopify_xr_initialized",function(){return o.setupShopifyXR()}))}},window.addEventListener("DOMContentLoaded",function(){window.ProductModel&&window.ProductModel.loadShopifyXR()});