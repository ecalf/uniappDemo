<template>
	<view class="goods-list commonweb">
		<view class="product-list">
			<view class="product" v-for="(goods,index) in goodsList" :key="goods.id" @tap="handleGoods(goods)">
				<view class="image" v-if="goods.images">
					<image mode="widthFix" :src="goods.images"></image>
				</view>
				<view class="info">
					<view class="name"><text class="tui-icon">推</text>{{goods.title}}</view>

					<view class="certificate">
						<image :src="goods.qualification" mode=""></image>
					</view>
					<view class="price">
						<text>￥</text>
						{{goods.price}}
					</view>
				</view>
			</view>
		</view>
		<view class="loading-text">{{loadStatus}}</view>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				
			};
		},
		props: {
			goodsList:{
				type:Array
			},
			loadStatus:{
				type:String,
				default: "正在加载...."
			}
		},
		methods: {
			handleGoods(goods) {
				// 页面跳转 商品详情
				uni.navigateTo({
					url: "/pages/product/productDetails?id=1"
				})
			},
		}
	}
</script>

<style lang="scss">
	@import "../scss/common.scss";

	/*瀑布流列表*/
	.product-list {
		column-count: 2;
		column-gap: 9.05rpx;

		.product {
			break-inside: avoid;
			background-color: #fff;
			margin-bottom: 9.05rpx;
			border-radius: 5px;

			.image {
				padding: 27.17rpx 27.17rpx 0;

				image {
					width: 100%;
				}
			}

			.info {
				padding: 27.17rpx 5%;

				.name {
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 25.36rpx;
					color: #000000;
					margin-bottom: 9.05rpx;
				}



				.certificate {
					margin-bottom: 9.05rpx;

					image {
						width: 36.23rpx;
						height: 36.23rpx;
						margin-right: 10.86rpx;
					}
				}

				.price {
					color: $ac;
					font-size: 32.6rpx;
					font-weight: 600;

					text {
						font-size: 18.11rpx;
					}
				}
			}
		}
		
	}
	.loading-text{padding:20px 0;text-align: center;}
</style>
