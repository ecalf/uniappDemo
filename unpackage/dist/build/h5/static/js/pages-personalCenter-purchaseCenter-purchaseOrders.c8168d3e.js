(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personalCenter-purchaseCenter-purchaseOrders"],{2587:function(t,e,a){"use strict";a.r(e);var i=a("d483"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"4a20":function(t,e,a){"use strict";a.r(e);var i=a("a8db"),n=a("2587");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);var d,s=a("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"2bddce5b",null,!1,i["a"],d);e["default"]=u.exports},a8db:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("converSionPrice",{attrs:{conversionPrice:t.conversionPrice},on:{gotoprice:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoPrice.apply(void 0,arguments)}}}),a("goodsprice",{attrs:{goodsPrice:t.goodsPrice,current:t.current,loadStatus:t.loadingText},on:{"update-value":function(e){arguments[0]=e=t.$handleEvent(e),t.updateValue.apply(void 0,arguments)},"update-up":function(e){arguments[0]=e=t.$handleEvent(e),t.updateUp.apply(void 0,arguments)},"update-down":function(e){arguments[0]=e=t.$handleEvent(e),t.updateDown.apply(void 0,arguments)},"details-url":function(e){arguments[0]=e=t.$handleEvent(e),t.updateDetails.apply(void 0,arguments)},"update-modify":function(e){arguments[0]=e=t.$handleEvent(e),t.updateModify.apply(void 0,arguments)}}})],1)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},d483:function(t,e,a){"use strict";var i=a("ee27");a("4160"),a("a434"),a("ac1f"),a("1276"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5a30")),o=i(a("6553")),d=i(a("0c0e")),s={components:{converSionPrice:n.default,goodsprice:o.default},data:function(){return{quoto:{keyword:"",type:1,status:"",is_deadtime:"",kinds:""},pageSize:6,pageNum:1,loadingText:"正在加载中",needId:"",conversionPrice:[{id:1,name:"全部",status:"",is_deadtime:""},{id:2,name:"上架",status:1,is_deadtime:""},{id:3,name:"下架",status:0,is_deadtime:""},{id:4,name:"已截止",status:"",is_deadtime:1}],goodsPrice:[],current:0}},methods:{loadData:function(){var t=this,e={data:{page_size:this.pageSize,page_index:this.pageNum,keyword:this.quoto.keyword,type:this.quoto.type,status:this.quoto.status,is_deadtime:this.quoto.is_deadtime,kinds:this.quoto.kinds}};this.request({url:d.default.getMyneedData,dataType:"JSON",method:"POST",data:e,success:function(e){if(200==e.code){for(var a=e.data.list,i=0;i<a.length;i++){var n=null!=a[i].service_cnname&&a[i].service_cnname.length?a[i].service_cnname.split(","):"";a[i].service_cnname=n}a.length<t.pageSize&&(t.loadingText="到底了"),a.length>0?a.forEach((function(e){t.goodsPrice.push(e)})):t.loadingText="到底了"}}})},gotoPrice:function(t,e){this.current=t,this.quoto.type=e.type,this.quoto.status=e.status,this.quoto.is_deadtime=e.is_deadtime,this.pageNum=1,this.loadingText="正在加载中",this.goodsPrice=[],this.loadData()},updateValue:function(t){var e=this;this.needId=t.id,this.request({url:d.default.getSatusData,dataType:"JSON",method:"POST",data:{data:{need_id:this.needId,status:-1}},success:function(a){uni.showModal({title:"提示",content:"您确定要删除此项吗？",success:function(a){console.log(a),a.confirm&&e.goodsPrice.splice(t,1)}})}})},updateUp:function(t){var e=this;this.needId=t.id,this.request({url:d.default.getSatusData,dataType:"JSON",method:"POST",data:{data:{need_id:this.needId,status:1}},success:function(a){uni.showModal({title:"提示",content:"您确定要上架吗？",success:function(a){a.confirm&&e.goodsPrice.splice(t,1)}})}})},updateDown:function(t){var e=this;this.needId=t.id,this.request({url:d.default.getSatusData,dataType:"JSON",method:"POST",data:{data:{need_id:this.needId,status:0}},success:function(a){uni.showModal({title:"提示",content:"您确定要下架吗？",success:function(a){a.confirm&&e.goodsPrice.splice(t,1)}}),e.loadData()}})},updateDetails:function(t){uni.navigateTo({url:"/pages/product/productDetails?id="+t.id})},updateModify:function(t){console.log(t),uni.navigateTo({url:"/pages/personalCenter/modify/PublishPrev?id="+t.id+"&cate_id="+t.cate_id})}},onLoad:function(){this.loadData()},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.pageNum=1,t.loadingText="加载中...",t.goodsList=[],t.loadData(),uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){this.pageNum++,this.loadData()}};e.default=s}}]);