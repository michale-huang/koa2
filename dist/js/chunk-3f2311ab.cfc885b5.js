(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f2311ab"],{"1ebc":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"confirm-freight-request"},[s("div",{staticClass:"public-detail"},[s("div",{staticClass:"important-info"},[s("Row",[s("Col",{attrs:{span:"4"}},[s("div",{staticClass:"name"},[t._v("货运要求")])]),s("Col",{attrs:{span:"6"}},[s("div",{staticClass:"name"},[t._v("货运要求编号：")]),s("div",{staticClass:"content"},[t._v("HJSGSWYQTd")])]),s("Col",{attrs:{span:"14"}},[s("Button",{attrs:{type:"primary"}},[t._v("同意")]),s("Button",{on:{click:t.disagreeClick}},[t._v("不同意")])],1)],1)],1),s("div",{staticClass:"normal-info path-info"},[s("Row",[s("Col",{attrs:{span:"24"}},[s("div",{staticClass:"name"},[t._v("路线：")]),s("ul",{staticClass:"path-list"},t._l(t.pathList,(function(a,e){return s("li",{key:e},[t._v(t._s(a.key.split(",").join("——")))])})),0)])],1)],1)]),s("div",{staticClass:"public-table-content"},[s("div",{staticClass:"l-content"},[s("p",{staticClass:"original-msg"},[t._v("原始录入信息")]),s("div",{staticClass:"table-data"},[s("ul",[s("p",{staticClass:"table-title"},[t._v("服务参数")]),t._l(t.tableData,(function(a,e){return s("li",{key:e},[s("span",{staticClass:"table-key"},[t._v(t._s(a.key))]),s("span",{staticClass:"table-val"},[t._v(t._s(a.value))])])}))],2),s("ul",[s("p",{staticClass:"table-title"},[t._v("运输要求")]),t._l(t.tableData,(function(a,e){return s("li",{key:e},[s("span",{staticClass:"table-key"},[t._v(t._s(a.key))]),s("span",{staticClass:"table-val"},[t._v(t._s(a.value))])])}))],2),s("ul",[s("p",{staticClass:"table-title"},[t._v("货运要求备注")]),t._l(t.tableData,(function(a,e){return s("li",{key:e},[s("span",{staticClass:"table-key"},[t._v(t._s(a.key))]),s("span",{staticClass:"table-val"},[t._v(t._s(a.value))])])}))],2)])]),s("div",{staticClass:"l-content r-content"},[s("p",{staticClass:"original-msg"},[t._v("最终完善信息")]),s("div",{staticClass:"table-data"},[s("ul",[s("p",{staticClass:"table-title"},[t._v("服务参数")]),t._l(t.tableData,(function(a,e){return s("li",{key:e},[s("span",{staticClass:"table-key"},[t._v(t._s(a.key))]),s("span",{staticClass:"table-val"},[t._v(t._s(a.value))])])}))],2),s("ul",[s("p",{staticClass:"table-title"},[t._v("运输要求")]),t._l(t.tableData,(function(a,e){return s("li",{key:e},[s("span",{staticClass:"table-key"},[t._v(t._s(a.key))]),s("span",{staticClass:"table-val"},[t._v(t._s(a.value))])])}))],2),s("ul",{staticClass:"remark"},[s("div",{staticClass:"box"},[s("p",{staticClass:"table-title"},[t._v("货运要求备注")]),t._l(t.tableData2,(function(a,e){return s("li",{key:e},[s("span",{staticClass:"table-key"},[t._v(t._s(a.key))]),s("span",{staticClass:"table-val"},[t._v(t._s(a.value))])])}))],2),s("div",{staticClass:"box addition-task"},[s("p",{staticClass:"table-title"},[t._v("附加任务")]),t._l(t.tableData2,(function(a,e){return s("li",{key:e},[s("span",{staticClass:"table-val",on:{mouseover:function(s){return t.mouseenterHander(a)}}},[t._v(t._s(a.value))])])}))],2)])])])]),s("adt-my-modal",{attrs:{title:"审核不同意",showModal:t.showModal},on:{"on-visible-change":t.visibleChange,"on-ok":t.disagreeConfrim,"on-cancel":t.disagreeCancel}},[s("p",[t._v("不同意原因备注：")]),s("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入原因"},model:{value:t.remark,callback:function(a){t.remark=a},expression:"remark"}})],1)],1)},l=[],i={name:"ConfirmFreightRequest",data:function(){return{showModal:!1,remark:"",pathList:[{key:"重庆,上海,香港,大阪"},{key:"重庆,上海,香港,大阪"},{key:"重庆,上海,香港,大阪"},{key:"重庆,上海,香港,大阪"}],tableData:[{key:"运输类型:",value:"1001"},{key:"商品名称:",value:"篮球"},{key:"集装箱尺寸:",value:"120.00"}],tableData2:[{key:"货运要求备注:",value:"无货运要求备注货运要求备注货运要求备注货运要求备注"}]}},methods:{disagreeClick:function(){this.showModal=!0},visibleChange:function(t){this.showModal=t},disagreeConfrim:function(){},disagreeCancel:function(){this.remark=""},mouseenterHander:function(t){this.$Notice.open({desc:t.value})}}},n=i,c=(s("4f57"),s("4023")),o=Object(c["a"])(n,e,l,!1,null,"278f6677",null);a["default"]=o.exports},"4f57":function(t,a,s){"use strict";var e=s("953b"),l=s.n(e);l.a},"953b":function(t,a,s){}}]);
//# sourceMappingURL=chunk-3f2311ab.cfc885b5.js.map