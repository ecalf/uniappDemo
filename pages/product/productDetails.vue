<template>
	<view>
		<!-- 状态栏 -->
		<!-- 	<page-status></page-status> -->
		<!-- 轮播图 -->

		<!-- <view class="swiper-box">
			<swiper @change="swiperChange" circular="true" autoplay="true">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.url"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">
				{{currentSwiper + 1}}/{{swiperList.length}}
			</view>
		</view> -->
		<!-- 		<view class="product-details-con">
			<view class="top">
				<view class="new-price"><text>￥</text>2000.00</view>
				<view class="old-price">￥2000.00</view>
				<view class="good-num">库存：1500个</view>
			</view>
			<view class="product-title"><text class="tui-icon">推</text>医用正压单水平自动无创呼吸器睡眠老人止鼾机YH-450鼾机YH-450</view>
			<view class="product-text">鱼跃呼吸机家医用正压单水平自动无创呼吸器睡眠老人止鼾YH-450鱼跃呼吸机家医用正压单水平自动无创呼吸器睡眠老人止鼾YH-450鱼跃呼吸机家医用正压。</view>
		</view> -->
		<view class="swiper-box">
			<swiper @change="swiperChange" circular="true" autoplay="true">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.url"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">
				{{currentSwiper + 1}}/{{swiperList.length}}
			</view>
		</view>
		<view class="product-details-con">
			<view class="top">
				<view class="new-price"><text>￥</text>{{detail.price}}</view>
				<view class="old-price">￥{{detail.supplier_price}}</view>
				<view class="good-num">库存：{{detail.num}}{{detail.unit_category_cnname}}</view>
			</view>
			<view class="product-title"><text class="tui-icon">推</text>{{detail.title}}</view>
			<view class="product-text">{{detail.desc}}</view>
		</view>


		<view class="product-info-wrap">
			<view class="info-box">
				<view class="item">品牌：{{detail.product_brand_cnname}}</view>
				<view class="item">应用类型：{{detail.user_name}}</view>
				<view class="item">出口国：{{detail.exit_country}}</view>
			</view>
			<!-- <view class="certi-img">认证：<image src="@/static/images/certificate1.png" mode=""></image>
				<image src="@/static/images/certificate2.png" mode=""></image>
				<image src="@/static/images/certificate1.png" mode=""></image>
				<image src="@/static/images/certificate2.png" mode=""></image>
			</view> -->
			<view class="certi-img">认证：<image :src="detail.qualification" mode=""></image>
				<image src="@/static/images/certificate2.png" mode=""></image>
				<image src="@/static/images/certificate1.png" mode=""></image>
				<image src="@/static/images/certificate2.png" mode=""></image>
			</view>
		</view>

		<view class="company-box">
			<view class="company-info">
				<view class="title">
					<image src="@/static/images/lgicon33.png"></image>深圳万合国际股份有限公司
				</view>
				<view class="desc">深圳万合国际股份有限公司深圳万合国际股份有限公司深圳万合国际深圳万合国际股份有...</view>
			</view>
			<navigator url="/pages/EnterpriseCenter/EnterpriseCenter" class="company-link">查看企业</navigator>
		</view>

		<view class="description">
			<view class="title">———— 商品详情 ————</view>
			<view class="content">
				<rich-text :nodes="detail.info"></rich-text>
			</view>
		</view>

		<!--底部菜单-->
		<view class="footer-wrap">
			<view class="product-footer">
				<view class="footerlist">
					<view class="contact-btn m-btn" @tap="contactBtn()">立即联系</view>
					<view class="price-btn m-btn" @tap="offerBtn()">立即报价</view>
				</view>
			</view>
		</view>
		<!--联系我们-->
		<uni-popup :defaultPopup="ishow" :defaultTrans="ishow" ref="popup">
			<view class="contact-us m-contactbg">
				<view>联系人：张女士</view>
				<view>电话：0755-8888 888</view>
				<view>地址：深圳市福田区天安国际大厦6楼405号</view>
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
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		components:{
			uniPopup
		},
		computed: mapState(['hasLogin', 'uerInfo']),
		data() {
			return {
				swiperList: [{
						colorClass: 'uni-bg-red',
						url: '/static/images/wbigimg01.jpg',
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
					}
				],
				currentSwiper: 0, // 轮播图下标	
				needId:"",//获取id
				detail:{},//产品详情
				ishow:false,
				userid:"",
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
			console.log(this.needId);
			this.loadData(); //初始化数据
		},
		methods: {
			loadData() {
				this.userid=this.uerInfo.userId;
				console.log(this.userid);
				this.request({
					url: interfaces.getInfoData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							needs_id:this.needId
						}
					},
					success: ((res) => {
						console.log(res);
						if(res.code==200){
						this.detail=res.data;
						}
					})
				});
			},
			contactBtn(){
				  this.$refs.popup.open();
			},
			offerBtn(){
				 this.$refs.offerpopup.open();
			},
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
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
<style lang="scss">
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
		justify-content: flex-start;
		margin-bottom: 27.17rpx;
		margin-left: -36.23rpx;

		.item {
			display: flex;
			position: relative;
			text-align: center;
			padding: 0 9.05rpx;

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

	.content {
		img {
			width: 100%;
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
		image{width:54.34rpx;height:54.34rpx;vertical-align:middle;}
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
