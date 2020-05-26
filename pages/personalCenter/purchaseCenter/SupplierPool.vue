<template>
	<view>
		<conversionPrice :conversionPrice='conversionPrice'></conversionPrice>
		<view class="supplier-box" v-for="(item,index) in supplierList" :key='item.index'>
			<view class="supplier-header">
				<image class='title-icon' src="@/static/images/lgicon31.jpg"></image>
				<view class="supplier-content">
					<text class="supplier-name">{{item.name}}</text>
					<view class="supplier-kind">
						<text>{{item.kind}}</text>
					</view>
					<text class="supplier-url">{{item.url}}</text>
				</view>
			</view>
			<view class="supplier-footer">
				<view class="supplier-information">
					<view class="supplier-contacts">
						<text>联系人:&ensp;</text>
						<text>{{item.contact}}</text>
					</view>
					<view class="supplier-phone">
						<text>电话:&ensp;</text>
						<text>{{item.number}}</text>
					</view>
				</view>
				<view class="supplierDelete"><text class="deleteText">删除</text></view>
				<view class="supplierDelete"><text class="checkhomeText">查看主页</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	import conversionPrice from '@/components/conversionPrice.vue'
	import interfaces from '@/utils/interfaces.js'
	export default {
		data() {
			return {
				
				conversionPrice: [
					{
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
				supplierList: [{
					name: '万和国际股份有限公司',
					kind: '口罩，呼吸机',
					url: '深圳市福田区天安国际大天国际6楼405号...',
					contact: '张**',
					number: '188****6685'
				}]
			};
		},
		components: {
			conversionPrice
		},
		methods:{
			getsupplierList(){
				this.request({
					url: interfaces.getSupplierData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
						}
					},
					success: ((res) => {
						console.log(res,222)
						// this.supplierList = res.data.list;
					})
				});
			}
		},
		onLoad(){
			this.getsupplierList()
		}
	}
</script>

<style lang="less">
	.supplier-box {
		width: 659.42rpx;
		background-color: #FFFFFF;
		border-radius: 11px;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 36.23rpx;

		.supplier-header {
			display: flex;

			.title-icon {
				width: 144.92rpx;
				height: 144.92rpx;
			}

			.supplier-content {
				flex: 1;
				padding-left: 18.11rpx;

			}

			.supplier-name {
				font-size: 28.98rpx;
				font-weight: bold;
				line-height: 38.04rpx;

			}

			.supplier-kind {
				width: 307.97rpx;
				height: 48.91rpx;
				background-color: #D9EDE8;
				border-radius: 25.36rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin: 14.49rpx 0rpx;
				font-size: 18.11rpx;

				text {

					letter-spacing: 0px;
					color: #44a78d;
					vertical-align: middle;
					margin-left: 9.05rpx;
				}

			}

			.supplier-url {
				font-size: 21.73rpx;
				color: #4e5a65;
			}
		}

		.supplier-footer {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;

			.supplier-information {
				margin-top: 19.92rpx;

				.supplier-contacts {
					font-size: 19.92rpx;
					color: #4e5a65;
					margin-top: 5px;
				}

				.supplier-phone {
					font-size: 19.92rpx;
					color: #4e5a65;
				}
			}

			.supplierDelete {
				width: 163.04rpx;
				height: 45.28rpx;
				border-radius: 23.55rpx;
				border: solid 1.81rpx #8e8e93;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 38.04rpx;
				margin-right: -18.11rpx;
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

	}
</style>
