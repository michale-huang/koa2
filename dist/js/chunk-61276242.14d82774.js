(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61276242"],{2897:function(t,a,s){},"5e18":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"one-logistics"},[s("Tabs",{attrs:{value:"name1"}},[s("TabPane",{attrs:{label:"单次物流委托",name:"name1"}},[s("single")],1),s("TabPane",{attrs:{label:"周期性物流委托",name:"name2"}},[s("cycle")],1)],1)],1)},n=[],c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"one-logistics"},[s("adt-search-folder",{attrs:{searchRouter:{query:{accountName:t.search.accountName,organizationId:t.search.organizationId,phoneNumber:t.search.phoneNumber}},isTitle:!1,isStatus:!0}},[s("template",{slot:"status"},[s("div",{staticClass:"status"},[s("div",{staticClass:"status-left"},[s("p",[t._v("状态:")]),t._l(t.auditStatusList,(function(a,e){return s("span",{key:e,class:{test:t.auditStatusNum==e},on:{click:function(a){return t.auditStatus(e)}}},[t._v(t._s(a.status))])}))],2)])]),s("template",{slot:"always-show"},[s("Row",[s("Col",{staticClass:"search-condition min-width",attrs:{span:"4"}},[s("span",[t._v("起运地：")]),s("Input",{attrs:{clearable:""},model:{value:t.search.accountName,callback:function(a){t.$set(t.search,"accountName",a)},expression:"search.accountName"}})],1),s("Col",{staticClass:"search-condition min-width",attrs:{span:"4"}},[s("span",[t._v("目的地：")]),s("Input",{attrs:{clearable:""},model:{value:t.search.accountName,callback:function(a){t.$set(t.search,"accountName",a)},expression:"search.accountName"}})],1),s("Col",{staticClass:"search-condition min-width transit",attrs:{span:"14"}},[s("span",{staticClass:"transit-tit"},[t._v("中转地：")]),s("Select",{attrs:{filterable:"",remote:"","remote-method":t.transitRemote,loading:t.transitLoading},on:{"on-select":t.onChangeClick},model:{value:t.transitModal,callback:function(a){t.transitModal=a},expression:"transitModal"}},t._l(t.transitData,(function(a,e){return s("Option",{key:e,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1),s("p",{staticClass:"select-value"},t._l(t.transitSelect,(function(a,e){return s("span",{key:e},[t._v(" "+t._s(a)+" "),s("Icon",{attrs:{type:"ios-close-circle"},on:{click:function(a){return t.delTransit(e)}}})],1)})),0)],1)],1),s("br"),s("Row",[s("Col",{staticClass:"search-condition min-width",attrs:{span:"4"}},[s("span",{on:{click:function(a){return t.hh()}}},[t._v("合同号：")]),s("Input",{attrs:{clearable:""},model:{value:t.search.accountName,callback:function(a){t.$set(t.search,"accountName",a)},expression:"search.accountName"}})],1)],1)],1)],2),s("div",{staticClass:"btn-pagina"},[s("AdtButton",{staticClass:"btn-operating",attrs:{allDelShow:!0,selectList:t.selectList}}),s("adt-paginator",{staticClass:"pagination",attrs:{currentPage:~~t.page,total:~~t.total,path:"/authority-manage/user-manage"},on:{getPages:t.getPages}})],1),s("div",{staticClass:"public-component-line"}),t._l(t.listData,(function(a,e){return s("Col",{key:e,staticClass:"public-component-card",attrs:{span:"12"}},[s("adt-list-item",{attrs:{logistics:a,isFreight:!0},on:{checkData:t.checkData}},[s("template",{slot:"operat"},[s("Poptip",{staticClass:"card-icon clearfix",attrs:{placement:"right-start"}},[s("span",[t._v("编辑")]),s("Icon",{attrs:{type:"md-arrow-dropdown"}}),s("div",{staticClass:"card-poptip-font",attrs:{slot:"content"},slot:"content"})],1)],1)],2)],1)}))],2)},i=[],o=(s("dbb3"),s("ecb4"),s("2eeb"),s("ea69"),s("7b46")),r=s("b620"),l={mixins:[o["a"]],components:{AdtListItem:r["a"]},data:function(){return{listData:[{statusCode:"disagree",status:"销售已反馈",logisticsPlanNumber:"物流方案编号1",time:"时效",price:"价格",location:[{city:"重庆1",transport:"空运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]},{statusCode:"disagree",status:"销售已反馈",logisticsPlanNumber:"物流方案编号3",time:"时效",price:"价格",location:[{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]}],selectList:{},transitModal:"",transitLoading:!1,transitData:[],list:["加拿大","北级","北京","加州","哈尔滨","邯郸","韩国"],search:{},auditStatusNum:"默认值",auditStatusList:[{code:"unreviewed",status:"已下单"},{code:"stock",status:"已接受"},{code:"stock",status:"已拒绝"},{code:"stock",status:"已取消"},{code:"stock",status:"未确定计划"},{code:"stock",status:"不同意计划"},{code:"stock",status:"待货好"},{code:"progress",status:"进行中"},{code:"progress",status:"已完成"},{code:"progress",status:"异常进行中"},{code:"progress",status:"异常处理中"},{code:"progress",status:"已撤销"},{code:"progress",status:"已支付"}],transitSelect:[],checkList:[],newList:[]}},methods:{hh:function(){this.$router.push("/logisstics-commission/singleDetail")},checkData:function(t,a){if(t&&!a)return t;this.checkList.push(t),console.log(this.checkList)},getPages:function(t){this.page=t},dataInit:function(){this.getData()},getData:function(){},auditStatus:function(t){this.auditStatusNum=t},onChangeClick:function(t){this.transitSelect.length>=5?console.log("不能超过5个中转地"):this.transitSelect.push(t.value)},transitRemote:function(t){var a=this;""!==t?(this.transitLoading=!0,setTimeout((function(){a.transitLoading=!1;var s=a.list.map((function(t){return{value:t,label:t}}));a.transitData=s.filter((function(a){return a.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}),200)):this.transitData=[]},delTransit:function(t){this.transitSelect.splice(t,1)}}},u=l,d=(s("7d17"),s("4023")),h=Object(d["a"])(u,c,i,!1,null,"0b7bbd92",null),p=h.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._v(" wocndncj ")])},f=[],g={name:"",data:function(){return{}},created:function(){},mounted:function(){},methods:{}},b=g,C=Object(d["a"])(b,m,f,!1,null,"821394c0",null),k=C.exports,v={components:{single:p,cycle:k},data:function(){return{}},methods:{}},_=v,w=(s("8c73"),Object(d["a"])(_,e,n,!1,null,"0cae0d82",null));a["default"]=w.exports},"7b46":function(t,a,s){"use strict";a["a"]={props:{page:{default:1}},data:function(){return{total:0,perpage:15}},mounted:function(){this.dataInit()},watch:{$route:function(){this.dataInit()}},methods:{paginatorInit:function(t,a){this.perpage=t,this.total=a}}}},"7d17":function(t,a,s){"use strict";var e=s("ca72"),n=s.n(e);n.a},"8c73":function(t,a,s){"use strict";var e=s("2897"),n=s.n(e);n.a},b620:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.showCheckbox?s("Checkbox",{staticClass:"card-check",on:{"on-change":function(a){return t.checkChange(t.data,t.isCheck)}},model:{value:t.isCheck,callback:function(a){t.isCheck=a},expression:"isCheck"}}):t._e(),s("Card",{class:{"card-margin":1==t.showCheckbox}},[t._t("tab-title"),t._t("tab-operat"),s("Divider"),t._t("tab-content"),t._t("tab-bottom")],2)],1)},n=[],c={name:"adt-list-item",props:{showCheckbox:{type:Boolean,default:!1},data:{type:Object,default:function(){}}},data:function(){return{showModal:!1,isCheck:!1}},methods:{checkChange:function(t,a){this.$emit("checkData",t,a)}}},i=c,o=s("4023"),r=Object(o["a"])(i,e,n,!1,null,null,null);a["a"]=r.exports},ca72:function(t,a,s){}}]);
//# sourceMappingURL=chunk-61276242.14d82774.js.map