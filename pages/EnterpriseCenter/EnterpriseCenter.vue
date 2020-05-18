<template>
	<view>
		<!-- 轮播图-->
		<view class="banner-swiper">
			<view class="swiper-box">
				<swiper circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(swiper,index) in swiperList" :key="index">
						<image :src="swiper.img"></image>
					</swiper-item>
				</swiper>

			</view>
		</view>
		<!--企业简介-->
		<view class="CompanyProfile">
			<text class="CompanyProfile-title">企业简介</text>
			<text class="CompanyProfile-english">Company profile</text>
			<text class="CompanyProfile-content">万合国际供应链投资（深圳）有限公司创立于20018年11月19日。自成立以来，万合专注于服务质量的提升，已积累国际供应链服务21年的行业经验，与2018年成立全流程服务的，凭借卓越的物流供应链服务和持续创新的技术应用，与诸多产业客户建立了长期深度合作。
				公司成立2年来，紧跟市场变化及客户需求，持续创新发展，专注于服务质量的提升，通过多元业务联动，围绕仓配一体服务、跨境物流服务、物流科技装备、供应链金融科技、大健康产业平台等领域，致力于在全球范围内打造商流、物流、信息流和资金流四流合一的供应链有机圈。</text>
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
	</view>
</template>

<script>
	import productList from '@/components/productList.vue'
	export default {
		components:{
			productList
		},
		data() {
			return {
				swiperList: [{
						id: 1,
						img: "/static/images/lgicon41.png"
					},
					{
						id: 2,
						img: "/static/images/banner.jpg"
					},
					{
						id: 3,
						img: "/static/images/banner.jpg"
					}
				], //轮播图片
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
		}
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

		.CompanyProfile-title {
			font-weight: bold;
			font-size: 27.17rpx;
			color: #4e5a65;
			margin-right: 9.05rpx;
		}

		.CompanyProfile-english {
			font-size: 21.73rpx;
			color: #4e5a65;
		}

		.CompanyProfile-content {
			display: block;
			font-size: 21.73rpx;
			color: #8e8e93;
			margin-top: 21.73rpx;
		}
	}

	/*列表推荐导航*/
	.recommend-nav {
		display: flex;
		justify-content: space-between;

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
				font-weight: bold;
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
</style>
