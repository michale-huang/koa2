(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36743275"],{"35ec":function(t,e,n){"use strict";n.d(e,"x",(function(){return c})),n.d(e,"s",(function(){return s})),n.d(e,"p",(function(){return i})),n.d(e,"u",(function(){return o})),n.d(e,"t",(function(){return u})),n.d(e,"r",(function(){return d})),n.d(e,"q",(function(){return f})),n.d(e,"v",(function(){return l})),n.d(e,"n",(function(){return h})),n.d(e,"o",(function(){return p})),n.d(e,"w",(function(){return b})),n.d(e,"m",(function(){return v})),n.d(e,"h",(function(){return m})),n.d(e,"e",(function(){return g})),n.d(e,"j",(function(){return y})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return O})),n.d(e,"f",(function(){return k})),n.d(e,"k",(function(){return w})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return T})),n.d(e,"l",(function(){return C})),n.d(e,"a",(function(){return N})),n.d(e,"b",(function(){return D}));var a=n("2934"),r=n("4ec3"),c=function(t){return Object(a["b"])("".concat(r["g"],"/transport/query-list"),t)},s=function(t){return Object(a["b"])("".concat(r["g"],"/transport/audit-true"),t)},i=function(t){return Object(a["b"])("".concat(r["g"],"/transport/audit-false"),t)},o=function(t){return Object(a["a"])("".concat(r["g"],"/transport/audit-true/ok"),t)},u=function(t){return Object(a["b"])("".concat(r["g"],"/transport/audit-true/no"),t)},d=function(t){return Object(a["a"])("".concat(r["g"],"/transport/audit-false/ok"),t)},f=function(t){return Object(a["b"])("".concat(r["g"],"/transport/audit-false/no"),t)},l=function(t){return Object(a["b"])("".concat(r["g"],"/transport/pref-price"),t)},h=function(t){return Object(a["a"])("".concat(r["g"],"/transport/add-code"),t)},p=function(t){return Object(a["b"])("".concat(r["g"],"/transport/add-server"),t)},b=function(t){return Object(a["a"])("".concat(r["g"],"/transport/query-detail"),t)},v=function(t){return Object(a["b"])("".concat(r["g"],"/station/query-page"),t)},m=function(t){return Object(a["b"])("".concat(r["g"],"/station/audit-true"),t)},g=function(t){return Object(a["b"])("".concat(r["g"],"/station/audit-false"),t)},y=function(t){return Object(a["a"])("".concat(r["g"],"/station/audit-true/ok"),t)},j=function(t){return Object(a["b"])("".concat(r["g"],"/station/audit-true/no"),t)},O=function(t){return Object(a["a"])("".concat(r["g"],"/station/audit-false/ok"),t)},k=function(t){return Object(a["b"])("".concat(r["g"],"/station/audit-false/no"),t)},w=function(t){return Object(a["b"])("".concat(r["g"],"/station/pref-price"),t)},S=function(t){return Object(a["a"])("".concat(r["g"],"/station/add-code"),t)},T=function(t){return Object(a["b"])("".concat(r["g"],"/station/add-server"),t)},C=function(t){return Object(a["a"])("".concat(r["g"],"/station/query-detail"),t)},N=function(t){return Object(a["b"])("".concat(r["g"],"/server/query-scene"),t)},D=function(t){return Object(a["a"])("".concat(r["g"],"/server/query-task/"),t)}},"9c46":function(t,e,n){"use strict";n("b4fb"),n("ecb4"),n("9302"),n("2eeb"),n("d497"),n("ea69"),n("513c"),n("1b2e"),n("e18c"),n("d575"),n("e35a"),n("0d7a"),n("b449");var a=n("5d83"),r=n("80a0"),c=n("e24e"),s=n("90fe"),i=n("35ec"),o=n("77ab");e["a"]={data:function(){return{isSceneModalShow:!1,titleNames:["设置基础任务费用时长","设置附加任务费用时长"],curSceneName:"",tabIndex:1,isBasicTask:!0,curCollapse:"",curProductIndex:0,productAllInfo:[],selectList:[],isSceneSpread:!1,dictionary:{},sceneName:"",sceneTableData:[{sceneCode:1,sceneName:"场景1"},{sceneCode:2,sceneName:"场景2"}],sceneColumns:[{title:"选择",align:"center",type:"selection",width:100},{title:"场景名称",align:"center",key:"sceneName"},{title:"排序值",align:"center",slot:"sort",width:150}],previewTableData:[],previewColumns:[{title:"序号",align:"center",type:"index",width:100},{title:"场景名称",align:"center",key:"sceneName"},{title:"排序值",align:"center",key:"sort",sortType:"asc",width:150}],selectedData:[],hasPendingProduct:!1}},methods:{sceneVisibleChange:function(t){this.isSceneModalShow=t},handleBtn:function(t){this.tabIndex=t+1,this.isBasicTask=0===t},handleReset:function(){this.$refs.parameterFormValidate.resetFields()},saveParameter:function(){var t=this;if(this.hasPendingProduct)this.$Message.warning("请先保存产品！");else{var e=!0,n=!0;if(this.$refs.formValidate&&this.$refs.formValidate.validate((function(t){e=!!t})),this.$refs.parameterFormValidate&&this.$refs.parameterFormValidate.validate((function(t){n=!!t})),e&&n){var a=function(e){t.hasPendingProduct=!0;var n,a=[],i=[],o=Object(c["a"])(s);try{for(o.s();!(n=o.n()).done;){var d=n.value;d&&a.push(d.split("~")[1])}}catch(l){o.e(l)}finally{o.f()}for(var f in t.siteData)i[f]=t.siteData[f].split("~")[1];t.productAllInfo.unshift(Object(r["a"])({serverCode:e,sceneTabIndex:-1,parameters:a.join("+"),sites:i},u))};if("T"===this.productType&&"C"===this.parameterData.trspType.split("~")[0]&&(!this.parameterData.contaSizeType||!this.parameterData.contaSource))return void this.$Message.warning("运输类型为集装箱，集装箱尺寸类型和集装箱来源必填");var s=Object.values(this.parameterData),o=s.some((function(t){return t}));if(!o)return void this.$Message.warning("请先选择参数！");var u={};for(var d in this.parameterData)u[d]=this.parameterData[d]&&this.parameterData[d].split("~")[0];for(var f in this.siteData)u[f]=this.siteData[f]&&this.siteData[f].split("~")[0];"T"===this.productType?(u.departurePort="".concat(u.dispatchCity,";").concat(u.dispatchSite),u.destinationPort="".concat(u.destinationCity,";").concat(u.destinationSite),delete u.dispatchCity,delete u.dispatchSite,delete u.destinationCity,delete u.destinationSite):"Y"===this.productType&&(u.sttnCode="".concat(u.dispatchCity,";").concat(u.dispatchSite),delete u.dispatchCity,delete u.dispatchSite),"T"===this.productType?Object(i["n"])().then((function(t){var e=t.data;a(e)})):"Y"===this.productType&&Object(i["c"])().then((function(t){var e=t.data;a(e)}))}}},selectionChange:function(t){this.selectedData=t},changeRowData:function(t,e,n){this.sceneTableData[e]=t;var a,r=Object(c["a"])(this.selectedData);try{for(r.s();!(a=r.n()).done;){var s=a.value;if(s.sceneName===t.sceneName){s[n]="sort"===n?Number(t[n]):t[n];break}}}catch(i){r.e(i)}finally{r.f()}},previewSort:function(){this.verifyItem()&&(this.previewTableData=this.selectedData)},verifyItem:function(){if(!this.selectedData.length)return this.$Message.warning("请至少选择一个场景！"),!1;var t,e=[],n=Object(c["a"])(this.selectedData);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(!a.sort&&!Number.isNaN(a.sort))return this.$Message.warning("选中的场景的排序值必填！"),!1;if(!/^\d+$/.test(a.sort))return void this.$Message.warning("排序值只能是整数！");e.push(a.sort)}}catch(r){n.e(r)}finally{n.f()}return!Object(s["c"])(e)||(this.$Message.warning("选中的场景的排序值不能重复！"),!1)},searchScene:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.apiGetScene();case 1:case"end":return e.stop()}}),e)})))()},chooseScene:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.sceneName="",n.next=3,e.apiGetScene();case 3:a=n.sent,a&&(e.curProductIndex=t,e.isSceneModalShow=!0);case 5:case"end":return n.stop()}}),n)})))()},apiGetScene:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.curProductIndex,n={sceneName:this.sceneName,serverType:this.productType,trspType:this.productAllInfo[e].trspType.split("~")[0],logisticsType:this.productAllInfo[e].logisticsType.split("~")[0]};return new Promise((function(e){Object(i["a"])({data:n}).then((function(n){var a=n.data;t.sceneTableData=a,e(!0)}))}))},confirmChooseScene:function(){if(this.verifyItem()){var t,e=[],n=[],a=Object(c["a"])(this.selectedData);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.mutexScene){var s,i=Object(c["a"])(r.mutexScene.split(";"));try{for(i.s();!(s=i.n()).done;){var o,u=s.value,d=Object(c["a"])(this.selectedData);try{for(d.s();!(o=d.n()).done;){var f=o.value;if(u===f.sceneCode)return void this.$Message.warning({content:"".concat(r.sceneName,"不能与").concat(f.sceneName,"同时选择，否则无法创建！"),duration:10,closable:!0})}}catch(C){d.e(C)}finally{d.f()}}}catch(C){i.e(C)}finally{i.f()}}if(r.symbiosisScene){var l,h=Object(c["a"])(r.symbiosisScene.split(";"));try{for(h.s();!(l=h.n()).done;){var p,b=l.value,v=!1,m=Object(c["a"])(this.selectedData);try{for(m.s();!(p=m.n()).done;){var g=p.value;b===g.sceneCode&&(v=!0)}}catch(C){m.e(C)}finally{m.f()}if(!v){var y,j="",O=Object(c["a"])(this.sceneTableData);try{for(O.s();!(y=O.n()).done;){var k=y.value;if(b===k.sceneCode){j=k.sceneName;break}}}catch(C){O.e(C)}finally{O.f()}return void this.$Message.warning({content:"".concat(r.sceneName,"必须要选择").concat(j,"，否则无法创建！"),duration:10,closable:!0})}}}catch(C){h.e(C)}finally{h.f()}}var w=r.sceneName,S=r.sceneCode,T=r.sort;n.push(w),e.push({sceneName:w,sceneCode:S,sort:T,taskBasesList:{},taskAffixesList:[]})}}catch(C){a.e(C)}finally{a.f()}this.$set(this.productAllInfo[this.curProductIndex],"scenesList",e),this.$set(this.productAllInfo[this.curProductIndex],"sceneNames",n),this.$set(this.productAllInfo[this.curProductIndex],"sceneTabIndex",-1),this.curSceneName="",this.isSceneModalShow=!1}},handleSceneBtn:function(t,e,n){this.$set(this.productAllInfo[n],"sceneTabIndex",t+1),this.curSceneName=e,this.curProductIndex=n;var a=this.productAllInfo[n].scenesList[t];a.taskBasesList.lists||Object(i["b"])({sceneCode:a.sceneCode}).then((function(t){var e=t.data;a.taskBasesList.lists=[],a.taskAffixesList=[];var n,r=Object(c["a"])(e.baseTaskQueryRes);try{for(r.s();!(n=r.n()).done;){var s=n.value;a.taskBasesList.lists.push({taskCode:s.taskCode,taskName:s.taskName})}}catch(d){r.e(d)}finally{r.f()}var i,o=Object(c["a"])(e.affixTaskQueryRes);try{for(o.s();!(i=o.n()).done;){var u=i.value;a.taskAffixesList.push({taskCode:u.taskCode,taskName:u.taskName,isChecked:!1})}}catch(d){o.e(d)}finally{o.f()}}))},chooseProduct:function(t,e){if(e)this.selectList.push(t);else{var n=this.selectList.indexOf(t);this.selectList.splice(n,1)}},goToAddProduct:function(t){var e="";switch(t){case"T":e="transport";break;case"Y":e="site";break;case"C":e="customs";break;case"B":e="cpa";break}this.$router.push("/product-editor/add-".concat(e,"-product"))},_handelDir:function(t){return new Promise((function(e){var n=t[t.length-1];Object(o["c"])({city:n}).then((function(t){var n=t.data,a=n&&n.length?n[0]:[],r=a.map((function(t){return{value:t.sttnCode,label:t.sttnName}}));e(r)}))}))}}}}}]);