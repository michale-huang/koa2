(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9758130a"],{"0708":function(t,e,a){"use strict";var s=a("b0d4"),n=a.n(s);n.a},"2f2c":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return c})),a.d(e,"f",(function(){return i})),a.d(e,"l",(function(){return o})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return u})),a.d(e,"i",(function(){return d})),a.d(e,"m",(function(){return p})),a.d(e,"g",(function(){return h})),a.d(e,"j",(function(){return m})),a.d(e,"n",(function(){return f})),a.d(e,"h",(function(){return b})),a.d(e,"k",(function(){return g})),a.d(e,"a",(function(){return v}));var s=a("2934"),n=a("4ec3"),r=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/getSchemeList"),t)},c=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/get-list-dspt"),t)},i=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/get-list-mkt"),t)},o=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/recommend-pass"),t)},l=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/get-scheme-details"),t)},u=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/get-scene-list"),t)},d=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/recommend-check"),t)},p=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/recommend-route"),t)},h=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/recommend-all"),t)},m=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/recommend-check-cstm"),t)},f=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/recommend-route-cstm"),t)},b=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/recommend-all-cstm"),t)},g=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/recommend-modify"),t)},v=function(t){return Object(s["b"])("".concat(n["d"],"/scheme/confirm-only-scheme"),t)}},"7b46":function(t,e,a){"use strict";e["a"]={props:{page:{default:1}},data:function(){return{total:0,perpage:15}},created:function(){this.dataInit("judgment")},watch:{$route:function(){this.dataInit()}},methods:{paginatorInit:function(t,e){this.perpage=t,this.total=e}}}},8392:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("adt-search-folder",{attrs:{searchRouter:{query:{accountName:t.search.accountName,organizationId:t.search.organizationId,phoneNumber:t.search.phoneNumber}}}},[a("template",{slot:"always-show"},[a("Form",{ref:"formSearch",attrs:{model:t.search,rules:t.ruleSearch,inline:"","label-width":100,"label-position":"left"}},[a("Row",[a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{prop:"departurePort",label:"启运地"}},[a("Input",{staticClass:"search-input",attrs:{clearable:""},model:{value:t.search.departurePort,callback:function(e){t.$set(t.search,"departurePort",e)},expression:"search.departurePort"}})],1)],1),a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{prop:"destinationPort",label:"目的地"}},[a("Input",{staticClass:"search-input",attrs:{clearable:""},model:{value:t.search.destinationPort,callback:function(e){t.$set(t.search,"destinationPort",e)},expression:"search.destinationPort"}})],1)],1),a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{prop:"cargoType",label:"货物类型"}},[a("Select",{staticClass:"search-input",attrs:{clearable:""},model:{value:t.search.cargoType,callback:function(e){t.$set(t.search,"cargoType",e)},expression:"search.cargoType"}},[a("Option",{attrs:{value:"beijing"}},[t._v("New York")]),a("Option",{attrs:{value:"shanghai"}},[t._v("London")]),a("Option",{attrs:{value:"shenzhen"}},[t._v("Sydney")])],1)],1)],1),a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{prop:"trspMode",label:"运输方式"}},[a("Select",{staticClass:"search-input",attrs:{clearable:""},model:{value:t.search.trspMode,callback:function(e){t.$set(t.search,"trspMode",e)},expression:"search.trspMode"}},[a("Option",{attrs:{value:"beijing"}},[t._v("New York")]),a("Option",{attrs:{value:"shanghai"}},[t._v("London")]),a("Option",{attrs:{value:"shenzhen"}},[t._v("Sydney")])],1)],1)],1),a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{prop:"trspType",label:"运输类型"}},[a("Select",{staticClass:"search-input",attrs:{clearable:""},model:{value:t.search.trspType,callback:function(e){t.$set(t.search,"trspType",e)},expression:"search.trspType"}},[a("Option",{attrs:{value:"beijing"}},[t._v("New York")]),a("Option",{attrs:{value:"shanghai"}},[t._v("London")]),a("Option",{attrs:{value:"shenzhen"}},[t._v("Sydney")])],1)],1)],1),a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{prop:"contaDimensionType",label:"集装箱尺寸类型"}},[a("Select",{staticClass:"search-input",attrs:{clearable:""},model:{value:t.search.contaDimensionType,callback:function(e){t.$set(t.search,"contaDimensionType",e)},expression:"search.contaDimensionType"}},[a("Option",{attrs:{value:"beijing"}},[t._v("New York")]),a("Option",{attrs:{value:"shanghai"}},[t._v("London")]),a("Option",{attrs:{value:"shenzhen"}},[t._v("Sydney")])],1)],1)],1),a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{prop:"contaSource",label:"集装箱来源"}},[a("Select",{staticClass:"search-input",attrs:{clearable:""},model:{value:t.search.contaSource,callback:function(e){t.$set(t.search,"contaSource",e)},expression:"search.contaSource"}},[a("Option",{attrs:{value:"beijing"}},[t._v("New York")]),a("Option",{attrs:{value:"shanghai"}},[t._v("London")]),a("Option",{attrs:{value:"shenzhen"}},[t._v("Sydney")])],1)],1)],1),a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{prop:"temff",label:"时效"}},[a("Input",{staticClass:"search-input",attrs:{clearable:""},model:{value:t.search.temff,callback:function(e){t.$set(t.search,"temff",e)},expression:"search.temff"}})],1)],1)],1)],1)],1)],2),a("div",{staticClass:"btns-paginator"},["cstm"==t.distinguishCharacter||"mkt"==t.distinguishCharacter?a("AdtButton",[a("Button",{on:{click:function(e){return t.add()}}},[t._v("新增货运要求"),a("Icon",{attrs:{type:"ios-add-circle-outline"}})],1)],1):t._e(),"dspt"==t.distinguishCharacter?a("AdtButton",{attrs:{allDelShow:!0,delUrl:t.delUrl,selectList:t.selectList}},[a("Button",{on:{click:function(e){return t.add()}}},[t._v("新增货运要求"),a("Icon",{attrs:{type:"ios-add-circle-outline"}})],1)],1):t._e(),a("adt-paginator",{staticClass:"pagination",attrs:{currentPage:~~t.page,total:~~t.total,path:"/authority-manage/user-manage"}})],1),a("div",{staticClass:"public-component-line"}),a("div",{staticClass:"public-list"},t._l(t.listData,(function(e,s){return a("div",{key:s,staticClass:"public-component-card"},[a("AdtListItem",{attrs:{logistics:e,showCheckbox:"dspt"==t.distinguishCharacter},on:{checkData:t.checkData}},[a("template",{slot:"tab-title"},[a("span",[t._v("物流服务方案编号:"+t._s(e.logisticsSchemeCode))])]),a("template",{slot:"tab-operat"},[a("Poptip",{staticClass:"card-icon",attrs:{placement:"right-start"}},[a("span",[t._v("编辑")]),a("Icon",{attrs:{type:"md-arrow-dropdown"}}),a("div",{staticClass:"card-poptip-font",attrs:{slot:"content"},slot:"content"},[a("p",{on:{click:function(a){return t.edit(e)}}},[t._v("编辑")]),a("p",{on:{click:function(a){return t.detail(e)}}},[t._v("详情")]),a("p",{staticClass:"failure",on:{click:function(a){return t.remove(e)}}},[t._v("删除")])])],1)],1),a("template",{slot:"tab-content"},[a("div",{staticClass:"card-route"},t._l(e.routeLists,(function(s,n){return a("div",{key:n,staticClass:"card-content"},[a("span",{staticClass:"card-outset"},[t._v(t._s(s.departurePort))]),n===e.routeLists.length-1?[a("span",{staticClass:"card-outset"},[t._v(t._s(s.destinationPort))])]:t._e(),a("div",{staticClass:"card-transit"},[a("div",{staticClass:"card-way"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},["陆运"==s.trspMode?a("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-andaotongcaidanICON_huoche"}}):t._e(),"海运"==s.trspMode?a("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-andaotongcaidanICON_lunchuan"}}):t._e()])]),a("div",{staticClass:"card-line"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{fill:"#02ADB5","xlink:href":"#icon-andaotongcaidanICON_jiantou3"}})])]),a("div",{staticClass:"card-genre"},[t._v(t._s(s.logisticsType)+t._s(s.trspType))])])],2)})),0)]),a("template",{slot:"tab-bottom"},["cstm"==t.distinguishCharacter?a("div",{staticClass:"card-bottom"},[a("span",[t._v("时效: "+t._s(e.hghtTmeff)+t._s(e.tmeffUnit))]),a("span"),a("span",{staticClass:"card-right"},[a("span",[t._v("价格:")]),a("span",{staticClass:"card-right-size"},[t._v(t._s(e.lwstPrice))]),a("span",[t._v("/"+t._s(e.offerCurr))])])]):t._e(),"mkt"==t.distinguishCharacter||"dspt"==t.distinguishCharacter?a("div",{staticClass:"card-bottom"},[a("span",[t._v("时效: "+t._s(e.lwstTmeff)+"-"+t._s(e.hghtTmeff)+t._s(e.tmeffUnit))]),a("span"),a("span",{staticClass:"card-right"},[a("span",[t._v("价格:")]),a("span",{staticClass:"card-right-size"},[t._v(t._s(e.lwstPrice)+"-"+t._s(e.hghtPrice))]),a("span",[t._v("/"+t._s(e.offerCurr))])])]):t._e()])],2)],1)})),0)],1)},n=[],r=(a("e35a"),a("9cf3"),a("7b46")),c=a("b962"),i=a("b620"),o=a("2f2c"),l={mixins:[r["a"]],components:{AdtListItem:i["a"]},data:function(){return{formSearch:{},delUrl:o["d"],selectList:{},distinguishCharacter:"",ruleSearch:{departurePort:[c["a"].required("启运地")[0]],destinationPort:[c["a"].required("目的地")[0]],cargoType:[c["a"].select("货物类型")[0]]},search:{departurePort:"",destinationPort:"",trspMode:"",cargoType:"",temff:"",trspType:"",contaDimensionType:"",contaSource:""},searchClick:"",auditStatusList:[{code:"unreviewed",status:"未审核"},{code:"stock",status:"未货好"},{code:"progress",status:"执行中"}],enableStatusList:[{code:"unreviewed",status:"已启用"},{code:"stock",status:"未启用"},{code:"progress",status:"已启用"}],listData:[{statusCode:"disagree",status:"需求未同意",logisticsPlanNumber:"物流方案编号1",time:"时效",price:"价格",location:[{city:"重庆1",transport:"空运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]},{statusCode:"agree",status:"方案已同意",logisticsPlanNumber:"物流方案编号2",time:"时效",price:"价格",location:[{city:"重庆2",transport:"空运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]},{statusCode:"refuse",status:"已拒绝",logisticsPlanNumber:"物流方案编号3",time:"时效",price:"价格",location:[{city:"重庆2",transport:"空运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]}]}},mounted:function(){this.distinguishCharacter="dspt"},methods:{dataInit:function(t){this.getData(t)},getData:function(t){var e=this,a={size:6,page:this.page,trspMode:this.search.trspMode,departurePort:"重庆",destinationPort:"北京",cargoType:"普货",temff:this.search.temff,trspType:this.search.trspType,contaDimensionType:this.search.contaDimensionType,contaSource:this.search.contaSource,flag:"true"};Object(o["d"])({data:a}).then((function(t){console.log(t),200==t.code&&(e.listData=t.data.content||[])}))},add:function(){"cstm"==this.distinguishCharacter&&this.$router.push({path:"/freight-control/freight-request/list/1"}),"mkt"!=this.distinguishCharacter&&"dspt"!=this.distinguishCharacter||this.$router.push({path:"/freight-control/freight-request/list/1"})},checkData:function(t,e){console.log(t,e)},edit:function(t){var e={logisticsSchemeCode:t.logisticsSchemeCode,roleType:"roleCstm"};this.$router.push({path:"/logistics-solutions/scheme-details",query:{logisticsData:e}})},detail:function(t){var e=t;window.sessionStorage.setItem("logisticsData",JSON.stringify(e)),this.$router.push({path:"/logistics-solutions/scheme-details"})},remove:function(t){}}},u=l,d=(a("0708"),a("4023")),p=Object(d["a"])(u,s,n,!1,null,"5592b779",null);e["default"]=p.exports},b0d4:function(t,e,a){},b620:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showCheckbox?a("Checkbox",{staticClass:"card-check",on:{"on-change":function(e){return t.checkChange(t.logistics,t.isCheck)}},model:{value:t.isCheck,callback:function(e){t.isCheck=e},expression:"isCheck"}}):t._e(),a("Card",{class:{"card-margin":1==t.showCheckbox}},[t._t("tab-title"),t._t("tab-operat"),a("Divider"),t._t("tab-content"),t._t("tab-bottom")],2)],1)},n=[],r={name:"adt-list-item",props:{showCheckbox:{type:Boolean,default:!1},logistics:{type:Object,default:function(){}},resetCheckStatus:{type:Boolean,default:!1}},data:function(){return{showModal:!1,isCheck:!1}},watch:{resetCheckStatus:function(){this.isCheck=!1}},methods:{checkChange:function(t,e){this.$emit("checkData",t,e)}}},c=r,i=a("4023"),o=Object(i["a"])(c,s,n,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-9758130a.fe792029.js.map