(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ad19235"],{2114:function(t,e,o){var n=o("313e"),a=n.extendComponentView({type:"bmap",render:function(t,e,o){var n=!0,a=t.getBMap(),i=o.getZr().painter.getViewportRoot(),r=t.coordinateSystem,p=function(e,a){if(!n){var p=i.parentNode.parentNode.parentNode,s=[-parseInt(p.style.left,10)||0,-parseInt(p.style.top,10)||0];i.style.left=s[0]+"px",i.style.top=s[1]+"px",r.setMapOffset(s),t.__mapOffset=s,o.dispatchAction({type:"bmapRoam"})}};function s(){n||o.dispatchAction({type:"bmapRoam"})}a.removeEventListener("moving",this._oldMoveHandler),a.removeEventListener("zoomend",this._oldZoomEndHandler),a.addEventListener("moving",p),a.addEventListener("zoomend",s),this._oldMoveHandler=p,this._oldZoomEndHandler=s;var m=t.get("roam");m&&"scale"!==m?a.enableDragging():a.disableDragging(),m&&"move"!==m?(a.enableScrollWheelZoom(),a.enableDoubleClickZoom(),a.enablePinchToZoom()):(a.disableScrollWheelZoom(),a.disableDoubleClickZoom(),a.disablePinchToZoom());var c=t.__mapStyle,d=t.get("mapStyle")||{},l=JSON.stringify(d);JSON.stringify(c)!==l&&(Object.keys(d).length&&a.setMapStyle(d),t.__mapStyle=JSON.parse(l));var f=t.__mapStyle2,h=t.get("mapStyleV2")||{},u=JSON.stringify(h);JSON.stringify(f)!==u&&(Object.keys(h).length&&a.setMapStyleV2(h),t.__mapStyle2=JSON.parse(u)),n=!1}});t.exports=a},"4ae9":function(t,e,o){var n,a=o("313e"),i=a.util,r=a.graphic,p=a.matrix;function s(t,e){this._bmap=t,this.dimensions=["lng","lat"],this._mapOffset=[0,0],this._api=e,this._projection=new BMap.MercatorProjection}function m(t,e){return e=e||[0,0],i.map([0,1],(function(o){var n=e[o],a=t[o]/2,i=[],r=[];return i[o]=n-a,r[o]=n+a,i[1-o]=r[1-o]=e[1-o],Math.abs(this.dataToPoint(i)[o]-this.dataToPoint(r)[o])}),this)}function c(){function t(t){this._root=t}return t.prototype=new BMap.Overlay,t.prototype.initialize=function(t){return t.getPanes().labelPane.appendChild(this._root),this._root},t.prototype.draw=function(){},t}s.prototype.dimensions=["lng","lat"],s.prototype.setZoom=function(t){this._zoom=t},s.prototype.setCenter=function(t){this._center=this._projection.lngLatToPoint(new BMap.Point(t[0],t[1]))},s.prototype.setMapOffset=function(t){this._mapOffset=t},s.prototype.getBMap=function(){return this._bmap},s.prototype.dataToPoint=function(t){var e=new BMap.Point(t[0],t[1]),o=this._bmap.pointToOverlayPixel(e),n=this._mapOffset;return[o.x-n[0],o.y-n[1]]},s.prototype.pointToData=function(t){var e=this._mapOffset;t=this._bmap.overlayPixelToPoint({x:t[0]+e[0],y:t[1]+e[1]});return[t.lng,t.lat]},s.prototype.getViewRect=function(){var t=this._api;return new r.BoundingRect(0,0,t.getWidth(),t.getHeight())},s.prototype.getRoamTransform=function(){return p.create()},s.prototype.prepareCustoms=function(t){var e=this.getViewRect();return{coordSys:{type:"bmap",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:i.bind(this.dataToPoint,this),size:i.bind(m,this)}}},s.dimensions=s.prototype.dimensions,s.create=function(t,e){var o,a=e.getDom();t.eachComponent("bmap",(function(t){var i=e.getZr().painter,r=i.getViewportRoot();if("undefined"===typeof BMap)throw new Error("BMap api is not loaded");if(n=n||c(),o)throw new Error("Only one bmap component can exist");if(!t.__bmap){var p=a.querySelector(".ec-extension-bmap");p&&(r.style.left="0px",r.style.top="0px",a.removeChild(p)),p=document.createElement("div"),p.style.cssText="width:100%;height:100%",p.classList.add("ec-extension-bmap"),a.appendChild(p);var m=t.__bmap=new BMap.Map(p),d=new n(r);m.addOverlay(d),i.getViewportRootOffset=function(){return{offsetLeft:0,offsetTop:0}}}m=t.__bmap;var l=t.get("center"),f=t.get("zoom");if(l&&f){var h=new BMap.Point(l[0],l[1]);m.centerAndZoom(h,f)}o=new s(m,e),o.setMapOffset(t.__mapOffset||[0,0]),o.setZoom(f),o.setCenter(l),t.coordinateSystem=o})),t.eachSeries((function(t){"bmap"===t.get("coordinateSystem")&&(t.coordinateSystem=o)}))};var d=s;t.exports=d},"5d99":function(t,e,o){var n=o("313e");function a(t,e){return t&&e&&t[0]===e[0]&&t[1]===e[1]}var i=n.extendComponentModel({type:"bmap",getBMap:function(){return this.__bmap},setCenterAndZoom:function(t,e){this.option.center=t,this.option.zoom=e},centerOrZoomChanged:function(t,e){var o=this.option;return!(a(t,o.center)&&e===o.zoom)},defaultOption:{center:[104.114129,37.550339],zoom:5,mapStyle:{},mapStyleV2:{},roam:!1}});t.exports=i},a00a:function(t,e,o){var n=o("313e"),a=o("4ae9");o("5d99"),o("2114"),n.registerCoordinateSystem("bmap",a),n.registerAction({type:"bmapRoam",event:"bmapRoam",update:"updateLayout"},(function(t,e){e.eachComponent("bmap",(function(t){var e=t.getBMap(),o=e.getCenter();t.setCenterAndZoom([o.lng,o.lat],e.getZoom())}))}));var i="1.0.0";e.version=i}}]);