/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{C as e,Y as t,m as a,y as s,F as r,cD as n,ct as o,bu as c,cu as i,bQ as l,ba as u,ad as p,o as d,c as f,n as h,G as y,b as v,H as b,B as g,t as k,e as x,h as m,w,I as B,J as D,K as F,L as I}from"./087AC4D233B64EB0index.72fd2312.js";const N=e({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:t(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:t([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:t(Function),default:e=>"".concat(e,"%")}}),S=["aria-valuenow"],T={viewBox:"0 0 100 100"},L=["d","stroke","stroke-linecap","stroke-width"],W=["d","stroke","opacity","stroke-linecap","stroke-width"],$={key:0},C=a({name:"ElProgress"});const E=I(F(a({...C,props:N,setup(e){const t=e,a={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},F=s("progress"),I=r((()=>({width:"".concat(t.percentage,"%"),animationDuration:"".concat(t.duration,"s"),backgroundColor:K(t.percentage)}))),N=r((()=>(t.strokeWidth/t.width*100).toFixed(1))),C=r((()=>["circle","dashboard"].includes(t.type)?Number.parseInt("".concat(50-Number.parseFloat(N.value)/2),10):0)),E=r((()=>{const e=C.value,a="dashboard"===t.type;return"\n          M 50 50\n          m 0 ".concat(a?"":"-").concat(e,"\n          a ").concat(e," ").concat(e," 0 1 1 0 ").concat(a?"-":"").concat(2*e,"\n          a ").concat(e," ").concat(e," 0 1 1 0 ").concat(a?"":"-").concat(2*e,"\n          ")})),_=r((()=>2*Math.PI*C.value)),A=r((()=>"dashboard"===t.type?.75:1)),M=r((()=>{const e=-1*_.value*(1-A.value)/2;return"".concat(e,"px")})),P=r((()=>({strokeDasharray:"".concat(_.value*A.value,"px, ").concat(_.value,"px"),strokeDashoffset:M.value}))),j=r((()=>({strokeDasharray:"".concat(_.value*A.value*(t.percentage/100),"px, ").concat(_.value,"px"),strokeDashoffset:M.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"}))),z=r((()=>{let e;return e=t.color?K(t.percentage):a[t.status]||a.default,e})),G=r((()=>"warning"===t.status?n:"line"===t.type?"success"===t.status?o:c:"success"===t.status?i:l)),H=r((()=>"line"===t.type?12+.4*t.strokeWidth:.111111*t.width+2)),J=r((()=>t.format(t.percentage)));const K=e=>{var a;const{color:s}=t;if(u(s))return s(e);if(p(s))return s;{const t=function(e){const t=100/e.length;return e.map(((e,a)=>p(e)?{color:e,percentage:(a+1)*t}:e)).sort(((e,t)=>e.percentage-t.percentage))}(s);for(const a of t)if(a.percentage>e)return a.color;return null==(a=t[t.length-1])?void 0:a.color}};return(e,t)=>(d(),f("div",{class:h([y(F).b(),y(F).m(e.type),y(F).is(e.status),{[y(F).m("without-text")]:!e.showText,[y(F).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},["line"===e.type?(d(),f("div",{key:0,class:h(y(F).b("bar"))},[v("div",{class:h(y(F).be("bar","outer")),style:b({height:"".concat(e.strokeWidth,"px")})},[v("div",{class:h([y(F).be("bar","inner"),{[y(F).bem("bar","inner","indeterminate")]:e.indeterminate},{[y(F).bem("bar","inner","striped")]:e.striped},{[y(F).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:b(y(I))},[(e.showText||e.$slots.default)&&e.textInside?(d(),f("div",{key:0,class:h(y(F).be("bar","innerText"))},[g(e.$slots,"default",{percentage:e.percentage},(()=>[v("span",null,k(y(J)),1)]))],2)):x("v-if",!0)],6)],6)],2)):(d(),f("div",{key:1,class:h(y(F).b("circle")),style:b({height:"".concat(e.width,"px"),width:"".concat(e.width,"px")})},[(d(),f("svg",T,[v("path",{class:h(y(F).be("circle","track")),d:y(E),stroke:"var(".concat(y(F).cssVarName("fill-color-light"),", #e5e9f2)"),"stroke-linecap":e.strokeLinecap,"stroke-width":y(N),fill:"none",style:b(y(P))},null,14,L),v("path",{class:h(y(F).be("circle","path")),d:y(E),stroke:y(z),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":y(N),style:b(y(j))},null,14,W)]))],6)),!e.showText&&!e.$slots.default||e.textInside?x("v-if",!0):(d(),f("div",{key:2,class:h(y(F).e("text")),style:b({fontSize:"".concat(y(H),"px")})},[g(e.$slots,"default",{percentage:e.percentage},(()=>[e.status?(d(),m(y(D),{key:1},{default:w((()=>[(d(),m(B(y(G))))])),_:1})):(d(),f("span",$,k(y(J)),1))]))],6))],10,S))}}),[["__file","progress.vue"]]));export{E};