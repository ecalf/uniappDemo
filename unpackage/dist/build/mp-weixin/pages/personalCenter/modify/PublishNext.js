(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personalCenter/modify/PublishNext"],{3768:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement;t._self._c},u=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return a}))},"611b":function(t,e,i){"use strict";i.r(e);var a=i("c225"),n=i.n(a);for(var u in a)"default"!==u&&function(t){i.d(e,t,(function(){return a[t]}))}(u);e["default"]=n.a},6181:function(t,e,i){"use strict";i.r(e);var a=i("f0ce"),n=i("eade");for(var u in n)"default"!==u&&function(t){i.d(e,t,(function(){return n[t]}))}(u);i("f195");var s,l=i("f0c5"),o=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=o.exports},"6aff":function(t,e,i){"use strict";var a=i("bf44"),n=i.n(a);n.a},8068:function(t,e,i){"use strict";i.r(e);var a=i("3768"),n=i("611b");for(var u in n)"default"!==u&&function(t){i.d(e,t,(function(){return n[t]}))}(u);i("6aff");var s,l=i("f0c5"),o=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"30ebd11a",null,!1,a["a"],s);e["default"]=o.exports},bf44:function(t,e,i){},c225:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniCombox",props:{label:{type:String,default:""},labelWidth:{type:String,default:"auto"},placeholder:{type:String,default:""},candidates:{type:Array,default:function(){return[]}},emptyTips:{type:String,default:"无匹配项"},value:{type:String,default:""}},data:function(){return{showSelector:!1,inputVal:""}},computed:{labelStyle:function(){return"auto"===this.labelWidth?{}:{width:this.labelWidth}},filterCandidates:function(){var t=this;return this.candidates.filter((function(e){return e.indexOf(t.inputVal)>-1}))},filterCandidatesLength:function(){return this.filterCandidates.length}},watch:{value:{handler:function(t){this.inputVal=t},immediate:!0}},methods:{toggleSelector:function(){this.showSelector=!this.showSelector},onFocus:function(){this.showSelector=!0},onBlur:function(){var t=this;setTimeout((function(){t.showSelector=!1}),50)},onSelectorClick:function(t){this.inputVal=this.filterCandidates[t],this.showSelector=!1,this.$emit("input",this.inputVal)},onInput:function(){var t=this;setTimeout((function(){t.$emit("input",t.inputVal)}))}}};e.default=a},d447:function(t,e,i){"use strict";(function(t){i("bca8"),i("921b");a(i("66fd"));var e=a(i("6181"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},eade:function(t,e,i){"use strict";i.r(e);var a=i("fc13"),n=i.n(a);for(var u in a)"default"!==u&&function(t){i.d(e,t,(function(){return a[t]}))}(u);e["default"]=n.a},f0ce:function(t,e,i){"use strict";var a={"cl-form":function(){return Promise.all([i.e("common/vendor"),i.e("cool/ui/components/form/form")]).then(i.bind(null,"5a17"))},"cl-form-item":function(){return Promise.all([i.e("common/vendor"),i.e("cool/ui/components/form-item/form-item")]).then(i.bind(null,"547b"))},"cl-input":function(){return i.e("cool/ui/components/input/input").then(i.bind(null,"c12d"))},"u-upload":function(){return i.e("components/u-upload/u-upload").then(i.bind(null,"16a6"))},"cl-icon":function(){return Promise.all([i.e("common/vendor"),i.e("cool/ui/components/icon/icon")]).then(i.bind(null,"2e8b"))},"cl-select":function(){return Promise.all([i.e("common/vendor"),i.e("cool/ui/components/select/select")]).then(i.bind(null,"9802"))}},n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.serviceList,(function(e,i){var a=t.Listids.indexOf(e.id),n=t.Listids.indexOf(e.id);return{$orig:t.__get_orig(e),g0:a,g1:n}})));t.$mp.data=Object.assign({},{$root:{l0:i}})},u=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return a}))},f195:function(t,e,i){"use strict";var a=i("fb62"),n=i.n(a);n.a},fb62:function(t,e,i){},fc13:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(i("8068"));var a=n(i("0c0e"));function n(t){return t&&t.__esModule?t:{default:t}}var u=function(){i.e("components/p-inputSearch/inputSearch").then(function(){return resolve(i("b07b"))}.bind(null,i)).catch(i.oe)},s=function(){i.e("components/u-upload/u-upload").then(function(){return resolve(i("16a6"))}.bind(null,i)).catch(i.oe)},l=function(){Promise.all([i.e("common/vendor"),i.e("components/lb-picker/index")]).then(function(){return resolve(i("5f2b"))}.bind(null,i)).catch(i.oe)},o={components:{inputSearch:u,uUpload:s,LbPicker:l},data:function(){return{uploadState:{COMPLETE:0,UNFINISHED:1,SUCCESS:2,ERROR:3,files:{}},publishData:{needId:"",type:"",cate_id:"",brand_id:"",title:"",desc:"",brand:"",otherBrand:"",country:"",supplierPrice:"",price:"",num:"",unit_cate_id:"1",qualification:"",use_way:"",thumbnail:"",deadtime:"",images:[],info:[],service_id:""},entrustList:[{value:"3",name:"销售"},{value:"4",name:"采购"}],dataSource:[],inputValue:"",brandvalue:"",selectbrand:[],selectUnit:[],curUnit:"请选择",action:a.default.getUploadData,customBtn:!1,isCheckAll:!1,current:0,filesArr:[],lists:[],Listids:[],mainImage:[],swipeImage:[],productList:[],useway:"",useItems:[{value:"1",name:"民用"},{value:"2",name:"医用"}],serviceList:[{id:"1",name:"置顶",price:"30"},{id:"2",name:"加急",price:"30"}],qualtitems:[],brandProps:{label:"cn_name",value:"cn_name",brandid:"id"},UnitProps:{label:"cn_name",value:"cn_name",unitid:"id"}}},onLoad:function(t){this.publishData.cate_id=t.cate_id,this.publishData.needId=t.id,this.initData(),this.getProdcutData(),this.countryData()},methods:{getProdcutData:function(){var t=this;this.request({url:a.default.getInfoData,dataType:"JSON",method:"POST",data:{data:{needs_id:this.publishData.needId}},success:function(e){if(console.log(e),200==e.code){for(var i=e.data,a=0;a<t.entrustList.length;a++)if(i.type==t.entrustList[a].value){t.current=a;break}t.publishData.type=i.type,t.publishData.title=i.title,t.publishData.desc=i.desc,t.publishData.otherBrand=i.other_brand,t.publishData.deadtime=i.dead_time.substring(0,10),t.publishData.num=i.num,t.publishData.price=i.price,t.publishData.supplier_price=i.supplier_price,t.brandvalue=i.product_brand_cnname,t.publishData.brand_id=i.brand_id,t.curUnit=i.unit_category_cnname,t.publishData.unit_cate_id=i.unit_cate_id,t.inputValue=i.exit_country,t.exit_country=i.exit_country;for(var n=0;n<t.useItems.length;n++)i.use_way==t.useItems[n].value&&(t.useway=n),t.publishData.use_way=i.use_way;for(var u=i.qualification,s=null!=u&&u.length?u.split(","):"",l=0;l<s.length;l++)for(var o=0;o<t.qualtitems.length;o++)if(s[l]==t.qualtitems[o].id){var r=t.qualtitems[o];t.$set(r,"checked",!0)}t.publishData.qualification=u;var c={url:i.thumbnail};t.mainImage.push(c),t.publishData.thumbnail=i.thumbnail;for(var d=i.images,h=null!=d&&d.length?d.split(","):"",f=0;f<h.length;f++)t.swipeImage.push({url:h[f]});t.publishData.images=d;for(var p=i.info,b=null!=p&&p.length?p.split(","):"",m=0;m<b.length;m++)t.productList.push({url:b[m]});t.publishData.info=p;var v=i.service_id,g=null!=v&&v.length?v.split(","):"";console.log(g);for(var _=0;_<g.length;_++)for(var D=0;D<t.serviceList.length;D++)g[_]==t.serviceList[D].id&&t.Listids.push(t.serviceList[_].id);t.publishData.service_id=v}}})},checkUploadFiles:function(){var t=!0,e=this.uploadState,i=this.uploadState.files;for(var a in i)if(i[a]==e.UNFINISHED||i[a]==e.EEROR){t=!1;break}return t},uploadHandler:function(t,e,i){for(var a=[],n=0;n<t.length;n++)a.push(t[n]);a.push(i),this[e].apply(this,a)},onProgress:function(t,e,i,a){this.uploadState.files[a]=this.uploadState.UNFINISHED},onSuccess:function(t,e,i,a){t=JSON.parse(t),this.uploadState.files[a]=this.uploadState.SUCCESS,this.publishData[a]=t.data.img_url;var n=["images","info"];if(n.includes(a)){for(var u=[],s=0;s<i.length;s++)if("string"==typeof i[s].response){var l=JSON.parse(i[s].response);u.push(l.data.img_url)}this.publishData[a]=u.join(","),console.log("4",this.publishData[a])}},onChange:function(t,e,i,a){this.uploadState.files[a]=this.uploadState.COMPLETE},onError:function(t,e,i,a){this.uploadState.files[a]=this.uploadState.EEROR},onRemove:function(t,e,i){var a=["images","info"];a.includes(i)?this.publishData[i].splice(t,1):(this.uploadState.files[i]=void 0,this.publishData[i]="")},typeChange:function(t){for(var e=0;e<this.entrustList.length;e++)if(this.entrustList[e].value===t.target.value){this.current=e;break}this.publishData.type=t.target.value,console.log(this.publishData.type)},initData:function(){var t=this;this.request({url:a.default.getBrandData,dataType:"JSON",method:"POST",data:{data:{cate_id:this.publishData.cate_id}},success:function(e){t.selectbrand=e.data.length?e.data:[]}}),this.request({url:a.default.getqualtData,dataType:"JSON",method:"POST",success:function(e){t.qualtitems=e.data}}),this.request({url:a.default.getUnitData,dataType:"JSON",method:"POST",success:function(e){t.selectUnit=e.data}})},countryData:function(){var t=this;this.request({url:a.default.getCountryData,dataType:"JSON",method:"POST",success:function(e){t.dataSource=e.data}})},handleChange:function(t){this.exit_country=t},handleTap:function(t){this.$refs[t].show()},brandChange:function(t){this.publishData.brand_id=t.item.id},Unithange:function(t){this.publishData.unit_cate_id=t.item.id},radioChange:function(t){this.publishData.use_way=t.detail.value},qualtChange:function(t){for(var e=this.qualtitems,i=t.detail.value,a=0,n=e.length;a<n;++a){var u=e[a];i.indexOf(u.value)>=0?this.$set(u,"checked",!0):this.$set(u,"checked",!1)}var s=i.join(",");this.publishData.qualification=s},checkboxChange:function(t){var e=this.Listids.indexOf(t);console.log(e),e>=0?this.Listids.splice(e,1):this.Listids.push(t);var i=this.Listids.join(",");this.publishData.service_id=i},successlist:function(t,e,i){},publishSubmit:function(){var e={data:{id:this.publishData.needId,type:this.publishData.type,cate_id:this.publishData.cate_id,title:this.publishData.title,desc:this.publishData.desc,thumbnail:this.publishData.thumbnail,other_brand:this.publishData.otherBrand,brand_id:this.publishData.brand_id,num:this.publishData.num,exit_country:this.exit_country,price:this.publishData.price,dead_time:this.publishData.deadtime,use_way:this.publishData.use_way,qualification:this.publishData.qualification,unit_cate_id:this.publishData.unit_cate_id,service_id:this.publishData.service_id,images:this.publishData.images,supplier_price:this.publishData.supplier_price,info:this.publishData.info}};console.log("584",e),this.request({url:a.default.getModifyData,dataType:"JSON",method:"POST",data:e,success:function(e){200==e.code?(t.showToast({title:"修改成功，请前往首页查看",icon:"none"}),setTimeout((function(){t.switchTab({url:"/pages/index/index"})}),1e3)):t.showToast({title:e.message,icon:"none"})}})}}};e.default=o}).call(this,i("543d")["default"])}},[["d447","common/runtime","common/vendor"]]]);