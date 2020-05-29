<template>
	<view>
		<!-- <conversionPrice :conversionPrice="conversionPrice" @gotoprice="gotoPrice"></conversionPrice> -->
		<view class="supplier-box" v-for="(item, index) in goodsPrice" :key="index">
			<view class="supplier-header">
				<image class="title-icon" :src="item.company_images"></image>
				<view class="supplier-content">
					<view class="supplier-name">{{ item.company_name }}</view>
					<view class="supplier-kind">{{ item.business_scope_cate }}</view>
					<text class="supplier-url">{{ item.addr }}</text>
				</view>
			</view>
			<view class="supplier-footer">
				<view class="supplier-information">
					<view class="supplier-contacts">
						<text>联系人:</text>
						<text>{{ item.contact_name }}</text>
					</view>
					<view class="supplier-phone">
						<text>电话:</text>
						<text>{{ item.contact_phone }}</text>
					</view>
				</view>
				<!-- <view class="supplierDelete"><text class="deleteText">删除</text></view> -->
				<view class="supplierDelete"><text class="checkhomeText">查看主页</text></view>
			</view>
		</view>
		<view v-if="goodsPrice.length" class="loading-text">{{ loadingText }}</view>
	</view>
</template>

<script>
import conversionPrice from '@/components/conversionPrice.vue';
import interfaces from '@/utils/interfaces.js';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['hasLogin', 'uerInfo']),
	data() {
		return {
			//user_id: '',
			poolfrom: {
				collect_type:1,
			},
			pageSize: 6, //分页大小
			pageNum: 1, //页码
			loadingText: "正在加载....",
			goodsPrice: [],
			current: 0,
		};
	},
	methods: {
		getpoollist() {//收藏
			this.request({
				url: interfaces.getPoolData,
				dataType: 'JSON',
				method: 'POST', //请求方式
				data: {
					data: {
						collect_type: this.poolfrom.collect_type,
						page_size: this.pageSize,
						page_index: this.pageNum
					}
				},
				success: (res) => {
					if (res.code == 200) {
						let lists = res.data.list;
						if (lists.length < this.pageSize) {
							this.loadingText = "到底了";
						}
						if (lists.length > 0) {
							lists.forEach(item => {
								this.goodsPrice.push(item);
							})
						} else {
							this.loadingText = "到底了";
						} 
					}
				}
			});
		},
		// 上拉加载
		onReachBottom() {
			//debugger
		this.pageNum++;
		this.getpoollist();
		}
	},
	onLoad() {
		//this.user_id = this.uerInfo.user_Id;
		// console.log(this.user_id,2222);
		this.getpoollist();
	},
	onReachBottom() {
		this.poolfrom.page_index++;
		this.getpoollist();
	}
};
</script>

<style lang="less">
.supplier-box {
	width: 659.42rpx;
	background-color: #ffffff;
	border-radius: 11px;
	box-sizing: border-box;
	margin: 0 auto 18.11rpx;
	padding: 36.23rpx;

	.supplier-header {
		display: flex;

		.title-icon {
			width: 144.92rpx;
			height: 144.92rpx;
			background:#E2E2E2;
			border-radius:5px;
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
			padding:0 18.11rpx;
			background-color: #d9ede8;
			display: inline-block;
			margin: 14.49rpx 0rpx;
			font-size: 18.11rpx;
			color: #44a78d;
			border-radius:18.11rpx;
			
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
			line-height:39.85rpx;
			.supplier-contacts {
				font-size: 19.92rpx;
				color: #4E5A65;
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
			border: solid 1px #44a78d;
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
.loading-text {
	padding: 20px 0;
	text-align: center;
}
</style>
