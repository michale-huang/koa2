(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-110aba2d"],{1959:function(t,a,s){"use strict";var e=s("febc"),i=s.n(e);i.a},"5a26":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"add-product"},[s("Row",[s("Col",{attrs:{span:"12"}},[s("div",{staticClass:"choose-type"},[t._v(" 产品编号：GHDF8787 ")])]),s("Col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[s("Button",{attrs:{type:"primary"},on:{click:function(a){return t.saveProduct()}}},[t._v("保存产品")])],1)],1),s("div",{staticClass:"white-bg"},["transport"===t.type?s("div",{staticClass:"add-site add-site-detail"},[s("Row",[s("Col",{attrs:{span:"3"}},[s("div",{staticClass:"name"},[t._v("场所：")])]),s("Col",{attrs:{span:"11"}},[t._v(" 启运地：中国重庆 "),s("div",{staticStyle:{display:"inline-block","margin-left":"50px"}},[t._v("场所名称：重庆寸滩")])]),s("Col",{attrs:{span:"10"}},[t._v(" 目的地：中国重庆 "),s("div",{staticStyle:{display:"inline-block","margin-left":"50px"}},[t._v("场所名称：重庆寸滩")])])],1),s("Row",{staticClass:"display-line"},[s("Col",{attrs:{span:"3"}},[s("div",{staticClass:"name"},[t._v("路段展示:")])]),s("Col",{staticClass:"line",attrs:{span:"21"}},[t._v(" 重庆 "),s("svg",{staticClass:"iconfont arrow",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-andaotongcaidanICON_jiantou"}})]),t._v(" 纽约 ")])],1),s("Row",{staticClass:"parameter"},[s("Col",{attrs:{span:"3"}},[s("div",{staticClass:"name"},[t._v("参数:")])]),s("Col",{attrs:{span:"21"}},[s("Row",[s("Col",{attrs:{span:"5"}},[t._v(" 运输方式：铁运 ")]),s("Col",{attrs:{span:"5"}},[t._v(" 运输类型：20 ")]),s("Col",{attrs:{span:"5"}},[t._v(" 物流类型：普柜 ")]),s("Col",{attrs:{span:"5"}},[t._v(" 集装箱来源：普柜 ")]),s("Col",{staticStyle:{"margin-top":"16px"},attrs:{span:"5"}},[t._v(" 集装箱类型：普柜 ")]),s("Col",{staticStyle:{"margin-top":"16px"},attrs:{span:"5"}},[t._v(" 集装箱尺寸：普柜 ")]),s("Col",{staticStyle:{"margin-top":"16px"},attrs:{span:"5"}},[t._v(" 装箱类型：普柜 ")])],1)],1)],1)],1):t._e(),"site"===t.type?s("div",{staticClass:"add-site add-site-detail"},[s("Row",[s("Col",{attrs:{span:"3"}},[s("div",{staticClass:"name"},[t._v("场所：")])]),s("Col",{attrs:{span:"5"}},[t._v(" 国家地区：中国重庆 ")]),s("Col",{attrs:{span:"5"}},[t._v(" 场所名称：重庆寸滩 ")])],1),s("Row",{staticClass:"parameter"},[s("Col",{attrs:{span:"3"}},[s("div",{staticClass:"name"},[t._v("参数:")])]),s("Col",{attrs:{span:"5"}},[t._v(" 运输类型：铁运 ")]),s("Col",{attrs:{span:"5"}},[t._v(" 集装箱尺寸：20 ")]),s("Col",{attrs:{span:"5"}},[t._v(" 集装箱类型：普柜 ")])],1)],1):t._e(),"customs"===t.type?s("div",{staticClass:"add-site add-site-detail"},[s("Row",[s("Col",{attrs:{span:"4"}},[t._v(" 报关类型：进口报关 ")]),s("Col",{attrs:{span:"4"}},[t._v(" 国家地区：中国 ")]),s("Col",{attrs:{span:"4"}},[t._v(" 城市：重庆 ")])],1),s("Row",{directives:[{name:"show",rawName:"v-show",value:t.gqShow,expression:"gqShow"}],staticClass:"gq",staticStyle:{"margin-top":"20px"}},[s("Col",{staticClass:"all-checkbox",attrs:{span:"2"}},[s("Checkbox",{on:{"on-change":t.handleChooseAllGq},model:{value:t.allCheckbox,callback:function(a){t.allCheckbox=a},expression:"allCheckbox"}},[t._v("全选")])],1),s("Col",{attrs:{span:"22"}},[s("CheckboxGroup",{staticClass:"gq-checkbox",model:{value:t.checkedGq,callback:function(a){t.checkedGq=a},expression:"checkedGq"}},t._l(20,(function(a,e){return s("Checkbox",{key:e,attrs:{label:a}},[t._v("item")])})),1)],1)],1)],1):t._e(),"cpa"===t.type?s("div",{staticClass:"add-site add-site-detail"},[s("Row",[s("Col",{attrs:{span:"4"}},[t._v(" 国家地区：中国 ")]),s("Col",{attrs:{span:"10"}},[t._v(" 综保区名称：重庆两江综保区 ")])],1)],1):t._e()]),s("div",{staticClass:"white-bg middle-white-bg"},[s("div",{staticClass:"product-list"},[s("div",{staticClass:"product-content only-one"},[s("adt-tab-btns",{staticClass:"scene-tab",attrs:{titleNames:t.sceneTitleNames,isSmallBtn:!0,btnIndex:t.sceneTabIndex},on:{handleBtn:t.handleSceneBtn}}),s("adt-tab-btns",{staticClass:"task-tab",attrs:{titleNames:t.titleNames,isUnderline:!0,btnIndex:t.tabIndex,width:250,height:40},on:{handleBtn:t.handleBtn}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isBasicTask,expression:"isBasicTask"}],staticClass:"basic-item"},[s("Row",{staticClass:"item-container"},[s("Col",{staticClass:"item",attrs:{span:"10"}},[t._v(" 基础服务总费用： "),s("Input",{model:{value:t.cost,callback:function(a){t.cost=t._n(a)},expression:"cost"}}),t._v(" 元/标箱 ")],1),s("Col",{staticClass:"item",attrs:{span:"14"}},[t._v(" 基础服务总时长： "),s("Select",{model:{value:t.time,callback:function(a){t.time=a},expression:"time"}},[s("Option",{attrs:{value:"1"}},[t._v("10")]),s("Option",{attrs:{value:"2"}},[t._v("20")])],1),s("Select",{staticStyle:{width:"80px"},model:{value:t.unit,callback:function(a){t.unit=a},expression:"unit"}},[s("Option",{attrs:{value:"1"}},[t._v("天")]),s("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1),s("adt-task-content",{attrs:{basicTask:t.basicTask,isAdditionalTasks:!1}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isBasicTask,expression:"!isBasicTask"}],staticClass:"additional-item"},[s("h6",[t._v("选择附加任务:")]),s("div",{staticClass:"task-container"},[s("div",{staticClass:"task-item"},[s("Checkbox"),s("div",{staticClass:"task-name"},[t._v("附加任务1")]),s("div",{staticClass:"cost"},[t._v(" 费用： "),s("Input",{model:{value:t.cost,callback:function(a){t.cost=t._n(a)},expression:"cost"}}),t._v(" 元 ")],1),s("div",{staticClass:"time"},[t._v(" 费用： "),s("Select",{model:{value:t.time,callback:function(a){t.time=a},expression:"time"}},[s("Option",{attrs:{value:"1"}},[t._v("10")]),s("Option",{attrs:{value:"2"}},[t._v("20")])],1),s("Select",{staticStyle:{width:"80px"},model:{value:t.unit,callback:function(a){t.unit=a},expression:"unit"}},[s("Option",{attrs:{value:"1"}},[t._v("天")]),s("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1),s("div",{staticClass:"task-item"},[s("Checkbox"),s("div",{staticClass:"task-name"},[t._v("附加任务1")]),s("div",{staticClass:"cost"},[t._v(" 费用： "),s("Input",{model:{value:t.cost,callback:function(a){t.cost=t._n(a)},expression:"cost"}}),t._v(" 元 ")],1),s("div",{staticClass:"time"},[t._v(" 费用： "),s("Select",{model:{value:t.time,callback:function(a){t.time=a},expression:"time"}},[s("Option",{attrs:{value:"1"}},[t._v("10")]),s("Option",{attrs:{value:"2"}},[t._v("20")])],1),s("Select",{staticStyle:{width:"80px"},model:{value:t.unit,callback:function(a){t.unit=a},expression:"unit"}},[s("Option",{attrs:{value:"1"}},[t._v("天")]),s("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1)])]),s("div",{staticClass:"public-component-line thin-line"}),s("Row",{staticClass:"set-dead-line"},[s("Col",{attrs:{span:"10"}},[t._v(" 产品报价截止时间："),s("DatePicker",{attrs:{type:"date"},on:{"on-change":function(t){}}})],1),s("Col",{attrs:{span:"14"}},[t._v(" 产品报价截止时间前几天开始提醒： "),s("Input",{model:{value:t.cost,callback:function(a){t.cost=t._n(a)},expression:"cost"}}),t._v(" 天 ")],1)],1)],1)])]),s("adt-my-modal",{attrs:{title:"选择产品场景",showModal:t.isSceneModalShow},on:{"on-visible-change":t.sceneVisibleChange,"on-ok":function(a){return t.confirmChooseScene()}}},[s("Form",{ref:"deadLineFormValidate",attrs:{inline:"",model:t.deadLineData,rules:t.ruleValidate,"label-colon":!0,"label-position":"left"}},[s("FormItem",[s("CheckboxGroup",{staticClass:"scene-checkbox",model:{value:t.chosenScene,callback:function(a){t.chosenScene=a},expression:"chosenScene"}},t._l(10,(function(a,e){return s("Checkbox",{key:e,attrs:{value:a}},[t._v(t._s("场景"+e))])})),1)],1)],1)],1)],1)},i=[],n=s("3fec"),o=s("b962"),l={components:{AdtTaskContent:n["a"]},props:["type"],data:function(){return{isModalShow:!1,isSceneModalShow:!1,deadLineData:{},delUrl:function(){},productType:"",siteData:{dispatchSite:"",destinationSite:""},ruleValidate:{dispatchSite:[o["a"].select("启运地")[0]],destinationSite:[o["a"].select("目的地")[0]]},parameterData:{way:""},selectList:{ids:[]},curCollapse:"1",sceneTabIndex:1,tabIndex:1,isBasicTask:!0,sceneTitleNames:["场景1","场景2"],titleNames:["设置基础任务费用时长","设置附加任务费用时长"],cost:"",time:"",unit:"",basicTask:["fdfd","发个施工队"],dispatchLoading:!1,destinationLoading:!1,dispatchOptions:[],destinationOptions:[],chosenScene:[],gqShow:!0}},methods:{visibleChange:function(t){this.isModalShow=t},sceneVisibleChange:function(t){this.isSceneModalShow=t},handleSceneBtn:function(t){},handleBtn:function(t){this.tabIndex=t+1,this.isBasicTask=0===t},confirmSetDeadLine:function(){},confirmChooseScene:function(){},setDeadLine:function(){this.isModalShow=!0},showAllScene:function(){this.isSceneModalShow=!0},saveParameter:function(){var t=this;this.$refs.formValidate.validate((function(a){if(a){t.isSceneModalShow=!0;var s={};api({data:s}).then((function(t){t.data}))}}))},handleReset:function(){this.$refs.parameterFormValidate.resetFields()},dispatchRemoteMethod:function(){},destinationRemoteMethod:function(){}}},c=l,d=(s("1959"),s("4023")),r=Object(d["a"])(c,e,i,!1,null,"5bd378c1",null);a["default"]=r.exports},febc:function(t,a,s){}}]);