webpackJsonp([0],{0:function(t,e){},"1/oy":function(t,e){},"7Otq":function(t,e,a){t.exports=a.p+"static/img/logo.23ae6db.png"},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},JTFC:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o=a("8+8L"),s={name:"page-helper",props:{title:{type:String,required:!0}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("head",[a("h3",[t._v(t._s(t.title))])]),t._v(" "),t._t("content"),t._v(" "),t._t("foot")],2)},staticRenderFns:[]};var i={name:"App",components:{page:a("VU/8")(s,r,!1,function(t){a("w+mV")},"data-v-2af7aabe",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{staticClass:"image",staticStyle:{width:"180px"},attrs:{alt:"logo",src:a("7Otq")}}),this._v(" "),e("page",{attrs:{title:"Internet For Everything"}},[e("router-view",{attrs:{slot:"content"},slot:"content"})],1)],1)},staticRenderFns:[]};var c=a("VU/8")(i,l,!1,function(t){a("bdSO")},null,null).exports,p=a("/ocq"),m={name:"form-helper",props:{title:{type:String,required:!0},description:{required:!1}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("head",[a("h3",[t._v(t._s(t.title))]),t._v(" "),a("p",[t._v(t._s(t.description))])]),t._v(" "),t._t("body"),t._v(" "),t._t("buttons"),t._v(" "),t._t("list"),t._v(" "),t._t("foot")],2)},staticRenderFns:[]};var d={name:"home",components:{formLayout:a("VU/8")(m,u,!1,function(t){a("rIKg")},"data-v-cd00a148",null).exports},data:function(){return{data:{name:"",email:"",company:"",company_profile:"",message:""}}},methods:{isUrl:function(t){var e=document.createElement("a");return e.href=t,e.remove(),!0},isEmail:function(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},send:function(){var t=[];if(!this.data.name.length>3&&t.push("Please enter name"),!this.data.company.length>5&&t.push("Please enter company name"),this.isEmail(this.data.email)||t.push("Please enter correct email addrerss"),this.isUrl(this.data.company_profile)||t.push("Please enter correct company profile link"),!this.data.message.length>5&&t.push("Please enter message"),!t.length>0){var e="Name: "+this.data.name+"\n";e+="email: "+this.data.email+"\n",e+="company: "+this.data.company+"\n",e+="profile: "+this.data.company_profile+"\n",e+="message: \n\t"+this.data.message+"\n",this.$http.post("//localhost:5000/internet-for-everything/us-central1/api/mail",{to:"shakir.mengrani@gmail.com",subject:"Received someone's message",text:e},{headers:{"Content-Type":"application/json",Authorization:"6bc7b47461fb114ee4beafa93b94dadf09e4e223491251337b40cef1a2a4075ca9328a11529961433da66f054a3ed50b17ed6e50d3d0844356ba6b"}}).then(function(t){console.log(t)}).catch(function(t){return console.log(t)})}else console.log(t)}},created:function(){}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("form-layout",{attrs:{title:"",description:"Fill the form along with your problem about business we will provide you best solutions"}},[a("div",{attrs:{slot:"body"},slot:"body"},[a("b-row",{staticClass:"pb-2"},[a("b-col",[a("b-form-input",{attrs:{type:"text",placeholder:"Enter your name"},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})],1)],1),t._v(" "),a("b-row",{staticClass:"pb-2"},[a("b-col",[a("b-form-input",{attrs:{type:"email",placeholder:"Enter your email address"},model:{value:t.data.email,callback:function(e){t.$set(t.data,"email",e)},expression:"data.email"}})],1)],1),t._v(" "),a("b-row",{staticClass:"pb-2"},[a("b-col",[a("b-form-input",{attrs:{type:"text",placeholder:"Enter your company name"},model:{value:t.data.company,callback:function(e){t.$set(t.data,"company",e)},expression:"data.company"}})],1)],1),t._v(" "),a("b-row",{staticClass:"pb-2"},[a("b-col",[a("b-form-input",{attrs:{type:"text",placeholder:"Enter your company profile link"},model:{value:t.data.company_profile,callback:function(e){t.$set(t.data,"company_profile",e)},expression:"data.company_profile"}})],1)],1),t._v(" "),a("b-row",{staticClass:"pb-2"},[a("b-col",[a("b-form-textarea",{attrs:{placeholder:"Enter something",rows:3,"max-rows":6},model:{value:t.data.message,callback:function(e){t.$set(t.data,"message",e)},expression:"data.message"}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"buttons"},slot:"buttons"},[a("b-button",{attrs:{variant:"success"},on:{click:function(e){return e.preventDefault(),t.send(e)}}},[t._v("Send")])],1)])],1)},staticRenderFns:[]};var h=a("VU/8")(d,f,!1,function(t){a("JTFC")},"data-v-5295f3fb",null).exports;n.a.use(p.a);var b=new p.a({routes:[{path:"/",name:"Home",component:h}],mode:"history"}),v=a("e6fC");a("Jmt5"),a("9M+g");n.a.config.productionTip=!1,n.a.use(v.a),n.a.use(o.a),new n.a({el:"#app",router:b,components:{App:c},template:"<App/>"})},bdSO:function(t,e){},rIKg:function(t,e){},"w+mV":function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.10c289a2d37a5d36ba40.js.map