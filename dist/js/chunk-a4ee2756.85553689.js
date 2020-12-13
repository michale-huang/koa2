(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4ee2756"],{"320d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"add-product"},[e("Row",[e("Col",{attrs:{span:"12"}},[e("div",{staticClass:"choose-type"},[t._v(" 选择服务产品类型： "),e("Select",{on:{"on-change":t.goToAddProduct},model:{value:t.productType,callback:function(a){t.productType=a},expression:"productType"}},[e("Option",{attrs:{value:"transport"}},[t._v("运输产品")]),e("Option",{attrs:{value:"site"}},[t._v("场所产品")]),e("Option",{attrs:{value:"customs"}},[t._v("关务产品")]),e("Option",{attrs:{value:"cpa"}},[t._v("综保区产品")])],1)],1)]),e("Col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[e("Button",{attrs:{type:"primary"},on:{click:function(a){return t.saveProduct()}}},[t._v("保存产品")])],1)],1),e("div",{staticClass:"white-bg",staticStyle:{"padding-bottom":"0"}},[e("div",{staticClass:"add-site"},[e("Row",[e("Col",{attrs:{span:"3"}},[e("div",{staticClass:"name"},[t._v("场所:")])]),e("Col",{attrs:{span:"21"}},[e("Form",{ref:"formValidate",attrs:{inline:"",model:t.siteData,rules:t.ruleValidate,"label-colon":!0,"label-position":"left","label-width":100}},[e("FormItem",{attrs:{label:"国家地区",prop:"dispatchSite"}},[e("Select",{model:{value:t.siteData.dispatchCity,callback:function(a){t.$set(t.siteData,"dispatchCity",a)},expression:"siteData.dispatchCity"}},[e("Option",{attrs:{value:"1"}},[t._v("运输产品")]),e("Option",{attrs:{value:"2"}},[t._v("场所产品")]),e("Option",{attrs:{value:"3"}},[t._v("关务产品")]),e("Option",{attrs:{value:"4"}},[t._v("综保区产品")])],1)],1),e("FormItem",{attrs:{label:"场所名称",prop:"destinationSite"}},[e("Select",{model:{value:t.siteData.destinationCity,callback:function(a){t.$set(t.siteData,"destinationCity",a)},expression:"siteData.destinationCity"}},[e("Option",{attrs:{value:"1"}},[t._v("运输产品")]),e("Option",{attrs:{value:"2"}},[t._v("场所产品")]),e("Option",{attrs:{value:"3"}},[t._v("关务产品")]),e("Option",{attrs:{value:"4"}},[t._v("综保区产品")])],1)],1)],1)],1)],1)],1)]),e("div",{staticClass:"white-bg middle-white-bg"},[e("div",{staticClass:"product-list"},[e("div",{staticClass:"product-content only-one"},[e("adt-tab-btns",{staticClass:"scene-tab",attrs:{titleNames:t.sceneTitleNames,isSmallBtn:!0,btnIndex:t.sceneTabIndex},on:{handleBtn:t.handleSceneBtn}}),e("adt-tab-btns",{staticClass:"task-tab",attrs:{titleNames:t.titleNames,isUnderline:!0,btnIndex:t.tabIndex,width:250,height:40},on:{handleBtn:t.handleBtn}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isBasicTask,expression:"isBasicTask"}],staticClass:"basic-item"},[e("Row",{staticClass:"item-container"},[e("Col",{staticClass:"item",attrs:{span:"10"}},[t._v(" 基础服务总费用： "),e("Input",{model:{value:t.cost,callback:function(a){t.cost=t._n(a)},expression:"cost"}}),t._v(" 元/标箱 ")],1),e("Col",{staticClass:"item",attrs:{span:"14"}},[t._v(" 基础服务总时长： "),e("Select",{model:{value:t.time,callback:function(a){t.time=a},expression:"time"}},[e("Option",{attrs:{value:"1"}},[t._v("10")]),e("Option",{attrs:{value:"2"}},[t._v("20")])],1),e("Select",{staticStyle:{width:"80px"},model:{value:t.unit,callback:function(a){t.unit=a},expression:"unit"}},[e("Option",{attrs:{value:"1"}},[t._v("天")]),e("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1),e("adt-task-content",{attrs:{basicTask:t.basicTask,isAdditionalTasks:!1}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isBasicTask,expression:"!isBasicTask"}],staticClass:"additional-item"},[e("h6",[t._v("选择附加任务:")]),e("div",{staticClass:"task-container"},[e("div",{staticClass:"task-item"},[e("Checkbox"),e("div",{staticClass:"task-name"},[t._v("附加任务1")]),e("div",{staticClass:"cost"},[t._v(" 费用： "),e("Input",{model:{value:t.cost,callback:function(a){t.cost=t._n(a)},expression:"cost"}}),t._v(" 元 ")],1),e("div",{staticClass:"time"},[t._v(" 费用： "),e("Select",{model:{value:t.time,callback:function(a){t.time=a},expression:"time"}},[e("Option",{attrs:{value:"1"}},[t._v("10")]),e("Option",{attrs:{value:"2"}},[t._v("20")])],1),e("Select",{staticStyle:{width:"80px"},model:{value:t.unit,callback:function(a){t.unit=a},expression:"unit"}},[e("Option",{attrs:{value:"1"}},[t._v("天")]),e("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1),e("div",{staticClass:"task-item"},[e("Checkbox"),e("div",{staticClass:"task-name"},[t._v("附加任务1")]),e("div",{staticClass:"cost"},[t._v(" 费用： "),e("Input",{model:{value:t.cost,callback:function(a){t.cost=t._n(a)},expression:"cost"}}),t._v(" 元 ")],1),e("div",{staticClass:"time"},[t._v(" 费用： "),e("Select",{model:{value:t.time,callback:function(a){t.time=a},expression:"time"}},[e("Option",{attrs:{value:"1"}},[t._v("10")]),e("Option",{attrs:{value:"2"}},[t._v("20")])],1),e("Select",{staticStyle:{width:"80px"},model:{value:t.unit,callback:function(a){t.unit=a},expression:"unit"}},[e("Option",{attrs:{value:"1"}},[t._v("天")]),e("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1)])]),e("div",{staticClass:"public-component-line thin-line"}),e("Row",{staticClass:"set-dead-line"},[e("Col",{attrs:{span:"10"}},[t._v(" 产品报价截止时间："),e("DatePicker",{attrs:{type:"date"},on:{"on-change":function(t){}}})],1),e("Col",{attrs:{span:"14"}},[t._v(" 产品报价截止时间前几天开始提醒： "),e("Input",{model:{value:t.cost,callback:function(a){t.cost=t._n(a)},expression:"cost"}}),t._v(" 天 ")],1)],1)],1)])]),e("adt-my-modal",{attrs:{title:"选择产品场景",showModal:t.isSceneModalShow},on:{"on-visible-change":t.sceneVisibleChange,"on-ok":function(a){return t.confirmChooseScene()}}},[e("Form",{ref:"deadLineFormValidate",attrs:{inline:"",model:t.deadLineData,rules:t.ruleValidate,"label-colon":!0,"label-position":"left"}},[e("FormItem",[e("CheckboxGroup",{staticClass:"scene-checkbox",model:{value:t.chosenScene,callback:function(a){t.chosenScene=a},expression:"chosenScene"}},t._l(10,(function(a,s){return e("Checkbox",{key:s,attrs:{value:a}},[t._v(t._s("场景"+s))])})),1)],1)],1)],1)],1)},i=[],n=e("9c46"),o=e("3fec"),l=e("b962"),c={mixins:[n["a"]],components:{AdtTaskContent:o["a"]},data:function(){return{deadLineData:{},productType:"cpa",siteData:{dispatchSite:"",destinationSite:""},ruleValidate:{dispatchSite:[l["a"].select("启运地")[0]],destinationSite:[l["a"].select("目的地")[0]]},parameterData:{way:""},selectList:{ids:[]},sceneTitleNames:["场景1","场景2"],cost:"",time:"",unit:"",dispatchLoading:!1,destinationLoading:!1,dispatchOptions:[],destinationOptions:[]}},methods:{handleSceneBtn:function(t){this.sceneTabIndex=++t},dispatchRemoteMethod:function(){},destinationRemoteMethod:function(){},saveProduct:function(){}}},d=c,r=(e("426c"),e("2877")),v=Object(r["a"])(d,s,i,!1,null,"ed8d5284",null);a["default"]=v.exports},"426c":function(t,a,e){"use strict";var s=e("9ffc"),i=e.n(s);i.a},"9ffc":function(t,a,e){}}]);