webpackJsonp([1],{"2mV7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("gNcp"),s={};a.keys().forEach(function(t){"./index.js"!==t&&(s[t.replace(/(\.\/|\.js)/g,"")]=a(t).default)}),e.default=s},"6vLl":function(t,e){},DFxo:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={name:"svg-icon",props:{iconName:{type:String}},computed:{svgData:function(){return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16 4 4 0 1 1 0-8 4 4 0 1 0 0-8zm0 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>'}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"svg-icon",domProps:{innerHTML:this._s(this.svgData)}})},staticRenderFns:[]},c={name:"app",components:{svgIcon:n("VU/8")(s,i,!1,null,null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app",attrs:{id:"app"}},[e("router-view"),this._v(" "),e("footer",{staticClass:"footer"},[e("div",{staticClass:"footer--item"},[this._v("\n      Made with "),e("svg-icon",{attrs:{"icon-name":"yin-yang"}}),this._v(" by "),e("a",{attrs:{href:"https://twitter.com/stanosmith"}},[this._v("@stanosmith")])],1),this._v(" "),this._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer--item"},[e("a",{attrs:{href:"https://www.contentful.com/",rel:"nofollow",target:"“_blank”"}},[e("img",{staticStyle:{"max-width":"100px",width:"100%"},attrs:{src:"https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg",alt:"Powered by Contentful"}})])])}]};var r=n("VU/8")(c,o,!1,function(t){n("DFxo")},null,null).exports,l=n("/ocq"),u=n("Dd8w"),d=n.n(u),m=n("NYxO"),p=n("/qmR"),g=n.n(p),f={name:"feather-icon",props:{iconName:{type:String,default:"activity"}},computed:{svgData:function(){return g.a.icons[this.iconName].toSvg()}}},I={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"f-icon",domProps:{innerHTML:this._s(this.svgData)}})},staticRenderFns:[]},h={name:"home",data:function(){return{msg:"Vuepapers"}},components:{fIcon:n("VU/8")(f,I,!1,null,null,null).exports},computed:d()({},Object(m.b)({allWallpapers:function(t){return t.Contentful.allWallpapers}}))},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hero"},[a("div",{staticClass:"hero--content"},[a("img",{staticClass:"logo img-fluid",attrs:{src:n("n5Qz")}}),t._v(" "),a("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0)])]),t._v(" "),t.allWallpapers.items?a("section",{staticClass:"section cards"},t._l(t.allWallpapers.items,function(e){return a("div",{key:e.sys.id,staticClass:"card"},[a("img",{attrs:{src:"https://res.cloudinary.com/stanosmith/image/upload/w_200"+e.fields.cloudinaryUrl,alt:""}}),t._v(" "),a("h3",[t._v(t._s(e.fields.name))]),t._v(" "),a("div",{staticClass:"card--controls"},[a("a",{attrs:{href:"https://res.cloudinary.com/stanosmith/image/upload"+e.fields.cloudinaryUrl,title:"Download "+e.fields.name}},[a("f-icon",{attrs:{"icon-name":"download"}})],1)])])})):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Vue.js themed wallpapers for nerds.")])])}]};var M=n("VU/8")(h,v,!1,function(t){n("6vLl")},"data-v-51ccf520",null).exports,w=n("2mV7");a.a.use(m.a);var y=new m.a.Store({modules:w.default,strict:!1});a.a.use(l.a);var D=new l.a({routes:[{path:"/",name:"Home",component:M,beforeEnter:function(t,e,n){y.dispatch("getSpace"),y.dispatch("getAllEntries"),y.dispatch("getAllWallpapers"),n()}}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:D,store:y,components:{App:r},template:"<App/>"})},gNcp:function(t,e,n){var a={"./Contentful.js":"pFRy","./index.js":"2mV7"};function s(t){return n(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(a)},s.resolve=i,t.exports=s,s.id="gNcp"},n5Qz:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9Ijg3IiB2aWV3Qm94PSIwIDAgMTUwIDg3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+dnVlcGFwZXJzLW1hcms8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUzIDYzKSI+CjxnIGlkPSJ2dWVwYXBlcnMtbWFyayI+CjxnIGlkPSJHcm91cCI+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMF9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTMgLTYzKSIgZmlsbD0iIzRBNDA2MyIvPgo8L2c+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMV9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzMuMDIgLTYzKSIgZmlsbD0iI0U0QjdFNSIvPgo8L2c+CjwvZz4KPGcgaWQ9Ikdyb3VwIj4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgwX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwMyAtNjMpIiBmaWxsPSIjNEE0MDYzIi8+CjwvZz4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgxX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMy4wMiAtNjMpIiBmaWxsPSIjRTRCN0U1Ii8+CjwvZz4KPC9nPgo8ZyBpZD0iVmVjdG9yIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDJfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEzIC0zNykiIGZpbGw9IiM0MkI4ODMiLz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDYxLjUzODUgMEwgNTAuMDI1NSAyMC4xMTI0TCAzOC40NjE1IDBMIDAgMEwgNTAuMDI1NSA4N0wgMTAwIDBMIDYxLjUzODUgMFoiLz4KPHBhdGggaWQ9InBhdGgxX2ZpbGwiIGQ9Ik0gNDEuNTE4MSAwTCAzMC4wMDUxIDIwLjExMjRMIDE4LjQ0MTIgMEwgLTMuODg2NmUtMDcgMEwgMzAuMDA1MSA1Mi4yTCA2MC4wMTAyIDBMIDQxLjUxODEgMFoiLz4KPHBhdGggaWQ9InBhdGgyX2ZpbGwiIGQ9Ik0gMzAgMjZMIDE1IDBMIDAgMjZMIDMwIDI2WiIvPgo8L2RlZnM+Cjwvc3ZnPgo="},pFRy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("//Fk"),s=n.n(a),i=n("mtWM"),c=n.n(i);c.a.defaults.baseURL="https://cdn.contentful.com/spaces";var o="8055074a7d598e39a79f67cd73a19af5222c862ae3209ef7a84fbbc18428f5cd",r=function(t){return console.log(t),s.a.reject(t.response.data.message)},l={getSpaceSuccess:function(t,e){t.spaceData=e},getEntriesSuccess:function(t,e){t.allEntries=e},getWallpapersSuccess:function(t,e){t.allWallpapers=e},getEntrySuccess:function(t,e){console.log(e)}},u={getSpace:function(t){return c.a.get("/n7eu4msyhu02",{params:{access_token:o}}).then(function(e){return t.commit("getSpaceSuccess",e.data),e.data},r)},getAllEntries:function(t){return c.a.get("/n7eu4msyhu02/entries",{params:{access_token:o,include:10}}).then(function(e){return t.commit("getEntriesSuccess",e.data),e.data},r)},getAllWallpapers:function(t){return c.a.get("/n7eu4msyhu02/entries",{params:{access_token:o,include:5,content_type:"wallpaper"}}).then(function(e){return t.commit("getWallpapersSuccess",e.data),e.data},r)}};e.default={state:{spaceData:{},allEntries:[],allWallpapers:[]},getters:{},mutations:l,actions:u}}},["NHnr"]);
//# sourceMappingURL=app.5c848cf413f599efae11.js.map