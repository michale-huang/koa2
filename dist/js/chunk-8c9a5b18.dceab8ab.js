(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c9a5b18"],{"15fd":function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("a4d3"),e("c975"),e("b64b");function i(t,a){if(null==t)return{};var e,i,n={},s=Object.keys(t);for(i=0;i<s.length;i++)e=s[i],a.indexOf(e)>=0||(n[e]=t[e]);return n}function n(t,a){if(null==t)return{};var e,n,s=i(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}},"6f31":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"add-single"},[e("header-btn",{attrs:{title:"录入委托信息"}},[e("div",{attrs:{slot:"btn"},slot:"btn"},["基本信息"==t.tabName&&t.isDisabled&&"规律性周期委托"==t.law&&"周期"==t.animal||"基本信息"==t.tabName&&t.noisDisabled&&"非规律性周期委托"==t.law&&"周期"==t.animal?e("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存基本信息")]):"基本信息"==t.tabName&&!t.isDisabled&&"规律性周期委托"==t.law&&"周期"==t.animal||"基本信息"==t.tabName&&!t.noisDisabled&&"非规律性周期委托"==t.law&&"周期"==t.animal?e("span"):e("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存委托")])],1)]),e("line-header",{attrs:{lineHeaderData:t.cptPlanData.routeLists}}),e("div",{staticClass:"tas-box"},[e("span",[t._v("选择委托模式：")]),e("RadioGroup",{model:{value:t.animal,callback:function(a){t.animal=a},expression:"animal"}},[e("Radio",{attrs:{label:"单次"}},[t._v("单次委托")]),e("Radio",{attrs:{label:"周期"}},[t._v("合同委托")])],1),"周期"==t.animal?e("Select",{staticStyle:{width:"170px"},model:{value:t.law,callback:function(a){t.law=a},expression:"law"}},[e("Option",{attrs:{value:"规律性周期委托"}},[t._v("规律性周期委托")]),e("Option",{attrs:{value:"非规律性周期委托"}},[t._v("非规律性周期委托")])],1):t._e()],1),"单次"==t.animal?e("div",{staticClass:"single-form-box"},[e("single-form",{ref:"singleForm",attrs:{planData:t.cptPlanData}})],1):t._e(),"周期"==t.animal?e("div",{staticClass:"piblic-rate-tabs-box"},["规律性周期委托"==t.law?e("div",{staticClass:"public-form-box"},[e("Tabs",{attrs:{type:"card"},model:{value:t.tabName,callback:function(a){t.tabName=a},expression:"tabName"}},[e("TabPane",{attrs:{label:"录入委托基本信息",name:"基本信息"}},[e("cycle-formj",{ref:"cycleFormj",attrs:{planData:t.cptPlanData},on:{handelDisble:t.handelDisbleOk}})],1),e("TabPane",{attrs:{disabled:t.isDisabled,label:"录入单次委托信息",name:"详细信息"}},["详细信息"==t.tabName?e("cycle-formx",{ref:"cycleFormx",attrs:{okBack:t.okBack}}):t._e()],1)],1)],1):t._e(),"非规律性周期委托"==t.law?e("div",{staticClass:"public-form-box"},[e("Tabs",{attrs:{type:"card"},model:{value:t.tabName,callback:function(a){t.tabName=a},expression:"tabName"}},[e("TabPane",{attrs:{label:"录入委托基本信息",name:"基本信息"}},[e("no-cycle-formj",{ref:"NocycleFormj",attrs:{planData:t.cptPlanData},on:{handelDisble:t.handelDisbleNo}})],1),e("TabPane",{attrs:{disabled:t.noisDisabled,label:"录入单次委托信息",name:"详细信息"}},["详细信息"==t.tabName?e("no-cycle-formx",{ref:"NocycleFormx"}):t._e()],1)],1)],1):t._e()]):t._e()],1)},n=[],s=(e("b962"),e("1362")),o=e("f1c9"),r=e("3e98"),c=e("5e6e"),l=e("ea18"),d=e("6458"),u=e("5e47"),m={name:"ConfirmFreightRequest",components:{SingleForm:s["a"],CycleFormj:o["a"],CycleFormx:r["a"],NoCycleFormj:c["a"],NoCycleFormx:l["a"],lineHeader:d["a"],headerBtn:u["a"]},data:function(){return{animal:"单次",law:"规律性周期委托",tabName:"基本信息",isDisabled:!0,noisDisabled:!0,okBack:{},noBack:{}}},created:function(){this.setPlanData()},computed:{cptPlanData:function(){var t=JSON.parse(this.$route.query.data);return t}},methods:{setPlanData:function(){var t=JSON.parse(this.$route.query.data);this.$store.commit("logisticsCommission/conmitPlanData",t)},handelDisbleOk:function(t){this.okBack=t,this.isDisabled=!1},handelDisbleNo:function(t){this.$store.commit("logisticsCommission/conmitnoBack",t),this.noisDisabled=!1},save:function(){"单次"==this.animal&&this.$refs.singleForm.saveForm_m(),"周期"==this.animal&&("规律性周期委托"==this.law&&("基本信息"==this.tabName&&this.$refs.cycleFormj.saveForm_m(),"详细信息"==this.tabName&&this.$refs.cycleFormx.saveForm()),"非规律性周期委托"==this.law&&("基本信息"==this.tabName&&this.$refs.NocycleFormj.saveForm(),"详细信息"==this.tabName&&this.$refs.NocycleFormx.saveForm()))}}},f=m,b=(e("e9fd"),e("2877")),h=Object(b["a"])(f,i,n,!1,null,"02d72057",null);a["default"]=h.exports},"7db0":function(t,a,e){"use strict";var i=e("23e7"),n=e("b727").find,s=e("44d2"),o=e("ae40"),r="find",c=!0,l=o(r);r in[]&&Array(1)[r]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(r)},"8f27":function(t,a,e){"use strict";var i=e("77ab");a["a"]={data:function(){return{CargoInfoList:[]}},watch:{},methods:{cargoInfoItem_m:function(t){this.CargoInfoList=t},saveForm_m:function(){var t=this;this.$refs.formValidate.validate((function(a){a?t._add():t.$Message.error("必填项没填!")}))},sendTrust_m:function(){var t=this,a={entrustCode:this.cptentrustCode,entrustStatus:"AFORM"};Object(i["F"])({data:a}).then((function(a){a.data;t.$Message.success("操作成功"),t.$router.push("/logisstics-commission/one-logistics/1")}))}}}},c9c1:function(t,a,e){"use strict";e("7db0"),e("4160"),e("d81d"),e("b64b"),e("159b");var i=e("15fd"),n=e("5530"),s=e("e56e"),o=e("77ab"),r=e("2f62"),c=e("c1df"),l=e.n(c);a["a"]={data:function(){return{cityList:[],packTypeList:[],cargoTypeList:[],trspModeList:[],orderStatusList:[],goodsObj:{},goodsNameList:[]}},watch:{},computed:Object(n["a"])({},Object(r["b"])("logisticsCommission",["LawCallback"])),methods:{handel_orderStatusList_m:function(){var t=this;Object(s["e"])({dictionaryTypeKey:"ORDER_STATUS"}).then((function(a){var e=a.data,i=e.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.orderStatusList=i}))},handel_packTypeList_m:function(){var t=this;Object(s["e"])({dictionaryTypeKey:"PACKAGE_TYPE"}).then((function(a){var e=a.data,i=e.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.packTypeList=i}))},handel_cargoTypeList_m:function(){var t=this;Object(s["e"])({dictionaryTypeKey:"GOODS_TYPE"}).then((function(a){var e=a.data,i=e.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.cargoTypeList=i}))},handel_trspModeList_m:function(){var t=this;Object(s["e"])({dictionaryTypeKey:"TRANSPORT_MODE"}).then((function(a){var e=a.data,i=e.map((function(t){return{value:t.dictionaryKey,label:t.dictionaryValue}}));t.trspModeList=i}))},handel_goodsNameList_m:function(){var t=this;Object(o["o"])({entrustCode:this.LawCallback.entrustCode}).then((function(a){var e=a.data;t.goodsNameList=Object.keys(e),t.goodsObj=e}))},handelSearch_m:function(t,a){var e=this.goodsObj[t],s=e.getEntrustPackagingListRes,o=Object(i["a"])(e,["getEntrustPackagingListRes"]),r={},c={};if(s.length>0){var l=s.find((function(t){return"0"==t.packPcode}));r={grossWeight0:l.grossWeight,netWeight0:l.netWeight,packPcode0:"0",packQty0:l.packQty,packType0:l.packType,packVol0:l.packVol}}if(s.length>1){var d=s.find((function(t){return"0"!==t.packPcode}));c={grossWeight1:d.grossWeight,netWeight1:d.netWeight,packPcode1:"1",packQty1:d.packQty,packType1:d.packType,packVol1:d.packVol}}var u=Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({},this.list[a]),r),c),o);this.$set(this.list,a,u)},moment_time_m:function(t){return l()(t).format("YYYY-MM-DD")},getCity_m:function(){var t=this;Object(o["f"])().then((function(a){var e=a.data;t.cityList=t._processDr(e)}))},_processDr:function(t){var a=function t(a){a.forEach((function(a){a.child&&(a.value=a.addressCode,a.label=a.addressName,a.children=a.child,delete a.child,t(a.children)),a.child||delete a.child}))};return a(t),t.forEach((function(t){return t.children.forEach((function(t){return t.children.forEach((function(t){return delete t.children}))}))})),t}}}},e29a:function(t,a,e){},e9fd:function(t,a,e){"use strict";var i=e("e29a"),n=e.n(i);n.a}}]);