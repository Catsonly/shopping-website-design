(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2334ee3b"],{"0ad8":function(t,e,r){"use strict";var s=r("2026"),a=r.n(s);a.a},2026:function(t,e,r){},2166:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return l}));var s=r("bc3a"),a=r.n(s),i=(r("4328"),"http://localhost:3000/users/");function n(t){return a.a.post(i+"addCart",t)}function o(t){return a.a.post(i+"getShopCart",t)}function l(t){return a.a.post(i+"deleteCart",t)}},"3d01":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("el-row",{staticClass:"header"},[s("el-col",{staticStyle:{height:"50px"},attrs:{span:16}},[s("img",{staticClass:"logo",staticStyle:{cursor:"pointer"},attrs:{src:r("cac3"),alt:""},on:{click:t.back}})]),s("el-col",{attrs:{span:4}},[s("i",{staticClass:"el-icon-user"}),t.hasLogin?s("span",[t._v(t._s(t.userInfo.name))]):t._e(),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.hasLogin,expression:"!hasLogin"}],on:{click:function(e){return t.login(1)}}},[t._v("登录")]),t._v("/"),t.hasLogin?t._e():s("span",{on:{click:function(e){return t.login(0)}}},[t._v("注册")]),t.hasLogin?s("span",{on:{click:t.loginout}},[t._v("退出")]):t._e()]),s("el-col",{attrs:{span:2}},[s("i",{staticClass:"el-icon-shopping-cart-full"}),s("span",{on:{click:t.goShopCart}},[t._v("购物车")])]),s("el-col",{attrs:{span:2}},[s("i",{staticClass:"el-icon-goods"}),s("span",{on:{click:t.goMyOrder}},[t._v("订单")])])],1),s("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#333","text-color":"#fff","active-text-color":"#ffd04b"}},t._l(t.navGender,(function(e,r){return s("el-submenu",{key:r,ref:e.id,refInFor:!0,attrs:{index:r.toString()}},[s("template",{slot:"title"},[t._v(t._s(e.name))]),t._l(t.navSeries,(function(e,a){return s("div",{key:a,staticClass:"subTitle"},[s("el-menu-item",{ref:e.id,refInFor:!0,attrs:{index:r+"-"+a},on:{click:function(e){return t.navSelect(r,a)}}},[t._v(t._s(e.name))])],1)}))],2)})),1),s("el-dialog",{staticClass:"dialog",attrs:{title:t.dialogTitle,visible:t.registerVisible,center:"",width:"35%"},on:{"update:visible":function(e){t.registerVisible=e}}},[1===t.dialogStatus?s("el-form",{attrs:{mode:t.loginForm,"label-width":"120px","label-position":"right"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名",maxlength:"30"},model:{value:t.loginForm.name,callback:function(e){t.$set(t.loginForm,"name",e)},expression:"loginForm.name"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",maxlength:"30"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1)],1):s("el-form",{attrs:{mode:t.registerFrom,"label-width":"120px","label-position":"right"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名",maxlength:"30"},model:{value:t.registerFrom.name,callback:function(e){t.$set(t.registerFrom,"name",e)},expression:"registerFrom.name"}})],1),s("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[s("el-input",{staticClass:"input",attrs:{placeholder:"请输入手机号码",maxlength:"30"},model:{value:t.registerFrom.phone,callback:function(e){t.$set(t.registerFrom,"phone",e)},expression:"registerFrom.phone"}})],1),s("el-form-item",{attrs:{label:"性别",prop:"gender"}},[s("el-radio-group",{model:{value:t.registerFrom.gender,callback:function(e){t.$set(t.registerFrom,"gender",e)},expression:"registerFrom.gender"}},[s("el-radio",{attrs:{label:"0"}},[t._v("女")]),s("el-radio",{attrs:{label:"1"}},[t._v("男")])],1)],1),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",maxlength:"30"},model:{value:t.registerFrom.password,callback:function(e){t.$set(t.registerFrom,"password",e)},expression:"registerFrom.password"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{staticClass:"input",attrs:{placeholder:"请输入邮箱",maxlength:"30"},model:{value:t.registerFrom.email,callback:function(e){t.$set(t.registerFrom,"email",e)},expression:"registerFrom.email"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.registerVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.dialogConfirm}},[t._v("确 定")])],1)],1)],1)},a=[],i=(r("b0c0"),r("498a"),r("c40e")),n=r("c24f"),o=r("0e0b"),l=r.n(o),c={name:"navBar",data:function(){return{navGender:[],navSeries:[],banner:[],dialogStatus:1,dialogTitle:"登录",registerVisible:!1,registerFrom:{name:"",phone:"",gender:"0",password:"",email:""},loginForm:{name:"",password:""},hasLogin:!1,userInfo:{},hotGoods:[],newGoods:[]}},created:function(){this.getCategoryGender_(),this.getCategorySeries_(),localStorage.getItem("userInfo")&&(this.hasLogin=!0,this.userInfo=JSON.parse(localStorage.getItem("userInfo")))},methods:{goShopCart:function(){this.userInfo.id?this.$router.push("/shoppingCart"):this.$message.info("请先登录")},goMyOrder:function(){this.userInfo.id?this.$router.push("/myOrder"):this.$message.info("请先登录")},back:function(){this.$router.push("/")},navSelect:function(t,e){"/goodsList"==this.$route.path?this.$emit("changeList",{gid:this.navGender[t].gid,sid:this.navSeries[e].sid}):this.$router.push({path:"/goodsList",query:{gid:this.navGender[t].gid,sid:this.navSeries[e].sid}})},getCategoryGender_:function(){var t=this;Object(i["b"])().then((function(e){t.navGender=e.data.data}))},getCategorySeries_:function(){var t=this;Object(i["c"])().then((function(e){t.navSeries=e.data.data}))},goUser:function(){this.$router.push("/user")},login:function(t){this.dialogTitle=0==t?"注册":"登录",this.dialogStatus=t,this.registerVisible=!0},dialogConfirm:function(){var t=this;if(0==this.dialogStatus){for(var e in this.registerFrom)if(""==l.a.trim(this.registerFrom[e]))return void this.$message.error("请检查输入是否完整");if(!l.a.isTel(this.registerFrom.phone))return void this.$message.error("请输出正确手机号");if(!l.a.isEmail(this.registerFrom.email))return void this.$message.error("请输出正确邮箱");Object(n["b"])(this.registerFrom).then((function(e){0==e.data.code?(t.$message.success("注册成功, 请登录"),t.registerFrom={name:"",phone:"",gender:"0",password:"",email:""},t.dialogStatus=1):2==e.data.code?t.$confirm("该手机号已被注册, 是否跳转登录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.registerFrom={name:"",phone:"",gender:"0",password:"",email:""},t.dialogStatus=1})):t.$message.error(e.data.msg)}))}else{if(""==l.a.trim(this.loginForm.name))return void this.$message.error("请输入用户名");if(""==l.a.trim(this.loginForm.password))return void this.$message.error("请输入密码");Object(n["a"])(this.loginForm).then((function(e){console.log(e),2==e.data.code?t.$confirm("用户不存在, 是否跳转注册?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loginForm={name:"",password:""},t.dialogStatus=0})):0==e.data.code?(t.loginForm={name:"",password:""},t.$message.success("登陆成功"),t.hasLogin=!0,t.userInfo=e.data.data,t.registerVisible=!1,localStorage.setItem("userInfo",JSON.stringify(e.data.data))):t.$message.error(e.data.msg)}))}},loginout:function(){this.hasLogin=!1,this.userInfo={},localStorage.removeItem("userInfo"),this.$router.push("/")}}},u=c,d=(r("0ad8"),r("2877")),g=Object(d["a"])(u,s,a,!1,null,"0912a901",null);e["a"]=g.exports},"498a":function(t,e,r){"use strict";var s=r("23e7"),a=r("58a8").trim,i=r("c8d2");s({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var s=r("1d80"),a=r("5899"),i="["+a+"]",n=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),l=function(t){return function(e){var r=String(s(e));return 1&t&&(r=r.replace(n,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},"63f0":function(t,e,r){},a984:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("navBar"),r("div",{staticClass:"content"},[t._l(t.cartList,(function(e,s){return r("div",{key:e.id,staticClass:"item"},[r("el-col",{staticClass:"left",attrs:{span:6}},[r("el-image",{attrs:{src:e.goods_img,fit:"fit"}})],1),r("el-col",{staticClass:"middle",attrs:{span:14}},[r("p",{staticClass:"title"},[t._v(t._s(e.goods_title))]),r("el-input-number",{staticClass:"number",attrs:{min:1,max:100,size:"small",precision:0},on:{change:function(e){return t.handleSingle(s)}},model:{value:e.num,callback:function(r){t.$set(e,"num",r)},expression:"item.num"}}),r("span",{staticClass:"price"},[t._v("￥"+t._s(e.price))])],1),r("el-col",{staticClass:"right",attrs:{span:4}},[r("div",{on:{click:function(r){return t.deleteItem(e)}}},[t._v("删除")])])],1)})),r("div",{staticClass:"total"},[r("el-button",{attrs:{type:"primary"}},[t._v("共"+t._s(t.total)+"件")]),r("el-button",{attrs:{type:"danger"},on:{click:t.goBuy}},[t._v("立即下单")])],1)],2)],1)},a=[],i=r("3d01"),n=r("2166"),o={components:{navBar:i["a"]},data:function(){return{cartList:[],total:""}},created:function(){JSON.parse(localStorage.getItem("userInfo"))?this.getCart_():this.$message.info("请先登录")},methods:{getCart_:function(){var t=this;Object(n["c"])({uid:JSON.parse(localStorage.getItem("userInfo")).id}).then((function(e){for(var r in e.data.data)e.data.data[r].singlePirce=e.data.data[r].price/e.data.data[r].num;t.cartList=e.data.data,t.total=t.cartList.length}))},handleSingle:function(t){this.cartList[t].price=this.cartList[t].num*this.cartList[t].singlePirce;var e={};e=Object.assign(this.cartList[t],{}),e.uid=this.cartList[t].user_id,Object(n["a"])(e).then((function(t){}))},deleteItem:function(t){var e=this,r={uid:t.user_id,gid:t.gid};Object(n["b"])(r).then((function(t){0==t.data.code?(e.$message.success("删除成功"),e.getCart_()):e.$message.error("删除失败，请稍后重试")}))},goBuy:function(){this.$router.push({path:"buy",query:{origin:"cart"}})}}},l=o,c=(r("f770"),r("2877")),u=Object(c["a"])(l,s,a,!1,null,"39bf4a3e",null);e["default"]=u.exports},b0c0:function(t,e,r){var s=r("83ab"),a=r("9bf2").f,i=Function.prototype,n=i.toString,o=/^\s*function ([^ (]*)/,l="name";s&&!(l in i)&&a(i,l,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(t){return""}}})},c24f:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return c}));var s=r("bc3a"),a=r.n(s),i=(r("4328"),"http://localhost:3000/users/");function n(t){return a.a.post(i+"register",t)}function o(t){return a.a.post(i+"login",t)}function l(t){return a.a.post(i+"updateUser",t)}function c(t){return a.a.post(i+"resetPwd",t)}},c8d2:function(t,e,r){var s=r("d039"),a=r("5899"),i="​᠎";t.exports=function(t){return s((function(){return!!a[t]()||i[t]()!=i||a[t].name!==t}))}},f770:function(t,e,r){"use strict";var s=r("63f0"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-2334ee3b.fddcb1c1.js.map