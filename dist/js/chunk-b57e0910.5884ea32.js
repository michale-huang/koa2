(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b57e0910"],{"34b1":function(t,a,e){},"36e1":function(t,a,e){},4033:function(t,a,e){"use strict";var s=e("34b1"),i=e.n(s);i.a},4754:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"orderDetail"},[e("header-btn",{attrs:{title:"订单编号:"+t.detailData.orderCode}},[e("div",{attrs:{slot:"btn"},slot:"btn"},["WAIT"==t.detailData.orderStatus||"待接单"==t.detailData.orderStatusTranslate?e("Button",{on:{click:t.openDialog}},[t._v("拒绝订单")]):t._e(),"REJECT"!==t.detailData.orderStatus?e("Button",{on:{click:t.openReceiptDialog}},[t._v("查看执行单据")]):t._e(),"WAIT"==t.detailData.orderStatus||"待接单"==t.detailData.orderStatusTranslate?e("Button",{attrs:{type:"primary"},on:{click:t.accept}},[t._v("接受订单")]):t._e()],1)]),e("div",{staticClass:"main-box"},[e("div",{staticClass:"route-box"},[e("cart-route",{attrs:{routeData:t.detailData}})],1),e("div",{staticClass:"time"},[e("span",[t._v(t._s(t.detailData.createEtpsName))]),e("span",[t._v(" 计划时间："+t._s(t.moment_time_m(t.detailData.planStartTime))+" -- "+t._s(t.moment_time_m(t.detailData.planEndTime))+" ")])]),e("div",{staticClass:"public-line1jz",staticStyle:{background:"#999"}}),e("div",{staticClass:"chang-jing"},[e("scene-map",{attrs:{List:t.sceneMapResKList},on:{auditStatus:t.handelValue}})],1),e("Divider",{staticStyle:{"border-color":"#999",margin:"0",marginTop:"10px"},attrs:{dashed:!0}}),t.BasicTaskList.length?e("div",{staticClass:"list-item"},[e("div",{staticClass:"tit"},[t._v(" 基础任务内容： "),e("span",[t._v(" (服务总价: ￥ "),e("span",[t._v(" "+t._s(t.BasicTaskList[0].taskCost)+" / "+t._s(t.BasicTaskList[0].goosUnit)+" ")]),e("span",[t._v(" 总时长："+t._s(t.BasicTaskList[0].serverDuration)+t._s(t.BasicTaskList[0].serverDurationUnit)+" ")]),t._v(") ")])]),e("div",{staticClass:"main"},[e("task-list",{attrs:{list:t.BasicTaskList},on:{handelTask:t.getFeedbackBasicTask}})],1)]):t._e(),"REJECT"!==t.detailData.orderStatus?e("div",{staticClass:"Feedback-form-box"},[e("feedbackForm",{ref:"feedbackFormId",attrs:{list:t.basislist,dataObj:t.basisObj}})],1):t._e(),t.AdditionalTaskList.length?e("div",{staticClass:"list-item"},[e("div",{staticClass:"tit"},[t._v("附加任务内容：")]),e("div",{staticClass:"main"},[e("task-list",{attrs:{list:t.AdditionalTaskList},on:{handelTask:t.getFeedbackAdditionalTask}})],1)]):t._e(),"REJECT"!==t.detailData.orderStatus?e("div",{staticClass:"Feedback-form-box"},[e("feedbackForm",{ref:"feedbackFormId2",attrs:{list:t.appendlist,dataObj:t.appendObj}})],1):t._e(),e("order-status",{ref:"orderStatusId",attrs:{detailData:t.detailData}}),e("receipt-dialog",{ref:"receiptDialogId",attrs:{ATlist:t.sceneMapResKList,detailData:t.detailData}})],1)],1)},i=[],r=(e("4de4"),e("d81d"),e("b64b"),e("d3b7"),e("5530")),n=(e("96cf"),e("1da1")),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"main"},["T"==t.routeData.serverType||"运输"==t.routeData.serverTypeTranslate?e("div",{staticClass:"item-main"},[e("div",{staticClass:"txt",attrs:{title:t.routeData.departurePortTranslate}},[t._v(t._s(t.routeData.departurePortTranslate))]),e("div",{staticClass:"icon"},[e("svg",{staticClass:"iconfont jiantou",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-andaotongcaidanICON_jiantou"}})])]),e("div",{staticClass:"txt"},[t._v(t._s(t.routeData.departurePortTranslate))])]):t._e(),e("div",{staticClass:"item-main"},[e("div",{staticClass:"txt",attrs:{title:t.routeData.serverLocusTranslate}},[t._v(t._s(t.routeData.serverLocusTranslate))])]),e("div",{staticClass:"icon-box"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},["2"==t.routeData.trspMode?e("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-feiji800"}}):t._e(),"3"==t.routeData.trspMode?e("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-huoche"}}):t._e(),"4"==t.routeData.trspMode?e("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-andaotongcaidanICON_huoche"}}):t._e(),"1"==t.routeData.trspMode?e("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-andaotongcaidanICON_lunchuan"}}):t._e()])])])])},c=[],d={name:"",props:{routeData:{type:Object,default:function(){return{}}}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},u=d,l=(e("4033"),e("2877")),p=Object(l["a"])(u,o,c,!1,null,"5a9acac8",null),f=p.exports,m=e("5e47"),b=e("77ab"),v=e("c9c1"),_=e("28b6"),k=e("9c3a"),h=e("3953"),D=e("ae0f"),C=e("c11e"),g={name:"",mixins:[v["a"]],components:{cartRoute:f,headerBtn:m["a"],sceneMap:_["a"],orderStatus:k["a"],taskList:h["a"],feedbackForm:D["a"],receiptDialog:C["a"]},data:function(){return{detailData:{},sceneMapResKList:[],BasicTaskList:[],AdditionalTaskList:[],StructureList:[],basislist:[],basisObj:{},appendlist:[],appendObj:{}}},computed:{cptOrderCode:function(){return this.$route.query.orderCode}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getDetail();case 2:case"end":return a.stop()}}),a)})))()},mounted:function(){},methods:{openReceiptDialog:function(){this.$refs.receiptDialogId.openDialog()},openDialog:function(){this.$refs.orderStatusId.openDialog()},accept:function(){this.$refs.orderStatusId.accept(this.detailData)},handelValue:function(t){this.BasicTaskList=this.detailData.sceneMapRes[t].filter((function(t){return"B"==t.taskType})),this.AdditionalTaskList=this.detailData.sceneMapRes[t].filter((function(t){return"A"==t.taskType}))},getDetail:function(){var t=this;Object(b["r"])({orderCode:this.cptOrderCode}).then((function(a){var e=a.data;t.detailData=e,t.sceneMapResKList=Object.keys(e.sceneMapRes)}))},_Feedback:function(t){var a=this;return new Promise((function(e,s){var i={taskCode:t.taskCode,orderCode:t.orderCode};Object(b["p"])({data:i}).then((function(t){var s=t.data,i=s.dataStructure,n=void 0===i?[]:i,o=n.sort((function(t,a){return t.sort-a.sort})).map((function(t){return t.sourceValue?Object(r["a"])(Object(r["a"])({},t),{},{opList:a.$getDictionary(t.sourceValue)}):Object(r["a"])({},t)}));e(o)}))}))},getFeedbackBasicTask:function(t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.basisObj={orderCode:a.detailData.orderCode,taskCode:t.taskCode},e.next=3,a._Feedback(a.basisObj);case 3:a.basislist=e.sent;case 4:case"end":return e.stop()}}),e)})))()},getFeedbackAdditionalTask:function(t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.appendObj={orderCode:a.detailData.orderCode,taskCode:t.taskCode},e.next=3,a._Feedback(a.appendObj);case 3:a.appendlist=e.sent;case 4:case"end":return e.stop()}}),e)})))()}}},T=g,j=(e("70b2"),Object(l["a"])(T,s,i,!1,null,"2c60dc98",null));a["default"]=j.exports},"70b2":function(t,a,e){"use strict";var s=e("36e1"),i=e.n(s);i.a},de59:function(t,a,e){"use strict";e("d3b7"),e("25f0");var s=e("c1df"),i=e.n(s),r=Object.prototype.toString;a["a"]={data:function(){return{}},watch:{},methods:{isArrVal_m:function(t){return"[object Array]"===r.call(t)&&0!==t.length},isStr_m:function(t){return"[object String]"===r.call(t)},datetimerange_m:function(t,a,e){if(this.isArrVal_m(t)){var s={};return s[a]=i()(t[0]).valueOf(),s[e]=i()(t[1]).valueOf(),s}return{}},momentd_Y_M_m:function(t){return t?i()(t).format("YYYY.MM"):"后端无数据"},moment_xie_Y_M_m:function(t){return t?i()(t).format("YYYY/MM"):"后端无数据"},moment_xie_m:function(t){return t?i()(t).format("YYYY/MM/DD hh:mm"):"后端无数据"}}}}}]);