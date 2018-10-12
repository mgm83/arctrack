!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=28)}([function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(14),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e,n){var r=n(1).Symbol;t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.trackJs=e.trackDom=void 0;var r=i(n(4)),o=i(n(27));function i(t){return t&&t.__esModule?t:{default:t}}e.trackDom=r.default,e.trackJs=o.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.dataAttr||"data-arctrack";if(t.click){var n=(0,r.default)({cb:t.click,dataAttr:e});(0,o.default)("click",n,"["+e+"]")}if(t.scroll){var u=(0,i.default)(t.scroll);window.onscroll=u}};var r=u(n(5)),o=u(n(8)),i=u(n(9));function u(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(6)),o=i(n(7));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var e=t.cb,n=t.dataAttr;return function(t){var i=t.target;try{e({type:(0,r.default)(i,n),target:i})}catch(t){o.default.defaultError(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return t.closest("["+e+"]").getAttribute(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"defaultError",value:function(t){console.error("Arctrack failed with the following error: ",t)}},{key:"methodFailed",value:function(t,e,n){var r=n?"while trying to execute your callback: "+n:"";console.error(t+" failed "+r+", with the following error",e)}}]),t}();e.default=new o},function(t,e,n){"use strict";t.exports=function(t,e,n){(arguments.length>3&&void 0!==arguments[3]?arguments[3]:document).addEventListener(t,function(t){(!n||t.target.matches(n)||t.currentTarget.activeElement.matches(n)||t.target.parentElement&&t.target.parentElement.matches(n))&&(t.stopPropagation(),e(t))})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(10),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){return new i.default(Array.isArray(t)?t:[t]).activate()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=c(n(11)),i=c(n(22)),u=c(n(23)),a=c(n(24));function c(t){return t&&t.__esModule?t:{default:t}}var l=1e3,f=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.entries=e,this.throttleSpeed=n,this.testElements=this.testElements.bind(this),this.entryTypes={},this.pendingElements={},this.scrolledElements={},this.scrollStatus={lastY:0,direction:"down"}}return r(t,[{key:"activate",value:function(){var t=this;return this.entries.forEach(function(e){t.registerEntry((0,u.default)(e));for(var n=document.querySelectorAll("[data-"+e.selector+"]"),r=!!e.trackOnceOnly&&e.trackOnceOnly,o=0;o<n.length;o+=1){var a=n[o];t.registerElement({node:a,type:e.type,trackOnceOnly:r,id:(0,i.default)()})}}),(0,o.default)(this.testElements,this.throttleSpeed)}},{key:"registerEntry",value:function(t){var e=t.load,n=t.shouldLoad,r=t.type,o=t.selector;this.entryTypes[r]={load:e,shouldLoad:n,selector:o}}},{key:"registerElement",value:function(t){var e=t.node,n=t.id,r=t.type,o=t.trackOnceOnly;this.pendingElements[n]={type:r,target:e,trackOnceOnly:o}}},{key:"transferElement",value:function(t){this.scrolledElements[t]=this.pendingElements[t]}},{key:"testElements",value:function(t){var e=this;this.detectScrollDirection(),Object.keys(this.pendingElements).forEach(function(n){var r=e.pendingElements[n],o=r.target,i=r.type,u=r.trackOnceOnly,c=e.entryTypes[i];c.shouldLoad(o,e.scrollStatus.direction)&&(c.load({target:(0,a.default)(o,c.selector),type:i,pageData:t}),u||e.transferElement(n),delete e.pendingElements[n])})}},{key:"handleDirectionChange",value:function(){var t=this.scrolledElements;this.scrolledElements=this.removePendingElements(),Object.assign(this.pendingElements,t)}},{key:"detectScrollDirection",value:function(){var t=window.pageYOffset,e=void 0;(e=t>=this.scrollStatus.lastY?"down":"up")!==this.scrollStatus.direction&&this.handleDirectionChange(),this.scrollStatus.direction=e,this.scrollStatus.lastY=t}},{key:"removePendingElements",value:function(){var t=this,e={};return Object.keys(this.pendingElements).forEach(function(n){e[n]=t.pendingElements[n],delete t.pendingElements[n]}),e}}]),t}();e.default=f},function(t,e,n){var r=n(12),o=n(0),i="Expected a function";t.exports=function(t,e,n){var u=!0,a=!0;if("function"!=typeof t)throw new TypeError(i);return o(n)&&(u="leading"in n?!!n.leading:u,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:u,maxWait:e,trailing:a})}},function(t,e,n){var r=n(0),o=n(13),i=n(16),u="Expected a function",a=Math.max,c=Math.min;t.exports=function(t,e,n){var l,f,s,d,v,p,y=0,h=!1,g=!1,b=!0;if("function"!=typeof t)throw new TypeError(u);function m(e){var n=l,r=f;return l=f=void 0,y=e,d=t.apply(r,n)}function O(t){var n=t-p;return void 0===p||n>=e||n<0||g&&t-y>=s}function j(){var t,n,r=o();if(O(r))return E(r);v=setTimeout(j,(n=e-((t=r)-p),g?c(n,s-(t-y)):n))}function E(t){return v=void 0,b&&l?m(t):(l=f=void 0,d)}function w(){var t,n=o(),r=O(n);if(l=arguments,f=this,p=n,r){if(void 0===v)return y=t=p,v=setTimeout(j,e),h?m(t):d;if(g)return v=setTimeout(j,e),m(p)}return void 0===v&&(v=setTimeout(j,e)),d}return e=i(e)||0,r(n)&&(h=!!n.leading,s=(g="maxWait"in n)?a(i(n.maxWait)||0,e):s,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==v&&clearTimeout(v),y=0,l=p=f=v=void 0},w.flush=function(){return void 0===v?d:E(o())},w}},function(t,e,n){var r=n(1);t.exports=function(){return r.Date.now()}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(15))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(17),i=NaN,u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return i;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=c.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):a.test(t)?i:+t}},function(t,e,n){var r=n(18),o=n(21),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},function(t,e,n){var r=n(2),o=n(19),i=n(20),u="[object Null]",a="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:u:c&&c in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(2),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[a]=n:delete t[a]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t="",e=0;e<10;e+=1){var n=Math.floor(24*Math.random());t+=n%2==0?r[n]:n}return t};var r=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=void 0;return e=t.buffer?o(r(t.buffer)):o({top:0,bottom:0}),Object.assign({},{load:t.load,type:t.type,selector:t.selector,shouldLoad:e})};var r=function(t){return t.top?t.bottom?t:Object.assign({},t,{bottom:0}):Object.assign({},t,{top:0})},o=function(t){return function(e,n){var r=e.getBoundingClientRect(),o=t.top,i=t.bottom;return"down"===n&&r.top<=o||"up"===n&&r.bottom>=window.innerHeight+i}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=a((0,r.default)(u(e)));return{node:t,data:(0,o.default)(t,n)}};var r=i(n(25)),o=i(n(26));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(t){return t.replace(/-/g," ")},a=function(t){return t.indexOf(" ")>-1?t.replace(" ",""):t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,e){return 0===e?t.toLowerCase():t.toUpperCase().replace(/\s+/g,"")})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=Object.assign({},JSON.parse(JSON.stringify(t.dataset))),r=void 0;return Object.keys(n).forEach(function(t){t.indexOf(e)>-1&&(r=n[t])}),r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=function(t,e){return function(n,o,i){var u=i.value;return r({},i,{value:function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];try{t({methodName:o,instance:this,eventName:e,args:r})}catch(t){throw new Error("trackJs: failed with the following error: "+t)}return u.apply(this,r)}})}}},function(t,e,n){"use strict";(0,n(3).trackDom)({click:function(t){var e=t.target,n=t.type;console.log("firing analytics for '"+n+"!'"),console.log("And here's the click target:\n",e)}})}])});