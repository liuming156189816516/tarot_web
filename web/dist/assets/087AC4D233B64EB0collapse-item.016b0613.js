/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{C as e,Y as a,Z as s,a4 as l,a2 as t,a3 as i,ad as o,aa as n,a as c,W as d,z as r,y as u,F as m,m as p,o as v,c as b,B as f,n as C,G as h,K,a5 as y,bE as A,b as x,g,t as B,d as N,w as E,aQ as I,J as k,v as _,aj as w,ae as j,af as F,L as H,M as S}from"./087AC4D233B64EB0index.72fd2312.js";import{c as V}from"./087AC4D233B64EB0castArray.673ea73c.js";import{_ as $}from"./087AC4D233B64EB0index.dd70ec89.js";const D=e=>i(e)||o(e)||n(e),W=e({accordion:Boolean,modelValue:{type:a([Array,String,Number]),default:()=>s([])}}),M={[l]:D,[t]:D},z=Symbol("collapseContextKey"),G=p({name:"ElCollapse"});var J=K(p({...G,props:W,emits:M,setup(e,{expose:a,emit:s}){const i=e,{activeNames:o,setActiveNames:n}=((e,a)=>{const s=c(V(e.modelValue)),i=i=>{s.value=i;const o=e.accordion?s.value[0]:s.value;a(l,o),a(t,o)};return d((()=>e.modelValue),(()=>s.value=V(e.modelValue)),{deep:!0}),r(z,{activeNames:s,handleItemClick:a=>{if(e.accordion)i([s.value[0]===a?"":a]);else{const e=[...s.value],l=e.indexOf(a);l>-1?e.splice(l,1):e.push(a),i(e)}}}),{activeNames:s,setActiveNames:i}})(i,s),{rootKls:p}=(()=>{const e=u("collapse");return{rootKls:m((()=>e.b()))}})();return a({activeNames:o,setActiveNames:n}),(e,a)=>(v(),b("div",{class:C(h(p))},[f(e.$slots,"default")],2))}}),[["__file","collapse.vue"]]);const L=e({title:{type:String,default:""},name:{type:a([String,Number]),default:void 0},disabled:Boolean}),O=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],Q=["id","aria-hidden","aria-labelledby"],T=p({name:"ElCollapseItem"});var Y=K(p({...T,props:L,setup(e,{expose:a}){const s=e,{focusing:l,id:t,isActive:i,handleFocus:o,handleHeaderClick:n,handleEnterClick:d}=(e=>{const a=y(z),{namespace:s}=u("collapse"),l=c(!1),t=c(!1),i=A(),o=m((()=>i.current++)),n=m((()=>{var a;return null!=(a=e.name)?a:"".concat(s.value,"-id-").concat(i.prefix,"-").concat(h(o))})),d=m((()=>null==a?void 0:a.activeNames.value.includes(h(n))));return{focusing:l,id:o,isActive:d,handleFocus:()=>{setTimeout((()=>{t.value?t.value=!1:l.value=!0}),50)},handleHeaderClick:()=>{e.disabled||(null==a||a.handleItemClick(h(n)),l.value=!1,t.value=!0)},handleEnterClick:()=>{null==a||a.handleItemClick(h(n))}}})(s),{arrowKls:r,headKls:p,rootKls:K,itemWrapperKls:H,itemContentKls:S,scopedContentId:V,scopedHeadId:D}=((e,{focusing:a,isActive:s,id:l})=>{const t=u("collapse"),i=m((()=>[t.b("item"),t.is("active",h(s)),t.is("disabled",e.disabled)])),o=m((()=>[t.be("item","header"),t.is("active",h(s)),{focusing:h(a)&&!e.disabled}]));return{arrowKls:m((()=>[t.be("item","arrow"),t.is("active",h(s))])),headKls:o,rootKls:i,itemWrapperKls:m((()=>t.be("item","wrap"))),itemContentKls:m((()=>t.be("item","content"))),scopedContentId:m((()=>t.b("content-".concat(h(l))))),scopedHeadId:m((()=>t.b("head-".concat(h(l)))))}})(s,{focusing:l,isActive:i,id:t});return a({isActive:i}),(e,a)=>(v(),b("div",{class:C(h(K))},[x("button",{id:h(D),class:C(h(p)),"aria-expanded":h(i),"aria-controls":h(V),"aria-describedby":h(V),tabindex:e.disabled?-1:0,type:"button",onClick:a[0]||(a[0]=(...e)=>h(n)&&h(n)(...e)),onKeydown:a[1]||(a[1]=_(w(((...e)=>h(d)&&h(d)(...e)),["stop","prevent"]),["space","enter"])),onFocus:a[2]||(a[2]=(...e)=>h(o)&&h(o)(...e)),onBlur:a[3]||(a[3]=e=>l.value=!1)},[f(e.$slots,"title",{},(()=>[g(B(e.title),1)])),N(h(k),{class:C(h(r))},{default:E((()=>[N(h(I))])),_:1},8,["class"])],42,O),N(h($),null,{default:E((()=>[j(x("div",{id:h(V),role:"region",class:C(h(H)),"aria-hidden":!h(i),"aria-labelledby":h(D)},[x("div",{class:C(h(S))},[f(e.$slots,"default")],2)],10,Q),[[F,h(i)]])])),_:3})],2))}}),[["__file","collapse-item.vue"]]);const Z=H(J,{CollapseItem:Y}),q=S(Y);export{q as E,Z as a};