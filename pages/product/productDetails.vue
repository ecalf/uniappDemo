<template>
	<view>
		<!-- 状态栏 -->
		<!-- 	<page-status></page-status> -->
		<!--头部返回按钮-->
		<product-header @back="back"></product-header>
		<!-- 轮播图 -->
		<view class="swiper-box">
			<swiper @change="swiperChange" circular="true" autoplay="true">
				<swiper-item v-for="(swiper,index) in detail.swiperList" :key="index">
					<image :src="swiper"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">
				{{currentSwiper + 1}}/{{detail.swiperList.length}}
			</view>
		</view>
		<view class="product-details-con">
			<view class="top">
				<view class="new-price"><text>￥</text>{{detail.price}}</view>
				<view class="old-price" v-if="detail.type==2">￥{{detail.supplier_price}}</view>
				<view class="good-num">库存：{{detail.num}}{{detail.unit_category_cnname}}</view>
			</view>
			<view class="product-title"><text class="tui-icon" v-for="(item,index) in detail.service_cnname" :key="index">{{item}}</text>{{detail.title}}</view>
			<view class="product-text">{{detail.desc}}</view>
		</view>


		<view class="product-info-wrap">
			<view class="info-box">
				<view class="item" v-if="detail.other_brand">品牌：{{detail.other_brand}}</view>
				<view class="item" v-else>品牌：{{detail.product_brand_cnname}}</view>
				<view class="item">应用类型：{{detail.user_way==1?'医用':'民用'}}</view>
				<view class="item">出口国：{{detail.exit_country}}</view>
			</view>
			<!-- <view class="certi-img">认证：<image src="@/static/images/certificate1.png" mode=""></image>
				<image src="@/static/images/certificate2.png" mode=""></image>
				<image src="@/static/images/certificate1.png" mode=""></image>
				<image src="@/static/images/certificate2.png" mode=""></image>
			</view> -->
			<view class="certi-img">认证：<image v-for="(item,index) in detail.qualifications" :key="index" :src="item" mode=""></image>
			</view>
		</view>
		<view class="company-box" v-if="user_type==3">
			<view class="company-info">
				<view class="title">
					<image :src="companyInfo.company_images"></image>{{companyInfo.company_name}}
				</view>
				<view class="desc">{{companyInfo.company_introduce}}</view>
			</view>
			<view @tap="viewEnter" class="company-link">查看企业</view>
		</view>

		<view class="description">
			<view class="title">———— 商品详情 ————</view>
			<view class="content">
				<rich-text :nodes="detail.info"></rich-text>
				<!-- <view v-for="(item,index) in detail.detailsList">
					<image :src="item"></image>
				</view> -->
			</view>
		</view>
		<!--底部菜单-->
		<view class="footer-wrap">
			<view class="product-footer">
				<view class="footerlist">
					<view class="contact-btn m-btn" @tap="contactBtn()">立即联系</view>
					<view v-if="detail.type==1" class="price-btn m-btn" @tap="offerBtn()">立即报价</view>
				</view>
			</view>
		</view>
		<!--联系我们-->
		<uni-popup :defaultPopup="ishow" :defaultTrans="ishow" ref="popup">
			<view class="contact-us m-contactbg">
				<view>联系人：{{companyInfo.contact_name}}</view>
				<view>电话：{{companyInfo.contact_phone}}</view>
				<!-- 	<view>地址：{{companyInfo.contact_phone}}</view> -->
			</view>
		</uni-popup>
		<!--报价-->
		<uni-popup :defaultPopup="ishow" :defaultTrans="ishow" ref="offerpopup">
			<form @submit="formSubmit">
				<view class="m-contactbg">
					<view class="contact-item">
						<view class="title">联系人</view>
						<view class="contact-input">
							<input type="text" name="contactname" v-model="contactForm.contactname" placeholder="请输入联系人">
						</view>
					</view>
					<view class="contact-item">
						<view class="title">手机号</view>
						<view class="contact-input">
							<input type="text" name="telphone" v-model="contactForm.telphone" placeholder="请输入手机号">
						</view>
					</view>
					<view class="contact-item">
						<view class="title">公司名称</view>
						<view class="contact-input">
							<input type="text" name="companyname" v-model="contactForm.companyname" placeholder="请输入公司名称">
						</view>
					</view>
					<view class="contact-item">
						<view class="title">价格</view>
						<view class="contact-input">
							<input type="text" name="price" v-model="contactForm.price" placeholder="请输入价格">
						</view>
					</view>
					<view class="contact-item">
						<view class="title">留言</view>
						<view class="contact-input">
							<textarea value="" name="message" v-model="contactForm.message" placeholder="" />
							</view>
					</view>
				<button class="contactSubmit" form-type="submit">提交</button>
				</view>
			</form>
		</uni-popup>	
	</view>
</template>
<script>
	var graceChecker = require("@/utils/graceChecker.js");
	import interfaces from '@/utils/interfaces'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import productHeader from '@/components/productHeader/productHeader.vue'
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		components:{
			uniPopup,
			productHeader
		},
		computed: mapState(['hasLogin', 'uerInfo']),
		data() {
			return {
				currentSwiper: 0, // 轮播图下标	
				needId:"",//获取产品id
				detail:{
					swiperList:[],
					detailsList:[],
				},//产品详情
				companyInfo:{},
				ishow:false,
				userid:'',//获取该用户id
				user_id:'',//获取订单用户id
				user_type:'',//用户注册类型
				contactForm:{
					contactname:"",
					telphone:"",
					companyname:"",
					price:""	
				},
				//定义表单规则
				rules: [{
					name: "contactname",
					checkType: "notnull",
					checkRule: "",
					errorMsg: "请输入联系人"
				},{
					name: "telphone",
					checkType: "phoneno",
					checkRule: "",
					errorMsg: "请输入正确的手机号"
				},{
					name: "companyname",
					checkType: "notnull",
					checkRule: "",
					errorMsg: "请输入公司名称"
				},{
					name: "price",
					checkType: "notnull",
					checkRule: "",
					errorMsg: "请输入价格"
				}]
			}
		},
		onLoad(option) {
			this.needId=option.id;
			this.userid=this.uerInfo.userId;
			this.loadData(); //初始化数据	
		},
		methods: {
		 loadData() {
			 let params={
				 data: {
				 	needs_id:this.needId
				 }
			 }
			this.request({
					url: interfaces.getInfoData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data:params,
					success: (res) => {		
						console.log(res);
						if(res.code==200){	
						this.user_id=res.data.user_id;
						this.user_type=res.data.user_type;
						var swiperData=res.data.images !=null && res.data.images.length?res.data.images.split(','):'';
						var detailsData=res.data.info !=null && res.data.info.length?res.data.info.split(','):'';
						var cnnameData = res.data.service_cnname != null && res.data.service_cnname.length ? res.data.service_cnname.split(',') : '';
						var qualificationsData=res.data.qualification_icon != null && res.data.qualification_icon.length ? res.data.qualification_icon.split(',') : '';
						this.detail=res.data;
						this.detail.swiperList=swiperData;
						this.detail.service_cnname=cnnameData;
						this.detail.qualifications=qualificationsData;
						var htmlString=[];
						for(var i=0;i<detailsData.length;i++){//产品详情
						htmlString[i]='<img style="width:100%;display:block;" src="'+detailsData[i]+'"></img>';
						}
						this.detail.info=htmlString.join("");
						
						this.companyData();
						}
					}
				})			
			},
			contactBtn(){
				if(!this.hasLogin){
					uni.showModal({
					    title: '提示',
					    content: '您未登录，登录后可查看联系方式',
					    success: function (res) {
					        if (res.confirm) {
					             uni.navigateTo({
					                 url: "/pages/user/login"
					             });
					        } else if (res.cancel) {
					           // console.log('用户点击取消');
					        }
					    }
					});
				}else{
					this.$refs.popup.open();
				}				 
			},
			offerBtn(){
				if(!this.hasLogin){
				uni.showModal({
				    title: '提示',
				    content: '您未登录，登录后可填写报价方案',
				    success: function (res) {
				        if (res.confirm) {
				             uni.navigateTo({
				                 url: "/pages/user/login"
				             });
				        } else if (res.cancel) {
				           // console.log('用户点击取消');
				        }
				    }
				});
				}else{
				 this.$refs.offerpopup.open();
				 }
			},
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			 companyData(){
				 this.request({
					url: interfaces.getEnterpriseData,
					dataType: "JSON",
					method: 'POST', 
					data:{
						data: {
							user_id:this.user_id
						}
					},
					success: (res) => {
						if(res.code==200){				
							this.companyInfo=res.data.profiles.user_company;
						}
					}
				})
			},
			viewEnter(item){
				uni.navigateTo({
				    url: "/pages/EnterpriseCenter/EnterpriseCenter?userid="+this.user_id
				});
			},
			back(){//返回
				uni.navigateBack();
			},
			formSubmit: function(e) {
				//进行表单检查
				
				var formData = e.detail.value;
				formData.isChecked=this.isChecked;
				var checkRes = graceChecker.check(formData, this.rules);
				var offerclose=this.$refs.offerpopup;
				if (!checkRes) {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					})
				}else{
					this.request({
					url: interfaces.getQuotationData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data:{
							user_id:this.userid,
							need_id:this.needId,
							quoted_price:this.contactForm.price,
							desc:this.contactForm.message,
							phone:this.contactForm.telphone,
							contact_name:this.contactForm.contactname,
							company_name:this.contactForm.companyname
						}
					},
					 success: (res) => {  					
							if(res.code ==200){
								  offerclose.close();
								setTimeout(() => {
								uni.showToast({
									title:"留言提交成功",
									icon: "none"
								})
								 }, 500);		
							}else{
								uni.showToast({
									title: res.message,
									icon: "none"
								});
							}
					 },
					})
				}
			}	
		},
	}
</script>
<style lang="scss" scoped>
	@import "../../scss/common.scss";
	/*  修改状态栏样式 */
	.status {
		/* #ifdef APP-PLUS */
		opacity: 0;
		/* #endif */
	}
	.swiper-box {
		position: relative;
		width: 100%;
		height: 641.3rpx;

		swiper {
			width: 100%;
			height: 641.3rpx;

			swiper-item { 
				image {
					width: 100%;
					height: 641.3rpx;
				}
			}
		}
		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
	/*产品详情*/
	.product-details-con {
		background: #fff;
		padding: 27.17rpx 45.28rpx 18.11rpx;
		border-top: solid 1px #e2e2e2;
		margin-bottom: 18.11rpx;

		.top {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			view {
				display: flex;

			}
			.new-price {
				font-size: 54.34rpx;
				color: $ac;

				text {
					font-size: 36.23rpx;
					margin-top: 18.11rpx;
				}
			}
			.old-price {
				color: #e2e2e2;
				font-size: 28.98rpx;
				text-decoration: line-through;
				margin-left: -18.11rpx;
			}
			.good-num {
				padding: 3.62rpx 14.49rpx;
				background-color: #A1D3C6;
				border-radius: 10px;
				font-size: 21.73rpx;
				color: #44a78d;
			}
		}
		.product-title {
			margin-top: 18.11rpx;
			font-weight: bold;
			font-size: 28.98rpx;
		}
		.product-text {
			margin-top: 18.11rpx;
			color: #8e8e93;
			font-size: 21.73rpx;
		}
	}
	.product-info-wrap {
		background: #fff;
		padding: 36.23rpx 45.28rpx 36.23rpx;
		margin-bottom: 18.11rpx;
	}
	.info-box {
		display: flex;
		justify-content:left;
		margin-bottom: 27.17rpx;
		margin-left:-18.11rpx;
		.item {
			display: flex;
			position: relative;
			text-align: center;
			padding:0 18.11rpx;
			
			&:after {
				content: "";
				display: block;
				border-left: 1px solid #e2e2e2;
				height: 25.36rpx;
				position: absolute;
				top: 7.24rpx;
				right: 0;
			}
			&:last-child {
				&:after {
					display: none;
				}
			}
		}
	}
	.certi-img {
		image {
			width: 36.23rpx;
			height: 36.23rpx;
			margin: 0 9.05rpx;
			vertical-align: middle;
		}
	}
	.description {
		.title {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 25.36rpx;
			color: #4e5a65;
			padding: 9.05rpx 0 18.11rpx;
		}

	}
.footer-wrap {
		height: 101.44rpx;
	}
	.product-footer {
		padding: 18.11rpx 0;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 99;
		.footerlist {
			display: flex;
			justify-content: space-around;
		}
		.m-btn {
			display: flex;
			justify-content: center;
			width: 289.85rpx;
			height: 65.21rpx;
			border-radius: 32.6rpx;
			border: solid 1px #44a78d;
			text-align: center;
			line-height: 61.59rpx;
			font-size: 25.36rpx;
			margin: 0 27.17rpx;
			&.contact-btn {
				background-color: #44a78d;
				color: #fefefe;
			}
			&.price-btn {
				color: $ac;
				background: #D8ECE7;
			}
		}
	}
	.company-box{
		padding:21.73rpx 45.28rpx;
		background:#fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.company-info{flex: 1;
		image{width:54.34rpx;height:54.34rpx;vertical-align:middle;border-radius:50%;margin-right:7.24rpx;}
		.title{color:#000000;margin-bottom:9.05rpx;}
		.desc{color:#8E8E93;font-size:21.73rpx;}
	}
	.company-link{width:163.04rpx;height:65.21rpx;background:rgba(68,167,141,.2);border:1px solid #44A78D;text-align: center;line-height:65.21rpx;color:$ac;border-radius:36.23rpx;margin-left:63.4rpx;}
	.m-contactbg{background-color: #fff;z-index: 999;padding: 54.34rpx 36.23rpx;border-radius: 19.92rpx;text-align:left;font-size:28.98rpx;line-height:54.34rpx;width:579.71rpx;margin:0 auto;}
	.contact-item{margin-bottom:18.11rpx;font-size:21.73rpx;}
	.contact-input input{border:1px solid #f2f2f2;padding:0 18.11rpx;height:54.34rpx;line-height:54.34rpx;font-size:21.73rpx;}
	.contact-input textarea{height:181.15rpx;border:1px solid #f2f2f2;padding:28.98rpx 18.11rpx;width:100%;font-size:21.73rpx;}
	.contactSubmit{background: #44a78d;border-radius:36.23rpx; text-align: center; font-size:28.98rpx; color: #fff;
cursor: pointer;height:58.34rpx;line-height:58.34rpx;}
</style>
