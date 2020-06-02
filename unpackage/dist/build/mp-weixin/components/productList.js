(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/productList"],{"005b":function(n,t,e){"use strict";e.r(t);var o=e("6718"),r=e("2a18");for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e("55ca");var c,a=e("f0c5"),i=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=i.exports},"2a18":function(n,t,e){"use strict";e.r(t);var o=e("788f"),r=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=r.a},"55ca":function(n,t,e){"use strict";var o=e("75f1"),r=e.n(o);r.a},6718:function(n,t,e){"use strict";var o,r=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}))},"75f1":function(n,t,e){},"788f":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(e("0c0e"));function o(n){return n&&n.__esModule?n:{default:n}}var r=function(){e.e("components/uni-load-more/uni-load-more").then(function(){return resolve(e("fcc3"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/errorMsg/errorMsg").then(function(){return resolve(e("c8ff"))}.bind(null,e)).catch(e.oe)},c={components:{uniLoadMore:r,errorMsg:u},data:function(){return{}},props:{goodsList:{type:Array},serviceList:{type:Array},firstImages:{type:String},loadStatus:{type:String,default:"正在加载...."}},methods:{handleGoods:function(t){console.log(t.id),n.navigateTo({url:"/pages/product/productDetails?id="+t.id})}}};t.default=c}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/productList-create-component',
    {
        'components/productList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("005b"))
        })
    },
    [['components/productList-create-component']]
]);
