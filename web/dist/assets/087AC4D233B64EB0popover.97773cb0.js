/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{b as e,u as t,E as o}from"./087AC4D233B64EB0index.a0571a5c.js";import{C as a,bd as r,m as s,F as p,y as i,a as n,G as l,aF as d,o as f,h as c,w as b,c as u,n as v,t as m,e as h,B as g,g as w,aI as y,K as B,cn as C,L as x}from"./087AC4D233B64EB0index.72fd2312.js";import{d as A}from"./087AC4D233B64EB0dropdown.745c751b.js";const S=a({trigger:e.trigger,placement:A.placement,disabled:e.disabled,visible:t.visible,transition:t.transition,popperOptions:A.popperOptions,tabindex:A.tabindex,content:t.content,popperStyle:t.popperStyle,popperClass:t.popperClass,enterable:{...t.enterable,default:!0},effect:{...t.effect,default:"light"},teleported:t.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),E={"update:visible":e=>r(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},N=s({name:"ElPopover"}),R=s({...N,props:S,emits:E,setup(e,{expose:t,emit:a}){const r=e,s=p((()=>r["onUpdate:visible"])),B=i("popover"),C=n(),x=p((()=>{var e;return null==(e=l(C))?void 0:e.popperRef})),A=p((()=>[{width:d(r.width)},r.popperStyle])),S=p((()=>[B.b(),r.popperClass,{[B.m("plain")]:!!r.content}])),E=p((()=>r.transition==="".concat(B.namespace.value,"-fade-in-linear"))),N=()=>{a("before-enter")},R=()=>{a("before-leave")},U=()=>{a("after-enter")},$=()=>{a("update:visible",!1),a("after-leave")};return t({popperRef:x,hide:()=>{var e;null==(e=C.value)||e.hide()}}),(e,t)=>(f(),c(l(o),y({ref_key:"tooltipRef",ref:C},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":l(S),"popper-style":l(A),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":l(E),"onUpdate:visible":l(s),onBeforeShow:N,onBeforeHide:R,onShow:U,onHide:$}),{content:b((()=>[e.title?(f(),u("div",{key:0,class:v(l(B).e("title")),role:"title"},m(e.title),3)):h("v-if",!0),g(e.$slots,"default",{},(()=>[w(m(e.content),1)]))])),default:b((()=>[e.$slots.reference?g(e.$slots,"reference",{key:0}):h("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});const U=(e,t)=>{const o=t.arg||t.value,a=null==o?void 0:o.popperRef;a&&(a.triggerRef=e)};const $=x(B(R,[["__file","popover.vue"]]),{directive:C({mounted(e,t){U(e,t)},updated(e,t){U(e,t)}},"popover")});export{$ as E};