/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{_ as e,r as l,a,o as t,c as o,b as i,d as u,w as d,g as n,G as s,b2 as p,t as r,h as m,I as c,e as v,d5 as f,d6 as h,ap as B,d7 as b,k as w,d8 as y,d9 as _,da as g,E as D,J as V,l as C,p as k,i as A}from"./087AC4D233B64EB0index.72fd2312.js";/* empty css                               *//* empty css                                *//* empty css                                  *//* empty css                                *//* empty css                               */import{E}from"./087AC4D233B64EB0radio.95911a51.js";/* empty css                              *//* empty css                            */import{E as j}from"./087AC4D233B64EB0checkbox.ca4c4f80.js";/* empty css                                  *//* empty css                               */import{E as x,a as I}from"./087AC4D233B64EB0table-column.a0d188fb.js";/* empty css                               */import U from"./087AC4D233B64EB0icon.237a2ae9.js";import{_ as T}from"./087AC4D233B64EB0warningBar.90f1d9d1.js";import{c as N}from"./087AC4D233B64EB0authorityBtn.c2ec2ae5.js";import{t as q}from"./087AC4D233B64EB0doc.46160848.js";import{a as M,E as S}from"./087AC4D233B64EB0index.7b396154.js";import{E as z,a as O}from"./087AC4D233B64EB0index.3d51996d.js";import{E as P}from"./087AC4D233B64EB0index.a0571a5c.js";import{E as $}from"./087AC4D233B64EB0index.1c56beac.js";import"./087AC4D233B64EB0index.ffab591b.js";import"./087AC4D233B64EB0strings.ee229cfb.js";import"./087AC4D233B64EB0isEqual.add17071.js";import"./087AC4D233B64EB0_Uint8Array.d3e78e14.js";import"./087AC4D233B64EB0arrays.2c626d3b.js";import"./087AC4D233B64EB0cloneDeep.182936bd.js";import"./087AC4D233B64EB0_baseClone.503fbc91.js";import"./087AC4D233B64EB0_initCloneObject.253b0cea.js";import"./087AC4D233B64EB0index.ea000fb0.js";import"./087AC4D233B64EB0debounce.1e721c0b.js";import"./087AC4D233B64EB0hasIn.391c448e.js";import"./087AC4D233B64EB0_baseIteratee.e71013e5.js";import"./087AC4D233B64EB0isUndefined.d281c39a.js";import"./087AC4D233B64EB0castArray.673ea73c.js";import"./087AC4D233B64EB0use-dialog.3fba8604.js";const F=e=>(k("data-v-01222e46"),e=e(),A(),e),G={class:"gva-table-box"},H={class:"gva-btn-list"},W={key:0,class:"icon-column"},J={class:"flex justify-between items-center"},K={class:"text-lg"},R={style:{display:"inline-flex","align-items":"center"}},X=F((()=>i("span",null,"路由Path",-1))),Y=F((()=>i("span",{style:{"font-size":"12px","margin-right":"12px"}},"如果菜单包含子菜单，请创建router-view二级路由页面或者",-1))),Z=F((()=>i("span",null," 高亮菜单 ",-1))),L=F((()=>i("span",null," 是否为基础页面 ",-1))),Q={class:"flex items-center gap-2"},ee={class:"flex items-center gap-2 mt-3"},le=e(Object.assign({name:"Menus"},{__name:"menu",setup(e){const k=l({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),A=a(1),F=a(0),le=a(999),ae=a([]),te=a({}),oe=async()=>{const e=await h({page:A.value,pageSize:le.value,...te.value});0===e.code&&(ae.value=e.data.list,F.value=e.data.total,A.value=e.data.page,le.value=e.data.pageSize)};oe();const ie=()=>{ue.value.component=ue.value.component.replace(/\\/g,"/")},ue=a({ID:0,path:"",name:"",hidden:!1,parentId:0,component:"",meta:{activeName:"",title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1},parameters:[],menuBtn:[]}),de=()=>{ue.value.path=ue.value.name},ne=e=>{re(),e()},se=a(null),pe=a(!1),re=()=>{pe.value=!1,se.value.resetFields(),ue.value={ID:0,path:"",name:"",hidden:!1,parentId:0,component:"",meta:{title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1}}},me=a(!1),ce=()=>{re(),me.value=!1},ve=async()=>{se.value.validate((async e=>{if(e){let e;e=be.value?await y(ue.value):await _(ue.value),0===e.code&&(w({type:"success",message:be.value?"编辑成功":"添加成功!"}),oe()),re(),me.value=!1}}))},fe=a([{ID:"0",title:"根菜单"}]),he=()=>{fe.value=[{ID:0,title:"根目录"}],Be(ae.value,fe.value,!1)},Be=(e,l,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const t={title:e.meta.title,ID:e.ID,disabled:a||e.ID===ue.value.ID,children:[]};Be(e.children,t.children,a||e.ID===ue.value.ID),l.push(t)}else{const t={title:e.meta.title,ID:e.ID,disabled:a||e.ID===ue.value.ID};l.push(t)}}))},be=a(!1),we=a("新增菜单"),ye=e=>{we.value="新增菜单",ue.value.parentId=e,be.value=!1,he(),me.value=!0};return(e,l)=>{const a=D,h=V,y=x,_=I,F=C,le=M,te=j,re=z,Be=O,_e=E,ge=P,De=S,Ve=$;return t(),o("div",null,[i("div",G,[i("div",H,[u(a,{type:"primary",icon:"plus",onClick:l[0]||(l[0]=e=>ye(0))},{default:d((()=>[n("新增根菜单")])),_:1}),u(h,{class:"cursor-pointer",onClick:l[1]||(l[1]=e=>s(q)("https://www.bilibili.com/video/BV1kv4y1g7nT/?p=4&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:d((()=>[u(s(p))])),_:1})]),u(_,{data:ae.value,"row-key":"ID"},{default:d((()=>[u(y,{align:"left",label:"ID","min-width":"100",prop:"ID"}),u(y,{align:"left",label:"展示名称","min-width":"120",prop:"authorityName"},{default:d((e=>[i("span",null,r(e.row.meta.title),1)])),_:1}),u(y,{align:"left",label:"图标","min-width":"140",prop:"authorityName"},{default:d((e=>[e.row.meta.icon?(t(),o("div",W,[u(h,null,{default:d((()=>[(t(),m(c(e.row.meta.icon)))])),_:2},1024),i("span",null,r(e.row.meta.icon),1)])):v("",!0)])),_:1}),u(y,{align:"left",label:"路由Name","show-overflow-tooltip":"","min-width":"160",prop:"name"}),u(y,{align:"left",label:"路由Path","show-overflow-tooltip":"","min-width":"160",prop:"path"}),u(y,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:d((e=>[i("span",null,r(e.row.hidden?"隐藏":"显示"),1)])),_:1}),u(y,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),u(y,{align:"left",label:"排序","min-width":"70",prop:"sort"}),u(y,{align:"left",label:"文件路径","min-width":"360",prop:"component"}),u(y,{align:"left",fixed:"right",label:"操作",width:"300"},{default:d((e=>[u(a,{type:"primary",link:"",icon:"plus",onClick:l=>ye(e.row.ID)},{default:d((()=>[n("添加子菜单")])),_:2},1032,["onClick"]),u(a,{type:"primary",link:"",icon:"edit",onClick:l=>(async e=>{we.value="编辑菜单";const l=await g({id:e});ue.value=l.data.menu,be.value=!0,he(),me.value=!0})(e.row.ID)},{default:d((()=>[n("编辑")])),_:2},1032,["onClick"]),u(a,{type:"primary",link:"",icon:"delete",onClick:l=>{return a=e.row.ID,void B.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await b({ID:a})).code&&(w({type:"success",message:"删除成功!"}),1===ae.value.length&&A.value>1&&A.value--,oe())})).catch((()=>{w({type:"info",message:"已取消删除"})}));var a}},{default:d((()=>[n("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),u(Ve,{modelValue:me.value,"onUpdate:modelValue":l[20]||(l[20]=e=>me.value=e),size:"60%","before-close":ne,"show-close":!1},{title:d((()=>[i("div",J,[i("span",K,r(we.value),1),i("div",null,[u(a,{onClick:ce},{default:d((()=>[n("取 消")])),_:1}),u(a,{type:"primary",onClick:ve},{default:d((()=>[n("确 定")])),_:1})])])])),default:d((()=>[u(T,{title:"新增菜单，需要在角色管理内配置权限才可使用"}),me.value?(t(),m(De,{key:0,ref_key:"menuForm",ref:se,inline:!0,model:ue.value,rules:k,"label-position":"top","label-width":"85px"},{default:d((()=>[u(le,{label:"路由Name",prop:"path",style:{width:"30%"}},{default:d((()=>[u(F,{modelValue:ue.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>ue.value.name=e),autocomplete:"off",placeholder:"唯一英文字符串",onChange:de},null,8,["modelValue"])])),_:1}),u(le,{prop:"path",style:{width:"30%"}},{label:d((()=>[i("span",R,[X,u(te,{modelValue:pe.value,"onUpdate:modelValue":l[3]||(l[3]=e=>pe.value=e),style:{"margin-left":"12px",height:"auto"}},{default:d((()=>[n("添加参数")])),_:1},8,["modelValue"])])])),default:d((()=>[u(F,{modelValue:ue.value.path,"onUpdate:modelValue":l[4]||(l[4]=e=>ue.value.path=e),disabled:!pe.value,autocomplete:"off",placeholder:"建议只在后方拼接参数"},null,8,["modelValue","disabled"])])),_:1}),u(le,{label:"是否隐藏",style:{width:"30%"}},{default:d((()=>[u(Be,{modelValue:ue.value.hidden,"onUpdate:modelValue":l[5]||(l[5]=e=>ue.value.hidden=e),placeholder:"是否在列表隐藏"},{default:d((()=>[u(re,{value:!1,label:"否"}),u(re,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),u(le,{label:"父节点ID",style:{width:"30%"}},{default:d((()=>[u(_e,{modelValue:ue.value.parentId,"onUpdate:modelValue":l[6]||(l[6]=e=>ue.value.parentId=e),style:{width:"100%"},disabled:!be.value,options:fe.value,props:{checkStrictly:!0,label:"title",value:"ID",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),u(le,{label:"文件路径",prop:"component",style:{width:"60%"}},{default:d((()=>[u(F,{modelValue:ue.value.component,"onUpdate:modelValue":l[7]||(l[7]=e=>ue.value.component=e),autocomplete:"off",placeholder:"页面:view/xxx/xx.vue 插件:plugin/xx/xx.vue",onBlur:ie},null,8,["modelValue"]),Y,u(a,{style:{"margin-top":"4px"},onClick:l[8]||(l[8]=e=>ue.value.component="view/routerHolder.vue")},{default:d((()=>[n("点我设置")])),_:1})])),_:1}),u(le,{label:"展示名称",prop:"meta.title",style:{width:"30%"}},{default:d((()=>[u(F,{modelValue:ue.value.meta.title,"onUpdate:modelValue":l[9]||(l[9]=e=>ue.value.meta.title=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),u(le,{label:"图标",prop:"meta.icon",style:{width:"30%"}},{default:d((()=>[u(U,{meta:ue.value.meta,style:{width:"100%"}},null,8,["meta"])])),_:1}),u(le,{label:"排序标记",prop:"sort",style:{width:"30%"}},{default:d((()=>[u(F,{modelValue:ue.value.sort,"onUpdate:modelValue":l[10]||(l[10]=e=>ue.value.sort=e),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])])),_:1}),u(le,{prop:"meta.activeName",style:{width:"30%"}},{label:d((()=>[i("div",null,[Z,u(ge,{content:"注：当到达此路由时候，指定左侧菜单指定name会处于活跃状态（亮起），可为空，为空则为本路由Name。",placement:"top",effect:"light"},{default:d((()=>[u(h,null,{default:d((()=>[u(s(f))])),_:1})])),_:1})])])),default:d((()=>[u(F,{modelValue:ue.value.meta.activeName,"onUpdate:modelValue":l[11]||(l[11]=e=>ue.value.meta.activeName=e),placeholder:ue.value.name,autocomplete:"off"},null,8,["modelValue","placeholder"])])),_:1}),u(le,{label:"KeepAlive",prop:"meta.keepAlive",style:{width:"30%"}},{default:d((()=>[u(Be,{modelValue:ue.value.meta.keepAlive,"onUpdate:modelValue":l[12]||(l[12]=e=>ue.value.meta.keepAlive=e),style:{width:"100%"},placeholder:"是否keepAlive缓存页面"},{default:d((()=>[u(re,{value:!1,label:"否"}),u(re,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),u(le,{label:"CloseTab",prop:"meta.closeTab",style:{width:"30%"}},{default:d((()=>[u(Be,{modelValue:ue.value.meta.closeTab,"onUpdate:modelValue":l[13]||(l[13]=e=>ue.value.meta.closeTab=e),style:{width:"100%"},placeholder:"是否自动关闭tab"},{default:d((()=>[u(re,{value:!1,label:"否"}),u(re,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),u(le,{style:{width:"30%"}},{label:d((()=>[i("div",null,[L,u(ge,{content:"此项选择为是，则不会展示左侧菜单以及顶部信息。",placement:"top",effect:"light"},{default:d((()=>[u(h,null,{default:d((()=>[u(s(f))])),_:1})])),_:1})])])),default:d((()=>[u(Be,{modelValue:ue.value.meta.defaultMenu,"onUpdate:modelValue":l[14]||(l[14]=e=>ue.value.meta.defaultMenu=e),style:{width:"100%"},placeholder:"是否为基础页面"},{default:d((()=>[u(re,{value:!1,label:"否"}),u(re,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])):v("",!0),i("div",null,[i("div",Q,[u(a,{type:"primary",icon:"edit",onClick:l[15]||(l[15]=e=>{return(l=ue.value).parameters||(l.parameters=[]),void l.parameters.push({type:"query",key:"",value:""});var l})},{default:d((()=>[n("新增菜单参数")])),_:1}),u(h,{class:"cursor-pointer",onClick:l[16]||(l[16]=e=>s(q)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=9&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:d((()=>[u(s(p))])),_:1})]),u(_,{data:ue.value.parameters,style:{width:"100%","margin-top":"12px"}},{default:d((()=>[u(y,{align:"left",prop:"type",label:"参数类型",width:"180"},{default:d((e=>[u(Be,{modelValue:e.row.type,"onUpdate:modelValue":l=>e.row.type=l,placeholder:"请选择"},{default:d((()=>[u(re,{key:"query",value:"query",label:"query"}),u(re,{key:"params",value:"params",label:"params"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),u(y,{align:"left",prop:"key",label:"参数key",width:"180"},{default:d((e=>[i("div",null,[u(F,{modelValue:e.row.key,"onUpdate:modelValue":l=>e.row.key=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),u(y,{align:"left",prop:"value",label:"参数值"},{default:d((e=>[i("div",null,[u(F,{modelValue:e.row.value,"onUpdate:modelValue":l=>e.row.value=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),u(y,{align:"left"},{default:d((e=>[i("div",null,[u(a,{type:"danger",icon:"delete",onClick:l=>{return a=ue.value.parameters,t=e.$index,void a.splice(t,1);var a,t}},{default:d((()=>[n("删除")])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),i("div",ee,[u(a,{type:"primary",icon:"edit",onClick:l[17]||(l[17]=e=>{return(l=ue.value).menuBtn||(l.menuBtn=[]),void l.menuBtn.push({name:"",desc:""});var l})},{default:d((()=>[n("新增可控按钮 ")])),_:1}),u(h,{class:"cursor-pointer",onClick:l[18]||(l[18]=e=>s(q)("https://www.gin-vue-admin.com/guide/web/button-auth.html"))},{default:d((()=>[u(s(f))])),_:1}),u(h,{class:"cursor-pointer",onClick:l[19]||(l[19]=e=>s(q)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=11&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:d((()=>[u(s(p))])),_:1})]),u(_,{data:ue.value.menuBtn,style:{width:"100%","margin-top":"12px"}},{default:d((()=>[u(y,{align:"left",prop:"name",label:"按钮名称",width:"180"},{default:d((e=>[i("div",null,[u(F,{modelValue:e.row.name,"onUpdate:modelValue":l=>e.row.name=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),u(y,{align:"left",prop:"name",label:"备注",width:"180"},{default:d((e=>[i("div",null,[u(F,{modelValue:e.row.desc,"onUpdate:modelValue":l=>e.row.desc=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),u(y,{align:"left"},{default:d((e=>[i("div",null,[u(a,{type:"danger",icon:"delete",onClick:l=>(async(e,l)=>{const a=e[l];if(0===a.ID)return void e.splice(l,1);0===(await N({id:a.ID})).code&&e.splice(l,1)})(ue.value.menuBtn,e.$index)},{default:d((()=>[n("删除")])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-01222e46"]]);export{le as default};
