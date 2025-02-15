function _typeof15(t){return(_typeof15="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof14(t){return(_typeof14="function"==typeof Symbol&&"symbol"==_typeof15(Symbol.iterator)?function(t){return _typeof15(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof15(t)})(t)}function _typeof13(t){return(_typeof13="function"==typeof Symbol&&"symbol"==_typeof14(Symbol.iterator)?function(t){return _typeof14(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof14(t)})(t)}function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return _typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof13(t)})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _defineProperty(t,e,o){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!=_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}var selectors={customerAddresses:"[data-customer-addresses]",addressCountrySelect:"[data-address-country-select]",addressContainer:"[data-address]",toggleAddressButton:"button[aria-expanded]",cancelAddressButton:'button[type="reset"]',deleteAddressButton:"button[data-confirm-message]"},attributes={expanded:"aria-expanded",confirmMessage:"data-confirm-message"},CustomerAddresses=_createClass(function t(){var e=this;_classCallCheck(this,t),_defineProperty(this,"_handleAddEditButtonClick",function(t){t=t.currentTarget,e._toggleExpanded(t)}),_defineProperty(this,"_handleCancelButtonClick",function(t){t=t.currentTarget,e._toggleExpanded(t.closest(selectors.addressContainer).querySelector("[".concat(attributes.expanded,"]")))}),_defineProperty(this,"_handleDeleteButtonClick",function(t){t=t.currentTarget,confirm(t.getAttribute(attributes.confirmMessage))&&Shopify.postLink(t.dataset.target,{parameters:{_method:"delete"}})}),this.elements=this._getElements(),0!==Object.keys(this.elements).length&&(this._setupCountries(),this._setupEventListeners())},[{key:"_getElements",value:function(){var t=document.querySelector(selectors.customerAddresses);return t?{container:t,addressContainer:t.querySelector(selectors.addressContainer),toggleButtons:document.querySelectorAll(selectors.toggleAddressButton),cancelButtons:t.querySelectorAll(selectors.cancelAddressButton),deleteButtons:t.querySelectorAll(selectors.deleteAddressButton),countrySelects:t.querySelectorAll(selectors.addressCountrySelect)}:{}}},{key:"_setupCountries",value:function(){Shopify&&Shopify.CountryProvinceSelector&&(new Shopify.CountryProvinceSelector("AddressCountryNew","AddressProvinceNew",{hideElement:"AddressProvinceContainerNew"}),this.elements.countrySelects.forEach(function(t){t=t.dataset.formId,new Shopify.CountryProvinceSelector("AddressCountry_".concat(t),"AddressProvince_".concat(t),{hideElement:"AddressProvinceContainer_".concat(t)})}))}},{key:"_setupEventListeners",value:function(){var e=this;this.elements.toggleButtons.forEach(function(t){t.addEventListener("click",e._handleAddEditButtonClick)}),this.elements.cancelButtons.forEach(function(t){t.addEventListener("click",e._handleCancelButtonClick)}),this.elements.deleteButtons.forEach(function(t){t.addEventListener("click",e._handleDeleteButtonClick)})}},{key:"_toggleExpanded",value:function(t){t.setAttribute(attributes.expanded,("false"===t.getAttribute(attributes.expanded)).toString())}}]);