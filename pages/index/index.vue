<template>
	<view>
		<view class="banner-swiper">
			<view class="swiper-box">
				<swiper circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="swiper in swiperList" :key="swiper.id">
						<image :src="swiper.img"></image>
					</swiper-item>
				</swiper>

			</view>
		</view>

		<!--分类列表-->
		<view class="category-list commonweb">
			<view @tap="handleCategory(item)" class="category" v-for="(item,index) in categoryList" :key="index">
				<view class="img">
					<image :src="item.img"></image>
				</view>
				<view class="text">{{item.text}}</view>
			</view>
		</view>
		<!--发布入口-->
		<view class="commonweb">
			<view class="publish-list">
				<view class="item" :class="'item-'+index" v-for="(item,index) in publishList" :key="index" :style="{backgroundImage: 'url('+item.bgimg+')'}">
					<view class="inpublish-box">
						<view class="left">
							<view class="text">{{item.title}}</view>
						</view>
						<view class="releaseicon">
							<image :src="item.icon" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!--列表推荐-->
		
			<view class="recommend-nav commonweb">
				<view class="tab-item">				
					<view class="cntitle">列表推荐</view>
					<view class="entitle">Recommend</view>	
				</view>
				<view class="tab-item">
					<view class="cntitle">采购订单</view>
					<view class="entitle">Purchase</view>
				</view>
				<view class="tab-item">
					<view class="cntitle">销售订单</view>
					<view class="entitle">Sale</view>
				</view>
				<view class="tab-item">
					<view class="cntitle">委托订单</view>
					<view class="entitle">Entrust</view>
				</view>
			</view>	
			
			<view class="goods-list commonweb">
				<view class="product-list">
					<view class="product" @tap="handleGoods(goods)" v-for="goods in goodsList" :key="goods.goods_id">
						<view class="image" v-if="goods.img"><image mode="widthFix" :src="goods.img"></image></view>
						<view class="name">{{goods.name}}}</view>
						<view class="info">
							<view class="price">
								<text>￥</text>
								{{goods.price}}
							</view>
							
						</view>
					</view>
				</view>
				<view class="loading-text">加载中</view>
			</view>

		<page-footer :current="0"></page-footer>

	</view>
</template>

<script>
	export default {
		data() {
			return {

				swiperList: [{
						img: "/static/images/banner.jpg"
					},
					{
						img: "/static/images/banner.jpg"
					},
					{
						img: "/static/images/banner.jpg"
					}
				], //轮播图片
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				categoryList: [{
						text: "口罩类",
						img: "/static/images/indexicon01.png"
					},
					{
						text: "防护服",
						img: "/static/images/indexicon02.png"
					},
					{
						text: "呼吸机",
						img: "/static/images/indexicon03.png"
					},
					{
						text: "医用面罩",
						img: "/static/images/indexicon04.png"
					},
					{
						text: "测试试剂",
						img: "/static/images/indexicon05.png"
					},
					{
						text: "温度计",
						img: "/static/images/indexicon06.png"
					},
					{
						text: "防护原料",
						img: "/static/images/indexicon07.png"
					},
					{
						text: "消毒用品",
						img: "/static/images/indexicon08.png"
					},
				], // 分类
				publishList: [{
						title: "发布采购",
						bgimg: "/static/images/release01.png",
						icon: "/static/images/releaseicon01.png"
					},
					{
						title: "发布销售",
						bgimg: "/static/images/release02.png",
						icon: "/static/images/releaseicon02.png"
					},
					{
						title: "发布委托",
						bgimg: "/static/images/release03.png",
						icon: "/static/images/releaseicon03.png"
					}
				], //发布
				goodsList:[
					{
						img:"/static/images/product.png",
						name:"这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price:"2000",
					},
					{
						img:"/static/images/product.png",
						name:"这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price:"2000",
					},
					{
						img:"/static/images/product.png",
						name:"这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price:"2000",
					},
					{
						img:"",
						name:"这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price:"2000",
					}
				],
			
			}
			
			
		},
		methods: {
			initData() {
				this.request({
					url: interfaces.getBannerData,
					success: ((res) => {
						// console.log(res);
						this.swiperList = res.data.swiperList;
					})
				});
			},
		}
	}
</script>

<style lang="scss">
	@import "../../scss/common.scss";
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

	.category-list {
		margin: -50rpx auto 0;
		padding: 0 0 30upx 0;
		border-bottom: solid 2upx #f6f6f6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background: #fff;
		position: relative;
		z-index: 2;
		border-radius: 10px;

		.category {
			width: 25%;
			margin-top: 27.17rpx;
			display: flex;
			flex-wrap: wrap;

			.img {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 90.57rpx;
					height: 90.57rpx;
				}
			}

			.text {
				margin-top: 12.68rpx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 21.73rpx;
				color: #000000;
			}
		}
	}

	//首页发布
	.publish-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 16.3rpx 0;

		.item {
			width: 32.33%;
			display: flex;
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			background-size: cover;
			background-repeat: no-repeat;
			height: 108.69rpx;
			&.item-0{
				.text {
					color: #44A78D;
				}
			}
			&.item-1{
				.text {
					color: #feb322;
				}
			}
			&.item-2{
				.text {
					color: #7b79da;
				}
			}
			.inpublish-box {
				width: 100%;
				padding: 25.36rpx 8% 0;
				
			}
			.left{
				width: 50%;
				display: inline-block;
				vertical-align: middle;
			}
			.text {
				width: 57.97rpx;
				font-size: 21.73rpx;
				color: #44A78D;
				display: inline-block;
				vertical-align: middle;
			}

			.releaseicon {
				width: 50%;
				display: inline-block;
				vertical-align: middle;
				text-align:right;
				image {
					width: 45.28rpx;
					height: 45.28rpx;
				}
			}
		}	
	}
	
	//列表推荐导航
	.recommend-nav{
		display: flex;
		justify-content: space-between;
		.tab-item{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			text-align:center;
			margin-top:18.11rpx;
			position:relative;
			padding:0 2%;
			&:before{
				content:"";
				display: block;
				height: 20px;
				position: absolute;
				right:0;
				top:18.11rpx;
				border-right:1px solid #e2e2e2;
			}
			.cntitle{
				font-size:25.36rpx;
				font-weight:bold;
				width:100%;
				color:#4E5A65;
			}
			.entitle{
				font-size:21.73rpx;
				width:100%;
			}
			&:last-child{
				&:before{
					display:none;
				}
			}
		}
	}	
	//列表推荐
	.goods-list {
		padding:27.17rpx 0;
		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}
	
		.product-list {
			column-count: 2;
			column-gap:9.05rpx;
			.product {
				break-inside: avoid;
				background-color: #fff;
				margin-bottom:9.05rpx;
				border-radius:5px;
				.image{
					padding:27.17rpx 27.17rpx 0;
				image {
					width: 100%;		
				}
				}
				.name {
					
					padding:0 5%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size:25.36rpx;
					color: #000000;
				}
	
				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 27.17rpx 4%;
	
					.price {
						color:$ac;
						font-size:32.6rpx;
						font-weight: 600;
						text{
							font-size:21.73rpx;
						}
					}
	
					
				}
			}
	
		}
	}
	
</style>
