(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2273ece4"],{1817:function(t,e,s){},"1b80":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flod-box"},[s("div",{staticClass:"btns"},[t._t("btns-start"),s("Button",{on:{click:t.addItemData}},[t._v(" 新增单次委托 "),s("Icon",{attrs:{type:"ios-add-circle-outline"}})],1),s("Button",{on:{click:t.deleteItemData}},[t._v(" 批量删除 "),s("Icon",{attrs:{type:"ios-close-circle-outline"}})],1),t._t("btns-end")],2),s("CheckboxGroup",{model:{value:t.socialSelection,callback:function(e){t.socialSelection=e},expression:"socialSelection"}},t._l(t.list,(function(e,a){return s("Row",{key:a},[s("Col",{attrs:{span:"24"}},[s("Checkbox",{attrs:{label:a}}),s("div",{staticClass:"item-box"},[s("div",{staticClass:"header"},[s("span",[t._v("00"+t._s(a+1)+"单次委托")]),s("div",[s("span",{staticClass:"btn"},[e.isContentShow?t._e():s("span",{on:{click:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"de",void 0,s.key,void 0)?null:t.onOpen(e,a)}}},[t._v("编辑")]),e.isContentShow?s("span",{on:{click:function(s){return t.onClose(e,a)}}},[t._v("保存")]):t._e()]),s("span",{staticClass:"icon"},[e.isContentShow?s("Icon",{attrs:{type:"ios-arrow-down"}}):s("Icon",{attrs:{type:"ios-arrow-up"}})],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isContentShow,expression:"item.isContentShow"}],staticClass:"main-box"},[s("cargo-info",{on:{cargoInfoItem:t.cargoInfoItem_m}},[s("template",{slot:"btns-end"},[s("span",{staticStyle:{color:"red"}},[t._v("* ")]),s("span",[t._v("开始时间：")]),s("DatePicker",{attrs:{type:"datetime",placeholder:"Select date"},model:{value:t.list[a].startDatetime,callback:function(e){t.$set(t.list[a],"startDatetime",e)},expression:"list[index].startDatetime"}})],1)],2)],1)])],1)],1)})),1)],1)},i=[],n=(s("dbb3"),s("d497"),s("b962")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flod-box"},[s("div",{staticClass:"btns"},[t._t("btns-start"),s("Button",{on:{click:t.addItemData}},[t._v(" 新增货物信息 "),s("Icon",{attrs:{type:"ios-add-circle-outline"}})],1),s("Button",{on:{click:t.deleteItemData}},[t._v(" 批量删除 "),s("Icon",{attrs:{type:"ios-close-circle-outline"}})],1),t._t("btns-end")],2),s("CheckboxGroup",{model:{value:t.socialSelection,callback:function(e){t.socialSelection=e},expression:"socialSelection"}},t._l(t.list,(function(e,a){return s("Row",{key:a},[s("Col",{attrs:{span:"24"}},[s("Checkbox",{attrs:{label:a}}),s("div",{staticClass:"item-box"},[s("div",{staticClass:"public-flod-header",staticStyle:{background:"#f5f5f5"}},[s("div",{staticClass:"header-l"},[t._v("00"+t._s(a+1)+"货物")]),s("div",{staticClass:"header-r"},[e.isContentShow?s("span",{staticClass:"btn",on:{click:function(s){return t.onClose(e,a)}}},[t._v("保存")]):t._e(),s("span",{staticClass:"icon"},[e.isContentShow?s("Icon",{attrs:{type:"ios-arrow-down"}}):t._e(),e.isContentShow?t._e():s("Icon",{attrs:{type:"ios-arrow-up"},on:{click:function(s){return t.onOpen(e,a)}}})],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isContentShow,expression:"item.isContentShow"}],staticClass:"main-box"},[s("div",{staticClass:"public-form-content"},[s("Form",{ref:"formCargoInfo"+a,refInFor:!0,attrs:{"label-position":"right","label-width":152,rules:t.formItemRule,model:t.list[a]}},[s("Row",{attrs:{gutter:2}},[s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"item-form-title"},[t._v("货物信息")]),s("FormItem",{attrs:{label:"货物名称：",prop:"cargoName"}},[s("Select",{on:{"on-change":function(s){return t.handelSearch_m(e.cargoName,a)}},model:{value:t.list[a].cargoName,callback:function(e){t.$set(t.list[a],"cargoName",e)},expression:"list[index].cargoName"}},t._l(t.goodsNameList,(function(e){return s("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),s("FormItem",{attrs:{label:"单次箱量："}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].suitcaseQty,callback:function(e){t.$set(t.list[a],"suitcaseQty",e)},expression:"list[index].suitcaseQty"}})],1),s("FormItem",{attrs:{label:"单次毛重：",prop:"grossWeight"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].grossWeight,callback:function(e){t.$set(t.list[a],"grossWeight",e)},expression:"list[index].grossWeight"}})],1),s("FormItem",{attrs:{label:"单次净重：",prop:"netWeight"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].netWeight,callback:function(e){t.$set(t.list[a],"netWeight",e)},expression:"list[index].netWeight"}})],1),s("FormItem",{attrs:{label:"单次件数：",prop:"cargoQty"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].cargoQty,callback:function(e){t.$set(t.list[a],"cargoQty",e)},expression:"list[index].cargoQty"}})],1),s("FormItem",{attrs:{label:"单次体积："}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].cargoVol,callback:function(e){t.$set(t.list[a],"cargoVol",e)},expression:"list[index].cargoVol"}})],1)],1),s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"item-form-title"},[t._v("一级包装")]),s("FormItem",{attrs:{label:"包装类型：",prop:"packType0"}},[s("Input",{model:{value:t.list[a].packType0,callback:function(e){t.$set(t.list[a],"packType0",e)},expression:"list[index].packType0"}})],1),s("FormItem",{attrs:{label:"包装毛重：",prop:"packType0"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].grossWeight0,callback:function(e){t.$set(t.list[a],"grossWeight0",e)},expression:"list[index].grossWeight0"}})],1),s("FormItem",{attrs:{label:"包装净重：",prop:"packType0"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].netWeight0,callback:function(e){t.$set(t.list[a],"netWeight0",e)},expression:"list[index].netWeight0"}})],1),s("FormItem",{attrs:{label:"包装件数：",prop:"packType0"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].packQty0,callback:function(e){t.$set(t.list[a],"packQty0",e)},expression:"list[index].packQty0"}})],1),s("FormItem",{attrs:{label:"包装体积："}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].packVol0,callback:function(e){t.$set(t.list[a],"packVol0",e)},expression:"list[index].packVol0"}})],1),t._l(1,(function(e,a){return s("FormItem",{key:a,staticClass:"jz-meaningless"},[s("template",{slot:"label"},[t._v("无意义")]),s("Input",{attrs:{disabled:""}})],2)}))],2),s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"item-form-title"},[t._v("二级包装")]),s("FormItem",{attrs:{label:"包装类型："}},[s("Input",{model:{value:t.list[a].packType1,callback:function(e){t.$set(t.list[a],"packType1",e)},expression:"list[index].packType1"}})],1),s("FormItem",{attrs:{label:"包装毛重："}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].grossWeight1,callback:function(e){t.$set(t.list[a],"grossWeight1",e)},expression:"list[index].grossWeight1"}})],1),s("FormItem",{attrs:{label:"包装净重："}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].netWeight1,callback:function(e){t.$set(t.list[a],"netWeight1",e)},expression:"list[index].netWeight1"}})],1),s("FormItem",{attrs:{label:"包装件数："}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].packQty1,callback:function(e){t.$set(t.list[a],"packQty1",e)},expression:"list[index].packQty1"}})],1),s("FormItem",{attrs:{label:"包装体积："}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].packVol1,callback:function(e){t.$set(t.list[a],"packVol1",e)},expression:"list[index].packVol1"}})],1),t._l(1,(function(e,a){return s("FormItem",{key:a,staticClass:"jz-meaningless"},[s("template",{slot:"label"},[t._v("无意义")]),s("Input",{attrs:{disabled:""}})],2)}))],2)],1)],1)],1)])])],1)],1)})),1)],1)},l=[],r=(s("fe8a"),s("77ab")),c=s("c9c1"),u={mixins:[c["a"]],components:{},data:function(){return{socialSelection:[],itemName:[],itemNameObj:{},formItemRule:{cargoName:[{required:!0,message:"必填",trigger:"change"}],markNo:[n["a"].required("")[0]],grossWeight:[n["a"].required("")[0]],netWeight:[n["a"].required("")[0]],cargoNum:[n["a"].required("")[0]],packType:[n["a"].required("")[0]],cargoQty:[n["a"].required("")[0]],packType0:[n["a"].required("")[0]]},list:[{isContentShow:!1}]}},watch:{list:{handler:function(t,e){this.$emit("cargoInfoItem",e)},deep:!0}},created:function(){this.handel_packTypeList_m(),this.handel_goodsNameList_m()},computed:{},methods:{getItemNames:function(){var t=this;Object(r["f"])({entrustCode:this.bianHao.entrustCode}).then((function(e){var s=e.data;t.itemName=Object.keys(s),t.itemNameObj=s}))},onOpen:function(t,e){var s=this.list.some((function(t){return 1==t.isContentShow}));s?this.$Message.error("请先保存编辑项"):this.list[e].isContentShow=!0},onClose:function(t,e){var s=this;this.$refs["formCargoInfo".concat(e)][0].validate((function(t){t?(s.list[e].isContentShow=!1,s.$Message.success("新增货物信息成功!")):s.$Message.error("表单验证不通过!请修改，或删除这条记录")}))},deleteItemData:function(){var t=this,e=this.list.filter((function(e,s){return!t.socialSelection.some((function(t){return t==s}))}));this.list=e,this.socialSelection=[]},addItemData:function(){this.list.push({isContentShow:!1})}}},p=u,m=(s("de9b"),s("4023")),d=Object(m["a"])(p,o,l,!1,null,"059a5284",null),h=d.exports,b=s("8f27"),f={mixins:[b["a"]],components:{CargoInfo:h},data:function(){return{socialSelection:[],formModel:{},formItemRule:{cargoName:[n["a"].required("")[0]]},list:[{isContentShow:!1}]}},watch:{list:{handler:function(t,e){this.$emit("cargoInfoItem",e)},deep:!0}},methods:{onOpen:function(t,e){var s=this.list.some((function(t){return 1==t.isContentShow}));s?this.$Message.error("请先保存编辑项"):this.list[e].isContentShow=!0},onClose:function(t,e){this.list[e].isContentShow=!1,this.list[e].itemArr=this.CargoInfoList},deleteItemData:function(){var t=this,e=this.list.filter((function(e,s){return!t.socialSelection.some((function(t){return t==s}))}));this.list=e,this.socialSelection=[]},addItemData:function(){this.list.push({isContentShow:!1})}}},g=f,k=(s("dcfd"),Object(m["a"])(g,a,i,!1,null,"04aa8079",null));e["a"]=k.exports},"649f":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flod-box"},[s("div",{staticClass:"btns"},[t._t("btns-start"),s("Button",{on:{click:t.addItemData}},[t._v(" 新增货物信息 "),s("Icon",{attrs:{type:"ios-add-circle-outline"}})],1),s("Button",{on:{click:t.deleteItemData}},[t._v(" 批量删除 "),s("Icon",{attrs:{type:"ios-close-circle-outline"}})],1),t._t("btns-end")],2),s("CheckboxGroup",{model:{value:t.socialSelection,callback:function(e){t.socialSelection=e},expression:"socialSelection"}},t._l(t.list,(function(e,a){return s("Row",{key:a},[s("Col",{attrs:{span:"24"}},[s("Checkbox",{attrs:{label:a}}),s("div",{staticClass:"item-box"},[s("div",{staticClass:"public-flod-header"},[s("div",{staticClass:"header-l"},[t._v(t._s(t.list[a].cargoName))]),s("div",{staticClass:"header-r"},[e.isContentShow?s("span",{staticClass:"btn",on:{click:function(s){return t.onClose(e,a)}}},[t._v("保存")]):t._e(),s("span",{staticClass:"icon"},[e.isContentShow?s("Icon",{attrs:{type:"ios-arrow-down"}}):t._e(),e.isContentShow?t._e():s("Icon",{attrs:{type:"ios-arrow-up"},on:{click:function(s){return t.onOpen(e,a)}}})],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isContentShow,expression:"item.isContentShow"}],staticClass:"main-box"},[s("div",{staticClass:"public-form-content"},[s("Form",{ref:"formCargoInfo"+a,refInFor:!0,attrs:{"label-position":"right","label-width":152,rules:t.formItemRule,model:t.list[a]}},[s("Row",{attrs:{gutter:2}},[s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"item-form-title"},[t._v("货物信息")]),s("FormItem",{attrs:{label:"货物名称：",prop:"cargoName"}},[s("Select",{on:{"on-change":function(s){return t.handelSearch_m(e.cargoName,a)}},model:{value:t.list[a].cargoName,callback:function(e){t.$set(t.list[a],"cargoName",e)},expression:"list[index].cargoName"}},t._l(t.goodsNameList,(function(e){return s("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),s("FormItem",{attrs:{label:"单次箱量："}},[s("Input",{model:{value:t.list[a].suitcaseQty,callback:function(e){t.$set(t.list[a],"suitcaseQty",e)},expression:"list[index].suitcaseQty"}})],1),s("FormItem",{attrs:{label:"单次毛重：",prop:"grossWeight"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].grossWeight,callback:function(e){t.$set(t.list[a],"grossWeight",e)},expression:"list[index].grossWeight"}})],1),s("FormItem",{attrs:{label:"单次净重：",prop:"netWeight"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].netWeight,callback:function(e){t.$set(t.list[a],"netWeight",e)},expression:"list[index].netWeight"}})],1),s("FormItem",{attrs:{label:"单次件数：",prop:"cargoQty"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].cargoQty,callback:function(e){t.$set(t.list[a],"cargoQty",e)},expression:"list[index].cargoQty"}})],1),s("FormItem",{attrs:{label:"单次体积："}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].cargoVol,callback:function(e){t.$set(t.list[a],"cargoVol",e)},expression:"list[index].cargoVol"}})],1)],1),s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"item-form-title"},[t._v("一级包装")]),s("FormItem",{attrs:{label:"包装类型：",prop:"packType0"}},[s("Select",{attrs:{filterable:"",clearable:""},model:{value:t.list[a].packType0,callback:function(e){t.$set(t.list[a],"packType0",e)},expression:"list[index].packType0"}},t._l(t.packTypeList,(function(e){return s("Option",{key:e.value,attrs:{value:e.label}},[t._v(t._s(e.label))])})),1)],1),s("FormItem",{attrs:{label:"包装毛重：",prop:"packType0"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].grossWeight0,callback:function(e){t.$set(t.list[a],"grossWeight0",e)},expression:"list[index].grossWeight0"}})],1),s("FormItem",{attrs:{label:"包装净重：",prop:"packType0"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].netWeight0,callback:function(e){t.$set(t.list[a],"netWeight0",e)},expression:"list[index].netWeight0"}})],1),s("FormItem",{attrs:{label:"包装件数：",prop:"packType0"}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].packQty0,callback:function(e){t.$set(t.list[a],"packQty0",e)},expression:"list[index].packQty0"}})],1),s("FormItem",{attrs:{label:"包装体积："}},[s("Input",{attrs:{type:"number"},model:{value:t.list[a].packVol0,callback:function(e){t.$set(t.list[a],"packVol0",e)},expression:"list[index].packVol0"}})],1),t._l(1,(function(e,a){return s("FormItem",{key:a,staticClass:"jz-meaningless"},[s("template",{slot:"label"},[t._v("无意义")]),s("Input",{attrs:{disabled:""}})],2)}))],2),s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"item-form-title"},[t._v("二级包装")]),s("FormItem",{attrs:{label:"包装类型："}},[s("Select",{attrs:{filterable:"",clearable:""},model:{value:t.list[a].packType1,callback:function(e){t.$set(t.list[a],"packType1",e)},expression:"list[index].packType1"}},t._l(t.packTypeList,(function(e){return s("Option",{key:e.value,attrs:{value:e.label}},[t._v(t._s(e.label))])})),1)],1),s("FormItem",{attrs:{label:"包装毛重："}},[s("Input",{model:{value:t.list[a].grossWeight1,callback:function(e){t.$set(t.list[a],"grossWeight1",e)},expression:"list[index].grossWeight1"}})],1),s("FormItem",{attrs:{label:"包装净重："}},[s("Input",{model:{value:t.list[a].netWeight1,callback:function(e){t.$set(t.list[a],"netWeight1",e)},expression:"list[index].netWeight1"}})],1),s("FormItem",{attrs:{label:"包装件数："}},[s("Input",{model:{value:t.list[a].packQty1,callback:function(e){t.$set(t.list[a],"packQty1",e)},expression:"list[index].packQty1"}})],1),s("FormItem",{attrs:{label:"包装体积："}},[s("Input",{model:{value:t.list[a].packVol1,callback:function(e){t.$set(t.list[a],"packVol1",e)},expression:"list[index].packVol1"}})],1),t._l(1,(function(e,a){return s("FormItem",{key:a,staticClass:"jz-meaningless"},[s("template",{slot:"label"},[t._v("无意义")]),s("Input",{attrs:{disabled:""}})],2)}))],2)],1)],1)],1)])])],1)],1)})),1)],1)},i=[],n=(s("dbb3"),s("d497"),s("b962")),o=s("c9c1"),l={mixins:[o["a"]],components:{},data:function(){return{socialSelection:[],formItemRule:{cargoName:[{required:!0,message:"必填",trigger:"change"}],markNo:[n["a"].required("")[0]],grossWeight:[n["a"].required("")[0]],netWeight:[n["a"].required("")[0]],cargoNum:[n["a"].required("")[0]],packType:[n["a"].required("")[0]],cargoQty:[n["a"].required("")[0]],packType0:[n["a"].required("")[0]]},list:[{isContentShow:!1,grossWeight0:null}]}},watch:{list:{handler:function(t,e){this.$emit("cargoInfoItem",e)},deep:!0}},created:function(){this.handel_packTypeList_m(),this.handel_goodsNameList_m()},methods:{onOpen:function(t,e){var s=this.list.some((function(t){return 1==t.isContentShow}));s?this.$Message.error("请先保存编辑项"):this.list[e].isContentShow=!0},onClose:function(t,e){var s=this;this.$refs["formCargoInfo".concat(e)][0].validate((function(t){t?(s.list[e].isContentShow=!1,s.$Message.success("新增货物信息成功!")):s.$Message.error("表单验证不通过!请修改，或删除这条记录")}))},deleteItemData:function(){var t=this,e=this.list.filter((function(e,s){return!t.socialSelection.some((function(t){return t==s}))}));this.list=e,this.socialSelection=[]},addItemData:function(){this.list.push({isContentShow:!1})}}},r=l,c=(s("dbea"),s("4023")),u=Object(c["a"])(r,a,i,!1,null,"3f62c7ec",null);e["a"]=u.exports},"6a6e":function(t,e,s){},dbea:function(t,e,s){"use strict";var a=s("1817"),i=s.n(a);i.a},dcfd:function(t,e,s){"use strict";var a=s("6a6e"),i=s.n(a);i.a},de9b:function(t,e,s){"use strict";var a=s("ecc3"),i=s.n(a);i.a},ecc3:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2273ece4.cb08f2f1.js.map