(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d44044a"],{6062:function(t,e,a){"use strict";var s=a("6d61"),n=a("6566");t.exports=s("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},7541:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"g",(function(){return o})),a.d(e,"i",(function(){return r})),a.d(e,"h",(function(){return c})),a.d(e,"e",(function(){return d})),a.d(e,"d",(function(){return l})),a.d(e,"f",(function(){return u})),a.d(e,"c",(function(){return m})),a.d(e,"b",(function(){return h}));var s=a("2934"),n=a("4ec3"),i=function(t){return Object(s["c"])("".concat(n["h"],"/station/add"),t)},o=function(t){return Object(s["a"])("".concat(n["h"],"/station/query-info"),t)},r=function(t){return Object(s["c"])("".concat(n["h"],"/station/update"),t)},c=function(t){return Object(s["c"])("".concat(n["h"],"/station/query-list"),t)},d=function(t){return Object(s["c"])("".concat(n["h"],"/station/enable"),t)},l=function(t){return Object(s["c"])("".concat(n["h"],"/station/disable"),t)},u=function(t){return Object(s["c"])("".concat(n["h"],"/station/examine"),t)},m=function(t){return Object(s["a"])("".concat(n["h"],"/station/query-detail"),t)},h=function(t){return Object(s["c"])("".concat(n["h"],"/station/delete"),t)}},"8c2f":function(t,e,a){"use strict";var s=a("f354"),n=a.n(s);n.a},f354:function(t,e,a){},fdf9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("adt-search-folder",{attrs:{searchRouter:{query:t.search},isStatus:!0}},[a("template",{slot:"status"},[a("div",{staticClass:"status"},[a("Col",{attrs:{span:"10"}},[a("div",{staticClass:"name"},[t._v("审核状态:")]),t._l(t.auditStatus,(function(e){return a("span",{key:e.dictionaryKey,class:{"click-status":t.search.examineStatus===e.dictionaryKey},on:{click:function(a){return t.chooseExamineStatus(e.dictionaryKey)}}},[t._v(" "+t._s(e.dictionaryValue)+" ")])}))],2),a("Col",{attrs:{span:"14"}},[a("div",{staticClass:"name"},[t._v("启用状态:")]),t._l(t.enableStatus,(function(e){return a("span",{key:e.dictionaryKey,class:{"click-status":t.search.useStatus===e.dictionaryKey},on:{click:function(a){return t.chooseUseStatus(e.dictionaryKey)}}},[t._v(" "+t._s(e.dictionaryValue)+" ")])}))],2)],1)]),a("template",{slot:"always-show"},[a("Col",{staticClass:"form-item",attrs:{span:"6"}},[a("span",[t._v("场所编号:")]),a("Input",{attrs:{clearable:""},model:{value:t.search.sttnCode,callback:function(e){t.$set(t.search,"sttnCode",e)},expression:"search.sttnCode"}})],1),a("Col",{staticClass:"form-item",attrs:{span:"6"}},[a("span",[t._v("场所名称:")]),a("Input",{attrs:{clearable:""},model:{value:t.search.sttnName,callback:function(e){t.$set(t.search,"sttnName",e)},expression:"search.sttnName"}})],1),a("Col",{staticClass:"form-item",attrs:{span:"6"}},[a("span",[t._v("国家城市:")]),a("adt-city-selector",{staticStyle:{display:"inline-block",width:"180px",marginRight:"10px"},attrs:{defaultData:t.search.country,changeSelect:!0},on:{"on-change":t.handelDirSearch}})],1)],1)],2),a("div",{staticClass:"btns-paginator"},[a("AdtButton",[a("Button",{on:{click:function(e){return t.add()}}},[t._v(" 新增场所 "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_tianjia"}})])]),a("Button",{on:{click:function(e){return t.startUsing()}}},[t._v(" "+t._s("批量启用"+(t.isManager?"":"申请"))+" "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-shenqing"}})])]),a("Button",{on:{click:function(e){return t.stopUsing()}}},[t._v(" "+t._s("批量停用"+(t.isManager?"":"申请"))+" "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-shenqing"}})])])],1),a("adt-paginator",{attrs:{currentPage:~~t.page,total:~~t.total}})],1),a("div",{staticClass:"public-table-data"},[a("Table",{attrs:{columns:t.tableColumns,data:t.tableData,stripe:""},on:{"on-selection-change":t.selectionChange},scopedSlots:t._u([{key:"examineStatus",fn:function(e){var s=e.row;return[a("span",{class:{success:"pass"===s.examineStatus,error:"fail"===s.examineStatus}},[t._v(" "+t._s(s.examineStatusTranslate)+" ")])]}},{key:"useStatus",fn:function(e){var s=e.row;return[a("span",{class:{success:"enable"===s.useStatus,error:"disable"===s.useStatus}},[t._v(" "+t._s(s.useStatusTranslate)+" ")])]}},{key:"action",fn:function(e){var s=e.row;return[s.useStatus&&"disable"!==s.useStatus||"wait"===s.examineStatus?t._e():a("span",{staticClass:"icon-action icon-action-word",attrs:{title:"启用"},on:{click:function(e){return t.startUsing(s)}}},[t._v("启")]),s.useStatus&&"enable"===s.useStatus&&"wait"!==s.examineStatus?a("span",{staticClass:"icon-action icon-action-word",attrs:{title:"停用"},on:{click:function(e){return t.stopUsing(s)}}},[t._v("停")]):t._e(),a("span",{attrs:{title:"审核"}},[t.isManager&&"wait"===s.examineStatus?a("svg",{staticClass:"icon-action iconfont",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.examine(s)}}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_shenhe"}})]):t._e()]),"enable"!==s.useStatus?a("span",{attrs:{title:"编辑"}},[a("svg",{staticClass:"icon-action iconfont",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.edit(s)}}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_caozuo-bianji"}})])]):t._e(),t.isManager&&"enable"!==s.useStatus?a("span",{attrs:{title:"删除"}},[a("svg",{staticClass:"icon-action iconfont",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.remove(s)}}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_caozuo-shanchu"}})])]):t._e(),a("span",{attrs:{title:"详情"}},[a("svg",{staticClass:"icon-action iconfont",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.detail(s)}}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_caozuo-xiangqing"}})])])]}}])})],1),a("AdtMyModal",{attrs:{title:"编辑场所",showModal:t.isEditModalShow,okText:"保存",cancelText:"取消",width:"850"},on:{"on-visible-change":t.editvisibleChange,"on-ok":function(e){return t.saveEdit()},"on-cancel":function(e){return t.cancelEdit()}}},[a("div",[a("Form",{ref:"editFormRef",staticClass:"fromItem",attrs:{"label-colon":"",model:t.editFormItem,rules:t.editFormRule,"label-width":100}},[a("div",{staticClass:"edit-field"},[a("span",{staticClass:"name",staticStyle:{width:"100px"}},[t._v("场所编号：")]),t._v(t._s(t.siteEditCode)+" ")]),a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"场所全称",prop:"sttnName"}},[a("Input",{staticClass:"fromItem-content",attrs:{maxlength:"10"},model:{value:t.editFormItem.sttnName,callback:function(e){t.$set(t.editFormItem,"sttnName",e)},expression:"editFormItem.sttnName"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"场所简称",prop:"sttnAbbr"}},[a("Input",{staticClass:"fromItem-content",attrs:{maxlength:"10"},model:{value:t.editFormItem.sttnAbbr,callback:function(e){t.$set(t.editFormItem,"sttnAbbr",e)},expression:"editFormItem.sttnAbbr"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"场所类型"}},[a("Select",{attrs:{clearable:""},model:{value:t.editFormItem.sttnType,callback:function(e){t.$set(t.editFormItem,"sttnType",e)},expression:"editFormItem.sttnType"}},t._l(t.sttnType,(function(e){return a("Option",{key:e.dictionaryKey,attrs:{value:e.dictionaryKey}},[t._v(" "+t._s(e.dictionaryValue)+" ")])})),1)],1)],1)],1),a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"国家城市",prop:"country"}},[a("adt-city-selector",{staticStyle:{display:"inline-block",width:"162px",marginRight:"10px"},attrs:{defaultData:t.editFormItem.country},on:{"on-change":t.handelEditCountry}})],1)],1),a("Col",{attrs:{span:"16"}},[a("FormItem",{attrs:{label:"场所地址",prop:"sttnAddr"}},[a("Input",{staticClass:"fromItem-content",model:{value:t.editFormItem.sttnAddr,callback:function(e){t.$set(t.editFormItem,"sttnAddr",e)},expression:"editFormItem.sttnAddr"}})],1)],1)],1),a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"运输方式"}},[a("small",[t._v("*")]),a("Select",{class:{"trsp-hint":!0===t.editTrspHintShow},staticStyle:{lineHeight:"1.5"},on:{"on-change":t.onEditTrspChange},model:{value:t.editFormItem.trspMode,callback:function(e){t.$set(t.editFormItem,"trspMode",e)},expression:"editFormItem.trspMode"}},t._l(t.trspMode,(function(e){return a("Option",{key:e.dictionaryKey,attrs:{value:e.dictionaryKey+"-"+e.dictionaryValue}},[t._v(" "+t._s(e.dictionaryValue)+" ")])})),1),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editTrspHintShow,expression:"editTrspHintShow"}],staticClass:"hint"},[t._v("请输入运输方式")])],1)],1),a("p",{staticClass:"select-value"},t._l(t.editTrspModeData,(function(e,s){return a("span",{key:s},[t._v(" "+t._s(e)+" "),a("Icon",{attrs:{type:"ios-close-circle"},on:{click:function(e){return t.delEditTrspMode(s)}}})],1)})),0)],1),a("Divider",{attrs:{dashed:""}}),a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"监管场所编码"}},[a("Input",{staticClass:"fromItem-content",model:{value:t.editFormItem.supvSttn,callback:function(e){t.$set(t.editFormItem,"supvSttn",e)},expression:"editFormItem.supvSttn"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"企业名称"}},[a("Input",{staticClass:"fromItem-content",model:{value:t.editFormItem.etpsName,callback:function(e){t.$set(t.editFormItem,"etpsName",e)},expression:"editFormItem.etpsName"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"企业代码"}},[a("Input",{staticClass:"fromItem-content",model:{value:t.editFormItem.etpsCode,callback:function(e){t.$set(t.editFormItem,"etpsCode",e)},expression:"editFormItem.etpsCode"}})],1)],1)],1),a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"海关关区"}},[t.editCNShow?a("Select",{attrs:{clearable:""},model:{value:t.editFormItem.customsCode,callback:function(e){t.$set(t.editFormItem,"customsCode",e)},expression:"editFormItem.customsCode"}},t._l(t.customsCode,(function(e){return a("Option",{key:e.dictCode,attrs:{value:e.dictCode}},[t._v(" "+t._s(e.dictName)+" ")])})),1):a("Input",{staticClass:"fromItem-content",model:{value:t.editFormItem.customsCode,callback:function(e){t.$set(t.editFormItem,"customsCode",e)},expression:"editFormItem.customsCode"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"业务负责人"}},[a("Input",{staticClass:"fromItem-content",model:{value:t.editFormItem.rspder,callback:function(e){t.$set(t.editFormItem,"rspder",e)},expression:"editFormItem.rspder"}})],1)],1)],1),a("Divider",{attrs:{dashed:""}}),a("FormItem",{attrs:{label:"备注信息"}},[a("Input",{staticClass:"fromItem-content",attrs:{type:"textarea"},model:{value:t.editFormItem.remark,callback:function(e){t.$set(t.editFormItem,"remark",e)},expression:"editFormItem.remark"}})],1)],1)],1)]),a("AdtMyModal",{attrs:{title:"创建新场所",showModal:t.isModalShow,okText:"保存",cancelText:"取消",width:"850"},on:{"on-visible-change":t.addvisibleChange,"on-ok":function(e){return t.saveAdd()},"on-cancel":function(e){return t.cancelAdd()}}},[a("div",[a("Form",{ref:"addFormRef",staticClass:"fromItem",attrs:{"label-colon":"",model:t.addFormItem,rules:t.addFormRule,"label-width":100}},[a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"场所全称",prop:"sttnName"}},[a("Input",{staticClass:"fromItem-content",attrs:{maxlength:"10"},model:{value:t.addFormItem.sttnName,callback:function(e){t.$set(t.addFormItem,"sttnName",e)},expression:"addFormItem.sttnName"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"场所简称",prop:"sttnAbbr"}},[a("Input",{staticClass:"fromItem-content",attrs:{maxlength:"10"},model:{value:t.addFormItem.sttnAbbr,callback:function(e){t.$set(t.addFormItem,"sttnAbbr",e)},expression:"addFormItem.sttnAbbr"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"场所类型"}},[a("Select",{attrs:{clearable:""},model:{value:t.addFormItem.sttnType,callback:function(e){t.$set(t.addFormItem,"sttnType",e)},expression:"addFormItem.sttnType"}},t._l(t.sttnType,(function(e){return a("Option",{key:e.dictionaryKey,attrs:{value:e.dictionaryKey}},[t._v(" "+t._s(e.dictionaryValue)+" ")])})),1)],1)],1)],1),a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"国家城市",prop:"country"}},[a("adt-city-selector",{staticStyle:{display:"inline-block",width:"162px",marginRight:"10px"},attrs:{defaultData:t.addFormItem.country},on:{"on-change":t.handelDirStart}})],1)],1),a("Col",{attrs:{span:"16"}},[a("FormItem",{attrs:{label:"场所地址",prop:"sttnAddr"}},[a("Input",{staticClass:"fromItem-content",model:{value:t.addFormItem.sttnAddr,callback:function(e){t.$set(t.addFormItem,"sttnAddr",e)},expression:"addFormItem.sttnAddr"}})],1)],1)],1),a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"运输方式"}},[a("small",[t._v("*")]),a("Select",{class:{"trsp-hint":!0===t.trspHintShow},staticStyle:{lineHeight:"1.5"},on:{"on-change":t.onTrspChange},model:{value:t.addFormItem.trspMode,callback:function(e){t.$set(t.addFormItem,"trspMode",e)},expression:"addFormItem.trspMode"}},t._l(t.trspMode,(function(e){return a("Option",{key:e.dictionaryKey,attrs:{value:e.dictionaryKey+"-"+e.dictionaryValue}},[t._v(" "+t._s(e.dictionaryValue)+" ")])})),1),a("span",{directives:[{name:"show",rawName:"v-show",value:t.trspHintShow,expression:"trspHintShow"}],staticClass:"hint"},[t._v("请输入运输方式")])],1)],1),a("p",{staticClass:"select-value"},t._l(t.trspModeData,(function(e,s){return a("span",{key:s},[t._v(t._s(e)),a("Icon",{attrs:{type:"ios-close-circle"},on:{click:function(e){return t.delTrspMode(s)}}})],1)})),0)],1),a("Divider",{attrs:{dashed:""}}),a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"监管场所编码"}},[a("Input",{staticClass:"fromItem-content",model:{value:t.addFormItem.supvSttn,callback:function(e){t.$set(t.addFormItem,"supvSttn",e)},expression:"addFormItem.supvSttn"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"企业名称"}},[a("Input",{staticClass:"fromItem-content",model:{value:t.addFormItem.etpsName,callback:function(e){t.$set(t.addFormItem,"etpsName",e)},expression:"addFormItem.etpsName"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"企业代码"}},[a("Input",{staticClass:"fromItem-content",model:{value:t.addFormItem.etpsCode,callback:function(e){t.$set(t.addFormItem,"etpsCode",e)},expression:"addFormItem.etpsCode"}})],1)],1)],1),a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"海关关区"}},[t.CNShow?a("Select",{attrs:{clearable:""},model:{value:t.addFormItem.customsCode,callback:function(e){t.$set(t.addFormItem,"customsCode",e)},expression:"addFormItem.customsCode"}},t._l(t.customsCode,(function(e){return a("Option",{key:e.dictCode,attrs:{value:e.dictCode}},[t._v(" "+t._s(e.dictName)+" ")])})),1):a("Input",{staticClass:"fromItem-content",model:{value:t.addFormItem.customsCode,callback:function(e){t.$set(t.addFormItem,"customsCode",e)},expression:"addFormItem.customsCode"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"业务负责人"}},[a("Input",{staticClass:"fromItem-content",model:{value:t.addFormItem.rspder,callback:function(e){t.$set(t.addFormItem,"rspder",e)},expression:"addFormItem.rspder"}})],1)],1)],1),a("Divider",{attrs:{dashed:""}}),a("FormItem",{attrs:{label:"备注信息"}},[a("Input",{staticClass:"fromItem-content",attrs:{type:"textarea"},model:{value:t.addFormItem.remark,callback:function(e){t.$set(t.addFormItem,"remark",e)},expression:"addFormItem.remark"}})],1)],1)],1)]),a("adt-my-modal",{attrs:{title:t.examineModalTitle,showModal:t.isAuditShow,width:"600"},on:{"on-visible-change":t.auditvisibleChange,"on-ok":function(e){return t.saveAudit()}}},[a("RadioGroup",{staticStyle:{"margin-bottom":"20px"},model:{value:t.agree,callback:function(e){t.agree=e},expression:"agree"}},[a("Radio",{attrs:{label:"1"}},[t._v("同意"+t._s(1===t.examineType?"启用":"停用"))]),a("Radio",{staticStyle:{"margin-left":"30px"},attrs:{label:"0"}},[t._v("不同意"+t._s(1===t.examineType?"启用":"停用"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"0"===t.agree,expression:"agree === '0'"}]},[a("div",{staticClass:"reason-name",staticStyle:{"margin-bottom":"6px"}},[t._v("填写驳回原因:")]),a("Input",{attrs:{type:"textarea",placeholder:"请输入内容..."},model:{value:t.reason,callback:function(e){t.reason="string"===typeof e?e.trim():e},expression:"reason"}})],1)],1),a("adt-reconfirm-modal",{attrs:{showModal:t.editModalShow,message:t.editMsg},on:{"on-visible-change":t.visibleChangeEdit,"on-ok":function(e){return t.editModalClick()}}}),a("adt-my-modal",{attrs:{showModal:t.isActionDel,title:"系统提示"},on:{"on-visible-change":t.visibleChange,"on-ok":function(e){return t.confirmDel()}}},[a("div",[a("div",{staticStyle:{"margin-bottom":"6px"}},[t._v("填写删除原因:")]),a("Input",{attrs:{type:"textarea",placeholder:"请输入内容..."},model:{value:t.delInfo.reason,callback:function(e){t.$set(t.delInfo,"reason","string"===typeof e?e.trim():e)},expression:"delInfo.reason"}})],1)])],1)},n=[],i=(a("99af"),a("4160"),a("a15b"),a("a434"),a("d3b7"),a("ac1f"),a("6062"),a("3ca3"),a("841c"),a("1276"),a("159b"),a("ddb0"),a("b85c")),o=a("5530"),r=a("2909"),c=a("7541"),d=a("77ab"),l=[{title:"选择",align:"center",type:"selection",width:80},{title:"场所编号",align:"center",key:"sttnCode"},{title:"场所名称",align:"center",key:"sttnName"},{title:"场所简称",align:"center",key:"sttnAbbr"},{title:"国家",align:"center",key:"countryTranslate"},{title:"省份",align:"center",key:"provinceTranslate"},{title:"城市",align:"center",key:"cityTranslate"},{title:"创建人",align:"center",key:"createByTranslate"},{title:"创建时间",align:"center",key:"createDatetime"},{title:"审核状态",align:"center",slot:"examineStatus"},{title:"审核时间",align:"center",key:"examineDatetime"},{title:"启用状态",align:"center",slot:"useStatus"},{title:"操作",align:"center",key:"operating",slot:"action",width:180}],u=a("b962"),m=a("781c"),h=a("90fe"),p={mixins:[m["a"]],props:{sttnCode:"",sttnName:"",country:"",city:"",examineStatus:"",useStatus:"",countrys:"",province:""},data:function(){return{trspMode:this.$getDictionary("TRANSPORT_MODE")||[],sttnType:this.$getDictionary("YARD_TYPE")||[],siteEditCode:"",customsCode:[],trspModeData:[],trspModeCode:[],editTrspModeData:[],editTrspModeCode:[],trspHintShow:!1,editTrspHintShow:!1,search:{sttnCode:this.sttnCode||"",sttnName:this.sttnName||"",country:this.country||"",countrys:this.countrys||"",province:this.province||"",city:this.city||"",examineStatus:this.examineStatus||"",useStatus:this.useStatus||""},addFormItem:{country:""},editFormItem:{country:""},addFormRule:{sttnName:[u["a"].required("场所全称")[0]],sttnAbbr:[u["a"].required("场所简称")[0]],sttnType:[u["a"].select("场所类型")[0]],sttnAddr:[u["a"].select("场所地址")[0]],country:[{required:!0,message:"请选择国家城市",trigger:"change"}]},editFormRule:{sttnName:[u["a"].required("场所全称")[0]],sttnAbbr:[u["a"].required("场所简称")[0]],sttnType:[u["a"].select("场所类型")[0]],sttnAddr:[u["a"].select("场所地址")[0]],country:[{required:!0,message:"请选择国家城市",trigger:"change"}]},CNShow:!0,editCNShow:!0,distinguish:0,isModalShow:!1,isEditModalShow:!1,editModalShow:!1,editMsg:"",tableColumns:l,tableData:[],examineType:1,isAuditShow:!1,examineModalTitle:"启用审核",stopData:{}}},created:function(){this.search.country&&(this.search.country="".concat(this.search.country,"~").concat(this.search.province,"~").concat(this.search.city))},mounted:function(){var t=this;Object(d["A"])({data:"CUSTOMS"}).then((function(e){t.customsCode=e.data}))},methods:{remove:function(t){this.isActionDel=!0,this.delInfo.code=t.sttnCode,this.delInfo.reason="",this.delInfo.useStatus=t.useStatus},confirmDel:function(){var t=this,e=[];e.push(this.delInfo),Object(c["b"])({data:e}).then((function(e){t.$Message.info(e.message),t.isActionDel=!1,t.getData()}))},handelDirSearch:function(t){t.value.length>2?(this.search.province=t.value[1]||"",this.search.city=t.value[2]||""):(this.search.city=t.value[1]||"",this.search.province=""),this.search.country="".concat(t.value[0],"~").concat(t.value[1],"~").concat(t.value[2])||"",this.search.countrys=t.value[0]},handelDirStart:function(t){"CN"===t.value[0]?this.CNShow=!0:this.CNShow=!1,this.$set(this.addFormItem,"country",t.data.length?t.value.join("~"):"")},handelEditCountry:function(t){"CN"===t.value[0]?this.editCNShow=!0:this.editCNShow=!1,this.editFormItem.country=t.data.length?t.value.join("~"):""},auditvisibleChange:function(t){this.isAuditShow=t},addvisibleChange:function(t){this.isModalShow=t},editvisibleChange:function(t){this.isEditModalShow=t},visibleChangeEdit:function(t){this.editModalShow=t},onTrspChange:function(t){if(t){var e=t.split("-")[0],a=t.split("-")[1];this.trspModeData.push(a),this.trspModeCode.push(e)}this.trspModeData=Object(r["a"])(new Set(this.trspModeData)),this.trspModeCode=Object(r["a"])(new Set(this.trspModeCode)),0===this.trspModeData.length?this.trspHintShow=!0:this.trspHintShow=!1},onEditTrspChange:function(t){if(t){var e=t.split("-")[0],a=t.split("-")[1];this.editTrspModeData.push(a),this.editTrspModeCode.push(e)}this.editTrspModeData=Object(r["a"])(new Set(this.editTrspModeData)),this.editTrspModeCode=Object(r["a"])(new Set(this.editTrspModeCode)),0===this.editTrspModeData.length?this.editTrspHintShow=!0:this.editTrspHintShow=!1},delTrspMode:function(t){this.trspModeData.splice(t,1),this.trspModeData.splice(t,1),0===this.trspModeData.length&&(this.trspHintShow=!0)},delEditTrspMode:function(t){this.editTrspModeData.splice(t,1),this.editTrspModeCode.splice(t,1),0===this.editTrspModeData.length&&(this.editTrspHintShow=!0)},getData:function(){var t=this,e=JSON.parse(JSON.stringify(this.search));e.country=e.country.split("~")[0],this.search.countrys=e.country,e.countrys=this.search.countrys;var a=Object(o["a"])({page:this.page,size:15},e);Object(c["h"])({data:a}).then((function(e){t.tableData=e.data.content||[],t.total=e.data.totalElements,t.tableData.forEach((function(t){t.createDatetime=Object(h["a"])(t.createDatetime),t.examineDatetime=Object(h["a"])(t.examineDatetime),t.provinceTranslate="null"!==t.provinceTranslate?t.provinceTranslate:""}))}))},saveAdd:function(){var t=this;this.$refs.addFormRef.validate((function(e){if(0!==t.trspModeData.length){if(t.trspHintShow=!1,e&&!t.trspHintShow){var a=JSON.parse(JSON.stringify(t.addFormItem));a.country.split("~")[2]?(t.$set(a,"province",a.country.split("~")[1]),t.$set(a,"city",a.country.split("~")[2])):(t.$set(a,"city",a.country.split("~")[1]),t.$set(a,"province","")),a.country=a.country.split("~")[0];var s=t.trspModeCode.join(";");a.trspMode=s,Object(c["a"])({data:a}).then((function(e){t.$Message.info(e.message),t.$refs.addFormRef.resetFields(),t.addFormItem={},t.trspModeData=[],t.isModalShow=!1,t.getData()}))}}else t.trspHintShow=!0}))},saveEdit:function(){var t=this;this.$refs.editFormRef.validate((function(e){if(0!==t.editTrspModeData.length){if(t.editTrspHintShow=!1,e&&!t.editTrspHintShow){t.$set(t.editFormItem,"province",t.editFormItem.country.split("~")[1]),t.$set(t.editFormItem,"city",t.editFormItem.country.split("~")[2]);var a=JSON.parse(JSON.stringify(t.editFormItem)),s=t.editTrspModeCode.join(";");a.country=t.editFormItem.country.split("~")[0],a.trspMode=s,Object(c["i"])({data:a}).then((function(e){t.$Message.info(e.message),t.isEditModalShow=!1,t.getData()}))}}else t.editTrspHintShow=!0}))},cancelAdd:function(){this.addFormItem={},this.trspModeData=[],void 0!==this.$refs.addFormRef&&this.$refs.addFormRef.resetFields()},cancelEdit:function(){void 0!==this.$refs.editFormRef&&this.$refs.editFormRef.resetFields()},add:function(){this.isModalShow=!0,this.distinguish=1,this.trspHintShow=!1,this.addFormItem={},this.trspModeData=[]},edit:function(t){var e=this;if("enable"===t.useStatus)this.editModalShow=!0,this.editMsg="请停用".concat(t.sttnName,"场所再进行编辑"),this.stopData.useStatus=t.useStatus,this.stopData.sttnCode=t.sttnCode,this.stopData.examineDatetime=t.examineDatetime;else{this.isEditModalShow=!0,this.distinguish=2,"CN"===t.country?this.editCNShow=!0:this.editCNShow=!1;var a={sttnCode:t.sttnCode};Object(c["g"])(a).then((function(t){var a=t.data;a=JSON.parse(JSON.stringify(a)),a.country="".concat(a.country,"~").concat(a.province,"~").concat(a.city),e.editTrspModeData=a.trspModeTranslate.split(";"),e.editTrspModeCode=a.trspMode.split(";"),e.editTrspModeData=Object(r["a"])(new Set(e.editTrspModeData)),e.editTrspModeCode=Object(r["a"])(new Set(e.editTrspModeCode)),e.editFormItem=a,e.siteEditCode=t.data.sttnCode}))}},startUsing:function(t){var e=this,a=this.handleRequestData(t);a.length&&Object(c["e"])({data:a}).then((function(t){e.$Message.info(t.message),e.getData()}))},stopUsing:function(t){var e=this,a=this.handleRequestData(t);a.length&&Object(c["d"])({data:a}).then((function(t){e.$Message.info(t.message),e.getData()}))},handleRequestData:function(t){var e=[];if(t)return e.push(o(t)),e;if(this.selectionList.length){var a,s=Object(i["a"])(this.selectionList);try{for(s.s();!(a=s.n()).done;){var n=a.value;e.push(o(n))}}catch(r){s.e(r)}finally{s.f()}}else this.$Message.warning("请先选择场所");return e;function o(t){var e=t.examineStatus,a=t.useStatus,s=t.sttnCode,n=t.examineDatetime;return{examineStatus:e,useStatus:a,sttnCode:s,examineDatetime:Object(h["f"])(n)}}},examine:function(t){this.reason="",t.useStatus&&"disable"!==t.useStatus?(this.examineType=0,this.examineModalTitle="停用审核"):(this.examineType=1,this.examineModalTitle="启用审核"),this.examineInfo.examineStatus=t.examineStatus,this.examineInfo.disagreeReason="",this.examineInfo.opinion="",this.examineInfo.sttnCode=t.sttnCode,this.examineInfo.useStatus=t.useStatus,this.isAuditShow=!0},saveAudit:function(){var t=this,e=Object(o["a"])({},this.examineInfo);if(1===this.examineType)if("1"===this.agree)e.opinion="AO",Object(c["f"])({data:e}).then((function(e){t.$Message.info(e.message),t.isAuditShow=!1,t.getData()}));else{if(!this.reason)return void this.$Message.warning("请填写输入驳回原因！");e.opinion="DO",e.disagreeReason=this.reason,Object(c["f"])({data:e}).then((function(e){t.$Message.info(e.message),t.isAuditShow=!1,t.getData()}))}else if("1"===this.agree)e.opinion="AC",Object(c["f"])({data:e}).then((function(e){t.$Message.info(e.message),t.isAuditShow=!1,t.getData()}));else{if(!this.reason)return void this.$Message.warning("请填写输入驳回原因！");e.opinion="DC",e.disagreeReason=this.reason,Object(c["f"])({data:e}).then((function(e){t.$Message.info(e.message),t.isAuditShow=!1,t.getData()}))}},detail:function(t){var e=t.sttnCode;this.$router.push({path:"/standard-mapper/site-manage/detail",query:{sttnCode:e}})},editModalClick:function(){this.stopUsing(this.stopData),this.editModalShow=!1}}},f=p,v=(a("8c2f"),a("2877")),I=Object(v["a"])(f,s,n,!1,null,"ec4c2102",null);e["default"]=I.exports}}]);