(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fda5afa"],{"4dd0":function(t,a,s){"use strict";var e=s("dd38"),n=s.n(e);n.a},"54f7":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("adt-search-folder",{attrs:{searchRouter:{query:{accountName:t.search.accountName,organizationId:t.search.organizationId,phoneNumber:t.search.phoneNumber}},isStatus:!0}},[s("template",{slot:"status"},[s("div",{staticClass:"status"},[s("div",{staticClass:"status-left"},[s("p",[t._v("货运要求状态:")]),t._l(t.auditStatusList,(function(a,e){return s("span",{key:e,class:{"click-status":t.auditStatusNum==e},on:{click:function(a){return t.auditStatus(e)}}},[t._v(" "+t._s(a.status)+" ")])}))],2)])]),s("template",{slot:"always-show"},[s("div",{staticClass:"public-transit"},[s("Form",{ref:"formInline",attrs:{model:t.formInline,inline:"","label-colon":""}},[s("FormItem",{attrs:{label:"启运地"}},[s("Input",{attrs:{type:"text"},model:{value:t.formInline.name,callback:function(a){t.$set(t.formInline,"name",a)},expression:"formInline.name"}})],1),s("FormItem",{attrs:{label:"目的地"}},[s("Input",{attrs:{type:"text"},model:{value:t.formInline.name,callback:function(a){t.$set(t.formInline,"name",a)},expression:"formInline.name"}})],1),s("FormItem",{staticClass:"select-transit",attrs:{label:"中转地"}},[s("Select",{attrs:{filterable:"",remote:"","remote-method":t.transitRemote,loading:t.transitLoading},on:{"on-select":t.onChangeClick},model:{value:t.formInline.transit,callback:function(a){t.$set(t.formInline,"transit",a)},expression:"formInline.transit"}},t._l(t.transitData,(function(a,e){return s("Option",{key:e,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1),s("p",{staticClass:"select-value"},t._l(t.transitSelect,(function(a,e){return s("span",{key:e},[t._v(t._s(a)),s("Icon",{attrs:{type:"ios-close-circle"},on:{click:function(a){return t.delTransit(e)}}})],1)})),0)],1),s("FormItem",{attrs:{label:"合同号"}},[s("Input",{attrs:{type:"text"},model:{value:t.formInline.name,callback:function(a){t.$set(t.formInline,"name",a)},expression:"formInline.name"}})],1),s("FormItem",{attrs:{label:"运输方式"}},[s("Select",{attrs:{clearable:""},model:{value:t.formInline.type,callback:function(a){t.$set(t.formInline,"type",a)},expression:"formInline.type"}},t._l(t.type,(function(a,e){return s("Option",{key:e,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1)],1)],1)],1)])],2),s("div",{staticClass:"btn-pagina"},[s("span",{staticClass:"title"},[t._v("推荐物流服务方案")]),s("adt-paginator",{staticClass:"pagination",attrs:{currentPage:~~t.page,total:~~t.total}})],1),s("div",{staticClass:"public-component-line"}),s("div",{staticClass:"public-list"},t._l(t.listData,(function(a,e){return s("Col",{key:e,staticClass:"public-component-card",attrs:{span:"24"}},[s("adt-list-item",{attrs:{data:a,showCheckbox:!1},on:{checkData:t.checkData}},[s("template",{slot:"tab-title"},[s("span",[t._v("货运要求编号:"+t._s(a.logisticsPlanNumber))])]),s("template",{slot:"tab-operat"},[s("span",{class:{"card-status-success":"disagree"==a.statusCode,"card-status-error":"refuse"==a.statusCode,"card-status":"agree"==a.statusCode}},[t._v(t._s(a.status))]),s("Poptip",{staticClass:"card-icon",attrs:{placement:"right-start"}},[s("span",[t._v("编辑计划")]),s("Icon",{attrs:{type:"md-arrow-dropdown"}}),s("div",{staticClass:"card-poptip-font",attrs:{slot:"content"},slot:"content"},[s("div",{on:{click:function(s){return t.edit(a)}}},[t._v("编辑")]),s("div",{on:{click:function(s){return t.detail(a)}}},[t._v("详情")]),s("div",{staticClass:"failure",on:{click:function(s){return t.remove(a)}}},[t._v("删除")])])],1)],1),s("template",{slot:"tab-content"},[s("div",{staticClass:"tab-content"},[s("div",{staticClass:"path-data"},t._l(t.list,(function(a,e){return s("p",{key:e,staticClass:"path-content"},[s("span",{staticClass:"path-name"},[t._v(t._s(a))]),s("span",{staticClass:"icon-font"},[s("svg",{staticClass:"iconfont icon-train",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-andaotongcaidanICON_huoche"}})]),s("small",[t._v("国际贸易")]),s("svg",{staticClass:"iconfont icon-arrows",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-andaotongcaidanICON_jiantou"}})])])])})),0),s("div",{staticClass:"plan-time"},[s("p",{staticClass:"time-title"},[t._v("计划时间：")]),s("p",{staticClass:"time-content"},[s("span",[s("small",[t._v("始")]),t._v("2020/06/20")])]),s("p",{staticClass:"time-content"},[s("span",[s("small",[t._v("始")]),t._v("2020/06/20")]),s("br"),s("span",[s("small",[t._v("到")]),t._v("2020/06/20")])]),s("p",{staticClass:"time-content"},[s("span",[s("small",[t._v("始")]),t._v("2020/06/20")]),s("br"),s("span",[s("small",[t._v("到")]),t._v("2020/06/20")])]),s("p",{staticClass:"time-content"},[s("span",[s("small",[t._v("始")]),t._v("2020/06/20")]),s("br"),s("span",[s("small",[t._v("到")]),t._v("2020/06/20")])]),s("p",{staticClass:"time-content"},[s("span",[s("small",[t._v("始")]),t._v("2020/06/20")]),s("br"),s("span",[s("small",[t._v("到")]),t._v("2020/06/20")])]),s("p",{staticClass:"time-content"},[s("span",[s("small",[t._v("始")]),t._v("2020/06/20")]),s("br"),s("span",[s("small",[t._v("到")]),t._v("2020/06/20")])]),s("p",{staticClass:"time-content"},[s("span",[s("small",[t._v("始")]),t._v("2020/06/20")]),s("br"),s("span",[s("small",[t._v("到")]),t._v("2020/06/20")])])])])]),s("template",{slot:"tab-bottom"},[s("div",{staticClass:"tab-bottom"},[s("Row",[s("Col",{attrs:{span:"8"}},[t._v("合同号：DHKGDAV")]),s("Col",{attrs:{span:"8"}},[t._v("订舱号：JHKHHDA")]),s("Col",{staticStyle:{textAlign:"right"},attrs:{span:"8"}},[t._v("提运单号：GJSQGYQFS")])],1)],1)])],2)],1)})),1)],1)},n=[],i=(s("4de4"),s("c975"),s("d81d"),s("a434"),s("ade3")),o=s("7b46"),l=s("b620"),c={mixins:[o["a"]],components:{AdtListItem:l["a"]},data:function(){return{search:{},formInline:Object(i["a"])({name:"",type:"",transit:"",age:""},"type",""),type:[{value:"空运",label:"空运"},{value:"火车",label:"火车"},{value:"顺丰",label:"顺丰"}],list:["加拿大","北级","北京","加州","哈尔滨","邯郸","韩国"],auditStatusNum:"默认值",auditStatusList:[{code:"unreviewed",status:"未审核"},{code:"stock",status:"未货好"},{code:"progress",status:"执行中"},{code:"unreviewed",status:"未审核"},{code:"stock",status:"未货好"},{code:"progress",status:"执行中"},{code:"unreviewed",status:"未审核"},{code:"stock",status:"未货好"},{code:"progress",status:"执行中"},{code:"unreviewed",status:"未审核"},{code:"stock",status:"未货好"},{code:"progress",status:"执行中"}],transitModal:"",transitLoading:!1,transitData:[],transitSelect:[],listData:[{statusCode:"disagree",status:"需求未同意",logisticsPlanNumber:"物流方案编号1",time:"时效",price:"价格",location:[{city:"重庆1",transport:"空运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]},{statusCode:"agree",status:"方案已同意",logisticsPlanNumber:"物流方案编号2",time:"时效",price:"价格",location:[{city:"重庆2",transport:"空运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]},{statusCode:"refuse",status:"已拒绝",logisticsPlanNumber:"物流方案编号3",time:"时效",price:"价格",location:[{city:"重庆3",transport:"空运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]}]}},methods:{dataInit:function(){this.getData()},getData:function(){},auditStatus:function(t){this.auditStatusNum=t},transitRemote:function(t){var a=this;""!==t?(this.transitLoading=!0,setTimeout((function(){a.transitLoading=!1;var s=a.list.map((function(t){return{value:t,label:t}}));a.transitData=s.filter((function(a){return a.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}),200)):this.transitData=[]},delTransit:function(t){this.transitSelect.splice(t,1)},onChangeClick:function(t){this.transitSelect.length>=5||this.transitSelect.push(t.value)},add:function(){this.isModalShow=!0},searchChange:function(){},checkData:function(t,a){},edit:function(t){},detail:function(t){},remove:function(t){}}},r=c,u=(s("4dd0"),s("2877")),p=Object(u["a"])(r,e,n,!1,null,"000e18ea",null);a["default"]=p.exports},"7b46":function(t,a,s){"use strict";a["a"]={props:{page:{default:1}},data:function(){return{total:0,perpage:15}},created:function(){this.dataInit("judgment")},watch:{$route:function(){this.dataInit()}},methods:{paginatorInit:function(t,a){this.perpage=t,this.total=a}}}},b620:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.showCheckbox?s("Checkbox",{staticClass:"card-check",on:{"on-change":function(a){return t.checkChange(t.logistics,t.isCheck)}},model:{value:t.isCheck,callback:function(a){t.isCheck=a},expression:"isCheck"}}):t._e(),s("Card",{class:{"card-margin":1==t.showCheckbox}},[t._t("tab-title"),t._t("tab-operat"),s("Divider"),t._t("tab-content"),t._t("tab-bottom")],2)],1)},n=[],i={name:"adt-list-item",props:{showCheckbox:{type:Boolean,default:!1},logistics:{type:Object,default:function(){}},resetCheckStatus:{type:Boolean,default:!1}},data:function(){return{showModal:!1,isCheck:!1}},watch:{resetCheckStatus:function(){this.isCheck=!1}},methods:{checkChange:function(t,a){this.$emit("checkData",t,a)}}},o=i,l=s("2877"),c=Object(l["a"])(o,e,n,!1,null,null,null);a["a"]=c.exports},dd38:function(t,a,s){}}]);