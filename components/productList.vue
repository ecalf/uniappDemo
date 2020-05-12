<template>
	<view class="goods-list commonweb">
		<view class="product-list">
			<view class="product" @tap="handleGoods(goods)" v-for="goods in goodsList" :key="goods.goods_id">
				<view class="image" v-if="goods.img">
					<image mode="widthFix" :src="goods.img"></image>
				</view>
				<view class="info">
					<view class="name"><text class="tui-icon">推</text>{{goods.name}}}</view>

					<view class="certificate">
						<image src="../static/images/certificate1.png" mode=""></image>
						<image src="../static/images/certificate2.png" mode=""></image>
					</view>
					<view class="price">
						<text>￥</text>
						{{goods.price}}
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {	
		props:{
			goodsList:Array
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

				.tui-icon {
					width: 40rpx;
					height: 36.23rpx;
					background: #F23A3B;
					color: #fff;
					line-height: 36.23rpx;
					text-align: center;
					font-size: 21.73rpx;
					margin-right: 5px
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
</style>
