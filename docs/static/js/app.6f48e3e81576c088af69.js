webpackJsonp([1],{ISnw:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("h2",[a("a",{attrs:{href:"http://cassiedurr.com/WATS4030-Capstone/#/"}},[t._v("Donate"),a("br"),t._v("More")])]),t._v(" "),a("img",{attrs:{src:"#",width:"30",height:"30",alt:""}})]),t._v(" "),a("ul",{staticClass:"nav justify-content-end"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{href:"#"}},[t._v("Find a Cause")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Find a Charity")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#/WhyDonate"}},[t._v("Why Donate")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("About")])])])])}]};var i=a("VU/8")({name:"App"},n,!1,function(t){a("eruo")},null,null).exports,r=a("/ocq"),c=a("mtWM"),o=a.n(c),l={name:"CharityMaster",data:function(){return{causeList:["Choose a cause","Animals","Arts and Culture","Children","Human Rights","Education","Environment","Family","Health","Hunger","International Aid","LGBT","Military","Religion","Research","STEM","Women"],causeSelection:"Choose a cause",citySearch:null,errors:[],cause:[],searchResults:[]}},methods:{findCharities:function(){var t=this;o.a.get("http://crossorigin.me/http://data.orghunter.com/v1/charitysearch",{params:{user_key:"733478d5a8680b6d4c57b26d07d4b3fc",searchTerm:this.cause,city:this.citySearch}}).then(function(e){t.searchResults=e.data.data}).catch(function(e){t.errors.push(e)})}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charities"},[a("h1",[t._v("Find a charity")]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.findCharities(e)}}},[a("label",{attrs:{for:"causeSelection"}},[t._v("Choose a cause:")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.cause,expression:"cause"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.cause=e.target.multiple?a:a[0]}}},t._l(t.causeList,function(e){return a("option",{key:e},[t._v(t._s(e)+" ")])})),t._v(" "),a("p",[t._v("City: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.citySearch,expression:"citySearch"}],attrs:{placeholder:"City"},domProps:{value:t.citySearch},on:{input:function(e){e.target.composing||(t.citySearch=e.target.value)}}}),t._v(" "),a("button",{on:{click:t.findCharities}},[t._v("Search")])])]),t._v(" "),a("div",{staticClass:"list"},[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.searchResults.length>0,expression:"searchResults.length > 0"}],staticClass:"char-results"},t._l(t.searchResults,function(e,s){return a("li",{key:s,staticClass:"results-list"},[a("p",{staticClass:"char-name"},[t._v(t._s(e.charityName)+", "+t._s(e.ein)+" ")]),t._v(" "),a("p",{staticClass:"char-city"},[t._v(t._s(e.city)+", "+t._s(e.state)+" "+t._s(e.zipCode))]),t._v(" "),a("p",[a("a",{attrs:{href:e.donationUrl}},[t._v("Donate here!")])]),t._v(" "),a("router-link",{attrs:{to:{name:"CharityDetail",params:{ein:e.ein}}}},[t._v("More Information "+t._s(e.ein))]),t._v(" "),a("router-view")],1)}))])])},staticRenderFns:[]};var h=a("VU/8")(l,u,!1,function(t){a("Neny")},"data-v-92fc9b0e",null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test"},[e("p",[this._v("test")])])}]};var d=a("VU/8")({name:"Test",data:function(){return{}}},v,!1,function(t){a("gHE7")},"data-v-4119dbda",null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"whyDonate"},[e("h2",[this._v("Why Donate")])])}]};var m=a("VU/8")({name:"WhyDonate",data:function(){return{}}},_,!1,function(t){a("eb48")},"data-v-bd0d0162",null).exports,p={name:"CharityDetail",data:function(){return{errors:[],basicResult:null}},created:function(){var t=this;o.a.get("http://crossorigin.me/http://data.orghunter.com/v1/charitybasic",{params:{user_key:"733478d5a8680b6d4c57b26d07d4b3fc",ein:this.$route.params.ein}}).then(function(e){t.basicResult=response.data.data}).catch(function(e){t.errors.push(e)})}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"test"},[a("p",[t._v("Charity Detail")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.basic.Result>0,expression:"basic.Result > 0"}],staticClass:"detail-results"},[a("p",{staticClass:"charity-classification"},[t._v(t._s(t.basicResult.classification)+" ")]),t._v(" "),a("p",[t._v(t._s(t.basicResult)+" ")])])])},staticRenderFns:[]};var y=a("VU/8")(p,f,!1,function(t){a("ISnw")},"data-v-3460cd5c",null).exports;s.a.use(r.a);var C=new r.a({routes:[{path:"/",name:"CharityMaster",component:h},{path:"/test",name:"Test",component:d},{path:"/whyDonate",name:"WhyDonate",component:m},{path:"/:ein/charitydetail",name:"CharityDetail",component:y}]}),b=a("AYPi"),g=a.n(b);s.a.config.productionTip=!1,new s.a({el:"#app",router:C,components:{App:i},template:"<App/>"}),s.a.use(g.a,{id:"UA-114983003-1"})},Neny:function(t,e){},eb48:function(t,e){},eruo:function(t,e){},gHE7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6f48e3e81576c088af69.js.map