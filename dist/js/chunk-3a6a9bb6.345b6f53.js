(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a6a9bb6"],{"5e6e":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ae-form"},[a("div",{staticClass:"public-form-content"},[a("Form",{ref:"formValidate",attrs:{"label-position":"right","label-width":152,rules:e.formItemRule,model:e.formModel}},[a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:"18"}},[a("Col",{attrs:{span:"8"}},[a("p",{staticClass:"item-form-title"},[e._v("发货人信息")]),a("FormItem",{attrs:{label:"发货人名称：",prop:"FattenName"}},[a("Input",{model:{value:e.formModel.FattenName,callback:function(t){e.$set(e.formModel,"FattenName",t)},expression:"formModel.FattenName"}})],1),a("FormItem",{attrs:{label:"代码："}},[a("Input",{model:{value:e.formModel.Fcode,callback:function(t){e.$set(e.formModel,"Fcode",t)},expression:"formModel.Fcode"}})],1),a("FormItem",{attrs:{label:"地址：",prop:"FattenAddr"}},[a("Input",{model:{value:e.formModel.FattenAddr,callback:function(t){e.$set(e.formModel,"FattenAddr",t)},expression:"formModel.FattenAddr"}})],1),a("FormItem",{attrs:{label:"电话：",prop:"FattenTel"}},[a("Input",{model:{value:e.formModel.FattenTel,callback:function(t){e.$set(e.formModel,"FattenTel",t)},expression:"formModel.FattenTel"}})],1),a("FormItem",{attrs:{label:"传真："}},[a("Input",{model:{value:e.formModel.FattenFax,callback:function(t){e.$set(e.formModel,"FattenFax",t)},expression:"formModel.FattenFax"}})],1),a("FormItem",{attrs:{label:"邮箱："}},[a("Input",{model:{value:e.formModel.FattenEmail,callback:function(t){e.$set(e.formModel,"FattenEmail",t)},expression:"formModel.FattenEmail"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("p",{staticClass:"item-form-title"},[e._v("收货人信息")]),a("FormItem",{attrs:{label:"收货人名称：",prop:"SattenName"}},[a("Input",{model:{value:e.formModel.SattenName,callback:function(t){e.$set(e.formModel,"SattenName",t)},expression:"formModel.SattenName"}})],1),a("FormItem",{attrs:{label:"代码："}},[a("Input",{model:{value:e.formModel.Scode,callback:function(t){e.$set(e.formModel,"Scode",t)},expression:"formModel.Scode"}})],1),a("FormItem",{attrs:{label:"地址：",prop:"SattenAddr"}},[a("Input",{model:{value:e.formModel.SattenAddr,callback:function(t){e.$set(e.formModel,"SattenAddr",t)},expression:"formModel.SattenAddr"}})],1),a("FormItem",{attrs:{label:"电话：",prop:"SattenTel"}},[a("Input",{model:{value:e.formModel.SattenTel,callback:function(t){e.$set(e.formModel,"SattenTel",t)},expression:"formModel.SattenTel"}})],1),a("FormItem",{attrs:{label:"传真："}},[a("Input",{model:{value:e.formModel.SattenFax,callback:function(t){e.$set(e.formModel,"SattenFax",t)},expression:"formModel.SattenFax"}})],1),a("FormItem",{attrs:{label:"邮箱："}},[a("Input",{model:{value:e.formModel.SattenEmail,callback:function(t){e.$set(e.formModel,"SattenEmail",t)},expression:"formModel.SattenEmail"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("p",{staticClass:"item-form-title"},[e._v("通知人信息")]),a("FormItem",{attrs:{label:"通知人名称：",prop:"TattenName"}},[a("Input",{model:{value:e.formModel.TattenName,callback:function(t){e.$set(e.formModel,"TattenName",t)},expression:"formModel.TattenName"}})],1),a("FormItem",{attrs:{label:"代码："}},[a("Input",{model:{value:e.formModel.Tcode,callback:function(t){e.$set(e.formModel,"Tcode",t)},expression:"formModel.Tcode"}})],1),a("FormItem",{attrs:{label:"地址：",prop:"TattenAddr"}},[a("Input",{model:{value:e.formModel.TattenAddr,callback:function(t){e.$set(e.formModel,"TattenAddr",t)},expression:"formModel.TattenAddr"}})],1),a("FormItem",{attrs:{label:"电话：",prop:"TattenTel"}},[a("Input",{model:{value:e.formModel.TattenTel,callback:function(t){e.$set(e.formModel,"TattenTel",t)},expression:"formModel.TattenTel"}})],1),a("FormItem",{attrs:{label:"传真："}},[a("Input",{model:{value:e.formModel.TattenFax,callback:function(t){e.$set(e.formModel,"TattenFax",t)},expression:"formModel.TattenFax"}})],1),a("FormItem",{attrs:{label:"邮箱：",prop:"TattenEmail"}},[a("Input",{model:{value:e.formModel.TattenEmail,callback:function(t){e.$set(e.formModel,"TattenEmail",t)},expression:"formModel.TattenEmail"}})],1)],1)],1),a("Col",{attrs:{span:"6"}},[a("p",{staticClass:"item-form-title"},[e._v("服务参数")]),a("FormItem",{attrs:{label:"运输类型：",prop:"trspType"}},[a("Input",{model:{value:e.planForm.trspType,callback:function(t){e.$set(e.planForm,"trspType",t)},expression:"planForm.trspType"}})],1),a("FormItem",{attrs:{label:"集装箱尺寸："}},[a("Input",{model:{value:e.planForm.contaSize,callback:function(t){e.$set(e.planForm,"contaSize",t)},expression:"planForm.contaSize"}})],1),a("FormItem",{attrs:{label:"集装箱来源："}},[a("Input",{model:{value:e.planForm.containerSource,callback:function(t){e.$set(e.planForm,"containerSource",t)},expression:"planForm.containerSource"}})],1),a("FormItem",{attrs:{label:"合同委托有效期：",prop:"cargoTotal"}},[a("DatePicker",{attrs:{type:"datetimerange",placeholder:"Select date"},model:{value:e.timeArr,callback:function(t){e.timeArr=t},expression:"timeArr"}})],1),a("FormItem",{attrs:{label:"货物总量：",prop:"cargoTotal"}},[a("Input",{model:{value:e.formModel.cargoTotal,callback:function(t){e.$set(e.formModel,"cargoTotal",t)},expression:"formModel.cargoTotal"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("kg")])])],1),e._l(1,(function(t,o){return a("FormItem",{key:o,staticClass:"jz-meaningless"},[a("template",{slot:"label"},[e._v("无意义")]),a("Input",{attrs:{disabled:""}})],2)}))],2)],1),a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:"18"}},[a("p",{staticClass:"item-form-title"},[e._v("货物信息")]),a("div",{staticClass:"public-line"}),a("div",{staticClass:"scroll-box"},[a("cargo-info",{on:{cargoInfoItem:e.cargoInfoItem}},[a("template",{slot:"btns-end"},[a("span",[e._v("货物类型：")]),a("span",[e._v(e._s(e.planForm.cargoType))])])],2)],1)]),a("Col",{attrs:{span:"6"}},[a("p",{staticClass:"item-form-title"},[e._v("运输要求")]),a("FormItem",{attrs:{label:"主要运输方式："}},[a("Input",{model:{value:e.planForm.trspMode,callback:function(t){e.$set(e.planForm,"trspMode",t)},expression:"planForm.trspMode"}})],1),a("FormItem",{attrs:{label:"物流类型："}},[a("Input",{model:{value:e.planForm.logisticsType,callback:function(t){e.$set(e.planForm,"logisticsType",t)},expression:"planForm.logisticsType"}})],1),a("FormItem",{attrs:{label:"提箱类型："}},[a("Input",{model:{value:e.planForm.suitcaseType,callback:function(t){e.$set(e.planForm,"suitcaseType",t)},expression:"planForm.suitcaseType"}})],1),a("FormItem",{attrs:{label:"集装箱数量："}},[a("Input",{model:{value:e.planForm.suitcaseQty,callback:function(t){e.$set(e.planForm,"suitcaseQty",t)},expression:"planForm.suitcaseQty"}})],1),a("FormItem",{attrs:{label:"货物适宜温度："}},[a("Input",{model:{value:e.planForm.setTemperatureAt,callback:function(t){e.$set(e.planForm,"setTemperatureAt",t)},expression:"planForm.setTemperatureAt"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("℃")])])],1),a("FormItem",{attrs:{label:"出口报关地："}},[a("Input",{model:{value:e.planForm.exPort,callback:function(t){e.$set(e.planForm,"exPort",t)},expression:"planForm.exPort"}})],1),a("FormItem",{attrs:{label:"进口报关地："}},[a("Input",{model:{value:e.planForm.imPort,callback:function(t){e.$set(e.planForm,"imPort",t)},expression:"planForm.imPort"}})],1),a("FormItem",{attrs:{label:"最迟启运时间："}},[a("DatePicker",{attrs:{type:"datetime",placeholder:"Select date"},model:{value:e.formModel.lastStartTime,callback:function(t){e.$set(e.formModel,"lastStartTime",t)},expression:"formModel.lastStartTime"}})],1),a("FormItem",{attrs:{label:"最低时长要求："}},[a("Input",{model:{value:e.planForm.lowestTimeReq,callback:function(t){e.$set(e.planForm,"lowestTimeReq",t)},expression:"planForm.lowestTimeReq"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("天")])])],1),a("FormItem",{attrs:{label:"最高费用要求："}},[a("Input",{model:{value:e.planForm.highestCostReq,callback:function(t){e.$set(e.planForm,"highestCostReq",t)},expression:"planForm.highestCostReq"}})],1),a("FormItem",{attrs:{label:"预计货好时间：",prop:"cargoReadyTime"}},[a("DatePicker",{attrs:{type:"datetime",placeholder:"Select date"},model:{value:e.formModel.cargoReadyTime,callback:function(t){e.$set(e.formModel,"cargoReadyTime",t)},expression:"formModel.cargoReadyTime"}})],1),a("FormItem",{attrs:{label:"最晚到达时间："}},[a("DatePicker",{attrs:{type:"datetime",placeholder:"Select date"},model:{value:e.formModel.lastArriveTime,callback:function(t){e.$set(e.formModel,"lastArriveTime",t)},expression:"formModel.lastArriveTime"}})],1),a("FormItem",{attrs:{label:"合同编号："}},[a("Input",{model:{value:e.formModel.contractCode,callback:function(t){e.$set(e.formModel,"contractCode",t)},expression:"formModel.contractCode"}})],1),a("FormItem",{attrs:{label:"备注："}},[a("Input",{model:{value:e.formModel.remark,callback:function(t){e.$set(e.formModel,"remark",t)},expression:"formModel.remark"}})],1)],1)],1)],1)],1)])},r=[],l=(a("2eeb"),a("77ab")),s=a("b962"),n=a("35f4"),i=a.n(n),m=a("be84"),c={name:"ae-form",props:{planData:{type:Object,default:function(){return{}}}},components:{CargoInfo:m["a"]},data:function(){return{timeArr:[],formModel:{},CargoInfoList:[],planForm:{cargoType:"普货",trspType:"集装箱",contaSize:"自备",containerSource:"自备",trspMode:"水运",logisticsType:"国内",suitcaseType:"常庄",suitcaseQty:22,setTemperatureAt:29,exPort:"中国/重庆",imPort:"中国/北京",lowestTimeReq:3,highestCostReq:"55"},formItemRule:{cargoReadyTime:[{required:!0,validator:s["a"].validateTime,trigger:"change"}],FattenName:[s["a"].required("名称")[0]],FattenAddr:[s["a"].required("地址")[0]],FattenTel:[s["a"].required("电话")[0]],SattenName:[s["a"].required("名称")[0]],SattenAddr:[s["a"].required("地址")[0]],SattenTel:[s["a"].required("电话")[0]],TattenName:[s["a"].required("名称")[0]],TattenAddr:[s["a"].required("地址")[0]],TattenTel:[s["a"].required("电话")[0]],TattenEmail:[s["a"].required("邮箱")[0]],bitian:[s["a"].required("")[0]],entrustPeriod:[s["a"].required("")[0]],cargoTotal:[s["a"].required("")[0]],connum:[s["a"].required("")[0],s["a"].number()[0]]}}},created:function(){this._initData()},methods:{_initData:function(){},cargoInfoItem:function(e){this.CargoInfoList=e},saveForm:function(){var e=this;this.$refs.formValidate.validate((function(t){t?e._add():e.$Message.error("必填项必填!")}))},_add:function(){var e=this,t=this.CargoInfoList.map((function(t){return{cargoName:t.cargoName,cargoType:e.planForm.cargoType,cargoVol:t.cargoVol,grossWeight:t.grossWeight,weightUnit:"kg",hsCode:t.hsCode,markNo:t.markNo,vodUnit:"m³",entrustPackagingReqList:[{grossWeight:+t.grossWeight0||0,netWeight:+t.netWeight0||0,packPcode:"0",packQty:+t.packQty0||0,packType:t.packType0,packVol:+t.packVol0||0},{grossWeight:+t.grossWeight1||0,netWeight:+t.netWeight1||0,packPcode:"1",packQty:+t.packQty1||0,packType:t.packType1,packVol:+t.packVol1||0}]}}));this._process_datetimerange();var a=i()(this.formModel.cargoReadyTime).valueOf(),o=i()(this.formModel.lastStartTime).valueOf(),r=i()(this.formModel.lastArriveTime).valueOf(),s={contactReqList:[{attenAddr:this.formModel.FattenAddr,attenEmail:this.formModel.FattenEmail||null,attenFax:this.formModel.FattenFax,attenName:this.formModel.FattenName,attenTel:this.formModel.FattenTel,linkType:"发货人",code:this.formModel.Fcode},{attenAddr:this.formModel.SattenAddr,attenEmail:this.formModel.SattenEmail||null,attenFax:this.formModel.SattenFax,attenName:this.formModel.SattenName,attenTel:this.formModel.SattenTel,linkType:"收货人",code:this.formModel.Scode},{attenAddr:this.formModel.TattenAddr,attenEmail:this.formModel.TattenEmail||null,attenFax:this.formModel.TattenFax,attenName:this.formModel.TattenName,attenTel:this.formModel.TattenTel,linkType:"通知人",code:this.formModel.Tcode}],entrustCargoReq:t,transportationAskReq:{cargoReadyTime:a,contaSize:this.planForm.contaSize,containerSource:this.planForm.containerSource,curr:this.formModel.curr,exPort:this.planForm.exPort,highestCostReq:+this.planForm.highestCostReq||0,imPort:this.planForm.imPort,lastStartTime:o,logisticsType:this.planForm.logisticsType,lowestTimeReq:+this.planForm.lowestTimeReq||0,lowestTimeUnit:"天",setTemperatureAt:+this.planForm.setTemperatureAt||0,setTemperatureUnit:"°C",suitcaseQty:+this.planForm.suitcaseQty||0,suitcaseType:this.planForm.suitcaseType,trspMode:this.planForm.trspMode,trspType:this.planForm.trspType,remark:this.formModel.remark,lastArriveTime:r,startPeriod:this.formModel.startTime,untilPeriod:this.formModel.endTime,cargoTotal:+this.formModel.cargoTotal||0,entrustPeriod:+this.formModel.entrustPeriod||0},trsspmPort:this.planData.routeLists.map((function(e){return e.departurePort})),contractCode:this.formModel.contractCode,departurePort:this.planData.routeLists[0].departurePort,destinationPort:this.planData.routeLists[this.planData.routeLists.length-1].destinationPort,freightReqCode:this.planData.freightReqCode,logisticsSchemeCode:this.planData.logisticsSchemeCode,vodUnit:"m³",weightUnit:"kg",isDisciplinarian:1};Object(l["a"])({data:s}).then((function(t){var a=t.data;e.$Message.success("新增成功"),e.$store.commit("logisticsCommission/commitLawCallback",a),e.$emit("handelDisble",a)})).catch((function(t){200==t.code||e.$Message.error(t.code,10)}))},_process_datetimerange:function(){this.timeArr&&this.timeArr.length&&(this.formModel.startTime=i()(this.timeArr[0]).valueOf(),this.formModel.endTime=i()(this.timeArr[1]).valueOf())}}},d=c,p=(a("9dd0"),a("4023")),u=Object(p["a"])(d,o,r,!1,null,"fbdf7924",null);t["a"]=u.exports},8854:function(e,t,a){},"9dd0":function(e,t,a){"use strict";var o=a("db7c"),r=a.n(o);r.a},b1ea:function(e,t,a){"use strict";var o=a("8854"),r=a.n(o);r.a},db7c:function(e,t,a){},ea18:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ae-form"},[a("div",{staticClass:"public-form-content"},[a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:"24"}},[a("div",{staticClass:"public-line"}),a("div",{staticClass:"scroll-box"},[a("cargo-info",{on:{cargoInfoItem:e.cargoInfoItem_m}})],1)])],1)],1)])},r=[],l=(a("2eeb"),a("d497"),a("80a0")),s=a("77ab"),n=a("b962"),i=a("35f4"),m=a.n(i),c=a("1b80"),d=a("8f27"),p=a("ae8c"),u={name:"ae-form",mixins:[d["a"]],components:{CargoInfo:c["a"]},data:function(){return{formModel:{},itemName:[],formItemRule:{"transportationAskReq.trspType":[n["a"].required("运输类型")[0]]}}},computed:Object(l["a"])({},Object(p["b"])("logisticsCommission",["noBack"])),created:function(){},methods:{saveForm:function(){this._add()},_process_itemArr:function(e){if(!(e instanceof Array&&0==e.length)){var t=e.map((function(e){return{cargoName:e.cargoName,cargoVol:+e.cargoVol||0,cargoQty:+e.cargoQty||0,grossWeight:+e.grossWeight||0,weightUnit:"kg",hsCode:e.hsCode,markNo:e.markNo,netWeight:+e.netWeight||0,vodUnit:"m³",suitcaseQty:+e.suitcaseQty||0,cargoCode:e.cargoCode,entrustPackagingReqList:[{grossWeight:+e.grossWeight0||0,netWeight:+e.netWeight0||0,packPcode:"0",packQty:+e.packQty0||0,packType:e.packType0,packVol:+e.packVol0||0},{grossWeight:+e.grossWeight1||0,netWeight:+e.netWeight1||0,packPcode:"1",packQty:+e.packQty1||0,packType:e.packType1,packVol:+e.packVol1||0}]}}));return t}this.$Message.warning("请保存后再提交")},_add:function(){var e=this;if(this.CargoInfoList.some((function(e){return 1==e.isContentShow})))this.$Message.success("请保存后再提交!");else{var t=this.CargoInfoList.map((function(t){return{startDatetime:m()(t.startDatetime).valueOf(),entrustExcetoryType:1,entrustCargoReq:e._process_itemArr(t.itemArr)}})),a={entrustCode:this.noBack.entrustCode,entrustExcetoryIOnceReqList:t};Object(s["b"])({data:a}).then((function(t){t.data;e.$router.push("/logisstics-commission/one-logistics/1")}))}}}},f=u,F=(a("b1ea"),a("4023")),h=Object(F["a"])(f,o,r,!1,null,"5540ffa6",null);t["a"]=h.exports}}]);