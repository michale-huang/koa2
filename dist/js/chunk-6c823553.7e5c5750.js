(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c823553"],{1364:function(t,e,n){},"4e14":function(t,e,n){},5670:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("Layout",[a("Sider",{staticClass:"menu-wrapper",attrs:{collapsible:"","collapsed-width":78},model:{value:t.isCollapsed,callback:function(e){t.isCollapsed=e},expression:"isCollapsed"}},[a("div",{staticClass:"logo-wrapper"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("cf05"),alt:"这里是logo"}})])]),a("Menu",{class:t.menuitemClasses,attrs:{"active-name":t.menuActiveKey,width:"auto",accordion:""},on:{"on-select":t.goTo}},t._l(t.navList,(function(e,n){return a("div",{key:n},[e.menuRoute?a("MenuItem",{attrs:{name:e.menuCode}},[a("div",{staticClass:"menu-name"},[a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-andaotongcaidanICON_shouye"}})]),t._v(" "+t._s(e.menuName)+" ")])]):a("Submenu",{attrs:{name:e.menuCode}},[a("template",{slot:"title"},[a("div",{staticClass:"menu-name"},[a("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-andaotongcaidanICON_shouye"}})]),t._v(" "+t._s(e.menuName)+" ")])]),t._l(e.menuInfoList,(function(e,n){return a("MenuItem",{key:n,attrs:{name:e.menuCode}},[a("div",{staticClass:"menu-name"},[a("span",{staticClass:"dot"}),t._v(" "+t._s(e.menuName)+" ")])])}))],2)],1)})),0)],1),a("Layout",{staticClass:"right-container"},[a("Header",{staticClass:"header-wrapper"},[a("Tab",{ref:"Tab"}),a("div",{staticClass:"user-info"},[a("img",{attrs:{src:"",alt:""}}),a("span",{staticClass:"user-name"},[t._v("用户名")]),a("p",{staticClass:"user-post"},[a("Icon",{attrs:{type:"ios-contact-outline"}}),a("span",[t._v("安道亿联-市场部-物流")])],1)])],1),a("Content",[a("router-view")],1)],1)],1)],1)},s=[],r=(n("b4fb"),n("fe59"),n("d497"),n("08ba"),n("5c62")),o=n("80a0"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bscroll",staticClass:"tab-warpper"},[n("div",{staticClass:"tab-scroll-warpper",style:{width:126*t.tabMenuArr.length+"px"}},t._l(t.tabMenuArr,(function(e,a){return n("div",{key:e.key,staticClass:"tab-item",class:{"tab-item-active":t.tabIndex==e.key},on:{click:function(n){return n.stopPropagation(),t.handleTabItem(e)}}},[n("div",{staticClass:"title"},[t._v(" "+t._s(e.title)+" ")]),"home"!==e.key?n("Icon",{staticClass:"tab-item-icon",attrs:{type:"ios-close"},on:{click:function(n){return n.stopPropagation(),t.handleColse(e,a)}}}):t._e()],1)})),0)])},u=[],c=(n("ea69"),n("ae8c")),l={data:function(){return{tabMenuArr:[],tabIndex:""}},computed:Object(o["a"])({},Object(c["b"])(["routerTags","routerTagName"])),mounted:function(){var t=this;this.tabMenuArr=JSON.parse(sessionStorage.getItem("tabMenuArr")),this.tabIndex=sessionStorage.getItem("routerTagName"),this.$nextTick((function(){var e=t.$refs.bscroll;t.aBScroll=new BScroll(e,{scrollX:!0})}))},watch:{routerTags:function(t){var e=this;this.tabMenuArr=t,this.$nextTick((function(){var t=e.$refs.bscroll;e.aBScroll=new BScroll(t,{scrollX:!0})}))},routerTagName:function(t){this.tabIndex=t}},methods:{handleTabItem:function(t){this.tabIndex=t.key,sessionStorage.setItem("routerTagName",t.key),this.$route.path!==t.url&&this.$router.push(t.url)},handleColse:function(t,e){t.key===this.tabIndex&&(sessionStorage.setItem("routerTagName",this.tabMenuArr[e-1].key),this.tabIndex=this.tabMenuArr[e-1].key,this.$router.push(this.tabMenuArr[e-1].url)),this.tabMenuArr.splice(e,1),sessionStorage.setItem("tabMenuArr",JSON.stringify(this.tabMenuArr))}}},m=l,A=(n("a42e"),n("4023")),b=Object(A["a"])(m,i,u,!1,null,"2baf4ed4",null),d=b.exports,g=(n("a160"),n("6be1")),p={components:{Tab:d},data:function(){return{menuActiveKey:"authList",isCollapsed:!1,menuSearch:"",MRouter:this.$router.options.routes,tabMenuArr:[],subMenuArr:[],navList:[]}},created:function(){var t=this;Object(g["d"])({path:"TEST"}).then((function(e){var n=e.data;t.navList=n})),null==sessionStorage.getItem("tabMenuArr")&&sessionStorage.setItem("tabMenuArr",JSON.stringify([{key:"home",title:"首页",url:"/"}])),null==sessionStorage.getItem("routerTagName")&&sessionStorage.setItem("routerTagName","home"),this.tabMenuArr=JSON.parse(sessionStorage.getItem("tabMenuArr"))},computed:Object(o["a"])({menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},Object(c["b"])(["routerTags"])),methods:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["addTags","routerTagName"])),{},{goTo:function(t){var e=null,n=[];this.navList.forEach((function(t){var e=t.menuInfoList||[];n=t.menuRoute?[].concat(Object(r["a"])(n),[t]):[].concat(Object(r["a"])(n),Object(r["a"])(e))})),n.forEach((function(n){n.menuCode==t&&(e={title:n.menuName,url:n.menuRoute,key:n.menuCode})}));var a=this.tabMenuArr.some((function(t){return t.key==e.key}));a||(this.tabMenuArr=[].concat(Object(r["a"])(this.tabMenuArr),[e])),sessionStorage.setItem("tabMenuArr",JSON.stringify(this.tabMenuArr)),sessionStorage.setItem("routerTagName",e.key),this.routerTagName(e.key),this.addTags(this.tabMenuArr),this.$router.push({path:e.url})}})},f=p,h=(n("f96b"),Object(A["a"])(f,a,s,!1,null,"49ae6d87",null));e["default"]=h.exports},"6be1":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return c}));var a=n("2934"),s=n("4ec3"),r=function(t){return Object(a["b"])("".concat(s["d"],"/appInfo/appInfoQueryList"),t)},o=function(t){return Object(a["a"])("".concat(s["d"],"/menu/menuInfoQueryByAppCode"),t)},i=function(t){return Object(a["b"])("".concat(s["d"],"/menu/menuInfoAdd"),t)},u=function(t){return Object(a["b"])("".concat(s["d"],"/menu/menuInfoUpdate"),t)},c=function(t){return Object(a["a"])("".concat(s["d"],"/menu/menuInfoDelete"),t)}},a42e:function(t,e,n){"use strict";var a=n("4e14"),s=n.n(a);s.a},cf05:function(t,e){t.exports="data:image/png;base64,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"},f96b:function(t,e,n){"use strict";var a=n("1364"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-6c823553.7e5c5750.js.map