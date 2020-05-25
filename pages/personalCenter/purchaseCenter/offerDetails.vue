<template>
	<view>
		<view class="swiper-box">
			<swiper >
				<swiper-item >
					<image src="@/static/images/banner.jpg"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">1/3</view>
		</view>
		<view class="product-details-con">
			<view class="top">
				<view class="new-price">
					<text>￥</text>
					20000
				</view>
				<view class="old-price">￥20000</view>
				<view class="good-num">库存：500台</view>
			</view>
			<view class="product-title">
				<text class="tui-icon">推</text>
				防护服
			</view>
			<view class="product-text">43266</view>
		</view>
		
		<view class="cc">
			<text class="bb">姓名: </text>
			<text>李某某</text>
		</view>
		<view class="cc">
			<text class="bb">联系人: </text>
			<text>1800000000</text>
		</view>
		<view class="cc">
			<text class="bb">公司名称: </text>
			<text>万合国际</text>
		</view>
		<view class="cc">
			<text class="bb">价格: </text>
			<text>2000</text>
		</view>
		<view class="cc">
			<text class="bb">留言: </text>
			<text>123456789</text>
		</view>

	</view>
</template>

<script>
export default {
	data() {
		return {
		}
	}
}
</script>
<style lang="scss">
@import '@/scss/common.scss';
.cc{
    background: #fff;
    margin-bottom: 1.81rpx;
    display: flex;
    padding: 30.79rpx 38.04rpx;
    font-size: 21.73rpx;
    align-items: center;
    position: relative;
	.bb{
		margin-right: 108.69rpx;
		width: 181.15rpx;
	}
	}

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

			background-color: #a1d3c6;
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


</style>
