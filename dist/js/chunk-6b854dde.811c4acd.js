(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b854dde"],{"1c68":function(t,i,e){},2029:function(t,i,e){"use strict";var n,s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"flod-box"},[e("div",{staticClass:"btns"},[t._t("btns-start"),t._t("btns-end")],2),t._l(t.list,(function(i,n){return e("Row",{key:n,staticClass:"publc-bottom10"},[e("Col",{attrs:{span:"24"}},[e("div",{staticClass:"item-box"},[e("div",{staticClass:"header"},[e("span",[t._v("00"+t._s(n+1)+"单次委托")]),e("div",[e("span",{staticClass:"btn"},[e("span",{on:{click:function(e){return t.goodsOk(i,n)}}},[t._v("货好确认")]),e("span",{on:{click:function(e){return t.seePlan(i,n)}}},[t._v("查看全程物流计划")]),e("span",{on:{click:function(e){return t.addPlan(i,n)}}},[t._v("生成全程物流计划")]),i.isContentShow?t._e():e("span",{on:{click:function(e){return t.onOpen(i,n)}}},[t._v("展开")]),i.isContentShow?e("span",{on:{click:function(e){return t.onClose(i,n)}}},[t._v("收起")]):t._e(),e("span",{staticStyle:{cursor:"text"}},[t._v(t._s(i.entrustExecutoryStatus))])]),e("span",{staticClass:"icon"},[i.isContentShow?e("Icon",{attrs:{type:"ios-arrow-down"}}):e("Icon",{attrs:{type:"ios-arrow-up"}})],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:i.isContentShow,expression:"item.isContentShow"}],staticClass:"main-box"},[e("cargo-info",{attrs:{arrChild:i}})],1)])])],1)}))],2)},a=[],o=(e("2eeb"),e("88d6")),c=e("80a0"),r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"flod-box"},[e("div",{staticClass:"btns"},[t._t("btns-start"),e("span",{staticClass:"text"},[e("span",[t._v("开始时间：")]),e("span",[t._v(t._s(t.moment_time_m(t.formItem.startDatetime)))])]),e("Button",{on:{click:t.seeItemData}},[t._v("查看收发货通知人")]),t._t("btns-end")],2),t._l(t.list,(function(i,n){return e("Row",{key:n,staticClass:"publc-bottom10"},[e("Col",{attrs:{span:"24"}},[e("div",{staticClass:"item-box"},[e("div",{staticClass:"header"},[e("span",[t._v(t._s(n+1)+"货物")]),e("div",[e("span",{staticClass:"btn"},[i.isContentShow?t._e():e("span",{on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"de",void 0,e.key,void 0)?null:t.onOpen(i,n)}}},[t._v("展开")]),i.isContentShow?e("span",{on:{click:function(e){return t.onClose(i,n)}}},[t._v("收起")]):t._e()]),e("span",{staticClass:"icon"},[i.isContentShow?e("Icon",{attrs:{type:"ios-arrow-down"}}):e("Icon",{attrs:{type:"ios-arrow-up"}})],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:i.isContentShow,expression:"item.isContentShow"}],staticClass:"main-box"},[e("div",{staticClass:"public-form-content"},[e("Col",{attrs:{span:"8"}},[e("p",{staticClass:"item-form-title"},[t._v("货物信息")]),e("div",{staticClass:"table-boxjz"},[e("div",{staticClass:"table-rowjz"},[e("div",[t._v("货物名称：")]),e("div",[t._v(t._s(i.cargoName))])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("单次箱量：")]),e("div",[t._v(t._s(i.suitcaseQty))])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("单次毛重：")]),e("div",[t._v(t._s(i.grossWeight)+" Kg")])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("单次净重：")]),e("div",[t._v(t._s(i.netWeight)+" kg")])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("单次件数：")]),e("div",[t._v(t._s(i.cargoQty))])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("单次体积：")]),e("div",[t._v(t._s(i.cargoVol)+" m³")])]),e("div",{staticClass:"table-rowjz"},[e("div"),e("div")])])]),e("Col",{attrs:{span:"8"}},[e("p",{staticClass:"item-form-title"},[t._v("一级包装")]),e("div",{staticClass:"table-boxjz"},[e("div",{staticClass:"table-rowjz"},[e("div",[t._v("包装类型：")]),e("div",[t._v(t._s(i.one.packType))])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("包装毛重：")]),e("div",[t._v(t._s(i.one.grossWeight)+" kg")])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("包装净重：")]),e("div",[t._v(t._s(i.one.netWeight)+" kg")])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("包装件数：")]),e("div",[t._v(t._s(i.one.packQty))])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("包装体积：")]),e("div",[t._v(t._s(i.one.packVol)+" m³")])]),t._l(2,(function(t,i){return e("div",{key:i,staticClass:"table-rowjz"},[e("div"),e("div")])}))],2)]),e("Col",{attrs:{span:"8"}},[e("p",{staticClass:"item-form-title"},[t._v("二级包装")]),e("div",{staticClass:"table-boxjz"},[e("div",{staticClass:"table-rowjz"},[e("div",[t._v("包装类型：")]),e("div",[t._v(t._s(i.two.packType))])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("包装毛重：")]),e("div",[t._v(t._s(i.two.grossWeight)+" kg")])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("包装净重：")]),e("div",[t._v(t._s(i.two.netWeight)+" kg")])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("包装件数：")]),e("div",[t._v(t._s(i.two.packQty))])]),e("div",{staticClass:"table-rowjz"},[e("div",[t._v("包装体积：")]),e("div",[t._v(t._s(i.two.packVol)+" m³")])]),t._l(2,(function(t,i){return e("div",{key:i,staticClass:"table-rowjz"},[e("div"),e("div")])}))],2)])],1)])])])],1)}))],2)},l=[],d=(e("4194"),e("d497"),e("46a4")),u=e("c9c1"),v={mixins:[u["a"]],components:{},data:function(){return{itemName:[],itemNameObj:{},formItem:{},list:[{isContentShow:!1}]}},props:{arrChild:{type:Object}},computed:{cptList:function(){return this.arrChild}},watch:{},created:function(){this.initList()},methods:{initList:function(){var t=this.cptList,i=t.entrustCargoAffiliationRes,e=Object(d["a"])(t,["entrustCargoAffiliationRes"]),n=i.map((function(t){return null==t.entrustPackagingRes&&(t.entrustPackagingRes=[{},{}]),Object(c["a"])(Object(c["a"])({},t),{},{one:t.entrustPackagingRes.find((function(t){return"0"==t.packPcode}))||{},two:t.entrustPackagingRes.find((function(t){return"0"!==t.packPcode}))||{},isContentShow:!1})}));this.formItem=e,this.list=n},onOpen:function(t,i){var e=this.list.some((function(t){return 1==t.isContentShow}));e?this.$Message.error("请先保存编辑项"):this.list[i].isContentShow=!0},onClose:function(t,i){this.list[i].isContentShow=!1},seeItemData:function(){alert("我是一个弹框，功能开发中")}}},p=v,f=(e("6a85"),e("4023")),_=Object(f["a"])(p,r,l,!1,null,"2b64de64",null),h=_.exports,b={components:{CargoInfo:h},props:{arr:{type:Array,default:[]}},data:function(){return{list:[{isContentShow:!1},{isContentShow:!1}]}},watch:{},computed:{cptList:function(){return this.arr}},created:function(){this.initList()},mounted:function(){},methods:(n={initList:function(){var t=this.cptList.map((function(t){return Object(c["a"])(Object(c["a"])({},t),{},{isContentShow:!1})}));this.list=t},seePlan:function(t,i){alert("查看物流全程计划")},addPlan:function(t,i){this.$router.push({path:"/logistics-whole-journey-plan/generate",query:{executoryEntrustCode:t.executoryEntrustCode}})},goodsOk:function(t,i){alert("货好确认")}},Object(o["a"])(n,"seePlan",(function(t,i){alert("查看物流全程计划")})),Object(o["a"])(n,"onOpen",(function(t,i){this.list[i].isContentShow=!0})),Object(o["a"])(n,"onClose",(function(t,i){this.list[i].isContentShow=!1})),n)},C=b,m=(e("6752"),Object(f["a"])(C,s,a,!1,null,"86b75d38",null));i["a"]=m.exports},4194:function(t,i,e){"use strict";var n=e("1c8b"),s=e("5dfd").find,a=e("258f"),o=e("ff9c"),c="find",r=!0,l=o(c);c in[]&&Array(1)[c]((function(){r=!1})),n({target:"Array",proto:!0,forced:r||!l},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(c)},"46a4":function(t,i,e){"use strict";e.d(i,"a",(function(){return s}));e("f3dd"),e("ecb4"),e("fe8a");function n(t,i){if(null==t)return{};var e,n,s={},a=Object.keys(t);for(n=0;n<a.length;n++)e=a[n],i.indexOf(e)>=0||(s[e]=t[e]);return s}function s(t,i){if(null==t)return{};var e,s,a=n(t,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)e=o[s],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}},6752:function(t,i,e){"use strict";var n=e("1c68"),s=e.n(n);s.a},"6a85":function(t,i,e){"use strict";var n=e("dafb"),s=e.n(n);s.a},c9c1:function(t,i,e){"use strict";e("4194"),e("2eeb"),e("fe8a");var n=e("46a4"),s=e("80a0"),a=e("e56e"),o=e("77ab"),c=e("ae8c"),r=e("35f4"),l=e.n(r);i["a"]={data:function(){return{packTypeList:[],cargoTypeList:[],trspModeList:[],orderStatusList:[],goodsObj:{},goodsNameList:[]}},watch:{},computed:Object(s["a"])({},Object(c["b"])("logisticsCommission",["LawCallback"])),methods:{handel_orderStatusList_m:function(){var t=this;Object(a["e"])({dictionaryTypeKey:"ORDER_STATUS"}).then((function(i){var e=i.data,n=e.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.orderStatusList=n}))},handel_packTypeList_m:function(){var t=this;Object(a["e"])({dictionaryTypeKey:"PACKAGE_TYPE"}).then((function(i){var e=i.data,n=e.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.packTypeList=n}))},handel_cargoTypeList_m:function(){var t=this;Object(a["e"])({dictionaryTypeKey:"GOODS_TYPE"}).then((function(i){var e=i.data,n=e.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.cargoTypeList=n}))},handel_trspModeList_m:function(){var t=this;Object(a["e"])({dictionaryTypeKey:"TRANSPORT_MODE"}).then((function(i){var e=i.data,n=e.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.trspModeList=n}))},handel_goodsNameList_m:function(){var t=this;Object(o["f"])({entrustCode:this.LawCallback.entrustCode}).then((function(i){var e=i.data;t.goodsNameList=Object.keys(e),t.goodsObj=e}))},handelSearch_m:function(t,i){var e=this.goodsObj[t],a=e.getEntrustPackagingListRes,o=Object(n["a"])(e,["getEntrustPackagingListRes"]),c={},r={};if(a.length>0){var l=a.find((function(t){return"0"==t.packPcode}));c={grossWeight0:l.grossWeight,netWeight0:l.netWeight,packPcode0:"0",packQty0:l.packQty,packType0:l.packType,packVol0:l.packVol}}if(a.length>1){var d=a.find((function(t){return"0"!==t.packPcode}));r={grossWeight1:d.grossWeight,netWeight1:d.netWeight,packPcode1:"1",packQty1:d.packQty,packType1:d.packType,packVol1:d.packVol}}var u=Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({},this.list[i]),c),r),o);this.$set(this.list,i,u)},moment_time_m:function(t){return l()(t).format("YYYY-MM-DD")}}}},dafb:function(t,i,e){}}]);