/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
!function(){function e(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);i&&(l=l.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,l)}return t}function i(i){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?e(Object(n),!0).forEach((function(e){t(i,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))}))}return i}function t(e,i,t){var l;return(i="symbol"==typeof(l=function(e,i){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var l=t.call(e,i||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(i,"string"))?l:l+"")in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}System.register(["./087AC4D233B64EB0index-legacy.0859e6b1.js"],(function(e,l){"use strict";var n,c,a,r,o,s,h,u,d,p,v,f,w,_,b,x,g,y,m,k,I,j,O,P,S,V,T,z,C,B,E,A,D,N,F,K,$,G,H,J,L,Q,W,Y;return{setters:[function(e){n=e.C,c=e.d1,a=e.D,r=e.Y,o=e.a4,s=e.bd,h=e.ad,u=e.a3,d=e.a2,p=e.d2,v=e.m,f=e.bn,w=e.a8,_=e.y,b=e.a9,x=e.cl,g=e.F,y=e.a,m=e.aF,k=e.W,I=e.be,j=e.P,O=e.o,P=e.c,S=e.b,V=e.G,T=e.n,z=e.v,C=e.h,B=e.w,E=e.I,A=e.J,D=e.e,N=e.t,F=e.d,K=e.b8,$=e.B,G=e.H,H=e.aj,J=e.K,L=e.Q,Q=e.c_,W=e.aP,Y=e.L}],execute:function(){var l=document.createElement("style");l.textContent=".el-switch{--el-switch-on-color: var(--el-color-primary);--el-switch-off-color: var(--el-border-color);display:inline-flex;align-items:center;position:relative;font-size:14px;line-height:20px;height:32px;vertical-align:middle}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{transition:var(--el-transition-duration-fast);height:20px;display:inline-block;font-size:14px;font-weight:500;cursor:pointer;vertical-align:middle;color:var(--el-text-color-primary)}.el-switch__label.is-active{color:var(--el-color-primary)}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{line-height:1;font-size:14px;display:inline-block}.el-switch__label .el-icon{height:inherit}.el-switch__label .el-icon svg{vertical-align:middle}.el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}.el-switch__input:focus-visible~.el-switch__core{outline:2px solid var(--el-switch-on-color);outline-offset:1px}.el-switch__core{display:inline-flex;position:relative;align-items:center;min-width:40px;height:20px;border:1px solid var(--el-switch-border-color, var(--el-switch-off-color));outline:none;border-radius:10px;box-sizing:border-box;background:var(--el-switch-off-color);cursor:pointer;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration)}.el-switch__core .el-switch__inner{width:100%;transition:all var(--el-transition-duration);height:16px;display:flex;justify-content:center;align-items:center;overflow:hidden;padding:0 4px 0 18px}.el-switch__core .el-switch__inner .is-icon,.el-switch__core .el-switch__inner .is-text{font-size:12px;color:var(--el-color-white);-webkit-user-select:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.el-switch__core .el-switch__action{position:absolute;left:1px;border-radius:var(--el-border-radius-circle);transition:all var(--el-transition-duration);width:16px;height:16px;background-color:var(--el-color-white);display:flex;justify-content:center;align-items:center;color:var(--el-switch-off-color)}.el-switch.is-checked .el-switch__core{border-color:var(--el-switch-border-color, var(--el-switch-on-color));background-color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__action{left:calc(100% - 17px);color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__inner{padding:0 18px 0 4px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active{opacity:0}.el-switch--large{font-size:14px;line-height:24px;height:40px}.el-switch--large .el-switch__label{height:24px;font-size:14px}.el-switch--large .el-switch__label *{font-size:14px}.el-switch--large .el-switch__core{min-width:50px;height:24px;border-radius:12px}.el-switch--large .el-switch__core .el-switch__inner{height:20px;padding:0 6px 0 22px}.el-switch--large .el-switch__core .el-switch__action{width:20px;height:20px}.el-switch--large.is-checked .el-switch__core .el-switch__action{left:calc(100% - 21px)}.el-switch--large.is-checked .el-switch__core .el-switch__inner{padding:0 22px 0 6px}.el-switch--small{font-size:12px;line-height:16px;height:24px}.el-switch--small .el-switch__label{height:16px;font-size:12px}.el-switch--small .el-switch__label *{font-size:12px}.el-switch--small .el-switch__core{min-width:30px;height:16px;border-radius:8px}.el-switch--small .el-switch__core .el-switch__inner{height:12px;padding:0 2px 0 14px}.el-switch--small .el-switch__core .el-switch__action{width:12px;height:12px}.el-switch--small.is-checked .el-switch__core .el-switch__action{left:calc(100% - 13px)}.el-switch--small.is-checked .el-switch__core .el-switch__inner{padding:0 14px 0 2px}\n",document.head.appendChild(l);var q=n({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:c},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:a},activeActionIcon:{type:a},activeIcon:{type:a},inactiveIcon:{type:a},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:r(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0}}),M=t(t(t({},o,(function(e){return s(e)||h(e)||u(e)})),d,(function(e){return s(e)||h(e)||u(e)})),p,(function(e){return s(e)||h(e)||u(e)})),R=["onClick"],U=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],X=["aria-hidden"],Z=["aria-hidden"],ee=["aria-hidden"],ie="ElSwitch",te=v({name:ie}),le=v(i(i({},te),{},{props:q,emits:M,setup:function(e,i){var t=i.expose,l=i.emit,n=e,c=f().formItem,a=w(),r=_("switch"),h=b(n,{formItemContext:c}).inputId,u=x(g((function(){return n.loading}))),v=y(!1!==n.modelValue),J=y(),Y=y(),q=g((function(){return[r.b(),r.m(a.value),r.is("disabled",u.value),r.is("checked",ce.value)]})),M=g((function(){return[r.e("label"),r.em("label","left"),r.is("active",!ce.value)]})),te=g((function(){return[r.e("label"),r.em("label","right"),r.is("active",ce.value)]})),le=g((function(){return{width:m(n.width)}}));k((function(){return n.modelValue}),(function(){v.value=!0}));var ne=g((function(){return!!v.value&&n.modelValue})),ce=g((function(){return ne.value===n.activeValue}));[n.activeValue,n.inactiveValue].includes(ne.value)||(l(o,n.inactiveValue),l(d,n.inactiveValue),l(p,n.inactiveValue)),k(ce,(function(e){var i;J.value.checked=e,n.validateEvent&&(null==(i=null==c?void 0:c.validate)||i.call(c,"change").catch((function(e){return I()})))}));var ae=function(){var e=ce.value?n.inactiveValue:n.activeValue;l(o,e),l(d,e),l(p,e),L((function(){J.value.checked=ce.value}))},re=function(){if(!u.value){var e=n.beforeChange;if(e){var i=e();[Q(i),s(i)].includes(!0)||W(ie,"beforeChange must return type `Promise<boolean>` or `boolean`"),Q(i)?i.then((function(e){e&&ae()})).catch((function(e){})):i&&ae()}else ae()}};return j((function(){J.value.checked=ce.value})),t({focus:function(){var e,i;null==(i=null==(e=J.value)?void 0:e.focus)||i.call(e)},checked:ce}),function(e,i){return O(),P("div",{class:T(V(q)),onClick:H(re,["prevent"])},[S("input",{id:V(h),ref_key:"input",ref:J,class:T(V(r).e("input")),type:"checkbox",role:"switch","aria-checked":V(ce),"aria-disabled":V(u),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:V(u),tabindex:e.tabindex,onChange:ae,onKeydown:z(re,["enter"])},null,42,U),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?D("v-if",!0):(O(),P("span",{key:0,class:T(V(M))},[e.inactiveIcon?(O(),C(V(A),{key:0},{default:B((function(){return[(O(),C(E(e.inactiveIcon)))]})),_:1})):D("v-if",!0),!e.inactiveIcon&&e.inactiveText?(O(),P("span",{key:1,"aria-hidden":V(ce)},N(e.inactiveText),9,X)):D("v-if",!0)],2)),S("span",{ref_key:"core",ref:Y,class:T(V(r).e("core")),style:G(V(le))},[e.inlinePrompt?(O(),P("div",{key:0,class:T(V(r).e("inner"))},[e.activeIcon||e.inactiveIcon?(O(),C(V(A),{key:0,class:T(V(r).is("icon"))},{default:B((function(){return[(O(),C(E(V(ce)?e.activeIcon:e.inactiveIcon)))]})),_:1},8,["class"])):e.activeText||e.inactiveText?(O(),P("span",{key:1,class:T(V(r).is("text")),"aria-hidden":!V(ce)},N(V(ce)?e.activeText:e.inactiveText),11,Z)):D("v-if",!0)],2)):D("v-if",!0),S("div",{class:T(V(r).e("action"))},[e.loading?(O(),C(V(A),{key:0,class:T(V(r).is("loading"))},{default:B((function(){return[F(V(K))]})),_:1},8,["class"])):V(ce)?$(e.$slots,"active-action",{key:1},(function(){return[e.activeActionIcon?(O(),C(V(A),{key:0},{default:B((function(){return[(O(),C(E(e.activeActionIcon)))]})),_:1})):D("v-if",!0)]})):V(ce)?D("v-if",!0):$(e.$slots,"inactive-action",{key:2},(function(){return[e.inactiveActionIcon?(O(),C(V(A),{key:0},{default:B((function(){return[(O(),C(E(e.inactiveActionIcon)))]})),_:1})):D("v-if",!0)]}))],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?D("v-if",!0):(O(),P("span",{key:1,class:T(V(te))},[e.activeIcon?(O(),C(V(A),{key:0},{default:B((function(){return[(O(),C(E(e.activeIcon)))]})),_:1})):D("v-if",!0),!e.activeIcon&&e.activeText?(O(),P("span",{key:1,"aria-hidden":!V(ce)},N(e.activeText),9,ee)):D("v-if",!0)],2))],10,R)}}}));e("E",Y(J(le,[["__file","switch.vue"]])))}}}))}();
