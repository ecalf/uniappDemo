<template>
	<view>
		<conversionPrice :conversionPrice="conversionPrice" @gotoprice="gotoPrice"></conversionPrice>
		<view class="supplier-box" v-for="(item, index) in poolList" :key="index">
			<view class="supplier-header">
				<image class="title-icon" :src="item.company_images"></image>
				<view class="supplier-content">
					<text class="supplier-name">{{ item.company_name }}</text>
					<view class="supplier-kind">
						<text>{{ item.business_scope_cate }}</text>
					</view>
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
				<view class="supplierDelete"><text class="deleteText">删除</text></view>
				<view class="supplierDelete"><text class="checkhomeText">查看主页</text></view>
			</view>
		</view>
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
			user_id: '',
			poolfrom: {
				collect_type: 1,
				page_size: 6,
				page_index: 1
			},
			poolList: [],
			current: 0,
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
					name: '我的收藏',
					collect_type: 1
				}
			]
		};
	},
	components: {
		conversionPrice
	},
	methods: {
		gotoPrice(index, item) {
			//传值
			this.current = index;
			// console.log(this.current, 333);
			this.poolfrom.collect_type = item.collect_type;
			// console.log(item.collect_type);
			// if (index == 0) {
			// 	this.getsupplierList(); //更新数据
			// }
			if (index == 2) {
				this.getpoollist();
			}else if(index==0){
				this.getsupplierList();	
			}else{
				this.poolList=""
			}
		},
		getsupplierList() {//全部
			this.request({
				url: interfaces.getPoolData,
				dataType: 'JSON',
				method: 'POST', //请求方式
				data: {
					data: {
						collect_type: this.poolfrom.collect_type,
						page_size: this.poolfrom.page_size,
						page_index: this.poolfrom.page_index
					}
				},
				success: res => {
					var lists = res.data.list;
					console.log('全部',lists);		
					if (res.code == 200) {
						this.poolList= res.data.list;
					}
				}
			});
		},
		getpoollist() {//收藏
			this.request({
				url: interfaces.getPoolData,
				dataType: 'JSON',
				method: 'POST', //请求方式
				data: {
					data: {
						collect_type: this.poolfrom.collect_type,
						page_size: this.poolfrom.page_size,
						page_index: this.poolfrom.page_index
					}
				},
				success: res => {
					var lists = res.data.list;
					console.log('收藏',lists);

					if (res.code == 200) {
						this.poolList= res.data.list;
						// if (lists.length > 0) {
						// 	lists.forEach(item => {
						// 		this.poolList.push(item);
						// 	});
						// } else {
						// 	this.loadingText = '到底了';
						// }
					}
				}
			});
		}
	},
	onLoad() {
		this.user_id = this.uerInfo.user_Id;
		// console.log(this.user_id,2222);
		this.getsupplierList();
		//this.getpoollist()
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
			background-color: #d9ede8;
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
