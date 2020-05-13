<template>
	<view>
		<view class="priceInfo">
			<text class="quotedPrice">已报价</text>
			<text class="noOffer">未报价</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.priceInfo {

		display: flex;
		margin: 0 auto;
		;
		box-sizing: border-box;
		padding: 45.28rpx 108.69rpx;
		flex-direction: row;

		.quotedPrice {
			flex: 1;
			font-size: 16px;
			line-height: 36px;
			letter-spacing: 0px;
			color: #44a78d;
		}

		.noOffer {
			width: 42px;
			height: 19px;
			font-family: Microsoft YaHei;
			font-size: 14px;
			font-weight: normal;
			font-stretch: normal;
			line-height: 36px;
			letter-spacing: 0px;
			color: #707070;
		}

	}
</style>
