(window.webpackJsonp=window.webpackJsonp||[]).push([["c705","a691","ae1f","d01a","19f2"],{"/V5f":function(t,e,a){"use strict";a.r(e);var l={props:{rowNum:{type:Number,default:3},tableContent:{type:Array,default:function(){return[]}}},data:function(){return{rowCellWidth:0,tableContentInfo:[]}},mounted:function(){var t=this;this.rowCellWidth=100/this.rowNum,this.$nextTick(function(e){for(var a=0;a<t.tableContentInfo.length;a++)t.isOverFlow(a)})},watch:{tableContent:{handler:function(t){this.tableContentInfo=t,this.makeUpArray()},immediate:!0}},methods:{isOverFlow:function(t){var e=this.$refs.content[t],a=e.clientWidth;e.scrollWidth>a?this.$set(this.tableContentInfo[t],"isTooltip",!0):this.$set(this.tableContentInfo[t],"isTooltip",!1)},makeUpArray:function(){var t=this.tableContentInfo.length%this.rowNum;if(0!==t)for(var e=this.rowNum-t,a=0;a<e;a++)this.tableContentInfo.push({})}}},n=(a("C0jV"),a("KHd+")),o=Object(n.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-container"},[this.tableContentInfo.length?t._l(t.tableContentInfo,function(e,l){return a("div",{key:l,staticClass:"cell-container",class:{"cell-border-top":t.rowNum>l},style:{width:t.rowCellWidth+"%"}},[a("div",{staticClass:"cell-name"},[t._v("\n        "+t._s(e.cellName)+"\n        "),e.cellName?[t._v(":")]:t._e()],2),t._v(" "),e.isTooltip?[a("el-tooltip",{attrs:{content:e.cellContent}},[a("div",{ref:"content",refInFor:!0,staticClass:"cell-content"},[t._v(t._s(e.cellContent))])])]:a("div",{ref:"content",refInFor:!0,staticClass:"cell-content"},[t._v(t._s(e.cellContent))])],2)}):t._e()],2)},[],!1,null,"489c5f0e",null);e.default=o.exports},"0YXm":function(t,e,a){var l=a("2j9v");"string"==typeof l&&(l=[[t.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(l,n);l.locals&&(t.exports=l.locals)},"2Nzm":function(t,e,a){var l=a("U6+c");"string"==typeof l&&(l=[[t.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(l,n);l.locals&&(t.exports=l.locals)},"2j9v":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.seals[data-v-37d1a910] {\n  margin-top: 20px;\n}\n",""])},"6onE":function(t,e,a){"use strict";a.r(e);var l={name:"confirmModel",props:{showModal:{type:Boolean,default:!1},width:{type:Number,default:400},title:{type:String,default:"弹窗标题"}},data:function(){return{isShowModal:!1}},methods:{closeBackFn:function(){this.$emit("close-modal")}},watch:{showModal:{handler:function(t){this.isShowModal=t},immediate:!0}}},n=(a("L0xT"),a("KHd+")),o=Object(n.a)(l,function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-dialog",{attrs:{title:t.title,visible:t.isShowModal,width:t.width+"px","lock-scroll":""},on:{"update:visible":function(e){t.isShowModal=e},close:t.closeBackFn}},[t._t("default",[t._v("内容是默认不居中的，需要自己写")]),t._v(" "),t._t("footer")],2)},[],!1,null,"4742e35c",null);e.default=o.exports},AJBy:function(t,e,a){var l=a("htSM");"string"==typeof l&&(l=[[t.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(l,n);l.locals&&(t.exports=l.locals)},Bepc:function(t,e,a){"use strict";a.r(e);var l=a("HqQu"),n=a("ZAdF"),o=a("6onE"),i=a("/V5f"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t},s={name:"passinfos",components:{tableCmp:l.default,pageComponent:n.default,confirmModal:o.default,tableV:i.default},data:function(){return{showModal:!1,tableContent:[],tableContents:[],form:{tirFormNo:"",stshipPlcCuscd:"",mrn:"",lrn:""},pageParam:{totalElements:100,page:1,size:10},rules:{stshipPlcCuscd:[{required:!0,message:"请选择所属关区",trigger:"change"}]},options1:[{code:"0000",name:" 海关总署"},{code:"0001",name:" 北京海关"}],tableData:[{relTime:"1212",tirFormNo:"12312",mrn:"12",visaCuscd:"daa",stshipCryCode:"大大",desestCryCode:"大大",rcvStucd:"啊谁说的",acpStucd:"1111"}],tableLabel:[{label:"放行时间",param:"relTime",width:"200"},{label:"TIR单证号",param:"tirFormNo",width:"200"},{label:"MRN号",param:"mrn",width:"200"},{label:"启运地国家",param:"visaCuscd",width:"200",tooltip:!0},{label:"启运地关区代码",param:"stshipCryCode",width:"200"},{label:"目的地国家",param:"desestCryCode",width:"200"},{label:"数据中心接收状态",param:"rcvStucd",width:"200"},{label:"IRU接收状态",param:"acpStucd",width:"200"}],tableLabelseals:[{label:"封志序列号",param:"indexNo",width:"200"},{label:"封志号",param:"sealCntt",width:"200"},{label:"封志完整标识",param:"sealIntgrFlag",width:"200"}],tableOption:{label:"操作",fixed:"right",options:[{label:"详情",type:"detail"}]}}},methods:{handleReset:function(t){this.$refs[t].resetFields()},handleSearch:function(){var t=this;for(var e in this.form)"string"==typeof this.form[e]&&this.form[e].includes(" ")&&(this.form[e]=this.form[e].replaceAll(" ","")),"string"==typeof this.form[e]&&""===this.form[e].trimRight()&&(this.form[e]="");var a=r({},this.handleReqData(this.form));this.$refs.form.validate(function(e){if(!e)return console.log("error submit!!"),!1;""!==t.form.tirFormNo||""!==t.form.mrn||""!==t.form.lrn?(""!==t.form.tirFormNo&&t.verify(),t.searchLists(),console.log("查询")):t.$message({message:"TIR单证号、LRN号、MRN号至少要输入一个",type:"warning"})}),console.log(a)},operation:function(t){console.log(t);var e=t.row;console.log(e),this.showModal=!0,this.tableContent=[{cellName:"TIR单证号",cellContent:e.tirFormNo},{cellName:"LRN号",cellContent:e.mrn},{cellName:"是否MRN号",cellContent:e.mrn},{cellName:"放行时间",cellContent:e.relTime},{cellName:"启运地关区",cellContent:e.stshipCryCode},{cellName:"目的地关区",cellContent:e.desestCryCode}]},verify:function(){/^([A-Z]{2}[0-9]{8},)*[A-Z]{2}[0-9]{8}$/.test(this.form.tirFormNo)?console.log("匹配",this.form.tirFormNo):this.$message({message:"请输入长度为10,前2位是大写字母,后8位是数字的TIR单证号",type:"warning"})},searchLists:function(t){console.log("查询参数",t)}}},c=(a("nW2a"),a("KHd+")),d=Object(c.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"query-list"},[a("h3",{staticClass:"page-title"},[t._v("TIR放行报文查询")]),t._v(" "),a("div",{staticClass:"main-content"},[a("div",{staticClass:"query-conditions"},[a("h6",{staticClass:"common-title"},[t._v("查询条件")]),t._v(" "),a("div",{staticClass:"query-form"},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-position":"top"}},[a("el-form-item",{attrs:{label:"TIR单证号",prop:"tirFormNo"}},[a("el-input",{attrs:{maxlenngth:"10",clearable:"",placeholder:"请输入"},model:{value:t.form.tirFormNo,callback:function(e){t.$set(t.form,"tirFormNo",e)},expression:"form.tirFormNo"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属关区",prop:"stshipPlcCuscd"}},[a("el-select",{model:{value:t.form.stshipPlcCuscd,callback:function(e){t.$set(t.form,"stshipPlcCuscd",e)},expression:"form.stshipPlcCuscd"}},t._l(t.options1,function(t){return a("el-option",{key:t.code,attrs:{label:t.code+" "+t.name,value:t.code}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"MRN号",prop:"mrn"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:t.form.mrn,callback:function(e){t.$set(t.form,"mrn",e)},expression:"form.mrn"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"LPN号",prop:"lrn"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:t.form.lrn,callback:function(e){t.$set(t.form,"lrn",e)},expression:"form.lrn"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"form-button"},[a("el-button",{on:{click:function(e){t.handleReset("form")}}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查询")])],1)]),t._v(" "),a("div",{staticClass:"result-list"},[a("h6",{staticClass:"common-title"},[t._v("查询结果")]),t._v(" "),a("div",{staticClass:"result-table"},[[a("tableCmp",{attrs:{"table-data":t.tableData,"table-label":t.tableLabel,"table-option":t.tableOption},on:{operation:t.operation}})]],2),t._v(" "),a("div",{staticClass:"result-table-pagination"},[a("pageComponent",{attrs:{show:t.pageHide,pageData:t.pageParam},on:{searchFn:t.handleSearch}})],1)])]),t._v(" "),a("confirmModal",{attrs:{showModal:t.showModal,width:953,title:"TIR放行报文查询"},on:{"close-modal":function(e){t.showModal=!1}}},[a("div",[a("div",{staticClass:"modal-title"},[t._v("TIR行程信息")]),t._v(" "),a("table-v",{attrs:{tableContent:t.tableContent,rowNum:2}}),t._v(" "),a("div",{staticClass:"seals"},[a("div",{staticClass:"modal-title"},[t._v("封志信息")]),t._v(" "),a("tableCmp",{attrs:{"table-data":t.tableData,"table-label":t.tableLabelseals}})],1)],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{shape:"circle"},on:{click:function(e){t.showModal=!1}}},[t._v("关闭")])],1)])],1)},[],!1,null,"37d1a910",null);e.default=d.exports},C0jV:function(t,e,a){"use strict";var l=a("Mpai");a.n(l).a},HqQu:function(t,e,a){"use strict";a.r(e);var l={props:{name:"tableCmp",tableData:{type:Array,default:function(){return[]}},tableLabel:{type:Array,default:function(){return[]}},tableOption:{type:Object,default:function(){return{}}}},data:function(){return{templateRadio:""}},components:{},methods:{handleButton:function(t,e){this.$emit("operation",{row:e,methods:t})},handleSelectionChange:function(t){this.$emit("multipleChoice",t)},getTemplateRow:function(t){this.$emit("singleChoice",t)},tableRowClassName:function(t){var e=t.row,a=t.rowIndex;e.rowIndex=a}}},n=a("KHd+"),o=Object(n.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{ref:"table",staticClass:"mytable",staticStyle:{"min-width":"100%"},attrs:{"element-loading-text":"Loading",data:t.tableData,stripe:"",border:"","tooltip-effect":"dark","row-class-name":t.tableRowClassName,height:"100%"},on:{"selection-change":t.handleSelectionChange}},["radio"==t.tableLabel[0].type?t._l(t.tableLabel,function(e,l){return a("el-table-column",{key:l,attrs:{resizable:!1,sortable:!!e.sortable&&e.sortable,fixed:!!e.fixed&&e.fixed,"show-overflow-tooltip":!0,width:e.width?e.width:"radio"==e.type?"60":"",align:e.align?e.align:"center",label:e.label,prop:e.param,type:e.type?e.type:""},scopedSlots:t._u([{key:"default",fn:function(l){return["radio"==e.type?a("el-radio",{attrs:{label:l.row.rowIndex},nativeOn:{change:function(e){t.getTemplateRow(l.row)}},model:{value:t.templateRadio,callback:function(e){t.templateRadio=e},expression:"templateRadio"}}):a("span",[t._v(t._s(l.row[l.column.property]))])]}}])})}):t._e(),t._v(" "),"selection"==t.tableLabel[0].type?t._l(t.tableLabel,function(t,e){return a("el-table-column",{key:e,attrs:{resizable:!1,sortable:!!t.sortable&&t.sortable,fixed:!!t.fixed&&t.fixed,"show-overflow-tooltip":!!t.tooltip&&t.tooltip,width:t.width?t.width:"selection"==t.type?"60":"",align:t.align?t.align:"center",label:t.label,prop:t.param,type:t.type?t.type:""}})}):t._e(),t._v(" "),"selection"!=t.tableLabel[0].type&&"radio"!=t.tableLabel[0].type?t._l(t.tableLabel,function(t,e){return a("el-table-column",{key:e,attrs:{resizable:!1,sortable:!!t.sortable&&t.sortable,fixed:!!t.fixed&&t.fixed,"show-overflow-tooltip":!!t.tooltip&&t.tooltip,width:t.width?t.width:"index"==t.type?"60":"",align:t.align?t.align:"center",label:t.label,prop:t.param,type:t.type?t.type:""}})}):t._e(),t._v(" "),t.tableOption.label?a("el-table-column",{attrs:{resizable:!1,width:t.tableOption.width?t.tableOption.width:"80",label:t.tableOption.label,fixed:!!t.tableOption.fixed&&t.tableOption.fixed,align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.tableOption.options,function(l,n){return a("span",{key:n,staticClass:"operationBtn",on:{click:function(a){t.handleButton(l.type,e.row)}}},[t._v(t._s(l.label))])})}}])}):t._e()],2)},[],!1,null,null,null);e.default=o.exports},L0xT:function(t,e,a){"use strict";var l=a("2Nzm");a.n(l).a},Mpai:function(t,e,a){var l=a("oxXi");"string"==typeof l&&(l=[[t.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(l,n);l.locals&&(t.exports=l.locals)},"U6+c":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n[data-v-4742e35c] .el-dialog__body {\n  padding: 30px 40px;\n}\n[data-v-4742e35c] .el-dialog__header {\n  padding: 0;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 20px;\n  background-color: #0382d9;\n  border-start-start-radius: 4px;\n  border-start-end-radius: 4px;\n}\n[data-v-4742e35c] .el-dialog__title {\n  color: #ffffff;\n  font-size: 16px;\n}\n[data-v-4742e35c] .el-dialog {\n  border-radius: 4px;\n}\n[data-v-4742e35c] .el-dialog__headerbtn .el-dialog__close {\n  color: #ffffff;\n}\n[data-v-4742e35c] .el-dialog__headerbtn:hover .el-dialog__close {\n  color: #eeeeee;\n}\n[data-v-4742e35c] .el-dialog__headerbtn {\n  top: 0;\n}\n",""])},ZAdF:function(t,e,a){"use strict";a.r(e);var l={name:"pagination",props:{pageData:{type:Object,required:!0,default:function(){return{totalElements:100,page:1,size:10}}},textAlign:{type:String,default:"right"},pageSizes:{type:Array,default:function(){return[10,15,20,25]}},show:{type:Boolean,default:!0}},data:function(){return{delayed:!0}},methods:{pageChange:function(t){this.delayed&&(this.pageData.page=t,this.$emit("searchFn",{page:this.pageData.page,size:this.pageData.size}))},sizeChange:function(t){var e=this;this.delayed=!1,this.pageData.page=1,this.pageData.size=t,this.$emit("searchFn",{page:this.pageData.page,size:this.pageData.size}),setTimeout(function(){e.delayed=!0},1500)}}},n=(a("f3bq"),a("KHd+")),o=Object(n.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("el-pagination",{style:{"text-align":t.textAlign},attrs:{layout:"total,prev,pager,next,sizes,jumper",total:t.pageData.totalElements||0,"page-sizes":t.pageSizes,"page-size":t.pageData.size,"current-page":t.pageData.page},on:{"size-change":t.sizeChange,"current-change":t.pageChange}}):t._e()},[],!1,null,"2ac751ea",null);e.default=o.exports},f3bq:function(t,e,a){"use strict";var l=a("AJBy");a.n(l).a},htSM:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n[data-v-2ac751ea] .el-select-dropdown__item.selected {\n  color: #0382d9;\n}\n[data-v-2ac751ea] .el-pager li.active {\n  color: #0382d9;\n}\n[data-v-2ac751ea] .el-pagination__sizes .el-input .el-input__inner:hover {\n  color: #0382d9;\n}\n",""])},nW2a:function(t,e,a){"use strict";var l=a("0YXm");a.n(l).a},oxXi:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.table-container[data-v-489c5f0e] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  border-left: 1px solid #dcdfe6;\n  color: #323333;\n}\n.table-container .cell-container[data-v-489c5f0e] {\n  display: flex;\n  flex-direction: row;\n  height: 40px;\n  border-right: 1px solid #dcdfe6;\n  border-bottom: 1px solid #dcdfe6;\n}\n.table-container .cell-container .cell-name[data-v-489c5f0e] {\n  flex: 4;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 10px;\n  text-align: right;\n  border-right: 1px solid #dcdfe6;\n  background-color: #f2fbff;\n}\n.table-container .cell-container .cell-content[data-v-489c5f0e] {\n  flex: 6;\n  height: 100%;\n  padding-left: 20px;\n  line-height: 40px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background-color: #ffffff;\n}\n.table-container .cell-border-top[data-v-489c5f0e] {\n  border-top: 1px solid #dcdfe6;\n}\n",""])}}]);