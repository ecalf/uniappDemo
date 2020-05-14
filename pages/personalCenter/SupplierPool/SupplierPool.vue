<template>
	<view>
		<conversionPrice :conversionPrice='conversionPrice'></conversionPrice>
		<view class="supplier-box">
			<image class='title-icon' src="@/static/images/lgicon31.jpg"></image>
			<view class="supplier-content">
				<text class="supplier-name">万和国际股份有限公司</text>
				<view class="supplier-kind">
					<text>口罩，呼吸机</text>
				</view>
				<text class="supplier-url">深圳市福田区天安国际大天国际6楼405号...</text>
				<view class="supplier-contacts">
					<text>联系人:</text>
					<text>张**</text>
				</view>
				<view class="supplier-phone">
					<text>电话:</text>
					<text>188****6685</text>
				</view>
				<view class="supplier-operate">
					<view class="supplierDelete"><text class="deleteText">删除</text></view>
					<view class="supplierDelete"><text class="checkhomeText">查看主页</text></view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import conversionPrice from '@/components/conversionPrice.vue'
	export default {
		data() {
			return {
				conversionPrice: [{
						id: 1,
						name: '全部'
					},
					{
						id: 2,
						name: '合作过'
					},
					{
						id: 3,
						name: '我的收藏'
					},

				],
			};
		},
		components: {
			conversionPrice
		}
	}
</script>

<style lang="less">
	.supplier-box {
		width: 659.42rpx;
		background-color: pink;
		border-radius: 11px;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 36.23rpx;
		.title-icon {
			display: inline-block;
			width: 144.92rpx;
			height: 144.92rpx;
		}

		.supplier-name {
			
			font-size: 28.98rpx;
			font-weight: bold;
			line-height: 38.04rpx;
		}

		.supplier-kind {
			width: 307.97rpx;
			height: 48.91rpx;
			background-color: #fff;
			border-radius: 25.36rpx;
			opacity: 0.2;

			text {
				font-size: 21.73rpx;
				letter-spacing: 0px;
				color: #44a78d;
			}

		}

		.supplier-url {
			font-size: 23.55rpx;
			color: #4e5a65;
		}

		.supplier-contacts {
			font-size: 21.73rpx;
			color: #4e5a65;
		}

		.supplier-phone {
			font-size: 21.73rpx;
			color: #4e5a65;
		}

		.supplierDelete {
			width: 163.04rpx;
			height: 45.28rpx;
			border-radius: 23.55rpx;
			border: solid 1.81rpx #8e8e93;
			text-align: center;
			line-height: 34.42rpx;
		}

		.deleteText {
			font-size: 21.73rpx;
			letter-spacing: 0rpx;
			color: #4e5a65;
		}

		.checkhomeText {
			font-size: 21.73rpx;
			color: #44a78d;
		}
	}
</style>
