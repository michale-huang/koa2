(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71770b96"],{"2f2c":function(t,s,e){"use strict";e.d(s,"d",(function(){return n})),e.d(s,"e",(function(){return r})),e.d(s,"f",(function(){return o})),e.d(s,"l",(function(){return c})),e.d(s,"c",(function(){return l})),e.d(s,"b",(function(){return p})),e.d(s,"i",(function(){return d})),e.d(s,"m",(function(){return h})),e.d(s,"g",(function(){return u})),e.d(s,"j",(function(){return m})),e.d(s,"n",(function(){return v})),e.d(s,"h",(function(){return f})),e.d(s,"k",(function(){return C})),e.d(s,"a",(function(){return b}));var a=e("2934"),i=e("4ec3"),n=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/getSchemeList"),t)},r=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/get-list-dspt"),t)},o=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/get-list-mkt"),t)},c=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/recommend-pass"),t)},l=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/get-scheme-details"),t)},p=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/get-scene-list"),t)},d=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/recommend-check"),t)},h=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/recommend-route"),t)},u=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/recommend-all"),t)},m=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/recommend-check-cstm"),t)},v=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/recommend-route-cstm"),t)},f=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/recommend-all-cstm"),t)},C=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/recommend-modify"),t)},b=function(t){return Object(a["b"])("".concat(i["d"],"/scheme/confirm-only-scheme"),t)}},aa93:function(t,s,e){"use strict";var a=e("f210"),i=e.n(a);i.a},b687:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("p",{staticClass:"title"},[t._v("方案基本信息")]),e("AdtSchemeInformationRoute",{attrs:{logistics:t.logistics}},[e("template",{slot:"price"},[e("Row",[e("Col",{attrs:{span:"4"}},[e("span",[t._v("参考价格:￥"+t._s(t.programData.hghtPrice)+"/"+t._s(t.programData.offerCurr))])]),e("Col",{attrs:{span:"3"}},[e("span",[t._v("参考时长:￥"+t._s(t.programData.hghtTmeff)+t._s(t.programData.tmeffUnit))])]),e("Col",{attrs:{span:"3"}},[e("span",[t._v("结算固定汇率:"+t._s(t.programData.exrt))])]),e("Col",{attrs:{span:"3"}},[e("span",[t._v("方案截至时间:"+t._s(t.programData.endOfTime))])]),e("Col",{attrs:{span:"4"}},[e("span",[t._v("方案截止前提醒时间:"+t._s(t.programData.remindTime))])]),e("Col",{attrs:{span:"4"}},[e("span",[t._v("集装箱尺寸类型")])]),e("Col",{attrs:{span:"3"}},[e("span",[t._v("集装箱来源")])])],1)],1),e("template",{slot:"service"},[e("Row",t._l(t.schemeProxyList,(function(s,a){return e("Col",{key:a,attrs:{span:"6"}},[e("span",[t._v(t._s(s.sceneName))]),e("span",[t._v("费用：")]),e("span",[t._v(t._s(s.fee))]),e("span",[t._v(t._s(s.curr))])])})),1)],1)],2),e("p",{staticClass:"title"},[t._v("产品服务信息")]),e("Card",[e("adt-tab-btns",{attrs:{height:40,width:200,isUnderline:!0,isMark:t.isMark,titleNames:t.titleNames,btnIndex:t.changeIndex},on:{handleBtn:t.handleBtn}},[e("Divider")],1),e("Button",{staticClass:"step-save",on:{click:t.saveServiceProvider}},[t._v("保存")]),e("div",{staticClass:"collapse"},[e("Collapse",{attrs:{accordion:""},on:{"on-change":t.changeFont},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}},t._l(t.programData[t.tabNames[t.changeIndex-1]],(function(s,a){return e("Panel",{key:a,attrs:{name:String(a)}},[1==t.changeIndex?e("div",{staticClass:"collapse-head"},[e("span",[t._v(t._s(s.departurePort))]),e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{fill:"#02ADB5","xlink:href":"#icon-andaotongcaidanICON_jiantou"}})]),e("span",[t._v(t._s(s.destinationPort))]),e("span",[t._v(t._s(t.changeText))])]):e("div",{staticClass:"collapse-head"},[e("span",[t._v(t._s(s.departurePort))]),e("span",[t._v(t._s(t.changeText))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.supplierList,expression:"serverTransportList.supplierList"}],attrs:{slot:"content"},slot:"content"},[e("Row",[e("Col",{staticClass:"service-provider",attrs:{span:"8"}},[e("div",{staticClass:"service-provider-title"},[e("span",{staticClass:"service-provider-merchant"},[t._v("选择服务商")])]),e("div",{staticClass:"service-provider-company"},t._l(s.supplierList,(function(i,n){return e("RadioGroup",{key:n,on:{"on-change":t.changeCheck},model:{value:s.checkGroup,callback:function(e){t.$set(s,"checkGroup",e)},expression:"serverTransportList.checkGroup"}},[e("Radio",{class:{"service-select-click":t.num==n},attrs:{label:i.serverCode}},[e("p",{staticClass:"service-select",on:{click:function(e){return t.selectCompany(a,n,s)}}},[e("span",[t._v(t._s(i.enterpriseName))]),e("span",{staticClass:"price"},[t._v("基础价格: "+t._s(i.priceTotal))]),e("span",{staticClass:"time"},[t._v("时长: "+t._s(i.time))])]),e("div",{class:{triangle:t.num==n},staticStyle:{position:"absolute"}}),e("p")])],1)})),1)]),t.isShow?e("Col",{staticClass:"product",attrs:{span:"16"}},[e("div",{staticClass:"product-title"},[t._v("产品编号: "+t._s(t.serverCode))]),e("adt-tab-btns",{attrs:{isSmallBtn:!0,titleNames:t.titleNamesScenes,btnIndex:t.changeIndexScenes},on:{handleBtn:t.handleBtnScenes}}),e("hr",{staticStyle:{"border-style":"dashed",margin:"10px 0",color:"#E5E5E5"},attrs:{size:"1"}}),e("adt-tab-btns",{staticStyle:{"justify-content":"flex-start"},attrs:{isBaseBtn:!0,titleNames:t.titleNamesTask,btnIndex:t.changeIndexTask,width:200,height:30},on:{handleBtn:t.handleBtnTask}}),t._l(t.sceneList,(function(s,a){return t.changeIndexScenes-1==a?e("div",{key:a},[1==t.changeIndexTask?e("div",[e("AdtTaskContent",{staticClass:"spacing",attrs:{basicTask:t.basicTask,additionalTasks:t.additionalTasks}})],1):t._e(),2==t.changeIndexTask?e("div",[e("p",{staticClass:"spacing"},[t._v("监控:")]),e("div",{staticClass:"monitor"},[e("div",{staticClass:"monitor-abnormal"},[e("Row",[e("Col",{attrs:{span:"4"}},[t._v("异常1")]),e("Col",{attrs:{span:"6"}},[t._v("异常通知方式：{{}}")]),e("Col",{attrs:{span:"14"}},[t._v("异常通知内容：{{}}")])],1)],1),e("div",{staticClass:"monitor-notice"},[e("p",[e("span",[t._v("异常通知企业：")]),e("span",{staticClass:"monitor-notice-people",on:{click:t.addExceptionNotifier}},[t._v("添加异常通知人")])]),e("Row",{staticClass:"monitor-company"},[e("CheckboxGroup",{model:{value:t.notifyCompany,callback:function(s){t.notifyCompany=s},expression:"notifyCompany"}},[e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务1"}},[t._v("安道通1")])],1),e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务2"}},[t._v("安道通2")])],1),e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务3"}},[t._v("安道通3")])],1)],1)],1)],1)]),e("div",{staticClass:"monitor"},[e("div",{staticClass:"monitor-abnormal"},[e("Row",[e("Col",{attrs:{span:"4"}},[t._v("异常1")]),e("Col",{attrs:{span:"6"}},[t._v("异常通知方式：{{}}")]),e("Col",{attrs:{span:"14"}},[t._v("异常通知内容：{{}}")])],1)],1),e("div",{staticClass:"monitor-notice"},[e("p",[e("span",[t._v("异常通知企业：")]),e("span",{staticClass:"monitor-notice-people"},[t._v("添加异常通知人")])]),e("Row",{staticClass:"monitor-company"},[e("CheckboxGroup",{model:{value:t.notifyCompany,callback:function(s){t.notifyCompany=s},expression:"notifyCompany"}},[e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务1"}},[t._v("安道通1")])],1),e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务2"}},[t._v("安道通2")])],1),e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务3"}},[t._v("安道通3")])],1)],1)],1)],1)])]):t._e(),3==t.changeIndexTask?e("div",[e("div",[e("p",{staticClass:"spacing"},[t._v("协同协作1:")]),e("div",{staticClass:"cooperation"},[e("div",{staticClass:"cooperation-notice"},[e("p",[e("span",[t._v("协同协作方：")]),e("span",{staticClass:"cooperation-notice-people",on:{click:t.addCollaborators}},[t._v("添加协同协作方")])]),e("Row",{staticClass:"cooperation-company"},[e("CheckboxGroup",{model:{value:t.notifyCompany,callback:function(s){t.notifyCompany=s},expression:"notifyCompany"}},[e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务1"}},[t._v("安道通1")])],1),e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务2"}},[t._v("安道通2")])],1),e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务3"}},[t._v("安道通3")])],1)],1)],1)],1),e("Row",{staticClass:"cooperation-description"},[e("Col",{attrs:{span:"8"}},[t._v("协同协作方式："+t._s(1122))]),e("Col",{attrs:{span:"16"}},[t._v("协同协作内容："+t._s(3344))])],1)],1)]),e("div",[e("p",{staticClass:"spacing"},[t._v("协同协作2:")]),e("div",{staticClass:"cooperation"},[e("div",{staticClass:"cooperation-notice"},[e("p",[e("span",[t._v("协同协作方：")]),e("span",{staticClass:"cooperation-notice-people"},[t._v("添加协同协作方")])]),e("Row",{staticClass:"cooperation-company"},[e("CheckboxGroup",{model:{value:t.notifyCompany,callback:function(s){t.notifyCompany=s},expression:"notifyCompany"}},[e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务1"}},[t._v("安道通1")])],1),e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务2"}},[t._v("安道通2")])],1),e("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[e("Checkbox",{attrs:{label:"代理服务3"}},[t._v("安道通3")])],1)],1)],1)],1),e("Row",{staticClass:"cooperation-description"},[e("Col",{attrs:{span:"8"}},[t._v("协同协作方式："+t._s(1122))]),e("Col",{attrs:{span:"16"}},[t._v("协同协作内容："+t._s(3344))])],1)],1)])]):t._e()]):t._e()}))],2):t._e()],1)],1)])})),1)],1),e("AdtMyModal",{attrs:{title:t.modelTitle,okText:"确认",cancelText:"取消",showModal:t.isModalShow},on:{"on-visible-change":t.isModelShow,"on-ok":function(s){return t.save()},"on-cancel":function(s){return t.cancel()}}},[e("Form",{ref:"formInline",staticClass:"form",attrs:{model:t.formItem,rules:t.ruleItem,"label-width":100,inline:"","label-colon":""}},[e("FormItem",{attrs:{prop:"companyName",label:"企业名称"}},[e("Input",{attrs:{type:"text"},model:{value:t.formItem.companyName,callback:function(s){t.$set(t.formItem,"companyName",s)},expression:"formItem.companyName"}})],1),e("FormItem",{attrs:{label:"数据对接方式"}},[t._v("邮箱")]),e("FormItem",{attrs:{prop:"emailAddress",label:"邮箱地址"}},[e("Input",{attrs:{type:"text"},model:{value:t.formItem.emailAddress,callback:function(s){t.$set(t.formItem,"emailAddress",s)},expression:"formItem.emailAddress"}})],1)],1)],1)],1)],1)},i=[],n=(e("fe59"),e("513c"),e("08ba"),e("80a0")),r=e("3fec"),o=e("c161"),c=e("b962"),l=e("2f2c"),p={components:{AdtTaskContent:r["a"],AdtSchemeInformationRoute:o["a"]},data:function(){return{tabNames:["serverTransportList","serverStationList","serverCustomsList","serverBondList"],isShow:!1,value:[],listData:{},programData:{},schemeProxyList:[],changeText:"展开",agencyService:[],exchangeRate:"",selectTime:"",checkAllGroup:Number(),customs:"",changeIndex:1,isMark:!1,showServiceProvider:[],sceneList:[],num:"默认值",titleNames:["运输服务","场所服务","关务服务","综保区服务"],titleNamesScenes:["场景1","场景2","场景3"],changeIndexScenes:1,titleNamesTask:["任务","监控设置","协同协作设置"],changeIndexTask:1,indeterminate:!0,checkAll:!1,logistics:[],basicTask:["基础任务1","基础任务2","基础任务3","基础任务4","基础任务5","基础任务6","基础任务7","基础任务8","基础任务9","基础任务10"],additionalTasks:["附加任务1","附加任务2","附加任务3","附加任务4","附加任务5","附加任务6","附加任务7","附加任务8","附加任务9","附加任务10"],notifyCompany:[],distinguish:0,modelTitle:"",isModalShow:!1,formInline:{},formItem:{},ruleItem:{companyName:[c["a"].required("企业名称")[0]],emailAddress:[c["a"].required("邮箱地址")[0]]},serverCode:"",schemeServerList:[]}},mounted:function(){this.listData=JSON.parse(window.sessionStorage.getItem("logisticsData"))||{},this.logistics=this.listData.routeLists||[],this.getData()},methods:{getData:function(){var t=this,s={freightReqCode:this.listData.freightReqCode,logisticsSchemeCode:this.listData.logisticsSchemeCode,routeCode:this.listData.routeCode};Object(l["c"])({data:s}).then((function(s){200==s.code&&(t.getDetailsData=s.data,t.schemeProxyList=s.data.schemeProxyList||[],t.serviceProviderList=s.data.serverTransportList||[],t.combinedData(t.getDetailsData))}))},combinedData:function(t){this.listData.serverTransportList=JSON.parse(JSON.stringify(this.listData.routeLists)),this.listData.serverStationList=JSON.parse(JSON.stringify(this.listData.routeLists)),this.listData.serverCustomsList=JSON.parse(JSON.stringify(this.listData.routeLists)),this.listData.serverBondList=JSON.parse(JSON.stringify(this.listData.routeLists)),t.serverTransportList=t.serverTransportList||[],t.serverStationList=t.serverStationList||[],t.serverCustomsList=t.serverCustomsList||[],t.serverBondList=t.serverBondList||[],this.listData.serverTransportList.forEach((function(s,e){s.supplierList=t.serverTransportList[e],s.checkGroup=""})),this.listData.serverStationList.forEach((function(s,e){s.supplierList=t.serverStationList[e],s.checkGroup=""})),this.listData.serverCustomsList.forEach((function(s,e){s.supplierList=t.serverCustomsList[e],s.checkGroup=""})),this.listData.serverBondList.forEach((function(s,e){s.supplierList=t.serverBondList[e],s.checkGroup=""})),this.programData=Object(n["a"])({},this.listData)},handleBtn:function(t){this.changeIndex=t+1,this.value=[],this.changeText="展开"},handleBtnScenes:function(t){this.changeIndexScenes=t+1,this.scenesDataHandle(this.sceneList)},handleBtnTask:function(t){this.changeIndexTask=t+1},selectCompany:function(t,s,e){var a=this,i=e.supplierList[s];this.num=s,this.serverCode=i.serverCode,1==this.changeIndex&&i&&(this.isMark=!0);var n={serverCode:i.serverCode,serviceType:i.serviceType};Object(l["b"])({data:n}).then((function(e){200==e.code&&e.data.length?(a.isShow=!0,a.sceneList=e.data||[],a.scenesDataHandle(a.sceneList),1==a.changeIndex&&(a.programData.serverTransportList[t].supplierList[s].sceneList=a.sceneList),2==a.changeIndex&&(a.programData.serverStationList[t].supplierList[s].sceneList=a.sceneList),3==a.changeIndex&&(a.programData.serverCustomsList[t].supplierList[s].sceneList=a.sceneList),4==a.changeIndex&&(a.programData.serverBondList[t].supplierList[s].scenesList=a.scenesList)):a.isShow=!1}))},scenesDataHandle:function(t){var s=[],e=t[Number(this.changeIndexScenes)-1]||{};t.forEach((function(t,e){s.push(t.sceneName)})),this.titleNamesScenes=s,this.basicTaskData={serverDuration:e.serverDuration,serverDurationUnit:e.serverDurationUnit,taskCost:e.taskCost,curr:e.curr},this.basicTask=e.taskRes.taskBaseList||[],this.additionalTasks=e.taskRes.taskAffixList||[]},saveServiceProvider:function(){var t=this,s=[];this.programData.serverTransportList.forEach((function(t){t.supplierList&&t.supplierList.forEach((function(e){e.serverCode==t.checkGroup&&s.push(e)}))}));var e=[];this.programData.serverStationList.forEach((function(t){t.supplierList&&t.supplierList.forEach((function(s){s.serverCode==t.checkGroup&&e.push(s)}))}));var a=[];this.programData.serverCustomsList.forEach((function(t){t.supplierList&&t.supplierList.forEach((function(s){s.serverCode==t.checkGroup&&a.push(s)}))}));var i=[];this.programData.serverBondList.forEach((function(t){t.supplierList&&t.supplierList.forEach((function(s){s.serverCode==t.checkGroup&&i.push(s)}))}));var n={logisticsSchemeCode:this.programData.logisticsSchemeCode,freightReqCode:this.programData.freightReqCode,serverAgentList:this.schemeProxyList,serverTransportList:s,serverStationList:e,serverCustomsList:a,serverBondList:i};Object(l["a"])({data:n}).then((function(s){200==s.code&&t.$message.info("保存成功")}))},changeCheck:function(t){},changeFont:function(t){1==this.isShow&&(this.isShow=!1),"展开"==this.changeText?this.changeText="收起":this.changeText="展开"},isModelShow:function(t){this.isModalShow=t},addExceptionNotifier:function(){this.isModalShow=!0,this.modelTitle="新增异常处理人",this.distinguish=1},addCollaborators:function(){this.isModalShow=!0,this.modelTitle="新增协同协作方",this.distinguish=2},save:function(){var t=this,s={companyName:this.formItem.companyName,emailAddress:this.formItem.emailAddress};this.$refs["formInline"].validate((function(e){e&&(1==t.distinguish&&testApi({data:s}).then((function(t){t.code})),2==t.distinguish&&testApi({data:s}).then((function(t){t.code})))}))},cancel:function(){this.$refs.formInline.resetFields()}}},d=p,h=(e("aa93"),e("4023")),u=Object(h["a"])(d,a,i,!1,null,"29bad356",null);s["default"]=u.exports},f210:function(t,s,e){}}]);