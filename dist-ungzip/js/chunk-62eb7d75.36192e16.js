(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62eb7d75"],{"1c37":function(a,s,t){"use strict";t.r(s);var e=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("p",{staticClass:"title"},[a._v("方案基本信息")]),t("AdtSchemeInformationRoute",{attrs:{logistics:a.logistics}},[t("template",{slot:"price"},[t("Row",[t("Col",{attrs:{span:"12"}},[a._v("价格区间：{{}}")]),t("Col",{attrs:{span:"12"}},[a._v("时长区间：{{}}")])],1)],1),t("template",{slot:"service"},[t("div",{staticClass:"service"},[t("p",[t("span",{staticClass:"title"},[a._v("选择代理服务:")]),t("span",[a._v("（没有可选代理服务请联系我们）")])]),t("Row",[t("CheckboxGroup",{model:{value:a.agencyService,callback:function(s){a.agencyService=s},expression:"agencyService"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"8"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[t("span",[a._v("代理服务")]),t("span",[a._v(" 费用："),t("Input",{attrs:{type:"text"}})],1),t("span",{staticClass:"service-price"},[a._v("元")])])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"8"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[t("span",[a._v("代理服务")]),t("span",[a._v(" 费用："),t("Input",{attrs:{type:"text"}})],1),t("span",[a._v("元")])])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"8"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[t("span",[a._v("代理服务")]),t("span",[a._v(" 费用："),t("Input",{attrs:{type:"text"}})],1),t("span",[a._v("元")])])],1)],1)],1)],1),t("Row",{staticClass:"program"},[t("Col",{attrs:{span:"16"}},[t("span",{staticClass:"title"},[a._v("结算汇率:")]),t("RadioGroup",{staticClass:"program-settlement",model:{value:a.exchangeRate,callback:function(s){a.exchangeRate=s},expression:"exchangeRate"}},[t("Radio",{attrs:{label:"金斑蝶"}},[a._v("非固有汇率")]),t("Radio",{staticClass:"program-inherent",attrs:{label:"爪哇犀牛"}},[t("span",[a._v("固有汇率")]),t("Input",{attrs:{type:"text"}})],1)],1)],1),t("Col",{attrs:{span:"8"}},[t("span",{staticClass:"title"},[a._v("方案截止前几天提醒：")]),t("Select",{staticStyle:{width:"185px"},model:{value:a.selectTime,callback:function(s){a.selectTime=s},expression:"selectTime"}},a._l(a.cityList,(function(s){return t("Option",{key:s.value,attrs:{value:s.value}},[a._v(a._s(s.label))])})),1)],1)],1)],1)],2),t("p",{staticClass:"title"},[a._v("产品服务信息")]),t("Card",[t("adt-tab-btns",{attrs:{height:40,width:200,isUnderline:!0,titleNames:a.titleNames,btnIndex:a.changeIndex},on:{handleBtn:a.handleBtn}},[t("Divider")],1),t("Button",{staticClass:"step-save"},[a._v("保存")]),1==a.changeIndex?t("div",{staticClass:"collapse"},[t("Collapse",{attrs:{accordion:""},model:{value:a.value,callback:function(s){a.value=s},expression:"value"}},[t("Panel",{attrs:{name:"1"}},[t("div",{staticClass:"collapse-head"},[t("span",[a._v("重庆")]),t("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{fill:"#02ADB5","xlink:href":"#icon-andaotongcaidanICON_jiantou"}})]),t("span",[a._v("成都")]),t("span",[a._v("展开")])]),t("div",{attrs:{slot:"content"},slot:"content"},[t("Row",[t("Col",{staticClass:"service-provider",attrs:{span:"8"}},[t("div",{staticClass:"service-provider-title"},[t("span",[a._v("选择服务商")])]),t("div",{staticClass:"service-provider-company"},[t("RadioGroup",{model:{value:a.checkAllGroup,callback:function(s){a.checkAllGroup=s},expression:"checkAllGroup"}},[t("Radio",{attrs:{label:"香蕉"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])]),t("Radio",{attrs:{label:"苹果"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])]),t("Radio",{attrs:{label:"西瓜"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])])],1)],1)]),t("Col",{staticClass:"product",attrs:{span:"16"}},[t("div",{staticClass:"product-title"},[a._v("产品编号: {{}}")]),t("adt-tab-btns",{attrs:{isSmallBtn:!0,titleNames:a.titleNamesScenes,btnIndex:a.changeIndexScenes},on:{handleBtn:a.handleBtnScenes}}),t("hr",{staticStyle:{"border-style":"dashed",margin:"10px 0",color:"#E5E5E5"},attrs:{size:"1"}}),t("adt-tab-btns",{staticStyle:{"justify-content":"flex-start"},attrs:{isBaseBtn:!0,titleNames:a.titleNamesTask,btnIndex:a.changeIndexTask,width:200,height:30},on:{handleBtn:a.handleBtnTask}}),1==a.changeIndexTask?t("div",[t("AdtTaskContent",{staticClass:"spacing",attrs:{basicTask:a.basicTask,additionalTasks:a.additionalTasks}})],1):a._e(),2==a.changeIndexTask?t("div",[t("p",{staticClass:"spacing"},[a._v("监控:")]),t("div",{staticClass:"monitor"},[t("div",{staticClass:"monitor-abnormal"},[t("Row",[t("Col",{attrs:{span:"4"}},[a._v("异常1")]),t("Col",{attrs:{span:"6"}},[a._v("异常通知方式：{{}}")]),t("Col",{attrs:{span:"14"}},[a._v("异常通知内容：{{}}")])],1)],1),t("div",{staticClass:"monitor-notice"},[t("p",[t("span",[a._v("异常通知企业：")]),t("span",{staticClass:"monitor-notice-people"},[a._v("添加异常通知人")])]),t("Row",{staticClass:"monitor-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1)]),t("div",{staticClass:"monitor"},[t("div",{staticClass:"monitor-abnormal"},[t("Row",[t("Col",{attrs:{span:"4"}},[a._v("异常1")]),t("Col",{attrs:{span:"6"}},[a._v("异常通知方式：{{}}")]),t("Col",{attrs:{span:"14"}},[a._v("异常通知内容：{{}}")])],1)],1),t("div",{staticClass:"monitor-notice"},[t("p",[t("span",[a._v("异常通知企业：")]),t("span",{staticClass:"monitor-notice-people"},[a._v("添加异常通知人")])]),t("Row",{staticClass:"monitor-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1)])]):a._e(),3==a.changeIndexTask?t("div",[t("div",[t("p",{staticClass:"spacing"},[a._v("协同协作1:")]),t("div",{staticClass:"cooperation"},[t("div",{staticClass:"cooperation-notice"},[t("p",[t("span",[a._v("协同协作方：")]),t("span",{staticClass:"cooperation-notice-people"},[a._v("添加协同协作方")])]),t("Row",{staticClass:"cooperation-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1),t("Row",{staticClass:"cooperation-description"},[t("Col",{attrs:{span:"8"}},[a._v("协同协作方式："+a._s(1122))]),t("Col",{attrs:{span:"16"}},[a._v("协同协作内容："+a._s(3344))])],1)],1)]),t("div",[t("p",{staticClass:"spacing"},[a._v("协同协作2:")]),t("div",{staticClass:"cooperation"},[t("div",{staticClass:"cooperation-notice"},[t("p",[t("span",[a._v("协同协作方：")]),t("span",{staticClass:"cooperation-notice-people"},[a._v("添加协同协作方")])]),t("Row",{staticClass:"cooperation-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1),t("Row",{staticClass:"cooperation-description"},[t("Col",{attrs:{span:"8"}},[a._v("协同协作方式："+a._s(1122))]),t("Col",{attrs:{span:"16"}},[a._v("协同协作内容："+a._s(3344))])],1)],1)])]):a._e()],1)],1)],1)])],1)],1):a._e(),2==a.changeIndex?t("div",{staticClass:"collapse"},[t("Collapse",{attrs:{accordion:""},model:{value:a.value,callback:function(s){a.value=s},expression:"value"}},[t("Panel",{attrs:{name:"1"}},[t("div",{staticClass:"collapse-head"},[t("span",[a._v("重庆")]),t("span",[a._v("展开")])]),t("div",{attrs:{slot:"content"},slot:"content"},[t("Row",[t("Col",{staticClass:"service-provider",attrs:{span:"8"}},[t("div",{staticClass:"service-provider-title"},[t("span",[a._v("选择服务商")])]),t("div",{staticClass:"service-provider-company"},[t("RadioGroup",{model:{value:a.checkAllGroup,callback:function(s){a.checkAllGroup=s},expression:"checkAllGroup"}},[t("Radio",{attrs:{label:"香蕉"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])]),t("Radio",{attrs:{label:"苹果"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])]),t("Radio",{attrs:{label:"西瓜"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])])],1)],1)]),t("Col",{staticClass:"product",attrs:{span:"16"}},[t("div",{staticClass:"product-title"},[a._v("产品编号: {{}}")]),t("adt-tab-btns",{attrs:{isSmallBtn:!0,titleNames:a.titleNamesScenes,btnIndex:a.changeIndexScenes},on:{handleBtn:a.handleBtnScenes}}),t("hr",{staticStyle:{"border-style":"dashed",margin:"10px 0",color:"#E5E5E5"},attrs:{size:"1"}}),t("adt-tab-btns",{staticStyle:{"justify-content":"flex-start"},attrs:{isBaseBtn:!0,titleNames:a.titleNamesTask,btnIndex:a.changeIndexTask,width:200,height:30},on:{handleBtn:a.handleBtnTask}}),1==a.changeIndexTask?t("div",[t("AdtTaskContent",{staticClass:"spacing",attrs:{basicTask:a.basicTask,additionalTasks:a.additionalTasks}})],1):a._e(),2==a.changeIndexTask?t("div",[t("p",{staticClass:"spacing"},[a._v("监控:")]),t("div",{staticClass:"monitor"},[t("div",{staticClass:"monitor-abnormal"},[t("Row",[t("Col",{attrs:{span:"4"}},[a._v("异常1")]),t("Col",{attrs:{span:"6"}},[a._v("异常通知方式：{{}}")]),t("Col",{attrs:{span:"14"}},[a._v("异常通知内容：{{}}")])],1)],1),t("div",{staticClass:"monitor-notice"},[t("p",[t("span",[a._v("异常通知企业：")]),t("span",{staticClass:"monitor-notice-people"},[a._v("添加异常通知人")])]),t("Row",{staticClass:"monitor-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1)]),t("div",{staticClass:"monitor"},[t("div",{staticClass:"monitor-abnormal"},[t("Row",[t("Col",{attrs:{span:"4"}},[a._v("异常1")]),t("Col",{attrs:{span:"6"}},[a._v("异常通知方式：{{}}")]),t("Col",{attrs:{span:"14"}},[a._v("异常通知内容：{{}}")])],1)],1),t("div",{staticClass:"monitor-notice"},[t("p",[t("span",[a._v("异常通知企业：")]),t("span",{staticClass:"monitor-notice-people"},[a._v("添加异常通知人")])]),t("Row",{staticClass:"monitor-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1)])]):a._e(),3==a.changeIndexTask?t("div",[t("div",[t("p",{staticClass:"spacing"},[a._v("协同协作1:")]),t("div",{staticClass:"cooperation"},[t("div",{staticClass:"cooperation-notice"},[t("p",[t("span",[a._v("协同协作方：")]),t("span",{staticClass:"cooperation-notice-people"},[a._v("添加协同协作方")])]),t("Row",{staticClass:"cooperation-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1),t("Row",{staticClass:"cooperation-description"},[t("Col",{attrs:{span:"8"}},[a._v("协同协作方式："+a._s(1122))]),t("Col",{attrs:{span:"16"}},[a._v("协同协作内容："+a._s(3344))])],1)],1)]),t("div",[t("p",{staticClass:"spacing"},[a._v("协同协作2:")]),t("div",{staticClass:"cooperation"},[t("div",{staticClass:"cooperation-notice"},[t("p",[t("span",[a._v("协同协作方：")]),t("span",{staticClass:"cooperation-notice-people"},[a._v("添加协同协作方")])]),t("Row",{staticClass:"cooperation-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1),t("Row",{staticClass:"cooperation-description"},[t("Col",{attrs:{span:"8"}},[a._v("协同协作方式："+a._s(1122))]),t("Col",{attrs:{span:"16"}},[a._v("协同协作内容："+a._s(3344))])],1)],1)])]):a._e()],1)],1)],1)])],1)],1):a._e(),3==a.changeIndex?t("div",{staticClass:"collapse"},[t("Collapse",{attrs:{accordion:""},model:{value:a.value,callback:function(s){a.value=s},expression:"value"}},[t("Panel",{attrs:{name:"1"}},[t("div",{staticClass:"collapse-head"},[t("span",[a._v("重庆")]),t("span",[a._v("展开")])]),t("div",{attrs:{slot:"content"},slot:"content"},[t("Row",[t("Col",{staticClass:"service-provider",attrs:{span:"8"}},[t("div",{staticClass:"service-provider-title"},[t("span",[a._v("选择服务商")])]),t("div",{staticClass:"service-provider-company"},[t("RadioGroup",{model:{value:a.checkAllGroup,callback:function(s){a.checkAllGroup=s},expression:"checkAllGroup"}},[t("Radio",{attrs:{label:"香蕉"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])]),t("Radio",{attrs:{label:"苹果"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])]),t("Radio",{attrs:{label:"西瓜"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])])],1)],1)]),t("Col",{staticClass:"product",attrs:{span:"16"}},[t("div",{staticClass:"product-title"},[a._v("产品编号: {{}}")]),t("adt-tab-btns",{attrs:{isSmallBtn:!0,titleNames:a.titleNamesScenes,btnIndex:a.changeIndexScenes},on:{handleBtn:a.handleBtnScenes}}),t("hr",{staticStyle:{"border-style":"dashed",margin:"10px 0",color:"#E5E5E5"},attrs:{size:"1"}}),t("adt-tab-btns",{staticStyle:{"justify-content":"flex-start"},attrs:{isBaseBtn:!0,titleNames:a.titleNamesTask,btnIndex:a.changeIndexTask,width:200,height:30},on:{handleBtn:a.handleBtnTask}}),1==a.changeIndexTask?t("div",[t("AdtTaskContent",{staticClass:"spacing",attrs:{basicTask:a.basicTask,additionalTasks:a.additionalTasks}})],1):a._e(),2==a.changeIndexTask?t("div",[t("p",{staticClass:"spacing"},[a._v("监控:")]),t("div",{staticClass:"monitor"},[t("div",{staticClass:"monitor-abnormal"},[t("Row",[t("Col",{attrs:{span:"4"}},[a._v("异常1")]),t("Col",{attrs:{span:"6"}},[a._v("异常通知方式：{{}}")]),t("Col",{attrs:{span:"14"}},[a._v("异常通知内容：{{}}")])],1)],1),t("div",{staticClass:"monitor-notice"},[t("p",[t("span",[a._v("异常通知企业：")]),t("span",{staticClass:"monitor-notice-people"},[a._v("添加异常通知人")])]),t("Row",{staticClass:"monitor-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1)]),t("div",{staticClass:"monitor"},[t("div",{staticClass:"monitor-abnormal"},[t("Row",[t("Col",{attrs:{span:"4"}},[a._v("异常1")]),t("Col",{attrs:{span:"6"}},[a._v("异常通知方式：{{}}")]),t("Col",{attrs:{span:"14"}},[a._v("异常通知内容：{{}}")])],1)],1),t("div",{staticClass:"monitor-notice"},[t("p",[t("span",[a._v("异常通知企业：")]),t("span",{staticClass:"monitor-notice-people"},[a._v("添加异常通知人")])]),t("Row",{staticClass:"monitor-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1)])]):a._e(),3==a.changeIndexTask?t("div",[t("div",[t("p",{staticClass:"spacing"},[a._v("协同协作1:")]),t("div",{staticClass:"cooperation"},[t("div",{staticClass:"cooperation-notice"},[t("p",[t("span",[a._v("协同协作方：")]),t("span",{staticClass:"cooperation-notice-people"},[a._v("添加协同协作方")])]),t("Row",{staticClass:"cooperation-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1),t("Row",{staticClass:"cooperation-description"},[t("Col",{attrs:{span:"8"}},[a._v("协同协作方式："+a._s(1122))]),t("Col",{attrs:{span:"16"}},[a._v("协同协作内容："+a._s(3344))])],1)],1)]),t("div",[t("p",{staticClass:"spacing"},[a._v("协同协作2:")]),t("div",{staticClass:"cooperation"},[t("div",{staticClass:"cooperation-notice"},[t("p",[t("span",[a._v("协同协作方：")]),t("span",{staticClass:"cooperation-notice-people"},[a._v("添加协同协作方")])]),t("Row",{staticClass:"cooperation-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1),t("Row",{staticClass:"cooperation-description"},[t("Col",{attrs:{span:"8"}},[a._v("协同协作方式："+a._s(1122))]),t("Col",{attrs:{span:"16"}},[a._v("协同协作内容："+a._s(3344))])],1)],1)])]):a._e()],1)],1)],1)])],1)],1):a._e(),4==a.changeIndex?t("div",{staticClass:"collapse"},[t("Collapse",{attrs:{accordion:""},model:{value:a.value,callback:function(s){a.value=s},expression:"value"}},[t("Panel",{attrs:{name:"1"}},[t("div",{staticClass:"collapse-head"},[t("span",[a._v("重庆")]),t("span",[a._v("展开")])]),t("div",{attrs:{slot:"content"},slot:"content"},[t("Row",[t("Col",{staticClass:"service-provider",attrs:{span:"8"}},[t("div",{staticClass:"service-provider-title"},[t("span",[a._v("选择服务商")])]),t("div",{staticClass:"service-provider-company"},[t("RadioGroup",{model:{value:a.checkAllGroup,callback:function(s){a.checkAllGroup=s},expression:"checkAllGroup"}},[t("Radio",{attrs:{label:"香蕉"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])]),t("Radio",{attrs:{label:"苹果"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])]),t("Radio",{attrs:{label:"西瓜"}},[t("p",{on:{click:a.selectCompany}},[t("span",[a._v("川普公司")]),t("span",{staticClass:"price"},[a._v("基础价格: {{}}")]),t("span",{staticClass:"time"},[a._v("时长: {{}}")])])])],1)],1)]),t("Col",{staticClass:"product",attrs:{span:"16"}},[t("div",{staticClass:"product-title"},[a._v("产品编号: {{}}")]),t("adt-tab-btns",{attrs:{isSmallBtn:!0,titleNames:a.titleNamesScenes,btnIndex:a.changeIndexScenes},on:{handleBtn:a.handleBtnScenes}}),t("hr",{staticStyle:{"border-style":"dashed",margin:"10px 0",color:"#E5E5E5"},attrs:{size:"1"}}),t("adt-tab-btns",{staticStyle:{"justify-content":"flex-start"},attrs:{isBaseBtn:!0,titleNames:a.titleNamesTask,btnIndex:a.changeIndexTask,width:200,height:30},on:{handleBtn:a.handleBtnTask}}),1==a.changeIndexTask?t("div",[t("AdtTaskContent",{staticClass:"spacing",attrs:{basicTask:a.basicTask,additionalTasks:a.additionalTasks}})],1):a._e(),2==a.changeIndexTask?t("div",[t("p",{staticClass:"spacing"},[a._v("监控:")]),t("div",{staticClass:"monitor"},[t("div",{staticClass:"monitor-abnormal"},[t("Row",[t("Col",{attrs:{span:"4"}},[a._v("异常1")]),t("Col",{attrs:{span:"6"}},[a._v("异常通知方式：{{}}")]),t("Col",{attrs:{span:"14"}},[a._v("异常通知内容：{{}}")])],1)],1),t("div",{staticClass:"monitor-notice"},[t("p",[t("span",[a._v("异常通知企业：")]),t("span",{staticClass:"monitor-notice-people"},[a._v("添加异常通知人")])]),t("Row",{staticClass:"monitor-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1)]),t("div",{staticClass:"monitor"},[t("div",{staticClass:"monitor-abnormal"},[t("Row",[t("Col",{attrs:{span:"4"}},[a._v("异常1")]),t("Col",{attrs:{span:"6"}},[a._v("异常通知方式：{{}}")]),t("Col",{attrs:{span:"14"}},[a._v("异常通知内容：{{}}")])],1)],1),t("div",{staticClass:"monitor-notice"},[t("p",[t("span",[a._v("异常通知企业：")]),t("span",{staticClass:"monitor-notice-people"},[a._v("添加异常通知人")])]),t("Row",{staticClass:"monitor-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1)])]):a._e(),3==a.changeIndexTask?t("div",[t("div",[t("p",{staticClass:"spacing"},[a._v("协同协作1:")]),t("div",{staticClass:"cooperation"},[t("div",{staticClass:"cooperation-notice"},[t("p",[t("span",[a._v("协同协作方：")]),t("span",{staticClass:"cooperation-notice-people"},[a._v("添加协同协作方")])]),t("Row",{staticClass:"cooperation-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1),t("Row",{staticClass:"cooperation-description"},[t("Col",{attrs:{span:"8"}},[a._v("协同协作方式："+a._s(1122))]),t("Col",{attrs:{span:"16"}},[a._v("协同协作内容："+a._s(3344))])],1)],1)]),t("div",[t("p",{staticClass:"spacing"},[a._v("协同协作2:")]),t("div",{staticClass:"cooperation"},[t("div",{staticClass:"cooperation-notice"},[t("p",[t("span",[a._v("协同协作方：")]),t("span",{staticClass:"cooperation-notice-people"},[a._v("添加协同协作方")])]),t("Row",{staticClass:"cooperation-company"},[t("CheckboxGroup",{model:{value:a.notifyCompany,callback:function(s){a.notifyCompany=s},expression:"notifyCompany"}},[t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务1"}},[a._v("安道通1")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务2"}},[a._v("安道通2")])],1),t("Col",{staticClass:"service-proxy",attrs:{span:"4"}},[t("Checkbox",{attrs:{label:"代理服务3"}},[a._v("安道通3")])],1)],1)],1)],1),t("Row",{staticClass:"cooperation-description"},[t("Col",{attrs:{span:"8"}},[a._v("协同协作方式："+a._s(1122))]),t("Col",{attrs:{span:"16"}},[a._v("协同协作内容："+a._s(3344))])],1)],1)])]):a._e()],1)],1)],1)])],1)],1):a._e()],1)],1)},o=[],n=t("3fec"),i=t("c161"),l={components:{AdtTaskContent:n["a"],AdtSchemeInformationRoute:i["a"]},data:function(){return{value:"",agencyService:[],exchangeRate:"",selectTime:"",checkAllGroup:"香蕉",changeIndex:1,titleNames:["运输服务","场所服务","关务服务","综保区服务"],titleNamesScenes:["场景1","场景2","场景3"],changeIndexScenes:1,titleNamesTask:["任务","监控设置","协同协作设置"],changeIndexTask:1,indeterminate:!0,checkAll:!1,logistics:[{city:"重庆1",transport:"海运",type:"国内集装箱"},{city:"香港",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"},{city:"纽约",transport:"空运",type:"国内集装箱"}],cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}],basicTask:["基础任务1","基础任务2","基础任务3","基础任务4","基础任务5","基础任务6","基础任务7","基础任务8","基础任务9","基础任务10"],additionalTasks:["附加任务1","附加任务2","附加任务3","附加任务4","附加任务5","附加任务6","附加任务7","附加任务8","附加任务9","附加任务10"],notifyCompany:[]}},methods:{handleBtn:function(a){this.changeIndex=a+1},handleBtnScenes:function(a){this.changeIndexScenes=a+1},handleBtnTask:function(a){this.changeIndexTask=a+1},selectCompany:function(){console.log(123)}}},c=l,p=(t("aa31"),t("4023")),r=Object(p["a"])(c,e,o,!1,null,"b02b5542",null);s["default"]=r.exports},"8ea4":function(a,s,t){},aa31:function(a,s,t){"use strict";var e=t("8ea4"),o=t.n(e);o.a}}]);
//# sourceMappingURL=chunk-62eb7d75.36192e16.js.map