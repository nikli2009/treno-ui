!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("treno-ui",[],t):"object"==typeof exports?exports["treno-ui"]=t():e["treno-ui"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=3)}([function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var a=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=u[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(a(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(a(r.parts[o]));u[r.id]={id:r.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function a(e){var t,r,n=document.querySelector("style["+g+'~="'+e.id+'"]');if(n){if(h)return v;n.parentNode.removeChild(n)}if(y){var a=p++;n=f||(f=o()),t=i.bind(null,n,a,!1),r=i.bind(null,n,a,!0)}else n=o(),t=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function i(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),m.ssrId&&e.setAttribute(g,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=r(8),u={},l=d&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,o){h=r,m=o||{};var a=c(e,t);return n(a),function(t){for(var r=[],o=0;o<a.length;o++){var i=a[o],s=u[i.id];s.refs--,r.push(s)}t?(a=c(e,t),n(a)):a=[];for(var o=0;o<r.length;o++){var s=r[o];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete u[s.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){"use strict";t.a={name:"TrDrawer",props:{collapse:{type:Boolean,default:!1},position:{type:String,default:"right"},width:[String,Number],autoHide:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},customClass:{type:String,default:""},beforeClose:{type:Function,default:function(e){e()}}},model:{prop:"collapse",event:"change"},data:function(){return{collapsed:this.collapse}},watch:{collapse:{handler:function(e,t){var r=this;if(!e&&t){var n=document.createElement("div");n.className="tr-drawer-mask",this.autoHide&&(n.onclick=function(){r.close()}),document.body.appendChild(n)}else if(e&&!t){var o=document.getElementsByClassName("tr-drawer-mask"),a=!0,i=!1,s=void 0;try{for(var d,c=o[Symbol.iterator]();!(a=(d=c.next()).done);a=!0){var u=d.value;document.body.removeChild(u)}}catch(e){i=!0,s=e}finally{try{!a&&c.return&&c.return()}finally{if(i)throw s}}}},deep:!0}},computed:{wrapperClass:function(){var e="";e+="tr-drawer--"+this.position;var t="";return this.collapse?t=" tr-drawer--collapsed":this.$emit("open"),e+=t,e+=" "+this.customClass,e},drawerWidth:function(){return"number"==typeof this.width?this.width+"px":"string"==typeof this.width?this.width:"600px"}},methods:{_reactOnMask:function(){var e=this.collapsed,t=this;if(e){if(e){var r=document.getElementsByClassName("tr-drawer-mask"),n=!0,o=!1,a=void 0;try{for(var i,s=r[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var d=i.value;document.body.removeChild(d)}}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}}}else{var c=document.createElement("div");c.className="tr-drawer-mask",this.autoHide&&(c.onclick=function(){t.close()}),document.body.appendChild(c)}},close:function(){this.beforeClose(this._close)},_close:function(){this.$emit("close"),this.$emit("change",!0)}},created:function(){this._reactOnMask()},mounted:function(){}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),o=[n.a],a=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];o.map(function(t){e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&a(window.Vue),t.default={install:a,TrDrawer:n.a}},function(e,t,r){"use strict";var n=r(5);n.a.install=function(e){return e.component(n.a.name,n.a)},t.a=n.a},function(e,t,r){"use strict";function n(e){r(6),r(9)}var o=r(2),a=r(12),i=r(11),s=n,d=i(o.a,a.a,!1,s,"data-v-1a0d8c10",null);t.a=d.exports},function(e,t,r){var n=r(7);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("156c1e32",n,!0,{})},function(e,t,r){t=e.exports=r(0)(!1),t.push([e.i,".tr-drawer[data-v-1a0d8c10]{position:fixed;z-index:100;padding:20px;box-sizing:border-box;background-color:#fff;box-shadow:-5px 0 40px .5px rgba(0,0,0,.2);opacity:1;transition:.3s ease-out}.tr-drawer--collapsed[data-v-1a0d8c10]{opacity:0;width:0!important;transition:.1s ease-out}.tr-drawer--right[data-v-1a0d8c10]{right:0;top:0;bottom:0}.tr-drawer--right .tr-drawer__operation[data-v-1a0d8c10]{position:absolute;left:-70px;top:25px}.tr-drawer--right .tr-drawer__operation img[data-v-1a0d8c10]{box-sizing:content-box;width:20px;transition:.2s ease-out;color:#979797;background-color:#fff;padding:12px;border-radius:50%}.tr-drawer--right .tr-drawer__operation img[data-v-1a0d8c10]:hover{cursor:pointer;transition:.2s ease-out;background-color:#f1f1f1;transform:rotate(90deg)}",""])},function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=a[0],s=a[1],d=a[2],c=a[3],u={id:e+":"+o,css:s,media:d,sourceMap:c};n[i]?n[i].parts.push(u):r.push(n[i]={id:i,parts:[u]})}return r}},function(e,t,r){var n=r(10);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("3f4e38aa",n,!0,{})},function(e,t,r){t=e.exports=r(0)(!1),t.push([e.i,".tr-drawer-mask{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#000;opacity:.7;z-index:99}",""])},function(e,t){e.exports=function(e,t,r,n,o,a){var i,s=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(i=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId=o);var u;if(a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=u,c.render=function(e,t){return u.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:i,exports:s,options:c}}},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tr-drawer",class:e.wrapperClass,style:{width:e.drawerWidth}},[e._t("default"),e._v(" "),n("div",{staticClass:"tr-drawer__operation"},[e.showClose?n("div",{staticClass:"tr-drawer__operation-close",on:{click:e.close}},[n("img",{attrs:{src:r(13),alt:""}})]):e._e()])],2)},o=[],a={render:n,staticRenderFns:o};t.a=a},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHN0cm9rZT0iIzk3OTc5NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZyBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgIDxwYXRoIGQ9Ik0xIDFsMTIgMTJNMTMgMUwxIDEzIj48L3BhdGg+CiAgPC9nPgo8L3N2Zz4K"}])});
//# sourceMappingURL=treno-ui.js.map