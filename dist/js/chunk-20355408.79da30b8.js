(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20355408"],{4194:function(e,t,n){"use strict";var a=n("1c8b"),o=n("5dfd").find,i=n("258f"),r=n("ff9c"),s="find",u=!0,l=r(s);s in[]&&Array(1)[s]((function(){u=!1})),a({target:"Array",proto:!0,forced:u||!l},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i(s)},"6be1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return l}));var a=n("2934"),o=n("4ec3"),i=function(e){return Object(a["b"])("".concat(o["d"],"/appInfo/appInfoQueryList"),e)},r=function(e){return Object(a["a"])("".concat(o["d"],"/menu/menuInfoQueryByAppCode"),e)},s=function(e){return Object(a["b"])("".concat(o["d"],"/menu/menuInfoAdd"),e)},u=function(e){return Object(a["b"])("".concat(o["d"],"/menu/menuInfoUpdate"),e)},l=function(e){return Object(a["a"])("".concat(o["d"],"/menu/menuInfoDelete"),e)}},"9fe6":function(e,t,n){"use strict";var a=n("eb99"),o=n.n(a);o.a},c8e0:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-permission"},[n("Tree",{attrs:{data:e.treeData,render:e.menuRender,"children-key":"menuInfoList"}}),n("adt-reconfirm-modal",{attrs:{showModal:e.showDeleteModal},on:{"on-visible-change":e.deleteVisibleChange,"on-ok":e.handleDeleteModalOk}}),n("adt-my-modal",{attrs:{showModal:e.showItemModal,title:e.itemTitle},on:{"on-visible-change":e.visibleChange,"on-ok":e.handleItemModalOk}},[n("Form",{ref:"formValidate",attrs:{model:e.itemData,rules:e.ruleValidate,"label-colon":!0,"label-position":"left","label-width":120}},[e.showType?n("FormItem",{attrs:{label:"新增项",prop:"menuType"}},[n("RadioGroup",{on:{"on-change":e.handleChooseType},model:{value:e.itemData.menuType,callback:function(t){e.$set(e.itemData,"menuType",t)},expression:"itemData.menuType"}},[n("Radio",{attrs:{label:"1"}},[e._v(" 菜单项 ")]),n("Radio",{staticStyle:{"margin-left":"30px"},attrs:{label:"2"}},[e._v(" 功能项 ")])],1)],1):e._e(),n("FormItem",{attrs:{label:"名称",prop:"menuName"}},[n("Input",{model:{value:e.itemData.menuName,callback:function(t){e.$set(e.itemData,"menuName",t)},expression:"itemData.menuName"}})],1),n("FormItem",{attrs:{label:"编码code",prop:"menuCode"}},[n("Input",{model:{value:e.itemData.menuCode,callback:function(t){e.$set(e.itemData,"menuCode",t)},expression:"itemData.menuCode"}})],1),n("FormItem",{attrs:{label:"状态",prop:"menuStatus"}},[n("Select",{model:{value:e.itemData.menuStatus,callback:function(t){e.$set(e.itemData,"menuStatus",t)},expression:"itemData.menuStatus"}},[n("Option",{attrs:{value:"enable"}},[e._v("可用")]),n("Option",{attrs:{value:"disable"}},[e._v("不可用")])],1)],1),n("FormItem",{attrs:{label:"页面路由URL",prop:"menuRoute"}},[n("Input",{model:{value:e.itemData.menuRoute,callback:function(t){e.$set(e.itemData,"menuRoute","string"===typeof t?t.trim():t)},expression:"itemData.menuRoute"}})],1)],1)],1)],1)},o=[],i=(n("4194"),n("fe59"),n("ecb4"),n("ea69"),n("e18c"),n("08ba"),n("80a0")),r=n("e24e"),s=n("6be1"),u=n("b962"),l={data:function(){return{itemTitle:"新增项",showItemModal:!1,showDeleteModal:!1,showType:!0,parentData:"",editData:"",deleteData:{root:"",node:"",data:""},itemData:{menuType:"",menuName:"",menuCode:"",menuStatus:"",menuRoute:""},ruleValidate:{menuType:[u["a"].select("新增项")[0]],menuName:[u["a"].required("名称")[0]],menuCode:[u["a"].required("编码code")[0]],menuStatus:[u["a"].required("状态")[0]]},treeData:[]}},created:function(){this.initData()},methods:{initData:function(){var e=this;Object(s["a"])().then((function(t){var n=t.data;e.treeData=[];var a,o=Object(r["a"])(n);try{var i=function(){var t=a.value;t.render=e.appRender,t.menuInfoList=[],e.treeData.push(t),Object(s["d"])({path:t.appCode}).then((function(n){var a=n.data;t.menuInfoList=a,e.recursion(t)}))};for(o.s();!(a=o.n()).done;)i()}catch(u){o.e(u)}finally{o.f()}}))},visibleChange:function(e){this.showItemModal=e},deleteVisibleChange:function(e){this.showDeleteModal=e},recursion:function(e){"2"===e.menuType&&(e.render=this.functionRender);var t=e.menuInfoList;if(t){var n,a=Object(r["a"])(t);try{for(a.s();!(n=a.n()).done;){var o=n.value;this.recursion(o)}}catch(i){a.e(i)}finally{a.f()}}},appRender:function(e,t){var n=this,a=(t.root,t.node,t.data);return e("span",{style:{display:"inline-block",width:"100%"}},[e("span",[e("span",a.appName)]),e("span",{style:{display:"inline-block",float:"right",marginRight:"32px"}},[e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"添加下级"}},[e("Icon",{props:{type:"ios-add"},style:{fontSize:"24px"},on:{click:function(){n.append(a)}}})])])])},menuRender:function(e,t){var n=this,a=t.root,o=t.node,i=t.data;return e("span",{style:{display:"inline-block",width:"100%"}},[e("span",[e("span",i.menuName)]),e("span",{style:{display:"inline-block",float:"right",marginRight:"32px"}},[e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"添加菜单项"}},[e("Icon",{props:{type:"ios-add"},style:{fontSize:"24px"},on:{click:function(){n.append(i)}}})]),e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"编辑菜单项"}},[e("Icon",{props:{type:"md-create"},style:{fontSize:"16px",position:"relative",top:"-3px"},on:{click:function(){n.edit(i)}}})]),e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"删除菜单项"}},[e("Icon",{props:{type:"ios-close"},style:{fontSize:"24px"},on:{click:function(){n.remove(a,o,i)}}})])])])},functionRender:function(e,t){var n=this,a=t.root,o=t.node,i=t.data;return e("span",{style:{display:"inline-block",width:"100%"}},[e("span",[e("span",i.menuName)]),e("span",{style:{display:"inline-block",float:"right",marginRight:"32px"}},[e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"编辑功能"}},[e("Icon",{props:{type:"md-create"},style:{fontSize:"16px",position:"relative",top:"-3px"},on:{click:function(){n.edit(i)}}})]),e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"删除功能"}},[e("Icon",{props:{type:"ios-close"},style:{fontSize:"24px"},on:{click:function(){n.remove(a,o,i)}}})])])])},append:function(e){this.showItemModal=!0,this.parentData=e,this.itemData.menuType="",this.showType=!0,this.itemTitle="新增",this.$refs.formValidate.fields.forEach((function(e){e.resetField()}))},edit:function(e){this.parentData=e,this.showType=!1,this.itemTitle="编辑",this.editData=e,this.itemData.menuType=e.menuType,this.itemData.menuName=e.menuName,this.itemData.menuCode=e.menuCode,this.itemData.menuStatus=e.menuStatus,this.itemData.menuRoute=e.menuRoute,this.showItemModal=!0},handleItemModalOk:function(){var e=this;this.$refs.formValidate.validate((function(t){if(t){var n=new Promise((function(t){if(e.showType){var n=Object(i["a"])(Object(i["a"])({},e.itemData),{appCode:e.parentData.appCode,menuPid:e.parentData.menuId||0});Object(s["c"])({data:n}).then((function(e){e.data;t()}))}else{var a=Object(i["a"])(Object(i["a"])({},e.itemData),{menuId:e.editData.menuId,menuPid:e.editData.menuPid,version:e.editData.version});Object(s["e"])({data:a}).then((function(e){e.data;t()}))}}));n.then((function(){e.showItemModal=!1,e.initData()}))}}))},remove:function(e,t,n){this.showDeleteModal=!0,this.deleteData={root:e,node:t,data:n}},handleDeleteModalOk:function(){var e=this,t=this.deleteData.data.menuId,n=new Promise((function(e){Object(s["b"])({data:t}).then((function(t){t.data;e()}))}));n.then((function(){e.showDeleteModal=!1;var t=e.deleteData.root.find((function(t){return t===e.deleteData.node})).parent,n=e.deleteData.root.find((function(e){return e.nodeKey===t})).node,a=n.menuInfoList.indexOf(e.deleteData.data);n.menuInfoList.splice(a,1)}))},handleChooseType:function(){}}},d=l,c=(n("9fe6"),n("4023")),m=Object(c["a"])(d,a,o,!1,null,"e322c59a",null);t["default"]=m.exports},eb99:function(e,t,n){}}]);
//# sourceMappingURL=chunk-20355408.79da30b8.js.map