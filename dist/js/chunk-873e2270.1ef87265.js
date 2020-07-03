(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-873e2270"],{5669:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-product"},[a("div",{staticClass:"choose-type"},[t._v(" 选择服务产品类型： "),a("Select",{on:{"on-change":t.goToAddProduct},model:{value:t.productType,callback:function(e){t.productType=e},expression:"productType"}},[a("Option",{attrs:{value:"transport"}},[t._v("运输产品")]),a("Option",{attrs:{value:"site"}},[t._v("场所产品")]),a("Option",{attrs:{value:"customs"}},[t._v("关务产品")]),a("Option",{attrs:{value:"cpa"}},[t._v("综保区产品")])],1)],1),a("div",{staticClass:"white-bg"},[a("div",{staticClass:"add-site"},[a("Row",[a("Col",{attrs:{span:"3"}},[a("div",{staticClass:"name"},[t._v("场所:")])]),a("Col",{attrs:{span:"21"}},[a("Form",{ref:"formValidate",attrs:{inline:"",model:t.siteData,rules:t.ruleValidate,"label-colon":!0,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"国家地区",prop:"dispatchSite"}},[a("Select",{model:{value:t.siteData.dispatchCity,callback:function(e){t.$set(t.siteData,"dispatchCity",e)},expression:"siteData.dispatchCity"}},[a("Option",{attrs:{value:"1"}},[t._v("运输产品")]),a("Option",{attrs:{value:"2"}},[t._v("场所产品")]),a("Option",{attrs:{value:"3"}},[t._v("关务产品")]),a("Option",{attrs:{value:"4"}},[t._v("综保区产品")])],1)],1),a("FormItem",{attrs:{label:"场所名称",prop:"destinationSite"}},[a("Select",{model:{value:t.siteData.destinationCity,callback:function(e){t.$set(t.siteData,"destinationCity",e)},expression:"siteData.destinationCity"}},[a("Option",{attrs:{value:"1"}},[t._v("运输产品")]),a("Option",{attrs:{value:"2"}},[t._v("场所产品")]),a("Option",{attrs:{value:"3"}},[t._v("关务产品")]),a("Option",{attrs:{value:"4"}},[t._v("综保区产品")])],1)],1)],1)],1)],1)],1),a("div",{staticClass:"choose-parameter"},[a("h6",{staticStyle:{"margin-top":"0"}},[t._v("选择参数：")]),a("div",{staticClass:"container"},[a("Form",{ref:"parameterFormValidate",attrs:{inline:"",model:t.parameterData,"label-colon":!0,"label-position":"left","label-width":90}},[a("FormItem",{attrs:{label:"运输类型",prop:"transportType"}},[a("Select",{model:{value:t.parameterData.transportType,callback:function(e){t.$set(t.parameterData,"transportType",e)},expression:"parameterData.transportType"}},[a("Option",{attrs:{value:"1"}},[t._v("公路")]),a("Option",{attrs:{value:"2"}},[t._v("铁路")])],1)],1),a("FormItem",{attrs:{label:"集装箱尺寸",prop:"containerSize"}},[a("Select",{model:{value:t.parameterData.containerSize,callback:function(e){t.$set(t.parameterData,"containerSize",e)},expression:"parameterData.containerSize"}},[a("Option",{attrs:{value:"1"}},[t._v("公路")]),a("Option",{attrs:{value:"2"}},[t._v("铁路")])],1)],1),a("FormItem",{attrs:{label:"集装箱类型",prop:"containerType"}},[a("Select",{model:{value:t.parameterData.containerType,callback:function(e){t.$set(t.parameterData,"containerType",e)},expression:"parameterData.containerType"}},[a("Option",{attrs:{value:"1"}},[t._v("公路")]),a("Option",{attrs:{value:"2"}},[t._v("铁路")])],1)],1)],1),a("div",{staticClass:"btns"},[a("Button",{on:{click:function(e){return t.handleReset()}}},[t._v("重置参数")]),a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.generateProduct()}}},[t._v("保存参数生成产品")])],1)],1)]),a("div",{staticClass:"public-component-line"}),a("adt-button",{attrs:{allDelShow:!0,delUrl:t.delUrl,selectList:t.selectList}}),a("div",{staticClass:"product-list public-modify-record"},[a("div",{staticClass:"collapse"},[a("Collapse",{attrs:{accordion:""},model:{value:t.curCollapse,callback:function(e){t.curCollapse=e},expression:"curCollapse"}},[t._l(t.productAllInfo,(function(e,s){return[a("Checkbox",{on:{"on-change":function(a){return t.chooseProduct(e.id,e.checked)}},model:{value:e.checked,callback:function(a){t.$set(e,"checked",a)},expression:"product.checked"}}),a("Panel",{attrs:{name:s+""},on:{click:function(e){t.curCollapse=s}}},[a("Row",[a("Col",{staticClass:"product-number",attrs:{span:"2"}},[t._v(" "+t._s("产品"+(s+1))+" ")]),a("Col",{staticClass:"parameter",attrs:{span:"10"}},[t._v(" 产品参数："+t._s(e.parameters)+" ")]),s===t.productAllInfo.length-1?a("Col",{staticClass:"btns",attrs:{span:"12"}},[a("Button",{attrs:{size:"small"},on:{click:function(a){return a.stopPropagation(),t.saveProduct(e)}}},[t._v("保存产品")])],1):t._e()],1),a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"product-content"},[a("adt-tab-btns",{staticClass:"scene-tab",attrs:{titleNames:e.sceneNames,isSmallBtn:!0,btnIndex:e.sceneTabIndex,productIndex:s},on:{handleBtn:t.handleSceneBtn}}),t._l(e.sceneNames,(function(s,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:s===t.curSceneName||!e.sceneTabIndex&&0===i,expression:"item === curSceneName || (!product.sceneTabIndex && idx === 0)"}],key:i},[a("adt-tab-btns",{staticClass:"task-tab",attrs:{titleNames:t.titleNames,isUnderline:!0,btnIndex:t.tabIndex,width:250,height:40},on:{handleBtn:t.handleBtn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isBasicTask,expression:"isBasicTask"}],staticClass:"basic-item"},[a("Row",{staticClass:"item-container"},[a("Col",{staticClass:"item",attrs:{span:"10"}},[t._v(" 基础服务总费用： "),a("Input",{model:{value:e.scenes[i].basicTask.cost,callback:function(a){t.$set(e.scenes[i].basicTask,"cost",t._n(a))},expression:"product.scenes[idx].basicTask.cost"}}),t._v(" 元/标箱 ")],1),a("Col",{staticClass:"item",attrs:{span:"14"}},[t._v(" 基础服务总时长： "),a("Select",{model:{value:e.scenes[i].basicTask.time,callback:function(a){t.$set(e.scenes[i].basicTask,"time",a)},expression:"product.scenes[idx].basicTask.time"}},[a("Option",{attrs:{value:"1"}},[t._v("10")]),a("Option",{attrs:{value:"2"}},[t._v("20")])],1),a("Select",{staticStyle:{width:"80px"},model:{value:e.scenes[i].basicTask.unit,callback:function(a){t.$set(e.scenes[i].basicTask,"unit",a)},expression:"product.scenes[idx].basicTask.unit"}},[a("Option",{attrs:{value:"1"}},[t._v("天")]),a("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1),a("adt-task-content",{attrs:{basicTask:t.basicTask,isAdditionalTasks:!1}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isBasicTask,expression:"!isBasicTask"}],staticClass:"additional-item"},[a("h6",[t._v("选择附加任务:")]),a("div",{staticClass:"task-container"},[a("div",{staticClass:"task-item"},[a("Checkbox"),a("div",{staticClass:"task-name"},[t._v("附加任务1")]),a("div",{staticClass:"cost"},[t._v(" 费用： "),a("Input",{model:{value:e.scenes[i].additionalTask.cost,callback:function(a){t.$set(e.scenes[i].additionalTask,"cost",t._n(a))},expression:"product.scenes[idx].additionalTask.cost"}}),t._v(" 元 ")],1),a("div",{staticClass:"time"},[t._v(" 时长： "),a("Select",{model:{value:e.scenes[i].additionalTask.time,callback:function(a){t.$set(e.scenes[i].additionalTask,"time",a)},expression:"product.scenes[idx].additionalTask.time"}},[a("Option",{attrs:{value:"1"}},[t._v("10")]),a("Option",{attrs:{value:"2"}},[t._v("20")])],1),a("Select",{staticStyle:{width:"80px"},model:{value:e.scenes[i].additionalTask.unit,callback:function(a){t.$set(e.scenes[i].additionalTask,"unit",a)},expression:"product.scenes[idx].additionalTask.unit"}},[a("Option",{attrs:{value:"1"}},[t._v("天")]),a("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1),a("div",{staticClass:"task-item"},[a("Checkbox"),a("div",{staticClass:"task-name"},[t._v("附加任务1")]),a("div",{staticClass:"cost"},[t._v(" 费用： "),a("Input",{model:{value:t.cost,callback:function(e){t.cost=t._n(e)},expression:"cost"}}),t._v(" 元 ")],1),a("div",{staticClass:"time"},[t._v(" 费用： "),a("Select",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[a("Option",{attrs:{value:"1"}},[t._v("10")]),a("Option",{attrs:{value:"2"}},[t._v("20")])],1),a("Select",{staticStyle:{width:"80px"},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}},[a("Option",{attrs:{value:"1"}},[t._v("天")]),a("Option",{attrs:{value:"2"}},[t._v("小时")])],1)],1)],1)])])],1)}))],2)])],1)]}))],2)],1)])],1),a("adt-my-modal",{attrs:{title:"选择产品场景",showModal:t.isSceneModalShow},on:{"on-visible-change":t.sceneVisibleChange,"on-ok":function(e){return t.confirmChooseScene()}}},[a("Form",{ref:"deadLineFormValidate",attrs:{inline:"",model:t.deadLineData,"label-colon":!0,"label-position":"left"}},[a("FormItem",[a("CheckboxGroup",{staticClass:"scene-checkbox",model:{value:t.chosenScene,callback:function(e){t.chosenScene=e},expression:"chosenScene"}},t._l(10,(function(e,s){return a("Checkbox",{key:s,attrs:{label:e+"~场景"}},[t._v(t._s("场景"+s))])})),1)],1)],1)],1)],1)},i=[],n=a("9c46"),o=a("3fec"),c=a("b962"),l={mixins:[n["a"]],components:{AdtTaskContent:o["a"]},data:function(){return{deadLineData:{},delUrl:function(){},productType:"site",siteData:{dispatchSite:"",destinationSite:""},ruleValidate:{dispatchSite:[c["a"].select("启运地")[0]],destinationSite:[c["a"].select("目的地")[0]]},parameterData:{way:""},cost:"",time:"",unit:"",dispatchLoading:!1,destinationLoading:!1,dispatchOptions:[],destinationOptions:[]}},methods:{confirmSetDeadLine:function(){},setDeadLine:function(){this.isModalShow=!0},showAllScene:function(){this.isSceneModalShow=!0},dispatchRemoteMethod:function(){},destinationRemoteMethod:function(){},saveProduct:function(t){console.log(t)}}},r=l,d=(a("90cb"),a("4023")),u=Object(d["a"])(r,s,i,!1,null,"688357ca",null);e["default"]=u.exports},"90cb":function(t,e,a){"use strict";var s=a("db4f"),i=a.n(s);i.a},"9c46":function(t,e,a){"use strict";a("ecb4"),a("9302"),a("d497"),a("ea69"),a("d575"),a("e35a"),a("0d7a");var s=a("e24e");e["a"]={data:function(){return{isSceneModalShow:!1,titleNames:["设置基础任务费用时长","设置附加任务费用时长"],curSceneName:"",sceneTabIndex:1,tabIndex:1,isBasicTask:!0,basicTask:["fdfd","发个施工队"],chosenScene:[],curCollapse:"",curProductIndex:"",productAllInfo:[{id:"1",sceneTabIndex:0,parameters:"",sceneNames:[],scenes:[{sceneName:"场景1",sceneId:1,basicTask:{},additionalTask:{}}],productDeadLine:{deadLine:"",remindTime:""}}],selectList:{ids:[]}}},methods:{sceneVisibleChange:function(t){this.isSceneModalShow=t},handleSceneBtn:function(t,e,a){this.productAllInfo[a].sceneTabIndex=++t,this.curSceneName=e,this.curProductIndex=a},handleBtn:function(t){this.tabIndex=t+1,this.isBasicTask=0===t},handleReset:function(){this.$refs.parameterFormValidate.resetFields()},generateProduct:function(){var t=this;this.$refs.formValidate.validate((function(e){var a=Object.values(t.parameterData),s=a.some((function(t){return t}));if(s){var i={};for(var n in t.parameterData)i[n]=t.parameterData[n]&&t.parameterData[n].split("~")[0];t.isSceneModalShow=!0}else t.$Message.warning("请先选择参数！")}))},confirmChooseScene:function(){if(this.chosenScene.length){for(var t=[],e=0,a=Object.values(this.parameterData);e<a.length;e++){var i=a[e];i&&t.push(i.split("~")[1])}this.productAllInfo.push({parameters:t.join("+"),productDeadLine:{}});var n,o=[],c=[],l=Object(s["a"])(this.chosenScene);try{for(l.s();!(n=l.n()).done;){var r=n.value,d=[r.split("~")[0],r.split("~")[1]],u=d[0],p=d[1];c.push(u),o.push({sceneName:u,sceneId:p,basicTask:{},additionalTask:{}})}}catch(v){l.e(v)}finally{l.f()}this.productAllInfo[this.productAllInfo.length-1].scenes=o,this.productAllInfo[this.productAllInfo.length-1].sceneNames=c,this.isSceneModalShow=!1}else this.$Message.warning("请至少选择一个场景！")},chooseProduct:function(t,e){var a=this.selectList.ids||[];if(e)a.push(t);else{var s=a.indexOf(t);a.splice(s,1)}this.selectList.ids=a},goToAddProduct:function(t){this.$router.push("/product-editor/add-".concat(t,"-product"))}}}},db4f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-873e2270.1ef87265.js.map