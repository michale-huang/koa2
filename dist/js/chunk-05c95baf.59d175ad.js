(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05c95baf"],{3893:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"role"},[e._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"tree"},[a("Tree",{attrs:{data:e.treeData,render:e.positionRender,"children-key":"treeList"},on:{"on-select-change":e.selectChange}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showRoleAccount,expression:"showRoleAccount"}],staticClass:"account"},[a("Table",{attrs:{stripe:"",columns:e.roleAccountColumns,data:e.roleAccountData},scopedSlots:e._u([{key:"phone",fn:function(t){var a=t.row;return[e._v(" "+e._s(a.internationalPhonePrefix+" "+a.phoneNumber)+" ")]}},{key:"accountStatus",fn:function(t){var a=t.row;return[e._v(" "+e._s("enable"===a.accountStatus?"可用":"不可用")+" ")]}}])})],1)]),a("adt-reconfirm-modal",{attrs:{showModal:e.showDeleteModal},on:{"on-visible-change":e.deleteVisibleChange,"on-ok":e.handleDeleteModalOk}}),a("adt-my-modal",{attrs:{showModal:e.showItemModal,title:e.itemTitle,width:"80%"},on:{"on-visible-change":e.visibleChange,"on-ok":e.handleItemModalOk}},[a("Form",{ref:"formValidate",attrs:{model:e.itemData,rules:e.ruleValidate,"label-colon":!0,"label-position":"left","label-width":120}},[e.showType?a("FormItem",{attrs:{label:"新增项",prop:"type"}},[a("RadioGroup",{on:{"on-change":e.changeItem},model:{value:e.itemData.type,callback:function(t){e.$set(e.itemData,"type",t)},expression:"itemData.type"}},[a("Radio",{attrs:{label:"1"}},[e._v(" 岗位 ")]),a("Radio",{staticStyle:{"margin-left":"30px"},attrs:{label:"2"}},[e._v(" 帐户 ")])],1)],1):e._e(),a("div",{staticClass:"line"}),"1"!==e.itemData.type&&e.showType?e._e():[a("FormItem",{attrs:{label:"岗位名称",prop:"roleName"}},[a("Input",{staticStyle:{width:"190px"},model:{value:e.itemData.roleName,callback:function(t){e.$set(e.itemData,"roleName",t)},expression:"itemData.roleName"}})],1),a("FormItem",{attrs:{label:"岗位状态",prop:"roleStatus"}},[a("Select",{staticStyle:{width:"190px"},model:{value:e.itemData.roleStatus,callback:function(t){e.$set(e.itemData,"roleStatus",t)},expression:"itemData.roleStatus"}},[a("Option",{attrs:{value:"enable"}},[e._v("可用")]),a("Option",{attrs:{value:"disable"}},[e._v("不可用")])],1)],1),a("FormItem",{attrs:{label:"岗位类型",prop:"roleType"}},[a("Select",{staticStyle:{width:"190px"},model:{value:e.itemData.roleType,callback:function(t){e.$set(e.itemData,"roleType",t)},expression:"itemData.roleType"}},e._l(e.roleType,(function(t){return a("Option",{key:t.dictionaryKey,attrs:{value:t.dictionaryKey}},[e._v(e._s(t.dictionaryValue))])})),1)],1),a("FormItem",{attrs:{label:"岗位描述",prop:"roleDescribe"}},[a("Input",{staticStyle:{width:"50%"},attrs:{type:"textarea"},model:{value:e.itemData.roleDescribe,callback:function(t){e.$set(e.itemData,"roleDescribe",t)},expression:"itemData.roleDescribe"}})],1)],"2"===e.itemData.type?[a("Table",{attrs:{stripe:"",columns:e.accountColumns,data:e.accountData},on:{"on-selection-change":e.selectAccount},scopedSlots:e._u([{key:"accountType",fn:function(t){var n=t.row,o=t.index;return[a("Select",{on:{"on-change":function(t){return e.chooseAccountType(n,o)}},model:{value:n.accountType,callback:function(t){e.$set(n,"accountType",t)},expression:"row.accountType"}},e._l(e.accountType,(function(t){return a("Option",{key:t.dictionaryKey,attrs:{value:t.dictionaryKey}},[e._v(e._s(t.dictionaryValue))])})),1)]}},{key:"phone",fn:function(t){var a=t.row;return[e._v(" "+e._s(a.internationalPhonePrefix+" "+a.phoneNumber)+" ")]}},{key:"accountStatus",fn:function(t){var a=t.row;return[e._v(" "+e._s("enable"===a.accountStatus?"可用":"不可用")+" ")]}}],null,!1,2826515268)})]:e._e()],2)],1),a("adt-my-modal",{attrs:{showModal:e.showPermissionModal,title:e.permissionTitle},on:{"on-ok":e.handlePermissionModalOk,"on-visible-change":e.permissionVisibleChange}},[a("ul",{staticClass:"position-info"},[a("li",[e._v("岗位名称："+e._s(e.positionInfo.name))]),a("li",[e._v("上级部门："+e._s(e.positionInfo.departmentName))])]),a("Tree",{ref:"permissionTree",staticClass:"permission-tree",attrs:{data:e.permissionData,"show-checkbox":!0,render:e.permissionRender,"children-key":"menuInfoList"}})],1)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"titles"},[a("li",[e._v("公司组织结构")]),a("li",[e._v("岗位帐户")])])}],i=(a("7db0"),a("4160"),a("c975"),a("a434"),a("b0c0"),a("d3b7"),a("ac1f"),a("841c"),a("159b"),a("5530")),c=a("b85c"),r=a("2934"),s=a("4ec3"),l=function(e){return Object(r["a"])("".concat(s["i"],"/organizationInfo/getOrganizationList"),e)},d=function(e){return Object(r["a"])("".concat(s["i"],"/roleInfo/getRoleInfoTree"),e)},u=function(e){return Object(r["c"])("".concat(s["i"],"/roleInfo/addRoleInfo"),e)},p=function(e){return Object(r["c"])("".concat(s["i"],"/roleInfo/modifyRoleInfo"),e)},h=function(e){return Object(r["a"])("".concat(s["i"],"/roleInfo/deleteRoleInfo"),e)},f=function(e){return Object(r["c"])("".concat(s["i"],"/roleAccount/addRoleAccount"),e)},m=function(e){return Object(r["c"])("".concat(s["i"],"/menu/menuInfoQueryByOrganizationIds"),e)},y=function(e){return Object(r["c"])("".concat(s["i"],"/roleMenu/addRoleAndMenu"),e)},v=function(e){return Object(r["c"])("".concat(s["i"],"/account/accountQueryRoleList"),e)},b=function(e){return Object(r["c"])("".concat(s["i"],"/account/accountQueryList"),e)},g=a("b962"),D={data:function(){return{accountType:this.$getDictionary("ACCOUNT_TYPE"),roleType:this.$getDictionary("ROLE_TYPE"),showCheckbox:!1,itemTitle:"新增项",accountTitle:"选择帐户",permissionTitle:"配置岗位权限",showItemModal:!1,showDeleteModal:!1,showAccountModal:!1,showPermissionModal:!1,showType:!0,showRoleAccount:!1,search:{accountName:"",phoneNumber:""},positionInfo:{name:"",departmentName:""},accountData:[],roleAccountData:[],selectedData:[],parentData:"",editData:"",deleteData:{root:"",node:"",data:""},itemData:{type:"",roleName:"",roleStatus:"",roleType:"",roleDescribe:""},ruleValidate:{type:[g["a"].select("新增项")[0]],roleName:[g["a"].required("岗位名称")[0]],roleStatus:[g["a"].select("岗位状态")[0]],roleType:[g["a"].select("岗位类型")[0]],roleDescribe:[g["a"].required("岗位描述")[0]]},treeData:[],permissionData:[],isCompany:!1}},created:function(){this.initData()},computed:{accountColumns:function(){return[{type:"selection",width:60,align:"center"},{title:"用户帐号",key:"accountName",align:"center"},{title:"手机号码",slot:"phone",align:"center"},{title:"邮箱",key:"accountEmail",align:"center"},{title:"状态",slot:"accountStatus",align:"center"},{title:"帐户类型",slot:"accountType",align:"center"},{title:"创建时间",key:"createDatetime",align:"center"},{title:"创建人",key:"createBy",align:"center"}]},roleAccountColumns:function(){return[{title:"用户帐号",key:"accountName",align:"center"},{title:"手机号码",slot:"phone",align:"center"},{title:"邮箱",key:"accountEmail",align:"center"},{title:"状态",slot:"accountStatus",align:"center"},{title:"帐户类型",key:"accountType",align:"center"},{title:"创建时间",key:"createDatetime",align:"center"},{title:"创建人",key:"createBy",align:"center"}]}},methods:{initData:function(){var e=this;l().then((function(t){var a=t.data;e.treeData=[];var n,o=Object(c["a"])(a);try{var i=function(){var t=n.value;t.render=e.companyRender,t.treeList=[],e.treeData.push(t),d({path:t.organizationId}).then((function(e){var a=e.data;t.treeList=a}))};for(o.s();!(n=o.n()).done;)i()}catch(r){o.e(r)}finally{o.f()}}))},visibleChange:function(e){this.showItemModal=e},deleteVisibleChange:function(e){this.showDeleteModal=e},accountVisibleChange:function(e){this.showAccountModal=e},permissionVisibleChange:function(e){this.showPermissionModal=e},companyRender:function(e,t){var a=this,n=(t.root,t.node,t.data);return e("span",{style:{display:"inline-block",width:"100%"}},[e("span",[e("svg",{attrs:{"aria-hidden":!0},style:{width:"16px",height:"16px",marginRight:"8px",position:"relative",top:"3px"}},[e("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_gongsichaxun"}})]),e("span",n.organizationName)]),e("span",{style:{display:"inline-block",float:"right",marginRight:"20px"}},[e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"添加下级"}},[e("Icon",{props:{type:"ios-add"},style:{fontSize:"24px"},on:{click:function(){a.append(n,"company")}}})])])])},positionRender:function(e,t){var a=this,n=t.root,o=t.node,i=t.data;return e("span",{style:{display:"inline-block",width:"100%"}},[e("span",[e("svg",{attrs:{"aria-hidden":!0},style:{width:"16px",height:"16px",marginRight:"8px",position:"relative",top:"3px"}},[e("use",{attrs:{"xlink:href":"#icon-andaotongV3ICON_bumen"}})]),e("span",i.roleName)]),e("span",{style:{display:"inline-block",float:"right",marginRight:"20px"}},[e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"分配权限"}},[e("Icon",{props:{type:"ios-options-outline"},style:{fontSize:"16px",position:"relative",top:"-2px"},on:{click:function(){a.setPermission(n,o,i)}}})]),e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"选择帐户"}},[e("Icon",{props:{type:"ios-add"},style:{fontSize:"24px"},on:{click:function(){a.append(i)}}})]),e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"编辑功能"}},[e("Icon",{props:{type:"md-create"},style:{fontSize:"16px",position:"relative",top:"-3px"},on:{click:function(){a.edit(i)}}})]),e("Poptip",{props:{disabled:!0,trigger:"hover",placement:"bottom",content:"删除功能"}},[e("Icon",{props:{type:"ios-close"},style:{fontSize:"24px"},on:{click:function(){a.remove(n,o,i)}}})])])])},permissionRender:function(e,t){t.root,t.node;var a=t.data;return e("span",{style:{display:"inline-block",width:"100%"}},[e("span",[e("span",a.appName||a.menuName)]),e("span",{style:{display:"inline-block",float:"right",marginRight:"20px"}})])},append:function(e,t){this.$refs.formValidate.fields.forEach((function(e){e.resetField()})),this.itemTitle="新增",this.showItemModal=!0,this.parentData=e,this.itemData.type="",this.showType=!0,t?(this.showType=!1,this.isCompany=!0):this.isCompany=!1},edit:function(e){this.$refs.formValidate.fields.forEach((function(e){e.resetField()})),this.itemTitle="编辑",this.showItemModal=!0,this.editData=e,this.showType=!1,this.itemData.type="",this.itemData.roleName=e.roleName,this.itemData.roleStatus=e.roleStatus,this.itemData.roleType=e.roleType,this.itemData.roleDescribe=e.roleDescribe},handleItemModalOk:function(){var e=this;this.$refs.formValidate.validate((function(t){if(t){var a=new Promise((function(t){if(e.showType||e.isCompany)if("1"===e.itemData.type||e.isCompany){var a=Object(i["a"])(Object(i["a"])({},e.itemData),{organizationId:e.parentData.organizationId,rolePid:e.parentData.roleId||0});delete a.type,u({data:a}).then((function(e){e.data;t()}))}else{var n,o=[e.parentData.roleId,[]],r=o[0],s=o[1],l=Object(c["a"])(e.selectedData);try{for(l.s();!(n=l.n()).done;){var d=n.value;if(!d.accountType)return void e.$Message.warning("请给所有选中的帐户选择帐户类型");s.push({roleId:r,accountId:d.accountId,accountType:d.accountType})}}catch(m){l.e(m)}finally{l.f()}s.length||s.push({roleId:r,accountId:null,accountType:null}),f({data:s}).then((function(e){e.data;t()}))}else{var h=Object(i["a"])(Object(i["a"])({},e.itemData),{roleId:e.editData.roleId,version:e.editData.version,rolePid:e.editData.rolePid});delete h.type,p({data:h}).then((function(e){e.data;t()}))}}));a.then((function(){e.showItemModal=!1,e.initData()}))}}))},remove:function(e,t,a){this.showDeleteModal=!0,this.deleteData={root:e,node:t,data:a}},handleDeleteModalOk:function(){var e=this,t=this.deleteData.data.roleId,a=new Promise((function(e){h({data:t}).then((function(t){t.data;e()}))}));a.then((function(){e.showDeleteModal=!1;var t=e.deleteData.root.find((function(t){return t===e.deleteData.node})).parent,a=e.deleteData.root.find((function(e){return e.nodeKey===t})).node,n=a.treeList.indexOf(e.deleteData.data);a.treeList.splice(n,1)}))},setPermission:function(e,t,a){var n=this;this.parentData=a;var o=e.find((function(e){return e===t})).parent,i=e.find((function(e){return e.nodeKey===o})).node;this.positionInfo.departmentName=i.roleName||i.organizationName,this.positionInfo.name=a.roleName,m({data:{organizationId:a.organizationId,roleId:a.roleId}}).then((function(e){var t=e.data;n.showPermissionModal=!0;var a,o=Object(c["a"])(t[0].menuInfoList);try{for(o.s();!(a=o.n()).done;){var i=a.value;i.checked&&r(i)}}catch(s){o.e(s)}finally{o.f()}function r(e){var t,a=e.menuInfoList||[],n=Object(c["a"])(a);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.checked?r(o):e.checked=!1}}catch(s){n.e(s)}finally{n.f()}}n.permissionData=t}))},handlePermissionModalOk:function(){var e=this,t=[],a=this.$refs.permissionTree.getCheckedAndIndeterminateNodes();if(a.length){var n,o=Object(c["a"])(a);try{for(o.s();!(n=o.n()).done;){var i=n.value;i.menuId&&t.push({roleId:this.parentData.roleId,menuId:i.menuId})}}catch(r){o.e(r)}finally{o.f()}}else t.push({roleId:this.parentData.roleId,menuId:null});y({data:t}).then((function(t){e.showPermissionModal=!1,e.$Message.success(t.message)}))},searchAccount:function(){var e=this;b({data:Object(i["a"])(Object(i["a"])({},this.search),{},{organizationId:this.parentData.organizationId})}).then((function(t){var a=t.data;e.accountData=a.content}))},selectAccount:function(e){this.selectedData=e},chooseAccountType:function(e,t){this.accountData[t]=e;var a,n=Object(c["a"])(this.selectedData);try{for(n.s();!(a=n.n()).done;){var o=a.value;if(o.accountId===e.accountId){o.accountType=e.accountType;break}}}catch(i){n.e(i)}finally{n.f()}},changeItem:function(e){var t=this;"2"===e&&v({data:{organizationId:this.parentData.organizationId,roleId:this.parentData.roleId,size:"100",direction:"desc"}}).then((function(e){var a=e.data;t.selectedData=[];var n,o=a.content.length>0?a.content:[],i=Object(c["a"])(o);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.accountType&&(r._checked=!0,t.selectedData.push({accountId:r.accountId,accountType:r.accountType}))}}catch(s){i.e(s)}finally{i.f()}t.accountData=o,t.showAccountModal=!0}))},getRoleAccount:function(e){},selectChange:function(e,t){var a=this;t.roleId&&(this.showRoleAccount=!0,v({data:{organizationId:t.organizationId,roleId:t.roleId,size:"100",direction:"desc"}}).then((function(e){var t,n=e.data,o=[],i=n.content.length>0?n.content:[],r=Object(c["a"])(i);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(!s.accountType)break;o.push(s)}}catch(l){r.e(l)}finally{r.f()}a.roleAccountData=o})))}}},I=D,w=(a("c3e2"),a("2877")),k=Object(w["a"])(I,n,o,!1,null,"3af49e02",null);t["default"]=k.exports},"7db0":function(e,t,a){"use strict";var n=a("23e7"),o=a("b727").find,i=a("44d2"),c=a("ae40"),r="find",s=!0,l=c(r);r in[]&&Array(1)[r]((function(){s=!1})),n({target:"Array",proto:!0,forced:s||!l},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i(r)},b279:function(e,t,a){},c3e2:function(e,t,a){"use strict";var n=a("b279"),o=a.n(n);o.a}}]);