(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personalCenter-accountCenter-myAccount"],{"0397":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.guide[data-v-3ec0cf10]{width:%?12.68?%;height:%?12.68?%;border-width:%?1.81?% %?1.81?% 0 0;border-color:#464646;border-style:solid;-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-top:%?-3.47?%;margin-left:%?19.92?%}.CompanyInformation[data-v-3ec0cf10]{font-size:%?28.98?%;font-weight:700;color:#479e84;padding:%?63.4?% 0 %?18.11?% %?36.23?%;display:block}.unni-color .uni-input-placeholder[data-v-3ec0cf10]{color:#e2e2e2}',""]),t.exports=e},"0c0e":function(t,e){var n="https://wapi.wanheglobal.com/api.php",i={getBannerData:n+"",getCategroyData:n+"/v1/category/get-product-cate-list",getBrandData:n+"/v1/category/get-brand-list",getqualtData:n+"/v1/category/get-qualification-cate-list",getUnitData:n+"/v1/category/get-unit-category",getCountryData:n+"/v1/user/countrylist",getNeedsData:n+"/v1/needs/get-list",getInfoData:n+"/v1/needs/get-info",getQuotationData:n+"/v1/needs/quotation",getPublishData:n+"/v1/needs/publish",getModifyData:n+"/v1/needs/edit",getUploadData:n+"/v1/upload",getkindData:n+"/v1/category/get-product-kinds",getRegisterData:n+"/v1/user/register",getCodeData:n+"/v1/msg/send",getLoignData:n+"/v1/user/login",getPersonData:n+"/v1/user/identification",getManagerData:n+"/v1/user/company_info_edit",getMyneedData:n+"/v1/user/get-my-needs-list",getMyquoteData:n+"/v1/user/get-my-quotation-list",getSupplierData:n+"/v1/user/myprofiles",getEnterpriseData:n+"/v1/user/get-other-user-info",getSatusData:n+"/v1/needs/change-status",getPoolData:n+"/v1/user/get-collect-list",getCollectData:n+"/v1/user/collect",getofferData:n+"/v1/user/get-quotation-info"};t.exports=i},"16ef":function(t,e,n){"use strict";var i=n("af88"),a=n.n(i);a.a},2096:function(t,e,n){"use strict";function i(t){return"function"===typeof Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)}function a(t){return"[object Object]"===Object.prototype.toString.call(t)}function r(t){return"function"===typeof t}function u(t){return"string"===typeof t}function s(t){return!t&&0!==t}function o(t){return"boolean"===typeof t}function c(t){return"number"===typeof t&&!isNaN(t)}function l(t){null!==t&&("object"===typeof t||"function"===typeof t)&&t.then}function f(t){return i(t)?0===t.length:a(t)?0===Object.keys(t).length:""===t||void 0===t||null===t}function v(t,e){return String(t)===String(e)}function p(t){var e=t;if(a(t))for(var n in t)t.hasOwnProperty&&t.hasOwnProperty(n)&&(t[n]&&"object"===typeof t[n]?e[n]=p(t[n]):e[n]=t[n]);else i(t)&&(e=t.map(p));return e}function d(t,e){var n=this.$parent;while(n){if(n.$options.componentName===t)return e.reduce((function(t,e){return t[e]=n[e],t}),{});n=n.$parent}return null}function g(t,e){var n=function t(e,n){if(i(n))return!(!i(e)||n.length!==e.length)&&!n.some((function(i,a){return!t(n[a],e[a])}));if(a(n)){if(a(e)){var r=!0;for(var s in n)if(r=t(n[s],e[s]),!r)return!1;return!0}return!1}return u(n)?e===n:c(n)?e===n:o(n)?e===n:void 0};return Object.keys(e).filter((function(i){return!n(t[i],e[i])}))}function m(t){var e=t.color,n=t.max,i=t.value;if(u(e))return e;for(var a=e.map((function(t,i){return u(t)?{color:t,value:(i+1)*(n/e.length)}:t})).sort((function(t,e){return t.value-e.value})),r=0;r<a.length;r++)if(a[r].value>=i)return a[r].color;return a[a.length-1].color}n("4de4"),n("d81d"),n("13d5"),n("45fc"),n("4e82"),n("b64b"),n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.isArray=i,e.isObject=a,e.isFunction=r,e.isString=u,e.isNull=s,e.isBoolean=o,e.isNumber=c,e.isPromise=l,e.isEmpty=f,e.compareValue=v,e.cloneDeep=p,e.getParent=d,e.diffForm=g,e.getCurrentColor=m},4495:function(t,e,n){"use strict";n.r(e);var i=n("f087"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},af88:function(t,e,n){var i=n("0397");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b9ecdffa",i,!0,{sourceMap:!1,shadowMode:!1})},de2c:function(t,e,n){"use strict";var i={"cl-form":n("5a17").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cl-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("更改手机")]),n("v-uni-navigator",{staticClass:"uni-input",attrs:{url:"/pages/changePhone/changePhone"}},[t._v(t._s(t.user_company.contact_phone))]),n("v-uni-text",{staticClass:"guide"})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("邮箱")]),n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.user_company.email))])],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("微信")]),n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.user_company.wechat))])],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("QQ")]),n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.user_company.qq))])],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("实名认证")]),1==t.is_identifiy?n("v-uni-view",{staticClass:"uni-input"},[t._v("已认证")]):n("v-uni-view",{staticClass:"uni-input"},[n("v-uni-navigator",{staticClass:"uni-input",attrs:{url:"/pages/personalCenter/accountCenter/CertificateAuthority"}},[t._v("未认证")])],1),1!==t.is_identifiy?n("v-uni-text",{staticClass:"guide"}):t._e()],1),3==t.usertype?n("v-uni-view",{staticClass:"dd"},[n("v-uni-view",[n("v-uni-text",{staticClass:"CompanyInformation"},[t._v("公司信息")])],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("公司名称")]),n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.user_company.company_name))])],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("公司类型")]),n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.user_company.business_scope_cate))])],1),n("v-uni-view",{staticClass:"uni-form-item uni-column unni-color"},[n("v-uni-view",{staticClass:"title"},[t._v("所属行业")]),n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.user_company.industry))])],1)],1):t._e()],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},e0e0:function(t,e,n){"use strict";n.r(e);var i=n("de2c"),a=n("4495");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("16ef");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3ec0cf10",null,!1,i["a"],u);e["default"]=o.exports},f087:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("0c0e")),r=n("2f62"),u={computed:(0,r.mapState)(["hasLogin","userInfo"]),data:function(){return{usertype:"",is_identifiy:"",user_company:{}}},methods:{getMyccount:function(){var t=this;this.request({url:a.default.getSupplierData,dataType:"JSON",method:"POST",success:function(e){200==e.code&&(t.user_company=e.data.profiles.user_company,t.is_identifiy=e.data.profiles.user_info.is_identifiy,t.usertype=e.data.profiles.user_info.type)}})}},onLoad:function(){this.getMyccount()}};e.default=u}}]);