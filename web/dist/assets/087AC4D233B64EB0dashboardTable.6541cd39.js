/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{C as a}from"./087AC4D233B64EB0github.805102d5.js";import{f as s}from"./087AC4D233B64EB0date.225eaf4f.js";/* empty css                                                                                       */import{_ as e,a as t,o,c as l,b as m,N as d,O as i,n as c,t as f,p as r,i as n}from"./087AC4D233B64EB0index.72fd2312.js";const v={class:"commit-table"},p=(a=>(r("data-v-c1fd859a"),a=a(),n(),a))((()=>m("div",{class:"commit-table-title"}," 更新日志 ",-1))),u={class:"log"},_={class:"flex-1 flex key-box"},b={class:"flex-5 flex message"},g={class:"flex-3 flex form"},h=e(Object.assign({name:"DashboardTable"},{__name:"dashboardTable",setup(e){const r=t(!0),n=t([]);return a(0).then((({data:a})=>{r.value=!1,a.forEach(((a,e)=>{a.commit.message&&e<10&&n.value.push({from:s(a.commit.author.date,"yyyy-MM-dd"),title:a.commit.author.name,showDayAndMonth:!0,message:a.commit.message})}))})),(a,s)=>(o(),l("div",v,[p,m("div",u,[(o(!0),l(d,null,i(n.value,((a,s)=>(o(),l("div",{key:s,class:"log-item"},[m("div",_,[m("span",{class:c(["key",s<3&&"top"])},f(s+1),3)]),m("div",b,f(a.message),1),m("div",g,f(a.from),1)])))),128))])]))}}),[["__scopeId","data-v-c1fd859a"]]);export{h as default};