/*! 
 Build based on gin-vue-admin 
 Time : 1718987800000 */
System.register(["./087AC4D233B64EB0github-legacy.7fa89d88.js","./087AC4D233B64EB0date-legacy.0c8a469a.js","./087AC4D233B64EB0dashboardTable.vue_vue_type_style_index_0_scoped_c1fd859a_lang-legacy.c12ec9c9.js","./087AC4D233B64EB0index-legacy.0859e6b1.js"],(function(e,a){"use strict";var t,s,n,c,l,i,o,u,r,d,f,m,v;return{setters:[function(e){t=e.C},function(e){s=e.f},null,function(e){n=e._,c=e.a,l=e.o,i=e.c,o=e.b,u=e.N,r=e.O,d=e.n,f=e.t,m=e.p,v=e.i}],execute:function(){var a={class:"commit-table"},g=function(e){return m("data-v-c1fd859a"),e=e(),v(),e}((function(){return o("div",{class:"commit-table-title"}," 更新日志 ",-1)})),y={class:"log"},_={class:"flex-1 flex key-box"},b={class:"flex-5 flex message"},h={class:"flex-3 flex form"};e("default",n(Object.assign({name:"DashboardTable"},{__name:"dashboardTable",setup:function(e){var n=c(!0),m=c([]);return t(0).then((function(e){var a=e.data;n.value=!1,a.forEach((function(e,a){e.commit.message&&a<10&&m.value.push({from:s(e.commit.author.date,"yyyy-MM-dd"),title:e.commit.author.name,showDayAndMonth:!0,message:e.commit.message})}))})),function(e,t){return l(),i("div",a,[g,o("div",y,[(l(!0),i(u,null,r(m.value,(function(e,a){return l(),i("div",{key:a,class:"log-item"},[o("div",_,[o("span",{class:d(["key",a<3&&"top"])},f(a+1),3)]),o("div",b,f(e.message),1),o("div",h,f(e.from),1)])})),128))])])}}}),[["__scopeId","data-v-c1fd859a"]]))}}}));