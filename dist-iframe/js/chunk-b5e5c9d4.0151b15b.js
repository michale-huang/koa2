(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5e5c9d4"],{"0b12":function(t,e,s){"use strict";var a=s("87af"),i=s.n(a);i.a},"87af":function(t,e,s){},"9b50":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard"},[s("div",{staticClass:"top-box"},[s("user-info"),s("div",{staticClass:"todu-box"},[s("div",{staticClass:"dai-ban"},t._l(t.pendingList,(function(e,a){return s("div",{key:a,staticClass:"item-box",on:{click:function(s){return t.handelRoute(e)}}},[s("div",{staticClass:"tit"},[t._v(t._s(e.titName))]),s("div",{staticClass:"add"},[t._v(" 今日待处理 "),s("span",[t._v("+"+t._s(e.addNum))])]),s("div",{staticClass:"num"},[t._v(t._s(e.num))])])})),0),s("div",{staticClass:"dang-qiang"},[s("div",{staticClass:"wei-tuo"},[s("div",{staticClass:"text-box"},[t._v(" 当前委托总量 "),s("span",[t._v(t._s(t.momentd_Y_M_m(t.ExecutoryObj.currentStartTime))+"-"+t._s(t.momentd_Y_M_m(t.ExecutoryObj.currentEndTime)))])]),s("div",{staticClass:"bar-box"},[s("div",{staticClass:"num"},[t._v(" "+t._s(t.ExecutoryObj.currentEntrustExecutoryNum)+" ")]),s("div",{staticClass:"bar"},[s("Progress",{attrs:{percent:t.cptpercent,"hide-info":"","stroke-width":5}})],1),s("div",{staticClass:"shuo-ming"},[s("div",{staticClass:"complete"},[t._v(" 已完成委托："+t._s(t.ExecutoryObj.currentPerformance)+" ")]),s("div",{staticClass:"go"},[t._v(" 进行中委托："+t._s(t.ExecutoryObj.currentUnderway)+" ")])])])]),s("div",{staticClass:"Vertical-line",staticStyle:{width:"1px",height:"104px",background:"#e5e5e5"}}),s("div",{staticClass:"wu-liu"},[s("div",{staticClass:"text-box"},[t._v(" "+t._s(t.planCountObj.titName)+" "),s("span",[t._v(t._s(t.momentd_Y_M_m(t.planCountObj.currentStartTime))+"-"+t._s(t.momentd_Y_M_m(t.planCountObj.currentEndTime)))])]),s("div",{staticClass:"num"},[t._v(" "+t._s(t.planCountObj.currentSchemeNum||t.planCountObj.currentFreightNum)+" ")])])])])],1),s("div",{staticClass:"bottom-box"},[s("div",{staticClass:"my-info"},[t._m(0),s("div",{staticClass:"list"},t._l(t.MessageList,(function(e,a){return s("div",{staticClass:"list-item"},[s("div",{staticClass:"text",on:{click:function(s){return t.editMes(e)}}},[s("span",{attrs:{title:e.messageContent},on:{click:function(t){e.messageStatus="已读"}}},[s("i",{class:["已读"===e.messageStatus?"yi_du":"wei_du"]}),t._v(" "+t._s(e.messageContent)+" ")])]),s("div",{staticClass:"time"},[t._v(" "+t._s(t.moment_xie_m(e.createTime))+" ")])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.seeMoreShow,expression:"seeMoreShow"}],staticClass:"btn",on:{click:t.seeMore}},[s("Icon",{attrs:{type:"ios-arrow-dropright"}}),s("span",[t._v("查看更多")])],1)]),s("div",{staticClass:"eachr-box"},[t.isRoles_m(["DIS"])?s("dischart"):t._e(),t.isRoles_m(["ENT","SALE"])?s("entchart"):t._e()],1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tit"},[s("div",{staticClass:"unread"},[t._v("未读")]),s("div",{staticClass:"read"},[t._v("已读")])])}],n=(s("fb6a"),s("d3b7"),s("5530")),u=(s("96cf"),s("1da1")),r=s("2b0e"),c=s("2819"),o=s.n(c),d=s("77ab"),l=s("de59"),m=s("36d5"),_=s("61fc"),h=s("0519"),b=s("82a6");r["default"].use(o.a);var v={name:"dashboard",mixins:[l["a"],m["a"]],components:{dischart:_["a"],entchart:h["a"],userInfo:b["a"]},data:function(){return{seeMoreShow:!0,pendingList:[],MessageList:[],planCountObj:{},ExecutoryObj:{}}},computed:{cptpercent:function(){var t=null;return t=this.ExecutoryObj.currentPerformance/this.ExecutoryObj.currentEntrustExecutoryNum*100,t}},created:function(){this.getPendingList(),this.getMessage()},mounted:function(){},methods:{editMes:function(t){Object(d["B"])({messageCode:t.messageCode}).then((function(t){t.data}))},seeMore:function(){this.seeMoreShow=!1,this.getMessage()},_processName:function(t){var e={};if(this.isRoles_m(["DIS"]))switch(t){case"huo_yun":e.titName="待处理货运要求",e.url="/freight-request/dispatch-list/1";break;case"wu_liu":e.titName="待处理物流委托",e.url="/logisstics-commission/one-logistics/1";break;case"ding_dan":e.titName="待处理订单",e.url="/logisstics-commission/one-logistics/1";break;case"fang_an":e.titName="待处理方案",e.url="/freight-request/dispatch-list/1";break;default:e.titName="没有传入名字"}if(this.isRoles_m(["SALE"]))switch(t){case"huo_yun":e.titName="待处理货运要求",e.url="/freight-request/sale-list/1";break;case"wu_liu":e.titName="待接收委托",e.url="/logisstics-commission/one-logistics/1";break;case"ji_hua":e.titName="待确认计划",e.url="/logisstics-commission/one-logistics/1";break;default:e.titName="没有传入名字"}if(this.isRoles_m(["ENT"]))switch(t){case"huo_yun":e.titName="待处理货运要求",e.url="/freight-request/list-client/1";break;case"wu_liu":e.titName="待接收委托",e.url="/logisstics-commission/one-logistics/1";break;case"ji_hua":e.titName="待确认计划",e.url="/logisstics-commission/one-logistics/1";break;default:e.titName="没有传入名字"}return e},getPendingList:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=[],e.next=3,new Promise((function(e,a){Object(d["l"])().then((function(a){var i=a.data;s.push(Object(n["a"])({},i,{},t._processName("huo_yun"),{addNum:i.todayFreightResultNum,num:i.freightResultCount})),e()}))}));case 3:return e.sent,e.next=6,new Promise((function(e,a){Object(d["k"])().then((function(a){var i=a.data;s.push(Object(n["a"])({},i,{},t._processName("wu_liu"),{addNum:i.todayEntrustResultNum,num:i.entrustResultCount})),e()}))}));case 6:if(e.sent,!t.isRoles_m(["DIS"])){e.next=15;break}return e.next=10,new Promise((function(e,a){Object(d["I"])().then((function(a){var i=a.data;s.push(Object(n["a"])({},i,{},t._processName("ding_dan"),{addNum:i.todayEntrustResultNum,num:i.entrustResultCount})),e()}))}));case 10:return e.sent,e.next=13,new Promise((function(e,a){Object(d["J"])().then((function(a){var i=a.data;s.push(Object(n["a"])({},i,{},t._processName("fang_an"),{addNum:i.todayEntrustResultNum,num:i.entrustResultCount})),e()}))}));case 13:e.sent,Object(d["j"])().then((function(e){var s=e.data;t.planCountObj=Object(n["a"])({},s,{titName:"当前物流通道总量"})}));case 15:if(!t.isRoles_m(["ENT","SALE"])){e.next=20;break}return e.next=18,new Promise((function(e,a){Object(d["H"])().then((function(a){var i=a.data;s.push(Object(n["a"])({},i,{},t._processName("ji_hua"),{addNum:i.todayEntrustResultNum,num:i.entrustResultCount})),e()}))}));case 18:e.sent,Object(d["h"])().then((function(e){var s=e.data;t.planCountObj=Object(n["a"])({},s,{titName:"当前货运要求总量"})}));case 20:Object(d["g"])().then((function(e){var s=e.data;t.ExecutoryObj=Object(n["a"])({},s,{titName:"当前委托总量"})})),t.pendingList=s;case 22:case"end":return e.stop()}}),e)})))()},getMessage:function(){var t=this;Object(d["i"])().then((function(e){var s=e.data;t.seeMoreShow?t.MessageList=s.slice(0,7):t.MessageList=s}))},handelRoute:function(t){var e={};t.stepId&&(e.stepId=JSON.stringify(t.stepId)),this.$router.push({path:t.url,query:Object(n["a"])({jzName:"Home",freightReqStatus:t.freightReqStatus,entrustExecutoryStatus:t.entrustExecutoryStatus},e)})}}},f=v,g=(s("0b12"),s("2877")),p=Object(g["a"])(f,a,i,!1,null,"4cd9a492",null);e["default"]=p.exports}}]);