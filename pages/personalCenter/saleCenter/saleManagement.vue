<template>
	<view>
		<view class="input-view">
			<view class="search-icon" ></view>
			<input type="text" placeholder="搜索订单" v-model="quoto.keyword"/>
		</view>
		<goodsprice :goodsPrice='goodsPrice'></goodsprice>
	</view>
</template>
<script>
	import conversionPrice from '@/components/conversionPrice.vue'
	import goodsprice from '@/components/goodsPrice.vue'
	import interfaces from '@/utils/interfaces.js'
	export default {
		data() {
			return {
				quoto: {
					page_size: 10,
					page_index: 1,
					keyword: '',
					type: 2,
					status: '',
					is_deadtime: '',
					kinds: ''
				},
				goodsPrice: []
			};
		},
		methods: {
			
			getsupplierList() {
				let params = {
					data: {
						page_size: this.quoto.page_size,
						page_index: this.quoto.page_index,
						keyword: this.quoto.keyword,
						type: this.quoto.type,
						status: this.quoto.status,
						is_deadtime: this.quoto.is_deadtime,
						kinds: this.quoto.kinds,
					}
				}
				console.log(params);
				this.request({
					url: interfaces.getMyneedData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data:params,
					success: ((res) => {
						console.log(res, 132)
						this.goodsPrice = res.data.list;
					})
				});
			},
		},

		onLoad() {
			this.getsupplierList()
		},
		components: {
			goodsprice,

		}
	}
</script>

<style lang="less">
	.input-view {
		width: 659.42rpx;
		height: 65.21rpx;
		line-height: 65.21rpx;
		background-color: rgba(142, 142, 147, 0.12);
		border-radius: 18.11rpx;
		margin: 18.11rpx auto 36.23rpx;
		position: relative;

		input {
			display: block;
			height: 65.21rpx;
			line-height: 65.21rpx;
			padding-left: 54.34rpx;
			font-size: 23.55rpx;

			&::-webkit-input-placeholder {
				color: red;
			}
		}

		.search-icon {
			display: inline-block;
			width: 25.36rpx;
			height: 25.36rpx;
			position: absolute;
			top: 50%;
			margin-top: -12.68rpx;
			left: 21.73rpx;
			background: url(~@/static/images/lgicon30.png) center center no-repeat;
			background-size: cover;
		}
	}
</style>
