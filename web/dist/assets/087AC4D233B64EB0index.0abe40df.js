/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{s as e,_ as a,u as l,r as s,a as t,o,c as d,b as r,n as i,d as m,w as p,e as b,f as n,E as c,g as u,h,p as g,i as y,j as f,k as B,l as w}from"./087AC4D233B64EB0index.72fd2312.js";/* empty css                                  *//* empty css                              *//* empty css                            *//* empty css                               *//* empty css                                  *//* empty css                               *//* empty css                               */import{E as v,a as j}from"./087AC4D233B64EB0index.7b396154.js";import{E as q,a as C}from"./087AC4D233B64EB0index.3d51996d.js";import"./087AC4D233B64EB0castArray.673ea73c.js";import"./087AC4D233B64EB0_baseClone.503fbc91.js";import"./087AC4D233B64EB0_Uint8Array.d3e78e14.js";import"./087AC4D233B64EB0_initCloneObject.253b0cea.js";import"./087AC4D233B64EB0index.a0571a5c.js";import"./087AC4D233B64EB0isUndefined.d281c39a.js";import"./087AC4D233B64EB0index.ffab591b.js";import"./087AC4D233B64EB0index.ea000fb0.js";import"./087AC4D233B64EB0strings.ee229cfb.js";import"./087AC4D233B64EB0isEqual.add17071.js";import"./087AC4D233B64EB0debounce.1e721c0b.js";import"./087AC4D233B64EB0_baseIteratee.e71013e5.js";import"./087AC4D233B64EB0hasIn.391c448e.js";const E=""+new URL("087AC4D233B64EB0login_right_banner.f7acb81b.jpg",import.meta.url).href,x=e=>(g("data-v-700abcda"),e=e(),y(),e),A={class:"rounded-lg flex items-center justify-evenly w-full h-full relative bg-white md:w-screen md:h-screen md:bg-[#194bfb] overflow-hidden"},k={class:"rounded-md w-full h-full flex items-center justify-center overflow-hidden"},_=x((()=>r("div",{class:"oblique h-[130%] w-3/5 bg-white transform -rotate-12 absolute -ml-80"},null,-1))),D={class:"text-lg"},V=n('<div class="font-sans text-4xl font-bold text-center mb-4" data-v-700abcda>GIN-VUE-ADMIN</div><p class="text-gray-600 mb-2" data-v-700abcda>初始化须知</p><p class="text-gray-600 mb-2" data-v-700abcda>1.您需有用一定的VUE和GOLANG基础</p><p class="text-gray-600 mb-2" data-v-700abcda>2.请您确认是否已经阅读过<a class="text-blue-600 font-bold" href="https://www.gin-vue-admin.com" target="_blank" data-v-700abcda>官方文档</a> <a class="text-blue-600 font-bold" href="https://www.bilibili.com/video/BV1kv4y1g7nT?p=2" target="_blank" data-v-700abcda>初始化视频</a></p><p class="text-gray-600 mb-2" data-v-700abcda>3.请您确认是否了解后续的配置流程</p><p class="text-gray-600 mb-2" data-v-700abcda>4.如果您使用mysql数据库，请确认数据库引擎为<span class="text-red-600 font-bold text-3xl ml-2" data-v-700abcda>innoDB</span></p><p class="text-gray-600 mb-2" data-v-700abcda>注：开发组不为文档中书写过的内容提供无偿服务</p>',7),N={class:"flex items-center justify-between mt-8"},T={style:{"text-align":"right"}},U=x((()=>r("div",{class:"hidden md:block w-1/2 h-full float-right bg-[#194bfb]"},[r("img",{class:"h-full",src:E,alt:"banner"})],-1))),P=a(Object.assign({name:"Init"},{__name:"index",setup(a){const n=l(),g=s({showReadme:!1,showForm:!1}),y=()=>{g.showReadme=!1,setTimeout((()=>{g.showForm=!0}),20)},E=()=>{window.open("https://www.gin-vue-admin.com/guide/start-quickly/env.html")},x=t(!1),P=s({dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva",dbPath:""}),O=e=>{switch(e){case"mysql":default:Object.assign(P,{dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva",dbPath:""});break;case"pgsql":Object.assign(P,{dbType:"pgsql",host:"127.0.0.1",port:"5432",userName:"postgres",password:"",dbName:"gva",dbPath:""});break;case"oracle":Object.assign(P,{dbType:"oracle",host:"127.0.0.1",port:"1521",userName:"oracle",password:"",dbName:"gva",dbPath:""});break;case"mssql":Object.assign(P,{dbType:"mssql",host:"127.0.0.1",port:"1433",userName:"mssql",password:"",dbName:"gva",dbPath:""});break;case"sqlite":Object.assign(P,{dbType:"sqlite",host:"",port:"",userName:"",password:"",dbName:"gva",dbPath:""})}},I=async()=>{const a=f.service({lock:!0,text:"正在初始化数据库，请稍候",spinner:"loading",background:"rgba(0, 0, 0, 0.7)"});try{const s=await(l=P,e({url:"/init/initdb",method:"post",data:l,donNotShowLoading:!0}));0===s.code&&(x.value=!0,B({type:"success",message:s.msg}),n.push({name:"Login"})),a.close()}catch(s){a.close()}var l};return(e,a)=>{const l=c,s=q,t=C,n=j,f=w,B=v;return o(),d("div",A,[r("div",k,[_,g.showForm?b("",!0):(o(),d("div",{key:0,class:i([g.showReadme?"slide-out-right":"slide-in-fwd-top"])},[r("div",D,[V,r("p",N,[m(l,{type:"primary",size:"large",onClick:E},{default:p((()=>[u(" 阅读文档 ")])),_:1}),m(l,{type:"primary",size:"large",onClick:y},{default:p((()=>[u(" 我已确认 ")])),_:1})])])],2)),g.showForm?(o(),d("div",{key:1,class:i([[g.showForm?"slide-in-left":"slide-out-right"],"w-96"])},[m(B,{ref:"formRef",model:P,"label-width":"100px",size:"large"},{default:p((()=>[m(n,{label:"数据库类型"},{default:p((()=>[m(t,{modelValue:P.dbType,"onUpdate:modelValue":a[0]||(a[0]=e=>P.dbType=e),placeholder:"请选择",class:"w-full",onChange:O},{default:p((()=>[m(s,{key:"mysql",label:"mysql",value:"mysql"}),m(s,{key:"pgsql",label:"pgsql",value:"pgsql"}),m(s,{key:"oracle",label:"oracle",value:"oracle"}),m(s,{key:"mssql",label:"mssql",value:"mssql"}),m(s,{key:"sqlite",label:"sqlite",value:"sqlite"})])),_:1},8,["modelValue"])])),_:1}),"sqlite"!==P.dbType?(o(),h(n,{key:0,label:"host"},{default:p((()=>[m(f,{modelValue:P.host,"onUpdate:modelValue":a[1]||(a[1]=e=>P.host=e),placeholder:"请输入数据库链接"},null,8,["modelValue"])])),_:1})):b("",!0),"sqlite"!==P.dbType?(o(),h(n,{key:1,label:"port"},{default:p((()=>[m(f,{modelValue:P.port,"onUpdate:modelValue":a[2]||(a[2]=e=>P.port=e),placeholder:"请输入数据库端口"},null,8,["modelValue"])])),_:1})):b("",!0),"sqlite"!==P.dbType?(o(),h(n,{key:2,label:"userName"},{default:p((()=>[m(f,{modelValue:P.userName,"onUpdate:modelValue":a[3]||(a[3]=e=>P.userName=e),placeholder:"请输入数据库用户名"},null,8,["modelValue"])])),_:1})):b("",!0),"sqlite"!==P.dbType?(o(),h(n,{key:3,label:"password"},{default:p((()=>[m(f,{modelValue:P.password,"onUpdate:modelValue":a[4]||(a[4]=e=>P.password=e),placeholder:"请输入数据库密码（没有则为空）"},null,8,["modelValue"])])),_:1})):b("",!0),m(n,{label:"dbName"},{default:p((()=>[m(f,{modelValue:P.dbName,"onUpdate:modelValue":a[5]||(a[5]=e=>P.dbName=e),placeholder:"请输入数据库名称"},null,8,["modelValue"])])),_:1}),"sqlite"===P.dbType?(o(),h(n,{key:4,label:"dbPath"},{default:p((()=>[m(f,{modelValue:P.dbPath,"onUpdate:modelValue":a[6]||(a[6]=e=>P.dbPath=e),placeholder:"请输入sqlite数据库文件存放路径"},null,8,["modelValue"])])),_:1})):b("",!0),m(n,null,{default:p((()=>[r("div",T,[m(l,{type:"primary",onClick:I},{default:p((()=>[u("立即初始化")])),_:1})])])),_:1})])),_:1},8,["model"])],2)):b("",!0)]),U])}}}),[["__scopeId","data-v-700abcda"]]);export{P as default};
