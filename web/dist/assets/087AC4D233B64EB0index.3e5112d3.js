/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
import{s as e,a,r as l,o as t,c as o,d as s,b as d,w as i,g as m,k as u,l as n,E as r}from"./087AC4D233B64EB0index.72fd2312.js";/* empty css                                  *//* empty css                               *//* empty css                              */import{_ as c}from"./087AC4D233B64EB0warningBar.90f1d9d1.js";import{a as B,E as p}from"./087AC4D233B64EB0index.7b396154.js";import"./087AC4D233B64EB0castArray.673ea73c.js";import"./087AC4D233B64EB0_baseClone.503fbc91.js";import"./087AC4D233B64EB0_Uint8Array.d3e78e14.js";import"./087AC4D233B64EB0_initCloneObject.253b0cea.js";const b=a=>e({url:"/email/emailTest",method:"post",data:a}),f={class:"gva-form-box"},j=Object.assign({name:"Email"},{__name:"index",setup(e){const j=a(null),C=l({to:"",subject:"",body:""}),_=async()=>{0===(await b()).code&&u.success("发送成功")},E=async()=>{0===(await b()).code&&u.success("发送成功,请查收")};return(e,a)=>{const l=n,u=B,b=r,A=p;return t(),o("div",null,[s(c,{title:"需要提前配置email配置文件，为防止不必要的垃圾邮件，在线体验功能不开放此功能体验。"}),d("div",f,[s(A,{ref_key:"emailForm",ref:j,"label-position":"right","label-width":"80px",model:C},{default:i((()=>[s(u,{label:"目标邮箱"},{default:i((()=>[s(l,{modelValue:C.to,"onUpdate:modelValue":a[0]||(a[0]=e=>C.to=e)},null,8,["modelValue"])])),_:1}),s(u,{label:"邮件"},{default:i((()=>[s(l,{modelValue:C.subject,"onUpdate:modelValue":a[1]||(a[1]=e=>C.subject=e)},null,8,["modelValue"])])),_:1}),s(u,{label:"邮件内容"},{default:i((()=>[s(l,{modelValue:C.body,"onUpdate:modelValue":a[2]||(a[2]=e=>C.body=e),type:"textarea"},null,8,["modelValue"])])),_:1}),s(u,null,{default:i((()=>[s(b,{onClick:_},{default:i((()=>[m("发送测试邮件")])),_:1}),s(b,{onClick:E},{default:i((()=>[m("发送邮件")])),_:1})])),_:1})])),_:1},8,["model"])])])}}});export{j as default};
