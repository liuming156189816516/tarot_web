/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{av as e,u as a,q as o,aq as t,a as r,W as s,R as l,aw as n,o as i,c,d as u,w as d,ao as m,N as p,O as v,G as f,h as B,e as h,H as x}from"./087AC4D233B64EB0index.72fd2312.js";/* empty css                                  *//* empty css                                *//* empty css                               */import g from"./087AC4D233B64EB0index.2cf9859e.js";import{E}from"./087AC4D233B64EB0index.a42228b2.js";import{E as k}from"./087AC4D233B64EB0index.ffab591b.js";import"./087AC4D233B64EB0menuItem.b81934d7.js";import"./087AC4D233B64EB0index.a0571a5c.js";import"./087AC4D233B64EB0isUndefined.d281c39a.js";import"./087AC4D233B64EB0asyncSubmenu.06ccfe88.js";import"./087AC4D233B64EB0index.dd70ec89.js";const b=Object.assign({name:"Aside"},{__name:"index",setup(b){const j=e(),y=a(),A=o(),C=t(),D=r({}),M=()=>{switch(A.sideMode){case"#fff":D.value={background:"#fff",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#333",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#333"};break;case"#191a23":D.value={background:"#191a23",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#fff",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#fff"}}};M();const T=r("");s((()=>j),(()=>{T.value=j.meta.activeName||j.name}),{deep:!0}),s((()=>A.sideMode),(()=>{M()}));const q=r(!1);(()=>{T.value=j.meta.activeName||j.name;document.body.clientWidth<1e3&&(q.value=!q.value),n.on("collapse",(e=>{q.value=e}))})(),l((()=>{n.off("collapse")}));const w=(e,a,o,t)=>{var r,s;const l={},n={};(null==(r=C.routeMap[e])?void 0:r.parameters)&&(null==(s=C.routeMap[e])||s.parameters.forEach((e=>{"query"===e.type?l[e.key]=e.value:n[e.key]=e.value}))),e!==j.name&&(e.indexOf("http://")>-1||e.indexOf("https://")>-1?window.open(e):y.push({name:e,query:l,params:n}))};return(e,a)=>{const o=E,t=k;return i(),c("div",{style:x({background:f(A).sideMode})},[u(t,{style:{height:"calc(100vh - 60px)"}},{default:d((()=>[u(m,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:d((()=>[u(o,{collapse:q.value,"collapse-transition":!1,"default-active":T.value,"background-color":D.value.background,"active-text-color":D.value.active,class:"el-menu-vertical","unique-opened":"",onSelect:w},{default:d((()=>[(i(!0),c(p,null,v(f(C).asyncRouters[0].children,(e=>(i(),c(p,null,[e.hidden?h("",!0):(i(),B(g,{key:e.name,"is-collapse":q.value,"router-info":e,theme:D.value},null,8,["is-collapse","router-info","theme"]))],64)))),256))])),_:1},8,["collapse","default-active","background-color","active-text-color"])])),_:1})])),_:1})],4)}}});export{b as default};
