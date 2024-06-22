/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{a as t,R as e,o as a,c as l,d as n,w as u,h as s,b as o,g as d,t as r,e as p,N as c,O as f}from"./087AC4D233B64EB0index.72fd2312.js";/* empty css                                 */import{E as _}from"./087AC4D233B64EB0card.425b704b.js";import{E as i,a as v}from"./087AC4D233B64EB0col.5bef4950.js";import{g}from"./087AC4D233B64EB0system.ae6359a7.js";import{E as C}from"./087AC4D233B64EB0index.063cc7d2.js";const x=o("div",null,"Runtime",-1),m=o("div",null,"Disk",-1),B=o("div",null,"CPU",-1),y=o("div",null,"Ram",-1),b=Object.assign({name:"State"},{__name:"state",setup(b){const k=t(null),h=t({}),M=t([{color:"#5cb87a",percentage:20},{color:"#e6a23c",percentage:40},{color:"#f56c6c",percentage:80}]),E=async()=>{const{data:t}=await g();h.value=t.server};return E(),k.value=setInterval((()=>{E()}),1e4),e((()=>{clearInterval(k.value),k.value=null})),(t,e)=>{const g=i,b=v,k=_,E=C;return a(),l("div",null,[n(b,{gutter:15,class:"py-1"},{default:u((()=>[n(g,{span:12},{default:u((()=>[h.value.os?(a(),s(k,{key:0,class:"card_item"},{header:u((()=>[x])),default:u((()=>[o("div",null,[n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("os:")])),_:1}),n(g,{span:12,textContent:r(h.value.os.goos)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("cpu nums:")])),_:1}),n(g,{span:12,textContent:r(h.value.os.numCpu)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("compiler:")])),_:1}),n(g,{span:12,textContent:r(h.value.os.compiler)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("go version:")])),_:1}),n(g,{span:12,textContent:r(h.value.os.goVersion)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("goroutine nums:")])),_:1}),n(g,{span:12,textContent:r(h.value.os.numGoroutine)},null,8,["textContent"])])),_:1})])])),_:1})):p("",!0)])),_:1}),n(g,{span:12},{default:u((()=>[h.value.disk?(a(),s(k,{key:0,class:"card_item"},{header:u((()=>[m])),default:u((()=>[o("div",null,[n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("total (MB)")])),_:1}),n(g,{span:12,textContent:r(h.value.disk.totalMb)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("used (MB)")])),_:1}),n(g,{span:12,textContent:r(h.value.disk.usedMb)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("total (GB)")])),_:1}),n(g,{span:12,textContent:r(h.value.disk.totalGb)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("used (GB)")])),_:1}),n(g,{span:12,textContent:r(h.value.disk.usedGb)},null,8,["textContent"])])),_:1})])),_:1}),n(g,{span:12},{default:u((()=>[n(E,{type:"dashboard",percentage:h.value.disk.usedPercent,color:M.value},null,8,["percentage","color"])])),_:1})])),_:1})])])),_:1})):p("",!0)])),_:1})])),_:1}),n(b,{gutter:15,class:"py-1"},{default:u((()=>[n(g,{span:12},{default:u((()=>[h.value.cpu?(a(),s(k,{key:0,class:"card_item","body-style":{height:"180px","overflow-y":"scroll"}},{header:u((()=>[B])),default:u((()=>[o("div",null,[n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("physical number of cores:")])),_:1}),n(g,{span:12,textContent:r(h.value.cpu.cores)},null,8,["textContent"])])),_:1}),(a(!0),l(c,null,f(h.value.cpu.cpus,((t,e)=>(a(),s(b,{key:e,gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("core "+r(e)+":",1)])),_:2},1024),n(g,{span:12},{default:u((()=>[n(E,{type:"line",percentage:+t.toFixed(0),color:M.value},null,8,["percentage","color"])])),_:2},1024)])),_:2},1024)))),128))])])),_:1})):p("",!0)])),_:1}),n(g,{span:12},{default:u((()=>[h.value.ram?(a(),s(k,{key:0,class:"card_item"},{header:u((()=>[y])),default:u((()=>[o("div",null,[n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("total (MB)")])),_:1}),n(g,{span:12,textContent:r(h.value.ram.totalMb)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("used (MB)")])),_:1}),n(g,{span:12,textContent:r(h.value.ram.usedMb)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("total (GB)")])),_:1}),n(g,{span:12,textContent:r(h.value.ram.totalMb/1024)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("used (GB)")])),_:1}),n(g,{span:12,textContent:r((h.value.ram.usedMb/1024).toFixed(2))},null,8,["textContent"])])),_:1})])),_:1}),n(g,{span:12},{default:u((()=>[n(E,{type:"dashboard",percentage:h.value.ram.usedPercent,color:M.value},null,8,["percentage","color"])])),_:1})])),_:1})])])),_:1})):p("",!0)])),_:1})])),_:1})])}}});export{b as default};