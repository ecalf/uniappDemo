(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login"],{"0c0e":function(e,t){var i="http://api.scm.wanheglobal.com/api.php/",r={getBannerData:i+"",getCategroyData:i+"/v1/category/get-product-cate-list",getBrandData:i+"/v1/category/get-brand-list",getqualtData:i+"/v1/category/get-qualification-cate-list",getUnitData:i+"/v1/category/get-unit-category",getCountryData:i+"/v1/user/countrylist",getNeedsData:i+"/v1/needs/get-list",getInfoData:i+"/v1/needs/get-info",getQuotationData:i+"/v1/needs/quotation",getPublishData:i+"/v1/needs/publish",getModifyData:i+"/v1/needs/edit",getUploadData:i+"/v1/upload",getkindData:i+"/v1/category/get-product-kinds",getRegisterData:i+"/v1/user/register",getCodeData:i+"/v1/msg/send",getLoignData:i+"/v1/user/login",getPersonData:i+"/v1/user/identification",getManagerData:i+"/v1/user/company_info_edit",getMyneedData:i+"/v1/user/get-my-needs-list",getMyquoteData:i+"/v1/user/get-my-quotation-list",getSupplierData:i+"/v1/user/myprofiles",getEnterpriseData:i+"/v1/user/get-other-user-info",getSatusData:i+"/v1/needs/change-status",getPoolData:i+"/v1/user/get-collect-list",getCollectData:i+"/v1/user/collect",getofferData:i+"/v1/user/get-quotation-info"};e.exports=r},1333:function(e,t,i){"use strict";var r=i("877e"),n=i.n(r);n.a},"21b5":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,".input-group[data-v-2e744429]{margin:%?36.23?% 5% %?90.57?%;border-radius:%?9.05?%;overflow:hidden}.checkout-login[data-v-2e744429]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?27.17?%;-webkit-justify-content:space-around;justify-content:space-around;margin:0 auto;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?27.17?% %?0?%}.checkout-one[data-v-2e744429]{display:block;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:16px;line-height:36px;letter-spacing:0;color:#44a78d;border-bottom:%?5.43?% solid #44a78d}\n\n/* .title {\n\twidth: 130.43rpx;\n\tpadding-left: 27.17rpx;\n\tcolor: #44a78d;\n} */.input-row[data-v-2e744429]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;font-size:%?23.55?%;line-height:%?72.46?%;border-bottom:%?1.81?% solid #fff}.input-buttom[data-v-2e744429]{border-bottom:1px solid #ccc;margin-left:%?23.55?%}.action-row[data-v-2e744429]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#39b54a;position:relative;top:%?181.15?%}.action-row uni-navigator[data-v-2e744429]{color:#44a78d;padding:0 10px}.logo[data-v-2e744429]{width:%?271.73?%;height:%?59.78?%;margin:%?90.57?% auto %?36.23?%;display:block}.cu-btn[data-v-2e744429]{width:80%;height:%?72.46?%;line-height:%?72.46?%;background:#44a78d;border-radius:%?181.15?%;text-align:center;font-size:%?32.6?%;color:#fff;cursor:pointer}.input-title[data-v-2e744429]{border:%?1.81?% solid #ccc;background-color:#ccc}",""]),e.exports=t},3555:function(e,t,i){e.exports=i.p+"static/img/logo.5d32f4bd.png"},6192:function(e,t,i){"use strict";var r,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",[r("v-uni-image",{staticClass:"logo",attrs:{src:i("3555")},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.enterHome.apply(void 0,arguments)}}}),r("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)},reset:function(t){arguments[0]=t=e.$handleEvent(t),e.formReset.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"checkout-login"},[r("v-uni-text",{class:{"checkout-one":0==e.current},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkoutlogin(0)}}},[e._v("用户名登录")]),r("v-uni-text",{class:{"checkout-one":1==e.current},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkoutlogin(1)}}},[e._v("手机登录")])],1),0==e.current?r("v-uni-view",{staticClass:"input-group"},[r("v-uni-view",{staticClass:"uni-form-item"},[r("v-uni-view",{staticClass:"title"},[e._v("账号")]),r("v-uni-view",{staticClass:"uni-input"},[r("v-uni-input",{attrs:{type:"text",name:"username",value:"",placeholder:"请输入手机号/用户名"},model:{value:e.fromList.username,callback:function(t){e.$set(e.fromList,"username",t)},expression:"fromList.username"}})],1)],1),r("v-uni-view",{staticClass:"uni-form-item"},[r("v-uni-view",{staticClass:"title"},[e._v("密码")]),r("v-uni-view",{staticClass:"uni-input"},[r("v-uni-input",{attrs:{type:"password",name:"password",value:"",placeholder:"请输入密码"},model:{value:e.fromList.password,callback:function(t){e.$set(e.fromList,"password",t)},expression:"fromList.password"}})],1)],1)],1):r("v-uni-view",{staticClass:"input-group"},[r("v-uni-view",{staticClass:"uni-form-item"},[r("v-uni-view",{staticClass:"title"},[e._v("账号")]),r("v-uni-view",{staticClass:"uni-input"},[r("v-uni-input",{attrs:{type:"text",name:"mobile",value:"",placeholder:"请输入手机号"},model:{value:e.fromList.mobile,callback:function(t){e.$set(e.fromList,"mobile",t)},expression:"fromList.mobile"}})],1)],1),r("v-uni-view",{staticClass:"uni-form-item"},[r("v-uni-view",{staticClass:"title"},[e._v("验证码")]),r("v-uni-view",{staticClass:"uni-input"},[r("v-uni-view",{staticClass:"m-flex"},[r("v-uni-input",{staticClass:"m-input-fullwidth",attrs:{type:"text",name:"code",value:"",placeholder:""},model:{value:e.fromList.code,callback:function(t){e.$set(e.fromList,"code",t)},expression:"fromList.code"}}),e.get_code?r("v-uni-text",{staticClass:"send-code",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendCode()}}},[e._v("发送验证码")]):r("v-uni-text",{staticClass:"send-code"},[e._v(e._s(e.count)+"秒后重新获取")])],1)],1)],1)],1),r("v-uni-view",{staticClass:"btn-row"},[r("v-uni-button",{staticClass:"cu-btn",attrs:{"form-type":"submit"}},[e._v("登录")])],1)],1),r("v-uni-view",{staticClass:"action-row"},[r("v-uni-navigator",{attrs:{url:"/pages/user/registerEnter"}},[e._v("注册账号")]),r("v-uni-text",[e._v("|")]),r("v-uni-navigator",{attrs:{url:"/pwd/pwd"}},[e._v("忘记密码")])],1)],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))},"77ff":function(e,t,i){"use strict";var r=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("f3f3")),a=r(i("0c0e")),o=i("2f62"),s=i("f3b9"),c={data:function(){return{current:0,get_code:!0,count:60,fromList:{mobile:"",password:"",code:"",username:""},rules:[{name:"username",checkType:"notnull",checkRule:"",errorMsg:"请输入手机号或用户名"},{name:"mobile",checkType:"phoneno",checkRule:"",errorMsg:"请输入正确的手机号"},{name:"code",checkType:"string",checkRule:"6,6",errorMsg:"请输入验证码"},{name:"password",checkType:"notnull",checkRule:"",errorMsg:"请输入密码"}]}},methods:(0,n.default)({checkoutlogin:function(e){this.current=0==e?0:1},enterHome:function(){uni.switchTab({url:"/pages/index/index"})},sendCode:function(){var e=this;if(""!==this.fromList.mobile){this.get_code=!1,this.isgetcode=!0;var t=setInterval((function(){e.count--,e.count<1&&(e.get_code=!0,e.count=60,clearInterval(t))}),1e3)}else uni.showToast({title:"请输入手机号",icon:"none"});this.request({url:a.default.getCodeData,dataType:"JSON",method:"POST",data:{data:{mobile:this.fromList.mobile,type:"1"}},success:function(e){}})},formSubmit:function(e){var t=this,i=e.detail.value,r=s.check(i,this.rules);r||uni.showToast({title:s.error,icon:"none"}),r&&this.request({url:a.default.getLoignData,dataType:"JSON",method:"POST",data:{data:{type:this.fromList.mobile?"code_login":"pass_login",mobile:this.fromList.mobile,code:this.fromList.code,user_name:this.fromList.username,password:this.fromList.password,state_code:"86"}},success:function(e){if(console.log(e),200===e.code){t.login(e.data);var i="DATA "+btoa(e.data.client.uid+":"+e.data.client.user_name+":"+e.data.token),r={userId:e.data.client.uid,token:i,userName:e.data.client.user_name};uni.setStorage({key:"Token",data:r,success:function(e){uni.getStorage({key:"Token",success:function(e){}})}}),uni.switchTab({url:"/pages/personalCenter/personalCenter"})}else uni.showToast({title:e.message,icon:"none"})},fail:function(e){uni.showModal({content:"请求失败，请重试！",showCancel:!1})}})}},(0,o.mapMutations)(["login"]))};t.default=c},"877e":function(e,t,i){var r=i("21b5");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("0c0ea85e",r,!0,{sourceMap:!1,shadowMode:!1})},c71b:function(e,t,i){"use strict";i.r(t);var r=i("6192"),n=i("e591");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("1333");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"2e744429",null,!1,r["a"],o);t["default"]=c.exports},e591:function(e,t,i){"use strict";i.r(t);var r=i("77ff"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},f3b9:function(e,t,i){i("c975"),i("a9e3"),i("4d63"),i("ac1f"),i("25f0"),i("1276"),e.exports={error:"",check:function(e,t,i){console.log(t);for(var r=0;r<t.length;r++){if(!t[r].checkType)return!0;if(!t[r].name)return!0;if(!t[r].errorMsg)return!0;if(e[t[r].name]||""===e[t[r].name]&&"undefined"!=e[t[r].name]||0==e[t[r].name])switch(t[r].checkType){case"string":var n=new RegExp("^.{"+t[r].checkRule+"}$");if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[r].checkRule+"}$");if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[r].name]))return this.error=t[r].errorMsg,!1;var a=t[r].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[r].name]>a[1]||e[t[r].name]<a[0])return this.error=t[r].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;a=t[r].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[r].name]>a[1]||e[t[r].name]<a[0])return this.error=t[r].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;a=t[r].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[r].name]>a[1]||e[t[r].name]<a[0])return this.error=t[r].errorMsg,!1;break;case"same":if(e[t[r].name]!=t[r].checkRule)return this.error=t[r].errorMsg,!1;break;case"notsame":if(e[t[r].name]==t[r].checkRule)return this.error=t[r].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"reg":n=new RegExp(t[r].checkRule);if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"in":if(-1==t[r].checkRule.indexOf(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"notnull":if(null==e[t[r].name]||e[t[r].name].length<1)return this.error=t[r].errorMsg,!1;break;case"checkpass":if(e["password"]!=e["re_password"])return this.error=t[r].errorMsg,!1;break;case"ischecked":if(0==e[t[r].name])return this.error=t[r].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}}}]);