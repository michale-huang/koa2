(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de2ec856"],{"4bb3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"freight-request"},[a("adt-btns",{attrs:{titleNames:t.titleTabNames,btnIndex:t.btnIndex,width:160},on:{handleBtn:t.goToOtherProductList}}),a("adt-search-folder",{attrs:{searchRouter:{query:{freightReqStatus:t.statusValue,departurePort:t.search.departurePort,trsspmPort:t.search.trsspmPort,destinationPort:t.search.destinationPort}},isTitle:!1,isStatus:!0}},[a("template",{slot:"status"},["1"===t.queryType?a("div",{staticClass:"status"},[a("div",{staticClass:"status-left"},[a("p",[a("i",[t._v("*")]),t._v(" 货运要求状态:")]),t._l(t.auditStatusList,(function(e,s){return a("span",{key:s,class:{"click-status":t.auditStatusNum==s},on:{click:function(a){return t.auditStatus(s,e)}}},[t._v(" "+t._s(e.dictionaryValue)+" ")])}))],2)]):t._e()]),a("template",{slot:"always-show"},[a("div",{staticClass:"public-transit"},[a("Form",{ref:"search",attrs:{model:t.search,inline:"","label-colon":""}},[a("FormItem",{attrs:{label:"货运要求编号"}},[a("Input",{attrs:{type:"text"},model:{value:t.search.freightReqCode,callback:function(e){t.$set(t.search,"freightReqCode",e)},expression:"search.freightReqCode"}})],1),a("FormItem",{attrs:{label:"企业名称"}},[a("Input",{attrs:{type:"text"},model:{value:t.search.enterpriseCode,callback:function(e){t.$set(t.search,"enterpriseCode",e)},expression:"search.enterpriseCode"}})],1),a("FormItem",{attrs:{label:"创建人"}},[a("Input",{attrs:{type:"text"},model:{value:t.search.createBy,callback:function(e){t.$set(t.search,"createBy",e)},expression:"search.createBy"}})],1),a("FormItem",{attrs:{label:"销售名称"}},[a("Input",{attrs:{type:"text"},model:{value:t.search.saleName,callback:function(e){t.$set(t.search,"saleName",e)},expression:"search.saleName"}})],1)],1)],1)])],2),a("div",{staticClass:"btns-paginator"},[a("AdtButton",[a("Button",{on:{click:t.addFreight}},[t._v("新建货运要求"),a("Icon",{attrs:{type:"ios-add-circle-outline"}})],1)],1),a("adt-paginator",{attrs:{currentPage:~~t.page,total:~~t.total}})],1),a("div",{staticClass:"public-component-line"}),a("div",{staticClass:"public-list"},t._l(t.listData,(function(e,s){return a("Col",{key:s,staticClass:"public-component-card public-card-width",attrs:{span:"24"}},[a("adt-list-item",{attrs:{data:e,showCheckbox:!0},on:{checkData:t.checkData}},[a("template",{slot:"tab-title"},[a("span",[t._v("货运要求编号:"+t._s(e.freightReqCode))])]),a("template",{slot:"tab-operat"},[e.freightReqStatus?a("span",{staticClass:"card-status-success",class:{"card-status-error":"未同意方案"==e.freightReqStatus,"card-status":"取消货运要求"==e.freightReqStatus}},[t._v(t._s(e.freightReqStatus))]):t._e(),a("Poptip",{staticClass:"card-icon",attrs:{placement:"right-start"}},[a("span",[t._v("编辑要求")]),a("Icon",{attrs:{type:"md-arrow-dropdown"}}),"1"===t.queryType?a("div",{staticClass:"card-poptip-font",attrs:{slot:"content"},slot:"content"},[a("div",{on:{click:function(a){return t.detail(e)}}},[t._v("查看详情")]),"已同意方案"===e.freightReqStatus?a("div",{on:{click:function(a){return t.viewRecommendations(e)}}},[t._v("查看推荐方案")]):t._e(),"待调度处理"===e.freightReqStatus?a("div",{on:{click:function(a){return t.generateLogisticsSolutions(e)}}},[t._v("生成物流方案")]):t._e(),"待调度处理"===e.freightReqStatus?a("div",{on:{click:function(a){return t.queryLogisticsSolution(e)}}},[t._v("查询物流方案")]):t._e(),"调度已反馈方案"===e.freightReqStatus||"已反馈方案"===e.freightReqStatus?a("div",{on:{click:function(a){return t.ViewLogisticsSolution(e)}}},[t._v("查看物流方案")]):t._e()]):a("div",{staticClass:"card-poptip-font",attrs:{slot:"content"},slot:"content"},[a("div",{on:{click:function(a){return t.detail(e)}}},[t._v("查看详情")]),a("div",{on:{click:function(a){return t.send(e)}}},[t._v("发送要求")]),a("div",{on:{click:function(a){return t.queryLogisticsSolution(e)}}},[t._v("查询物流方案")]),a("div",{on:{click:function(a){return t.generateLogisticsSolutions(e)}}},[t._v("生成物流方案")]),a("div",{on:{click:function(a){return t.ViewLogisticsSolution(e)}}},[t._v("查看物流方案")])])],1)],1),a("template",{slot:"tab-content"},[a("div",{staticClass:"public-modify-record data-item tab-content"},[e.freightRouteList?a("div",{staticClass:"collapse"},[a("Collapse",{attrs:{accordion:""}},[a("Panel",{attrs:{name:"1"}},[a("Row",[a("Col",{attrs:{span:"22"}},[a("ul",t._l(e.freightRouteList[0].roadList,(function(s,i){return a("li",{key:i},[a("span",{staticClass:"path"},[t._v(t._s(s.departurePort))]),a("span",{staticClass:"desc"},[t._v(t._s(s.serverParam.logisticsType)+"-"+t._s(s.serverParam.trspType))]),a("i",[t._v(">>")]),i===e.freightRouteList[0].roadList.length-1?[a("span",{staticClass:"path last-path"},[t._v(t._s(s.destinationPort))])]:t._e()],2)})),0),a("p",{staticClass:"status"},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:"0"===e.freightRouteList[0].matchScheme,expression:"product.freightRouteList[0].matchScheme === '0'"}],attrs:{type:"ios-information-circle"}}),a("Icon",{directives:[{name:"show",rawName:"v-show",value:"1"===e.freightRouteList[0].matchScheme,expression:"product.freightRouteList[0].matchScheme === '1'"}],attrs:{type:"ios-checkmark-circle"}}),t._v(" "+t._s("0"===e.freightRouteList[0].matchScheme?"未匹配到物流方案":"已匹配到物流方案")+" ")],1)]),a("Col",{attrs:{span:"2"}})],1),a("div",{attrs:{slot:"content"},slot:"content"},t._l(e.freightRouteList,(function(e,s){return a("Row",{directives:[{name:"show",rawName:"v-show",value:0!==s,expression:"index!==0"}],key:s,staticClass:"content-row"},[a("Col",{attrs:{span:"22"}},[a("ul",t._l(e.roadList,(function(s,i){return a("li",{key:i},[a("span",{staticClass:"path"},[t._v(t._s(s.departurePort))]),a("span",{staticClass:"desc"},[t._v(t._s(s.serverParam.logisticsType)+"-"+t._s(s.serverParam.trspType))]),a("i",[t._v(">>")]),i===e.roadList.length-1?[a("span",{staticClass:"path last-path"},[t._v(t._s(s.destinationPort))])]:t._e()],2)})),0),a("p",{staticClass:"status"},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:"0"===e.matchScheme,expression:"itemList.matchScheme === '0'"}],attrs:{type:"ios-information-circle"}}),a("Icon",{directives:[{name:"show",rawName:"v-show",value:"1"===e.matchScheme,expression:"itemList.matchScheme === '1'"}],attrs:{type:"ios-checkmark-circle"}}),t._v(" "+t._s("0"===e.matchScheme?"未匹配到物流方案":"已匹配到物流方案")+" ")],1)])],1)})),1)],1)],1)],1):t._e()])]),a("template",{slot:"tab-bottom"},[a("div",{staticClass:"tab-bottom"},[a("Row",[a("Col",{attrs:{span:"6"}},[t._v("接收时间："+t._s(t.timestampFormat(e.modifyDatetime)))]),a("Col",{attrs:{span:"6"}},[t._v("企业名称："+t._s(e.enterpriseCode))]),a("Col",{attrs:{span:"6"}},[t._v("创建人："+t._s(e.createBy))]),a("Col",{attrs:{span:"6"}},[t._v("销售名称："+t._s(e.saleName))])],1)],1)])],2)],1)})),1)],1)},i=[],n=(a("ecb4"),a("2eeb"),a("ea69"),a("e18c"),a("e35a"),a("9cf3"),a("80a0")),r=(a("b449"),a("5d83")),c=a("77ab"),o=(a("e56e"),a("7b46")),u=a("b620"),l=a("8a9d"),h=a("90fe"),d={mixins:[o["a"]],components:{AdtListItem:u["a"]},data:function(){return{changeText:"展开",btnIndex:1,titleTabNames:["接收的要求","录入的要求"],dataValue:[],search:{freightReqCode:"",saleName:"",createBy:"",enterpriseCode:""},departurePort:[],trsspmPort:[],destinationPort:[],trspType:this.$getDictionary("TRANSPORT_TYPE")||[],cargoType:this.$getDictionary("GOODS_TYPE")||[],freightReqParam:{},listData:[],selectList:{},transitLoading:!1,transitData:[],transitSelect:[],checkList:[],auditStatusNum:"0",auditStatusList:this.$getDictionary("FREIGHTREQ_STATUS"),statusValue:"PENDDSPC",queryType:"1"}},mounted:function(){console.log(this.auditStatusList)},methods:{timestampFormat:function(t){return Object(h["e"])(t)},_handelDir:function(t,e){return console.log(t),new Promise((function(e,a){var s=t[t.length-1];Object(c["c"])({city:s}).then((function(t){var a=t.data,s=a[0],i=s.map((function(t){return{value:t.sttnCode,label:t.sttnName}}));e(i)}))}))},handelDirStart:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e._handelDir(t.value);case 2:s=a.sent,e.departurePort=s;case 4:case"end":return a.stop()}}),a)})))()},handelDirTrsspmPort:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e._handelDir(t.value);case 2:s=a.sent,e.trsspmPort=s;case 4:case"end":return a.stop()}}),a)})))()},handelDirEnd:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e._handelDir(t.value);case 2:s=a.sent,e.destinationPort=s;case 4:case"end":return a.stop()}}),a)})))()},edit:function(t){},detail:function(t){"null"===t.freightReqStatus?this.$router.push("/freight-request/feedback-detail/".concat(t.freightReqCode)):this.$router.push("/freight-request/dispatch-to-edit/".concat(t.freightReqCode))},generateLogisticsSolutions:function(t){var e=this,a=t.freightReqCode;Object(l["g"])({data:a}).then((function(a){200===a.code?(window.localStorage.setItem("freightData",JSON.stringify(t)),e.$router.push({path:"/logistics-solutions/customer-service-plan/1",query:{sign:"generate"}})):e.$Message.info(a.message)}))},ViewLogisticsSolution:function(t){window.localStorage.setItem("freightData",JSON.stringify(t)),this.$router.push({path:"/logistics-solutions/customer-service-plan/1",query:{sign:"viewLogisticsSolution"}})},viewRecommendations:function(t){window.localStorage.setItem("freightData",JSON.stringify(t)),this.$router.push({path:"/logistics-solutions/customer-service-plan/1",query:{sign:"viewRecommendations"}})},queryLogisticsSolution:function(t){window.localStorage.setItem("freightData",JSON.stringify(t)),this.$router.push({path:"/logistics-solutions/customer-service-plan/1",query:{sign:"queryLogisticsSolution"}})},addFreight:function(){this.$router.push("/freight-request/dispatch-entry")},checkData:function(t,e){t&&e?this.checkList.push(t):t&&!e&&this.checkList.splice(this.checkList.indexOf(t),1),this.selectList={params:this.checkList}},auditStatus:function(t,e){this.auditStatusNum=t,this.statusValue=e.dictionaryKey},dataInit:function(){this.getData()},getData:function(){var t=this,e=Object(n["a"])(Object(n["a"])({size:10,page:this.page,freightReqStatus:this.statusValue},this.search),{},{queryType:this.queryType});Object(l["e"])({data:e}).then((function(e){t.total=e.data.totalElements,t.listData=e.data.content}))},send:function(t){var e=this,a={freightReqCode:t.freightReqCode,freightReqStatus:t.freightReqStatus};Object(l["o"])({data:a}).then((function(t){e.$Message.info(t.message),e.getData()}))},goToOtherProductList:function(t){switch(this.btnIndex=t+1,t){case 0:this.queryType="1",this.statusValue="PENDSALE",this.getData();break;case 1:this.statusValue="",this.queryType="0",this.getData();break}}}},f=d,p=(a("7740"),a("4023")),m=Object(p["a"])(f,s,i,!1,null,"9c7441f2",null);e["default"]=m.exports},"67aa":function(t,e,a){},7740:function(t,e,a){"use strict";var s=a("67aa"),i=a.n(s);i.a},"7b46":function(t,e,a){"use strict";e["a"]={props:{page:{default:1}},data:function(){return{total:0,perpage:15}},created:function(){this.dataInit("judgment")},watch:{$route:function(){this.dataInit()}},methods:{paginatorInit:function(t,e){this.perpage=t,this.total=e}}}},"8a9d":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"k",(function(){return r})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return o})),a.d(e,"f",(function(){return u})),a.d(e,"o",(function(){return l})),a.d(e,"n",(function(){return h})),a.d(e,"i",(function(){return d})),a.d(e,"j",(function(){return f})),a.d(e,"m",(function(){return p})),a.d(e,"e",(function(){return m})),a.d(e,"l",(function(){return g})),a.d(e,"d",(function(){return v})),a.d(e,"h",(function(){return b})),a.d(e,"g",(function(){return _}));var s=a("2934"),i=a("4ec3"),n=function(t){return Object(s["b"])("".concat(i["c"],"/customer/add-freight"),t)},r=function(t){return Object(s["b"])("".concat(i["c"],"/sale/add-freight"),t)},c=function(t){return Object(s["b"])("".concat(i["c"],"/dispatch/add-freight"),t)},o=function(t){return Object(s["b"])("".concat(i["c"],"/customer/add-freight-simple"),t)},u=function(t){return Object(s["b"])("".concat(i["c"],"/customer/generate-route"),t)},l=function(t){return Object(s["b"])("".concat(i["c"],"/customer/send-sale"),t)},h=function(t){return Object(s["b"])("".concat(i["c"],"/sale/send-dispatch"),t)},d=function(t){return Object(s["a"])("".concat(i["c"],"/customer/query-detail-freight"),t)},f=function(t){return Object(s["b"])("".concat(i["c"],"/customer/query-list-freight"),t)},p=function(t){return Object(s["b"])("".concat(i["c"],"/sale/query-list-freight"),t)},m=function(t){return Object(s["b"])("".concat(i["c"],"/dispatch/query-list-freight"),t)},g=function(t){return Object(s["a"])("".concat(i["c"],"/sale/query-detail-freight"),t)},v=function(t){return Object(s["a"])("".concat(i["c"],"/dispatch/query-detail-freight"),t)},b=function(t){return Object(s["a"])("".concat(i["c"],"/customer/get-task-affix/")+t.trspType+"/"+t.logisticsType)},_=function(t){return Object(s["a"])("".concat(i["c"],"/get/generate"),t)}},b620:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showCheckbox?a("Checkbox",{staticClass:"card-check",on:{"on-change":function(e){return t.checkChange(t.logistics,t.isCheck)}},model:{value:t.isCheck,callback:function(e){t.isCheck=e},expression:"isCheck"}}):t._e(),a("Card",{class:{"card-margin":1==t.showCheckbox}},[t._t("tab-title"),t._t("tab-operat"),a("Divider"),t._t("tab-content"),t._t("tab-bottom")],2)],1)},i=[],n={name:"adt-list-item",props:{showCheckbox:{type:Boolean,default:!1},logistics:{type:Object,default:function(){}},resetCheckStatus:{type:Boolean,default:!1}},data:function(){return{showModal:!1,isCheck:!1}},watch:{resetCheckStatus:function(){this.isCheck=!1}},methods:{checkChange:function(t,e){this.$emit("checkData",t,e)}}},r=n,c=a("4023"),o=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-de2ec856.30c3ecbb.js.map