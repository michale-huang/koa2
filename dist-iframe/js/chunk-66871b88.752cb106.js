(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66871b88"],{"35ec":function(t,e,a){"use strict";a.d(e,"v",(function(){return r})),a.d(e,"r",(function(){return i})),a.d(e,"o",(function(){return c})),a.d(e,"t",(function(){return o})),a.d(e,"s",(function(){return u})),a.d(e,"q",(function(){return l})),a.d(e,"p",(function(){return d})),a.d(e,"m",(function(){return p})),a.d(e,"n",(function(){return v})),a.d(e,"u",(function(){return f})),a.d(e,"l",(function(){return h})),a.d(e,"h",(function(){return m})),a.d(e,"e",(function(){return b})),a.d(e,"j",(function(){return g})),a.d(e,"i",(function(){return C})),a.d(e,"g",(function(){return _})),a.d(e,"f",(function(){return x})),a.d(e,"c",(function(){return j})),a.d(e,"d",(function(){return S})),a.d(e,"k",(function(){return y})),a.d(e,"a",(function(){return k})),a.d(e,"b",(function(){return w}));var n=a("2934"),s=a("4ec3"),r=function(t){return Object(n["c"])("".concat(s["j"],"/transport/query-list"),t)},i=function(t){return Object(n["c"])("".concat(s["j"],"/transport/exam-enable"),t)},c=function(t){return Object(n["c"])("".concat(s["j"],"/transport/exam-disable"),t)},o=function(t){return Object(n["c"])("".concat(s["j"],"/transport/valid-exam-pass"),t)},u=function(t){return Object(n["c"])("".concat(s["j"],"/transport/valid-exam-fail"),t)},l=function(t){return Object(n["c"])("".concat(s["j"],"/transport/disabled-exam-pass"),t)},d=function(t){return Object(n["c"])("".concat(s["j"],"/transport/disabled-exam-fail"),t)},p=function(t){return Object(n["a"])("".concat(s["j"],"/transport/add-code"),t)},v=function(t){return Object(n["c"])("".concat(s["j"],"/transport/add-server"),t)},f=function(t){return Object(n["a"])("".concat(s["j"],"/transport/query-detail"),t)},h=function(t){return Object(n["c"])("".concat(s["j"],"/station/query-page"),t)},m=function(t){return Object(n["c"])("".concat(s["j"],"/station/exam-enable"),t)},b=function(t){return Object(n["c"])("".concat(s["j"],"/station/exam-disable"),t)},g=function(t){return Object(n["c"])("".concat(s["j"],"/station/valid-exam-pass"),t)},C=function(t){return Object(n["c"])("".concat(s["j"],"/station/valid-exam-fail"),t)},_=function(t){return Object(n["c"])("".concat(s["j"],"/station/disabled-exam-pass"),t)},x=function(t){return Object(n["c"])("".concat(s["j"],"/station/disabled-exam-fail"),t)},j=function(t){return Object(n["a"])("".concat(s["j"],"/station/add-code"),t)},S=function(t){return Object(n["c"])("".concat(s["j"],"/station/add-server"),t)},y=function(t){return Object(n["a"])("".concat(s["j"],"/station/query-detail"),t)},k=function(t){return Object(n["c"])("".concat(s["j"],"/server/query-scene"),t)},w=function(t){return Object(n["a"])("".concat(s["j"],"/server/query-task"),t)}},"91c6":function(t,e,a){"use strict";var n=a("c7b4"),s=a.n(n);s.a},c7b4:function(t,e,a){},db8e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("adt-btns",{attrs:{width:160,titleNames:t.titleNames,btnIndex:t.btnIndex},on:{handleBtn:t.goToOtherProductList}}),a("adt-search-folder",{attrs:{searchRouter:{query:t.search},isStatus:!0,isTitle:!1}},[a("template",{slot:"status"},[a("div",{staticClass:"status"},[a("Col",{attrs:{span:"22"}},[a("div",{staticClass:"name"},[t._v("供应商产品状态：")]),t._l(t.productStatus,(function(e){return a("span",{key:e.dictionaryKey,class:{"click-status":t.search.serverStatus===e.dictionaryKey},on:{click:function(a){return t.auditStatus(e.dictionaryKey)}}},[t._v(" "+t._s(e.dictionaryValue)+" ")])}))],2)],1)]),a("template",{slot:"always-show"},[a("Col",{staticClass:"form-item",attrs:{span:"8"}},[a("span",{staticStyle:{width:"65px","flex-shrink":"0"}},[t._v("国家城市:")]),a("adt-city-selector",{attrs:{defaultData:t.search.city},on:{"on-change":t.changeCity}}),a("span",{staticStyle:{width:"65px","flex-shrink":"0"}},[t._v("选择场所:")]),a("Select",{attrs:{clearable:""},model:{value:t.search.site,callback:function(e){t.$set(t.search,"site",e)},expression:"search.site"}},t._l(t.siteOptions,(function(e,n){return a("Option",{key:n,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("Col",{staticClass:"form-item",attrs:{span:"5",offset:"1"}},[a("span",{staticStyle:{"margin-right":"12px","text-align":"right"}},[t._v("产品编号:")]),a("Input",{attrs:{clearable:""},model:{value:t.search.serverCode,callback:function(e){t.$set(t.search,"serverCode",e)},expression:"search.serverCode"}})],1)],1)],2),a("div",{staticClass:"btns-paginator"},[a("adt-button",{attrs:{selectList:t.selectList}},[a("Button",{on:{click:function(e){return t.addProduct()}}},[t._v(" 新建产品 "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_tianjia"}})])]),a("Button",{on:{click:function(e){return t.validApply(t.apiAuditTrue,"")}}},[t._v(" "+t._s("有效"+(t.isManager?"":"申请"))+" "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-shenqing"}})])]),a("Button",{on:{click:function(e){return t.invalidApply(t.apiAuditFalse,"")}}},[t._v(" "+t._s("失效"+(t.isManager?"":"申请"))+" "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-shenqing"}})])])],1),a("adt-paginator",{attrs:{currentPage:~~t.page,total:~~t.total,size:t.size}})],1),a("div",{staticClass:"public-component-line"}),a("div",{staticClass:"public-list three-column"},t._l(t.listData,(function(e,n){return a("div",{key:n,staticClass:"public-component-card"},[a("adt-list-item",{attrs:{logistics:e,showCheckbox:!0,resetCheckStatus:t.resetCheckStatus},on:{checkData:t.checkData}},[a("template",{slot:"tab-title"},[a("span",[t._v("产品编号:"+t._s(e.serverCode))])]),a("template",{slot:"tab-operat"},[a("span",{class:{"card-status-success":"upload"===e.serverStatus||"上载"===e.serverStatus||"enable"===e.serverStatus||"有效"===e.serverStatus||"wait"===e.serverStatus||"待审核"===e.serverStatus,"card-status-error":"fail"===e.serverStatus||"审核未通过"===e.serverStatus,"card-status-disable":"disable"===e.serverStatus||"失效"===e.serverStatus}},[t._v(t._s(e.serverStatusTranslate))]),a("Poptip",{staticClass:"card-icon",attrs:{placement:"right-start",trigger:"hover"}},[a("span",[t._v("详情")]),a("Icon",{attrs:{type:"md-arrow-dropdown"}}),a("div",{staticClass:"card-poptip-font",attrs:{slot:"content"},slot:"content"},[!t.isManager||"wait"!==e.serverStatus&&"待审核"!==e.serverStatus?t._e():a("div",{on:{click:function(a){return t.examine(e)}}},[t._v(" 审核 ")]),"upload"===e.serverStatus||"上载"===e.serverStatus||"disable"===e.serverStatus||"失效"===e.serverStatus||"fail"===e.serverStatus||"审核未通过"===e.serverStatus?a("div",{on:{click:function(a){return t.validApply(t.apiAuditTrue,e)}}},[t._v(" "+t._s("有效"+(t.isManager?"":"申请"))+" ")]):t._e(),"enable"===e.serverStatus||"有效"===e.serverStatus||"fail"===e.serverStatus||"审核未通过"===e.serverStatus?a("div",{on:{click:function(a){return t.invalidApply(t.apiAuditFalse,e)}}},[t._v(" "+t._s("失效"+(t.isManager?"":"申请"))+" ")]):t._e(),a("div",{on:{click:function(a){return t.detail(e)}}},[t._v("详情")])])],1)],1),a("template",{slot:"tab-content"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"province"},[t._v(" "+t._s(e.sttnCodeTranslate&&e.sttnCodeTranslate.split(";").slice(0,e.sttnCodeTranslate.split(";").length-1).join(""))+" ")]),a("div",{staticClass:"site",attrs:{title:e.sttnCodeTranslate&&e.sttnCodeTranslate.split(";").pop()}},[t._v(" "+t._s(e.sttnCodeTranslate&&e.sttnCodeTranslate.split(";").pop())+" ")]),e.PrefDiscount?[a("div",{staticClass:"account"},[a("span",[t._v(t._s(e.PrefDiscount))]),t._v("%")]),a("svg",{staticClass:"iconfont account-tag",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-andaotongcaidanICON_huaban28youhuizhekou"}})])]:t._e()],2)]),a("template",{slot:"tab-bottom"},[a("div",{staticClass:"tab-bottom"},[a("Row",[a("Col",{attrs:{span:"24"}},[t._v(" 有效期： "+t._s(t.timestampFormat(e.serverStartTime))+" -- "+t._s(t.timestampFormat(e.serverEndTime))+" ")])],1),a("Row",[a("Col",{attrs:{span:"10"}},[t._v("执行时长："+t._s(e.totalTime)+t._s(e.totalTimeUnitTranslate))]),a("Col",{staticClass:"text-right",attrs:{span:"14"}},[t._v(" 价格：￥"),a("span",[t._v(t._s(e.priceTotal))]),t._v("/"+t._s("C"===e.trspType||"集装箱"===e.trspType?"TEU":"KG")+" ")])],1)],1)])],2)],1)})),0),a("adt-my-modal",{attrs:{title:"设置优惠折扣比",showModal:t.isModalShow},on:{"on-visible-change":t.visibleChange,"on-ok":function(e){return t.confirmSetDiscount()}}},[a("Form",{ref:"formValidate",attrs:{"label-position":"left",model:t.discountData,rules:t.ruleValidate,"label-colon":!0,"label-width":120,inline:""}},[a("FormItem",{attrs:{label:"优惠折扣比",prop:"discount"}},[a("Input",{attrs:{placeholder:"输入1~99之间的数字"},model:{value:t.discountData.discount,callback:function(e){t.$set(t.discountData,"discount",e)},expression:"discountData.discount"}},[a("span",{staticStyle:{"line-height":"32px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("%")])])],1)],1)],1),a("adt-reconfirm-modal",{attrs:{message:"确认取消勾选产品的优惠折扣吗？",title:"取消折扣",showModal:t.isCancelDiscountModalShow},on:{"on-visible-change":t.cancelDiscountVisibleChange,"on-ok":function(e){return t.confirmCancelDiscount()}}}),a("adt-my-modal",{attrs:{width:"600",title:t.examineModalTitle,showModal:t.isExamineModalShow},on:{"on-visible-change":t.examineVisibleChange,"on-ok":function(e){return t.examineSave(t.apiAuditTrueOk,t.apiAuditTrueNo,t.apiAuditFalseOk,t.apiAuditFalseNo)}}},[a("RadioGroup",{staticStyle:{"margin-bottom":"20px"},model:{value:t.agree,callback:function(e){t.agree=e},expression:"agree"}},[a("Radio",{attrs:{label:"1"}},[t._v("同意"+t._s(1===t.examineType?"有效":"失效"))]),a("Radio",{staticStyle:{"margin-left":"30px"},attrs:{label:"0"}},[t._v("不同意"+t._s(1===t.examineType?"有效":"失效"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"0"===t.agree,expression:"agree === '0'"}]},[a("div",{staticClass:"reason-name",staticStyle:{"margin-bottom":"6px"}},[t._v("不同意原因备注:")]),a("Input",{attrs:{type:"textarea",placeholder:"请输入内容..."},model:{value:t.reason,callback:function(e){t.reason="string"===typeof e?e.trim():e},expression:"reason"}})],1)],1),a("adt-reconfirm-modal",{attrs:{title:"失效审核",message:t.sxMessage,showModal:t.isSxModalShow},on:{"on-visible-change":t.sxVisibleChange,"on-ok":function(e){return t.confirmSx()}}}),a("adt-reconfirm-modal",{attrs:{showModal:t.isDeleteModalShow},on:{"on-visible-change":t.deleteVisibleChange,"on-ok":function(e){return t.confirmDelete()}}})],1)},s=[],r=(a("99af"),a("a15b"),a("ac1f"),a("841c"),a("1276"),a("96cf"),a("1da1")),i=a("01ef9"),c=a("35ec"),o={mixins:[i["a"]],props:{city:"",site:"",serverStatus:"",serverCode:""},data:function(){return{apiAuditTrue:c["h"],apiAuditFalse:c["e"],apiAuditTrueOk:c["j"],apiAuditTrueNo:c["i"],apiAuditFalseOk:c["g"],apiAuditFalseNo:c["f"],search:{city:this.city,site:this.site,serverStatus:this.serverStatus,serverCode:this.serverCode},siteOptions:[],btnIndex:2}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.search.city){e.next=4;break}return e.next=3,t._handelDir(t.search.city.split("~"));case 3:t.siteOptions=e.sent;case 4:case"end":return e.stop()}}),e)})))()},methods:{getData:function(){var t=this,e=this.search.city?this.search.city.split("~"):[],a={page:this.page,size:this.size,sttnCode:e.length?"".concat(e.join(";"),";").concat(this.search.site||""):"",serverStatus:this.search.serverStatus,serverCode:this.search.serverCode};this.resetCheckStatus=!1,Object(c["l"])({data:a}).then((function(e){var a=e.data;t.listData=a.content||[],t.total=a.totalElements,t.selectList=[],t.resetCheckStatus=!0}))},addProduct:function(){this.$router.push("/product-editor/add-site-product")},edit:function(t){this.$router.push("")},detail:function(t){this.$router.push("/product-editor/product-detail/".concat(t.serverCode,"?type=site"))},changeCity:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.search.city=t.value.join("~"),a.next=3,e._handelDir(t.value);case 3:e.siteOptions=a.sent;case 4:case"end":return a.stop()}}),a)})))()}}},u=o,l=(a("91c6"),a("2877")),d=Object(l["a"])(u,n,s,!1,null,"36a89aa3",null);e["default"]=d.exports}}]);