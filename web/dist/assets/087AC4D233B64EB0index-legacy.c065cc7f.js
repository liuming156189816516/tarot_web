/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),u=new D(n||[]);return i(a,"_invoke",{value:O(t,r,u)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var p="suspendedStart",y="suspendedYield",d="executing",v="completed",g={};function m(){}function w(){}function b(){}var x={};f(x,u,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(P([])));_&&_!==n&&o.call(_,u)&&(x=_);var j=b.prototype=m.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function B(t,e){function r(n,i,a,u){var c=h(t[n],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var n;i(this,"_invoke",{value:function(t,o){function i(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(i,i):i()}})}function O(t,r,n){var o=p;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=k(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=h(t,r,n);if("normal"===l.type){if(o=n.done?v:y,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return w.prototype=b,i(j,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},L(B.prototype),f(B.prototype,c,(function(){return this})),r.AsyncIterator=B,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new B(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),f(j,l,"Generator"),f(j,u,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=P,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}function e(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.0859e6b1.js","./087AC4D233B64EB0form-item-legacy.95fc83a6.js","./087AC4D233B64EB0button-legacy.6621f510.js","./087AC4D233B64EB0input-legacy.12c190df.js","./087AC4D233B64EB0warningBar-legacy.9da89246.js","./087AC4D233B64EB0index-legacy.ab5d2f61.js","./087AC4D233B64EB0castArray-legacy.0b6694b7.js","./087AC4D233B64EB0_baseClone-legacy.c15be53c.js","./087AC4D233B64EB0_Uint8Array-legacy.44a7ea11.js","./087AC4D233B64EB0_initCloneObject-legacy.d38c7bf0.js"],(function(e,n){"use strict";var o,i,a,u,c,l,f,s,h,p,y,d,v,g,m;return{setters:[function(t){o=t.s,i=t.a,a=t.r,u=t.o,c=t.c,l=t.d,f=t.b,s=t.w,h=t.g,p=t.k,y=t.l,d=t.E},null,null,null,function(t){v=t._},function(t){g=t.a,m=t.E},null,null,null,null],execute:function(){var n=function(t){return o({url:"/email/emailTest",method:"post",data:t})},w={class:"gva-form-box"};e("default",Object.assign({name:"Email"},{__name:"index",setup:function(e){var o=i(null),b=a({to:"",subject:"",body:""}),x=function(){var e=r(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:0===t.sent.code&&p.success("发送成功");case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=r(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:0===t.sent.code&&p.success("发送成功,请查收");case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(t,e){var r=y,n=g,i=d,a=m;return u(),c("div",null,[l(v,{title:"需要提前配置email配置文件，为防止不必要的垃圾邮件，在线体验功能不开放此功能体验。"}),f("div",w,[l(a,{ref_key:"emailForm",ref:o,"label-position":"right","label-width":"80px",model:b},{default:s((function(){return[l(n,{label:"目标邮箱"},{default:s((function(){return[l(r,{modelValue:b.to,"onUpdate:modelValue":e[0]||(e[0]=function(t){return b.to=t})},null,8,["modelValue"])]})),_:1}),l(n,{label:"邮件"},{default:s((function(){return[l(r,{modelValue:b.subject,"onUpdate:modelValue":e[1]||(e[1]=function(t){return b.subject=t})},null,8,["modelValue"])]})),_:1}),l(n,{label:"邮件内容"},{default:s((function(){return[l(r,{modelValue:b.body,"onUpdate:modelValue":e[2]||(e[2]=function(t){return b.body=t}),type:"textarea"},null,8,["modelValue"])]})),_:1}),l(n,null,{default:s((function(){return[l(i,{onClick:x},{default:s((function(){return[h("发送测试邮件")]})),_:1}),l(i,{onClick:E},{default:s((function(){return[h("发送邮件")]})),_:1})]})),_:1})]})),_:1},8,["model"])])])}}}))}}}))}();
