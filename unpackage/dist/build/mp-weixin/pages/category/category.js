(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"1dd0":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("0c0e"));function o(t){return t&&t.__esModule?t:{default:t}}var a=function(){n.e("components/banner").then(function(){return resolve(n("ff0f"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/productList").then(function(){return resolve(n("005b"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/uni-drawer/uni-drawer").then(function(){return resolve(n("dd88"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/product-category/productCategory").then(function(){return resolve(n("edfb"))}.bind(null,n)).catch(n.oe)},u={components:{banner:a,productList:c,productCategory:r,uniDrawer:s},data:function(){return{filterIndex:"",showRight:!1,pageSize:6,pageNum:1,type:"",loadingText:"正在加载....",currentPage:"/pages/category/category",cate_id:"",defalutSort:"",priceSort:"",timeSort:"",reload:!1,info:[{colorClass:"uni-bg-red",url:"/static/images/cateimg01.png",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",content:"内容 C"}],goodsList:[],firstImages:"",categoryList:[]}},methods:{show:function(t){"left"===t?this.showLeft=!0:this.showRight=!0},hide:function(){this.showLeft=!1,this.showRight=!1},closeDrawer:function(t){"left"===t?this.showLeft=!1:this.showRight=!1},loadData:function(){var t=this;this.request({url:i.default.getCategroyData,dataType:"JSON",method:"POST",data:{data:{id:""}},success:function(e){t.categoryList=e.data}});var e={data:{page_size:this.pageSize,page_index:this.pageNum,keyword:"",type:"",price_sort:this.priceSort,remain_time_sort:this.priceSort,cate_id:this.cate_id,is_defalut_sort:this.defalutsort}};this.request({url:i.default.getNeedsData,dataType:"JSON",method:"POST",data:e,success:function(e){if(console.log(e.data),200==e.code){for(var n=e.data.list,i=0;i<n.length;i++){var o=null!=n[i].service_cnname&&n[i].service_cnname.length?n[i].service_cnname.split(","):"";n[i].service_cnname=o;var a=null!=n[i].qualification_icon&&n[i].qualification_icon.length?n[i].qualification_icon.split(","):"";n[i].qualification_icon=a}n.length<t.pageSize&&(t.loadingText="到底了"),n.length>0?n.forEach((function(e){t.goodsList.push(e)})):t.loadingText="到底了"}}})},handleSelect:function(t){if(this.filterIndex=t,this.defalutSort=0===t?1===this.defalutSort?0:1:"",1===t||2===t)switch(this.priceSort){case"asc":this.priceSort="desc";break;case"desc":this.priceSort="asc";break;default:this.priceSort="desc";break}this.pageNum=1,this.loadingText="加载中...",this.goodsList=[],this.loadData()},updateValue:function(t){this.cate_id=t.id,this.pageNum=1,this.loadingText="加载中...",this.goodsList=[],this.loadData(),this.closeDrawer("right")}},onNavigationBarButtonTap:function(t){this.showRight=!this.showRight},onBackPress:function(){if(this.showRight||this.showLeft)return this.hide(),!0},onLoad:function(){this.loadData()},onPullDownRefresh:function(){var e=this;setTimeout((function(){e.pageNum=1,e.loadingText="加载中...",e.goodsList=[],e.loadData(),t.stopPullDownRefresh()}),1e3)},onReachBottom:function(){this.pageNum++,this.loadData()}};e.default=u}).call(this,n("543d")["default"])},"34fc":function(t,e,n){"use strict";n.r(e);var i=n("ffad"),o=n("dad2");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("f439");var c,s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=r.exports},"87a1":function(t,e,n){"use strict";(function(t){n("bca8"),n("921b");i(n("66fd"));var e=i(n("34fc"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b8e3:function(t,e,n){},dad2:function(t,e,n){"use strict";n.r(e);var i=n("1dd0"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},f439:function(t,e,n){"use strict";var i=n("b8e3"),o=n.n(i);o.a},ffad:function(t,e,n){"use strict";var i={"uni-drawer":function(){return n.e("components/uni-drawer/uni-drawer").then(n.bind(null,"dd88"))}},o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))}},[["87a1","common/runtime","common/vendor"]]]);