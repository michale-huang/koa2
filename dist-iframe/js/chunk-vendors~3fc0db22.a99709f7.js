(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~3fc0db22"],{"69ff":function(e,t,n){var i=n("6d8b"),r=i.each,s=i.map,a=i.isFunction,o=i.createHashMap,u=i.noop,d=n("f47d"),l=d.createTask,p=n("8918"),c=p.getUID,h=n("7e63"),_=n("843e"),f=n("e0d3"),g=f.normalizeToArray;function v(e,t,n,i){this.ecInstance=e,this.api=t,this.unfinished;n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=o()}var y=v.prototype;function m(e,t,n,i,s){var a;function o(e,t){return e.setDirty&&(!e.dirtyMap||e.dirtyMap.get(t.__pipeline.id))}s=s||{},r(t,(function(t,r){if(!s.visualType||s.visualType===t.visualType){var u=e._stageTaskMap.get(t.uid),d=u.seriesTaskMap,l=u.overallTask;if(l){var p,c=l.agentStubMap;c.each((function(e){o(s,e)&&(e.dirty(),p=!0)})),p&&l.dirty(),T(l,i);var h=e.getPerformArgs(l,s.block);c.each((function(e){e.perform(h)})),a|=l.perform(h)}else d&&d.each((function(r,u){o(s,r)&&r.dirty();var d=e.getPerformArgs(r,s.block);d.skip=!t.performRawSeries&&n.isSeriesFiltered(r.context.model),T(r,i),a|=r.perform(d)}))}})),e.unfinished|=a}y.restoreData=function(e,t){e.restoreData(t),this._stageTaskMap.each((function(e){var t=e.overallTask;t&&t.dirty()}))},y.getPerformArgs=function(e,t){if(e.__pipeline){var n=this._pipelineMap.get(e.__pipeline.id),i=n.context,r=!t&&n.progressiveEnabled&&(!i||i.progressiveRender)&&e.__idxInPipeline>n.blockIndex,s=r?n.step:null,a=i&&i.modDataCount,o=null!=a?Math.ceil(a/s):null;return{step:s,modBy:o,modDataCount:a}}},y.getPipeline=function(e){return this._pipelineMap.get(e)},y.updateStreamModes=function(e,t){var n=this._pipelineMap.get(e.uid),i=e.getData(),r=i.count(),s=n.progressiveEnabled&&t.incrementalPrepareRender&&r>=n.threshold,a=e.get("large")&&r>=e.get("largeThreshold"),o="mod"===e.get("progressiveChunkMode")?r:null;e.pipelineContext=n.context={progressiveRender:s,modDataCount:o,large:a}},y.restorePipelines=function(e){var t=this,n=t._pipelineMap=o();e.eachSeries((function(e){var i=e.getProgressive(),r=e.uid;n.set(r,{id:r,head:null,tail:null,threshold:e.getProgressiveThreshold(),progressiveEnabled:i&&!(e.preventIncremental&&e.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),C(t,e,e.dataTask)}))},y.prepareStageTasks=function(){var e=this._stageTaskMap,t=this.ecInstance.getModel(),n=this.api;r(this._allHandlers,(function(i){var r=e.get(i.uid)||e.set(i.uid,[]);i.reset&&k(this,i,r,t,n),i.overallReset&&M(this,i,r,t,n)}),this)},y.prepareView=function(e,t,n,i){var r=e.renderTask,s=r.context;s.model=t,s.ecModel=n,s.api=i,r.__block=!e.incrementalPrepareRender,C(this,t,r)},y.performDataProcessorTasks=function(e,t){m(this,this._dataProcessorHandlers,e,t,{block:!0})},y.performVisualTasks=function(e,t,n){m(this,this._visualHandlers,e,t,n)},y.performSeriesTasks=function(e){var t;e.eachSeries((function(e){t|=e.dataTask.perform()})),this.unfinished|=t},y.plan=function(){this._pipelineMap.each((function(e){var t=e.tail;do{if(t.__block){e.blockIndex=t.__idxInPipeline;break}t=t.getUpstream()}while(t)}))};var T=y.updatePayload=function(e,t){"remain"!==t&&(e.context.payload=t)};function k(e,t,n,i,r){var s=n.seriesTaskMap||(n.seriesTaskMap=o()),a=t.seriesType,u=t.getTargetSeries;function d(n){var a=n.uid,o=s.get(a)||s.set(a,l({plan:b,reset:P,count:R}));o.context={model:n,ecModel:i,api:r,useClearVisual:t.isVisual&&!t.isLayout,plan:t.plan,reset:t.reset,scheduler:e},C(e,n,o)}t.createOnAllSeries?i.eachRawSeries(d):a?i.eachRawSeriesByType(a,d):u&&u(i,r).each(d);var p=e._pipelineMap;s.each((function(e,t){p.get(t)||(e.dispose(),s.removeKey(t))}))}function M(e,t,n,i,s){var a=n.overallTask=n.overallTask||l({reset:x});a.context={ecModel:i,api:s,overallReset:t.overallReset,scheduler:e};var u=a.agentStubMap=a.agentStubMap||o(),d=t.seriesType,p=t.getTargetSeries,c=!0,h=t.modifyOutputEnd;function _(t){var n=t.uid,i=u.get(n);i||(i=u.set(n,l({reset:D,onDirty:w})),a.dirty()),i.context={model:t,overallProgress:c,modifyOutputEnd:h},i.agent=a,i.__block=c,C(e,t,i)}d?i.eachRawSeriesByType(d,_):p?p(i,s).each(_):(c=!1,r(i.getSeries(),_));var f=e._pipelineMap;u.each((function(e,t){f.get(t)||(e.dispose(),a.dirty(),u.removeKey(t))}))}function x(e){e.overallReset(e.ecModel,e.api,e.payload)}function D(e,t){return e.overallProgress&&E}function E(){this.agent.dirty(),this.getDownstream().dirty()}function w(){this.agent&&this.agent.dirty()}function b(e){return e.plan&&e.plan(e.model,e.ecModel,e.api,e.payload)}function P(e){e.useClearVisual&&e.data.clearAllVisual();var t=e.resetDefines=g(e.reset(e.model,e.ecModel,e.api,e.payload));return t.length>1?s(t,(function(e,t){return I(t)})):S}var S=I(0);function I(e){return function(t,n){var i=n.data,r=n.resetDefines[e];if(r&&r.dataEach)for(var s=t.start;s<t.end;s++)r.dataEach(i,s);else r&&r.progress&&r.progress(t,i)}}function R(e){return e.data.count()}function C(e,t,n){var i=t.uid,r=e._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function O(e){B=null;try{e(H,A)}catch(t){}return B}v.wrapStageHandler=function(e,t){return a(e)&&(e={overallReset:e,seriesType:O(e)}),e.uid=c("stageHandler"),t&&(e.visualType=t),e};var B,H={},A={};function V(e,t){for(var n in t.prototype)e[n]=u}V(H,h),V(A,_),H.eachSeriesByType=H.eachRawSeriesByType=function(e){B=e},H.eachComponent=function(e){"series"===e.mainType&&e.subType&&(B=e.subType)};var F=v;e.exports=F},f47d:function(e,t,n){var i=n("6d8b"),r=(i.assert,i.isArray),s=n("4e08");s.__DEV__;function a(e){return new o(e)}function o(e){e=e||{},this._reset=e.reset,this._plan=e.plan,this._count=e.count,this._onDirty=e.onDirty,this._dirty=!0,this.context}var u=o.prototype;u.perform=function(e){var t,n=this._upstream,i=e&&e.skip;if(this._dirty&&n){var s=this.context;s.data=s.outputData=n.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!i&&(t=this._plan(this.context));var a,o=h(this._modBy),u=this._modDataCount||0,d=h(e&&e.modBy),c=e&&e.modDataCount||0;function h(e){return!(e>=1)&&(e=1),e}o===d&&u===c||(t="reset"),(this._dirty||"reset"===t)&&(this._dirty=!1,a=p(this,i)),this._modBy=d,this._modDataCount=c;var _=e&&e.step;if(this._dueEnd=n?n._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,g=Math.min(null!=_?this._dueIndex+_:1/0,this._dueEnd);if(!i&&(a||f<g)){var v=this._progress;if(r(v))for(var y=0;y<v.length;y++)l(this,v[y],f,g,d,c);else l(this,v,f,g,d,c)}this._dueIndex=g;var m=null!=this._settedOutputEnd?this._settedOutputEnd:g;this._outputDueEnd=m}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var d=function(){var e,t,n,i,r,s={reset:function(u,d,l,p){t=u,e=d,n=l,i=p,r=Math.ceil(i/n),s.next=n>1&&i>0?o:a}};return s;function a(){return t<e?t++:null}function o(){var s=t%r*n+Math.ceil(t/r),a=t>=e?null:s<i?s:t;return t++,a}}();function l(e,t,n,i,r,s){d.reset(n,i,r,s),e._callingProgress=t,e._callingProgress({start:n,end:i,count:i-n,next:d.next},e.context)}function p(e,t){var n,i;e._dueIndex=e._outputDueEnd=e._dueEnd=0,e._settedOutputEnd=null,!t&&e._reset&&(n=e._reset(e.context),n&&n.progress&&(i=n.forceFirstProgress,n=n.progress),r(n)&&!n.length&&(n=null)),e._progress=n,e._modBy=e._modDataCount=null;var s=e._downstream;return s&&s.dirty(),i}u.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},u.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},u.pipe=function(e){(this._downstream!==e||this._dirty)&&(this._downstream=e,e._upstream=this,e.dirty())},u.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},u.getUpstream=function(){return this._upstream},u.getDownstream=function(){return this._downstream},u.setOutputEnd=function(e){this._outputDueEnd=this._settedOutputEnd=e},t.createTask=a}}]);