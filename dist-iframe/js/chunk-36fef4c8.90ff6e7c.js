(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36fef4c8"],{"05c9":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"singleDetail"},[a("header-btn",{attrs:{title:"方案信息"}},[a("div",{attrs:{slot:"btn"},slot:"btn"},["AFORM"==t.formModel.entrustExecutoryStatus&&t.isRoles_m(["DIS"])?a("div",{staticClass:"btns"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.accept("formValidate")}}},[t._v("接受委托")]),a("Button",{on:{click:t.unacceptDialog}},[t._v("拒绝委托")])],1):t._e(),"CREATE"==t.formModel.entrustExecutoryStatus&&t.isRoles_m(["ENT","SALE"])?a("div",{staticClass:"btns"},[a("Button",{attrs:{type:"primary"},on:{click:t.sendTrust_m}},[t._v("发送委托")])],1):t._e()])]),a("line-header",{attrs:{lineHeaderData:t.cptlineHeaderData,trspTypeTranslate:t.cpttrspTypeTranslate,cargoTypeTranslate:t.cptcargoTypeTranslate,entrustCode:t.cptexecutoryEntrustCode,logisticsSchemeCode:t.formModel.logisticsSchemeCode,freightReqCode:t.formModel.freightReqCode,status:t.formModel.entrustExecutoryStatus,isFWSShow:!0}}),a("div",{staticClass:"tas-box"},[a("span",[t._v("单次物流委托编号：")]),a("span",[t._v(t._s(t.cptId))])]),a("div",{staticClass:"public-form-box"},[a("div",{staticClass:"public-form-content"},[a("Row",{staticClass:"publc-bottom20",attrs:{gutter:20}},[a("Col",{attrs:{span:"18"}},[a("Col",{attrs:{span:"8"}},[a("detaiFormItem",{attrs:{tit:"发货人信息",titleList:t.titleList,valueObj:t.FH}})],1),a("Col",{attrs:{span:"8"}},[a("detaiFormItem",{attrs:{tit:"收货人信息",titleList:t.titleList,valueObj:t.SH}})],1),a("Col",{attrs:{span:"8"}},[a("detaiFormItem",{attrs:{tit:"通知人信息",titleList:t.titleList,valueObj:t.TZ}})],1)],1),a("Col",{attrs:{span:"6"}},[a("detaiFormItem",{attrs:{tit:"服务参数",titleList:t.titleFuWu,valueObj:t.formModel}})],1)],1),a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:"18"}},[a("p",{staticClass:"item-form-title"},[t._v("货物信息")]),a("div",{staticClass:"public-line"}),a("div",{staticClass:"scroll-box"},[t.timeShow?a("cargo-info",{attrs:{arr:t.entrustCargoRes,isOne:t.isOne}},[a("template",{slot:"btns-end"},[a("span",[t._v("货物类型：")]),a("span",[t._v(t._s(t.formModel.cargoTypeTranslate))])])],2):t._e()],1)]),a("Col",{attrs:{span:"6"}},[a("detaiFormItem",{attrs:{tit:"运输要求",titleList:t.titleYunShu,valueObj:t.formModel}})],1)],1)],1)]),a("adt-my-modal",{attrs:{showModal:t.showItemModal,title:t.itemTitle},on:{"on-visible-change":t.visibleChange,"on-ok":t.handleItemModalOk}},[a("Form",{ref:"formValidate",attrs:{model:t.remarkForm,rules:t.remarkFormruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"拒绝理由",prop:"remark"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入..."},model:{value:t.remarkForm.remark,callback:function(e){t.$set(t.remarkForm,"remark",e)},expression:"remarkForm.remark"}})],1)],1)],1),a("adt-reconfirm-modal",{attrs:{showModal:t.fwsReconfirm.showDeleteModal,message:t.fwsReconfirm.message,cancelShow:!1},on:{"on-visible-change":t.deleteVisibleChange,"on-ok":t.handleDeleteModalOk}})],1)},s=[],i=(a("7db0"),a("5530")),o=a("77ab"),n=(a("b962"),a("c1df")),l=a.n(n),u=a("8f27"),c=a("36d5"),m=a("21c2"),d=a("6458"),f=a("5e47"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"item-form-title"},[t._v(t._s(t.tit))]),a("div",{staticClass:"table-boxjz"},t._l(t.titleList,(function(e,r){return a("div",{key:r,staticClass:"table-rowjz"},[a("div",[t._v(t._s(e.title))]),a("div",{attrs:{title:t.valueObj[e.name]}},[t._v(t._s(t.valueObj[e.name])+t._s(e.unit))])])})),0)])},h=[],v={name:"detail-form-item",props:{titleList:{type:Array,default:function(){return[]}},valueObj:{type:Object,default:function(){return{}}},tit:{type:String,default:""}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},y=v,g=(a("5455"),a("2877")),C=Object(g["a"])(y,p,h,!1,null,"294b12f1",null),T=C.exports,b={name:"singleDetail",mixins:[u["a"],c["a"]],components:{CargoInfo:m["a"],lineHeader:d["a"],headerBtn:f["a"],detaiFormItem:T},data:function(){return{isOne:!0,fwsReconfirm:{showDeleteModal:!1,message:"接受委托后必须要去确定方案唯一 服务商，才能生成物流全程计划！"},titleList:[{title:"通知人名称：",name:"attenName"},{title:"代码：",name:"code"},{title:"地址：",name:"attenAddr"},{title:"电话：",name:"attenTel"},{title:"传真：",name:"attenFax"},{title:"邮箱：",name:"attenEmail"}],FH:{},SH:{},TZ:{},titleFuWu:[{title:"运输类型：",name:"trspTypeTranslate"},{title:"集装箱尺寸：",name:"contaSizeTranslate"},{title:"集装箱来源：",name:"containerSourceTranslate"},{},{},{}],titleYunShu:[{title:"主要运输方式：",name:"trspModeTranslate"},{title:"物流类型：",name:"logisticsTypeTranslate"},{title:"提箱类型：",name:"suitcaseTypeTranslate"},{title:"集装箱数量：",name:"suitcaseQty"},{title:"货物适宜温度：",name:"setTemperatureAt",unit:"°C"},{title:"出口报关地：",name:"exPortTranslate"},{title:"进口报关地：",name:"imPortTranslate"},{title:"最迟启运时间：",name:"lastStartTime"},{title:"最低时长要求：",name:"lowestTimeReq",unit:"天"},{title:"最高费用要求：",name:"highestCostReq",unit:"元"},{title:"预计货好时间：",name:"cargoReadyTime"},{title:"最晚到达时间：",name:"lastArriveTime"},{title:"合同编号：",name:"contractCode"},{title:"备注：",name:"remark"}],showItemModal:!1,itemTitle:"拒绝理由",remarkForm:{},remarkFormruleValidate:{remark:[{required:!0,message:"拒绝理由必填",trigger:"blur"},{type:"string",min:2,message:"最小输入两个字符",trigger:"blur"}]},timeShow:!1,formModel:{},entrustCargoRes:[]}},computed:{cptId:function(){var t=this.$route.query.executoryEntrustCode;return t},cptexecutoryEntrustCode:function(){var t=this.$route.query.executoryEntrustCode;return t},cptentrustCode:function(){var t=this.$route.query.entrustCode;return t},cptlineHeaderData:function(){var t=JSON.parse(this.$route.query.lineHeaderData);return t},cptcargoTypeTranslate:function(){var t=this.$route.query.cargoTypeTranslate;return t},cpttrspTypeTranslate:function(){var t=this.$route.query.trspTypeTranslate;return t},cptisDiaodu:function(){var t=this.$route.query.role;return"admin"==t}},created:function(){this.getDetail()},methods:{deleteVisibleChange:function(t){this.fwsReconfirm.showDeleteModal=t},handleDeleteModalOk:function(){this.fwsReconfirm.showDeleteModal=!1,this.$router.push({path:"/logistics-solutions/determine-logistics-solution-service-provider",query:{executoryEntrustCode:this.cptexecutoryEntrustCode,logisticsSchemeCode:this.$route.query.logisticsSchemeCode,freightReqCode:this.$route.query.freightReqCode,routeList:this.$route.query.lineHeaderData}})},visibleChange:function(t){this.showItemModal=t},handleItemModalOk:function(){this.showItemModal=!1,this.unaccept()},unacceptDialog:function(t){this.showItemModal=!0},accept:function(t){var e=this,a={executoryEntrustCode:this.cptexecutoryEntrustCode,entrustExecutoryStatus:"RECEIVE"};Object(o["D"])({data:a}).then((function(t){t.data;e.fwsReconfirm.showDeleteModal=!0,e.$Message.success("操作成功")}))},unaccept:function(t){var e=this,a={executoryEntrustCode:this.cptexecutoryEntrustCode,remark:this.remarkForm.remark,entrustExecutoryStatus:"REJECT"};Object(o["D"])({data:a}).then((function(t){t.data;e.$router.push("/logisstics-commission/one-logistics/1"),e.$Message.success("操作成功")}))},getDetail:function(){var t=this;Object(o["v"])({executoryEntrustCode:this.cptId}).then((function(e){var a=e.data,r=a.transportationAskRes,s=a.entrustAttenResList,o=a.entrustCargoRes,n=s.find((function(t){return"发货人"==t.linkType}));t.FH=n;var u=s.find((function(t){return"收货人"==t.linkType}));t.SH=u;var c=s.find((function(t){return"通知人"==t.linkType}));t.TZ=c;var m=Object(i["a"])({},r,{cargoTypeTranslate:o[0].cargoTypeTranslate});t.formModel=Object(i["a"])({},m,{lastStartTime:m.lastStartTime&&l()(m.lastStartTime).format("YYYY-MM-DD"),cargoReadyTime:m.cargoReadyTime&&l()(m.cargoReadyTime).format("YYYY-MM-DD"),lastArriveTime:m.lastArriveTime&&l()(m.lastArriveTime).format("YYYY-MM-DD"),entrustExecutoryStatus:a.entrustExecutoryStatus,logisticsSchemeCode:a.logisticsSchemeCode,freightReqCode:a.freightReqCode}),t.entrustCargoRes=o,t.timeShow=!0}))}}},w=b,M=(a("845d"),Object(g["a"])(w,r,s,!1,null,"325f0e86",null));e["default"]=M.exports},5455:function(t,e,a){"use strict";var r=a("a4c0"),s=a.n(r);s.a},7004:function(t,e,a){},"845d":function(t,e,a){"use strict";var r=a("7004"),s=a.n(r);s.a},a4c0:function(t,e,a){}}]);