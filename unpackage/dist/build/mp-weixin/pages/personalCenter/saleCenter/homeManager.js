(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personalCenter/saleCenter/homeManager","components/u-upload/u-upload"],{"16a6":function(t,e,n){"use strict";n.r(e);var a=n("ef9d"),o=n("fc68");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("55ec");var s,r=n("f0c5"),l=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"8b2fdafe",null,!1,a["a"],s);e["default"]=l.exports},"510f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){n.e("components/u-line-progress/u-line-progress").then(function(){return resolve(n("07ac"))}.bind(null,n)).catch(n.oe)},o={name:"u-upload",components:{uLineProgress:a},props:{showUploadList:{type:Boolean,default:!0},action:{type:String,default:""},maxCount:{type:[String,Number],default:52},showProgress:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},header:{type:Object,default:function(){return{}}},formData:{type:Object,default:function(){return{}}},name:{type:String,default:"file"},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},previewFullImage:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:function(){return[]}},uploadText:{type:String,default:"选择图片"},autoUpload:{type:Boolean,default:!0},showTips:{type:Boolean,default:!0},customBtn:{type:Boolean,default:!1},width:{type:[String,Number],default:200}},mounted:function(){},data:function(){return{lists:[],isInCount:!0,uploading:!1}},watch:{fileList:{immediate:!0,handler:function(t){var e=this;t.map((function(t){e.lists.push({url:t.url,error:!1,progress:100})}))}}},methods:{clear:function(){this.lists=[],this.$emit("on-list-change",this.lists)},reUpload:function(){this.uploadFile()},selectFile:function(){var e=this;if(!this.disabled){this.name;var n=this.maxCount,a=this.multiple,o=this.maxSize,i=this.sizeType,s=this.lists,r=(this.camera,this.compressed,this.maxDuration,this.sourceType),l=null,u=n-s.length;l=new Promise((function(e,n){t.chooseImage({count:a?u>9?9:u:1,sourceType:r,sizeType:i,success:e,fail:n})})),l.then((function(t){var i=e.lists.length;t.tempFiles.map((function(t,i){if(a||!(i>=1))if(t.size>o)e.$emit("on-oversize",t,e.lists),e.showToast("超出允许的文件大小");else{if(n<=s.length)return e.$emit("on-exceed",t,e.lists),void e.showToast("超出最大允许的文件个数");s.push({url:t.path,progress:0,error:!1}),e.$emit("on-list-change",e.lists)}})),e.$emit("on-choose-complete",e.lists),e.autoUpload&&e.uploadFile(i)})).catch((function(t){}))}},showToast:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.showTips||n)&&t.showToast({title:e,icon:"none"})},upload:function(){this.uploadFile()},retry:function(e){this.lists[e].progress=0,this.lists[e].error=!1,this.lists[e].response=null,t.showLoading({title:"重新上传"}),this.uploadFile(e)},uploadFile:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!this.disabled&&!this.uploading)if(n>=this.lists.length)this.$emit("on-uploaded",this.lists);else if(this.action)if(100!=this.lists[n].progress){this.lists[n].error=!1,this.uploading=!0;var a=t.uploadFile({url:this.action,filePath:this.lists[n].url,name:this.name,formData:this.formData,header:this.header,success:function(t){200!=t.statusCode?e.uploadError(n,t.data):(e.lists[n].response=t.data,e.lists[n].progress=100,e.lists[n].error=!1,e.$emit("on-success",t.data,n,e.lists))},fail:function(t){e.uploadError(n,t)},complete:function(a){t.hideLoading(),e.uploading=!1,e.uploadFile(n+1),e.$emit("on-change",a,n,e.lists)}});a.onProgressUpdate((function(t){t.progress>0&&(e.lists[n].progress=t.progress,e.$emit("on-progress",t,n,e.lists))}))}else 0==this.autoUpload&&this.uploadFile(n+1);else this.showToast("请配置上传地址",!0)},uploadError:function(t,e){this.lists[t].progress=0,this.lists[t].error=!0,this.lists[t].response=null,this.$emit("on-error",e,t,this.lists),this.showToast("上传失败，请重试")},deleteItem:function(e){var n=this;t.showModal({title:"提示",content:"您确定要删除此项吗？",success:function(t){t.confirm&&(n.lists[e].process<100&&n.lists[e].process>0&&"undefined"!=typeof n.lists[e].uploadTask&&n.lists[e].uploadTask.abort(),n.lists.splice(e,1),n.$forceUpdate(),n.$emit("on-remove",e,n.lists),n.showToast("移除成功"),n.$emit("on-list-change",n.lists))}})},remove:function(t){t>=0&&t<this.lists.length&&(this.lists.splice(t,1),this.$emit("on-list-change",this.lists))},doPreviewImage:function(e,n){var a=this;if(this.previewFullImage){var o=this.lists.map((function(t){return t.url||t.path}));t.previewImage({urls:o,current:e,success:function(){a.$emit("on-preview",e,a.lists)},fail:function(){t.showToast({title:"预览图片失败",icon:"none"})}})}}}};e.default=o}).call(this,n("543d")["default"])},"543c":function(t,e,n){},"55ec":function(t,e,n){"use strict";var a=n("8784"),o=n.n(a);o.a},7324:function(t,e,n){"use strict";var a=n("543c"),o=n.n(a);o.a},8784:function(t,e,n){},a109:function(t,e,n){"use strict";var a={"u-upload":function(){return Promise.resolve().then(n.bind(null,"16a6"))},"cl-icon":function(){return Promise.all([n.e("common/vendor"),n.e("cool/ui/components/icon/icon")]).then(n.bind(null,"2e8b"))}},o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},b712:function(t,e,n){"use strict";n.r(e);var a=n("e4af"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},ce73:function(t,e,n){"use strict";n.r(e);var a=n("a109"),o=n("b712");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("7324");var s,r=n("f0c5"),l=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=l.exports},e4af:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("0c0e")),o=s(n("16a6")),i=n("2f62");function s(t){return t&&t.__esModule?t:{default:t}}var r={computed:(0,i.mapState)(["hasLogin","uerInfo"]),comments:{uUpload:o.default},data:function(){return{uploadState:{COMPLETE:0,UNFINISHED:1,SUCCESS:2,ERROR:3,files:{}},action:a.default.getUploadData,fileList:[],logoImg:[],companyImg:[],transparencyImg:[],transparencyImg2:[],transparencyImg3:[],qualificationsImg:[],qualificationsImg1:[],qualificationsImg2:[],qualificationsImg3:[],showUploadList:!0,customBtn:!1,autoUpload:!0,showProgress:!0,deletable:!0,customStyle:!1,maxCount:1,lists:[],imgurl:[],getManagerdataList:{},imglist:[],ManagerForm:{company_logo:"",company_name:"",company_images:"",company_transparency:"",company_introduce:"",qualifications:"",addr:"",contact_name:"",contact_phone:"",qq:"",wechat:"",email:""},userid:""}},methods:{getinfoData:function(){var t=this;this.request({url:a.default.getEnterpriseData,dataType:"JSON",method:"POST",data:{data:{user_id:this.userid}},success:function(e){if(console.log(e,235),200==e.code){var n=e.data.profiles.user_company;t.ManagerForm.company_name=n.company_name,t.ManagerForm.addr=n.addr,t.ManagerForm.contact_name=n.contact_name,t.ManagerForm.contact_phone=n.contact_phone,t.ManagerForm.qq=n.qq,t.ManagerForm.wechat=n.wechat,t.ManagerForm.email=n.email,t.ManagerForm.company_introduce=n.company_introduce;var a={url:n.company_logo};t.logoImg.push(a),t.ManagerForm.company_logo=n.company_logo;var o={url:n.company_images};t.companyImg.push(o),t.ManagerForm.company_images=n.company_images;var i=n.company_transparency,s=null!=i&&i.length?i.split(","):"";t.transparencyImg.push({url:s[0]}),t.transparencyImg2.push({url:s[1]}),t.transparencyImg3.push({url:s[2]}),t.ManagerForm.company_transparency=i;var r=n.qualifications,l=null!=r&&r.length?r.split(","):"";t.qualificationsImg.push({url:l[0]}),t.qualificationsImg1.push({url:l[1]}),t.qualificationsImg2.push({url:l[2]}),t.qualificationsImg3.push({url:l[3]}),t.ManagerForm.qualifications=r}}})},checkUploadFiles:function(){var t=!0,e=this.uploadState,n=this.uploadState.files;for(var a in n)if(n[a]==e.UNFINISHED||n[a]==e.EEROR){t=!1;break}return t},uploadHandler:function(t,e,n){for(var a=[],o=0;o<t.length;o++)a.push(t[o]);a.push(n),this[e].apply(this,a)},onProgress:function(t,e,n,a){this.uploadState.files[a]=this.uploadState.UNFINISHED},onSuccess:function(t,e,n,a){t=JSON.parse(t),this.uploadState.files[a]=this.uploadState.SUCCESS,this.imglist[a]?this.imglist[a].push(t.data.img_url):this.imglist[a]=new Array(t.data.img_url),this.ManagerForm[a]=this.imglist[a].join(",")},onChange:function(t,e,n,a){this.uploadState.files[a]=this.uploadState.COMPLETE},onError:function(t,e,n,a){this.uploadState.files[a]=this.uploadState.EEROR},onRemove:function(t,e,n){this.uploadState.files[n]=void 0,this.ManagerForm[n]=""},formSubmit:function(e){if(!this.checkUploadFiles())return t.showToast({title:"文件未上传完毕",icon:"none"}),!1;this.request({url:a.default.getManagerData,dataType:"JSON",method:"POST",data:{data:{company_logo:this.ManagerForm.company_logo,company_name:this.ManagerForm.company_name,company_images:this.ManagerForm.company_images,company_transparency:this.ManagerForm.company_transparency,company_introduce:this.ManagerForm.company_introduce,qualifications:this.ManagerForm.qualifications,addr:this.ManagerForm.addr,contact_name:this.ManagerForm.contact_name,contact_phone:this.ManagerForm.contact_phone,qq:this.ManagerForm.qq,wechat:this.ManagerForm.wechat,email:this.ManagerForm.email}},success:function(e){200===e.code?(t.showToast({title:"提交成功",duration:1500}),setTimeout((function(){t.navigateTo({url:"/pages/personalCenter/accountCenter/myAccount"})}),2e3)):t.showToast({title:e.message,icon:"none"})}})}},onLoad:function(){this.userid=this.uerInfo.user_Id,console.log(this.userid),this.getinfoData()}};e.default=r}).call(this,n("543d")["default"])},ef9d:function(t,e,n){"use strict";var a={"cl-icon":function(){return Promise.all([n.e("common/vendor"),n.e("cool/ui/components/icon/icon")]).then(n.bind(null,"2e8b"))},"u-line-progress":function(){return n.e("components/u-line-progress/u-line-progress").then(n.bind(null,"07ac"))}},o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},fc68:function(t,e,n){"use strict";n.r(e);var a=n("510f"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},fe80:function(t,e,n){"use strict";(function(t){n("bca8"),n("921b");a(n("66fd"));var e=a(n("ce73"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["fe80","common/runtime","common/vendor"]]]);