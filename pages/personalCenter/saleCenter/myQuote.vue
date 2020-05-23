<template>
	<view>
		<view class="input-view">
			<view class="search-icon"></view>
			<input type="text" placeholder="搜索订单"  v-model="quoto.keyword"/>
		</view>
		<goodsprice :goodsPrice='goodsPrice'></goodsprice>
	</view>
</template>

<script>
	import conversionPrice from '../../../components/conversionPrice.vue'
	import goodsprice from '../../../components/goodsPrice.vue'
	import interfaces from '@/utils/interfaces.js'
	export default {
		data() {
			return {
				quoto: {
					page_size: 2,
					page_index: 1,
					keyword: '',
				},
				goodsPrice: [{
					title: '飞利浦呼吸机',
					content: "民用疯疯了这款呼吸机呼吸机呼吸机 卖疯疯疯了疯疯款呼吸机 卖疯疯疯了疯疯...",
					price: '200.000',
					number: '1500',
					time: '2020.02.05-2020.04.05'
				}]
			};
		},
		components: {
			goodsprice
		},
		methods: {
			getMyquote() {
				this.request({
					url: interfaces.getMyquoteData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							page_size: this.quoto.page_size,
							page_index: this.quoto.page_index,
							keyword: this.quoto.keyword,
							
						}
					},
					success: ((res) => {
						console.log(res, 1111)
						this.goodsPrice = res.data;
					})
				});
			}
		},
		onLoad(option) {
			this.getMyquote()
			this.quoto.type = option.type;
			console.log(this.quoto.type)
		},
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
