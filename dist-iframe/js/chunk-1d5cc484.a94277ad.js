(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d5cc484"],{"8b93":function(t,s,e){"use strict";var a=e("9d26"),n=e.n(a);n.a},"9bb7":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"whole-plan-generate"},[e("p",{staticClass:"topbar-title"},[t._v("路线信息")]),e("div",{staticClass:"topbar"},[e("div",{staticClass:"path-info"},[e("ul",t._l(t.data.routeList,(function(s,a){return e("li",{key:a},[e("span",{staticClass:"path"},[t._v(t._s(s.departurePortTranslate))]),"3"!=s.trspMode?e("svg",{staticClass:"icon icon-train",attrs:{"aria-hidden":"true"}},["4"===s.trspMode?e("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-andaotongcaidanICON_huoche"}}):t._e(),"1"===s.trspMode?e("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-andaotongcaidanICON_lunchuan"}}):t._e(),"2"===s.trspMode?e("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-feiji800"}}):t._e()]):t._e(),"3"===s.trspMode?e("svg",{staticClass:"icon icon-train icon-car",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-huoche"}})]):t._e(),e("small",[t._v(t._s(s.logisticsTypeTranslate))]),e("svg",{staticClass:"iconfont icon-arrows",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-andaotongcaidanICON_jiantou"}})]),a===t.data.routeList.length-1?[e("span",{staticClass:"path last-path"},[t._v(t._s(s.destinationPortTranslate))])]:t._e()],2)})),0),e("p",{staticClass:"desc"},[e("span",[t._v("物流委托编号："+t._s(t.data.executoryEntrustCode))]),e("span",[t._v("物流计划时间："+t._s(t.timestampFormat(t.data.predctStartTime))+" -- "+t._s(t.timestampFormat(t.data.predctEndTime)))]),e("span",[t._v("时长："+t._s(t.data.schemeValidity)+t._s(t.data.schemeValidityUnitTranslate))]),e("span",[t._v("费用："+t._s(t.data.totalPrices)+t._s(t.data.currTranslate))])])])]),e("div",{staticClass:"content"},[e("div",{staticClass:"top-title"},[e("p",{staticClass:"tit"},[t._v("物流全程计划编号："+t._s(t.data.planCode))]),t.data.routeList?e("p",{staticClass:"btn"},["FINISH"!=t.data.routeList[0].orderStatus&&"UNGSREDY"==t.data.planStatus?e("Button",{staticClass:"left",attrs:{disabled:t.issuePlanBtnShow},on:{click:t.issuePlan}},[t._v("下发计划")]):t._e()],1):t._e(),t.btnShow?e("p",{staticClass:"btn"},[e("Button",{staticClass:"left",on:{click:t.reportClick}},[t._v("上报客户/销售")])],1):t._e()]),e("div",{staticClass:"box"},[e("div",{staticClass:"plan"},[e("ul",t._l(t.nodeList,(function(s,a){return e("li",{key:a},[e("p",{staticClass:"line-city-box"},[e("span",{staticClass:"radio",class:{"radio-finish":"FINISH"==s.orderStatus}}),e("span",{staticClass:"line-shu",class:{"line-shu-finish":"FINISH"==s.orderStatus}},[e("svg",{staticClass:"iconfont",class:{"iconfont-finish":"FINISH"==s.orderStatus},attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-andaotongcaidanICON_xiaojiantou"}})])]),e("span",{staticClass:"port"},[t._v(t._s(s.port))]),t._m(0,!0),e("svg",{staticClass:"iconfont iconfont-jiantou",class:{"iconfont-jiantou-finish":"FINISH"==s.orderStatus},attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-andaotongcaidanICON_xiaojiantou"}})])]),e("div",{staticClass:"btn-box"},[e("p",{staticClass:"btn"},[s.roadList?e("span",{staticClass:"button",class:{"button-click":t.clickBtnNum==a},on:{click:function(e){return t.nodeServeClick(a,s)}}},[t._v("节点服务")]):e("span",{staticClass:"button no-click"},[t._v("节点服务")]),"FINISH"===s.orderStatus&&s.roadList?e("span",{staticClass:"button button-gray",class:{"button-click":t.clickBtnNum==a},on:{click:function(e){return t.nodeServeClick(a,s)}}},[t._v("节点服务")]):t._e(),s.roadList?e("svg",{directives:[{name:"show",rawName:"v-show",value:t.clickBtnNum==a,expression:"clickBtnNum == key"}],staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{fill:"#02ADB5","xlink:href":"#icon-andaotongcaidanICON_xiaojiantou"}})]):t._e()]),e("p",{staticClass:"btn btn-two"},["FINISH"===s.orderStatus?e("span",{staticClass:"button button-gray",class:{"button-click":t.clickBtnTwoNum==a},on:{click:function(e){return t.transportServeClick(a,s)}}},[t._v("运输服务")]):e("span",{staticClass:"button",class:{"button-click":t.clickBtnTwoNum==a},on:{click:function(e){return t.transportServeClick(a,s)}}},[t._v("运输服务")]),e("svg",{directives:[{name:"show",rawName:"v-show",value:t.clickBtnTwoNum==a,expression:"clickBtnTwoNum == key"}],staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{fill:"#02ADB5","xlink:href":"#icon-andaotongcaidanICON_xiaojiantou"}})])])])])})),0)]),e("div",{staticClass:"plan-box"},[t.nodeServeShow?e("div",{staticClass:"plan-content"},[e("adt-tab-btns",{attrs:{height:40,width:150,isUnderline:t.isUnderline,titleNames:t.titleNames,btnIndex:t.changeIndex},on:{handleBtn:t.handleBtn}}),e("div",{staticClass:"guanwu"},[e("p",{staticClass:"title"},[t._v(t._s(t.transportServer.serverName)+"（服务时长"+t._s(t.transportServer.totalTime)+"小时）")]),e("div",{staticClass:"time"},[e("p",{staticClass:"name"},[t._v(t._s(t.transportServer.etpsNameTranslate))]),e("div",{staticClass:"time-input"},[e("span",[t._v("计划时间："+t._s(t.timestampFormat(t.transportServer.planStartTime))+" -- "+t._s(t.timestampFormat(t.transportServer.planEndTime)))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.transportServer.predctStartTime,expression:"transportServer.predctStartTime"}],staticStyle:{marginTop:"10px"}},[t._v("实际时间："+t._s(t.timestampFormat(t.transportServer.predctStartTime))+" -- "+t._s(t.timestampFormat(t.transportServer.predctEndTime)))])])]),e("div",{staticClass:"scene"},[e("p",{staticClass:"scene-box"},t._l(t.transportServer.sceneList,(function(s,a){return e("span",{key:a,staticClass:"scene-name",class:{"scene-click":a==t.sceneNum},on:{click:function(s){return t.sceneClick(a)}}},[t._v(t._s(s.sceneName))])})),0),t._l(t.transportServer.sceneList,(function(s,a){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.sceneNum==a,expression:"sceneNum == key"}],key:a},[e("p",{staticClass:"task"},[e("span",{staticClass:"task-name"},[t._v("基础任务内容："),e("small",[t._v("（服务总价："+t._s(s.curr)+t._s(s.taskCost)+"/箱 总时长："+t._s(s.serverDuration)+t._s(s.serverDurationUnitTranslate)+"）")])]),e("span",{staticClass:"task-content"},t._l(s.taskBasesList,(function(s,a){return e("span",{key:a},[t._v(t._s(s.taskName))])})),0)]),e("p",{staticClass:"task additional"},[e("span",{staticClass:"task-name"},[t._v("附加任务内容：")]),e("span",{staticClass:"task-content"},t._l(s.taskAffixesList,(function(s,a){return e("span",{key:a},[t._v(t._s(s.taskName)),e("small",[t._v("（价格："+t._s(s.taskCost)+t._s(s.currTranslate||s.curr)+" 时长："+t._s(s.serverDuration)+t._s(s.serverDurationUnitTranslate||s.serverDurationUnit)+"）")])])})),0)])])}))],2)])],1):e("div",{staticClass:"plan-content"},[e("div",{staticClass:"guanwu"},[e("p",{staticClass:"title"},[t._v(t._s(t.transportServer.serverName)+"（服务时长"+t._s(t.transportServer.totalTime)+"小时）")]),e("div",{staticClass:"time"},[e("p",{staticClass:"name"},[t._v(t._s(t.transportServer.etpsNameTranslate))]),e("div",{staticClass:"time-input"},[e("span",[t._v("计划时间："+t._s(t.timestampFormat(t.transportServer.planStartTime))+" -- "+t._s(t.timestampFormat(t.transportServer.planEndTime)))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.transportServer.predctStartTime,expression:"transportServer.predctStartTime"}],staticStyle:{marginTop:"10px"}},[t._v("实际时间："+t._s(t.timestampFormat(t.transportServer.predctStartTime))+" -- "+t._s(t.timestampFormat(t.transportServer.predctEndTime)))])])]),e("div",{staticClass:"scene"},[e("p",{staticClass:"scene-box"},t._l(t.transportServer.sceneList,(function(s,a){return e("span",{key:a,staticClass:"scene-name",class:{"scene-click":a==t.sceneNum},on:{click:function(s){return t.sceneClick(a)}}},[t._v(t._s(s.sceneName))])})),0),t._l(t.transportServer.sceneList,(function(s,a){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.sceneNum==a,expression:"sceneNum == key"}],key:a},[e("p",{staticClass:"task"},[e("span",{staticClass:"task-name"},[t._v("基础任务内容："),e("small",[t._v("（服务总价："+t._s(s.curr)+t._s(s.taskCost)+"/箱 总时长："+t._s(s.serverDuration)+t._s(s.serverDurationUnitTranslate)+"）")])]),e("span",{staticClass:"task-content"},t._l(s.taskBasesList,(function(s,a){return e("span",{key:a},[t._v(t._s(s.taskName))])})),0)]),e("p",{staticClass:"task additional"},[e("span",{staticClass:"task-name"},[t._v("附加任务内容：")]),e("span",{staticClass:"task-content"},t._l(s.taskAffixesList,(function(s,a){return e("span",{key:a},[t._v(t._s(s.taskName)),e("small",[t._v("（价格："+t._s(s.taskCost)+t._s(s.currTranslate||s.curr)+" 时长："+t._s(s.serverDuration)+t._s(s.serverDurationUnitTranslate||s.serverDurationUnit)+"）")])])})),0)])])}))],2)])])])])])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"line-class"},[e("span",{staticClass:"line-top"},[t._v("---")]),e("span",{staticClass:"line"},[t._v("----------")]),e("span",{staticClass:"line2"},[t._v("---")]),e("span",{staticClass:"line3"})])}],r=(e("4160"),e("159b"),e("b85c")),i=e("90fe"),o=e("a0f8"),c={props:{planCode:""},data:function(){return{data:{},nodeList:[],clickBtnNum:0,planShow:!1,sceneData:[],clickBtnTwoNum:-1,titleNames:["场所服务"],changeIndex:1,isUnderline:!0,nodeClickShow:!0,sceneNum:0,nodeServeShow:!0,warnShow:!1,isShowModal:!1,msgText:"",transportServer:{},saveIs:[],transportSaveIs:[],saveData:{},issuePlanBtnShow:!1,btnShow:!1}},mounted:function(){this.getData()},methods:{timestampFormat:function(t){return Object(i["e"])(t)},getData:function(){var t=this;Object(o["f"])({planCode:this.planCode}).then((function(s){t.data=s.data,"CREATE"===t.data.planStatus&&(t.btnShow=!0);for(var e=[],a=0;a<t.data.routeList.length;a++){var n=t.data.routeList[a],i={};t.$set(i,"departurePort",n.departurePortTranslate),t.$set(i,"destinationPort",n.destinationPortTranslate),t.$set(i,"port",n.departurePortTranslate),t.$set(i,"logisticsSchemeCode",n.logisticsSchemeCode),t.$set(i,"orderStatus",n.orderStatus),t.$set(i,"routeList",[]);var o,c=Object(r["a"])(n.routeList);try{for(c.s();!(o=c.n()).done;){var l=o.value,u={};t.$set(u,"serverCode",l.serverCode),t.$set(u,"serverType",l.serverType),t.$set(u,"serverName",l.serverName),i.routeList.push(u)}}catch(d){c.e(d)}finally{c.f()}e.push(i),a==t.data.routeList.length-1&&(i={},t.$set(i,"departurePort",n.departurePortTranslate),t.$set(i,"destinationPort",n.destinationPortTranslate),t.$set(i,"port",n.destinationPortTranslate),t.$set(i,"logisticsSchemeCode",n.logisticsSchemeCode),t.$set(i,"orderStatus",n.orderStatus),t.$set(i,"routeList",[]),e.push(i))}e.forEach((function(s){t.data.roadList.forEach((function(e){s.port===e.nodeCodeTranslate&&t.$set(s,"roadList",e.roadList)}))})),t.nodeList=e,t.$set(t.saveData,"curr",t.data.curr),t.$set(t.saveData,"schemeValidity",t.data.schemeValidity),t.$set(t.saveData,"schemeValidityUnit",t.data.schemeValidityUnit),t.$set(t.saveData,"logisticsSchemeCode",t.data.logisticsSchemeCode),t.$set(t.saveData,"executoryEntrustCode",t.data.executoryEntrustCode),t.$set(t.saveData,"serverList",[]),t.nodeList[0].roadList||(t.clickBtnTwoNum=0,t.clickBtnNum=-1)}))},handleBtn:function(t,s){this.changeIndex=t+1},sceneClick:function(t){this.sceneNum=t},nodeServeClick:function(t,s){var e=this;this.planShow=!0;var a={logisticsSchemeCode:this.data.logisticsSchemeCode,serverCode:s.roadList[0].serverCode,serverType:s.roadList[0].serverType,planCode:this.data.planCode};Object(o["h"])({data:a}).then((function(t){e.$set(t.data[0],"serverType",s.roadList[0].serverType),e.transportServer=t.data[0],e.$set(s.roadList[0],"serveList",e.transportServer),e.saveData.serverList.push(t.data[0])})),this.clickBtnNum=t,this.clickBtnTwoNum=-1,s.roadList||(this.nodeClickShow=!1),this.nodeServeShow=!0},transportServeClick:function(t,s){var e=this;this.planShow=!0;var a={logisticsSchemeCode:this.data.logisticsSchemeCode,serverCode:s.routeList[0].serverCode,serverType:s.routeList[0].serverType,planCode:this.data.planCode};Object(o["h"])({data:a}).then((function(a){e.$set(a.data,"serverType",s.routeList[0].serverType),e.transportServer=a.data,e.$set(s.routeList[0],"serveList",e.transportServer),e.saveData.serverList.push(a.data),e.transportSaveIs.push(t)})),this.clickBtnTwoNum=t,this.clickBtnNum=-1,this.nodeServeShow=!1},issuePlan:function(){var t=this;Object(o["c"])({planCode:this.data.planCode}).then((function(s){t.$Message.info(s.message),"200"===s.code&&(t.issuePlanBtnShow=!0)}))},reportClick:function(){var t=this,s={executoryEntrustCode:this.data.executoryEntrustCode,logisticsSchemeCode:this.data.logisticsSchemeCode,planCode:this.data.planCode};Object(o["e"])({data:s}).then((function(s){"200"==s.code&&(t.$Message.success("上报成功"),t.btnShow=!1)}))}}},l=c,u=(e("8b93"),e("2877")),d=Object(u["a"])(l,a,n,!1,null,"30dbee4c",null);s["default"]=d.exports},"9d26":function(t,s,e){},a0f8:function(t,s,e){"use strict";e.d(s,"g",(function(){return r})),e.d(s,"d",(function(){return i})),e.d(s,"b",(function(){return o})),e.d(s,"e",(function(){return c})),e.d(s,"f",(function(){return l})),e.d(s,"h",(function(){return u})),e.d(s,"a",(function(){return d})),e.d(s,"c",(function(){return p}));var a=e("2934"),n=e("4ec3"),r=function(t){return Object(a["a"])("".concat(n["g"],"/plan/route-info"),t)},i=function(t){return Object(a["c"])("".concat(n["g"],"/plan/query-scene"),t)},o=function(t){return Object(a["c"])("".concat(n["g"],"/plan/generate-plan"),t)},c=function(t){return Object(a["c"])("".concat(n["g"],"/plan/report-plan"),t)},l=function(t){return Object(a["a"])("".concat(n["g"],"/plan/route-detail"),t)},u=function(t){return Object(a["c"])("".concat(n["g"],"/plan/query-scene-detail"),t)},d=function(t){return Object(a["c"])("".concat(n["g"],"/plan/confirm-plan"),t)},p=function(t){return Object(a["a"])("".concat(n["g"],"/plan/issuedPlan"),t)}}}]);