(window.webpackJsonp=window.webpackJsonp||[]).push([["449c","ae1f","d01a"],{AJBy:function(e,t,n){var a=n("htSM");"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,l);a.locals&&(e.exports=a.locals)},HqQu:function(e,t,n){"use strict";n.r(t);var a={props:{name:"tableCmp",tableData:{type:Array,default:function(){return[]}},tableLabel:{type:Array,default:function(){return[]}},tableOption:{type:Object,default:function(){return{}}}},data:function(){return{templateRadio:""}},components:{},methods:{handleButton:function(e,t){this.$emit("operation",{row:t,methods:e})},handleSelectionChange:function(e){this.$emit("multipleChoice",e)},getTemplateRow:function(e){this.$emit("singleChoice",e)},tableRowClassName:function(e){var t=e.row,n=e.rowIndex;t.rowIndex=n}}},l=n("KHd+"),o=Object(l.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{ref:"table",staticClass:"mytable",staticStyle:{"min-width":"100%"},attrs:{"element-loading-text":"Loading",data:e.tableData,stripe:"",border:"","tooltip-effect":"dark","row-class-name":e.tableRowClassName,height:"100%"},on:{"selection-change":e.handleSelectionChange}},["radio"==e.tableLabel[0].type?e._l(e.tableLabel,function(t,a){return n("el-table-column",{key:a,attrs:{resizable:!1,sortable:!!t.sortable&&t.sortable,fixed:!!t.fixed&&t.fixed,"show-overflow-tooltip":!0,width:t.width?t.width:"radio"==t.type?"60":"",align:t.align?t.align:"center",label:t.label,prop:t.param,type:t.type?t.type:""},scopedSlots:e._u([{key:"default",fn:function(a){return["radio"==t.type?n("el-radio",{attrs:{label:a.row.rowIndex},nativeOn:{change:function(t){e.getTemplateRow(a.row)}},model:{value:e.templateRadio,callback:function(t){e.templateRadio=t},expression:"templateRadio"}}):n("span",[e._v(e._s(a.row[a.column.property]))])]}}])})}):e._e(),e._v(" "),"selection"==e.tableLabel[0].type?e._l(e.tableLabel,function(e,t){return n("el-table-column",{key:t,attrs:{resizable:!1,sortable:!!e.sortable&&e.sortable,fixed:!!e.fixed&&e.fixed,"show-overflow-tooltip":!!e.tooltip&&e.tooltip,width:e.width?e.width:"selection"==e.type?"60":"",align:e.align?e.align:"center",label:e.label,prop:e.param,type:e.type?e.type:""}})}):e._e(),e._v(" "),"selection"!=e.tableLabel[0].type&&"radio"!=e.tableLabel[0].type?e._l(e.tableLabel,function(e,t){return n("el-table-column",{key:t,attrs:{resizable:!1,sortable:!!e.sortable&&e.sortable,fixed:!!e.fixed&&e.fixed,"show-overflow-tooltip":!!e.tooltip&&e.tooltip,width:e.width?e.width:"index"==e.type?"60":"",align:e.align?e.align:"center",label:e.label,prop:e.param,type:e.type?e.type:""}})}):e._e(),e._v(" "),e.tableOption.label?n("el-table-column",{attrs:{resizable:!1,width:e.tableOption.width?e.tableOption.width:"80",label:e.tableOption.label,fixed:!!e.tableOption.fixed&&e.tableOption.fixed,align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.tableOption.options,function(a,l){return n("span",{key:l,staticClass:"operationBtn",on:{click:function(n){e.handleButton(a.type,t.row)}}},[e._v(e._s(a.label))])})}}])}):e._e()],2)},[],!1,null,null,null);t.default=o.exports},ZAdF:function(e,t,n){"use strict";n.r(t);var a={name:"pagination",props:{pageData:{type:Object,required:!0,default:function(){return{totalElements:100,page:1,size:10}}},textAlign:{type:String,default:"right"},pageSizes:{type:Array,default:function(){return[10,15,20,25]}},show:{type:Boolean,default:!0}},data:function(){return{delayed:!0}},methods:{pageChange:function(e){this.delayed&&(this.pageData.page=e,this.$emit("searchFn",{page:this.pageData.page,size:this.pageData.size}))},sizeChange:function(e){var t=this;this.delayed=!1,this.pageData.page=1,this.pageData.size=e,this.$emit("searchFn",{page:this.pageData.page,size:this.pageData.size}),setTimeout(function(){t.delayed=!0},1500)}}},l=(n("f3bq"),n("KHd+")),o=Object(l.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("el-pagination",{style:{"text-align":e.textAlign},attrs:{layout:"total,prev,pager,next,sizes,jumper",total:e.pageData.totalElements||0,"page-sizes":e.pageSizes,"page-size":e.pageData.size,"current-page":e.pageData.page},on:{"size-change":e.sizeChange,"current-change":e.pageChange}}):e._e()},[],!1,null,"2ac751ea",null);t.default=o.exports},ZleH:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},azdO:function(e,t,n){"use strict";var a=n("of64");n.n(a).a},f3bq:function(e,t,n){"use strict";var a=n("AJBy");n.n(a).a},htSM:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n[data-v-2ac751ea] .el-select-dropdown__item.selected {\n  color: #0382d9;\n}\n[data-v-2ac751ea] .el-pager li.active {\n  color: #0382d9;\n}\n[data-v-2ac751ea] .el-pagination__sizes .el-input .el-input__inner:hover {\n  color: #0382d9;\n}\n",""])},of64:function(e,t,n){var a=n("ZleH");"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,l);a.locals&&(e.exports=a.locals)},sUbR:function(e,t,n){"use strict";n.r(t);var a=n("HqQu"),l=n("ZAdF"),o=n("20nU").SERVICEID,i={name:"passTransportationApplyForm",components:{tableCmp:a.default,pagination:l.default},data:function(){return{rules:{competentCustoms:[{required:!0,message:"请选择主管地海关",trigger:"change"}]},pageParam:{totalElements:100,page:1,size:10},options1:[{id:"1",value:"0000",label:"海关总署"}],value1:void 0,value2:void 0,value3:void 0,value4:void 0,formInline:{mtApplyBlNo:void 0,competentCustoms:void 0,dclEtpsTypecd:void 0,embrLdwyblNo:void 0,contaNo:void 0},tableLabel:[{label:"选择",type:"selection",width:"80",fixed:"left"},{label:"序号",type:"index",fixed:"left"},{label:"TIR运输申请单号",param:"mtApplyBlNo",width:"140"},{label:"报文类型",param:"msgTypecd",width:"140"},{label:"主管地海关",param:"ldwyblArvgdStucd",width:"120"},{label:"申报地海关代码",param:"dclPlcCuscd",width:"120"},{label:"申报企业代码",param:"dclEtpsTypecd",width:"120"},{label:"发送时间",param:"sdTime"},{label:"接收时间",param:"rcvTime"},{label:"到货状态",param:"ldwyblArvgdStucd"},{label:"换装状态",param:"ldwyblReloadStucd"},{label:"放行状态",param:"ldwyblRelStucd"},{label:"办结状态",param:"mtTrsfnStucd"}],tableData:[{mtApplyBlNo:"测试"}],tableOption:{label:"操作",width:"100",fixed:"right",options:[{label:"详情",type:"detail"}]}}},methods:{onSubmit:function(e){var t=this.formInline,n=(t.mtApplyBlNo,t.competentCustoms,t.dclEtpsTypecd,t.embrLdwyblNo,t.contaNo,this.value1),a=this.value2,l=this.value3,o=this.value4;console.log(n,a,l,o),this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log("submit")})},Reset:function(e){this.$refs[e].resetFields(),this.value1=void 0,this.value2=void 0,this.value3=void 0,this.value4=void 0},tirN:function(){new RegExp(/^[a-zA-Z0-9]{16,16}$/).test(this.formInline.mtApplyBlNo)||(this.formInline.mtApplyBlNo="",this.$message({message:"请输入16位TIR运输申请单号",type:"warning"}))},codeN:function(){new RegExp(/^[a-zA-Z0-9]{4,4}$/).test(this.formInline.dclEtpsTypecd)||(this.formInline.dclEtpsTypecd="",this.$message({message:"请输入4位关区号",type:"warning"}))},onPrint:function(){this.$print({titleName:this.titleName||"一月份水果价格单",showSortNumber:!0,titleArr:this.titleArr,tableList:this.tableList})},operation:function(e){console.log(e),this.$router.push({path:"/"+o+"/queryStatistics/passTransportationApplyForm/transitDetaill/index"})},multipleChoice:function(e){console.log(e)},singleChoice:function(e){console.log(e)},dataN:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),n=new Date(e);n.setDate(e.getDate()-30);var a=n.getFullYear()+"-"+(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-"+n.getDate();return this.value1=a,this.value2=t,{beginTime:a,endTime:t}}},mounted:function(){this.dataN()}},r=(n("azdO"),n("KHd+")),s=Object(r.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"query-list"},[n("h3",{staticClass:"page-title"},[e._v("过境TIR运输申请单")]),e._v(" "),n("div",{staticClass:"main-content"},[n("div",{staticClass:"query-conditions"},[n("h6",{staticClass:"common-title"},[e._v("查询条件")]),e._v(" "),n("div",{staticClass:"query-form scrollbar-y"},[n("el-form",{ref:"form",attrs:{model:e.formInline,rules:e.rules,"label-position":"top"}},[n("el-form-item",{attrs:{label:"TIR运输申请单号",prop:"mtApplyBlNo"}},[n("el-input",{attrs:{maxlength:"16",clearable:"",placeholder:"请输入"},on:{change:e.tirN},model:{value:e.formInline.mtApplyBlNo,callback:function(t){e.$set(e.formInline,"mtApplyBlNo","string"==typeof t?t.trim():t)},expression:"formInline.mtApplyBlNo"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"主管地海关",prop:"competentCustoms"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.competentCustoms,callback:function(t){e.$set(e.formInline,"competentCustoms",t)},expression:"formInline.competentCustoms"}},e._l(e.options1,function(e){return n("el-option",{key:e.id,attrs:{label:e.value+" "+e.label,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"申报企业代码",prop:"dclEtpsTypecd"}},[n("el-input",{attrs:{maxlength:"4",clearable:"",placeholder:"请输入"},on:{change:e.codeN},model:{value:e.formInline.dclEtpsTypecd,callback:function(t){e.$set(e.formInline,"dclEtpsTypecd","string"==typeof t?t.trim():t)},expression:"formInline.dclEtpsTypecd"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"提（运）单号",prop:"embrLdwyblNo"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.formInline.embrLdwyblNo,callback:function(t){e.$set(e.formInline,"embrLdwyblNo","string"==typeof t?t.trim():t)},expression:"formInline.embrLdwyblNo"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"集装箱（器）编号",prop:"contaNo"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.formInline.contaNo,callback:function(t){e.$set(e.formInline,"contaNo","string"==typeof t?t.trim():t)},expression:"formInline.contaNo"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"接收开始时间",prop:"value1"}},[n("el-date-picker",{attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"接收结束时间",prop:"value2"}},[n("el-date-picker",{attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"进境开始时间",prop:"value3"}},[n("el-date-picker",{attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"进境结束时间",prop:"value4"}},[n("el-date-picker",{attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)],1)],1),e._v(" "),n("div",{staticClass:"form-button"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("查询")]),e._v(" "),n("el-button",{on:{click:function(t){e.Reset("form")}}},[e._v("重置")])],1)]),e._v(" "),n("div",{staticClass:"result-list"},[n("h6",{staticClass:"common-title"},[e._v("查询结果")]),e._v(" "),n("div",{staticClass:"list-button"},[n("el-button",{on:{click:e.onPrint}},[e._v("打印")])],1),e._v(" "),n("div",{staticClass:"result-table"},[n("tableCmp",{attrs:{"table-data":e.tableData,"table-label":e.tableLabel,"table-option":e.tableOption},on:{operation:e.operation,multipleChoice:e.multipleChoice,singleChoice:e.singleChoice}})],1),e._v(" "),n("div",{staticClass:"result-table-pagination"},[n("pagination",{attrs:{pageData:e.pageParam}})],1)])])])},[],!1,null,"e7ff9818",null);t.default=s.exports}}]);