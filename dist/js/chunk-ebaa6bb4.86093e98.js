(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebaa6bb4"],{"00b8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-manage"},[a("adt-search-folder",{attrs:{searchRouter:{query:{label:t.search.label,examineStatus:t.search.examineStatus,useStatus:t.search.useStatus}},isStatus:!0}},[a("template",{slot:"status"},[a("div",{staticClass:"status"},[a("Col",{attrs:{span:"10"}},[a("div",{staticClass:"name"},[t._v("审核状态:")]),t._l(t.auditStatus,(function(e){return a("span",{key:e.dictionaryKey,class:{"click-status":t.search.examineStatus===e.dictionaryKey},on:{click:function(a){return t.chooseExamineStatus(e.dictionaryKey)}}},[t._v(" "+t._s(e.dictionaryValue)+" ")])}))],2),a("Col",{attrs:{span:"14"}},[a("div",{staticClass:"name"},[t._v("启用状态:")]),t._l(t.enableStatus,(function(e){return a("span",{key:e.dictionaryKey,class:{"click-status":t.search.useStatus===e.dictionaryKey},on:{click:function(a){return t.chooseUseStatus(e.dictionaryKey)}}},[t._v(" "+t._s(e.dictionaryValue)+" ")])}))],2)],1)]),a("template",{slot:"always-show"},[a("Col",{staticClass:"form-item",attrs:{span:"6"}},[a("span",[t._v("数据项名称:")]),a("Input",{attrs:{clearable:""},model:{value:t.search.label,callback:function(e){t.$set(t.search,"label",e)},expression:"search.label"}})],1)],1)],2),a("div",{staticClass:"content"},[a("div",{staticClass:"btns-paginator"},[a("adt-button",[a("Button",{on:{click:function(e){return t.add()}}},[t._v(" 新增数据项 "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_tianjia"}})])]),a("Button",{on:{click:function(e){return t.startUsing.apply(void 0,[t.apiEnable,""].concat(t.startAndStopData))}}},[t._v(" "+t._s("批量启用"+(t.isManager?"":"申请"))+" "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-shenqing"}})])]),a("Button",{on:{click:function(e){return t.stopUsing.apply(void 0,[t.apiDisable,""].concat(t.startAndStopData))}}},[t._v(" "+t._s("批量停用"+(t.isManager?"":"申请"))+" "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-shenqing"}})])])],1),a("adt-paginator",{attrs:{currentPage:~~t.page,total:~~t.total}})],1),a("div",{staticClass:"public-table-data"},[a("Table",{attrs:{columns:t.columns,data:t.tableData,stripe:""},on:{"on-selection-change":t.selectionChange},scopedSlots:t._u([{key:"createDatetime",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.timestampFormat(a.createDatetime))+" ")]}},{key:"examineStatus",fn:function(e){var n=e.row;return[a("span",{class:{success:"pass"===n.examineStatus,error:"fail"===n.examineStatus}},[t._v(" "+t._s(n.examineStatusTranslate)+" ")])]}},{key:"useStatus",fn:function(e){var n=e.row;return[a("span",{class:{success:"enable"===n.useStatus,error:"disable"===n.useStatus}},[t._v(" "+t._s(n.useStatusTranslate)+" ")])]}},{key:"action",fn:function(e){var n=e.row;return[n.useStatus&&"disable"!==n.useStatus||"wait"===n.examineStatus?t._e():a("span",{staticClass:"icon-action icon-action-word",attrs:{title:"启用"},on:{click:function(e){return t.startUsing.apply(void 0,[t.apiEnable,n].concat(t.startAndStopData))}}},[t._v("启")]),n.useStatus&&"enable"===n.useStatus&&"wait"!==n.examineStatus?a("span",{staticClass:"icon-action icon-action-word",attrs:{title:"停用"},on:{click:function(e){return t.stopUsing.apply(void 0,[t.apiDisable,n].concat(t.startAndStopData))}}},[t._v("停")]):t._e(),a("span",{attrs:{title:"审核"}},[t.isManager&&"wait"===n.examineStatus?a("svg",{staticClass:"icon-action iconfont",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.examine(n,"name","version")}}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_shenhe"}})]):t._e()]),"enable"!==n.useStatus?a("span",{attrs:{title:"编辑"}},[a("svg",{staticClass:"icon-action iconfont",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.edit(n)}}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_caozuo-bianji"}})])]):t._e(),t.isManager&&"enable"!==n.useStatus?a("span",{attrs:{title:"删除"}},[a("svg",{staticClass:"icon-action iconfont",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.remove(n,"name")}}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_caozuo-shanchu"}})])]):t._e(),a("span",{attrs:{title:"详情"}},[a("svg",{staticClass:"icon-action iconfont",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.detail(n)}}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_caozuo-xiangqing"}})])])]}}])})],1)]),a("adt-my-modal",{attrs:{okText:"保存",width:"650",title:t.modalTitle,showModal:t.isModalShow},on:{"on-visible-change":t.addVisibleChange,"on-ok":function(e){return t.save()},"on-cancel":function(e){return t.cancel()}}},[a("Form",{ref:"formItemData",staticClass:"two-column",attrs:{"label-position":"left",model:t.formItem,rules:t.formItemRule,"label-width":120,inline:"","label-colon":""}},[t.isAdd?a("FormItem",{attrs:{label:"数据项编号",prop:"name"}},[a("Input",{attrs:{clearable:""},model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name",e)},expression:"formItem.name"}})],1):a("div",{staticClass:"edit-field"},[a("span",{staticClass:"name"},[t._v("数据项编号：")]),t._v(t._s(t.editField)+" ")]),a("FormItem",{attrs:{label:"数据项名称",prop:"label"}},[a("Input",{attrs:{clearable:""},model:{value:t.formItem.label,callback:function(e){t.$set(t.formItem,"label",e)},expression:"formItem.label"}})],1),a("FormItem",{attrs:{label:"数据项分类",prop:"itemType"}},[a("Select",{attrs:{clearable:""},model:{value:t.formItem.itemType,callback:function(e){t.$set(t.formItem,"itemType",e)},expression:"formItem.itemType"}},t._l(t.itemType,(function(e){return a("Option",{key:e.dictionaryKey,attrs:{value:e.dictionaryKey}},[t._v(" "+t._s(e.dictionaryValue)+" ")])})),1)],1),a("FormItem",{attrs:{label:"控件类型",prop:"controlType"}},[a("Select",{attrs:{clearable:""},model:{value:t.formItem.controlType,callback:function(e){t.$set(t.formItem,"controlType",e)},expression:"formItem.controlType"}},t._l(t.controlType,(function(e){return a("Option",{key:e.dictionaryKey,attrs:{value:e.dictionaryKey}},[t._v(" "+t._s(e.dictionaryValue)+" ")])})),1)],1),a("FormItem",{attrs:{label:"数据类型",prop:"dataType"}},[a("Select",{attrs:{clearable:""},model:{value:t.formItem.dataType,callback:function(e){t.$set(t.formItem,"dataType",e)},expression:"formItem.dataType"}},t._l(t.dataType,(function(e){return a("Option",{key:e.dictionaryKey,attrs:{value:e.dictionaryKey}},[t._v(" "+t._s(e.dictionaryValue)+" ")])})),1)],1),a("FormItem",{attrs:{label:"数据最大长度",prop:"maxLength"}},[a("Input",{attrs:{clearable:""},model:{value:t.formItem.maxLength,callback:function(e){t.$set(t.formItem,"maxLength",e)},expression:"formItem.maxLength"}})],1),a("FormItem",{class:"string"!==t.formItem.dataType&&t.formItem.dataType?"ivu-form-item-required":"",attrs:{label:"数据精度",prop:"accuracy","show-message":!("string"===t.formItem.dataType||!t.formItem.dataType)}},[a("Input",{attrs:{clearable:""},model:{value:t.formItem.accuracy,callback:function(e){t.$set(t.formItem,"accuracy",e)},expression:"formItem.accuracy"}})],1),a("FormItem",{class:"I"!==t.formItem.controlType&&t.formItem.controlType?"ivu-form-item-required":"",attrs:{label:"数据来源",prop:"source","show-message":!("I"===t.formItem.controlType||!t.formItem.controlType)}},[a("Select",{attrs:{clearable:""},model:{value:t.formItem.source,callback:function(e){t.$set(t.formItem,"source",e)},expression:"formItem.source"}},t._l(t.dataSource,(function(e){return a("Option",{key:e.dictionaryKey,attrs:{value:e.dictionaryKey}},[t._v(" "+t._s(e.dictionaryValue)+" ")])})),1)],1),a("FormItem",{class:"I"!==t.formItem.controlType&&t.formItem.controlType?"ivu-form-item-required":"",attrs:{label:"数据来源值",prop:"sourceValue","show-message":!("I"===t.formItem.controlType||!t.formItem.controlType)}},[a("Input",{attrs:{clearable:""},model:{value:t.formItem.sourceValue,callback:function(e){t.$set(t.formItem,"sourceValue",e)},expression:"formItem.sourceValue"}})],1),a("FormItem",{attrs:{label:"备注规则",prop:"note"}},[a("Input",{staticStyle:{width:"470px"},attrs:{type:"textarea"},model:{value:t.formItem.note,callback:function(e){t.$set(t.formItem,"note",e)},expression:"formItem.note"}})],1)],1)],1),a("adt-my-modal",{attrs:{width:"600",title:t.examineModalTitle,showModal:t.isExamineModalShow},on:{"on-visible-change":t.examineVisibleChange,"on-ok":function(e){return t.examineSave(t.apiEnableExamPass,t.apiEnableExamFail,t.apiDisableExamPass,t.apiDisableExamFail)}}},[a("RadioGroup",{staticStyle:{"margin-bottom":"20px"},model:{value:t.agree,callback:function(e){t.agree=e},expression:"agree"}},[a("Radio",{attrs:{label:"1"}},[t._v("同意"+t._s(1===t.examineType?"启用":"停用"))]),a("Radio",{staticStyle:{"margin-left":"30px"},attrs:{label:"0"}},[t._v("不同意"+t._s(1===t.examineType?"启用":"停用"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"0"===t.agree,expression:"agree === '0'"}]},[a("div",{staticClass:"reason-name",staticStyle:{"margin-bottom":"6px"}},[t._v("填写驳回原因:")]),a("Input",{attrs:{type:"textarea",placeholder:"请输入内容..."},model:{value:t.reason,callback:function(e){t.reason="string"===typeof e?e.trim():e},expression:"reason"}})],1)],1),a("adt-my-modal",{attrs:{showModal:t.isActionDel,title:"系统提示"},on:{"on-visible-change":t.visibleChange,"on-ok":function(e){return t.confirmDel(t.apiDel)}}},[a("div",[a("div",{staticStyle:{"margin-bottom":"6px"}},[t._v("填写删除原因:")]),a("Input",{attrs:{type:"textarea",placeholder:"请输入内容..."},model:{value:t.delInfo.removeRsn,callback:function(e){t.$set(t.delInfo,"removeRsn","string"===typeof e?e.trim():e)},expression:"delInfo.removeRsn"}})],1)])],1)},i=[],r=(a("b0c0"),a("ac1f"),a("841c"),a("5530")),s=a("2e99"),o=a("b962"),c=a("781c"),l=[{title:"选择",align:"center",type:"selection",width:60},{title:"数据项编号",align:"center",key:"name"},{title:"数据项名称",align:"center",key:"label"},{title:"控件类型",align:"center",key:"controlTypeTranslate"},{title:"数据来源",align:"center",key:"sourceTranslate"},{title:"数据来源值",align:"center",key:"sourceValue"},{title:"数据类型",align:"center",key:"dataTypeTranslate"},{title:"创建人",align:"center",key:"createByTranslate"},{title:"创建时间",align:"center",slot:"createDatetime",width:160},{title:"审核状态",align:"center",slot:"examineStatus"},{title:"启用状态",align:"center",slot:"useStatus"},{title:"操作",align:"center",slot:"action",width:160}],u={name:"",label:"",itemType:"",controlType:"",dataType:"",maxLength:"",accuracy:"",source:"",sourceValue:"",note:""},m={name:"ItemManage",mixins:[c["a"]],props:{label:"",examineStatus:"",useStatus:""},data:function(){return{itemType:this.$getDictionary("ITEM_TYPE"),controlType:this.$getDictionary("CONTROL_TYPE"),dataType:this.$getDictionary("DATA_TYPE"),dataSource:this.$getDictionary("DATA_SOURCE"),apiEnable:s["f"],apiDisable:s["c"],startAndStopData:["name","version","useStatus","examineStatus"],apiEnableExamPass:s["h"],apiEnableExamFail:s["g"],apiDisableExamPass:s["e"],apiDisableExamFail:s["d"],apiDel:s["a"],name:"数据项",search:{label:this.label,examineStatus:this.examineStatus,useStatus:this.useStatus},tableData:[],columns:l,formItem:u,formItemRule:{name:[o["a"].required("数据项编号")[0],{pattern:/^[a-z_]*$/,message:"只能输入小写字母和_"}],label:[o["a"].required("数据项名称")[0]],itemType:[o["a"].select("数据项分类")[0]],controlType:[o["a"].select("控件类型")[0]],dataType:[o["a"].select("数据类型")[0]],maxLength:[o["a"].required("数据最大长度")[0],{pattern:/^[0-9]*$/,message:"只能输入数字"}]}}},methods:{getData:function(){var t=this,e=Object(r["a"])({page:this.page},this.search);Object(s["i"])({data:e}).then((function(e){var a=e.data;t.tableData=a.content||[],t.total=a.totalElements}))},edit:function(t){var e=this;this.isAdd=!1,this.editField=t.name;var a={name:t.name};Object(s["j"])(a).then((function(t){var a=t.data;e.formItem=a,e.formItem.maxLength=e.formItem.maxLength+"",e.isModalShow=!0,e.modalTitle="编辑数据项"}))},detail:function(t){this.$router.push("/standard-mapper/item-manage/detail/".concat(t.name))},save:function(){var t=this,e=this;function a(){e.$Message.info("保存成功"),e.$refs.formItemData.resetFields(),e.isModalShow=!1,e.getData()}"I"!==this.formItem.controlType?(this.formItemRule.source=o["a"].select("数据来源"),this.formItemRule.sourceValue=o["a"].select("数据来源值")):(this.formItemRule.source=[],this.formItemRule.sourceValue=[]),"string"!==this.formItem.dataType?this.formItemRule.accuracy=o["a"].required("数据精度"):this.formItemRule.accuracy=[],this.$refs.formItemData.validate((function(e){if(e){var n=Object(r["a"])({},t.formItem);t.isAdd?Object(s["b"])({data:n}).then((function(e){a(),t.getData()})):(n.name=t.editField,Object(s["k"])({data:n}).then((function(t){a()})))}}))}}},d=m,p=a("2877"),f=Object(p["a"])(d,n,i,!1,null,null,null);e["default"]=f.exports},"2e99":function(t,e,a){"use strict";a.d(e,"i",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"k",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"c",(function(){return l})),a.d(e,"h",(function(){return u})),a.d(e,"g",(function(){return m})),a.d(e,"e",(function(){return d})),a.d(e,"d",(function(){return p})),a.d(e,"j",(function(){return f})),a.d(e,"a",(function(){return y}));var n=a("2934"),i=a("4ec3"),r=function(t){return Object(n["c"])("".concat(i["h"],"/template-data/query-page"),t)},s=function(t){return Object(n["c"])("".concat(i["h"],"/template-data/add"),t)},o=function(t){return Object(n["c"])("".concat(i["h"],"/template-data/modify"),t)},c=function(t){return Object(n["c"])("".concat(i["h"],"/template-data/enable"),t)},l=function(t){return Object(n["c"])("".concat(i["h"],"/template-data/disable"),t)},u=function(t){return Object(n["c"])("".concat(i["h"],"/template-data/enable-exam-pass"),t)},m=function(t){return Object(n["c"])("".concat(i["h"],"/template-data/enable-exam-fail"),t)},d=function(t){return Object(n["c"])("".concat(i["h"],"/template-data/disable-exam-pass"),t)},p=function(t){return Object(n["c"])("".concat(i["h"],"/template-data/disable-exam-fail"),t)},f=function(t){return Object(n["a"])("".concat(i["h"],"/template-data/query-detail"),t)},y=function(t){return Object(n["c"])("".concat(i["h"],"/template-data/del"),t)}}}]);