/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{C as e,bc as s,a3 as a,D as r,Y as t,m as c,y as i,a as l,F as n,ad as p,aF as u,W as o,o as v,c as m,H as d,G as f,h as y,w as g,I as S,J as h,B as I,n as B,K as k,L as w,_ as E,q as _,N as C,e as z}from"./087AC4D233B64EB0index.72fd2312.js";/* empty css                                     */import{E as A}from"./087AC4D233B64EB0index.708655ee.js";const b=e({size:{type:[Number,String],values:s,default:"",validator:e=>a(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:r},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:t(String),default:"cover"}}),j={error:e=>e instanceof Event},D=["src","alt","srcset"],q=c({name:"ElAvatar"});const x=w(k(c({...q,props:b,emits:j,setup(e,{emit:s}){const r=e,t=i("avatar"),c=l(!1),k=n((()=>{const{size:e,icon:s,shape:a}=r,c=[t.b()];return p(e)&&c.push(t.m(e)),s&&c.push(t.m("icon")),a&&c.push(t.m(a)),c})),w=n((()=>{const{size:e}=r;return a(e)?t.cssVarBlock({size:u(e)||""}):void 0})),E=n((()=>({objectFit:r.fit})));function _(e){c.value=!0,s("error",e)}return o((()=>r.src),(()=>c.value=!1)),(e,s)=>(v(),m("span",{class:B(f(k)),style:d(f(w))},[!e.src&&!e.srcSet||c.value?e.icon?(v(),y(f(h),{key:1},{default:g((()=>[(v(),y(S(e.icon)))])),_:1})):I(e.$slots,"default",{key:2}):(v(),m("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:d(f(E)),onError:_},null,44,D))],6))}}),[["__file","avatar.vue"]])),T=""+new URL("087AC4D233B64EB0noBody.745c3d16.png",import.meta.url).href,F={class:"headerAvatar"},K=["src"],L=["src"],N=E(Object.assign({name:"CustomPic"},{__name:"index",props:{picType:{type:String,required:!1,default:"avatar"},picSrc:{type:String,required:!1,default:""},preview:{type:Boolean,default:!1}},setup(e){const s=e,a=l("/api/"),r=l(T),t=_(),c=n((()=>""===s.picSrc?""!==t.userInfo.headerImg&&"http"===t.userInfo.headerImg.slice(0,4)?t.userInfo.headerImg:a.value+t.userInfo.headerImg:""!==s.picSrc&&"http"===s.picSrc.slice(0,4)?s.picSrc:a.value+s.picSrc)),i=n((()=>s.picSrc&&"http"!==s.picSrc.slice(0,4)?a.value+s.picSrc:s.picSrc)),p=n((()=>s.preview?[i.value]:[]));return(s,a)=>{const l=x,n=A;return v(),m("span",F,["avatar"===e.picType?(v(),m(C,{key:0},[f(t).userInfo.headerImg?(v(),y(l,{key:0,size:30,src:c.value},null,8,["src"])):(v(),y(l,{key:1,size:30,src:r.value},null,8,["src"]))],64)):z("",!0),"img"===e.picType?(v(),m(C,{key:1},[f(t).userInfo.headerImg?(v(),m("img",{key:0,src:c.value,class:"avatar"},null,8,K)):(v(),m("img",{key:1,src:r.value,class:"avatar"},null,8,L))],64)):z("",!0),"file"===e.picType?(v(),y(n,{key:2,src:i.value,class:"file","preview-src-list":p.value,"preview-teleported":!0},null,8,["src","preview-src-list"])):z("",!0)])}}}),[["__scopeId","data-v-a9ea8f7c"]]);export{N as C};
