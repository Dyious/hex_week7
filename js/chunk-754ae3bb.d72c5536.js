(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-754ae3bb"],{a55b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container flex-center pt-5"},[a("form",{staticClass:"card border-place my-5",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"input-text-info my-2",attrs:{type:"text",id:"email",placeholder:"@"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input-text-info my-2",attrs:{type:"password",id:"password",placeholder:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),a("div",{ref:"pleaseInsert",staticClass:"text-danger text-small hide"},[t._v(" 請輸入資料")]),a("input",{staticClass:"btn btn-block btn-sm bg-sm-place text-white mt-4",attrs:{type:"button",value:"登入"},on:{click:function(e){return t.signin()}}})])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-place"},[a("div",{staticClass:"container"},[a("span",{staticClass:"text-white text-title"},[t._v("管理")])])])}],i=(a("b0c0"),a("d3b7"),{data:function(){return{user:{email:"",password:""}}},methods:{signin:function(){var t=this,e=this.user;if(""!==e.name&&""!==e.password){var a=this.$loading.show();this.$http.post("".concat("https://course-ec-api.hexschool.io/api","/auth/login"),e).then((function(e){console.log(e.data);var s=e.data.token,n=e.data.expired;t.$cookie.set("token",s,new Date(1e3*n)),a.hide(),t.$router.push("/dashboard/products")})).catch((function(t){alert(t)})).finally((function(){a.hide()}))}else this.$refs.pleaseInsert.classList.remove("hide")}},watch:{user:{handler:function(){this.$refs.pleaseInsert.classList.add("hide")},deep:!0}}}),r=i,o=(a("d6db"),a("2877")),c=Object(o["a"])(r,s,n,!1,null,null,null);e["default"]=c.exports},b0c0:function(t,e,a){var s=a("83ab"),n=a("9bf2").f,i=Function.prototype,r=i.toString,o=/^\s*function ([^ (]*)/,c="name";s&&!(c in i)&&n(i,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},d6db:function(t,e,a){"use strict";var s=a("e67a"),n=a.n(s);n.a},e67a:function(t,e,a){}}]);
//# sourceMappingURL=chunk-754ae3bb.d72c5536.js.map