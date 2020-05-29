<template>
	<view>
<!-- 		<view class="input-view">
			<view class="search-icon"></view>
			<input type="text" placeholder="搜索订单"  v-model="quoto.keyword"/>
		</view> -->
		<goodsprice :goodsPrice='goodsPrice'  @update-value="updateValue"></goodsprice>
	</view>
</template>

<script>
	import conversionPrice from '../../../components/conversionPrice.vue'
	import goodsprice from '../../../components/goodsPrice.vue'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			goodsprice
		},
		data() {
			return {
				quoto: {
					page_size:6,
					page_index: 1,
					keyword: '',
					type:2,
					is_quoted:1
				},
				needId: '', //需求id
				goodsPrice: [],
			};
		},
		methods: {
			getMyquote() {
				// debugger
				this.request({
					url: interfaces.getMyquoteData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							page_size: this.quoto.page_size,
							page_index: this.quoto.page_index,
							keyword: this.quoto.keyword,
							type: this.quoto.type,
							is_quoted:this.quoto.is_quoted
						}
					},
					success: ((res) => {
						console.log(res, 1111)
						this.goodsPrice = res.data.list;
						if (res.code == 200) {
							let lists = res.data.list;
							for (let i = 0; i < lists.length; i++) { //转成数组
								let serviceData = lists[i].service_cnname.split(',');
								lists[i].service_cnname = serviceData;
							}
							console.log(lists,362)
						}
					})
				});
			},
			updateValue(item) {
				console.log(item,235)
				this.needId = item.id;
				this.request({
					url: interfaces.getSatusData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: {
						data: {
							need_id:this.needId,
							status: -1,
						}
					},
					success: res => {
						uni.showModal({
							title: '提示',
							content: '您确定要删除此项吗？',
							success: res => {
								console.log(res);
								if (res.confirm) {
									this.goodsPrice.splice(item, 1);
								}
								
								
							}
						})
					}
				});
			},
		},
		onLoad(option) {
			this.getMyquote()
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
