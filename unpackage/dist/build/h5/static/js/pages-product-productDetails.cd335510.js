(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-productDetails"],{"0c0e":function(e,t){var i="/api",a={getBannerData:i+"",getCategroyData:i+"/v1/category/get-product-cate-list",getBrandData:i+"/v1/category/get-brand-list",getqualtData:i+"/v1/category/get-qualification-cate-list",getUnitData:i+"/v1/category/get-unit-category",getCountryData:i+"/v1/user/countrylist",getNeedsData:i+"/v1/needs/get-list",getInfoData:i+"/v1/needs/get-info",getQuotationData:i+"/v1/needs/quotation",getPublishData:i+"/v1/needs/publish",getModifyData:i+"/v1/needs/edit",getUploadData:i+"/v1/upload",getkindData:i+"v1/category/get-product-kinds",getRegisterData:i+"/v1/user/register",getCodeData:i+"/v1/msg/send",getLoignData:i+"/v1/user/login",getPersonData:i+"/v1/user/identification",getManagerData:i+"/v1/user/company_info_edit",getMyneedData:i+"/v1/user/get-my-needs-list",getMyquoteData:i+"/v1/user/get-my-quotation-list",getSupplierData:i+"/v1/user/myprofiles",getEnterpriseData:i+"/v1/user/get-other-user-info",getSatusData:i+"/v1/needs/change-status",getPoolData:i+"/v1/user/get-collect-list",getCollectData:i+"/v1/user/collect"};e.exports=a},2038:function(e,t,i){var a=i("deb7");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("1e467602",a,!0,{sourceMap:!1,shadowMode:!1})},"257a":function(e,t,i){"use strict";i.r(t);var a=i("cc92"),n=i("8945");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("6991");var r,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"7634e9a1",null,!1,a["a"],r);t["default"]=s.exports},"3c8c":function(e,t,i){"use strict";i.r(t);var a=i("ea1e"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"5c82":function(e,t,i){"use strict";var a={"uni-popup":i("7830").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("product-header",{on:{back:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"swiper-box"},[i("v-uni-swiper",{attrs:{circular:"true",autoplay:"true"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.swiperChange.apply(void 0,arguments)}}},e._l(e.detail.swiperList,(function(e,t){return i("v-uni-swiper-item",{key:t},[i("v-uni-image",{attrs:{src:e}})],1)})),1),i("v-uni-view",{staticClass:"indicator"},[e._v(e._s(e.currentSwiper+1)+"/"+e._s(e.detail.swiperList.length))])],1),i("v-uni-view",{staticClass:"product-details-con"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"new-price"},[i("v-uni-text",[e._v("￥")]),e._v(e._s(e.detail.price))],1),2==e.detail.type?i("v-uni-view",{staticClass:"old-price"},[e._v("￥"+e._s(e.detail.supplier_price))]):e._e(),i("v-uni-view",{staticClass:"good-num"},[e._v("库存："+e._s(e.detail.num)+e._s(e.detail.unit_category_cnname))])],1),i("v-uni-view",{staticClass:"product-title"},[e._l(e.detail.service_cnname,(function(t,a){return i("v-uni-text",{key:a,staticClass:"tui-icon"},[e._v(e._s(t))])})),e._v(e._s(e.detail.title))],2),i("v-uni-view",{staticClass:"product-text"},[e._v(e._s(e.detail.desc))])],1),i("v-uni-view",{staticClass:"product-info-wrap"},[i("v-uni-view",{staticClass:"info-box"},[e.detail.other_brand?i("v-uni-view",{staticClass:"item"},[e._v("品牌："+e._s(e.detail.other_brand))]):i("v-uni-view",{staticClass:"item"},[e._v("品牌："+e._s(e.detail.product_brand_cnname))]),i("v-uni-view",{staticClass:"item"},[e._v("应用类型："+e._s(1==e.detail.user_way?"医用":"民用"))]),i("v-uni-view",{staticClass:"item"},[e._v("出口国："+e._s(e.detail.exit_country))])],1),i("v-uni-view",{staticClass:"certi-img"},[e._v("认证："),e._l(e.detail.qualifications,(function(e,t){return i("v-uni-image",{key:t,attrs:{src:e,mode:""}})}))],2)],1),3==e.user_type?i("v-uni-view",{staticClass:"company-box"},[i("v-uni-view",{staticClass:"company-info"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-image",{attrs:{src:e.companyInfo.company_images}}),e._v(e._s(e.companyInfo.company_name))],1),i("v-uni-view",{staticClass:"desc"},[e._v(e._s(e.companyInfo.company_introduce))])],1),i("v-uni-view",{staticClass:"company-link",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.viewEnter.apply(void 0,arguments)}}},[e._v("查看企业")])],1):e._e(),i("v-uni-view",{staticClass:"description"},[i("v-uni-view",{staticClass:"title"},[e._v("———— 商品详情 ————")]),i("v-uni-view",{staticClass:"content"},[i("v-uni-rich-text",{attrs:{nodes:e.detail.info}})],1)],1),i("v-uni-view",{staticClass:"footer-wrap"},[i("v-uni-view",{staticClass:"product-footer"},[i("v-uni-view",{staticClass:"footerlist"},[i("v-uni-view",{staticClass:"contact-btn m-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.contactBtn()}}},[e._v("立即联系")]),1==e.detail.type?i("v-uni-view",{staticClass:"price-btn m-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.offerBtn()}}},[e._v("立即报价")]):e._e()],1)],1)],1),i("uni-popup",{ref:"popup",attrs:{defaultPopup:e.ishow,defaultTrans:e.ishow}},[i("v-uni-view",{staticClass:"contact-us m-contactbg"},[i("v-uni-view",[e._v("联系人："+e._s(e.companyInfo.contact_name))]),i("v-uni-view",[e._v("电话："+e._s(e.companyInfo.contact_phone))])],1)],1),i("uni-popup",{ref:"offerpopup",attrs:{defaultPopup:e.ishow,defaultTrans:e.ishow}},[i("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"m-contactbg"},[i("v-uni-view",{staticClass:"contact-item"},[i("v-uni-view",{staticClass:"title"},[e._v("联系人")]),i("v-uni-view",{staticClass:"contact-input"},[i("v-uni-input",{attrs:{type:"text",name:"contactname",placeholder:"请输入联系人"},model:{value:e.contactForm.contactname,callback:function(t){e.$set(e.contactForm,"contactname",t)},expression:"contactForm.contactname"}})],1)],1),i("v-uni-view",{staticClass:"contact-item"},[i("v-uni-view",{staticClass:"title"},[e._v("手机号")]),i("v-uni-view",{staticClass:"contact-input"},[i("v-uni-input",{attrs:{type:"text",name:"telphone",placeholder:"请输入手机号"},model:{value:e.contactForm.telphone,callback:function(t){e.$set(e.contactForm,"telphone",t)},expression:"contactForm.telphone"}})],1)],1),i("v-uni-view",{staticClass:"contact-item"},[i("v-uni-view",{staticClass:"title"},[e._v("公司名称")]),i("v-uni-view",{staticClass:"contact-input"},[i("v-uni-input",{attrs:{type:"text",name:"companyname",placeholder:"请输入公司名称"},model:{value:e.contactForm.companyname,callback:function(t){e.$set(e.contactForm,"companyname",t)},expression:"contactForm.companyname"}})],1)],1),i("v-uni-view",{staticClass:"contact-item"},[i("v-uni-view",{staticClass:"title"},[e._v("价格")]),i("v-uni-view",{staticClass:"contact-input"},[i("v-uni-input",{attrs:{type:"text",name:"price",placeholder:"请输入价格"},model:{value:e.contactForm.price,callback:function(t){e.$set(e.contactForm,"price",t)},expression:"contactForm.price"}})],1)],1),i("v-uni-view",{staticClass:"contact-item"},[i("v-uni-view",{staticClass:"title"},[e._v("留言")]),i("v-uni-view",{staticClass:"contact-input"},[i("v-uni-textarea",{attrs:{value:"",name:"message",placeholder:""},model:{value:e.contactForm.message,callback:function(t){e.$set(e.contactForm,"message",t)},expression:"contactForm.message"}})],1)],1),i("v-uni-button",{staticClass:"contactSubmit",attrs:{"form-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},o=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}))},6991:function(e,t,i){"use strict";var a=i("ab76"),n=i.n(a);n.a},8945:function(e,t,i){"use strict";i.r(t);var a=i("f3f5"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"898d":function(e,t,i){"use strict";i.r(t);var a=i("5c82"),n=i("3c8c");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("e8c3");var r,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"6d70f0c2",null,!1,a["a"],r);t["default"]=s.exports},ab76:function(e,t,i){var a=i("ed1c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("59177a3a",a,!0,{sourceMap:!1,shadowMode:!1})},cc92:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"before"},[i("v-uni-view",{staticClass:"back"},[e.showback?i("v-uni-view",{staticClass:"icon iconfont",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[e._v("")]):e._e()],1),i("v-uni-view",{staticClass:"middle"})],1)],1)},o=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}))},deb7:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.m-flex[data-v-6d70f0c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.m-flex .item[data-v-6d70f0c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-form-item[data-v-6d70f0c2]{background:#fff;margin-bottom:1px;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?36.23?% %?45.28?%;font-size:%?25.36?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.uni-form-item .title[data-v-6d70f0c2]{color:#4e5a65;padding-right:%?9.05?%}.uni-input[data-v-6d70f0c2]{font-size:%?25.36?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;min-height:%?41.66?%}.colorred[data-v-6d70f0c2]{color:#f30e0e}.uni-tl-input[data-v-6d70f0c2]{text-align:left}.uni-textarea[data-v-6d70f0c2]{line-height:%?43.47?%;height:%?173.91?%}.cl-form .radio-box .cl-form-item__content[data-v-6d70f0c2]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.cl-form .cl-form-item[data-v-6d70f0c2]{padding:0!important;min-height:none!important}.cl-form .m-from-item[data-v-6d70f0c2]{background:#fff;margin-bottom:1px;padding:%?27.17?% %?18.11?%}.cl-form .cl-card__header[data-v-6d70f0c2]{padding:0 10px}.cl-form .cl-card__header span[data-v-6d70f0c2]{color:#4e5a65;font-size:%?25.36?%}.cl-form .cl-card__header[data-v-6d70f0c2]:before{display:none}.cl-form .cl-input[data-v-6d70f0c2]{border:0;padding:0}.cl-form .cl-form-item__container[data-v-6d70f0c2]{padding-left:0!important}.brand-bg[data-v-6d70f0c2]{background-color:#f6f6f6;border-radius:3px;border:solid 1px #e2e2e2;height:%?72.46?%;line-height:%?72.46?%;padding:0 %?18.11?%!important;position:relative}.brand-bg .cl-icon[data-v-6d70f0c2]{position:absolute;right:%?18.11?%;top:%?3.62?%}.size-text[data-v-6d70f0c2]{background:#fff;padding:0 0 %?36.23?% %?45.28?%;position:relative;top:%?-36.23?%}.size-text uni-text[data-v-6d70f0c2]{color:#ff2323}.m-form-item[data-v-6d70f0c2]{padding:%?27.17?% %?36.23?%}.uoload-wrap[data-v-6d70f0c2]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.upload-item[data-v-6d70f0c2]{text-align:center}.pb60[data-v-6d70f0c2]{padding-bottom:%?108.69?%}.uni-list-cell[data-v-6d70f0c2]{margin-left:%?18.11?%}.checkbox-item-box[data-v-6d70f0c2]{padding:12px 0 %?81.52?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.checkbox-item-box uni-image[data-v-6d70f0c2]{width:%?36.23?%;height:%?36.23?%;vertical-align:middle}\r\n/*公共按钮*/.common-btn[data-v-6d70f0c2]{position:fixed;left:0;right:0;background:#fff;width:100%;bottom:0;z-index:99;padding:%?16.3?% 0}.common-btn uni-button[data-v-6d70f0c2]{width:%?576.08?%;height:%?72.46?%;line-height:%?72.46?%;background:#44a78d;border-radius:%?181.15?%;text-align:center;font-size:%?32.6?%;color:#fff;cursor:pointer}\r\n/*个人注册*/uni-input[data-v-6d70f0c2]{font-size:%?25.36?%}.m-input-fullwidth[data-v-6d70f0c2]{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?54.34?%;line-height:%?54.34?%;padding:0 %?18.11?%}.send-code[data-v-6d70f0c2]{padding:0 %?18.11?%;height:%?54.34?%;background-color:#e2e2e2;border-radius:%?10.86?%;color:#4e5a65;font-size:%?25.36?%;text-align:center;line-height:%?54.34?%}.read-checkbox[data-v-6d70f0c2]{padding:%?54.34?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.read-checkbox uni-navigator[data-v-6d70f0c2]{color:#44a78d}.uni-form-item .uni-picker[data-v-6d70f0c2]{width:100%}.uni-input-left[data-v-6d70f0c2]{text-align:left}.qualifications[data-v-6d70f0c2]{background:#fff;margin-bottom:1px;padding:20px 25px}.pb0[data-v-6d70f0c2]{padding-bottom:0}.inline-block[data-v-6d70f0c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.unit-picker[data-v-6d70f0c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:right}.unit-picker .cl-icon[data-v-6d70f0c2]{margin-left:%?36.23?%}.unit-picker uni-picker[data-v-6d70f0c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border:1px solid #44a78d;padding:0 %?9.05?%;margin-right:%?18.11?%}.unit-picker .curunit[data-v-6d70f0c2]{min-width:%?90.57?%;height:%?43.47?%;border:1px solid #f2f2f2;display:inline-block;padding:0 %?18.11?%;margin-right:%?18.11?%;vertical-align:middle}.checkbox-list-bottom[data-v-6d70f0c2]{padding:0 %?45.28?% %?54.34?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.checkbox-item[data-v-6d70f0c2]{width:48%}.checkbox-item .title[data-v-6d70f0c2]{position:relative;background-image:-webkit-gradient(linear,right top,left top,from(#cee6e0),to(#48a990));background-image:-webkit-linear-gradient(right,#cee6e0,#48a990);background-image:linear-gradient(270deg,#cee6e0,#48a990);border-radius:11px 11px 0 0;color:#fff;padding:%?12.68?% %?18.11?%}.checkbox-item .title uni-text[data-v-6d70f0c2]{position:absolute;right:%?18.11?%}.checkbox-item .checkboxbg[data-v-6d70f0c2]{background:#fff;padding:%?16.3?% %?18.11?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?19.92?%}.checkbox-item .dec-text .iconfont[data-v-6d70f0c2]{display:inline-block;border:1px solid #8e8e93;border-radius:50%;margin-left:%?7.24?%}.checkbox-item .price[data-v-6d70f0c2]{font-size:%?21.73?%;color:#4e5a65}.checkbox-item .price .cl-checkbox[data-v-6d70f0c2]{margin-right:0}.checkbox-item .price .cl-checkbox .cl-checkbox__input[data-v-6d70f0c2]{margin-right:0;width:%?36.23?%;height:%?36.23?%;margin-left:%?10.86?%}.checkbox-item .price .checkbox-icon[data-v-6d70f0c2]{display:inline-block;vertical-align:%?-7.24?%;width:%?36.23?%;height:%?36.23?%}.upprducttitle[data-v-6d70f0c2]{background:#fff;padding:%?30.79?% %?36.23?% 0}.more-upload[data-v-6d70f0c2]{padding-top:%?14.49?%}\r\n/*  修改状态栏样式 */.swiper-box[data-v-6d70f0c2]{position:relative;width:100%;height:%?641.3?%}.swiper-box uni-swiper[data-v-6d70f0c2]{width:100%;height:%?641.3?%}.swiper-box uni-swiper uni-swiper-item uni-image[data-v-6d70f0c2]{width:100%;height:%?641.3?%}.swiper-box .indicator[data-v-6d70f0c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?25?%;height:%?40?%;border-radius:%?40?%;font-size:%?22?%;position:absolute;bottom:%?20?%;right:%?20?%;color:#fff;background-color:rgba(0,0,0,.2)}\r\n/*产品详情*/.product-details-con[data-v-6d70f0c2]{background:#fff;padding:%?27.17?% %?45.28?% %?18.11?%;border-top:solid 1px #e2e2e2;margin-bottom:%?18.11?%}.product-details-con .top[data-v-6d70f0c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}.product-details-con .top uni-view[data-v-6d70f0c2]{display:-webkit-box;display:-webkit-flex;display:flex}.product-details-con .top .new-price[data-v-6d70f0c2]{font-size:%?54.34?%;color:#44a78d}.product-details-con .top .new-price uni-text[data-v-6d70f0c2]{font-size:%?36.23?%;margin-top:%?18.11?%}.product-details-con .top .old-price[data-v-6d70f0c2]{color:#e2e2e2;font-size:%?28.98?%;text-decoration:line-through;margin-left:%?-18.11?%}.product-details-con .top .good-num[data-v-6d70f0c2]{padding:%?3.62?% %?14.49?%;background-color:#a1d3c6;border-radius:10px;font-size:%?21.73?%;color:#44a78d}.product-details-con .product-title[data-v-6d70f0c2]{margin-top:%?18.11?%;font-weight:700;font-size:%?28.98?%}.product-details-con .product-text[data-v-6d70f0c2]{margin-top:%?18.11?%;color:#8e8e93;font-size:%?21.73?%}.product-info-wrap[data-v-6d70f0c2]{background:#fff;padding:%?36.23?% %?45.28?% %?36.23?%;margin-bottom:%?18.11?%}.info-box[data-v-6d70f0c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left;margin-bottom:%?27.17?%;margin-left:%?-18.11?%}.info-box .item[data-v-6d70f0c2]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;text-align:center;padding:0 %?18.11?%}.info-box .item[data-v-6d70f0c2]:after{content:"";display:block;border-left:1px solid #e2e2e2;height:%?25.36?%;position:absolute;top:%?7.24?%;right:0}.info-box .item[data-v-6d70f0c2]:last-child:after{display:none}.certi-img uni-image[data-v-6d70f0c2]{width:%?36.23?%;height:%?36.23?%;margin:0 %?9.05?%;vertical-align:middle}.description .title[data-v-6d70f0c2]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?25.36?%;color:#4e5a65;padding:%?9.05?% 0 %?18.11?%}.footer-wrap[data-v-6d70f0c2]{height:%?101.44?%}.product-footer[data-v-6d70f0c2]{padding:%?18.11?% 0;background:#fff;position:fixed;bottom:0;left:0;width:100%;z-index:99}.product-footer .footerlist[data-v-6d70f0c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.product-footer .m-btn[data-v-6d70f0c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?289.85?%;height:%?65.21?%;border-radius:%?32.6?%;border:solid 1px #44a78d;text-align:center;line-height:%?61.59?%;font-size:%?25.36?%;margin:0 %?27.17?%}.product-footer .m-btn.contact-btn[data-v-6d70f0c2]{background-color:#44a78d;color:#fefefe}.product-footer .m-btn.price-btn[data-v-6d70f0c2]{color:#44a78d;background:#d8ece7}.company-box[data-v-6d70f0c2]{padding:%?21.73?% %?45.28?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.company-info[data-v-6d70f0c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.company-info uni-image[data-v-6d70f0c2]{width:%?54.34?%;height:%?54.34?%;vertical-align:middle;border-radius:50%;margin-right:%?7.24?%}.company-info .title[data-v-6d70f0c2]{color:#000;margin-bottom:%?9.05?%}.company-info .desc[data-v-6d70f0c2]{color:#8e8e93;font-size:%?21.73?%}.company-link[data-v-6d70f0c2]{width:%?163.04?%;height:%?65.21?%;background:rgba(68,167,141,.2);border:1px solid #44a78d;text-align:center;line-height:%?65.21?%;color:#44a78d;border-radius:%?36.23?%;margin-left:%?63.4?%}.m-contactbg[data-v-6d70f0c2]{background-color:#fff;z-index:999;padding:%?54.34?% %?36.23?%;border-radius:%?19.92?%;text-align:left;font-size:%?28.98?%;line-height:%?54.34?%;width:%?579.71?%;margin:0 auto}.contact-item[data-v-6d70f0c2]{margin-bottom:%?18.11?%;font-size:%?21.73?%}.contact-input uni-input[data-v-6d70f0c2]{border:1px solid #f2f2f2;padding:0 %?18.11?%;height:%?54.34?%;line-height:%?54.34?%;font-size:%?21.73?%}.contact-input uni-textarea[data-v-6d70f0c2]{height:%?181.15?%;border:1px solid #f2f2f2;padding:%?28.98?% %?18.11?%;width:100%;font-size:%?21.73?%}.contactSubmit[data-v-6d70f0c2]{background:#44a78d;border-radius:%?36.23?%;text-align:center;font-size:%?28.98?%;color:#fff;cursor:pointer;height:%?58.34?%;line-height:%?58.34?%}',""]),e.exports=t},e8c3:function(e,t,i){"use strict";var a=i("2038"),n=i.n(a);n.a},ea1e:function(e,t,i){"use strict";var a=i("ee27");i("a15b"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("0c0e")),o=a(i("7830")),r=a(i("257a")),c=i("2f62"),s=i("f3b9"),d={components:{uniPopup:o.default,productHeader:r.default},computed:(0,c.mapState)(["hasLogin","uerInfo"]),data:function(){return{currentSwiper:0,needId:"",detail:{swiperList:[],detailsList:[]},companyInfo:{},ishow:!1,userid:"",user_id:"",user_type:"",contactForm:{contactname:"",telphone:"",companyname:"",price:""},rules:[{name:"contactname",checkType:"notnull",checkRule:"",errorMsg:"请输入联系人"},{name:"telphone",checkType:"phoneno",checkRule:"",errorMsg:"请输入正确的手机号"},{name:"companyname",checkType:"notnull",checkRule:"",errorMsg:"请输入公司名称"},{name:"price",checkType:"notnull",checkRule:"",errorMsg:"请输入价格"}]}},onLoad:function(e){this.needId=e.id,this.userid=this.uerInfo.userId,this.loadData()},methods:{loadData:function(){var e=this,t={data:{needs_id:this.needId}};this.request({url:n.default.getInfoData,dataType:"JSON",method:"POST",data:t,success:function(t){if(console.log(t),200==t.code){e.user_id=t.data.user_id,e.user_type=t.data.user_type;var i=null!=t.data.images&&t.data.images.length?t.data.images.split(","):"",a=null!=t.data.info&&t.data.info.length?t.data.info.split(","):"",n=null!=t.data.service_cnname&&t.data.service_cnname.length?t.data.service_cnname.split(","):"",o=null!=t.data.qualification_icon&&t.data.qualification_icon.length?t.data.qualification_icon.split(","):"";e.detail=t.data,e.detail.swiperList=i,e.detail.service_cnname=n,e.detail.qualifications=o;for(var r=[],c=0;c<a.length;c++)r[c]='<img style="width:100%;display:block;" src="'+a[c]+'"></img>';e.detail.info=r.join(""),e.companyData()}}})},contactBtn:function(){this.hasLogin?this.$refs.popup.open():uni.showModal({title:"提示",content:"您未登录，登录后可查看联系方式",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/login"}):e.cancel}})},offerBtn:function(){this.hasLogin?this.$refs.offerpopup.open():uni.showModal({title:"提示",content:"您未登录，登录后可填写报价方案",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/login"}):e.cancel}})},swiperChange:function(e){this.currentSwiper=e.detail.current},companyData:function(){var e=this;this.request({url:n.default.getEnterpriseData,dataType:"JSON",method:"POST",data:{data:{user_id:this.user_id}},success:function(t){200==t.code&&(e.companyInfo=t.data.profiles.user_company)}})},viewEnter:function(e){uni.navigateTo({url:"/pages/EnterpriseCenter/EnterpriseCenter?userid="+this.user_id})},back:function(){uni.navigateBack()},formSubmit:function(e){var t=e.detail.value;t.isChecked=this.isChecked;var i=s.check(t,this.rules),a=this.$refs.offerpopup;i?this.request({url:n.default.getQuotationData,dataType:"JSON",method:"POST",data:{data:{user_id:this.userid,need_id:this.needId,quoted_price:this.contactForm.price,desc:this.contactForm.message,phone:this.contactForm.telphone,contact_name:this.contactForm.contactname,company_name:this.contactForm.companyname}},success:function(e){200==e.code?(a.close(),setTimeout((function(){uni.showToast({title:"留言提交成功",icon:"none"})}),500)):uni.showToast({title:e.message,icon:"none"})}}):uni.showToast({title:s.error,icon:"none"})}}};t.default=d},ed1c:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.header[data-v-7634e9a1]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10}.header .before[data-v-7634e9a1]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;-webkit-transition:opacity .05s linear;transition:opacity .05s linear}.header .before .back[data-v-7634e9a1]{width:%?125?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0}.header .before .back .icon[data-v-7634e9a1]{margin-left:-10%;width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%}.header .before .middle[data-v-7634e9a1]{width:100%}.header .before .icon-btn[data-v-7634e9a1]{width:%?60?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .before .icon-btn .icon[data-v-7634e9a1]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%}.header .before .back .icon[data-v-7634e9a1]{color:#fff;background-color:rgba(0,0,0,.2);border-radius:100%}.header .before .icon-btn .icon[data-v-7634e9a1]{color:#fff;background-color:rgba(0,0,0,.2);border-radius:100%}',""]),e.exports=t},f3b9:function(e,t,i){i("c975"),i("a9e3"),i("4d63"),i("ac1f"),i("25f0"),i("1276"),e.exports={error:"",check:function(e,t,i){console.log(t);for(var a=0;a<t.length;a++){if(!t[a].checkType)return!0;if(!t[a].name)return!0;if(!t[a].errorMsg)return!0;if(e[t[a].name]||""===e[t[a].name]&&"undefined"!=e[t[a].name]||0==e[t[a].name])switch(t[a].checkType){case"string":var n=new RegExp("^.{"+t[a].checkRule+"}$");if(!n.test(e[t[a].name]))return this.error=t[a].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[a].checkRule+"}$");if(!n.test(e[t[a].name]))return this.error=t[a].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[a].name]))return this.error=t[a].errorMsg,!1;var o=t[a].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),e[t[a].name]>o[1]||e[t[a].name]<o[0])return this.error=t[a].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[t[a].name]))return this.error=t[a].errorMsg,!1;o=t[a].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),e[t[a].name]>o[1]||e[t[a].name]<o[0])return this.error=t[a].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[t[a].name]))return this.error=t[a].errorMsg,!1;o=t[a].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),e[t[a].name]>o[1]||e[t[a].name]<o[0])return this.error=t[a].errorMsg,!1;break;case"same":if(e[t[a].name]!=t[a].checkRule)return this.error=t[a].errorMsg,!1;break;case"notsame":if(e[t[a].name]==t[a].checkRule)return this.error=t[a].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[t[a].name]))return this.error=t[a].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[t[a].name]))return this.error=t[a].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[t[a].name]))return this.error=t[a].errorMsg,!1;break;case"reg":n=new RegExp(t[a].checkRule);if(!n.test(e[t[a].name]))return this.error=t[a].errorMsg,!1;break;case"in":if(-1==t[a].checkRule.indexOf(e[t[a].name]))return this.error=t[a].errorMsg,!1;break;case"notnull":if(null==e[t[a].name]||e[t[a].name].length<1)return this.error=t[a].errorMsg,!1;break;case"checkpass":if(e["password"]!=e["re_password"])return this.error=t[a].errorMsg,!1;break;case"ischecked":if(0==e[t[a].name])return this.error=t[a].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}},f3f5:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{showback:!0}},onLoad:function(){},methods:{back:function(){this.$emit("back")}}};t.default=a}}]);