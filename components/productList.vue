<template>
	<view class="goods-list commonweb">
		<view class="product-list" v-if="goodsList.length">
			<view class="product" v-for="(goods,index) in goodsList" :key="goods.id" @tap="handleGoods(goods)">
				<view class="image" v-if="goods.thumbnail">
					<image mode="widthFix" :src="goods.thumbnail"></image>
				</view>
				<view class="info">
					<view class="name"><text class="tui-icon" v-for="(item,num) in goods.service_cnname" :key="num">{{item}}</text>{{goods.title}}</view>
					<view class="certificate">
						<image  v-for="(item,num) in goods.qualification_icon" :key="num" :src="item" mode=""></image>
					</view>
					<view class="price">
						<text>￥</text>
						{{goods.price}}
					</view>
				</view>
			</view>
		</view>
		<error-msg v-else></error-msg>
		<view v-if="goodsList.length" class="loading-text">{{loadStatus}}</view>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import errorMsg from '@/components/errorMsg/errorMsg'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			uniLoadMore,
			errorMsg
		},
		data() {
			return {
				
			};
		},
		props: {
			goodsList:{
				type:Array,		
			},
			serviceList:{
				type:Array,
				
			},
			firstImages:{
				type:String
			},
			loadStatus:{
				type:String,
				default: "正在加载...."
			}
		},
		methods: {
			handleGoods(goods) {
				console.log(goods.id);
				// 页面跳转 商品详情
				uni.navigateTo({
					url: "/pages/product/productDetails?id="+goods.id
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
					overflow: hidden;
					font-size: 25.36rpx;
					color: #000000;
					margin-bottom: 9.05rpx;
				}



				.certificate {
					margin-bottom: 9.05rpx;

					image {
						width:39.85rpx;
						height:39.85rpx;
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
