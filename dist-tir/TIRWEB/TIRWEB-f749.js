(window.webpackJsonp=window.webpackJsonp||[]).push([["f749","ae1f","d01a"],{"6Mgu":function(e,t,n){"use strict";n.r(t);var a=n("HqQu"),l=n("ZAdF"),o={name:"notAllowPass",components:{tableCmp:a.default,pagination:l.default},data:function(){return{rules:{seltPlcCuscd:[{required:!0,message:"请选择所属关区",trigger:"change"}]},form:{tirFormNo:void 0,seltPlcCuscd:void 0,mrn:void 0,lrn:void 0},pageParam:{totalElements:100,page:1,size:10},options1:[{id:"1",label:"海关总署",value:"0000"}],tableLabel:[{label:"选择",type:"selection",width:"80"},{label:"序号",type:"index"},{label:"TIR单证号",param:"tirFormNo",sortable:!0,width:150},{label:"LRN号",param:"lrn"},{label:"MRN号",param:"mrn"},{label:"国家",param:"registTime"},{label:"语言代码",param:"nRelLng"},{label:"主管地海关",width:"120",param:"stshipPlcCuscd"},{label:"不能通关原因",width:"140",param:"resultDes"},{label:"发送日期",param:"sdTime"},{label:"数据中心接收状态",width:"140",param:"rcvStucd"},{label:"IRU接收状态",width:"140",param:"acpStucd"}],tableData:[]}},methods:{onSubmit:function(e){var t=this,n=this.form,a=n.tirFormNo,l=(n.seltPlcCuscd,n.mrn),o=n.lrn;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;void 0!==a||void 0!==l||void 0!==o?console.log("查询"):t.$message({message:"TIR单证号、LRN号、MRN号至少要输入一个",type:"warning"})})},Reset:function(e){this.$refs[e].resetFields()},tircheck:function(){var e=this;return/^([A-Z]{2}[0-9]{8},)*[A-Z]{2}[0-9]{8}$/.test(this.form.tirFormNo)?(console.log("匹配",this.form.tirFormNo),!0):(this.form.tirFormNo=void 0,setTimeout(function(){e.$message({message:"请输入长度为10,前2位是大写字母,后8位是数字的TIR单证号",type:"warning"})},1e3),!1)},operation:function(e){console.log(e)},multipleChoice:function(e){console.log(e)},singleChoice:function(e){console.log(e)}}},i=(n("wkZ6"),n("KHd+")),r=Object(i.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"query-list"},[n("h3",{staticClass:"page-title"},[e._v("TIR不允许放行报文查询")]),e._v(" "),n("div",{staticClass:"main-content"},[n("div",{staticClass:"query-conditions"},[n("h6",{staticClass:"common-title"},[e._v("查询条件")]),e._v(" "),n("div",{staticClass:"query-form scrollbar-y"},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"top"}},[n("el-form-item",{attrs:{label:"TIR单证号",prop:"tirFormNo"}},[n("el-input",{attrs:{maxlength:"10",clearable:"",placeholder:""},on:{change:e.tircheck},model:{value:e.form.tirFormNo,callback:function(t){e.$set(e.form,"tirFormNo","string"==typeof t?t.trim():t)},expression:"form.tirFormNo"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"所属关区",prop:"seltPlcCuscd"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择所属关区"},model:{value:e.form.seltPlcCuscd,callback:function(t){e.$set(e.form,"seltPlcCuscd","string"==typeof t?t.trim():t)},expression:"form.seltPlcCuscd"}},e._l(e.options1,function(e){return n("el-option",{key:e.id,attrs:{label:e.value+" "+e.label,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"LRN",prop:"lrn"}},[n("el-input",{attrs:{clearable:"",placeholder:""},model:{value:e.form.lrn,callback:function(t){e.$set(e.form,"lrn","string"==typeof t?t.trim():t)},expression:"form.lrn"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"MRN号",prop:"mrn"}},[n("el-input",{attrs:{clearable:"",placeholder:""},model:{value:e.form.mrn,callback:function(t){e.$set(e.form,"mrn","string"==typeof t?t.trim():t)},expression:"form.mrn"}})],1)],1)],1),e._v(" "),n("div",{staticClass:"form-button"},[n("el-button",{on:{click:function(t){e.Reset("form")}}},[e._v("重置")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("查询")])],1)]),e._v(" "),n("div",{staticClass:"result-list"},[n("h6",{staticClass:"common-title"},[e._v("查询结果")]),e._v(" "),n("div",{staticClass:"result-table"},[n("tableCmp",{attrs:{"table-data":e.tableData,"table-label":e.tableLabel},on:{operation:e.operation,multipleChoice:e.multipleChoice,singleChoice:e.singleChoice}})],1),e._v(" "),n("div",{staticClass:"result-table-pagination"},[e._e()],1)])])])},[],!1,null,"3684bcbc",null);t.default=r.exports},AJBy:function(e,t,n){var a=n("htSM");"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,l);a.locals&&(e.exports=a.locals)},HqQu:function(e,t,n){"use strict";n.r(t);var a={props:{name:"tableCmp",tableData:{type:Array,default:function(){return[]}},tableLabel:{type:Array,default:function(){return[]}},tableOption:{type:Object,default:function(){return{}}}},data:function(){return{templateRadio:""}},components:{},methods:{handleButton:function(e,t){this.$emit("operation",{row:t,methods:e})},handleSelectionChange:function(e){this.$emit("multipleChoice",e)},getTemplateRow:function(e){this.$emit("singleChoice",e)},tableRowClassName:function(e){var t=e.row,n=e.rowIndex;t.rowIndex=n}}},l=n("KHd+"),o=Object(l.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{ref:"table",staticClass:"mytable",staticStyle:{"min-width":"100%"},attrs:{"element-loading-text":"Loading",data:e.tableData,stripe:"",border:"","tooltip-effect":"dark","row-class-name":e.tableRowClassName,height:"100%"},on:{"selection-change":e.handleSelectionChange}},["radio"==e.tableLabel[0].type?e._l(e.tableLabel,function(t,a){return n("el-table-column",{key:a,attrs:{resizable:!1,sortable:!!t.sortable&&t.sortable,fixed:!!t.fixed&&t.fixed,"show-overflow-tooltip":!0,width:t.width?t.width:"radio"==t.type?"60":"",align:t.align?t.align:"center",label:t.label,prop:t.param,type:t.type?t.type:""},scopedSlots:e._u([{key:"default",fn:function(a){return["radio"==t.type?n("el-radio",{attrs:{label:a.row.rowIndex},nativeOn:{change:function(t){e.getTemplateRow(a.row)}},model:{value:e.templateRadio,callback:function(t){e.templateRadio=t},expression:"templateRadio"}}):n("span",[e._v(e._s(a.row[a.column.property]))])]}}])})}):e._e(),e._v(" "),"selection"==e.tableLabel[0].type?e._l(e.tableLabel,function(e,t){return n("el-table-column",{key:t,attrs:{resizable:!1,sortable:!!e.sortable&&e.sortable,fixed:!!e.fixed&&e.fixed,"show-overflow-tooltip":!!e.tooltip&&e.tooltip,width:e.width?e.width:"selection"==e.type?"60":"",align:e.align?e.align:"center",label:e.label,prop:e.param,type:e.type?e.type:""}})}):e._e(),e._v(" "),"selection"!=e.tableLabel[0].type&&"radio"!=e.tableLabel[0].type?e._l(e.tableLabel,function(e,t){return n("el-table-column",{key:t,attrs:{resizable:!1,sortable:!!e.sortable&&e.sortable,fixed:!!e.fixed&&e.fixed,"show-overflow-tooltip":!!e.tooltip&&e.tooltip,width:e.width?e.width:"index"==e.type?"60":"",align:e.align?e.align:"center",label:e.label,prop:e.param,type:e.type?e.type:""}})}):e._e(),e._v(" "),e.tableOption.label?n("el-table-column",{attrs:{resizable:!1,width:e.tableOption.width?e.tableOption.width:"80",label:e.tableOption.label,fixed:!!e.tableOption.fixed&&e.tableOption.fixed,align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.tableOption.options,function(a,l){return n("span",{key:l,staticClass:"operationBtn",on:{click:function(n){e.handleButton(a.type,t.row)}}},[e._v(e._s(a.label))])})}}])}):e._e()],2)},[],!1,null,null,null);t.default=o.exports},RaXZ:function(e,t,n){var a=n("s6u6");"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,l);a.locals&&(e.exports=a.locals)},ZAdF:function(e,t,n){"use strict";n.r(t);var a={name:"pagination",props:{pageData:{type:Object,required:!0,default:function(){return{totalElements:100,page:1,size:10}}},textAlign:{type:String,default:"right"},pageSizes:{type:Array,default:function(){return[10,15,20,25]}},show:{type:Boolean,default:!0}},data:function(){return{delayed:!0}},methods:{pageChange:function(e){this.delayed&&(this.pageData.page=e,this.$emit("searchFn",{page:this.pageData.page,size:this.pageData.size}))},sizeChange:function(e){var t=this;this.delayed=!1,this.pageData.page=1,this.pageData.size=e,this.$emit("searchFn",{page:this.pageData.page,size:this.pageData.size}),setTimeout(function(){t.delayed=!0},1500)}}},l=(n("f3bq"),n("KHd+")),o=Object(l.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("el-pagination",{style:{"text-align":e.textAlign},attrs:{layout:"total,prev,pager,next,sizes,jumper",total:e.pageData.totalElements||0,"page-sizes":e.pageSizes,"page-size":e.pageData.size,"current-page":e.pageData.page},on:{"size-change":e.sizeChange,"current-change":e.pageChange}}):e._e()},[],!1,null,"2ac751ea",null);t.default=o.exports},f3bq:function(e,t,n){"use strict";var a=n("AJBy");n.n(a).a},htSM:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n[data-v-2ac751ea] .el-select-dropdown__item.selected {\n  color: #0382d9;\n}\n[data-v-2ac751ea] .el-pager li.active {\n  color: #0382d9;\n}\n[data-v-2ac751ea] .el-pagination__sizes .el-input .el-input__inner:hover {\n  color: #0382d9;\n}\n",""])},s6u6:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},wkZ6:function(e,t,n){"use strict";var a=n("RaXZ");n.n(a).a}}]);