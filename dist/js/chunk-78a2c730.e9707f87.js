(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78a2c730"],{1019:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"data-source-manage"},[a("adt-search-folder",{attrs:{searchRouter:{query:{sourceCode:e.search.sourceCode,displayName:e.search.displayName,remark:e.search.remark,examineStatus:e.search.examineStatus,useStatus:e.search.useStatus}},isStatus:!0}},[a("template",{slot:"status"},[a("div",{staticClass:"status"},[a("Col",{attrs:{span:"10"}},[a("div",{staticClass:"name"},[e._v("审核状态:")]),e._l(e.auditStatus,(function(t){return a("span",{key:t.dictionaryKey,class:{"click-status":e.search.examineStatus===t.dictionaryKey},on:{click:function(a){return e.chooseExamineStatus(t.dictionaryKey)}}},[e._v(" "+e._s(t.dictionaryValue)+" ")])}))],2),a("Col",{attrs:{span:"14"}},[a("div",{staticClass:"name"},[e._v("启用状态:")]),e._l(e.enableStatus,(function(t){return a("span",{key:t.dictionaryKey,class:{"click-status":e.search.useStatus===t.dictionaryKey},on:{click:function(a){return e.chooseUseStatus(t.dictionaryKey)}}},[e._v(" "+e._s(t.dictionaryValue)+" ")])}))],2)],1)]),a("template",{slot:"always-show"},[a("Col",{staticClass:"form-item",attrs:{span:"6"}},[a("span",[e._v("数据源编号:")]),a("Input",{attrs:{clearable:""},model:{value:e.search.sourceCode,callback:function(t){e.$set(e.search,"sourceCode",t)},expression:"search.sourceCode"}})],1),a("Col",{staticClass:"form-item",attrs:{span:"6"}},[a("span",[e._v("数据源名称:")]),a("Input",{attrs:{clearable:""},model:{value:e.search.displayName,callback:function(t){e.$set(e.search,"displayName",t)},expression:"search.displayName"}})],1),a("Col",{staticClass:"form-item",attrs:{span:"6"}},[a("span",[e._v("数据源内容:")]),a("Input",{attrs:{clearable:""},model:{value:e.search.remark,callback:function(t){e.$set(e.search,"remark",t)},expression:"search.remark"}})],1)],1)],2),a("div",{staticClass:"content"},[a("div",{staticClass:"btns-paginator"},[a("adt-button",[a("Button",{on:{click:function(t){return e.add()}}},[e._v(" 新增数据源 "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_tianjia"}})])]),a("Button",{on:{click:function(t){return e.startUsing.apply(void 0,[e.apiEnable,""].concat(e.startAndStopData))}}},[e._v(" "+e._s("批量启用"+(e.isManager?"":"申请"))+" "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-shenqing"}})])]),a("Button",{on:{click:function(t){return e.stopUsing.apply(void 0,[e.apiDisable,""].concat(e.startAndStopData))}}},[e._v(" "+e._s("批量停用"+(e.isManager?"":"申请"))+" "),a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-shenqing"}})])])],1),a("adt-paginator",{attrs:{currentPage:~~e.page,total:~~e.total}})],1),a("div",{staticClass:"public-table-data"},[a("Table",{attrs:{"tooltip-theme":"light",columns:e.columns,data:e.tableData,stripe:""},on:{"on-selection-change":e.selectionChange},scopedSlots:e._u([{key:"createDatetime",fn:function(t){var a=t.row;return[e._v(" "+e._s(e.timestampFormat(a.createDatetime))+" ")]}},{key:"examineDatetime",fn:function(t){var a=t.row;return[e._v(" "+e._s(e.timestampFormat(a.examineDatetime))+" ")]}},{key:"examineStatus",fn:function(t){var s=t.row;return[a("span",{class:{success:"pass"===s.examineStatus,error:"fail"===s.examineStatus}},[e._v(" "+e._s(s.examineStatusTranslate)+" ")])]}},{key:"useStatus",fn:function(t){var s=t.row;return[a("span",{class:{success:"enable"===s.useStatus,error:"disable"===s.useStatus}},[e._v(" "+e._s(s.useStatusTranslate)+" ")])]}},{key:"action",fn:function(t){var s=t.row;return[s.useStatus&&"disable"!==s.useStatus||"wait"===s.examineStatus?e._e():a("span",{staticClass:"icon-action icon-action-word",attrs:{title:"启用"},on:{click:function(t){return e.startUsing.apply(void 0,[e.apiEnable,s].concat(e.startAndStopData))}}},[e._v("启")]),s.useStatus&&"enable"===s.useStatus&&"wait"!==s.examineStatus?a("span",{staticClass:"icon-action icon-action-word",attrs:{title:"停用"},on:{click:function(t){return e.stopUsing.apply(void 0,[e.apiDisable,s].concat(e.startAndStopData))}}},[e._v("停")]):e._e(),a("span",{attrs:{title:"审核"}},[e.isManager&&"wait"===s.examineStatus?a("svg",{staticClass:"icon-action iconfont",attrs:{"aria-hidden":"true"},on:{click:function(t){return e.examine(s,"sourceCode","version")}}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_shenhe"}})]):e._e()]),e.isManager&&"enable"!==s.useStatus?a("span",{attrs:{title:"删除"}},[a("svg",{staticClass:"icon-action iconfont",attrs:{"aria-hidden":"true"},on:{click:function(t){return e.remove(s,["sourceCode","trtr"])}}},[a("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_caozuo-shanchu"}})])]):e._e()]}}])})],1)]),a("adt-my-modal",{attrs:{okText:"保存",width:"600",title:e.modalTitle,showModal:e.isModalShow},on:{"on-visible-change":e.addVisibleChange,"on-ok":function(t){return e.save()},"on-cancel":function(t){return e.cancel()}}},[a("Form",{ref:"formItemData",staticClass:"two-column",attrs:{"label-position":"left",model:e.formItem,rules:e.formItemRule,"label-width":96,inline:"","label-colon":""}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"20px","border-bottom":"1px dashed #e5e5e5"}},[a("FormItem",{attrs:{label:"数据源类型",prop:"sourceType"}},[a("Select",{attrs:{clearable:""},on:{"on-change":e.chooseSourceType},model:{value:e.formItem.sourceType,callback:function(t){e.$set(e.formItem,"sourceType",t)},expression:"formItem.sourceType"}},e._l(e.dataSourceType,(function(t){return a("Option",{key:t.dictionaryKey,attrs:{value:t.dictionaryKey}},[e._v(" "+e._s(t.dictionaryValue)+" ")])})),1)],1),"EXE"!==e.formItem.sourceType?a("FormItem",{attrs:{label:"表名",prop:"tableName"}},[a("Select",{attrs:{clearable:""},on:{"on-change":e.chooseTableName},model:{value:e.formItem.tableName,callback:function(t){e.$set(e.formItem,"tableName",t)},expression:"formItem.tableName"}},e._l(e.tableNames,(function(t,s){return a("Option",{key:s,attrs:{value:t.tableName}},[e._v(" "+e._s(t.tableComment)+" ")])})),1)],1):e._e()],1)]),e.sceneNames.length?a("div",{class:["scene-btns",{spread:e.isSceneSpread}]},[a("adt-tab-btns",{staticClass:"scene-tab",attrs:{titleNames:e.sceneNames,isSmallBtn:!0,btnIndex:e.sceneTabIndex||-1},on:{handleBtn:e.handleSceneBtn}}),a("div",{staticClass:"right-item"},[a("div",{staticClass:"show-all-scene",on:{click:function(t){e.isSceneSpread=!e.isSceneSpread}}},[e._v(" "+e._s((e.isSceneSpread?"收起":"展开")+"所有 >")+" ")])])],1):e._e(),-1!==e.sceneTabIndex?a("div",{staticClass:"task-btns"},[a("adt-tab-btns",{staticClass:"task-tab",attrs:{titleNames:e.taskNames,isSmallBtn:!0,btnIndex:e.taskTabIndex||-1},on:{handleBtn:e.handleTaskBtn}})],1):e._e(),-1!==e.sceneTabIndex&&-1!==e.taskTabIndex?a("div",{staticClass:"choose-task"},[a("title",[e._v("选择"+e._s(1===e.taskTabIndex?"基础":"附加")+"任务")]),a("RadioGroup",{staticClass:"tasks",on:{"on-change":e.chooseTask},model:{value:e.taskInfo,callback:function(t){e.taskInfo=t},expression:"taskInfo"}},e._l(e.tasks,(function(t){return a("Radio",{key:t.taskCode,attrs:{label:t.taskCode+"~"+t.taskName+"~"+t.taskType}},[e._v(" "+e._s(t.taskName)+" ")])})),1)],1):e._e(),e.taskInfo||"EXE"!==e.formItem.sourceType&&e.formItem.tableName?a("div",{staticClass:"database"},[a("title",[e._v("选择数据库字段")]),a("Table",{attrs:{columns:e.dbColumns,data:e.dbTableData,"max-height":"300",stripe:""},on:{"on-selection-change":e.dbSelectionChange},scopedSlots:e._u([{key:"displayName",fn:function(t){var s=t.row,n=t.index;return[a("div",{staticStyle:{position:"relative"}},[a("span",{staticClass:"required-tag"},[e._v("*")]),a("Input",{attrs:{maxlength:"10",clearable:""},on:{"on-change":function(t){return e.changeRowData(s,n,"displayName")}},model:{value:s.displayName,callback:function(t){e.$set(s,"displayName","string"===typeof t?t.trim():t)},expression:"row.displayName"}})],1)]}}],null,!1,591600712)})],1):e._e(),a("div",[a("div",{staticStyle:{"margin-bottom":"6px"}},[e._v("备注信息:")]),a("Input",{attrs:{type:"textarea",placeholder:"请输入内容..."},model:{value:e.formItem.remark,callback:function(t){e.$set(e.formItem,"remark","string"===typeof t?t.trim():t)},expression:"formItem.remark"}})],1)],1),a("adt-my-modal",{attrs:{width:"600",title:e.examineModalTitle,showModal:e.isExamineModalShow},on:{"on-visible-change":e.examineVisibleChange,"on-ok":function(t){return e.examineSave(e.apiEnableExamPass,e.apiEnableExamFail,e.apiDisableExamPass,e.apiDisableExamFail)}}},[a("RadioGroup",{staticStyle:{"margin-bottom":"20px"},model:{value:e.agree,callback:function(t){e.agree=t},expression:"agree"}},[a("Radio",{attrs:{label:"1"}},[e._v("同意"+e._s(1===e.examineType?"启用":"停用"))]),a("Radio",{staticStyle:{"margin-left":"30px"},attrs:{label:"0"}},[e._v("不同意"+e._s(1===e.examineType?"启用":"停用"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"0"===e.agree,expression:"agree === '0'"}]},[a("div",{staticClass:"reason-name",staticStyle:{"margin-bottom":"6px"}},[e._v("填写驳回原因:")]),a("Input",{attrs:{type:"textarea",placeholder:"请输入内容..."},model:{value:e.reason,callback:function(t){e.reason="string"===typeof t?t.trim():t},expression:"reason"}})],1)],1),a("adt-my-modal",{attrs:{showModal:e.isActionDel,title:"系统提示"},on:{"on-visible-change":e.visibleChange,"on-ok":function(t){return e.confirmDel(e.apiDel)}}},[a("div",[a("div",{staticStyle:{"margin-bottom":"6px"}},[e._v("填写删除原因:")]),a("Input",{attrs:{type:"textarea",placeholder:"请输入内容..."},model:{value:e.delInfo.removeRsn,callback:function(t){e.$set(e.delInfo,"removeRsn","string"===typeof t?t.trim():t)},expression:"delInfo.removeRsn"}})],1)])],1)},n=[],i=(a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("841c"),a("1276"),a("5530")),o=a("b85c"),c=a("2934"),r=a("4ec3"),l=function(e){return Object(c["c"])("".concat(r["h"],"/datasource/query-list"),e)},u=function(e){return Object(c["c"])("".concat(r["h"],"/datasource/add"),e)},d=function(e){return Object(c["c"])("".concat(r["h"],"/datasource/enable"),e)},m=function(e){return Object(c["c"])("".concat(r["h"],"/datasource/disable"),e)},h=function(e){return Object(c["c"])("".concat(r["h"],"/datasource/enable-exam-pass"),e)},f=function(e){return Object(c["c"])("".concat(r["h"],"/datasource/enable-exam-fail"),e)},p=function(e){return Object(c["c"])("".concat(r["h"],"/datasource/disable-exam-pass"),e)},b=function(e){return Object(c["c"])("".concat(r["h"],"/datasource/disable-exam-fail"),e)},v=function(e){return Object(c["c"])("".concat(r["h"],"/datasource/del"),e)},y=function(e){return Object(c["a"])("".concat(r["h"],"/datasource/table"),e)},k=function(e){return Object(c["a"])("".concat(r["h"],"/datasource/table-field"),e)},g=function(e){return Object(c["a"])("".concat(r["h"],"/datasource/scene-list"),e)},x=function(e){return Object(c["c"])("".concat(r["h"],"/datasource/scene-task"),e)},S=function(e){return Object(c["a"])("".concat(r["h"],"/datasource/task-data"),e)},I=a("b962"),C=a("90fe"),_=a("781c"),N=[{title:"选择",align:"center",type:"selection",width:60},{title:"数据源编号",align:"center",key:"sourceCode"},{title:"数据源名称",align:"center",key:"displayName"},{title:"创建人",align:"center",key:"createByTranslate"},{title:"创建时间",align:"center",slot:"createDatetime",width:160},{title:"备注",align:"center",key:"remark",tooltip:!0},{title:"审核状态",align:"center",slot:"examineStatus"},{title:"审核时间",align:"center",slot:"examineDatetime",width:160},{title:"启用状态",align:"center",slot:"useStatus"},{title:"操作",align:"center",slot:"action",width:150}],T=[{title:"选择",align:"center",type:"selection",width:60},{title:"数据库字段",align:"center",key:"columnName"},{title:"字段显示名称",align:"center",slot:"displayName",width:180}],D={name:"DataSourceManage",mixins:[_["a"]],props:{sourceCode:"",displayName:"",db:"",examineStatus:"",useStatus:""},data:function(){return{taskType:this.$getDictionary("TASK_TYPE"),dataSourceType:this.$getDictionary("DATA_SOURCE_TYPE"),apiEnable:d,apiDisable:m,startAndStopData:["sourceCode","version","useStatus","examineStatus"],apiEnableExamPass:h,apiEnableExamFail:f,apiDisableExamPass:p,apiDisableExamFail:b,apiDel:v,name:"数据源",search:{sourceCode:this.sourceCode,displayName:this.displayName,remark:this.remark,examineStatus:this.examineStatus,useStatus:this.useStatus},tableData:[],columns:N,dbTableData:[],dbColumns:T,formItem:{sourceType:"",tableName:"",remark:""},formItemRule:{sourceType:[I["a"].select("数据源类型")[0]],tableName:[I["a"].select("表名")[0]]},selectedData:[],sceneData:[],sceneNames:[],sceneName:"",sceneCode:"",sceneTabIndex:-1,isSceneSpread:!1,taskNames:[],taskTabIndex:-1,taskInfo:"",tasks:[],tableNames:[]}},mounted:function(){var e,t=Object(o["a"])(this.taskType);try{for(t.s();!(e=t.n()).done;){var a=e.value;this.taskNames.push(a.dictionaryValue)}}catch(s){t.e(s)}finally{t.f()}},methods:{dbSelectionChange:function(e){this.selectedData=e},getData:function(){var e=this,t=Object(i["a"])({page:this.page},this.search);l({data:t}).then((function(t){var a=t.data;e.tableData=a.content||[],e.total=a.totalElements}))},cancel:function(){this.$refs.formItemData.resetFields(),this.reset()},edit:function(e){var t=this;this.isAdd=!1;var a={name:e.name};getQueryDataSource(a).then((function(e){t.formItem=e.data,t.formItem.maxLength=t.formItem.maxLength.toString(),t.formItem.rules=e.data.rules||[],t.isModalShow=!0,t.modalTitle="编辑数据源"}))},detail:function(e){this.$router.push("/standard-mapper/data-source-manage/detail/".concat(e.name))},save:function(){var e=this,t=this;function a(){t.$Message.info("保存成功"),t.$refs.formItemData.resetFields(),t.reset(),t.isModalShow=!1,t.getData()}this.$refs.formItemData.validate((function(t){if(t){if(!e.verifyItem())return;var s=e.taskInfo.split("~"),n=Object(i["a"])({},e.formItem);n.dataSourceDisplaysName=e.selectedData,"EXE"===e.formItem.sourceType&&(n.taskCode=s[0],n.taskName=s[1],n.taskType=s[2],n.sceneName=e.sceneName,n.sceneCode=e.sceneCode,n.tableName=""),e.isAdd?u({data:n}).then((function(e){a()})):apiUpdateDataSource({data:n}).then((function(e){a()}))}}))},changeRowData:function(e,t,a){this.dbTableData[t]=e;var s,n=Object(o["a"])(this.selectedData);try{for(n.s();!(s=n.n()).done;){var i=s.value;if(i.columnName===e.columnName){i[a]=e[a];break}}}catch(c){n.e(c)}finally{n.f()}},verifyItem:function(){if(!this.selectedData.length)return this.$Message.warning("请至少选择一个数据库字段！"),!1;var e,t=[],a=Object(o["a"])(this.selectedData);try{for(a.s();!(e=a.n()).done;){var s=e.value;if(!s.displayName)return this.$Message.warning("选中的数据库字段的字段显示名称必填！"),!1;t.push(s.displayName)}}catch(n){a.e(n)}finally{a.f()}return!Object(C["c"])(t)||(this.$Message.warning("选中的数据库字段的字段显示名称不能重复！"),!1)},chooseSourceType:function(e){var t=this;e&&("EXE"===e?g().then((function(e){var a=e.data,s=[];t.sceneData=a;var n,i=Object(o["a"])(a);try{for(i.s();!(n=i.n()).done;){var c=n.value;s.push(c.sceneName)}}catch(r){i.e(r)}finally{i.f()}t.sceneNames=s})):y({sourceType:this.formItem.sourceType}).then((function(e){var a=e.data;t.tableNames=a})),this.reset())},chooseTableName:function(){var e=this;this.formItem.tableName&&k({tableName:this.formItem.tableName}).then((function(t){var a=t.data;e.dbTableData=a}))},handleSceneBtn:function(e,t){this.sceneTabIndex=e+1,this.sceneCode=this.sceneData[e].sceneCode,this.sceneName=t,this.taskTabIndex=-1,this.taskInfo=""},handleTaskBtn:function(e){var t=this;this.taskTabIndex=e+1,this.taskInfo="",x({data:{sceneCode:this.sceneCode,taskType:this.taskType[e].dictionaryKey}}).then((function(e){var a=e.data;t.tasks=a}))},chooseTask:function(){var e=this;S({taskCode:this.taskInfo.split("~")[0]}).then((function(t){var a=t.data;e.dbTableData=a}))},reset:function(){this.selectedData=[],this.taskInfo="",this.sceneNames=[],this.sceneCode="",this.sceneName="",this.formItem.remark="",this.isSceneSpread=!1,this.sceneTabIndex=-1,this.taskTabIndex=-1}}},w=D,E=(a("2fe3"),a("2877")),O=Object(E["a"])(w,s,n,!1,null,"9471bf6a",null);t["default"]=O.exports},"2fe3":function(e,t,a){"use strict";var s=a("dac6"),n=a.n(s);n.a},dac6:function(e,t,a){}}]);