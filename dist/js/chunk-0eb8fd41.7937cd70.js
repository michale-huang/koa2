(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eb8fd41"],{"40d3":function(t,a,s){"use strict";var e=s("5e08"),i=s.n(e);i.a},"5e08":function(t,a,s){},"7b46":function(t,a,s){"use strict";a["a"]={props:{page:{default:1}},data:function(){return{total:0,perpage:15}},created:function(){this.dataInit("judgment")},watch:{$route:function(){this.dataInit()}},methods:{paginatorInit:function(t,a){this.perpage=t,this.total=a}}}},"7ffb":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("adt-search-folder",{attrs:{searchRouter:{query:{taskNumber:t.search.taskNumber,taskName:t.search.taskName,taskClassify:t.search.taskClassify}},isStatus:!0},on:{"on-triggerFolder":t.searchChange}},[s("template",{slot:"status"},[s("div",{staticClass:"status"},[s("Col",{attrs:{span:"10"}},[s("div",{staticClass:"name"},[t._v("审核状态:")]),t._l(t.auditStatusList,(function(a,e){return s("span",{key:e,class:{"click-status":t.auditStatusNum==e},on:{click:function(a){return t.auditStatus(e)}}},[t._v(" "+t._s(a.status)+" ")])}))],2),s("Col",{attrs:{span:"14"}},[s("div",{staticClass:"name"},[t._v("启用状态:")]),t._l(t.enableStatusList,(function(a,e){return s("span",{key:e,class:{"click-status":t.enableStatusNum==e},on:{click:function(a){return t.enableStatus(e)}}},[t._v(" "+t._s(a.status)+" ")])}))],2)],1)]),s("template",{slot:"always-show"},[s("Col",{staticClass:"search-condition",attrs:{span:"6"}},[s("span",[t._v("异常编号:")]),s("Input",{attrs:{clearable:""},model:{value:t.search.taskNumber,callback:function(a){t.$set(t.search,"taskNumber",a)},expression:"search.taskNumber"}})],1),s("Col",{staticClass:"search-condition line-margin",attrs:{span:"6"}},[s("span",[t._v("异常名称:")]),s("Input",{attrs:{clearable:""},model:{value:t.search.taskName,callback:function(a){t.$set(t.search,"taskName",a)},expression:"search.taskName"}})],1),s("Col",{staticClass:"search-condition line-margin",attrs:{span:"6"}},[s("span",[t._v("异常分类:")]),s("Select",{attrs:{clearable:""},model:{value:t.search.taskClassify,callback:function(a){t.$set(t.search,"taskClassify",a)},expression:"search.taskClassify"}},t._l(t.taskClassifyList,(function(a,e){return s("Option",{key:e,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1)],1)],1)],2),s("div",{staticClass:"btns-paginator"},[s("AdtButton",{staticClass:"btn-operating"},[s("Button",{on:{click:function(a){return t.add()}}},[t._v(" 新增异常"),s("Icon",{attrs:{type:"ios-add-circle-outline"}})],1)],1),s("adt-paginator",{staticClass:"pagination",attrs:{currentPage:~~t.page,total:~~t.total},on:{getPages:t.getPages}})],1),s("Table",{attrs:{columns:t.tableColumns,data:t.tableData,stripe:""},scopedSlots:t._u([{key:"auditStatus",fn:function(a){var e=a.row;a.index;return[s("span",{class:{success:"pass"==e.statusCode,failure:"failed"==e.statusCode}},[t._v(t._s(e.status))])]}},{key:"enableStatus",fn:function(t){t.row,t.index}},{key:"action",fn:function(a){var e=a.row;a.index;return[s("Icon",{staticClass:"icon-action",attrs:{type:"md-create"},on:{click:function(a){return t.edit(e)}}}),s("Icon",{staticClass:"icon-action",attrs:{type:"md-close"},on:{click:function(a){return t.remove(e)}}}),s("Icon",{staticClass:"icon-action",attrs:{type:"ios-alert-outline"},on:{click:function(a){return t.detail(e)}}})]}}])}),s("adt-my-modal",{attrs:{title:"新增异常",showModal:t.isModalShow,width:"650"},on:{"on-visible-change":t.addVisibleChange,"on-ok":function(a){return t.save()},"on-cancel":function(a){return t.cancel()}}},[s("Form",{ref:"formValidate",staticClass:"two-column",attrs:{inline:"",model:t.unusualData,rules:t.ruleValidate,"label-colon":!0,"label-position":"left","label-width":120}},[s("FormItem",{staticStyle:{width:"100%"},attrs:{label:"异常编号"}},[t._v(" "+t._s("GDF534534")+" ")]),s("FormItem",{attrs:{label:"异常名称",prop:"taskName"}},[s("Input",{model:{value:t.unusualData.taskName,callback:function(a){t.$set(t.unusualData,"taskName",a)},expression:"unusualData.taskName"}})],1),s("FormItem",{attrs:{label:"适用场景",prop:"taskClassify"}},[s("Select",{attrs:{clearable:""},model:{value:t.unusualData.taskClassify,callback:function(a){t.$set(t.unusualData,"taskClassify",a)},expression:"unusualData.taskClassify"}},t._l(t.taskClassifyList,(function(a,e){return s("Option",{key:e,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1)],1),s("FormItem",{attrs:{label:"异常类型",prop:"taskName"}},[s("Input",{model:{value:t.unusualData.taskName,callback:function(a){t.$set(t.unusualData,"taskName",a)},expression:"unusualData.taskName"}})],1),s("FormItem",{attrs:{label:"触发逻辑类型",prop:"taskClassify"}},[s("Select",{attrs:{clearable:""},model:{value:t.unusualData.taskClassify,callback:function(a){t.$set(t.unusualData,"taskClassify",a)},expression:"unusualData.taskClassify"}},t._l(t.taskClassifyList,(function(a,e){return s("Option",{key:e,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1)],1),s("FormItem",{attrs:{label:"触发逻辑描述",prop:"taskName"}},[s("Input",{staticStyle:{width:"470px"},model:{value:t.unusualData.taskName,callback:function(a){t.$set(t.unusualData,"taskName",a)},expression:"unusualData.taskName"}})],1),s("FormItem",{attrs:{label:"表达式内容",prop:"taskName"}},[s("Input",{staticStyle:{width:"470px"},attrs:{type:"textarea"},model:{value:t.unusualData.taskName,callback:function(a){t.$set(t.unusualData,"taskName",a)},expression:"unusualData.taskName"}})],1),s("FormItem",{attrs:{label:"处理机制类型",prop:"taskClassify"}},[s("Select",{attrs:{clearable:""},model:{value:t.unusualData.taskClassify,callback:function(a){t.$set(t.unusualData,"taskClassify",a)},expression:"unusualData.taskClassify"}},t._l(t.taskClassifyList,(function(a,e){return s("Option",{key:e,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1)],1),s("FormItem",{attrs:{label:"关联场景",prop:"taskClassify"}},[s("Select",{attrs:{clearable:"",multiple:""},model:{value:t.unusualData.cj,callback:function(a){t.$set(t.unusualData,"cj",a)},expression:"unusualData.cj"}},t._l(t.cj,(function(a,e){return s("Option",{key:e,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1)],1)],1)],1),s("adt-my-modal",{attrs:{title:"审核新增异常",showModal:t.isVerifyAddModalShow,cancelText:"不同意",okText:"同意",width:"800"},on:{"on-visible-change":t.verifyAddVisibleChange,"on-ok":function(a){return t.verifyAddSave()},"on-cancel":function(a){return t.verifyAddCancel()}}},[s("div",{staticClass:"public-detail"},[s("div",{staticClass:"verify-main-info"},[s("Row",[s("Col",{attrs:{span:"14"}},[s("div",{staticClass:"name"},[t._v("创建人：")]),s("div",{staticClass:"content"},[t._v("裂开了裂开了裂开了裂开了")])]),s("Col",{attrs:{span:"10"}},[s("div",{staticClass:"name"},[t._v("创建时间：")]),s("div",{staticClass:"content"},[t._v("F545")])])],1)],1),s("div",{staticClass:"normal-info"},[s("Row",[s("Col",{attrs:{span:"10"}},[s("div",{staticClass:"name"},[t._v("异常名称：")]),s("div",{staticClass:"content"},[t._v("裂开了裂开了裂开了裂开了")])]),s("Col",{attrs:{span:"10"}},[s("div",{staticClass:"name"},[t._v("适用场景：")]),s("div",{staticClass:"content"},[t._v("裂开了裂开了裂开了裂开了")])])],1),s("Row",[s("Col",{attrs:{span:"10"}},[s("div",{staticClass:"name"},[t._v("异常类型：")]),s("div",{staticClass:"content"},[t._v("F545")])]),s("Col",{attrs:{span:"10"}},[s("div",{staticClass:"name"},[t._v("触发逻辑类型：")]),s("div",{staticClass:"content"},[t._v("F545")])])],1),s("Row",[s("Col",{attrs:{span:"24"}},[s("div",{staticClass:"name"},[t._v("触发逻辑描述：")]),s("div",{staticClass:"content many-words"},[t._v("裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了裂开了")])]),s("Col",{attrs:{span:"24"}},[s("div",{staticClass:"name"},[t._v("表达式内容：")]),s("div",{staticClass:"content many-words"},[t._v("裂开了裂开了裂开了裂开了")])])],1),s("Row",[s("Col",{attrs:{span:"24"}},[s("div",{staticClass:"name"},[t._v("处理机制类型：")]),s("div",{staticClass:"content"},[t._v("裂开了裂开了裂开了裂开了")])]),s("Col",{attrs:{span:"24"}},[s("div",{staticClass:"name"},[t._v("关联场景：")]),s("div",{staticClass:"content"},[s("ul",[s("li",[t._v("场景1")]),s("li",[t._v("场景2")])])])])],1)],1)])]),s("adt-my-modal",{attrs:{title:"审核编辑异常",showModal:t.isVerifyEditModalShow,cancelText:"不同意",okText:"同意",width:"800"},on:{"on-visible-change":t.verifyEditVisibleChange,"on-ok":function(a){return t.verifyEditSave()},"on-cancel":function(a){return t.verifyEditCancel()}}},[s("div",{staticClass:"public-detail"},[s("div",{staticClass:"verify-main-info"},[s("Row",[s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"name"},[t._v("修改人：")]),s("div",{staticClass:"content"},[t._v("裂开了裂开了裂开了裂开了")])]),s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"name"},[t._v("修改时间：")]),s("div",{staticClass:"content"},[t._v("F545")])]),s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"name"},[t._v("异常编号：")]),s("div",{staticClass:"content"},[t._v("F545")])])],1)],1)]),s("div",{staticClass:"public-modify-record"},[s("div",{staticClass:"collapse"},[s("div",{staticClass:"content"},[s("p",{staticClass:"list"},[s("span",{staticClass:"content-tit"},[t._v("修改异常名称：")]),s("ul",[s("li",[s("i",{staticClass:"ico"}),t._v("运输任务")])]),s("span",[s("i",{staticClass:"ico ico-blue"}),t._v("物流运输任务")])]),s("hr",{staticClass:"line"}),s("p",{staticClass:"list del-item"},[s("span",{staticClass:"content-tit"},[t._v("修改异常名称：")]),s("ul",[s("li",[t._v("开始时间")]),s("li",[t._v("结束时间")]),s("li",[t._v("运输任务")])])]),s("hr",{staticClass:"line"}),s("p",{staticClass:"list"},[s("span",{staticClass:"content-tit"},[t._v("新增数据项：")]),s("ul",[s("li",[t._v("通知企业")])])])])])])]),s("adt-reconfirm-modal",{attrs:{showModal:t.isActionDel},on:{"on-visible-change":t.visibleChange,"on-ok":function(a){return t.allDelClick()}}})],1)},i=[],n=s("80a0"),l=s("7b46"),o=s("b962"),c={mixins:[l["a"]],data:function(){return{isModalShow:!1,isVerifyAddModalShow:!1,isVerifyEditModalShow:!1,isActionDel:!1,search:{},taskClassifyList:[{label:"运输",value:"ys"},{label:"场所",value:"cs"}],cj:[{label:"运输",value:"ys"},{label:"场所",value:"cs"}],auditStatusNum:"",enableStatusNum:"",auditStatusList:[{code:"unreviewed",status:"未审核"},{code:"stock",status:"未货好"},{code:"progress",status:"执行中"}],enableStatusList:[{code:"unreviewed",status:"已启用"},{code:"stock",status:"未启用"},{code:"progress",status:"已禁用"}],unusualData:{taskName:"",taskClassify:""},ruleValidate:{taskName:[o["a"].required("异常名称")[0]],taskClassify:[o["a"].select("异常分类")[0]]},tableColumns:[{title:"异常编号",align:"center",key:""},{title:"异常名称",align:"center",key:""},{title:"异常类型",align:"center",key:""},{title:"异常解决方案",align:"center",key:""},{title:"创建人",align:"center",key:""},{title:"创建时间",align:"center",key:""},{title:"修改人",align:"center",key:""},{title:"修改时间",align:"center",key:""},{title:"审核人",align:"center",key:""},{title:"审核时间",align:"center",key:""},{title:"审核状态",align:"center",slot:"auditStatus"},{title:"启用状态",align:"center",slot:"enableStatus"},{title:"备注",align:"center",key:""},{title:"操作",align:"center",slot:"action"}],tableData:[{accountName:"11",organizationId:"22",phoneNumber:"33",accountEmail:"44",status:"审核通过",statusCode:"pass"},{accountName:"11",organizationId:"22",phoneNumber:"33",accountEmail:"44",status:"审核失败",statusCode:"failed"},{accountName:"11",organizationId:"22",phoneNumber:"33",accountEmail:"44",status:"审核失败",statusCode:"unreviewed"}]}},methods:{getPages:function(t){this.page=t},addVisibleChange:function(t){this.isModalShow=t},verifyAddVisibleChange:function(t){this.isVerifyAddModalShow=t},verifyEditVisibleChange:function(t){this.isVerifyEditModalShow=t},visibleChange:function(t){this.isActionDel=t},dataInit:function(){this.getData()},getData:function(){},add:function(){this.isModalShow=!0},searchChange:function(){},edit:function(t){this.isModalShow=!0,apiGetTask({data:{id:t}}).then((function(t){t.data}))},remove:function(){this.isActionDel=!0},allDelClick:function(){},save:function(){var t=this;this.$refs.formValidate.validate((function(a){if(a){var s=Object(n["a"])({},t.unusualData);apiAddTask({data:s}).then((function(t){t.data}))}}))},cancel:function(){},verifyAddCancel:function(){},detail:function(t){this.$router.push({path:"/standard-mapper/unusual-manage/detail"})},auditStatus:function(t){this.auditStatusNum=t},enableStatus:function(t){this.enableStatusNum=t}}},u=c,r=(s("40d3"),s("4023")),d=Object(r["a"])(u,e,i,!1,null,"e122485e",null);a["default"]=d.exports}}]);