(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a61bddc"],{5139:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("adt-logistics-route",{attrs:{logisticsRouteList:t.listData}}),s("div",{staticClass:"btn-pagina"},[s("span",{staticClass:"title"},[t._v("推荐物流服务方案")]),s("adt-paginator",{staticClass:"pagination",attrs:{currentPage:~~t.page,total:~~t.total}})],1),s("div",{staticClass:"public-component-line"}),s("div",{staticClass:"public-list"},t._l(t.listData,(function(a,i){return s("div",{key:i,staticClass:"public-component-card"},[s("AdtListItem",{attrs:{logistics:a},on:{checkData:t.checkData}},[s("template",{slot:"tab-title"},[s("span",[t._v("货运要求编号:"+t._s(a.logisticsPlanNumber))])]),s("template",{slot:"tab-operat"},[s("Poptip",{staticClass:"card-icon",attrs:{placement:"right-start"}},[s("span",[t._v("编辑")]),s("Icon",{attrs:{type:"md-arrow-dropdown"}}),s("div",{staticClass:"card-poptip-font",attrs:{slot:"content"},slot:"content"},[s("p",{on:{click:function(s){return t.edit(a)}}},[t._v("编辑")]),s("p",{on:{click:function(s){return t.detail(a)}}},[t._v("详情")]),s("p",{staticClass:"failure",on:{click:function(s){return t.remove(a)}}},[t._v("删除")])])],1)],1),s("template",{slot:"tab-content"},[s("div",{staticClass:"card-route"},t._l(a.location,(function(a,i){return s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-outset"},[t._v(t._s(a.city))]),s("div",{staticClass:"card-transit"},[s("div",{staticClass:"card-way"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{fill:"#FFBB32","xlink:href":"#icon-andaotongcaidanICON_huoche"}})])]),s("div",{staticClass:"card-line"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{fill:"#02ADB5","xlink:href":"#icon-andaotongcaidanICON_jiantou3"}})])]),s("div",{staticClass:"card-genre"},[t._v(t._s(a.type))])])])})),0)]),s("template",{slot:"tab-bottom"},[s("div",{staticClass:"card-bottom"},[s("span",[t._v("时效: "+t._s(a.time))]),s("span"),s("span",{staticClass:"card-right"},[t._v("价格: "+t._s(a.price))])])])],2)],1)})),0)],1)},c=[],n=s("7b46"),e=s("8c1bd"),o=s("b620"),r={mixins:[n["a"]],components:{AdtLogisticsRoute:e["a"],AdtListItem:o["a"]},data:function(){return{search:{},auditStatusList:[{code:"unreviewed",status:"未审核"},{code:"stock",status:"未货好"},{code:"progress",status:"执行中"}],enableStatusList:[{code:"unreviewed",status:"已启用"},{code:"stock",status:"未启用"},{code:"progress",status:"已启用"}],listData:[{statusCode:"disagree",status:"需求未同意",logisticsPlanNumber:"物流方案编号1",time:"时效",price:"价格",location:[{city:"重庆1",transport:"空运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]},{statusCode:"agree",status:"方案已同意",logisticsPlanNumber:"物流方案编号2",time:"时效",price:"价格",location:[{city:"重庆2",transport:"空运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]},{statusCode:"refuse",status:"已拒绝",logisticsPlanNumber:"物流方案编号3",time:"时效",price:"价格",location:[{city:"重庆3",transport:"空运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}]}]}},methods:{dataInit:function(){this.getData()},getData:function(){},add:function(){this.isModalShow=!0},searchChange:function(){},checkData:function(t,a){},edit:function(t){},detail:function(t){},remove:function(t){}}},l=r,d=(s("618c"),s("2877")),u=Object(d["a"])(l,i,c,!1,null,"292ff744",null);a["default"]=u.exports},"618c":function(t,a,s){"use strict";var i=s("d0c2"),c=s.n(i);c.a},d0c2:function(t,a,s){}}]);