webpackJsonp([1],{"2ecx":function(e,t){},Hui6:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),t("router-view")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("nav",{staticClass:"navbar"},[t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t("h2",[t("a",{attrs:{href:"http://cassiedurr.com/WATS4030-Capstone/#/"}},[this._v("Donate More")])])]),this._v(" "),t("ul",{staticClass:"nav justify-content-end"},[t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{target:"_blank",href:"#/WhyDonate"}},[this._v("Why Donate")])]),this._v(" "),t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{target:"_blank",href:"#/About"}},[this._v("About")])])])])}]};var i=a("VU/8")({name:"App"},s,!1,function(e){a("Hui6")},null,null).exports,r=a("/ocq"),o=a("mtWM"),c=a.n(o),l={name:"CharityMaster",data:function(){return{causeList:["Choose a cause","Animals","Arts and Culture","Children","Human Rights","Education","Environment","Family","Health","Hunger","International Aid","LGBT","Military","Religion","Research","STEM","Women"],citySearch:null,zipCode:[],state:[],errors:[],cause:"Choose a cause",searchResults:[]}},methods:{findCharities:function(){var e=this;c.a.get("http://crossorigin.me/http://data.orghunter.com/v1/charitysearch",{params:{user_key:"733478d5a8680b6d4c57b26d07d4b3fc",searchTerm:this.cause,city:this.citySearch}}).then(function(t){e.searchResults=t.data.data}).catch(function(t){e.errors.push(t)})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"charities container-fluid"},[a("h1",[e._v("Find a charity")]),e._v(" "),a("p",{staticClass:"first"},[e._v("There are a plethera of non-profits that you can choose to give to, and the process of selecting which organization to support can be overwhelming. Use this handy tool to search for charities in your area.")]),e._v(" "),a("form",{on:{submit:function(t){t.preventDefault(),e.findCharities(t)}}},[e.errors.length?a("p",[a("b",[e._v("Please only put city into search field")]),e._v(" "),a("ul",e._l(e.errors,function(t){return a("li",{key:t},[e._v(e._s(t))])}))]):e._e(),e._v(" "),a("label",{attrs:{for:"causeSelection"}},[e._v("Choose a cause:")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.cause,expression:"cause"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.cause=t.target.multiple?a:a[0]}}},e._l(e.causeList,function(t){return a("option",{key:t},[e._v(e._s(t)+" ")])})),e._v(" "),a("p",[e._v("City: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.citySearch,expression:"citySearch"}],attrs:{placeholder:"City"},domProps:{value:e.citySearch},on:{input:function(t){t.target.composing||(e.citySearch=t.target.value)}}}),a("button",{attrs:{id:"submit"},on:{click:e.findCharities}},[e._v("Search")])])]),e._v(" "),e._m(0),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.searchResults.lenght>0,expression:"searchResults.lenght > 0"}]},e._l(e.searchResults,function(t,n){return a("p",{key:n,staticClass:"cause-result"},[e._v(e._s(e.cause))])})),e._v(" "),a("div",{staticClass:"list"},[a("ul",{directives:[{name:"show",rawName:"v-show",value:e.searchResults.length>0,expression:"searchResults.length > 0"}],staticClass:"char-results"},e._l(e.searchResults,function(t,n){return a("li",{key:n,staticClass:"results-list"},[a("p",{staticClass:"char-name"},[e._v(e._s(t.charityName))]),e._v(" "),a("p",{staticClass:"char-city"},[e._v(e._s(t.city)+", "+e._s(t.state)+" "+e._s(t.zipCode)+" ")]),e._v(" "),a("p",[a("a",{attrs:{href:t.donationUrl}},[e._v("Donate here!")])]),e._v(" "),a("router-link",{attrs:{to:{name:"CharityDetail",params:{ein:t.ein}}}},[e._v("More Information")]),e._v(" "),a("router-view")],1)}))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"font-size":"3em",color:"black"}},[t("i",{staticClass:"fab fa-facebook-f"})])}]};var h=a("VU/8")(l,u,!1,function(e){a("Sqrj")},"data-v-33d13823",null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"test"},[t("p",[this._v("test")])])}]};var d=a("VU/8")({name:"Test",data:function(){return{}}},v,!1,function(e){a("gHE7")},"data-v-4119dbda",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"whyDonate"},[a("h3",[e._v("Reasons to Donate")]),e._v(" "),a("p",{staticClass:"header-paragraph"},[e._v("There are always reasons to give to others in need, here are a couple examples of why helping is so great!")]),e._v(" "),a("ul",[a("li",[e._v("If You Can't Volunteer: Give\n        "),a("p",[e._v("Volunteering is a great way to help others and be involved with your community, but if you're too busy to volunteer or donate your time, giving money is the perfect workaround.")])]),e._v(" "),a("li",[e._v("Bring Meaning to Your Life\n        "),a("p",[e._v("When you donate money to charity, you create opportunities to meet new people who believe in the same causes that inspire you.")])]),e._v(" "),a("li",[e._v("Get a Tax Deduction\n        "),a("p",[e._v("If you give to an IRS-approved charity, you can write off donations on your tax return. Donating money is a great way to reduce the amount of money you send off to Uncle Sam, and for a good cause, to boot.")])]),e._v(" "),a("li",[e._v("Realize that Every Little Bit Helps\n        "),a("p",[e._v("You don't need $10,000 to make a difference in someone's life. In developing countries, even just a few U.S. dollars could result in a week's worth of meals for a starving child, much-needed medical attention, and even improved schooling.")])]),e._v(" "),a("li",[e._v("Experience More Pleasure\n        "),a("p",[e._v("In research conducted by the National Institutes of Health, participants who chose to donate a portion of $100 they were provided enjoyed activated pleasure centers in the brain. Although this experiment was controlled and scientific, it did show that donating money simply makes you feel better, which is something we can all benefit from.")])])])])}]};var f=a("VU/8")({name:"WhyDonate",data:function(){return{}}},p,!1,function(e){a("USOE")},"data-v-9eadfb86",null).exports,_={name:"CharityDetail",data:function(){return{errors:[],basicResult:null}},created:function(){var e=this;console.log("ein:",this.$route.params.ein),console.log(this),c.a.get("http://crossorigin.me/http://data.orghunter.com/v1/charitybasic",{params:{user_key:"733478d5a8680b6d4c57b26d07d4b3fc",ein:this.$route.params.ein}}).then(function(t){e.basicResult=t.data.data}).catch(function(t){e.errors.push(t)})}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"test"},[a("p",[e._v("Charity Detail")]),e._v(" "),a("div",[a("p",{staticClass:"charity-classification"},[e._v(e._s(e.basicResult.classification)+" ")]),e._v(" "),a("p",[e._v(e._s(e.basicResult.foundation)+" ")]),e._v(" "),a("p",[e._v(e._s(e.basicResult.deductibility)+" ")]),e._v(" "),a("p",[e._v(e._s(e.basicResult.nteeType)+" ")])])])},staticRenderFns:[]};var y=a("VU/8")(_,m,!1,function(e){a("2ecx")},"data-v-1b9b507d",null).exports,g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"whyDonate"},[t("h2",[this._v("About")])])}]};var b=a("VU/8")({name:"WhyDonate",data:function(){return{}}},g,!1,function(e){a("mOu6")},null,null).exports;n.a.use(r.a);var C=new r.a({routes:[{path:"/",name:"CharityMaster",component:h},{path:"/test",name:"Test",component:d},{path:"/whyDonate",name:"WhyDonate",component:f},{path:"/:ein/charitydetail",name:"CharityDetail",component:y},{path:"/About",name:"About",component:b}]}),w=a("AYPi"),R=a.n(w);n.a.config.productionTip=!1,new n.a({el:"#app",router:C,components:{App:i},template:"<App/>"}),n.a.use(R.a,{id:"UA-114983003-1"})},Sqrj:function(e,t){},USOE:function(e,t){},gHE7:function(e,t){},mOu6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5854e360d732877631f4.js.map