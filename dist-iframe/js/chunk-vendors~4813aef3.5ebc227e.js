(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~4813aef3"],{"00d8":function(t,e,n){var i=n("6d8b");function o(t,e){return e=e||[0,0],i.map([0,1],(function(n){var i=e[n],o=t[n]/2,a=[],r=[];return a[n]=i-o,r[n]=i+o,a[1-n]=r[1-n]=e[1-n],Math.abs(this.dataToPoint(a)[n]-this.dataToPoint(r)[n])}),this)}function a(t){var e=t.getBoundingRect();return{coordSys:{type:"geo",x:e.x,y:e.y,width:e.width,height:e.height,zoom:t.getZoom()},api:{coord:function(e){return t.dataToPoint(e)},size:i.bind(o,t)}}}t.exports=a},"0141":function(t,e,n){var i=n("6d8b"),o=n("9850"),a=n("6cc5"),r=n("5b87");function s(t,e,n,i){a.call(this,t),this.map=e;var o=r.load(e,n);this._nameCoordMap=o.nameCoordMap,this._regionsMap=o.regionsMap,this._invertLongitute=null==i||i,this.regions=o.regions,this._rect=o.boundingRect}function c(t,e,n,i){var o=n.geoModel,a=n.seriesModel,r=o?o.coordinateSystem:a?a.coordinateSystem||(a.getReferringComponents("geo")[0]||{}).coordinateSystem:null;return r===this?r[t](i):null}s.prototype={constructor:s,type:"geo",dimensions:["lng","lat"],containCoord:function(t){for(var e=this.regions,n=0;n<e.length;n++)if(e[n].contain(t))return!0;return!1},transformTo:function(t,e,n,i){var a=this.getBoundingRect(),r=this._invertLongitute;a=a.clone(),r&&(a.y=-a.y-a.height);var s=this._rawTransformable;if(s.transform=a.calculateTransform(new o(t,e,n,i)),s.decomposeTransform(),r){var c=s.scale;c[1]=-c[1]}s.updateTransform(),this._updateTransform()},getRegion:function(t){return this._regionsMap.get(t)},getRegionByCoord:function(t){for(var e=this.regions,n=0;n<e.length;n++)if(e[n].contain(t))return e[n]},addGeoCoord:function(t,e){this._nameCoordMap.set(t,e)},getGeoCoord:function(t){return this._nameCoordMap.get(t)},getBoundingRect:function(){return this._rect},dataToPoint:function(t,e,n){if("string"===typeof t&&(t=this.getGeoCoord(t)),t)return a.prototype.dataToPoint.call(this,t,e,n)},convertToPixel:i.curry(c,"dataToPoint"),convertFromPixel:i.curry(c,"pointToData")},i.mixin(s,a);var l=s;t.exports=l},"0f55":function(t,e,n){var i=n("6d8b"),o=n("84ce"),a=function(t,e,n,i,a){o.call(this,t,e,n),this.type=i||"value",this.axisIndex=a};a.prototype={constructor:a,model:null,isHorizontal:function(){return"horizontal"!==this.coordinateSystem.getModel().get("layout")}},i.inherits(a,o);var r=a;t.exports=r},1748:function(t,e,n){var i=n("3eba"),o=n("6d8b"),a=n("71ad"),r=n("4319"),s=n("2023"),c=a.valueAxis;function l(t,e){return o.defaults({show:e},t)}var u=i.extendComponentModel({type:"radar",optionUpdated:function(){var t=this.get("boundaryGap"),e=this.get("splitNumber"),n=this.get("scale"),i=this.get("axisLine"),a=this.get("axisTick"),c=this.get("axisType"),l=this.get("axisLabel"),u=this.get("name"),h=this.get("name.show"),d=this.get("name.formatter"),p=this.get("nameGap"),g=this.get("triggerEvent"),f=o.map(this.get("indicator")||[],(function(f){null!=f.max&&f.max>0&&!f.min?f.min=0:null!=f.min&&f.min<0&&!f.max&&(f.max=0);var x=u;if(null!=f.color&&(x=o.defaults({color:f.color},u)),f=o.merge(o.clone(f),{boundaryGap:t,splitNumber:e,scale:n,axisLine:i,axisTick:a,axisType:c,axisLabel:l,name:f.text,nameLocation:"end",nameGap:p,nameTextStyle:x,triggerEvent:g},!1),h||(f.name=""),"string"===typeof d){var m=f.name;f.name=d.replace("{value}",null!=m?m:"")}else"function"===typeof d&&(f.name=d(f.name,f));var v=o.extend(new r(f,null,this.ecModel),s);return v.mainType="radar",v.componentIndex=this.componentIndex,v}),this);this.getIndicatorModels=function(){return f}},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"75%",startAngle:90,name:{show:!0},boundaryGap:[0,0],splitNumber:5,nameGap:15,scale:!1,shape:"polygon",axisLine:o.merge({lineStyle:{color:"#bbb"}},c.axisLine),axisLabel:l(c.axisLabel,!1),axisTick:l(c.axisTick,!1),axisType:"interval",splitLine:l(c.splitLine,!0),splitArea:l(c.splitArea,!0),indicator:[]}}),h=u;t.exports=h},1792:function(t,e){var n={"南海诸岛":[32,80],"广东":[0,-10],"香港":[10,5],"澳门":[-10,10],"天津":[5,5]};function i(t,e){if("china"===t){var i=n[e.name];if(i){var o=e.center;o[0]+=i[0]/10.5,o[1]+=-i[1]/14}}}t.exports=i},"1ccf":function(t,e,n){var i=n("4e08"),o=(i.__DEV__,n("6d8b")),a=n("fd27"),r=n("3842"),s=r.parsePercent,c=n("697e"),l=c.createScaleByModel,u=c.niceScaleExtent,h=n("2039"),d=n("ee1a"),p=d.getStackedDimension;function g(t,e,n){var i=e.get("center"),a=n.getWidth(),r=n.getHeight();t.cx=s(i[0],a),t.cy=s(i[1],r);var c=t.getRadiusAxis(),l=Math.min(a,r)/2,u=e.get("radius");null==u?u=[0,"100%"]:o.isArray(u)||(u=[0,u]),u=[s(u[0],l),s(u[1],l)],c.inverse?c.setExtent(u[1],u[0]):c.setExtent(u[0],u[1])}function f(t,e){var n=this,i=n.getAngleAxis(),a=n.getRadiusAxis();if(i.scale.setExtent(1/0,-1/0),a.scale.setExtent(1/0,-1/0),t.eachSeries((function(t){if(t.coordinateSystem===n){var e=t.getData();o.each(e.mapDimension("radius",!0),(function(t){a.scale.unionExtentFromData(e,p(e,t))})),o.each(e.mapDimension("angle",!0),(function(t){i.scale.unionExtentFromData(e,p(e,t))}))}})),u(i.scale,i.model),u(a.scale,a.model),"category"===i.type&&!i.onBand){var r=i.getExtent(),s=360/i.scale.count();i.inverse?r[1]+=s:r[1]-=s,i.setExtent(r[0],r[1])}}function x(t,e){if(t.type=e.get("type"),t.scale=l(e),t.onBand=e.get("boundaryGap")&&"category"===t.type,t.inverse=e.get("inverse"),"angleAxis"===e.mainType){t.inverse^=e.get("clockwise");var n=e.get("startAngle");t.setExtent(n,n+(t.inverse?-360:360))}e.axis=t,t.model=e}n("78f0");var m={dimensions:a.prototype.dimensions,create:function(t,e){var n=[];return t.eachComponent("polar",(function(t,i){var o=new a(i);o.update=f;var r=o.getRadiusAxis(),s=o.getAngleAxis(),c=t.findAxisModel("radiusAxis"),l=t.findAxisModel("angleAxis");x(r,c),x(s,l),g(o,t,e),n.push(o),t.coordinateSystem=o,o.model=t})),t.eachSeries((function(e){if("polar"===e.get("coordinateSystem")){var n=t.queryComponents({mainType:"polar",index:e.get("polarIndex"),id:e.get("polarId")})[0];e.coordinateSystem=n.coordinateSystem}})),n}};h.register("polar",m)},"1f1a":function(t,e,n){var i=n("6d8b"),o=n("e0d3"),a=n("6cb7"),r=n("4319"),s=n("7023"),c=n("eeea"),l=a.extend({type:"geo",coordinateSystem:null,layoutMode:"box",init:function(t){a.prototype.init.apply(this,arguments),o.defaultEmphasis(t,"label",["show"])},optionUpdated:function(){var t=this.option,e=this;t.regions=c.getFilledRegions(t.regions,t.map,t.nameMap),this._optionModelMap=i.reduce(t.regions||[],(function(t,n){return n.name&&t.set(n.name,new r(n,e)),t}),i.createHashMap()),this.updateSelectedMap(t.regions)},defaultOption:{zlevel:0,z:0,show:!0,left:"center",top:"center",aspectScale:null,silent:!1,map:"",boundingCoords:null,center:null,zoom:1,scaleLimit:null,label:{show:!1,color:"#000"},itemStyle:{borderWidth:.5,borderColor:"#444",color:"#eee"},emphasis:{label:{show:!0,color:"rgb(100,0,0)"},itemStyle:{color:"rgba(255,215,0,0.8)"}},regions:[]},getRegionModel:function(t){return this._optionModelMap.get(t)||new r(null,this,this.ecModel)},getFormattedLabel:function(t,e){var n=this.getRegionModel(t),i=n.get("label"+("normal"===e?".":e+".")+"formatter"),o={name:t};return"function"===typeof i?(o.status=e,i(o)):"string"===typeof i?i.replace("{a}",null!=t?t:""):void 0},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t}});i.mixin(l,s);var u=l;t.exports=u},"217c":function(t,e,n){var i=n("6d8b"),o=n("6cb7");n("df3a");var a=o.extend({type:"parallel",dependencies:["parallelAxis"],coordinateSystem:null,dimensions:null,parallelAxisIndex:null,layoutMode:"box",defaultOption:{zlevel:0,z:0,left:80,top:60,right:80,bottom:60,layout:"horizontal",axisExpandable:!1,axisExpandCenter:null,axisExpandCount:0,axisExpandWidth:50,axisExpandRate:17,axisExpandDebounce:50,axisExpandSlideTriggerArea:[-.15,.05,.4],axisExpandTriggerOn:"click",parallelAxisDefault:null},init:function(){o.prototype.init.apply(this,arguments),this.mergeOption({})},mergeOption:function(t){var e=this.option;t&&i.merge(e,t,!0),this._initDimensions()},contains:function(t,e){var n=t.get("parallelIndex");return null!=n&&e.getComponent("parallel",n)===this},setAxisExpand:function(t){i.each(["axisExpandable","axisExpandCenter","axisExpandCount","axisExpandWidth","axisExpandWindow"],(function(e){t.hasOwnProperty(e)&&(this.option[e]=t[e])}),this)},_initDimensions:function(){var t=this.dimensions=[],e=this.parallelAxisIndex=[],n=i.filter(this.dependentModels.parallelAxis,(function(t){return(t.get("parallelIndex")||0)===this.componentIndex}),this);i.each(n,(function(n){t.push("dim"+n.get("dim")),e.push(n.componentIndex)}))}});t.exports=a},"23e0":function(t,e,n){var i=n("6d8b"),o=n("7887"),a=n("89e3"),r=n("3842"),s=n("697e"),c=s.getScaleExtent,l=s.niceScaleExtent,u=n("2039"),h=n("8c2a");function d(t,e,n){this._model=t,this.dimensions=[],this._indicatorAxes=i.map(t.getIndicatorModels(),(function(t,e){var n="indicator_"+e,i=new o(n,"log"===t.get("axisType")?new h:new a);return i.name=t.get("name"),i.model=t,t.axis=i,this.dimensions.push(n),i}),this),this.resize(t,n),this.cx,this.cy,this.r,this.r0,this.startAngle}d.prototype.getIndicatorAxes=function(){return this._indicatorAxes},d.prototype.dataToPoint=function(t,e){var n=this._indicatorAxes[e];return this.coordToPoint(n.dataToCoord(t),e)},d.prototype.coordToPoint=function(t,e){var n=this._indicatorAxes[e],i=n.angle,o=this.cx+t*Math.cos(i),a=this.cy-t*Math.sin(i);return[o,a]},d.prototype.pointToData=function(t){var e=t[0]-this.cx,n=t[1]-this.cy,i=Math.sqrt(e*e+n*n);e/=i,n/=i;for(var o,a=Math.atan2(-n,e),r=1/0,s=-1,c=0;c<this._indicatorAxes.length;c++){var l=this._indicatorAxes[c],u=Math.abs(a-l.angle);u<r&&(o=l,s=c,r=u)}return[s,+(o&&o.coordToData(i))]},d.prototype.resize=function(t,e){var n=t.get("center"),o=e.getWidth(),a=e.getHeight(),s=Math.min(o,a)/2;this.cx=r.parsePercent(n[0],o),this.cy=r.parsePercent(n[1],a),this.startAngle=t.get("startAngle")*Math.PI/180;var c=t.get("radius");"string"!==typeof c&&"number"!==typeof c||(c=[0,c]),this.r0=r.parsePercent(c[0],s),this.r=r.parsePercent(c[1],s),i.each(this._indicatorAxes,(function(t,e){t.setExtent(this.r0,this.r);var n=this.startAngle+e*Math.PI*2/this._indicatorAxes.length;n=Math.atan2(Math.sin(n),Math.cos(n)),t.angle=n}),this)},d.prototype.update=function(t,e){var n=this._indicatorAxes,o=this._model;i.each(n,(function(t){t.scale.setExtent(1/0,-1/0)})),t.eachSeriesByType("radar",(function(e,a){if("radar"===e.get("coordinateSystem")&&t.getComponent("radar",e.get("radarIndex"))===o){var r=e.getData();i.each(n,(function(t){t.scale.unionExtentFromData(r,r.mapDimension(t.dim))}))}}),this);var a=o.get("splitNumber");function s(t){var e=Math.pow(10,Math.floor(Math.log(t)/Math.LN10)),n=t/e;return 2===n?n=5:n*=2,n*e}i.each(n,(function(t,e){var n=c(t.scale,t.model);l(t.scale,t.model);var i=t.model,o=t.scale,u=i.getMin(),h=i.getMax(),d=o.getInterval();if(null!=u&&null!=h)o.setExtent(+u,+h),o.setInterval((h-u)/a);else if(null!=u){do{g=u+d*a,o.setExtent(+u,g),o.setInterval(d),d=s(d)}while(g<n[1]&&isFinite(g)&&isFinite(n[1]))}else if(null!=h){do{f=h-d*a,o.setExtent(f,+h),o.setInterval(d),d=s(d)}while(f>n[0]&&isFinite(f)&&isFinite(n[0]))}else{var p=o.getTicks().length-1;p>a&&(d=s(d));var g=Math.ceil(n[1]/d)*d,f=r.round(g-d*a);o.setExtent(f,g),o.setInterval(d)}}))},d.dimensions=[],d.create=function(t,e){var n=[];return t.eachComponent("radar",(function(i){var o=new d(i,t,e);n.push(o),i.coordinateSystem=o})),t.eachSeriesByType("radar",(function(t){"radar"===t.get("coordinateSystem")&&(t.coordinateSystem=n[t.get("radarIndex")||0])})),n},u.register("radar",d);var p=d;t.exports=p},"307b":function(t,e,n){var i=n("6d8b");function o(t,e){var n=this.getAxis(),i=e instanceof Array?e[0]:e,o=(t instanceof Array?t[0]:t)/2;return"category"===n.type?n.getBandWidth():Math.abs(n.dataToCoord(i-o)-n.dataToCoord(i+o))}function a(t){var e=t.getRect();return{coordSys:{type:"singleAxis",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:function(e){return t.dataToPoint(e)},size:i.bind(o,t)}}}t.exports=a},"320a":function(t,e,n){for(var i=n("6d8b"),o=n("f279"),a=[126,25],r=[[[0,3.5],[7,11.2],[15,11.9],[30,7],[42,.7],[52,.7],[56,7.7],[59,.7],[64,.7],[64,0],[5,0],[0,3.5]],[[13,16.1],[19,14.7],[16,21.7],[11,23.1],[13,16.1]],[[12,32.2],[14,38.5],[15,38.5],[13,32.2],[12,32.2]],[[16,47.6],[12,53.2],[13,53.2],[18,47.6],[16,47.6]],[[6,64.4],[8,70],[9,70],[8,64.4],[6,64.4]],[[23,82.6],[29,79.8],[30,79.8],[25,82.6],[23,82.6]],[[37,70.7],[43,62.3],[44,62.3],[39,70.7],[37,70.7]],[[48,51.1],[51,45.5],[53,45.5],[50,51.1],[48,51.1]],[[51,35],[51,28.7],[53,28.7],[53,35],[51,35]],[[52,22.4],[55,17.5],[56,17.5],[53,22.4],[52,22.4]],[[58,12.6],[62,7],[63,7],[60,12.6],[58,12.6]],[[0,3.5],[0,93.1],[64,93.1],[64,0],[63,0],[63,92.4],[1,92.4],[1,3.5],[0,3.5]]],s=0;s<r.length;s++)for(var c=0;c<r[s].length;c++)r[s][c][0]/=10.5,r[s][c][1]/=-14,r[s][c][0]+=a[0],r[s][c][1]+=a[1];function l(t,e){"china"===t&&e.push(new o("南海诸岛",i.map(r,(function(t){return{type:"polygon",exterior:t}})),a))}t.exports=l},4338:function(t,e,n){var i=n("4bf6"),o=n("2039");function a(t,e){var n=[];return t.eachComponent("singleAxis",(function(o,a){var r=new i(o,t,e);r.name="single_"+a,r.resize(o,e),o.coordinateSystem=r,n.push(r)})),t.eachSeries((function(e){if("singleAxis"===e.get("coordinateSystem")){var n=t.queryComponents({mainType:"singleAxis",index:e.get("singleAxisIndex"),id:e.get("singleAxisId")})[0];e.coordinateSystem=n&&n.coordinateSystem}})),n}o.register("single",{create:a,dimensions:i.prototype.dimensions})},"4bf6":function(t,e,n){var i=n("66fc"),o=n("697e"),a=n("f934"),r=a.getLayoutRect,s=n("6d8b"),c=s.each;function l(t,e,n){this.dimension="single",this.dimensions=["single"],this._axis=null,this._rect,this._init(t,e,n),this.model=t}l.prototype={type:"singleAxis",axisPointerEnabled:!0,constructor:l,_init:function(t,e,n){var a=this.dimension,r=new i(a,o.createScaleByModel(t),[0,0],t.get("type"),t.get("position")),s="category"===r.type;r.onBand=s&&t.get("boundaryGap"),r.inverse=t.get("inverse"),r.orient=t.get("orient"),t.axis=r,r.model=t,r.coordinateSystem=this,this._axis=r},update:function(t,e){t.eachSeries((function(t){if(t.coordinateSystem===this){var e=t.getData();c(e.mapDimension(this.dimension,!0),(function(t){this._axis.scale.unionExtentFromData(e,t)}),this),o.niceScaleExtent(this._axis.scale,this._axis.model)}}),this)},resize:function(t,e){this._rect=r({left:t.get("left"),top:t.get("top"),right:t.get("right"),bottom:t.get("bottom"),width:t.get("width"),height:t.get("height")},{width:e.getWidth(),height:e.getHeight()}),this._adjustAxis()},getRect:function(){return this._rect},_adjustAxis:function(){var t=this._rect,e=this._axis,n=e.isHorizontal(),i=n?[0,t.width]:[0,t.height],o=e.reverse?1:0;e.setExtent(i[o],i[1-o]),this._updateAxisTransform(e,n?t.x:t.y)},_updateAxisTransform:function(t,e){var n=t.getExtent(),i=n[0]+n[1],o=t.isHorizontal();t.toGlobalCoord=o?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord=o?function(t){return t-e}:function(t){return i-t+e}},getAxis:function(){return this._axis},getBaseAxis:function(){return this._axis},getAxes:function(){return[this._axis]},getTooltipAxes:function(){return{baseAxes:[this.getAxis()]}},containPoint:function(t){var e=this.getRect(),n=this.getAxis(),i=n.orient;return"horizontal"===i?n.contain(n.toLocalCoord(t[0]))&&t[1]>=e.y&&t[1]<=e.y+e.height:n.contain(n.toLocalCoord(t[1]))&&t[0]>=e.y&&t[0]<=e.y+e.height},pointToData:function(t){var e=this.getAxis();return[e.coordToData(e.toLocalCoord(t["horizontal"===e.orient?0:1]))]},dataToPoint:function(t){var e=this.getAxis(),n=this.getRect(),i=[],o="horizontal"===e.orient?0:1;return t instanceof Array&&(t=t[0]),i[o]=e.toGlobalCoord(e.dataToCoord(+t)),i[1-o]=0===o?n.y+n.height/2:n.x+n.width/2,i}};var u=l;t.exports=u},"4c86":function(t,e,n){var i=n("6d8b"),o=i.each,a=n("bda7"),r=n("e0d3"),s=r.makeInner,c=n("320a"),l=n("1792"),u=n("6bd4"),h=n("a7f2"),d=s(),p={load:function(t,e){var n=d(e).parsed;if(n)return n;var i,r=e.specialAreas||{},s=e.geoJSON;try{i=s?a(s):[]}catch(p){throw new Error("Invalid geoJson format\n"+p.message)}return c(t,i),o(i,(function(e){var n=e.name;l(t,e),u(t,e),h(t,e);var i=r[n];i&&e.transformTo(i.left,i.top,i.width,i.height)})),d(e).parsed={regions:i,boundingRect:g(i)}}};function g(t){for(var e,n=0;n<t.length;n++){var i=t[n].getBoundingRect();e=e||i.clone(),e.union(i)}return e}t.exports=p},"5b87":function(t,e,n){var i=n("4e08"),o=(i.__DEV__,n("6d8b")),a=o.each,r=o.createHashMap,s=n("ec34"),c=n("4c86"),l=n("c92f"),u=n("9850"),h={geoJSON:c,svg:l},d={load:function(t,e){var n,i=[],o=r(),s=r(),c=g(t);return a(c,(function(r){var c=h[r.type].load(t,r);a(c.regions,(function(t){var n=t.name;e&&e.hasOwnProperty(n)&&(t=t.cloneShallow(n=e[n])),i.push(t),o.set(n,t),s.set(n,t.center)}));var l=c.boundingRect;l&&(n?n.union(l):n=l.clone())})),{regions:i,regionsMap:o,nameCoordMap:s,boundingRect:n||new u(0,0,0,0)}},makeGraphic:p("makeGraphic"),removeGraphic:p("removeGraphic")};function p(t){return function(e,n){var i=g(e),o=[];return a(i,(function(i){var a=h[i.type][t];a&&o.push(a(e,i,n))})),o}}function g(t){var e=s.retrieveMap(t)||[];return e}t.exports=d},6569:function(t,e,n){var i=n("6d8b"),o=n("e0d3");function a(t){r(t),s(t)}function r(t){if(!t.parallel){var e=!1;i.each(t.series,(function(t){t&&"parallel"===t.type&&(e=!0)})),e&&(t.parallel=[{}])}}function s(t){var e=o.normalizeToArray(t.parallelAxis);i.each(e,(function(e){if(i.isObject(e)){var n=e.parallelIndex||0,a=o.normalizeToArray(t.parallel)[n];a&&a.parallelAxisDefault&&i.merge(e,a.parallelAxisDefault,!1)}}))}t.exports=a},"66fc":function(t,e,n){var i=n("6d8b"),o=n("84ce"),a=function(t,e,n,i,a){o.call(this,t,e,n),this.type=i||"value",this.position=a||"bottom",this.orient=null};a.prototype={constructor:a,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},pointToData:function(t,e){return this.coordinateSystem.pointToData(t,e)[0]},toGlobalCoord:null,toLocalCoord:null},i.inherits(a,o);var r=a;t.exports=r},"6bd4":function(t,e){var n={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function i(t,e){if("world"===t){var i=n[e.name];if(i){var o=e.center;o[0]=i[0],o[1]=i[1]}}}t.exports=i},7887:function(t,e,n){var i=n("6d8b"),o=n("84ce");function a(t,e,n){o.call(this,t,e,n),this.type="value",this.angle=0,this.name="",this.model}i.inherits(a,o);var r=a;t.exports=r},"78f0":function(t,e,n){var i=n("3eba");n("d9f1");var o=i.extendComponentModel({type:"polar",dependencies:["polarAxis","angleAxis"],coordinateSystem:null,findAxisModel:function(t){var e,n=this.ecModel;return n.eachComponent(t,(function(t){t.getCoordSysModel()===this&&(e=t)}),this),e},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"80%"}});t.exports=o},"849b":function(t,e,n){var i=n("d9d0"),o=n("2039");function a(t,e){var n=[];return t.eachComponent("parallel",(function(o,a){var r=new i(o,t,e);r.name="parallel_"+a,r.resize(o,e),o.coordinateSystem=r,r.model=o,n.push(r)})),t.eachSeries((function(e){if("parallel"===e.get("coordinateSystem")){var n=t.queryComponents({mainType:"parallel",index:e.get("parallelIndex"),id:e.get("parallelId")})[0];e.coordinateSystem=n.coordinateSystem}})),n}o.register("parallel",{create:a})},9273:function(t,e,n){var i=n("6d8b"),o=n("84ce");function a(t,e){o.call(this,"radius",t,e),this.type="category"}a.prototype={constructor:a,pointToData:function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},dataToRadius:o.prototype.dataToCoord,radiusToData:o.prototype.coordToData},i.inherits(a,o);var r=a;t.exports=r},a7f2:function(t,e){var n=[[[123.45165252685547,25.73527164402261],[123.49731445312499,25.73527164402261],[123.49731445312499,25.750734064600884],[123.45165252685547,25.750734064600884],[123.45165252685547,25.73527164402261]]];function i(t,e){"china"===t&&"台湾"===e.name&&e.geometries.push({type:"polygon",exterior:n[0]})}t.exports=i},a991:function(t,e,n){var i=n("6d8b"),o=n("e86a"),a=n("84ce"),r=n("e0d3"),s=r.makeInner,c=s();function l(t,e){e=e||[0,360],a.call(this,"angle",t,e),this.type="category"}l.prototype={constructor:l,pointToData:function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},dataToAngle:a.prototype.dataToCoord,angleToData:a.prototype.coordToData,calculateCategoryInterval:function(){var t=this,e=t.getLabelModel(),n=t.scale,i=n.getExtent(),a=n.count();if(i[1]-i[0]<1)return 0;var r=i[0],s=t.dataToCoord(r+1)-t.dataToCoord(r),l=Math.abs(s),u=o.getBoundingRect(r,e.getFont(),"center","top"),h=Math.max(u.height,7),d=h/l;isNaN(d)&&(d=1/0);var p=Math.max(0,Math.floor(d)),g=c(t.model),f=g.lastAutoInterval,x=g.lastTickCount;return null!=f&&null!=x&&Math.abs(f-p)<=1&&Math.abs(x-a)<=1&&f>p?p=f:(g.lastTickCount=a,g.lastAutoInterval=p),p}},i.inherits(l,a);var u=l;t.exports=u},bda7:function(t,e,n){var i=n("6d8b"),o=n("f279");function a(t){if(!t.UTF8Encoding)return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var n=t.features,i=0;i<n.length;i++)for(var o=n[i],a=o.geometry,s=a.coordinates,c=a.encodeOffsets,l=0;l<s.length;l++){var u=s[l];if("Polygon"===a.type)s[l]=r(u,c[l],e);else if("MultiPolygon"===a.type)for(var h=0;h<u.length;h++){var d=u[h];u[h]=r(d,c[l][h],e)}}return t.UTF8Encoding=!1,t}function r(t,e,n){for(var i=[],o=e[0],a=e[1],r=0;r<t.length;r+=2){var s=t.charCodeAt(r)-64,c=t.charCodeAt(r+1)-64;s=s>>1^-(1&s),c=c>>1^-(1&c),s+=o,c+=a,o=s,a=c,i.push([s/n,c/n])}return i}function s(t){return a(t),i.map(i.filter(t.features,(function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0})),(function(t){var e=t.properties,n=t.geometry,a=n.coordinates,r=[];"Polygon"===n.type&&r.push({type:"polygon",exterior:a[0],interiors:a.slice(1)}),"MultiPolygon"===n.type&&i.each(a,(function(t){t[0]&&r.push({type:"polygon",exterior:t[0],interiors:t.slice(1)})}));var s=new o(e.name,r,e.cp);return s.properties=e,s}))}t.exports=s},c62c:function(t,e,n){var i=n("6d8b"),o=n("6cb7"),a=n("9e47"),r=n("2023"),s=o.extend({type:"singleAxis",layoutMode:"box",axis:null,coordinateSystem:null,getCoordSysModel:function(){return this}}),c={left:"5%",top:"5%",right:"5%",bottom:"5%",type:"value",position:"bottom",orient:"horizontal",axisLine:{show:!0,lineStyle:{width:1,type:"solid"}},tooltip:{show:!0},axisTick:{show:!0,length:6,lineStyle:{width:1}},axisLabel:{show:!0,interval:"auto"},splitLine:{show:!0,lineStyle:{type:"dashed",opacity:.2}}};function l(t,e){return e.type||(e.data?"category":"value")}i.merge(s.prototype,r),a("single",s,l,c);var u=s;t.exports=u},c92f:function(t,e,n){var i=n("3041"),o=i.parseSVG,a=i.makeViewBoxTransform,r=n("e1fc"),s=n("c7a2"),c=n("6d8b"),l=c.assert,u=c.createHashMap,h=n("9850"),d=n("e0d3"),p=d.makeInner,g=p(),f={load:function(t,e){var n=g(e).originRoot;if(n)return{root:n,boundingRect:g(e).boundingRect};var i=x(e);return g(e).originRoot=i.root,g(e).boundingRect=i.boundingRect,i},makeGraphic:function(t,e,n){var i=g(e),o=i.rootMap||(i.rootMap=u()),a=o.get(n);if(a)return a;var r=i.originRoot,s=i.boundingRect;return i.originRootHostKey?a=x(e,s).root:(i.originRootHostKey=n,a=r),o.set(n,a)},removeGraphic:function(t,e,n){var i=g(e),o=i.rootMap;o&&o.removeKey(n),n===i.originRootHostKey&&(i.originRootHostKey=null)}};function x(t,e){var n,i,c=t.svgXML;try{n=c&&o(c,{ignoreViewBox:!0,ignoreRootClip:!0})||{},i=n.root,l(null!=i)}catch(x){throw new Error("Invalid svg format\n"+x.message)}var u=n.width,d=n.height,p=n.viewBoxRect;if(e||(e=null==u||null==d?i.getBoundingRect():new h(0,0,0,0),null!=u&&(e.width=u),null!=d&&(e.height=d)),p){var g=a(p,e.width,e.height),f=i;i=new r,i.add(f),f.scale=g.scale,f.position=g.position}return i.setClipPath(new s({shape:e.plain()})),{root:i,boundingRect:e}}t.exports=f},d9d0:function(t,e,n){var i=n("6d8b"),o=n("1687"),a=n("f934"),r=n("697e"),s=n("0f55"),c=n("2306"),l=n("3842"),u=n("ef6a"),h=i.each,d=Math.min,p=Math.max,g=Math.floor,f=Math.ceil,x=l.round,m=Math.PI;function v(t,e,n){this._axesMap=i.createHashMap(),this._axesLayout={},this.dimensions=t.dimensions,this._rect,this._model=t,this._init(t,e,n)}function y(t,e){return d(p(t,e[0]),e[1])}function A(t,e){var n=e.layoutLength/(e.axisCount-1);return{position:n*t,axisNameAvailableWidth:n,axisLabelShow:!0}}function b(t,e){var n,i,o=e.layoutLength,a=e.axisExpandWidth,r=e.axisCount,s=e.axisCollapseWidth,c=e.winInnerIndices,l=s,u=!1;return t<c[0]?(n=t*s,i=s):t<=c[1]?(n=e.axisExpandWindow0Pos+t*a-e.axisExpandWindow[0],l=a,u=!0):(n=o-(r-1-t)*s,i=s),{position:n,axisNameAvailableWidth:l,axisLabelShow:u,nameTruncateMaxWidth:i}}v.prototype={type:"parallel",constructor:v,_init:function(t,e,n){var i=t.dimensions,o=t.parallelAxisIndex;h(i,(function(t,n){var i=o[n],a=e.getComponent("parallelAxis",i),c=this._axesMap.set(t,new s(t,r.createScaleByModel(a),[0,0],a.get("type"),i)),l="category"===c.type;c.onBand=l&&a.get("boundaryGap"),c.inverse=a.get("inverse"),a.axis=c,c.model=a,c.coordinateSystem=a.coordinateSystem=this}),this)},update:function(t,e){this._updateAxesFromSeries(this._model,t)},containPoint:function(t){var e=this._makeLayoutInfo(),n=e.axisBase,i=e.layoutBase,o=e.pixelDimIndex,a=t[1-o],r=t[o];return a>=n&&a<=n+e.axisLength&&r>=i&&r<=i+e.layoutLength},getModel:function(){return this._model},_updateAxesFromSeries:function(t,e){e.eachSeries((function(n){if(t.contains(n,e)){var i=n.getData();h(this.dimensions,(function(t){var e=this._axesMap.get(t);e.scale.unionExtentFromData(i,i.mapDimension(t)),r.niceScaleExtent(e.scale,e.model)}),this)}}),this)},resize:function(t,e){this._rect=a.getLayoutRect(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),this._layoutAxes()},getRect:function(){return this._rect},_makeLayoutInfo:function(){var t,e=this._model,n=this._rect,i=["x","y"],o=["width","height"],a=e.get("layout"),r="horizontal"===a?0:1,s=n[o[r]],c=[0,s],l=this.dimensions.length,u=y(e.get("axisExpandWidth"),c),h=y(e.get("axisExpandCount")||0,[0,l]),d=e.get("axisExpandable")&&l>3&&l>h&&h>1&&u>0&&s>0,p=e.get("axisExpandWindow");if(p)t=y(p[1]-p[0],c),p[1]=p[0]+t;else{t=y(u*(h-1),c);var m=e.get("axisExpandCenter")||g(l/2);p=[u*m-t/2],p[1]=p[0]+t}var v=(s-t)/(l-h);v<3&&(v=0);var A=[g(x(p[0]/u,1))+1,f(x(p[1]/u,1))-1],b=v/u*p[0];return{layout:a,pixelDimIndex:r,layoutBase:n[i[r]],layoutLength:s,axisBase:n[i[1-r]],axisLength:n[o[1-r]],axisExpandable:d,axisExpandWidth:u,axisCollapseWidth:v,axisExpandWindow:p,axisCount:l,winInnerIndices:A,axisExpandWindow0Pos:b}},_layoutAxes:function(){var t=this._rect,e=this._axesMap,n=this.dimensions,i=this._makeLayoutInfo(),a=i.layout;e.each((function(t){var e=[0,i.axisLength],n=t.inverse?1:0;t.setExtent(e[n],e[1-n])})),h(n,(function(e,n){var r=(i.axisExpandable?b:A)(n,i),s={horizontal:{x:r.position,y:i.axisLength},vertical:{x:0,y:r.position}},c={horizontal:m/2,vertical:0},l=[s[a].x+t.x,s[a].y+t.y],u=c[a],h=o.create();o.rotate(h,h,u),o.translate(h,h,l),this._axesLayout[e]={position:l,rotation:u,transform:h,axisNameAvailableWidth:r.axisNameAvailableWidth,axisLabelShow:r.axisLabelShow,nameTruncateMaxWidth:r.nameTruncateMaxWidth,tickDirection:1,labelDirection:1}}),this)},getAxis:function(t){return this._axesMap.get(t)},dataToPoint:function(t,e){return this.axisCoordToPoint(this._axesMap.get(e).dataToCoord(t),e)},eachActiveState:function(t,e,n,o){null==n&&(n=0),null==o&&(o=t.count());var a=this._axesMap,r=this.dimensions,s=[],c=[];i.each(r,(function(e){s.push(t.mapDimension(e)),c.push(a.get(e).model)}));for(var l=this.hasAxisBrushed(),u=n;u<o;u++){var h;if(l){h="active";for(var d=t.getValues(s,u),p=0,g=r.length;p<g;p++){var f=c[p].getActiveState(d[p]);if("inactive"===f){h="inactive";break}}}else h="normal";e(h,u)}},hasAxisBrushed:function(){for(var t=this.dimensions,e=this._axesMap,n=!1,i=0,o=t.length;i<o;i++)"normal"!==e.get(t[i]).model.getActiveState()&&(n=!0);return n},axisCoordToPoint:function(t,e){var n=this._axesLayout[e];return c.applyTransform([t,0],n.transform)},getAxisLayout:function(t){return i.clone(this._axesLayout[t])},getSlidedAxisExpandWindow:function(t){var e=this._makeLayoutInfo(),n=e.pixelDimIndex,i=e.axisExpandWindow.slice(),o=i[1]-i[0],a=[0,e.axisExpandWidth*(e.axisCount-1)];if(!this.containPoint(t))return{behavior:"none",axisExpandWindow:i};var r,s=t[n]-e.layoutBase-e.axisExpandWindow0Pos,c="slide",l=e.axisCollapseWidth,h=this._model.get("axisExpandSlideTriggerArea"),g=null!=h[0];if(l)g&&l&&s<o*h[0]?(c="jump",r=s-o*h[2]):g&&l&&s>o*(1-h[0])?(c="jump",r=s-o*(1-h[2])):(r=s-o*h[1])>=0&&(r=s-o*(1-h[1]))<=0&&(r=0),r*=e.axisExpandWidth/l,r?u(r,i,a,"all"):c="none";else{o=i[1]-i[0];var f=a[1]*s/o;i=[p(0,f-o/2)],i[1]=d(a[1],i[0]+o),i[0]=i[1]-o}return{axisExpandWindow:i,behavior:c}}};var M=v;t.exports=M},d9f1:function(t,e,n){var i=n("6d8b"),o=n("6cb7"),a=n("9e47"),r=n("2023"),s=o.extend({type:"polarAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"polar",index:this.option.polarIndex,id:this.option.polarId})[0]}});i.merge(s.prototype,r);var c={angle:{startAngle:90,clockwise:!0,splitNumber:12,axisLabel:{rotate:!1}},radius:{splitNumber:5}};function l(t,e){return e.type||(e.data?"category":"value")}a("angle",s,l,c.angle),a("radius",s,l,c.radius)},df3a:function(t,e,n){var i=n("6d8b"),o=n("6cb7"),a=n("282b"),r=n("9e47"),s=n("3842"),c=n("2023"),l=o.extend({type:"baseParallelAxis",axis:null,activeIntervals:[],getAreaSelectStyle:function(){return a([["fill","color"],["lineWidth","borderWidth"],["stroke","borderColor"],["width","width"],["opacity","opacity"]])(this.getModel("areaSelectStyle"))},setActiveIntervals:function(t){var e=this.activeIntervals=i.clone(t);if(e)for(var n=e.length-1;n>=0;n--)s.asc(e[n])},getActiveState:function(t){var e=this.activeIntervals;if(!e.length)return"normal";if(null==t||isNaN(t))return"inactive";if(1===e.length){var n=e[0];if(n[0]<=t&&t<=n[1])return"active"}else for(var i=0,o=e.length;i<o;i++)if(e[i][0]<=t&&t<=e[i][1])return"active";return"inactive"}}),u={type:"value",dim:null,areaSelectStyle:{width:20,borderWidth:1,borderColor:"rgba(160,197,232)",color:"rgba(160,197,232)",opacity:.3},realtime:!0,z:10};function h(t,e){return e.type||(e.data?"category":"value")}i.merge(l.prototype,c),r("parallel",l,h,u);var d=l;t.exports=d},eaeb:function(t,e,n){var i=n("6d8b");function o(t,e){return i.map(["Radius","Angle"],(function(n,i){var o=this["get"+n+"Axis"](),a=e[i],r=t[i]/2,s="dataTo"+n,c="category"===o.type?o.getBandWidth():Math.abs(o[s](a-r)-o[s](a+r));return"Angle"===n&&(c=c*Math.PI/180),c}),this)}function a(t){var e=t.getRadiusAxis(),n=t.getAngleAxis(),a=e.getExtent();return a[0]>a[1]&&a.reverse(),{coordSys:{type:"polar",cx:t.cx,cy:t.cy,r:a[1],r0:a[0]},api:{coord:i.bind((function(i){var o=e.dataToRadius(i[0]),a=n.dataToAngle(i[1]),r=t.coordToPoint([o,a]);return r.push(o,a*Math.PI/180),r})),size:i.bind(o,t)}}}t.exports=a},ec34:function(t,e,n){var i=n("4e08"),o=(i.__DEV__,n("6d8b")),a=o.createHashMap,r=o.isString,s=o.isArray,c=o.each,l=(o.assert,n("3041")),u=l.parseXML,h=a(),d={registerMap:function(t,e,n){var i;return s(e)?i=e:e.svg?i=[{type:"svg",source:e.svg,specialAreas:e.specialAreas}]:(e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),i=[{type:"geoJSON",source:e,specialAreas:n}]),c(i,(function(t){var e=t.type;"geoJson"===e&&(e=t.type="geoJSON");var n=p[e];n(t)})),h.set(t,i)},retrieveMap:function(t){return h.get(t)}},p={geoJSON:function(t){var e=t.source;t.geoJSON=r(e)?"undefined"!==typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")():e},svg:function(t){t.svgXML=u(t.source)}};t.exports=d},edb9:function(t,e,n){var i=n("6d8b");function o(t,e){e=e||{};var n=t.coordinateSystem,o=t.axis,a={},r=o.position,s=o.orient,c=n.getRect(),l=[c.x,c.x+c.width,c.y,c.y+c.height],u={horizontal:{top:l[2],bottom:l[3]},vertical:{left:l[0],right:l[1]}};a.position=["vertical"===s?u.vertical[r]:l[0],"horizontal"===s?u.horizontal[r]:l[3]];var h={horizontal:0,vertical:1};a.rotation=Math.PI/2*h[s];var d={top:-1,bottom:1,right:1,left:-1};a.labelDirection=a.tickDirection=a.nameDirection=d[r],t.get("axisTick.inside")&&(a.tickDirection=-a.tickDirection),i.retrieve(e.labelInside,t.get("axisLabel.inside"))&&(a.labelDirection=-a.labelDirection);var p=e.rotate;return null==p&&(p=t.get("axisLabel.rotate")),a.labelRotation="top"===r?-p:p,a.z2=1,a}e.layout=o},eeea:function(t,e,n){var i=n("4e08"),o=(i.__DEV__,n("3eba")),a=n("6d8b"),r=n("0141"),s=n("f934"),c=n("3842"),l=n("5b87"),u=n("ec34");function h(t,e){var n=t.get("boundingCoords");if(null!=n){var i=n[0],o=n[1];isNaN(i[0])||isNaN(i[1])||isNaN(o[0])||isNaN(o[1])||this.setBoundingRect(i[0],i[1],o[0]-i[0],o[1]-i[1])}var a,r=this.getBoundingRect(),l=t.get("layoutCenter"),u=t.get("layoutSize"),h=e.getWidth(),d=e.getHeight(),p=r.width/r.height*this.aspectScale,g=!1;if(l&&u&&(l=[c.parsePercent(l[0],h),c.parsePercent(l[1],d)],u=c.parsePercent(u,Math.min(h,d)),isNaN(l[0])||isNaN(l[1])||isNaN(u)||(g=!0)),g){var f={};p>1?(f.width=u,f.height=u/p):(f.height=u,f.width=u*p),f.y=l[1]-f.height/2,f.x=l[0]-f.width/2}else a=t.getBoxLayoutParams(),a.aspect=p,f=s.getLayoutRect(a,{width:h,height:d});this.setViewRect(f.x,f.y,f.width,f.height),this.setCenter(t.get("center")),this.setZoom(t.get("zoom"))}function d(t,e){a.each(e.get("geoCoord"),(function(e,n){t.addGeoCoord(n,e)}))}var p={dimensions:r.prototype.dimensions,create:function(t,e){var n=[];t.eachComponent("geo",(function(t,i){var o=t.get("map"),a=t.get("aspectScale"),s=!0,c=u.retrieveMap(o);c&&c[0]&&"svg"===c[0].type?(null==a&&(a=1),s=!1):null==a&&(a=.75);var l=new r(o+i,o,t.get("nameMap"),s);l.aspectScale=a,l.zoomLimit=t.get("scaleLimit"),n.push(l),d(l,t),t.coordinateSystem=l,l.model=t,l.resize=h,l.resize(t,e)})),t.eachSeries((function(t){var e=t.get("coordinateSystem");if("geo"===e){var i=t.get("geoIndex")||0;t.coordinateSystem=n[i]}}));var i={};return t.eachSeriesByType("map",(function(t){if(!t.getHostGeoModel()){var e=t.getMapType();i[e]=i[e]||[],i[e].push(t)}})),a.each(i,(function(t,i){var o=a.map(t,(function(t){return t.get("nameMap")})),s=new r(i,i,a.mergeAll(o));s.zoomLimit=a.retrieve.apply(null,a.map(t,(function(t){return t.get("scaleLimit")}))),n.push(s),s.resize=h,s.aspectScale=t[0].get("aspectScale"),s.resize(t[0],e),a.each(t,(function(t){t.coordinateSystem=s,d(s,t)}))})),n},getFilledRegions:function(t,e,n){for(var i=(t||[]).slice(),o=a.createHashMap(),r=0;r<i.length;r++)o.set(i[r].name,i[r]);var s=l.load(e,n);return a.each(s.regions,(function(t){var e=t.name;!o.get(e)&&i.push({name:e})})),i}};o.registerCoordinateSystem("geo",p);var g=p;t.exports=g},f279:function(t,e,n){var i=n("9850"),o=n("e263"),a=n("401b"),r=n("0655");function s(t,e,n){if(this.name=t,this.geometries=e,n)n=[n[0],n[1]];else{var i=this.getBoundingRect();n=[i.x+i.width/2,i.y+i.height/2]}this.center=n}s.prototype={constructor:s,properties:null,getBoundingRect:function(){var t=this._rect;if(t)return t;for(var e=Number.MAX_VALUE,n=[e,e],r=[-e,-e],s=[],c=[],l=this.geometries,u=0;u<l.length;u++)if("polygon"===l[u].type){var h=l[u].exterior;o.fromPoints(h,s,c),a.min(n,n,s),a.max(r,r,c)}return 0===u&&(n[0]=n[1]=r[0]=r[1]=0),this._rect=new i(n[0],n[1],r[0]-n[0],r[1]-n[1])},contain:function(t){var e=this.getBoundingRect(),n=this.geometries;if(!e.contain(t[0],t[1]))return!1;t:for(var i=0,o=n.length;i<o;i++)if("polygon"===n[i].type){var a=n[i].exterior,s=n[i].interiors;if(r.contain(a,t[0],t[1])){for(var c=0;c<(s?s.length:0);c++)if(r.contain(s[c]))continue t;return!0}}return!1},transformTo:function(t,e,n,o){var r=this.getBoundingRect(),s=r.width/r.height;n?o||(o=n/s):n=s*o;for(var c=new i(t,e,n,o),l=r.calculateTransform(c),u=this.geometries,h=0;h<u.length;h++)if("polygon"===u[h].type){for(var d=u[h].exterior,p=u[h].interiors,g=0;g<d.length;g++)a.applyTransform(d[g],d[g],l);for(var f=0;f<(p?p.length:0);f++)for(g=0;g<p[f].length;g++)a.applyTransform(p[f][g],p[f][g],l)}r=this._rect,r.copy(c),this.center=[r.x+r.width/2,r.y+r.height/2]},cloneShallow:function(t){null==t&&(t=this.name);var e=new s(t,this.geometries,this.center);return e._rect=this._rect,e.transformTo=null,e}};var c=s;t.exports=c},fd27:function(t,e,n){var i=n("9273"),o=n("a991"),a=function(t){this.name=t||"",this.cx=0,this.cy=0,this._radiusAxis=new i,this._angleAxis=new o,this._radiusAxis.polar=this._angleAxis.polar=this};a.prototype={type:"polar",axisPointerEnabled:!0,constructor:a,dimensions:["radius","angle"],model:null,containPoint:function(t){var e=this.pointToCoord(t);return this._radiusAxis.contain(e[0])&&this._angleAxis.contain(e[1])},containData:function(t){return this._radiusAxis.containData(t[0])&&this._angleAxis.containData(t[1])},getAxis:function(t){return this["_"+t+"Axis"]},getAxes:function(){return[this._radiusAxis,this._angleAxis]},getAxesByScale:function(t){var e=[],n=this._angleAxis,i=this._radiusAxis;return n.scale.type===t&&e.push(n),i.scale.type===t&&e.push(i),e},getAngleAxis:function(){return this._angleAxis},getRadiusAxis:function(){return this._radiusAxis},getOtherAxis:function(t){var e=this._angleAxis;return t===e?this._radiusAxis:e},getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAngleAxis()},getTooltipAxes:function(t){var e=null!=t&&"auto"!==t?this.getAxis(t):this.getBaseAxis();return{baseAxes:[e],otherAxes:[this.getOtherAxis(e)]}},dataToPoint:function(t,e){return this.coordToPoint([this._radiusAxis.dataToRadius(t[0],e),this._angleAxis.dataToAngle(t[1],e)])},pointToData:function(t,e){var n=this.pointToCoord(t);return[this._radiusAxis.radiusToData(n[0],e),this._angleAxis.angleToData(n[1],e)]},pointToCoord:function(t){var e=t[0]-this.cx,n=t[1]-this.cy,i=this.getAngleAxis(),o=i.getExtent(),a=Math.min(o[0],o[1]),r=Math.max(o[0],o[1]);i.inverse?a=r-360:r=a+360;var s=Math.sqrt(e*e+n*n);e/=s,n/=s;var c=Math.atan2(-n,e)/Math.PI*180,l=c<a?1:-1;while(c<a||c>r)c+=360*l;return[s,c]},coordToPoint:function(t){var e=t[0],n=t[1]/180*Math.PI,i=Math.cos(n)*e+this.cx,o=-Math.sin(n)*e+this.cy;return[i,o]},getArea:function(){var t=this.getAngleAxis(),e=this.getRadiusAxis(),n=e.getExtent().slice();n[0]>n[1]&&n.reverse();var i=t.getExtent(),o=Math.PI/180;return{cx:this.cx,cy:this.cy,r0:n[0],r:n[1],startAngle:-i[0]*o,endAngle:-i[1]*o,clockwise:t.inverse,contain:function(t,e){var n=t-this.cx,i=e-this.cy,o=n*n+i*i,a=this.r,r=this.r0;return o<=a*a&&o>=r*r}}}};var r=a;t.exports=r}}]);