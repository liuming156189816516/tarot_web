/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},r=Object.prototype,l=r.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var l=t&&t.prototype instanceof v?t:v,a=Object.create(l.prototype),u=new D(r||[]);return o(a,"_invoke",{value:_(e,n,u)}),a}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var d="suspendedStart",h="suspendedYield",y="executing",g="completed",m={};function v(){}function b(){}function w(){}var k={};s(k,u,(function(){return this}));var B=Object.getPrototypeOf,E=B&&B(B(U([])));E&&E!==r&&l.call(E,u)&&(k=E);var V=w.prototype=v.prototype=Object.create(k);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(r,o,a,u){var i=p(e[r],e,o);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&l.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,a,u)}),(function(e){n("throw",e,a,u)})):t.resolve(s).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,u)}))}u(i.arg)}var r;o(this,"_invoke",{value:function(e,l){function o(){return new t((function(t,r){n(e,l,t,r)}))}return r=r?r.then(o,o):o()}})}function _(e,n,r){var l=d;return function(o,a){if(l===y)throw Error("Generator is already running");if(l===g){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var u=r.delegate;if(u){var i=j(u,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(l===d)throw l=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);l=y;var c=p(e,n,r);if("normal"===c.type){if(l=r.done?g:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(l=g,r.method="throw",r.arg=c.arg)}}}function j(e,n){var r=n.method,l=e.iterator[r];if(l===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=p(l,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function U(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(l.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=w,o(V,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,c,"GeneratorFunction")),e.prototype=Object.create(V),e},n.awrap=function(e){return{__await:e}},x(C.prototype),s(C.prototype,i,(function(){return this})),n.AsyncIterator=C,n.async=function(e,t,r,l,o){void 0===o&&(o=Promise);var a=new C(f(e,t,r,l),o);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(V),s(V,c,"Generator"),s(V,u,(function(){return this})),s(V,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=U,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&l.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,l){return u.type="throw",u.arg=e,n.next=r,l&&(n.method="next",n.arg=t),!!l}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var i=l.call(a,"catchLoc"),c=l.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var l=r.arg;L(n)}return l}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:U(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},n}function t(e,t,n,r,l,o,a){try{var u=e[o](a),i=u.value}catch(c){return void n(c)}u.done?t(i):Promise.resolve(i).then(r,l)}System.register(["./087AC4D233B64EB0index-legacy.0859e6b1.js","./087AC4D233B64EB0form-item-legacy.95fc83a6.js","./087AC4D233B64EB0button-legacy.6621f510.js","./087AC4D233B64EB0input-legacy.12c190df.js","./087AC4D233B64EB0tag-legacy.4ef5d524.js","./087AC4D233B64EB0select-legacy.b6d2ca31.js","./087AC4D233B64EB0scrollbar-legacy.0817fabf.js","./087AC4D233B64EB0popper-legacy.78a44115.js","./087AC4D233B64EB0checkbox-legacy.0129cd3f.js","./087AC4D233B64EB0stringFun-legacy.7a0441ab.js","./087AC4D233B64EB0autoCode-legacy.84e26242.js","./087AC4D233B64EB0doc-legacy.d4eaa869.js","./087AC4D233B64EB0index-legacy.ab5d2f61.js","./087AC4D233B64EB0index-legacy.aead0045.js","./087AC4D233B64EB0isEqual-legacy.20e4850e.js","./087AC4D233B64EB0_Uint8Array-legacy.44a7ea11.js","./087AC4D233B64EB0hasIn-legacy.877454b6.js","./087AC4D233B64EB0castArray-legacy.0b6694b7.js","./087AC4D233B64EB0_baseClone-legacy.c15be53c.js","./087AC4D233B64EB0_initCloneObject-legacy.d38c7bf0.js","./087AC4D233B64EB0index-legacy.3f456c82.js","./087AC4D233B64EB0isUndefined-legacy.9b9dfd8c.js","./087AC4D233B64EB0index-legacy.d6a7ccf4.js","./087AC4D233B64EB0index-legacy.0327a42a.js","./087AC4D233B64EB0strings-legacy.63580c92.js","./087AC4D233B64EB0debounce-legacy.eabc9d01.js","./087AC4D233B64EB0_baseIteratee-legacy.96aa59f4.js"],(function(n,r){"use strict";var l,o,a,u,i,c,s,f,p,d,h,y,g,m,v,b,w,k,B,E,V,x,C,_,j,A,L,D,U;return{setters:[function(e){l=e._,o=e.r,a=e.o,u=e.c,i=e.b,c=e.d,s=e.w,f=e.h,p=e.N,d=e.O,h=e.G,y=e.a_,g=e.d3,m=e.e,v=e.g,b=e.b2,w=e.k,k=e.ap,B=e.l,E=e.E,V=e.J},null,null,null,null,null,null,null,function(e){x=e.E},function(e){C=e.b},function(e){_=e.k},function(e){j=e.t},function(e){A=e.a,L=e.E},function(e){D=e.E,U=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".plug-row[data-v-e64c8960]{display:flex;width:100%;align-items:center}.plug-row+.plug-row[data-v-e64c8960]{margin-top:.75rem}.plug-row>span[data-v-e64c8960]{margin-left:.5rem}\n",document.head.appendChild(r);var G={class:"gva-table-box"},O={__name:"autoPlug",setup:function(n){var r=o({plugName:"",routerGroup:"",hasGlobal:!0,hasRequest:!0,hasResponse:!0,global:[{key:"",type:"",desc:""}],request:[{key:"",type:"",desc:""}],response:[{key:"",type:"",desc:""}]}),l=function(){r.plugName=C(r.plugName)},O=function(){var n,l=(n=e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.plugName&&r.routerGroup){e.next=3;break}return w.error("插件名称和插件路由组为必填项"),e.abrupt("return");case 3:if(!r.hasGlobal){e.next=8;break}if(!r.global.some((function(e){if(!e.key||!e.type)return!0}))){e.next=8;break}return w.error("全局属性的key和type为必填项"),e.abrupt("return");case 8:if(!r.hasRequest){e.next=13;break}if(!r.request.some((function(e){if(!e.key||!e.type)return!0}))){e.next=13;break}return w.error("请求属性的key和type为必填项"),e.abrupt("return");case 13:if(!r.hasResponse){e.next=18;break}if(!r.response.some((function(e){if(!e.key||!e.type)return!0}))){e.next=18;break}return w.error("响应属性的key和type为必填项"),e.abrupt("return");case 18:return e.next=20,_(r);case 20:0===e.sent.code&&k("创建成功，插件已自动写入后端plugin目录下，请按照自己的逻辑进行创造");case 22:case"end":return e.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(l,o){var a=n.apply(e,r);function u(e){t(a,l,o,u,i,"next",e)}function i(e){t(a,l,o,u,i,"throw",e)}u(void 0)}))});return function(){return l.apply(this,arguments)}}(),N=function(e){e.push({key:"",value:""})},R=function(e,t){1!==e.length?e.splice(t,1):w.warning("至少有一个全局属性")};return function(e,t){var n=B,o=A,w=x,k=D,C=U,_=E,q=V,P=L;return a(),u("div",null,[i("div",G,[c(P,{"label-width":"140px",class:"w-[680px]"},{default:s((function(){return[c(o,{label:"插件名"},{default:s((function(){return[c(n,{modelValue:r.plugName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.plugName=e}),placeholder:"必填（英文大写字母开头）",onBlur:l},null,8,["modelValue"])]})),_:1}),c(o,{label:"路由组"},{default:s((function(){return[c(n,{modelValue:r.routerGroup,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.routerGroup=e}),placeholder:"将会作为插件路由组使用"},null,8,["modelValue"])]})),_:1}),c(o,{label:"使用全局属性"},{default:s((function(){return[c(w,{modelValue:r.hasGlobal,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.hasGlobal=e})},null,8,["modelValue"])]})),_:1}),r.hasGlobal?(a(),f(o,{key:0,label:"全局属性"},{default:s((function(){return[(a(!0),u(p,null,d(r.global,(function(e,l){return a(),u("div",{key:l,class:"plug-row"},[i("span",null,[c(n,{modelValue:e.key,"onUpdate:modelValue":function(t){return e.key=t},placeholder:"key 必填"},null,8,["modelValue","onUpdate:modelValue"])]),i("span",null,[c(C,{class:"w-32",modelValue:e.type,"onUpdate:modelValue":function(t){return e.type=t},placeholder:"type 必填"},{default:s((function(){return[c(k,{label:"string",value:"string"}),c(k,{label:"int",value:"int"}),c(k,{label:"float32",value:"float32"}),c(k,{label:"float64",value:"float64"}),c(k,{label:"bool",value:"bool"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]),i("span",null,[c(n,{modelValue:e.desc,"onUpdate:modelValue":function(t){return e.desc=t},placeholder:"备注 必填"},null,8,["modelValue","onUpdate:modelValue"])]),i("span",null,[c(_,{icon:h(y),circle:"",onClick:t[3]||(t[3]=function(e){return N(r.global)})},null,8,["icon"])]),i("span",null,[c(_,{icon:h(g),circle:"",onClick:function(e){return R(r.global,l)}},null,8,["icon","onClick"])])])})),128))]})),_:1})):m("",!0),c(o,{label:"使用Request"},{default:s((function(){return[c(w,{modelValue:r.hasRequest,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.hasRequest=e})},null,8,["modelValue"])]})),_:1}),r.hasRequest?(a(),f(o,{key:1,label:"Request"},{default:s((function(){return[(a(!0),u(p,null,d(r.request,(function(e,l){return a(),u("div",{key:l,class:"plug-row"},[i("span",null,[c(n,{modelValue:e.key,"onUpdate:modelValue":function(t){return e.key=t},placeholder:"key 必填"},null,8,["modelValue","onUpdate:modelValue"])]),i("span",null,[c(C,{modelValue:e.type,"onUpdate:modelValue":function(t){return e.type=t},class:"w-32",placeholder:"type 必填"},{default:s((function(){return[c(k,{label:"string",value:"string"}),c(k,{label:"int",value:"int"}),c(k,{label:"float32",value:"float32"}),c(k,{label:"float64",value:"float64"}),c(k,{label:"bool",value:"bool"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]),i("span",null,[c(n,{modelValue:e.desc,"onUpdate:modelValue":function(t){return e.desc=t},placeholder:"备注 必填"},null,8,["modelValue","onUpdate:modelValue"])]),i("span",null,[c(_,{icon:h(y),circle:"",onClick:t[5]||(t[5]=function(e){return N(r.request)})},null,8,["icon"])]),i("span",null,[c(_,{icon:h(g),circle:"",onClick:function(e){return R(r.request,l)}},null,8,["icon","onClick"])])])})),128))]})),_:1})):m("",!0),c(o,{label:"使用Response"},{default:s((function(){return[c(w,{modelValue:r.hasResponse,"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.hasResponse=e})},null,8,["modelValue"])]})),_:1}),r.hasResponse?(a(),f(o,{key:2,label:"Response"},{default:s((function(){return[(a(!0),u(p,null,d(r.response,(function(e,l){return a(),u("div",{key:l,class:"plug-row"},[i("span",null,[c(n,{modelValue:e.key,"onUpdate:modelValue":function(t){return e.key=t},placeholder:"key 必填"},null,8,["modelValue","onUpdate:modelValue"])]),i("span",null,[c(C,{modelValue:e.type,"onUpdate:modelValue":function(t){return e.type=t},class:"w-32",placeholder:"type 必填"},{default:s((function(){return[c(k,{label:"string",value:"string"}),c(k,{label:"int",value:"int"}),c(k,{label:"float32",value:"float32"}),c(k,{label:"float64",value:"float64"}),c(k,{label:"bool",value:"bool"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]),i("span",null,[c(n,{modelValue:e.desc,"onUpdate:modelValue":function(t){return e.desc=t},placeholder:"备注 必填"},null,8,["modelValue","onUpdate:modelValue"])]),i("span",null,[c(_,{icon:h(y),circle:"",onClick:t[7]||(t[7]=function(e){return N(r.response)})},null,8,["icon"])]),i("span",null,[c(_,{icon:h(g),circle:"",onClick:function(e){return R(r.response,l)}},null,8,["icon","onClick"])])])})),128))]})),_:1})):m("",!0),c(o,null,{default:s((function(){return[c(_,{type:"primary",onClick:O},{default:s((function(){return[v("创建")]})),_:1}),c(q,{class:"cursor-pointer ml-3",onClick:t[8]||(t[8]=function(e){return h(j)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=13&vd_source=f2640257c21e3b547a790461ed94875e")})},{default:s((function(){return[c(h(b))]})),_:1})]})),_:1})]})),_:1})])])}}};n("default",l(O,[["__scopeId","data-v-e64c8960"]]))}}}))}();
