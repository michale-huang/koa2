(window.webpackJsonp=window.webpackJsonp||[]).push([["641a","a691","ae1f","d01a","19f2"],{"/V5f":function(t,e,a){"use strict";a.r(e);var n={props:{rowNum:{type:Number,default:3},tableContent:{type:Array,default:function(){return[]}}},data:function(){return{rowCellWidth:0,tableContentInfo:[]}},mounted:function(){var t=this;this.rowCellWidth=100/this.rowNum,this.$nextTick(function(e){for(var a=0;a<t.tableContentInfo.length;a++)t.isOverFlow(a)})},watch:{tableContent:{handler:function(t){this.tableContentInfo=t,this.makeUpArray()},immediate:!0}},methods:{isOverFlow:function(t){var e=this.$refs.content[t],a=e.clientWidth;e.scrollWidth>a?this.$set(this.tableContentInfo[t],"isTooltip",!0):this.$set(this.tableContentInfo[t],"isTooltip",!1)},makeUpArray:function(){var t=this.tableContentInfo.length%this.rowNum;if(0!==t)for(var e=this.rowNum-t,a=0;a<e;a++)this.tableContentInfo.push({})}}},l=(a("C0jV"),a("KHd+")),o=Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-container"},[this.tableContentInfo.length?t._l(t.tableContentInfo,function(e,n){return a("div",{key:n,staticClass:"cell-container",class:{"cell-border-top":t.rowNum>n},style:{width:t.rowCellWidth+"%"}},[a("div",{staticClass:"cell-name"},[t._v("\n        "+t._s(e.cellName)+"\n        "),e.cellName?[t._v(":")]:t._e()],2),t._v(" "),e.isTooltip?[a("el-tooltip",{attrs:{content:e.cellContent}},[a("div",{ref:"content",refInFor:!0,staticClass:"cell-content"},[t._v(t._s(e.cellContent))])])]:a("div",{ref:"content",refInFor:!0,staticClass:"cell-content"},[t._v(t._s(e.cellContent))])],2)}):t._e()],2)},[],!1,null,"489c5f0e",null);e.default=o.exports},"2Nzm":function(t,e,a){var n=a("U6+c");"string"==typeof n&&(n=[[t.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,l);n.locals&&(t.exports=n.locals)},"6onE":function(t,e,a){"use strict";a.r(e);var n={name:"confirmModel",props:{showModal:{type:Boolean,default:!1},width:{type:Number,default:400},title:{type:String,default:"弹窗标题"}},data:function(){return{isShowModal:!1}},methods:{closeBackFn:function(){this.$emit("close-modal")}},watch:{showModal:{handler:function(t){this.isShowModal=t},immediate:!0}}},l=(a("L0xT"),a("KHd+")),o=Object(l.a)(n,function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-dialog",{attrs:{title:t.title,visible:t.isShowModal,width:t.width+"px","lock-scroll":""},on:{"update:visible":function(e){t.isShowModal=e},close:t.closeBackFn}},[t._t("default",[t._v("内容是默认不居中的，需要自己写")]),t._v(" "),t._t("footer")],2)},[],!1,null,"4742e35c",null);e.default=o.exports},AJBy:function(t,e,a){var n=a("htSM");"string"==typeof n&&(n=[[t.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,l);n.locals&&(t.exports=n.locals)},C0jV:function(t,e,a){"use strict";var n=a("Mpai");a.n(n).a},HqQu:function(t,e,a){"use strict";a.r(e);var n={props:{name:"tableCmp",tableData:{type:Array,default:function(){return[]}},tableLabel:{type:Array,default:function(){return[]}},tableOption:{type:Object,default:function(){return{}}}},data:function(){return{templateRadio:""}},components:{},methods:{handleButton:function(t,e){this.$emit("operation",{row:e,methods:t})},handleSelectionChange:function(t){this.$emit("multipleChoice",t)},getTemplateRow:function(t){this.$emit("singleChoice",t)},tableRowClassName:function(t){var e=t.row,a=t.rowIndex;e.rowIndex=a}}},l=a("KHd+"),o=Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{ref:"table",staticClass:"mytable",staticStyle:{"min-width":"100%"},attrs:{"element-loading-text":"Loading",data:t.tableData,stripe:"",border:"","tooltip-effect":"dark","row-class-name":t.tableRowClassName,height:"100%"},on:{"selection-change":t.handleSelectionChange}},["radio"==t.tableLabel[0].type?t._l(t.tableLabel,function(e,n){return a("el-table-column",{key:n,attrs:{resizable:!1,sortable:!!e.sortable&&e.sortable,fixed:!!e.fixed&&e.fixed,"show-overflow-tooltip":!0,width:e.width?e.width:"radio"==e.type?"60":"",align:e.align?e.align:"center",label:e.label,prop:e.param,type:e.type?e.type:""},scopedSlots:t._u([{key:"default",fn:function(n){return["radio"==e.type?a("el-radio",{attrs:{label:n.row.rowIndex},nativeOn:{change:function(e){t.getTemplateRow(n.row)}},model:{value:t.templateRadio,callback:function(e){t.templateRadio=e},expression:"templateRadio"}}):a("span",[t._v(t._s(n.row[n.column.property]))])]}}])})}):t._e(),t._v(" "),"selection"==t.tableLabel[0].type?t._l(t.tableLabel,function(t,e){return a("el-table-column",{key:e,attrs:{resizable:!1,sortable:!!t.sortable&&t.sortable,fixed:!!t.fixed&&t.fixed,"show-overflow-tooltip":!!t.tooltip&&t.tooltip,width:t.width?t.width:"selection"==t.type?"60":"",align:t.align?t.align:"center",label:t.label,prop:t.param,type:t.type?t.type:""}})}):t._e(),t._v(" "),"selection"!=t.tableLabel[0].type&&"radio"!=t.tableLabel[0].type?t._l(t.tableLabel,function(t,e){return a("el-table-column",{key:e,attrs:{resizable:!1,sortable:!!t.sortable&&t.sortable,fixed:!!t.fixed&&t.fixed,"show-overflow-tooltip":!!t.tooltip&&t.tooltip,width:t.width?t.width:"index"==t.type?"60":"",align:t.align?t.align:"center",label:t.label,prop:t.param,type:t.type?t.type:""}})}):t._e(),t._v(" "),t.tableOption.label?a("el-table-column",{attrs:{resizable:!1,width:t.tableOption.width?t.tableOption.width:"80",label:t.tableOption.label,fixed:!!t.tableOption.fixed&&t.tableOption.fixed,align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.tableOption.options,function(n,l){return a("span",{key:l,staticClass:"operationBtn",on:{click:function(a){t.handleButton(n.type,e.row)}}},[t._v(t._s(n.label))])})}}])}):t._e()],2)},[],!1,null,null,null);e.default=o.exports},L0xT:function(t,e,a){"use strict";var n=a("2Nzm");a.n(n).a},Mpai:function(t,e,a){var n=a("oxXi");"string"==typeof n&&(n=[[t.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,l);n.locals&&(t.exports=n.locals)},"U6+c":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n[data-v-4742e35c] .el-dialog__body {\n  padding: 30px 40px;\n}\n[data-v-4742e35c] .el-dialog__header {\n  padding: 0;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 20px;\n  background-color: #0382d9;\n  border-start-start-radius: 4px;\n  border-start-end-radius: 4px;\n}\n[data-v-4742e35c] .el-dialog__title {\n  color: #ffffff;\n  font-size: 16px;\n}\n[data-v-4742e35c] .el-dialog {\n  border-radius: 4px;\n}\n[data-v-4742e35c] .el-dialog__headerbtn .el-dialog__close {\n  color: #ffffff;\n}\n[data-v-4742e35c] .el-dialog__headerbtn:hover .el-dialog__close {\n  color: #eeeeee;\n}\n[data-v-4742e35c] .el-dialog__headerbtn {\n  top: 0;\n}\n",""])},ZAdF:function(t,e,a){"use strict";a.r(e);var n={name:"pagination",props:{pageData:{type:Object,required:!0,default:function(){return{totalElements:100,page:1,size:10}}},textAlign:{type:String,default:"right"},pageSizes:{type:Array,default:function(){return[10,15,20,25]}},show:{type:Boolean,default:!0}},data:function(){return{delayed:!0}},methods:{pageChange:function(t){this.delayed&&(this.pageData.page=t,this.$emit("searchFn",{page:this.pageData.page,size:this.pageData.size}))},sizeChange:function(t){var e=this;this.delayed=!1,this.pageData.page=1,this.pageData.size=t,this.$emit("searchFn",{page:this.pageData.page,size:this.pageData.size}),setTimeout(function(){e.delayed=!0},1500)}}},l=(a("f3bq"),a("KHd+")),o=Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("el-pagination",{style:{"text-align":t.textAlign},attrs:{layout:"total,prev,pager,next,sizes,jumper",total:t.pageData.totalElements||0,"page-sizes":t.pageSizes,"page-size":t.pageData.size,"current-page":t.pageData.page},on:{"size-change":t.sizeChange,"current-change":t.pageChange}}):t._e()},[],!1,null,"2ac751ea",null);e.default=o.exports},c5hB:function(t,e,a){"use strict";var n=a("s8Jk");a.n(n).a},di2J:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.seals[data-v-d2c434c6] {\n  margin-top: 20px;\n}\n",""])},f3bq:function(t,e,a){"use strict";var n=a("AJBy");a.n(n).a},htSM:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n[data-v-2ac751ea] .el-select-dropdown__item.selected {\n  color: #0382d9;\n}\n[data-v-2ac751ea] .el-pager li.active {\n  color: #0382d9;\n}\n[data-v-2ac751ea] .el-pagination__sizes .el-input .el-input__inner:hover {\n  color: #0382d9;\n}\n",""])},iCa0:function(t,e,a){"use strict";a.r(e);var n=a("HqQu"),l=a("ZAdF"),o=a("6onE"),i=a("/V5f"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},s={name:"updateSealing",components:{tableCmp:n.default,pageComponent:l.default,confirmModal:o.default,tableV:i.default},data:function(){return{showModal:!1,tableContent:[],form:{tirFormNo:"",seltPlcCuscd:"0000"},pageParam:{totalElements:100,page:1,size:10},rules:{seltPlcCuscd:[{required:!0,message:"请选择所属关区",trigger:"change"}],tirFormNo:[{required:!0,message:"请输入单证号",trigger:"blur"}]},optionsCucd:[{code:"0000",name:" 海关总署"},{code:"0001",name:" 北京海关"}],tableData:[{updateSealTime:"1212",mrn:"12",desestCryCode:"中国",desestPlcCuscd:"海关"}],tableLabel:[{label:"封志更新时间",param:"updateSealTime"},{label:"MRN号",param:"mrn"},{label:"国家",param:"desestCryCode",tooltip:!0},{label:"主管地海关",param:"desestPlcCuscd"}],tableLabelseals:[{label:"封志序列号",param:"adslAddr"},{label:"封志号",param:"sealCntt"},{label:"封志完整标识",param:"sealInterFlag",tooltip:!0}],tableOption:{label:"操作",fixed:"right",options:[{label:"详情",type:"detail"}]}}},methods:{operation:function(t){var e=t.row;this.showModal=!0;var a=[];this.tableLabel.map(function(t){t.param&&a.push({cellName:t.label,cellContent:e[t.param]})}),this.tableContent=a},tirup:function(){return/^([A-Z]{2}[0-9]{8},)*[A-Z]{2}[0-9]{8}$/.test(this.form.tirFormNo)?(console.log("匹配",this.form.tirFormNo),!0):(this.$message({message:"请输入长度为10,前2位是大写字母,后8位是数字的TIR单证号",type:"warning"}),!1)},handleReset:function(t){this.$refs[t].resetFields()},handleSearch:function(t){var e=this,a={};for(var n in this.form)"string"==typeof this.form[n]&&""===this.form[n].trim()&&(this.form[n]="",delete this.form[n]);t?(a=r({},t,this.form),console.log(a),this.searchLists(a)):(a=r({page:1,size:10},this.form),this.$refs.form.validate(function(t){t?e.tirup()&&e.searchLists(a):console.log("error submit!!")}))},searchLists:function(t){console.log("查询参数",t)}}},c=(a("c5hB"),a("KHd+")),d=Object(c.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"query-list"},[a("h3",{staticClass:"page-title"},[t._v("TIR更新封志报文查询")]),t._v(" "),a("div",{staticClass:"main-content"},[a("div",{staticClass:"query-conditions"},[a("h6",{staticClass:"common-title"},[t._v("查询条件")]),t._v(" "),a("div",{staticClass:"query-form"},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-position":"top"}},[a("el-form-item",{attrs:{label:"TIR单证号",prop:"tirFormNo"}},[a("el-input",{attrs:{maxlength:"10",placeholder:"请输入"},model:{value:t.form.tirFormNo,callback:function(e){t.$set(t.form,"tirFormNo",e)},expression:"form.tirFormNo"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属关区",prop:"seltPlcCuscd"}},[a("el-select",{model:{value:t.form.seltPlcCuscd,callback:function(e){t.$set(t.form,"seltPlcCuscd",e)},expression:"form.seltPlcCuscd"}},t._l(t.optionsCucd,function(t){return a("el-option",{key:t.code,attrs:{label:t.code+" "+t.name,value:t.code}})}))],1)],1)],1),t._v(" "),a("div",{staticClass:"form-button"},[a("el-button",{on:{click:function(e){t.handleReset("form")}}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleSearch()}}},[t._v("查询")])],1)]),t._v(" "),a("div",{staticClass:"result-list"},[a("h6",{staticClass:"common-title"},[t._v("查询结果")]),t._v(" "),a("div",{staticClass:"result-table"},[[a("tableCmp",{attrs:{"table-data":t.tableData,"table-label":t.tableLabel,"table-option":t.tableOption},on:{operation:t.operation}})]],2),t._v(" "),a("div",{staticClass:"result-table-pagination"},[a("pageComponent",{attrs:{show:t.pageHide,pageData:t.pageParam},on:{searchFn:t.handleSearch}})],1)])]),t._v(" "),a("confirmModal",{attrs:{showModal:t.showModal,width:953,title:"TIR放行报文查询"},on:{"close-modal":function(e){t.showModal=!1}}},[a("div",[a("div",{staticClass:"modal-title"},[t._v("TIR封志信息")]),t._v(" "),a("table-v",{attrs:{tableContent:t.tableContent,rowNum:2}}),t._v(" "),a("div",{staticClass:"seals"},[a("div",{staticClass:"modal-title"},[t._v("封志信息")]),t._v(" "),a("tableCmp",{attrs:{"table-data":t.tableData,"table-label":t.tableLabelseals}})],1)],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{shape:"circle"},on:{click:function(e){t.showModal=!1}}},[t._v("关闭")])],1)])],1)},[],!1,null,"d2c434c6",null);e.default=d.exports},oxXi:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.table-container[data-v-489c5f0e] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  border-left: 1px solid #dcdfe6;\n  color: #323333;\n}\n.table-container .cell-container[data-v-489c5f0e] {\n  display: flex;\n  flex-direction: row;\n  height: 40px;\n  border-right: 1px solid #dcdfe6;\n  border-bottom: 1px solid #dcdfe6;\n}\n.table-container .cell-container .cell-name[data-v-489c5f0e] {\n  flex: 4;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 10px;\n  text-align: right;\n  border-right: 1px solid #dcdfe6;\n  background-color: #f2fbff;\n}\n.table-container .cell-container .cell-content[data-v-489c5f0e] {\n  flex: 6;\n  height: 100%;\n  padding-left: 20px;\n  line-height: 40px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background-color: #ffffff;\n}\n.table-container .cell-border-top[data-v-489c5f0e] {\n  border-top: 1px solid #dcdfe6;\n}\n",""])},s8Jk:function(t,e,a){var n=a("di2J");"string"==typeof n&&(n=[[t.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,l);n.locals&&(t.exports=n.locals)}}]);