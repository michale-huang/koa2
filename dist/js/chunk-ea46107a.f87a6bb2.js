(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea46107a"],{4148:function(t,e,a){"use strict";var n=a("914b"),o=a.n(n);o.a},"7b46":function(t,e,a){"use strict";e["a"]={props:{page:{default:1}},data:function(){return{total:0,perpage:15}},mounted:function(){this.dataInit()},watch:{$route:function(){this.dataInit()}},methods:{paginatorInit:function(t,e){this.perpage=t,this.total=e}}}},"914b":function(t,e,a){},bd44:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-manage"},[a("adt-search-folder",{staticClass:"query-tit",attrs:{searchRouter:{query:{name:t.searchData.name}}}},[a("template",{slot:"always-show"},[a("Form",{ref:"templateForm",attrs:{model:t.searchData,"label-width":90}},[a("FormItem",{attrs:{label:"数据项名称：",prop:"name"}},[a("Input",{attrs:{type:"text",clearable:""},model:{value:t.searchData.name,callback:function(e){t.$set(t.searchData,"name",e)},expression:"searchData.name"}})],1)],1)],1)],2),a("div",{staticClass:"content"},[a("div",{staticClass:"btns-paginator"},[a("adt-button",[a("Button",{on:{click:t.addItemData}},[t._v("新增数据项"),a("Icon",{attrs:{type:"ios-add-circle-outline"}})],1)],1),a("adt-paginator",{attrs:{currentPage:~~t.page,total:~~t.total,path:"/template-manage/item-manage"}})],1),[a("Table",{attrs:{columns:t.columns,data:t.templateList,stripe:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.row;e.index;return[a("Icon",{attrs:{type:"md-create"},on:{click:function(e){return t.modifyShow(n)}}}),a("Icon",{attrs:{type:"ios-close"},on:{click:function(e){return t.deleteShow(n)}}})]}}])})]],2),a("AdtMyModal",{attrs:{title:t.modalTitle,okText:"保存",cancelText:"取消",showModal:t.isModalShow,width:"800"},on:{"on-visible-change":t.addvisibleChange,"on-ok":function(e){return t.save()},"on-cancel":function(e){return t.cancel()}}},[a("Form",{ref:"formItemData",staticClass:"form-model",attrs:{model:t.formItem,rules:t.formItemRule,"label-width":120,"label-colon":"",inline:""}},[a("FormItem",{attrs:{label:"数据项编号",prop:"name"}},[a("Input",{staticClass:"input-width",attrs:{disabled:"2"==t.distinguish},model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name",e)},expression:"formItem.name"}})],1),a("FormItem",{attrs:{label:"数据项名称",prop:"nameAndLang"}},[a("Input",{staticClass:"input-width",model:{value:t.formItem.nameAndLang,callback:function(e){t.$set(t.formItem,"nameAndLang",e)},expression:"formItem.nameAndLang"}})],1),a("FormItem",{attrs:{label:"控件类型",prop:"controlType"}},[a("Select",{staticClass:"input-width",model:{value:t.formItem.controlType,callback:function(e){t.$set(t.formItem,"controlType",e)},expression:"formItem.controlType"}},t._l(t.controlType,(function(e,n){return a("Option",{key:n,attrs:{value:e.dictionaryKey}},[t._v(t._s(e.dictionaryValue))])})),1)],1),a("FormItem",{attrs:{label:"控件值来源",prop:"source"}},[a("RadioGroup",{model:{value:t.formItem.source,callback:function(e){t.$set(t.formItem,"source",e)},expression:"formItem.source"}},[a("Radio",{attrs:{label:"1"}},[t._v("字典")]),a("Radio",{attrs:{label:"2"}},[t._v("接口")])],1)],1),a("FormItem",{attrs:{label:"控件值来源地址",prop:"sourceValue"}},[a("Input",{staticClass:"input-width",model:{value:t.formItem.sourceValue,callback:function(e){t.$set(t.formItem,"sourceValue",e)},expression:"formItem.sourceValue"}})],1),a("FormItem",{attrs:{label:"数据类型",prop:"dataType"}},[a("Select",{staticClass:"input-width",model:{value:t.formItem.dataType,callback:function(e){t.$set(t.formItem,"dataType",e)},expression:"formItem.dataType"}},t._l(t.dataTypeArr,(function(e,n){return a("Option",{key:n,attrs:{value:e.dictionaryKey}},[t._v(t._s(e.dictionaryValue))])})),1)],1),a("FormItem",{attrs:{label:"数据精度",prop:"accuracy"}},[a("Input",{staticClass:"input-width",model:{value:t.formItem.accuracy,callback:function(e){t.$set(t.formItem,"accuracy",e)},expression:"formItem.accuracy"}})],1),a("FormItem",{attrs:{label:"数据最大长度",prop:"maxLength"}},[a("Input",{staticClass:"input-width",model:{value:t.formItem.maxLength,callback:function(e){t.$set(t.formItem,"maxLength",e)},expression:"formItem.maxLength"}})],1),a("FormItem",{attrs:{label:"备注规则",prop:"note"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.formItem.note,callback:function(e){t.$set(t.formItem,"note",e)},expression:"formItem.note"}})],1)],1)],1),a("adt-reconfirm-modal",{attrs:{showModal:t.isActionDel},on:{"on-visible-change":t.visibleChange,"on-ok":function(e){return t.allDelClick()}}})],1)},o=[],i=(a("fe59"),a("053b"),a("e18c"),a("1c2e"),a("08ba"),a("c621")),c=a("e56e"),r=a("7b46"),s=a("b962"),l={mixins:[r["a"]],name:"ItemManage",data:function(){return{searchData:{name:""},modalTitle:"",columns:[{title:"数据项编号",key:"name",align:"center"},{title:"语言编码",key:"il8nLangCode",align:"center"},{title:"数据项目展示名称",key:"label",align:"center"},{title:"控件类型",key:"controlType",align:"center"},{title:"控件值来源",key:"source",align:"center"},{title:"控件值来源链接",key:"sourceValue",align:"center"},{title:"数据类型",key:"dataType",align:"center"},{title:"数据精度",key:"accuracy",align:"center"},{title:"数据最大长度",key:"maxLength",align:"center"},{title:"备注信息",key:"note",align:"center"},{title:"创建时间",key:"createDatetime",align:"center"},{title:"创建人",key:"createBy",align:"center"},{title:"操作",slot:"action",align:"center",width:100}],templateList:[],isModalShow:!1,isActionDel:!1,formItem:{nameAndLang:""},formItemRule:{name:[{required:!0,message:"请输入数据项编号",trigger:"blur"},{pattern:/^[0-9a-zA-Z]*$/,message:"只能输入数字和字母"}],nameAndLang:[{required:!0,message:"请输入数据项名称",trigger:"blur"},{pattern:/^[\u4E00-\u9FA5]+$/,message:"只能输入中文"}],controlType:[s["a"].required("控件类型")[0]],source:[s["a"].select("控件值来源")[0]],dataType:[s["a"].select("数据类型")[0]],maxLength:[{required:!0,message:"请输入数据最大长度",trigger:"blur"},{pattern:/^[0-9]*$/,message:"只能输入数字"}]},controlType:[],dataTypeArr:[],distinguish:0,languageType:[],languageArray:[],selectLanguage:[],passData:{}}},mounted:function(){this.initdict()},methods:{test:function(t){var e=t||[],a=[];e.forEach((function(t){a.push({label:t.label,il8nLangCode:t.value})})),this.selectLanguage=a},addvisibleChange:function(t){this.isModalShow=t},visibleChange:function(t){this.isActionDel=t},dataInit:function(){this.getData()},getData:function(){var t=this,e={page:this.page,direction:"asc",properties:"",name:this.searchData.name};Object(i["e"])({data:e}).then((function(e){t.templateList=e.data.content||[],t.templateList.forEach((function(t){"text"===t.controlType?t.controlType="文本框":t.controlType="下拉框","string"===t.dataType?t.dataType="字符串":t.dataType="数字"})),t.total=e.data.totalElements}))},addItemData:function(){this.isModalShow=!0,this.modalTitle="新增数据项",this.distinguish=1},modifyShow:function(t){var e=this;this.distinguish=2;var a={name:t.name};Object(i["j"])(a).then((function(t){e.formItem=t.data,e.formItem.maxLength=e.formItem.maxLength.toString(),e.formItem.nameAndLang=t.data.labelAndLanguage[0].label,e.formItem.rules=t.data.rules||[],e.isModalShow=!0,e.modalTitle="编辑数据项",console.log(e.formItem)}))},deleteShow:function(t){this.isActionDel=!0,this.passData={name:t.name}},allDelClick:function(){var t=this;console.log(this.passData),Object(i["d"])(this.passData).then((function(e){200==e.code?(t.$Message.info("删除成功"),t.isActionDel=!1,t.getData()):t.$Message.info("删除失败")}))},save:function(){var t=this,e={name:this.formItem.name,labelAndLanguage:[{il8nLangCode:"zh-cn",label:this.formItem.nameAndLang}],controlType:this.formItem.controlType,sourceValue:this.formItem.sourceValue,source:this.formItem.source,dataType:this.formItem.dataType,accuracy:this.formItem.accuracy,maxLength:this.formItem.maxLength,note:this.formItem.note};1==this.distinguish&&this.$refs["formItemData"].validate((function(a){a&&Object(i["c"])({data:e}).then((function(e){200==e.code?(t.$Message.info("保存成功"),t.$refs.formItemData.resetFields(),t.isModalShow=!1,t.getData()):t.$Message.info("保存失败")}))})),2==this.distinguish&&(console.log(this.formItem),this.$refs["formItemData"].validate((function(a){a&&Object(i["f"])({data:e}).then((function(e){200==e.code?(t.$Message.info("保存成功"),t.$refs.formItemData.resetFields(),t.isModalShow=!1,t.getData()):t.$Message.info("保存失败")}))})))},cancel:function(){this.$refs.formItemData.resetFields(),this.isModalShow=!1},initdict:function(){var t=this,e={dictionaryTypeKey:"WEB_CONTROL"};Object(c["c"])(e).then((function(e){t.controlType=e.data}));var a={dictionaryTypeKey:"DATA_TYPE"};Object(c["c"])(a).then((function(e){t.dataTypeArr=e.data}))}}},u=l,m=(a("4148"),a("4023")),d=Object(m["a"])(u,n,o,!1,null,"f11874c0",null);e["default"]=d.exports},c621:function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return r})),a.d(e,"i",(function(){return s})),a.d(e,"h",(function(){return l})),a.d(e,"e",(function(){return u})),a.d(e,"c",(function(){return m})),a.d(e,"d",(function(){return d})),a.d(e,"j",(function(){return f})),a.d(e,"f",(function(){return p}));var n=a("2934"),o=a("4ec3"),i=function(t){return Object(n["b"])("".concat(o["c"],"/templateBasicClassification/templateBasicClassificationQuery"),t)},c=function(t){return Object(n["a"])("".concat(o["c"],"/templateBasicClassification/templateBasicClassificationQuery"),t)},r=function(t){return Object(n["b"])("".concat(o["c"],"/templateBasicClassification/templateBasicClassifitionUpdate"),t)},s=function(t){return Object(n["a"])("".concat(o["c"],"/templateBasicClassification/templateBasicDel"),t)},l=function(t){return Object(n["b"])("".concat(o["c"],"/templateBasicClassification/templateRelDataQuery"),t)},u=function(t){return Object(n["b"])("".concat(o["c"],"/templateData/templateDataQuery"),t)},m=function(t){return Object(n["b"])("".concat(o["c"],"/templateData/templateDataAdd"),t)},d=function(t){return Object(n["a"])("".concat(o["c"],"/templateData/templateDataDel"),t)},f=function(t){return Object(n["a"])("".concat(o["c"],"/templateData/templateDataQuery"),t)},p=function(t){return Object(n["b"])("".concat(o["c"],"/templateData/templateDataUpdate"),t)}},e56e:function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"e",(function(){return c})),a.d(e,"f",(function(){return r})),a.d(e,"h",(function(){return s})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return u})),a.d(e,"d",(function(){return m})),a.d(e,"i",(function(){return d})),a.d(e,"c",(function(){return f}));var n=a("2934"),o=a("4ec3"),i=function(t){return Object(n["b"])("".concat(o["a"],"/dictionaryType/dictionaryTypeQueryList"),t)},c=function(t){return Object(n["b"])("".concat(o["a"],"/dictionaryType/dictionaryTypeAdd"),t)},r=function(t){return Object(n["a"])("".concat(o["a"],"/dictionaryType/dictionaryTypeDelete"),t)},s=function(t){return Object(n["b"])("".concat(o["a"],"/dictionaryType/dictionaryTypeUpdate"),t)},l=function(t){return Object(n["b"])("".concat(o["a"],"/dictionary/dictionaryAdd"),t)},u=function(t){return Object(n["b"])("".concat(o["a"],"/dictionary/dictionaryDeleteByIds"),t)},m=function(t){return Object(n["b"])("".concat(o["a"],"/dictionary/dictionaryQueryListByKeyAndType"),t)},d=function(t){return Object(n["b"])("".concat(o["a"],"/dictionary/dictionaryUpdate"),t)},f=function(t){return Object(n["a"])("".concat(o["a"],"/dictionaryCommonality/dictionaryQueryByCacheTypeKey"),t)}}}]);
//# sourceMappingURL=chunk-ea46107a.f87a6bb2.js.map