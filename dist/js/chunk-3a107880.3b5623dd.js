(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a107880"],{"125b":function(t,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"a",(function(){return r})),a.d(n,"c",(function(){return s}));var i=a("2934"),e=a("4ec3"),o=function(t){return Object(i["a"])("".concat(e["f"],"/organizationInfo/getOrganizationList"),t)},r=function(t){return Object(i["b"])("".concat(e["f"],"/organizationInfo/addOrganization"),t)},s=function(t){return Object(i["b"])("".concat(e["f"],"/organizationInfo/modifyOrganization"),t)}},"625e":function(t,n,a){"use strict";var i=a("6ff0"),e=a.n(i);e.a},"6ff0":function(t,n,a){},f0dd:function(t,n,a){"use strict";a.r(n);var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"btns-paginator"},[a("AdtButton",{attrs:{allDelShow:!1}},[a("Button",{on:{click:function(n){return t.add()}}},[t._v("新增总公司"),a("Icon",{attrs:{type:"ios-add-circle-outline"}})],1)],1)],1),a("AdtMyModal",{attrs:{title:t.modelTitle,okText:"保存",cancelText:"取消",showModal:t.isModalShow},on:{"on-visible-change":t.addvisibleChange,"on-ok":function(n){return t.save()},"on-cancel":function(n){return t.cancel()}}},[a("Form",{ref:"formItemData",attrs:{model:t.formItem,rules:t.formItemRule,"label-width":100,"label-colon":""}},[a("FormItem",{attrs:{label:"公司名称",prop:"organizationName"}},[a("Input",{model:{value:t.formItem.organizationName,callback:function(n){t.$set(t.formItem,"organizationName",n)},expression:"formItem.organizationName"}})],1)],1)],1),a("Table",{attrs:{columns:t.tableColumns,data:t.tableData,stripe:""},scopedSlots:t._u([{key:"action",fn:function(n){var i=n.row;n.index;return[a("Icon",{staticClass:"icon-action",attrs:{type:"md-create"},on:{click:function(n){return t.edit(i)}}})]}}])})],1)},e=[],o=a("125b"),r={data:function(){return{isModalShow:!1,modelTitle:"",tableColumns:[{title:"公司名称",align:"center",key:"organizationName"},{title:"创建时间",align:"center",key:"createDatetime"},{title:"操作",align:"center",slot:"action"}],tableData:[],formItem:{},formItemRule:{organizationName:[{required:!0,message:"请输入公司名称",trigger:"blur"}]},distinguish:0}},mounted:function(){this.getData()},methods:{addvisibleChange:function(t){this.isModalShow=t},getData:function(){var t=this;Object(o["b"])().then((function(n){200==n.code&&(t.tableData=n.data||[])}))},add:function(){this.isModalShow=!0,this.distinguish=1,this.modelTitle="新增总公司"},save:function(){var t=this;if(1==this.distinguish){var n={organizationPid:0,organizationName:this.formItem.organizationName};this.$refs["formItemData"].validate((function(a){a&&Object(o["a"])({data:n}).then((function(n){200==n.code?(t.$Message.info("保存成功"),t.isModalShow=!1,t.getData()):t.$Message.info("保存失败")}))}))}if(2==this.distinguish){var a={organizationId:this.formItem.organizationId,organizationName:this.formItem.organizationName};this.$refs["formItemData"].validate((function(n){n&&Object(o["c"])({data:a}).then((function(n){200==n.code?(t.$Message.info("保存成功"),t.isModalShow=!1,t.getData()):t.$Message.info("保存失败")}))}))}},cancel:function(){this.isModalShow=!1,this.$refs.formItemData.resetFields(),this.getData()},edit:function(t){this.isModalShow=!0,this.formItem=t,this.distinguish=2,this.modelTitle="编辑总公司"}}},s=r,c=(a("625e"),a("4023")),l=Object(c["a"])(s,i,e,!1,null,"7f75ef33",null);n["default"]=l.exports}}]);