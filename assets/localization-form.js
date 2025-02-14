function _typeof8(e){return(_typeof8="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof7(e){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(e){return _typeof8(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof8(e)})(e)}function _typeof6(e){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(e){return _typeof7(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof7(e)})(e)}function _typeof5(e){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(e){return _typeof6(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof6(e)})(e)}function _typeof4(e){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(e){return _typeof5(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof5(e)})(e)}function _typeof3(e){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(e){return _typeof4(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof4(e)})(e)}function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(e){return _typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof3(e)})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var u=0;u<t.length;u++){var o=t[u];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,u){return t&&_defineProperties(e.prototype,t),u&&_defineProperties(e,u),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){return"symbol"==_typeof(e=_toPrimitive(e,"string"))?e:e+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var u=e[Symbol.toPrimitive];if(void 0===u)return("string"===t?String:Number)(e);if("object"!=_typeof(u=u.call(e,t||"default")))return u;throw new TypeError("@@toPrimitive must return a primitive value.")}function _callSuper(e,t,u){return t=_getPrototypeOf(t),_possibleConstructorReturn(e,_isNativeReflectConstruct()?Reflect.construct(t,u||[],_getPrototypeOf(e).constructor):t.apply(e,u))}function _possibleConstructorReturn(e,t){if(t&&("object"==_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _wrapNativeSuper(e){var u="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(e){if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==u){if(u.has(e))return u.get(e);u.set(e,t)}function t(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(t,e)})(e)}function _construct(e,t,u){var o;return _isNativeReflectConstruct()?Reflect.construct.apply(null,arguments):((o=[null]).push.apply(o,t),t=new(e.bind.apply(e,o)),u&&_setPrototypeOf(t,u.prototype),t)}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.get("localization-form")||customElements.define("localization-form",(()=>{function e(){var t;return _classCallCheck(this,e),(t=_callSuper(this,e)).mql=window.matchMedia("(min-width: 750px)"),t.header=document.querySelector(".header-wrapper"),t.elements={input:t.querySelector('input[name="locale_code"], input[name="country_code"]'),button:t.querySelector("button.localization-form__select"),panel:t.querySelector(".disclosure__list-wrapper"),search:t.querySelector('input[name="country_filter"]'),closeButton:t.querySelector(".country-selector__close-button"),resetButton:t.querySelector(".country-filter__reset-button"),searchIcon:t.querySelector(".country-filter__search-icon"),liveRegion:t.querySelector("#sr-country-search-results")},t.addEventListener("keyup",t.onContainerKeyUp.bind(t)),t.addEventListener("keydown",t.onContainerKeyDown.bind(t)),t.addEventListener("focusout",t.closeSelector.bind(t)),t.elements.button.addEventListener("click",t.openSelector.bind(t)),t.elements.search&&(t.elements.search.addEventListener("keyup",t.filterCountries.bind(t)),t.elements.search.addEventListener("focus",t.onSearchFocus.bind(t)),t.elements.search.addEventListener("blur",t.onSearchBlur.bind(t)),t.elements.search.addEventListener("keydown",t.onSearchKeyDown.bind(t))),t.elements.closeButton&&t.elements.closeButton.addEventListener("click",t.hidePanel.bind(t)),t.elements.resetButton&&(t.elements.resetButton.addEventListener("click",t.resetFilter.bind(t)),t.elements.resetButton.addEventListener("mousedown",function(e){return e.preventDefault()})),t.querySelectorAll("a").forEach(function(e){return e.addEventListener("click",t.onItemClick.bind(t))}),t}return _inherits(e,_wrapNativeSuper(HTMLElement)),_createClass(e,[{key:"hidePanel",value:function(){this.elements.button.setAttribute("aria-expanded","false"),this.elements.panel.setAttribute("hidden",!0),this.elements.search&&(this.elements.search.value="",this.filterCountries(),this.elements.search.setAttribute("aria-activedescendant","")),document.body.classList.remove("overflow-hidden-mobile"),document.querySelector(".menu-drawer").classList.remove("country-selector-open"),this.header.preventHide=!1}},{key:"onContainerKeyDown",value:function(e){var t=this,u=Array.from(this.querySelectorAll("a")).filter(function(e){return!e.parentElement.classList.contains("hidden")}),o=u.findIndex(function(e){return e===document.activeElement});switch(e.code.toUpperCase()){case"ARROWUP":e.preventDefault(),(0<o?u[o-1]:u[u.length-1]).focus();break;case"ARROWDOWN":e.preventDefault(),(o<u.length-1?u[o+1]:u[0]).focus()}this.elements.search&&setTimeout(function(){-1<(o=u.findIndex(function(e){return e===document.activeElement}))?t.elements.search.setAttribute("aria-activedescendant",u[o].id):t.elements.search.setAttribute("aria-activedescendant","")})}},{key:"onContainerKeyUp",value:function(e){switch(e.preventDefault(),e.code.toUpperCase()){case"ESCAPE":"false"!=this.elements.button.getAttribute("aria-expanded")&&(this.hidePanel(),e.stopPropagation(),this.elements.button.focus());break;case"SPACE":"true"!=this.elements.button.getAttribute("aria-expanded")&&this.openSelector()}}},{key:"onItemClick",value:function(e){e.preventDefault();var t=this.querySelector("form");this.elements.input.value=e.currentTarget.dataset.value,t&&t.submit()}},{key:"openSelector",value:function(){this.elements.button.focus(),this.elements.panel.toggleAttribute("hidden"),this.elements.button.setAttribute("aria-expanded",("false"===this.elements.button.getAttribute("aria-expanded")).toString()),document.body.classList.contains("overflow-hidden-tablet")||document.body.classList.add("overflow-hidden-mobile"),this.elements.search&&this.mql.matches&&this.elements.search.focus(),this.hasAttribute("data-prevent-hide")&&(this.header.preventHide=!0),document.querySelector(".menu-drawer").classList.add("country-selector-open")}},{key:"closeSelector",value:function(e){!e.target.classList.contains("country-selector__overlay")&&this.contains(e.target)&&this.contains(e.relatedTarget)||this.hidePanel()}},{key:"normalizeString",value:function(e){return e.normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E3A\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u1734\u17C9-\u17D3\u17DD\u1939-\u193B\u1A60\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1BE6\u1BF2\u1BF3\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA806\uA82C\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDD4E\uDD69-\uDD6D\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3B\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74\uDFCE-\uDFD0\uDFD2\uDFD3\uDFE1\uDFE2]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97\uDF41\uDF42\uDF5A]|\uD80D[\uDC47-\uDC55]|\uD818\uDD2F|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDD6B\uDD6C\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDC30-\uDC6D\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDDEE\uDDEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g,"").toLowerCase()}},{key:"filterCountries",value:function(){var t=this,u=this.normalizeString(this.elements.search.value),e=this.querySelector(".popular-countries"),o=this.querySelectorAll("a"),n=o.length;this.elements.resetButton.classList.toggle("hidden",!u),e&&e.classList.toggle("hidden",u),o.forEach(function(e){-1<t.normalizeString(e.querySelector(".country").textContent).indexOf(u)?(e.parentElement.classList.remove("hidden"),n++):(e.parentElement.classList.add("hidden"),n--)}),this.elements.liveRegion&&(this.elements.liveRegion.innerHTML=window.accessibilityStrings.countrySelectorSearchCount.replace("[count]",n)),this.querySelector(".country-selector").scrollTop=0,this.querySelector(".country-selector__list").scrollTop=0}},{key:"resetFilter",value:function(e){e.stopPropagation(),this.elements.search.value="",this.filterCountries(),this.elements.search.focus()}},{key:"onSearchFocus",value:function(){this.elements.searchIcon.classList.add("country-filter__search-icon--hidden")}},{key:"onSearchBlur",value:function(){this.elements.search.value||this.elements.searchIcon.classList.remove("country-filter__search-icon--hidden")}},{key:"onSearchKeyDown",value:function(e){"ENTER"===e.code.toUpperCase()&&e.preventDefault()}}])})());