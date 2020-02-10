!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MultiMenu=e():t.MultiMenu=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="bundle",n(n.s=0)}([function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,a){function l(t){try{s(r.next(t))}catch(t){a(t)}}function o(t){try{s(r.throw(t))}catch(t){a(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,o)}s((r=r.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var n,r,i,a,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(i=(i=l.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){l.label=a[1];break}if(6===a[0]&&l.label<i[1]){l.label=i[1],i=a;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(a);break}i[2]&&l.ops.pop(),l.trys.pop();continue}a=e.call(t,l)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}};Object.defineProperty(e,"__esModule",{value:!0});var l=n(1),o={backBtnClass:"js-menu-back-btn",disableMenuClass:"js-disable-menu",activeMenuClass:"active",flattenedClass:"flattened",collapseClass:"js-collapse",fetchAttribute:"data-fetch-url",prependHTML:function(t){return'<a href="#" class="js-menu-back-btn">← Back </a></li>'},levelLimit:1/0},s=function(){function t(t,e){void 0===e&&(e={}),this.childCount=0,this.multiMenu="string"==typeof t?document.querySelector(t):t,this.opt=r(r({},o),e),l.addClass(this.multiMenu,"multi-menu"),this.setMenu(this.multiMenu.querySelectorAll("ul")),this.setActiveMenu()}return t.prototype.setLevels=function(t,e){var n=this;[].forEach.call(t,(function(t){if(!t.dataset.level){var r=0,i=t,a="ul ul",o=!1;if(l.hasClass(t,n.opt.disableMenuClass)){var s=t.querySelectorAll("ul");[].forEach.call(s,(function(t){l.addClass(t,n.opt.disableMenuClass)}))}else{for(;null!==i;){if((r+=1)>n.opt.levelLimit){o=!0;break}i=l.findAncestor(i,a),a+=" ul"}if(!o){var u=l.findAncestor(t.parentElement,"ul");u&&(t.dataset.parentId=u.dataset.id),t.dataset.id||(t.dataset.id=""+n.childCount,n.childCount++),t.dataset.level=r+e}}}}));var r=this.getMaxLevel();[].forEach.call(t,(function(t){t.style.zIndex=""+(r-parseInt(t.dataset.level,10))}))},t.prototype.getMaxLevel=function(){var t=0;return[].forEach.call(this.multiMenu.querySelectorAll("ul"),(function(e){var n=parseInt(e.dataset.level,10);n>t&&(t=n)})),t},t.prototype.flattenList=function(t){var e=this;[].forEach.call(t,(function(t){if(!l.hasClass(t,e.opt.flattenedClass)){if(t.previousElementSibling&&t.previousElementSibling.dataset&&(t.previousElementSibling.dataset.ulId=t.dataset.id),e.opt.prependHTML){var n=e.multiMenu.querySelector('[data-ul-id="'+t.dataset.id+'"]');n&&l.prepend(t,e.opt.prependHTML(n))}e.multiMenu.appendChild(t),l.addClass(t,e.opt.flattenedClass)}}))},t.prototype.backLink=function(t){var e=l.findAncestor(t,"ul").dataset.parentId;if(e){var n=this.multiMenu.querySelectorAll("ul"),r=[].find.call(n,(function(t){return t.dataset.id===e}));r.style.display="block",setTimeout((function(){r.style.transform="translateX(0)"}),100),this.fetchList(r)}},t.prototype.fetchList=function(t){var e=this,n=t.querySelectorAll("a");[].forEach.call(n,(function(n){return i(e,void 0,void 0,(function(){var e,r;return a(this,(function(i){switch(i.label){case 0:return n&&(e=n.getAttribute(this.opt.fetchAttribute))?[4,fetch(e)]:[2];case 1:return[4,i.sent().text()];case 2:return r=i.sent(),n.removeAttribute(this.opt.fetchAttribute),n.insertAdjacentHTML("afterend",r),this.setMenu(this.multiMenu.querySelectorAll("ul"),parseInt(t.dataset.level,10)),[2]}}))}))}))},t.prototype.forwardLink=function(t){var e=this,n=l.findAncestor(t,"ul");n.style.transform="translateX(-100%)";var r=this.multiMenu.querySelectorAll("ul");[].forEach.call(r,(function(r){if(t.dataset.ulId===r.dataset.id||r===n)return r.style.display="block",void e.fetchList(r);l.hasClass(r,e.opt.disableMenuClass)||(r.style.display="none")}))},t.prototype.setLink=function(t){var e=this;l.hasClass(t,this.opt.backBtnClass)&&(l.addClass(t,this.opt.collapseClass),t.addEventListener("click",(function(n){n.preventDefault(),e.backLink(t)}))),t.dataset.ulId&&(l.addClass(t,this.opt.collapseClass),t.addEventListener("click",(function(n){n.preventDefault(),e.forwardLink(t)})))},t.prototype.setActiveMenu=function(){var t=this,e=this.multiMenu.querySelectorAll("ul"),n=[].find.call(e,(function(e){return!!l.hasClass(e,t.opt.activeMenuClass)}));if(n){var r=this.multiMenu.querySelectorAll("ul");[].forEach.call(r,(function(e){if(n!==e)if(n.dataset.parentId===e.dataset.id)for(var r=e;r.style.transform="translateX(-100%)",r.dataset.parentId;)r=t.multiMenu.querySelector('[data-id="'+r.dataset.parentId+'"]');else e.style.display="none";else e.style.display="block"}))}},t.prototype.setMenu=function(t,e){var n=this;void 0===e&&(e=0),this.setLevels(t,e),this.flattenList(t);var r=this.multiMenu.querySelectorAll("a:not(."+this.opt.collapseClass+")");[].forEach.call(r,(function(t){n.setLink(t)}))},t}();e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getUniqId=function(){return(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase()},e.getWindowWidth=function(){return document&&document.documentElement?document.documentElement.clientWidth:window&&window.innerWidth?window.innerWidth:0},e.getWindowHeight=function(){return window.innerHeight||document.documentElement.clientHeight||0},e.hasClass=function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},e.addClass=function(t,e){t.classList?t.classList.add(e):t.className+=" "+e},e.removeClass=function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},e.getScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},e.wrap=function(t,e){t.parentNode.insertBefore(e,t),e.appendChild(t)},e.after=function(t,e){t.insertAdjacentHTML("afterend",e)},e.isIE=function(){var t=window.navigator.userAgent.toLowerCase();return!(!t.match(/(msie|MSIE)/)&&!t.match(/(T|t)rident/))},e.triggerEvent=function(t,e,n){var r;window.CustomEvent?r=new CustomEvent(e,{cancelable:!0}):(r=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!1,n),t.dispatchEvent(r)},e.append=function(t,e){var n=document.createElement("div");for(n.innerHTML=e;n.children.length>0;)t.appendChild(n.children[0])},e.prepend=function(t,e){var n=document.createElement("div");for(n.innerHTML=e;n.children.length>0;)t.insertBefore(n.children[0],t.firstChild)},e.matches=function(t,e){for(var n=(t.document||t.ownerDocument).querySelectorAll(e),r=n.length;--r>=0&&n.item(r)!==t;);return r>-1},e.findAncestor=function(t,n){if("function"==typeof t.closest)return t.closest(n)||null;for(;t&&t!==document;){if(e.matches(t,n))return t;t=t.parentElement}return null}}]).default}));