(window.webpackJsonp=window.webpackJsonp||[]).push([["6df7"],{CwoJ:function(t,e,a){"use strict";a.r(e);var s={title:"TIR关区维护",searchFormData:{tirCuscd:""},addFormData:{tirCuscd:"",tirIsuse:""},addFormRules:{tirCuscd:[{required:!0,message:"请选择海关关区",trigger:"change"}],tirIsuse:[{required:!0,message:"请选择是否启用",trigger:"change"}]},tirIsuseOptions:[{code:"0",name:"否"},{code:"1",name:"是"}],customsOptions:[{code:"0000",name:"总署海关"},{code:"0001",name:"直属海关"}],chosenRowData:[],tableLabel:[{label:"选择",type:"radio",fixed:"left"},{label:"海关关区",param:"tirCuscd"},{label:"是否适用",param:"tirIsuse"}],tableData:[{guid:"1",tirCuscd:"0000",tirIsuse:"1"}],pageParam:{totalElements:100,page:1,size:10},showAddModal:!1,showDelModal:!1,modalType:""},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},l={components:{tableCmp:function(){return a.e("d01a").then(a.bind(null,"HqQu"))},paginationCmp:function(){return a.e("ae1f").then(a.bind(null,"ZAdF"))},confirmModal:function(){return a.e("a691").then(a.bind(null,"6onE"))}},data:function(){return o({},s)},methods:{getListData:function(){o({page:this.pageParam.page,size:this.pageParam.size},this.searchFormData)},handleReset:function(){this.$refs.searchForm.resetFields()},handleSearch:function(){this.getListData()},handleAdd:function(){this.modalType="add",this.showAddModal=!0},handleEdit:function(){if(this.chosenRowData.length){var t=this.chosenRowData[0];this.addFormData.tirCuscd=t.tirCuscd,this.addFormData.tirIsuse=t.tirIsuse,this.modalType="edit",this.showAddModal=!0}else this.$message({message:"请先选择数据！",type:"warning"})},handleAddSure:function(){var t=this;this.$refs.addForm.validate(function(e){if(!e)t.modalType})},handleAddCancel:function(){this.showAddModal=!1,this.resetAddForm()},closeAddModal:function(){this.showAddModal=!1,this.resetAddForm()},resetAddForm:function(){this.$refs.addForm.resetFields()},handleDel:function(){this.chosenRowData.length?this.showDelModal=!0:this.$message({message:"请先选择数据！",type:"warning"})},handleDelSure:function(){var t={guid:this.chosenRowData[0].guid};console.log(t)},searchList:function(){this.getListData()},singleChoice:function(t){this.chosenRowData=[t]}}},i=a("KHd+"),r=Object(i.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"query-list"},[a("h3",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"main-content"},[a("div",{staticClass:"query-conditions"},[a("h6",{staticClass:"common-title"},[t._v("查询条件")]),t._v(" "),a("div",{staticClass:"query-form"},[a("el-form",{ref:"searchForm",attrs:{model:t.searchFormData,"label-position":"top"}},[a("el-form-item",{attrs:{label:"海关关区",prop:"tirCuscd"}},[a("el-select",{model:{value:t.searchFormData.tirCuscd,callback:function(e){t.$set(t.searchFormData,"tirCuscd",e)},expression:"searchFormData.tirCuscd"}},t._l(t.customsOptions,function(t){return a("el-option",{key:t.code,attrs:{label:t.code+" "+t.name,value:t.code}})}))],1)],1)],1),t._v(" "),a("div",{staticClass:"form-button"},[a("el-button",{on:{click:t.handleReset}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查询")])],1)]),t._v(" "),a("div",{staticClass:"result-list"},[a("h6",{staticClass:"common-title"},[t._v("查询结果")]),t._v(" "),a("div",{staticClass:"list-button"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("增加")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleEdit}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger",plain:""},on:{click:t.handleDel}},[t._v("删除")])],1),t._v(" "),a("div",{staticClass:"result-table"},[a("tableCmp",{attrs:{"table-data":t.tableData,"table-label":t.tableLabel},on:{singleChoice:t.singleChoice}})],1),t._v(" "),a("div",{staticClass:"result-table-pagination"},[a("paginationCmp",{attrs:{show:t.pageHide,pageData:t.pageParam},on:{searchFn:t.searchList}})],1)]),t._v(" "),a("confirmModal",{attrs:{showModal:t.showAddModal,title:"add"===t.modalType?"增加":"编辑"},on:{"close-modal":t.closeAddModal}},[a("el-form",{ref:"addForm",attrs:{size:"small","label-position":"top","label-width":"120px",model:t.addFormData,rules:t.addFormRules}},[a("el-form-item",{attrs:{label:"海关关区",prop:"tirCuscd"}},[a("el-select",{model:{value:t.addFormData.tirCuscd,callback:function(e){t.$set(t.addFormData,"tirCuscd",e)},expression:"addFormData.tirCuscd"}},t._l(t.customsOptions,function(t){return a("el-option",{key:t.code,attrs:{label:t.code+" "+t.name,value:t.code}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"是否启用",prop:"tirIsuse"}},[a("el-select",{model:{value:t.addFormData.tirIsuse,callback:function(e){t.$set(t.addFormData,"tirIsuse",e)},expression:"addFormData.tirIsuse"}},t._l(t.tirIsuseOptions,function(t){return a("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}))],1)],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{shape:"circle",type:"primary"},on:{click:t.handleAddSure}},[t._v("确定")]),t._v(" "),a("el-button",{attrs:{shape:"circle"},on:{click:t.handleAddCancel}},[t._v("取消")])],1)],1),t._v(" "),a("confirmModal",{attrs:{showModal:t.showDelModal,title:"删除"},on:{"close-modal":function(e){t.showDelModal=!1}}},[t._v("\n        确定删除所选记录？\n        "),a("div",{staticClass:"modal-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{shape:"circle",type:"primary"},on:{click:t.handleDelSure}},[t._v("确定")]),t._v(" "),a("el-button",{attrs:{shape:"circle"},on:{click:function(e){t.showDelModal=!1}}},[t._v("取消")])],1)])],1)])},[],!1,null,null,null);e.default=r.exports}}]);