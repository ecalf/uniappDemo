<template>
	<view>
		<view class="goods" v-for="(item,index) in goodsPrice" :key='item.index'>
			<view class="goodslist-header">
				<text class="goodslist-icon">推</text>
				<text class="goodslist-title">{{item.title}}</text>
				<text class="goodslist-time">{{item.time}}</text>
			</view>
			<text class="goodslist-content">{{item.content}}</text>
			<view class="goodslist-comter">
				<view class="goodslist-price">
					<text>￥</text>
					{{item.price}}
				</view>
				<view class="goodslist-number">
					{{item.number}}
					<text>个</text>
				</view>
			</view>
			<view class="goods-operate">
				<view class="goodsDelete"><text class="deleteText">删除</text></view>
				<view class="goodsDelete"><text class="updataText">修改</text></view>
				<view class="goodsDelete"><text class="pullText">上架</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodsPrice: {
				type: Array
			}
			},
			data() {
				return {

				};
			},
			// updated(){
			// 	console.log(this.goodsPrice,999)
			// }
			}
</script>

<style lang="less">
	.goods {
		width: 659.42rpx;
		background-color: #ffffff;
		border-radius: 11px;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 36.23rpx;

		.goodslist-header {
			margin-bottom: 18.11rpx;

			.goodslist-icon {
				width: 40rpx;
				height: 36.23rpx;
				background: #F23A3B;
				color: #fff;
				line-height: 36.23rpx;
				text-align: center;
				font-size: 21.73rpx;
				margin-right: 12.68rpx;
			}

			.goodslist-title {
				width: 362.31rpx;
				font-size: 28.98rpx;
				font-weight: bold;
				line-height: 38.04rpx;
				letter-spacing: 0rpx;
				color: #4e5a65;

			}

			.goodslist-time {
				position: relative;
				left: 108.69rpx;
				top: 0rpx;
				font-size: 18.11rpx;
				line-height: 28.98rpx;
				letter-spacing: 0rpx;
				color: #8e8e93;
			}

		}

		.goodslist-content {
			display: block;
			font-size: 25.36rpx;
			letter-spacing: 0rpx;
			color: #4e5a65;
			margin-bottom: 21.73rpx;
		}

		.goodslist-comter {
			display: flex;
			justify-content: space-between;
			margin-bottom: 27.17rpx;

			.goodslist-price {
				font-size: 25.36rpx;
				line-height: 34.42rpx;
				letter-spacing: 0rpx;
				color: #4e5a65;
			}

			.goodslist-number {
				font-size: 21.73rpx;
				line-height: 34.42rpx;
				letter-spacing: 0rpx;
				color: #4e5a65;
			}
		}

		.goods-operate {
			display: flex;
			justify-content: space-around;
			align-items: center;

			.goodsDelete {
				width: 181.15rpx;
				height: 45.28rpx;
				border-radius: 23.55rpx;
				border: solid 1.81rpx #8e8e93;
				display: flex;
				justify-content: space-around;
				align-items: center;

				.deleteText {
					font-size: 25.36rpx;
					letter-spacing: 0rpx;
					color: #4e5a65;
				}

				.updataText {
					font-size: 25.36rpx;
					letter-spacing: 0rpx;
					color: #4e5a65;
				}

				.pullText {
					font-size: 25.36rpx;
					letter-spacing: 0rpx;
					color: #44a78d;
				}

			}

		}
	}
</style>
