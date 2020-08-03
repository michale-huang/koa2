(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1683a30c"],{"365e":function(t,e,a){},"5aa9":function(t,e,a){"use strict";var s=a("365e"),i=a.n(s);i.a},"5ac5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-product"},[a("Row",[a("Col",{attrs:{span:"12"}},[a("div",{staticClass:"choose-type"},[t._v(" 选择服务产品类型： "),a("Select",{on:{"on-change":t.goToAddProduct},model:{value:t.productType,callback:function(e){t.productType=e},expression:"productType"}},[a("Option",{attrs:{value:"transport"}},[t._v("运输产品")]),a("Option",{attrs:{value:"site"}},[t._v("场所产品")]),a("Option",{attrs:{value:"customs"}},[t._v("关务产品")]),a("Option",{attrs:{value:"cpa"}},[t._v("综保区产品")])],1)],1)]),a("Col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.saveProduct()}}},[t._v("保存产品")])],1)],1),a("div",{staticClass:"white-bg",staticStyle:{"padding-bottom":"0"}},[a("div",{staticClass:"add-site"},[a("Row",[a("Col",{attrs:{span:"3"}},[a("div",{staticClass:"name"},[t._v("报关城市:")])]),a("Col",{attrs:{span:"21"}},[a("Form",{ref:"formValidate",attrs:{inline:"",model:t.siteData,rules:t.ruleValidate,"label-colon":!0,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"国家地区",prop:"dispatchSite"}},[a("Select",{model:{value:t.siteData.dispatchCity,callback:function(e){t.$set(t.siteData,"dispatchCity",e)},expression:"siteData.dispatchCity"}},[a("Option",{attrs:{value:"1"}},[t._v("运输产品")]),a("Option",{attrs:{value:"2"}},[t._v("场所产品")]),a("Option",{attrs:{value:"3"}},[t._v("关务产品")]),a("Option",{attrs:{value:"4"}},[t._v("综保区产品")])],1)],1),a("FormItem",{attrs:{label:"城市",prop:"destinationSite"}},[a("Select",{model:{value:t.siteData.destinationCity,callback:function(e){t.$set(t.siteData,"destinationCity",e)},expression:"siteData.destinationCity"}},[a("Option",{attrs:{value:"1"}},[t._v("运输产品")]),a("Option",{attrs:{value:"2"}},[t._v("场所产品")]),a("Option",{attrs:{value:"3"}},[t._v("关务产品")]),a("Option",{attrs:{value:"4"}},[t._v("综保区产品")])],1)],1),a("FormItem",{attrs:{label:"报关类型",prop:"destinationSite"}},[a("RadioGroup",{on:{"on-change":t.chooseType},model:{value:t.siteData.Radio,callback:function(e){t.$set(t.siteData,"Radio",e)},expression:"siteData.Radio"}},[a("Radio",{attrs:{label:"1"}},[t._v("进口报关")]),a("Radio",{staticStyle:{position:"relative",left:"16px"},attrs:{label:"2"}},[t._v("出口报关")])],1)],1)],1)],1)],1),a("Row",{directives:[{name:"show",rawName:"v-show",value:t.gqShow,expression:"gqShow"}],staticClass:"gq"},[a("Col",{staticClass:"all-checkbox",attrs:{span:"2"}},[a("Checkbox",{on:{"on-change":t.handleChooseAllGq},model:{value:t.allCheckbox,callback:function(e){t.allCheckbox=e},expression:"allCheckbox"}},[t._v("全选")])],1),a("Col",{attrs:{span:"22"}},[a("CheckboxGroup",{staticClass:"gq-checkbox",model:{value:t.checkedGq,callback:function(e){t.checkedGq=e},expression:"checkedGq"}},t._l(20,(function(e,s){return a("Checkbox",{key:s,attrs:{label:e}},[t._v("item")])})),1)],1)],1)],1)]),a("div",{staticClass:"white-bg middle-white-bg"},[a("div",{staticClass:"product-list"},[a("div",{staticClass:"product-content only-one"},[a("adt-tab-btns",{staticClass:"scene-tab",attrs:{titleNames:t.sceneTitleNames,isSmallBtn:!0,btnIndex:t.sceneTabIndex},on:{handleBtn:t.handleSceneBtn}}),a("adt-tab-btns",{staticClass:"task-tab",attrs:{titleNames:t.titleNames,isUnderline:!0,btnIndex:t.tabIndex,width:250,height:40},on:{handleBtn:t.handleBtn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isBasicTask,expression:"isBasicTask"}],staticClass:"basic-item"},[a("Row",{staticClass:"item-container"},[a("Col",{staticClass:"item",attrs:{span:"10"}},[t._v(" 基础服务总费用： "),a("Input",{model:{value:t.cost,callback:function(e){t.cost=t._n(e)},expression:"cost"}}),t._v(" 元/标箱 ")],1),a("Col",{staticClass:"item",attrs:{span:"14"}},[t._v(" 基础服务总时长： "),a("Select",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[a("Option",{attrs:{value:"1"}},[t._v("10")]),a("Option",{attrs:{value:"2"}},[t._v("20")])],1),a("Select",{staticStyle:{width:"80px"},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}},[a("Option",{attrs:{value:"1"}},[t._v("天")]),a("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1),a("adt-task-content",{attrs:{basicTask:t.basicTask,isAdditionalTasks:!1}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isBasicTask,expression:"!isBasicTask"}],staticClass:"additional-item"},[a("h6",[t._v("选择附加任务:")]),a("div",{staticClass:"task-container"},[a("div",{staticClass:"task-item"},[a("Checkbox"),a("div",{staticClass:"task-name"},[t._v("附加任务1")]),a("div",{staticClass:"cost"},[t._v(" 费用： "),a("Input",{model:{value:t.cost,callback:function(e){t.cost=t._n(e)},expression:"cost"}}),t._v(" 元 ")],1),a("div",{staticClass:"time"},[t._v(" 费用： "),a("Select",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[a("Option",{attrs:{value:"1"}},[t._v("10")]),a("Option",{attrs:{value:"2"}},[t._v("20")])],1),a("Select",{staticStyle:{width:"80px"},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}},[a("Option",{attrs:{value:"1"}},[t._v("天")]),a("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1),a("div",{staticClass:"task-item"},[a("Checkbox"),a("div",{staticClass:"task-name"},[t._v("附加任务1")]),a("div",{staticClass:"cost"},[t._v(" 费用： "),a("Input",{model:{value:t.cost,callback:function(e){t.cost=t._n(e)},expression:"cost"}}),t._v(" 元 ")],1),a("div",{staticClass:"time"},[t._v(" 费用： "),a("Select",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[a("Option",{attrs:{value:"1"}},[t._v("10")]),a("Option",{attrs:{value:"2"}},[t._v("20")])],1),a("Select",{staticStyle:{width:"80px"},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}},[a("Option",{attrs:{value:"1"}},[t._v("天")]),a("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1)])])],1)])]),a("div",{staticClass:"white-bg"},[a("Row",{staticClass:"set-dead-line"},[a("Col",{attrs:{span:"10"}},[a("Icon",{attrs:{type:"md-alert"}}),t._v("方案报价截止时间："),a("DatePicker",{attrs:{type:"date"},on:{"on-change":function(t){}}})],1),a("Col",{attrs:{span:"14"}},[t._v(" 提醒时间设置：方案截止时间几天前开始提醒: "),a("Select",{staticStyle:{width:"80px"},model:{value:t.productType.remindTime,callback:function(e){t.$set(t.productType,"remindTime",e)},expression:"productType.remindTime"}},[a("Option",{attrs:{value:"1"}},[t._v("1天")]),a("Option",{attrs:{value:"2"}},[t._v("2天")])],1)],1)],1)],1),a("adt-my-modal",{attrs:{title:"选择产品场景",showModal:t.isSceneModalShow},on:{"on-visible-change":t.sceneVisibleChange,"on-ok":function(e){return t.confirmChooseScene()}}},[a("Form",{ref:"deadLineFormValidate",attrs:{inline:"",model:t.deadLineData,rules:t.ruleValidate,"label-colon":!0,"label-position":"left"}},[a("FormItem",[a("CheckboxGroup",{staticClass:"scene-checkbox",model:{value:t.chosenScene,callback:function(e){t.chosenScene=e},expression:"chosenScene"}},t._l(10,(function(e,s){return a("Checkbox",{key:s,attrs:{value:e}},[t._v(t._s("场景"+s))])})),1)],1)],1)],1)],1)},i=[],n=a("9c46"),o=a("3fec"),l=a("b962"),c={mixins:[n["a"]],components:{AdtTaskContent:o["a"]},data:function(){return{deadLineData:{},productType:"customs",siteData:{dispatchSite:"",destinationSite:""},ruleValidate:{dispatchSite:[l["a"].select("启运地")[0]],destinationSite:[l["a"].select("目的地")[0]]},parameterData:{way:""},selectList:{ids:[]},sceneTitleNames:["场景1","场景2"],cost:"",time:"",unit:"",basicTask:["fdfd","发个施工队"],dispatchLoading:!1,destinationLoading:!1,dispatchOptions:[],destinationOptions:[],chosenScene:[],gqShow:!1,checkedGq:[],allCheckbox:!1}},methods:{handleSceneBtn:function(t){this.sceneTabIndex=++t},dispatchRemoteMethod:function(){},destinationRemoteMethod:function(){},chooseType:function(t){this.gqShow="1"===t},handleChooseAllGq:function(t){this.checkedGq=t?[1,2]:[]},saveProduct:function(){}}},d=c,r=(a("5aa9"),a("4023")),u=Object(r["a"])(d,s,i,!1,null,"a63e80c0",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1683a30c.e3730ef8.js.map