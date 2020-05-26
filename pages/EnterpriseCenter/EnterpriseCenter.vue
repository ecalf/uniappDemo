<template>
	<view>
		<!-- 轮播图-->
		<view class="banner-swiper">
			<view class="swiper-box">
				<swiper circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(swiper,index) in user_company.transparencyData" :key="index">
						<image :src="swiper"></image>
					</swiper-item>
				</swiper>

			</view>
		</view>
		<!--企业简介-->
		<view class="CompanyProfile">
			<text class="CompanyProfile-title">企业简介</text>
			<text class="CompanyProfile-english">Company profile</text>
			<text class="CompanyProfile-content">{{user_company.company_introduce}}</text>
		</view>
		<!--列表推荐-->
		<view class="recommend-nav">
			<view class="tab-item" v-for="(target,index) in filterByList" :key="index" @tap="handleSelect(index)" :class="{'on':target.selected}">
				<view class="cntitle">{{target.cntitle}}</view>
				<view class="entitle">{{target.entitle}}</view>
			</view>
		</view>
		<!--商品列表-->
		<productList :goodsList="goodsList" />
		<!-- 公司资质 -->
		<view class="aturalEndowments-box">
			<text class="CompanyProfile-title">企业资质</text>
			<text class="CompanyProfile-english">Company profile</text>
			<view class="aturalEndowments-body">
				<view class="aturalEndowments" v-for="(cc,index) in user_company.qualificationsData" :key="index">
					<image :src="cc"></image>
				</view>
				<!-- <view class="aturalEndowments">
					<image src="../../static/images/lgicon40.png"></image>
				</view>
				<view class="aturalEndowments">
					<image src="../../static/images/lgicon40.png"></image>
				</view>
				<view class="aturalEndowments">
					<image src="../../static/images/lgicon40.png"></image>
				</view> -->
			</view>
		</view>
		<!-- 联系我们 -->
		<view class="contact">
			<text class="contact-title">联系我们</text>
			<text class="contact-english">contact us</text>
			<view class="contact-information">
				<view class="contact-man">
					<text >联系人：{{user_company.contact_name}}</text>
				</view>
				<view>
					<text class="contact-phone">电话：{{user_company.contact_phone}}</text>
					<text>QQ：{{user_company.qq}}</text>
				</view>
				<view class='contact-weixin'>
					<text class="contact-emil">微信：{{user_company.wechat}}</text>
					<text>邮箱：{{user_company.email}}</text>
				</view>
				<view>
					<text>地址：{{user_company.addr}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import productList from '@/components/productList.vue'
	import interfaces from '@/utils/interfaces.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		computed: mapState(['hasLogin', 'uerInfo']),
		components: {
			productList
		},
		data() {
			return {
				user_id:'',
				user_bank:{},
				user_company:{
					transparencyData:[],
					qualificationsData:[]
				},
	
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				filterByList: [{
						cntitle: "需求中心",
						entitle: "Recommend",
						selected: true
					},
					{
						cntitle: "采购订单",
						entitle: "Purchase",
						selected: false,
					},
					{
						cntitle: "销售订单",
						entitle: "Sale",
						selected: false,
					},
					{
						cntitle: "委托订单",
						entitle: "Entrust",
						selected: false,
					},
				],
				goodsList: [{
						id: 1,
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						id: 2,
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						id: 3,
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						id: 4,
						img: "",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						id: 5,
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					}
				],
			}
		},
		onLoad(){
				this.user_id=this.uerInfo.user_Id;
				//console.log(this.user_id);
				this.getEnterprise()
				
		},
		methods: {
			
			handleSelect(index) {
				this.filterByList[index].selected = true;

				// 其他的selected false
				for (let i = 0; i < this.filterByList.length; i++) {
					if (i != index) {
						this.filterByList[i].selected = false;
					}
				}
			},
			
			getEnterprise(){
				this.request({
					url: interfaces.getEnterpriseData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: {
						data: {
							user_id:this.user_id
						}
					},
					success: res => {
						console.log(res);
						this.user_bank = res.data.profiles.user_bank;
						this.user_company = res.data.profiles.user_company;
						this.user_company.transparencyData = this.user_company.company_transparency.split(',');
						this.user_company.qualificationsData = this.user_company.qualifications.split(',');
						console.log(this.user_company.transparencyData,this.user_company.qualificationsData,2355)
					}
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "@/scss/common.scss";

	.banner-swiper {
		width: 100%;
		display: flex;
		justify-content: center;

		.swiper-box {
			height: 452.89rpx;
			overflow: hidden;
			width: 100%;
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;

			swiper {
				width: 100%;
				height: 452.89rpx;

				swiper-item {
					image {
						width: 100%;
						height: 452.89rpx;
					}
				}
			}
		}
	}

	.CompanyProfile {
		width: 717.39rpx;
		margin: -50rpx auto 0;
		padding: 65.21rpx 27.17rpx 45.28rpx 34.42rpx;
		border-bottom: solid 2upx #f6f6f6;
		background: #fff;
		position: relative;
		z-index: 2;
		border-radius: 10px;

		.CompanyProfile-content {
			display: block;
			font-size: 21.73rpx;
			color: #8e8e93;
			margin-top: 21.73rpx;
		}
	}

	.CompanyProfile-title {
		font-weight: bolder;
		font-size: 27.17rpx;
		color: #4e5a65;
		margin-right: 9.05rpx;
	}

	.CompanyProfile-english {
		font-size: 21.73rpx;
		color: #4e5a65;
	}

	/*列表推荐导航*/
	.recommend-nav {
		display: flex;
		justify-content: space-between;
		margin-bottom: 18.11rpx;

		.tab-item {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			text-align: center;
			margin-top: 18.11rpx;
			position: relative;
			padding: 0 2%;
			color: #4E5A65;

			&.on {
				color: $ac;

				&:after {
					opacity: 1;
				}
			}

			&:before {
				content: "";
				display: block;
				height: 20px;
				position: absolute;
				right: 0;
				top: 10.86rpx;
				border-right: 1px solid #e2e2e2;
			}

			&:after {
				content: "";
				display: block;
				width: 36.23rpx;
				height: 14.49rpx;
				position: absolute;
				left: 50%;
				top: -18.11rpx;
				transform: translateX(-50%);
				background: url(~@/static/images/listcur.png);
				background-size: cover;
				opacity: 0;
			}

			.cntitle {
				font-size: 25.36rpx;
				font-weight: bolder;
				width: 100%;

			}

			.entitle {
				font-size: 21.73rpx;
				width: 100%;
			}

			&:last-child {
				&:before {
					display: none;
				}
			}
		}
	}

	.aturalEndowments-box {
		box-sizing: border-box;
		padding: 0 38.04rpx 0 45.28rpx;
		margin: 36.23rpx 0;
		
		.aturalEndowments-body {
			display: flex;
			// justify-content: space-around;
			margin-top: 36.23rpx;

			.aturalEndowments {
				width: 155.79rpx;
				height: 155.79rpx;
				background-color: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					width: 96.01rpx;
					height: 137.68rpx;

				}
			}
		}

	}

	.contact {
		box-sizing: border-box;
		padding: 0 38.04rpx 0 45.28rpx;

		.contact-title {
			font-size: 28.98rpx;
			font-weight: bolder;
			color: #44a78d;
			margin-right: 9.05rpx;
		}

		.contact-english {
			font-size: 21.73rpx;
			color: #44a78d;
		}

		.contact-information {
			font-size: 28.98rpx;
			color: #4e5a65;
			.contact-man{
				margin: 9.05rpx 0;
			}
			.contact-phone {
				margin-right: 72.46rpx;
			}
			.contact-weixin{
				margin:7.24rpx 0;
			}
			.contact-emil {
				margin-right: 97.82rpx;
			}

		}
	}
</style>
