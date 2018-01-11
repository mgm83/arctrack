!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(11),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e,n){var r=n(1).Symbol;t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=c(n(4)),i=c(n(5)),a=c(n(6)),u=c(n(7));function c(t){return t&&t.__esModule?t:{default:t}}var l=function(){function t(e){var n=this,r=e.name,i=void 0===r?"arctrack":r,a=e.opts;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dataAttr="data-"+i,window.onload=function(){try{n.pageData=window[i]}catch(t){o.default.defaultError(t)}n.onPageReady(a)}}return r(t,[{key:"onPageReady",value:function(t){if(t.clickCb){var e=this.trackClick(t.clickCb);(0,i.default)("click",e,"["+this.dataAttr+"]")}if(t.scrollCb){var n=this.trackScroll(t.scrollCb)(this.pageData);window.addEventListener("scroll",n)}t.initCb&&t.initCb(this.pageData)}},{key:"trackClick",value:function(t){var e=this;return function(n){var r=n.target,i=e.pageData,u=e.dataAttr,c=(0,a.default)(r,u);try{t({type:c,target:r,pageData:i})}catch(e){o.default.methodFailed("trackClick",e,t)}}}},{key:"trackScroll",value:function(t){try{var e=Array.isArray(t)?t:[t];return this.scroller=new u.default(e),this.scroller.activate()}catch(t){o.default.methodFailed("trackScroll",t)}}}]),t}();e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"defaultError",value:function(t){console.error("Arctrack constructor failed with the following error: ",t)}},{key:"methodFailed",value:function(t,e,n){var r=n?"while trying to execute your callback: "+n:"";console.error("Arctrack#"+t+" failed "+r+", with the following error",e)}}]),t}();e.default=new o},function(t,e,n){"use strict";t.exports=function(t,e,n){(arguments.length>3&&void 0!==arguments[3]?arguments[3]:document).addEventListener(t,function(t){(!n||t.target.matches(n)||t.currentTarget.activeElement.matches(n)||t.target.parentElement&&t.target.parentElement.matches(n))&&(t.stopPropagation(),e(t))})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return t.closest("["+e+"]").getAttribute(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=c(n(8)),i=c(n(19)),a=c(n(20)),u=c(n(21));function c(t){return t&&t.__esModule?t:{default:t}}var l=1e3,s=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.entries=e,this.throttleSpeed=n,this.testElements=this.testElements.bind(this),this.entryTypes={},this.pendingElements={},this.scrolledElements={},this.scrollStatus={lastY:0,direction:"down"}}return r(t,[{key:"activate",value:function(){var t=this;return this.entries.forEach(function(e){t.registerEntry((0,a.default)(e));for(var n=document.querySelectorAll("[data-"+e.selector+"]"),r=!!e.trackOnceOnly&&e.trackOnceOnly,o=0;o<n.length;o+=1){var u=n[o];t.registerElement({node:u,type:e.type,trackOnceOnly:r,id:(0,i.default)()})}}),function(e){return(0,o.default)(t.testElements.bind(t,e),t.throttleSpeed)}}},{key:"registerEntry",value:function(t){var e=t.load,n=t.shouldLoad,r=t.type,o=t.selector;this.entryTypes[r]={load:e,shouldLoad:n,selector:o}}},{key:"registerElement",value:function(t){var e=t.node,n=t.id,r=t.type,o=t.trackOnceOnly;this.pendingElements[n]={type:r,target:e,trackOnceOnly:o}}},{key:"transferElement",value:function(t){this.scrolledElements[t]=this.pendingElements[t]}},{key:"testElements",value:function(t){var e=this;this.detectScrollDirection(),Object.keys(this.pendingElements).forEach(function(n){var r=e.pendingElements[n],o=r.target,i=r.type,a=r.trackOnceOnly,c=e.entryTypes[i];c.shouldLoad(o,e.scrollStatus.direction)&&(c.load({target:(0,u.default)(o,c.selector),type:i,pageData:t}),a||e.transferElement(n),delete e.pendingElements[n])})}},{key:"handleDirectionChange",value:function(){var t=this.scrolledElements;this.scrolledElements=this.removePendingElements(),Object.assign(this.pendingElements,t)}},{key:"detectScrollDirection",value:function(){var t=window.pageYOffset,e=void 0;(e=t>=this.scrollStatus.lastY?"down":"up")!==this.scrollStatus.direction&&this.handleDirectionChange(),this.scrollStatus.direction=e,this.scrollStatus.lastY=t}},{key:"removePendingElements",value:function(){var t=this,e={};return Object.keys(this.pendingElements).forEach(function(n){e[n]=t.pendingElements[n],delete t.pendingElements[n]}),e}}]),t}();e.default=s},function(t,e,n){var r=n(9),o=n(0),i="Expected a function";t.exports=function(t,e,n){var a=!0,u=!0;if("function"!=typeof t)throw new TypeError(i);return o(n)&&(a="leading"in n?!!n.leading:a,u="trailing"in n?!!n.trailing:u),r(t,e,{leading:a,maxWait:e,trailing:u})}},function(t,e,n){var r=n(0),o=n(10),i=n(13),a="Expected a function",u=Math.max,c=Math.min;t.exports=function(t,e,n){var l,s,f,d,p,v,y=0,h=!1,g=!1,b=!0;if("function"!=typeof t)throw new TypeError(a);function m(e){var n=l,r=s;return l=s=void 0,y=e,d=t.apply(r,n)}function O(t){var n=t-v;return void 0===v||n>=e||n<0||g&&t-y>=f}function w(){var t,n,r=o();if(O(r))return E(r);p=setTimeout(w,(n=e-((t=r)-v),g?c(n,f-(t-y)):n))}function E(t){return p=void 0,b&&l?m(t):(l=s=void 0,d)}function k(){var t,n=o(),r=O(n);if(l=arguments,s=this,v=n,r){if(void 0===p)return y=t=v,p=setTimeout(w,e),h?m(t):d;if(g)return p=setTimeout(w,e),m(v)}return void 0===p&&(p=setTimeout(w,e)),d}return e=i(e)||0,r(n)&&(h=!!n.leading,f=(g="maxWait"in n)?u(i(n.maxWait)||0,e):f,b="trailing"in n?!!n.trailing:b),k.cancel=function(){void 0!==p&&clearTimeout(p),y=0,l=v=s=p=void 0},k.flush=function(){return void 0===p?d:E(o())},k}},function(t,e,n){var r=n(1);t.exports=function(){return r.Date.now()}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(12))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(14),i=NaN,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return i;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=c.test(t);return n||l.test(t)?s(t.slice(2),n?2:8):u.test(t)?i:+t}},function(t,e,n){var r=n(15),o=n(18),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},function(t,e,n){var r=n(2),o=n(16),i=n(17),a="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:a:c&&c in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(2),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[u]=n:delete t[u]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t="",e=0;e<10;e+=1){var n=Math.floor(24*Math.random());t+=n%2==0?r[n]:n}return t};var r=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=void 0;return e=t.buffer?o(r(t.buffer)):o({top:0,bottom:0}),Object.assign({},{load:t.load,type:t.type,selector:t.selector,shouldLoad:e})};var r=function(t){return t.top?t.bottom?t:Object.assign({},t,{bottom:0}):Object.assign({},t,{top:0})},o=function(t){return function(e,n){var r=e.getBoundingClientRect(),o=t.top,i=t.bottom;return"down"===n&&r.top<=o||"up"===n&&r.bottom>=window.innerHeight+i}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=(0,r.default)(a(e));return{node:t,data:(0,o.default)(t,n)}};var r=i(n(22)),o=i(n(23));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(t){return t.replace(/-/g," ")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,e){return 0===e?t.toLowerCase():t.toUpperCase().replace(/\s+/g,"")})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=Object.assign({},JSON.parse(JSON.stringify(t.dataset))),r=void 0;return Object.keys(n).forEach(function(t){t.indexOf(e)>-1&&(r=n[t])}),r}}])});