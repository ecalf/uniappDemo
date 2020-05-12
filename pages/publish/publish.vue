<template>
	<view>
		<view class="publish-popup">
			<view class="m-flex">
				<view class="publish-item item">
					<image src="../../static/images/purchase-icon.png"></image>
					<view class="title">发布采购</view>
				</view>
				<view class="publish-item item">
					<image src="../../static/images/sales-icon.png"></image>
					<view class="title">发布销售</view>
				</view>
				<view class="publish-item item">
					<image src="../../static/images/release-icon.png"></image>
					<view class="title">发布委托</view>
				</view>
			</view>
		</view>
		<page-footer :current="2"></page-footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "../../scss/common.scss";
	.publish-popup {
		position: absolute;
		bottom:181.15rpx;
		left: 0;
		width: 100%;
		.publish-item {
			width: 33.33%;
			justify-content: center;
				font-size:28.98rpx;
			image {
			
				width: 163.04rpx;
				height: 163.04rpx;
			}
			.title{
				margin-top:14.49rpx;
				color:$bc;
			}
		}

	}
</style>
