(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48b426ac"],{"15fd":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));s("a4d3"),s("c975"),s("b64b");function i(t,e){if(null==t)return{};var s,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)s=a[i],e.indexOf(s)>=0||(n[s]=t[s]);return n}function n(t,e){if(null==t)return{};var s,n,a=i(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(a[s]=t[s])}return a}},"1f18":function(t,e,s){"use strict";var i=s("3884"),n=s.n(i);n.a},2029:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flod-box"},[s("div",{staticClass:"btns"},[t._t("btns-start"),t._t("btns-end")],2),t._l(t.list,(function(e,i){return s("Row",{key:i,staticClass:"publc-bottom10"},[s("Col",{attrs:{span:"24"}},[s("div",{staticClass:"item-box"},[s("div",{staticClass:"header"},[s("span",[t._v("00"+t._s(i+1)+"单次委托")]),s("div",[s("span",{staticClass:"btn"},["WAIT"==e.entrustExecutoryStatus?s("span",{on:{click:function(s){return t.goodsOk(e,i)}}},[t._v("货好确认")]):t._e(),e.planCode?s("span",{on:{click:function(s){return t.seePlan(e,i)}}},[t._v("查看全程物流计划")]):t._e(),t.isRoles_m(["DIS"])?s("span",{on:{click:function(s){return t.addPlan(e,i)}}},[t._v("生成全程物流计划")]):t._e(),e.isContentShow?t._e():s("span",{on:{click:function(s){return t.onOpen(e,i)}}},[t._v("展开")]),e.isContentShow?s("span",{on:{click:function(s){return t.onClose(e,i)}}},[t._v("收起")]):t._e(),s("span",{staticStyle:{cursor:"text"}},[t._v(t._s(e.entrustExecutoryStatusTranslate))])]),s("span",{staticClass:"icon"},[e.isContentShow?s("Icon",{attrs:{type:"ios-arrow-down"}}):s("Icon",{attrs:{type:"ios-arrow-up"}})],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isContentShow,expression:"item.isContentShow"}],staticClass:"main-box"},[s("cargo-info",{attrs:{arrChild:e}})],1)])])],1)}))],2)},n=[],a=(s("d81d"),s("5530")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flod-box"},[s("div",{staticClass:"btns"},[t._t("btns-start"),s("span",{staticClass:"text"},[s("span",[t._v("开始时间：")]),s("span",[t._v(t._s(t.moment_time_m(t.formItem.startDatetime)))])]),s("Button",{on:{click:t.seeItemData}},[t._v("查看收发货通知人")]),t._t("btns-end")],2),t._l(t.list,(function(e,i){return s("Row",{key:i,staticClass:"publc-bottom10"},[s("Col",{attrs:{span:"24"}},[s("div",{staticClass:"item-box"},[s("div",{staticClass:"header"},[s("span",[t._v(t._s(e.cargoName))]),s("div",[s("span",{staticClass:"btn"},[e.isContentShow?t._e():s("span",{on:{click:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"de",void 0,s.key,void 0)?null:t.onOpen(e,i)}}},[t._v("展开")]),e.isContentShow?s("span",{on:{click:function(s){return t.onClose(e,i)}}},[t._v("收起")]):t._e()]),s("span",{staticClass:"icon"},[e.isContentShow?s("Icon",{attrs:{type:"ios-arrow-down"}}):s("Icon",{attrs:{type:"ios-arrow-up"}})],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isContentShow,expression:"item.isContentShow"}],staticClass:"main-box"},[s("div",{staticClass:"public-form-content"},[s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"item-form-title"},[t._v("货物信息")]),s("div",{staticClass:"table-boxjz"},[s("div",{staticClass:"table-rowjz"},[s("div",[t._v("货物名称：")]),s("div",[t._v(t._s(e.cargoName))])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("单次箱量：")]),s("div",[t._v(t._s(e.suitcaseQty))])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("单次毛重：")]),s("div",[t._v(t._s(e.grossWeight)+" Kg")])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("单次净重：")]),s("div",[t._v(t._s(e.netWeight)+" kg")])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("单次件数：")]),s("div",[t._v(t._s(e.cargoQty))])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("单次体积：")]),s("div",[t._v(t._s(e.cargoVol)+" m³")])]),s("div",{staticClass:"table-rowjz"},[s("div"),s("div")])])]),s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"item-form-title"},[t._v("一级包装")]),s("div",{staticClass:"table-boxjz"},[s("div",{staticClass:"table-rowjz"},[s("div",[t._v("包装类型：")]),s("div",[t._v(t._s(e.one.packTypeTranslate))])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("包装毛重：")]),s("div",[t._v(t._s(e.one.grossWeight)+" kg")])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("包装净重：")]),s("div",[t._v(t._s(e.one.netWeight)+" kg")])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("包装件数：")]),s("div",[t._v(t._s(e.one.packQty))])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("包装体积：")]),s("div",[t._v(t._s(e.one.packVol)+" m³")])]),t._l(2,(function(t,e){return s("div",{key:e,staticClass:"table-rowjz"},[s("div"),s("div")])}))],2)]),s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"item-form-title"},[t._v("二级包装")]),s("div",{staticClass:"table-boxjz"},[s("div",{staticClass:"table-rowjz"},[s("div",[t._v("包装类型：")]),s("div",[t._v(t._s(e.two.packTypeTranslate))])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("包装毛重：")]),s("div",[t._v(t._s(e.two.grossWeight)+" kg")])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("包装净重：")]),s("div",[t._v(t._s(e.two.netWeight)+" kg")])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("包装件数：")]),s("div",[t._v(t._s(e.two.packQty))])]),s("div",{staticClass:"table-rowjz"},[s("div",[t._v("包装体积：")]),s("div",[t._v(t._s(e.two.packVol)+" m³")])]),t._l(2,(function(t,e){return s("div",{key:e,staticClass:"table-rowjz"},[s("div"),s("div")])}))],2)])],1)])])])],1)}))],2)},r=[],c=(s("7db0"),s("15fd")),l=s("c9c1"),d={mixins:[l["a"]],components:{},data:function(){return{itemName:[],itemNameObj:{},formItem:{},list:[{isContentShow:!1}]}},props:{arrChild:{type:Object}},computed:{cptList:function(){return this.arrChild}},watch:{},created:function(){this.initList()},methods:{initList:function(){var t=this.cptList,e=t.entrustCargoAffiliationRes,s=Object(c["a"])(t,["entrustCargoAffiliationRes"]),i=e.map((function(t){return null==t.entrustPackagingRes&&(t.entrustPackagingRes=[{},{}]),Object(a["a"])(Object(a["a"])({},t),{},{one:t.entrustPackagingRes.find((function(t){return"0"==t.packPcode}))||{},two:t.entrustPackagingRes.find((function(t){return"0"!==t.packPcode}))||{},isContentShow:!1})}));this.formItem=s,this.list=i},onOpen:function(t,e){this.list[e].isContentShow=!0},onClose:function(t,e){this.list[e].isContentShow=!1},seeItemData:function(){alert("我是一个弹框，功能开发中")}}},u=d,v=(s("9061"),s("2877")),p=Object(v["a"])(u,o,r,!1,null,"3ba7b782",null),h=p.exports,f=s("77ab"),_=(s("e9a7"),s("36d5")),b={mixins:[_["a"]],components:{CargoInfo:h},props:{arr:{type:Array,default:[]}},data:function(){return{list:[]}},watch:{},computed:{cptList:function(){return this.arr}},created:function(){this.initList()},mounted:function(){},methods:{initList:function(){var t=this.cptList.map((function(t){return Object(a["a"])(Object(a["a"])({},t),{},{isContentShow:!1})}));this.list=t},seePlan:function(t,e){this.isRoles_m(["ENT"])&&this.$router.push({path:"/logistics-whole-journey-plan/client-plan",query:{entrustCode:t.entrustCode,entrustExecutoryStatus:t.entrustExecutoryStatus,planCode:t.planCode}}),this.isRoles_m(["SALE"])&&this.$router.push({path:"/logistics-whole-journey-plan/sale-plan-detail",query:{planCode:t.planCode}}),this.isRoles_m(["DIS"])&&this.$router.push({path:"/logistics-whole-journey-plan/plan-detail",query:{planCode:t.planCode}})},addPlan:function(t,e){this.$router.push({path:"/logistics-whole-journey-plan/generate",query:{executoryEntrustCode:t.executoryEntrustCode}})},goodsOk:function(t,e){var s=this,i={executoryEntrustCode:t.executoryEntrustCode,entrustExecutoryStatus:"EXECUTE"};Object(f["D"])({data:i}).then((function(t){t.data;s.$Message.success("操作成功")}))},onOpen:function(t,e){this.list[e].isContentShow=!0},onClose:function(t,e){this.list[e].isContentShow=!1}}},C=b,y=(s("1f18"),Object(v["a"])(C,i,n,!1,null,"6d769e53",null));e["a"]=y.exports},3884:function(t,e,s){},9061:function(t,e,s){"use strict";var i=s("fd34"),n=s.n(i);n.a},c9c1:function(t,e,s){"use strict";s("7db0"),s("4160"),s("d81d"),s("b64b"),s("159b");var i=s("15fd"),n=s("5530"),a=s("e56e"),o=s("77ab"),r=s("2f62"),c=s("c1df"),l=s.n(c);e["a"]={data:function(){return{cityList:[],packTypeList:[],cargoTypeList:[],trspModeList:[],orderStatusList:[],goodsObj:{},goodsNameList:[]}},watch:{},computed:Object(n["a"])({},Object(r["b"])("logisticsCommission",["LawCallback"])),methods:{handel_orderStatusList_m:function(){var t=this;Object(a["e"])({dictionaryTypeKey:"ORDER_STATUS"}).then((function(e){var s=e.data,i=s.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.orderStatusList=i}))},handel_packTypeList_m:function(){var t=this;Object(a["e"])({dictionaryTypeKey:"PACKAGE_TYPE"}).then((function(e){var s=e.data,i=s.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.packTypeList=i}))},handel_cargoTypeList_m:function(){var t=this;Object(a["e"])({dictionaryTypeKey:"GOODS_TYPE"}).then((function(e){var s=e.data,i=s.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.cargoTypeList=i}))},handel_trspModeList_m:function(){var t=this;Object(a["e"])({dictionaryTypeKey:"TRANSPORT_MODE"}).then((function(e){var s=e.data,i=s.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.trspModeList=i}))},handel_goodsNameList_m:function(){var t=this;Object(o["o"])({entrustCode:this.LawCallback.entrustCode}).then((function(e){var s=e.data;t.goodsNameList=Object.keys(s),t.goodsObj=s}))},handelSearch_m:function(t,e){var s=this.goodsObj[t],a=s.getEntrustPackagingListRes,o=Object(i["a"])(s,["getEntrustPackagingListRes"]),r={},c={};if(a.length>0){var l=a.find((function(t){return"0"==t.packPcode}));r={grossWeight0:l.grossWeight,netWeight0:l.netWeight,packPcode0:"0",packQty0:l.packQty,packType0:l.packType,packVol0:l.packVol}}if(a.length>1){var d=a.find((function(t){return"0"!==t.packPcode}));c={grossWeight1:d.grossWeight,netWeight1:d.netWeight,packPcode1:"1",packQty1:d.packQty,packType1:d.packType,packVol1:d.packVol}}var u=Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({},this.list[e]),r),c),o);this.$set(this.list,e,u)},moment_time_m:function(t){return l()(t).format("YYYY-MM-DD")},getCity_m:function(){var t=this;Object(o["f"])().then((function(e){var s=e.data;t.cityList=t._processDr(s)}))},_processDr:function(t){var e=function t(e){e.forEach((function(e){e.child&&(e.value=e.addressCode,e.label=e.addressName,e.children=e.child,delete e.child,t(e.children)),e.child||delete e.child}))};return e(t),t.forEach((function(t){return t.children.forEach((function(t){return t.children.forEach((function(t){return delete t.children}))}))})),t}}}},e9a7:function(t,e,s){"use strict";JSON.parse(window.localStorage.getItem("user")).roles[0].roleType},fd34:function(t,e,s){}}]);