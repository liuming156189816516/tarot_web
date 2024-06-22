/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{C as e,K as a,m as l,a5 as t,y as s,aP as r,a as o,F as i,aG as n,aA as u,az as c,o as v,h as f,w as m,ae as d,b as p,n as y,G as h,H as b,af as g,ao as w,bq as S,c as z,d as x,N as E,Y as _,a3 as L,aF as B,W as T,aU as H,Q as k,z as C,r as R,P as A,bb as N,B as W,I as M,e as j,ab as O,L as P}from"./087AC4D233B64EB0index.72fd2312.js";const q={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},K=Symbol("scrollbarContextKey"),Y=e({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean});var F=a(l({__name:"thumb",props:Y,setup(e){const a=e,l=t(K),z=s("scrollbar");l||r("Thumb","can not inject scrollbar context");const x=o(),E=o(),_=o({}),L=o(!1);let B=!1,T=!1,H=S?document.onselectstart:null;const k=i((()=>q[a.vertical?"vertical":"horizontal"])),C=i((()=>(({move:e,size:a,bar:l})=>({[l.size]:a,transform:"translate".concat(l.axis,"(").concat(e,"%)")}))({size:a.size,move:a.move,bar:k.value}))),R=i((()=>x.value[k.value.offset]**2/l.wrapElement[k.value.scrollSize]/a.ratio/E.value[k.value.offset])),A=e=>{var a;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(a=window.getSelection())||a.removeAllRanges(),W(e);const l=e.currentTarget;l&&(_.value[k.value.axis]=l[k.value.offset]-(e[k.value.client]-l.getBoundingClientRect()[k.value.direction]))},N=e=>{if(!E.value||!x.value||!l.wrapElement)return;const a=100*(Math.abs(e.target.getBoundingClientRect()[k.value.direction]-e[k.value.client])-E.value[k.value.offset]/2)*R.value/x.value[k.value.offset];l.wrapElement[k.value.scroll]=a*l.wrapElement[k.value.scrollSize]/100},W=e=>{e.stopImmediatePropagation(),B=!0,document.addEventListener("mousemove",M),document.addEventListener("mouseup",j),H=document.onselectstart,document.onselectstart=()=>!1},M=e=>{if(!x.value||!E.value)return;if(!1===B)return;const a=_.value[k.value.axis];if(!a)return;const t=100*(-1*(x.value.getBoundingClientRect()[k.value.direction]-e[k.value.client])-(E.value[k.value.offset]-a))*R.value/x.value[k.value.offset];l.wrapElement[k.value.scroll]=t*l.wrapElement[k.value.scrollSize]/100},j=()=>{B=!1,_.value[k.value.axis]=0,document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",j),O(),T&&(L.value=!1)};n((()=>{O(),document.removeEventListener("mouseup",j)}));const O=()=>{document.onselectstart!==H&&(document.onselectstart=H)};return u(c(l,"scrollbarElement"),"mousemove",(()=>{T=!1,L.value=!!a.size})),u(c(l,"scrollbarElement"),"mouseleave",(()=>{T=!0,L.value=B})),(e,a)=>(v(),f(w,{name:h(z).b("fade"),persisted:""},{default:m((()=>[d(p("div",{ref_key:"instance",ref:x,class:y([h(z).e("bar"),h(z).is(h(k).key)]),onMousedown:N},[p("div",{ref_key:"thumb",ref:E,class:y(h(z).e("thumb")),style:b(h(C)),onMousedown:A},null,38)],34),[[g,e.always||L.value]])])),_:1},8,["name"]))}}),[["__file","thumb.vue"]]);var G=a(l({__name:"bar",props:e({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),setup(e,{expose:a}){const l=e,s=t(K),r=o(0),i=o(0),n=o(""),u=o(""),c=o(1),f=o(1);return a({handleScroll:e=>{if(e){const a=e.offsetHeight-4,l=e.offsetWidth-4;i.value=100*e.scrollTop/a*c.value,r.value=100*e.scrollLeft/l*f.value}},update:()=>{const e=null==s?void 0:s.wrapElement;if(!e)return;const a=e.offsetHeight-4,t=e.offsetWidth-4,r=a**2/e.scrollHeight,o=t**2/e.scrollWidth,i=Math.max(r,l.minSize),v=Math.max(o,l.minSize);c.value=r/(a-r)/(i/(a-i)),f.value=o/(t-o)/(v/(t-v)),u.value=i+4<a?"".concat(i,"px"):"",n.value=v+4<t?"".concat(v,"px"):""}}),(e,a)=>(v(),z(E,null,[x(F,{move:r.value,ratio:f.value,size:n.value,always:e.always},null,8,["move","ratio","size","always"]),x(F,{move:i.value,ratio:c.value,size:u.value,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","bar.vue"]]);const I=e({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:_([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),X={scroll:({scrollTop:e,scrollLeft:a})=>[e,a].every(L)},D=l({name:"ElScrollbar"});const Q=P(a(l({...D,props:I,emits:X,setup(e,{expose:a,emit:l}){const t=e,r=s("scrollbar");let n,c;const d=o(),g=o(),w=o(),S=o(),x=i((()=>{const e={};return t.height&&(e.height=B(t.height)),t.maxHeight&&(e.maxHeight=B(t.maxHeight)),[t.wrapStyle,e]})),E=i((()=>[t.wrapClass,r.e("wrap"),{[r.em("wrap","hidden-default")]:!t.native}])),_=i((()=>[r.e("view"),t.viewClass])),P=()=>{var e;g.value&&(null==(e=S.value)||e.handleScroll(g.value),l("scroll",{scrollTop:g.value.scrollTop,scrollLeft:g.value.scrollLeft}))};const q=()=>{var e;null==(e=S.value)||e.update()};return T((()=>t.noresize),(e=>{e?(null==n||n(),null==c||c()):(({stop:n}=H(w,q)),c=u("resize",q))}),{immediate:!0}),T((()=>[t.maxHeight,t.height]),(()=>{t.native||k((()=>{var e;q(),g.value&&(null==(e=S.value)||e.handleScroll(g.value))}))})),C(K,R({scrollbarElement:d,wrapElement:g})),A((()=>{t.native||k((()=>{q()}))})),N((()=>q())),a({wrapRef:g,update:q,scrollTo:function(e,a){O(e)?g.value.scrollTo(e):L(e)&&L(a)&&g.value.scrollTo(e,a)},setScrollTop:e=>{L(e)&&(g.value.scrollTop=e)},setScrollLeft:e=>{L(e)&&(g.value.scrollLeft=e)},handleScroll:P}),(e,a)=>(v(),z("div",{ref_key:"scrollbarRef",ref:d,class:y(h(r).b())},[p("div",{ref_key:"wrapRef",ref:g,class:y(h(E)),style:b(h(x)),onScroll:P},[(v(),f(M(e.tag),{id:e.id,ref_key:"resizeRef",ref:w,class:y(h(_)),style:b(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:m((()=>[W(e.$slots,"default")])),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?j("v-if",!0):(v(),f(G,{key:0,ref_key:"barRef",ref:S,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}}),[["__file","scrollbar.vue"]]));export{Q as E};
