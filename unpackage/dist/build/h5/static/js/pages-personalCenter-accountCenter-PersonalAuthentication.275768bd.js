(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personalCenter-accountCenter-PersonalAuthentication"],{"010a":function(t,n,o){"use strict";var e={"u-upload":o("16a6").default,"cl-icon":o("2e8b").default},a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"pb60"},[o("v-uni-view",{staticClass:"uni-form-item"},[o("v-uni-view",{staticClass:"title"},[t._v("姓名")]),o("v-uni-input",{staticClass:"uni-input",attrs:{name:"nickname",value:"张小姐"},model:{value:t.personalForm.real_name,callback:function(n){t.$set(t.personalForm,"real_name",n)},expression:"personalForm.real_name"}})],1),o("v-uni-view",{staticClass:"uni-form-item mb10"},[o("v-uni-view",{staticClass:"title"},[t._v("身份证号")]),o("v-uni-input",{staticClass:"uni-input",attrs:{name:"nickname",value:"410221155885888888888"},model:{value:t.personalForm.idcard,callback:function(n){t.$set(t.personalForm,"idcard",n)},expression:"personalForm.idcard"}})],1),o("v-uni-view",{staticClass:"uni-form-item uoload-wrap"},[o("v-uni-view",{staticClass:"upload-item"},[o("u-upload",{attrs:{"custom-btn":t.customBtn,"show-upload-list":t.showUploadList,action:t.action,"auto-upload":t.autoUpload,"file-list":t.fileList,"show-progress":t.showProgress,deletable:t.deletable,"max-count":t.maxCount,width:"180",uploadText:"",name:"image"},on:{"on-progress":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onProgress","hand_identify_card_photo")},"on-success":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onSuccess","hand_identify_card_photo")},"on-error":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onError","hand_identify_card_photo")},"on-change":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onChange","hand_identify_card_photo")},"on-remove":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onRemove","hand_identify_card_photo")}}},[t.customBtn?o("v-uni-view",{staticClass:"slot-btn",attrs:{slot:"addBtn","hover-class":"slot-btn__hover","hover-stay-time":"150"},slot:"addBtn"},[o("cl-icon",{staticClass:"icon-jia",attrs:{name:"cl-icon",size:50,color:"#E2E2E2"}})],1):t._e()],1),o("v-uni-view",[t._v("上传手持身份证")])],1),o("v-uni-view",{staticClass:"upload-item"},[o("u-upload",{attrs:{"custom-btn":t.customBtn,"show-upload-list":t.showUploadList,action:t.action,"auto-upload":t.autoUpload,"file-list":t.fileList,"show-progress":t.showProgress,deletable:t.deletable,"max-count":"1",width:"180",uploadText:"",name:"image"},on:{"on-progress":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onProgress","identify_card_photo_front")},"on-success":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onSuccess","identify_card_photo_front")},"on-error":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onError","identify_card_photo_front")},"on-change":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onChange","identify_card_photo_front")},"on-remove":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onRemove","identify_card_photo_front")}}},[t.customBtn?o("v-uni-view",{staticClass:"slot-btn",attrs:{slot:"addBtn","hover-class":"slot-btn__hover","hover-stay-time":"150"},slot:"addBtn"},[o("cl-icon",{staticClass:"icon-jia",attrs:{name:"cl-icon",size:50,color:"#E2E2E2"}})],1):t._e()],1),o("v-uni-view",[t._v("身份证正面")])],1),o("v-uni-view",{staticClass:"upload-item"},[o("u-upload",{attrs:{"custom-btn":t.customBtn,"show-upload-list":t.showUploadList,action:t.action,"auto-upload":t.autoUpload,"file-list":t.fileList,"show-progress":t.showProgress,deletable:t.deletable,"max-count":"1",width:"180",uploadText:"",name:"image"},on:{"on-progress":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onProgress","identify_card_photo_back")},"on-success":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onSuccess","identify_card_photo_back")},"on-error":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onError","identify_card_photo_back")},"on-change":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onChange","identify_card_photo_back")},"on-remove":function(n){arguments[0]=n=t.$handleEvent(n),t.uploadHandler(arguments,"onRemove","identify_card_photo_back")}}},[t.customBtn?o("v-uni-view",{staticClass:"slot-btn",attrs:{slot:"addBtn","hover-class":"slot-btn__hover","hover-stay-time":"150"},slot:"addBtn"},[o("cl-icon",{staticClass:"icon-jia",attrs:{name:"cl-icon",size:50,color:"#E2E2E2"}})],1):t._e()],1),o("v-uni-view",[t._v("身份证反面")])],1)],1),o("v-uni-view",{staticClass:"common-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirm.apply(void 0,arguments)}}},[o("v-uni-button",[t._v("立即认证")])],1)],1)},i=[];o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}))},"45a4":function(t,n,o){var e=o("f3be");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=o("4f06").default;a("744c4994",e,!0,{sourceMap:!1,shadowMode:!1})},ab1c:function(t,n,o){"use strict";var e=o("45a4"),a=o.n(e);a.a},bcda:function(t,n,o){"use strict";o.r(n);var e=o("010a"),a=o("c2a6");for(var i in a)"default"!==i&&function(t){o.d(n,t,(function(){return a[t]}))}(i);o("ab1c");var s,r=o("f0c5"),l=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"25f98998",null,!1,e["a"],s);n["default"]=l.exports},c2a6:function(t,n,o){"use strict";o.r(n);var e=o("f238"),a=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=a.a},f238:function(t,n,o){"use strict";var e=o("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(o("16a6")),i=e(o("0c0e")),s={components:{uUpload:a.default},data:function(){return{uploadState:{COMPLETE:0,UNFINISHED:1,SUCCESS:2,ERROR:3,files:{}},action:i.default.getUploadData,fileList:[],showUploadList:!0,customBtn:!1,autoUpload:!0,showProgress:!0,deletable:!0,customStyle:!1,maxCount:1,lists:[],imgurl:[],personalForm:{scene:"identify_person",real_name:"",idcard:"",hand_identify_card_photo:"",identify_card_photo_front:"",identify_card_photo_back:""}}},methods:{checkUploadFiles:function(){var t=!0,n=this.uploadState,o=this.uploadState.files;for(var e in o)if(o[e]==n.UNFINISHED||o[e]==n.EEROR){t=!1;break}return t},uploadHandler:function(t,n,o){for(var e=[],a=0;a<t.length;a++)e.push(t[a]);e.push(o),this[n].apply(this,e)},onProgress:function(t,n,o,e){this.uploadState.files[e]=this.uploadState.UNFINISHED},onSuccess:function(t,n,o,e){t=JSON.parse(t),this.uploadState.files[e]=this.uploadState.SUCCESS,this.personalForm[e]=t.data.img_url},onChange:function(t,n,o,e){this.uploadState.files[e]=this.uploadState.COMPLETE},onError:function(t,n,o,e){this.uploadState.files[e]=this.uploadState.EEROR},onRemove:function(t,n,o){this.uploadState.files[o]=void 0,this.personalForm[o]=""},confirm:function(){if(!this.checkUploadFiles())return uni.showToast({title:"文件未上传完毕",icon:"none"}),!1;this.request({url:i.default.getPersonData,dataType:"JSON",method:"POST",data:{data:{scene:this.personalForm.scene,real_name:this.personalForm.real_name,idcard:this.personalForm.idcard,hand_identify_card_photo:this.personalForm.hand_identify_card_photo,identify_card_photo_front:this.personalForm.identify_card_photo_front,identify_card_photo_back:this.personalForm.identify_card_photo_back}},success:function(t){console.log(t,2222),200===t.code?(uni.showToast({title:"认证成功",duration:1500}),setTimeout((function(){uni.switchTab({url:"/pages/personalCenter/personalCenter"})}),2e3)):uni.showToast({title:t.message,icon:"none"})}})}}};n.default=s},f3be:function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.authentication[data-v-25f98998]{width:%?576.08?%;height:%?72.46?%;background-color:#44a78d;border-radius:%?181.15?%;position:fixed;left:%?86.95?%;bottom:%?0?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.authentication .authentication-txt[data-v-25f98998]{font-size:%?32.6?%;color:#fefefe}',""]),t.exports=n}}]);