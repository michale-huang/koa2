(window.webpackJsonp=window.webpackJsonp||[]).push([["82ee","ae1f","d01a"],{AJBy:function(t,e,a){var i=a("htSM");"string"==typeof i&&(i=[[t.i,i,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,l);i.locals&&(t.exports=i.locals)},AhNj:function(t,e,a){var i=a("LEp5");"string"==typeof i&&(i=[[t.i,i,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,l);i.locals&&(t.exports=i.locals)},HqQu:function(t,e,a){"use strict";a.r(e);var i={props:{name:"tableCmp",tableData:{type:Array,default:function(){return[]}},tableLabel:{type:Array,default:function(){return[]}},tableOption:{type:Object,default:function(){return{}}}},data:function(){return{templateRadio:""}},components:{},methods:{handleButton:function(t,e){this.$emit("operation",{row:e,methods:t})},handleSelectionChange:function(t){this.$emit("multipleChoice",t)},getTemplateRow:function(t){this.$emit("singleChoice",t)},tableRowClassName:function(t){var e=t.row,a=t.rowIndex;e.rowIndex=a}}},l=a("KHd+"),o=Object(l.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{ref:"table",staticClass:"mytable",staticStyle:{"min-width":"100%"},attrs:{"element-loading-text":"Loading",data:t.tableData,stripe:"",border:"","tooltip-effect":"dark","row-class-name":t.tableRowClassName,height:"100%"},on:{"selection-change":t.handleSelectionChange}},["radio"==t.tableLabel[0].type?t._l(t.tableLabel,function(e,i){return a("el-table-column",{key:i,attrs:{resizable:!1,sortable:!!e.sortable&&e.sortable,fixed:!!e.fixed&&e.fixed,"show-overflow-tooltip":!0,width:e.width?e.width:"radio"==e.type?"60":"",align:e.align?e.align:"center",label:e.label,prop:e.param,type:e.type?e.type:""},scopedSlots:t._u([{key:"default",fn:function(i){return["radio"==e.type?a("el-radio",{attrs:{label:i.row.rowIndex},nativeOn:{change:function(e){t.getTemplateRow(i.row)}},model:{value:t.templateRadio,callback:function(e){t.templateRadio=e},expression:"templateRadio"}}):a("span",[t._v(t._s(i.row[i.column.property]))])]}}])})}):t._e(),t._v(" "),"selection"==t.tableLabel[0].type?t._l(t.tableLabel,function(t,e){return a("el-table-column",{key:e,attrs:{resizable:!1,sortable:!!t.sortable&&t.sortable,fixed:!!t.fixed&&t.fixed,"show-overflow-tooltip":!!t.tooltip&&t.tooltip,width:t.width?t.width:"selection"==t.type?"60":"",align:t.align?t.align:"center",label:t.label,prop:t.param,type:t.type?t.type:""}})}):t._e(),t._v(" "),"selection"!=t.tableLabel[0].type&&"radio"!=t.tableLabel[0].type?t._l(t.tableLabel,function(t,e){return a("el-table-column",{key:e,attrs:{resizable:!1,sortable:!!t.sortable&&t.sortable,fixed:!!t.fixed&&t.fixed,"show-overflow-tooltip":!!t.tooltip&&t.tooltip,width:t.width?t.width:"index"==t.type?"60":"",align:t.align?t.align:"center",label:t.label,prop:t.param,type:t.type?t.type:""}})}):t._e(),t._v(" "),t.tableOption.label?a("el-table-column",{attrs:{resizable:!1,width:t.tableOption.width?t.tableOption.width:"80",label:t.tableOption.label,fixed:!!t.tableOption.fixed&&t.tableOption.fixed,align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.tableOption.options,function(i,l){return a("span",{key:l,staticClass:"operationBtn",on:{click:function(a){t.handleButton(i.type,e.row)}}},[t._v(t._s(i.label))])})}}])}):t._e()],2)},[],!1,null,null,null);e.default=o.exports},LEp5:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"",""])},VDnJ:function(t,e,a){"use strict";var i=a("AhNj");a.n(i).a},ZAdF:function(t,e,a){"use strict";a.r(e);var i={name:"pagination",props:{pageData:{type:Object,required:!0,default:function(){return{totalElements:100,page:1,size:10}}},textAlign:{type:String,default:"right"},pageSizes:{type:Array,default:function(){return[10,15,20,25]}},show:{type:Boolean,default:!0}},data:function(){return{delayed:!0}},methods:{pageChange:function(t){this.delayed&&(this.pageData.page=t,this.$emit("searchFn",{page:this.pageData.page,size:this.pageData.size}))},sizeChange:function(t){var e=this;this.delayed=!1,this.pageData.page=1,this.pageData.size=t,this.$emit("searchFn",{page:this.pageData.page,size:this.pageData.size}),setTimeout(function(){e.delayed=!0},1500)}}},l=(a("f3bq"),a("KHd+")),o=Object(l.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("el-pagination",{style:{"text-align":t.textAlign},attrs:{layout:"total,prev,pager,next,sizes,jumper",total:t.pageData.totalElements||0,"page-sizes":t.pageSizes,"page-size":t.pageData.size,"current-page":t.pageData.page},on:{"size-change":t.sizeChange,"current-change":t.pageChange}}):t._e()},[],!1,null,"2ac751ea",null);e.default=o.exports},f3bq:function(t,e,a){"use strict";var i=a("AJBy");a.n(i).a},htSM:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n[data-v-2ac751ea] .el-select-dropdown__item.selected {\n  color: #0382d9;\n}\n[data-v-2ac751ea] .el-pager li.active {\n  color: #0382d9;\n}\n[data-v-2ac751ea] .el-pagination__sizes .el-input .el-input__inner:hover {\n  color: #0382d9;\n}\n",""])},wjBr:function(t,e,a){"use strict";a.r(e);var i=a("HqQu"),l=a("ZAdF"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},n={components:{tableCmp:i.default,pageComponent:l.default},data:function(){return{form:{tirFormNo:""},pageParam:{totalElements:100,page:1,size:10},rules:{tirFormNo:[{required:!0,message:"请输入TIR单证号",trigger:"change"}]},Cuscd:[{dictionaryKey:"0000",dictionaryValue:"0000 海关总署"},{dictionaryKey:"0001",dictionaryValue:"0001 北京海关"}],tableData:[{tirFormNo:"1333331",iddocNm:"2",iddocDstcd:"王小虎",dclTime:"上海市普陀区金沙江路 1518 弄",dclAddr:"上海市普陀区金沙江路",veTypecd:"上海市普陀区金沙江路",veElctPltno:"上海市普陀区金沙江路"},{tirFormNo:"1321",iddocNm:"2",iddocDstcd:"王小虎",dclTime:"上海市普陀区金沙江路 1518 弄",dclAddr:"上海市普陀区金沙江路",veTypecd:"上海市普陀区金沙江路",veElctPltno:"上海市普陀区金沙江路"}],tableLabel:[{label:"TIR单证号",param:"tirFormNo",width:"200",sortable:!0},{label:"持证人名称",param:"iddocNm",width:"200"},{label:"持证人国家",param:"iddocDstcd",width:"200"},{label:"TIR申报日期",param:"dclTime",width:"200",tooltip:!0},{label:"TIR申报地点",param:"dclAddr",width:"200"},{label:"车辆类型",param:"veTypecd",width:"200"},{label:"车牌号码",param:"veElctPltno",width:"200"}],tableOption:{label:"操作",fixed:"right",options:[{label:"详情",type:"detail"}]}}},methods:{operation:function(t){console.log(t),this.$router.replace("/TIRWEB/queryStatistics/guaranteeHistory/detail")},tirup:function(){return/^([A-Z]{2}[0-9]{8},)*[A-Z]{2}[0-9]{8}$/.test(this.form.tirFormNo)?(console.log("匹配",this.form.tirFormNo),!0):(this.$message({message:"请输入长度为10,前2位是大写字母,后8位是数字的TIR单证号",type:"warning"}),!1)},handleReset:function(t){this.$refs[t].resetFields()},handleSearch:function(t){var e=this,a={};t?(a=o({},t,this.form),this.searchLists(a)):(a=o({page:1,size:10},this.form),this.$refs.form.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.tirup()&&e.searchLists(a)}))},searchLists:function(t){console.log("查询参数",t)}}},r=(a("VDnJ"),a("KHd+")),s=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"query-list"},[a("h3",{staticClass:"page-title"},[t._v("TIR担保历史性信息查询")]),t._v(" "),a("div",{staticClass:"main-content"},[a("div",{staticClass:"query-conditions"},[a("h6",{staticClass:"common-title"},[t._v("查询条件")]),t._v(" "),a("div",{staticClass:"query-form"},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-position":"top"}},[a("el-form-item",{attrs:{label:"TIR单证号",prop:"tirFormNo"}},[a("el-input",{attrs:{maxlength:"10",placeholder:"请输入"},model:{value:t.form.tirFormNo,callback:function(e){t.$set(t.form,"tirFormNo",e)},expression:"form.tirFormNo"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"form-button"},[a("el-button",{on:{click:function(e){t.handleReset("form")}}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleSearch()}}},[t._v("查询")])],1)]),t._v(" "),a("div",{staticClass:"result-list"},[a("h6",{staticClass:"common-title"},[t._v("查询结果")]),t._v(" "),a("div",{staticClass:"result-table"},[[a("tableCmp",{attrs:{"table-data":t.tableData,"table-label":t.tableLabel,"table-option":t.tableOption},on:{operation:t.operation}})]],2),t._v(" "),a("div",{staticClass:"result-table-pagination"},[a("pageComponent",{attrs:{show:t.pageHide,pageData:t.pageParam},on:{searchFn:t.handleSearch}})],1)])])])},[],!1,null,"90cfc7c2",null);e.default=s.exports}}]);